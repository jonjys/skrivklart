import { createServerFn } from "@tanstack/react-start";
import { bundleCovers, getBundle, getProduct, getSellable } from "./catalog";
import { getSql } from "./db";
import { issuePass, paymentsLive } from "./pass";
import { launchCodeActive, SITE_URL } from "./site";
import { allow } from "./limits.server";
import {
  checkoutExpiry,
  paidSkrivklartCheckout,
  paymentPreviewAllowed,
  type CheckoutSession,
} from "./payment-policy";
import { uid } from "./utils";

/** How long an unlock lasts in the buyer's browser. */
export function passDays(slug: string) {
  return getBundle(slug)?.days ?? 365;
}

function docPath(slug: string) {
  return slug === "myndighetsbrev" ? "/brev" : `/dokument/${slug}`;
}

/** The document the buyer was writing, when a bundle covers it. */
function returnDoc(slug: string, returnTo: string | undefined) {
  if (!returnTo || returnTo === slug || !getProduct(returnTo)) return undefined;
  const bundle = getBundle(slug);
  return bundle && bundleCovers(bundle, returnTo) ? returnTo : undefined;
}

function cancelPath(slug: string, returnTo: string | undefined) {
  if (returnTo) return docPath(returnTo);
  if (getBundle(slug)) return "/priser";
  return docPath(slug);
}

async function stripeCheckoutUrl(opts: {
  slug: string;
  name: string;
  priceKr: number;
  token: string;
  origin: string;
  returnTo?: string;
}) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  const body = new URLSearchParams();
  body.set("mode", "payment");
  // Stripe fills in {CHECKOUT_SESSION_ID}; /tack verifies it server side.
  const back = opts.returnTo ? `&doc=${encodeURIComponent(opts.returnTo)}` : "";
  body.set("success_url", `${opts.origin}/tack?session_id={CHECKOUT_SESSION_ID}${back}`);
  body.set("cancel_url", `${opts.origin}${cancelPath(opts.slug, opts.returnTo)}`);
  body.set("client_reference_id", opts.token);
  // Prices live in the catalog, so a price change is a code change, not a dashboard chore.
  body.set("line_items[0][price_data][currency]", "sek");
  body.set("line_items[0][price_data][unit_amount]", String(opts.priceKr * 100));
  body.set("line_items[0][price_data][product_data][name]", `Skrivklart – ${opts.name}`);
  body.set("line_items[0][quantity]", "1");
  body.set("metadata[slug]", opts.slug);
  body.set("metadata[app]", "skrivklart");
  body.set("metadata[token]", opts.token);
  body.set("metadata[consent_version]", "2026-10-20");
  body.set("consent_collection[terms_of_service]", "required");
  body.set(
    "custom_text[terms_of_service_acceptance][message]",
    `Jag godkänner [köpvillkoren](${SITE_URL}/villkor) och begär att det digitala innehållet levereras direkt. Jag förstår att ångerrätten då upphör. Rätten att reklamera fel påverkas inte.`,
  );
  if (opts.returnTo) body.set("metadata[return]", opts.returnTo);
  body.set("payment_intent_data[description]", `Skrivklart – ${opts.name}`);
  // An empty code field sends people off hunting for codes; show it only during a campaign.
  if (launchCodeActive()) body.set("allow_promotion_codes", "true");
  // The Stripe account is shared (Nytto Labs); show Skrivklart's own name and colours.
  body.set("branding_settings[display_name]", "Skrivklart");
  body.set("branding_settings[background_color]", "#f3efe6");
  body.set("branding_settings[button_color]", "#b4472b");
  body.set("branding_settings[border_style]", "rounded");
  body.set("branding_settings[icon][type]", "url");
  body.set("branding_settings[icon][url]", "https://www.skrivklart.se/profil.png");
  body.set("locale", "sv");
  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) {
    console.error("stripe checkout failed", res.status, await res.text().catch(() => ""));
    return null;
  }
  const json = (await res.json()) as { url?: string };
  return json.url ?? null;
}

export const createOrder = createServerFn({ method: "POST" })
  .validator((input: { slug: string; origin?: string; returnTo?: string }) => ({
    slug: String(input?.slug ?? ""),
    origin: typeof input?.origin === "string" ? input.origin.slice(0, 200) : undefined,
    returnTo: typeof input?.returnTo === "string" ? input.returnTo.slice(0, 60) : undefined,
  }))
  .handler(async ({ data }) => {
    const item = getSellable(data.slug);
    if (!item) return { ok: false as const, error: "Okänt dokument." };
    const returnTo = returnDoc(item.slug, data.returnTo);

    // Local preview without Stripe: unlock straight away so the flow can be tried.
    if (!paymentsLive()) {
      if (!paymentPreviewAllowed(process.env)) {
        return {
          ok: false as const,
          error: "Betalningen är tillfälligt otillgänglig. Försök igen senare.",
        };
      }
      return {
        ok: true as const,
        checkoutUrl: null,
        pass: await issuePass(item.slug, Date.now() + passDays(item.slug) * 86_400_000),
      };
    }

    if (!allow("checkout"))
      return { ok: false as const, error: "För många betalningsförsök. Försök igen senare." };

    const token = uid();
    try {
      const sql = await getSql();
      await sql`
        insert into orders (product_slug, amount_kr, status, access_token)
        values (${item.slug}, ${item.priceKr}, ${"pending"}, ${token})
      `;
    } catch {
      /* orders table is bookkeeping only */
    }

    // Never redirect a paid session or its recovery reference to a client-supplied host.
    const origin = SITE_URL;
    let checkoutUrl: string | null = null;
    if (origin.startsWith("http")) {
      try {
        checkoutUrl = await stripeCheckoutUrl({
          slug: item.slug,
          name: item.name,
          priceKr: item.priceKr,
          token,
          origin,
          returnTo,
        });
      } catch {
        checkoutUrl = null;
      }
    }
    if (!checkoutUrl) {
      return {
        ok: false as const,
        error: "Betalningen kunde inte starta. Försök igen om en stund.",
      };
    }
    return { ok: true as const, checkoutUrl, pass: null };
  });

/** Confirms a Checkout Session with Stripe and hands back a signed unlock pass. */
export const verifyCheckout = createServerFn({ method: "POST" })
  .validator((input: { sessionId: string }) => ({
    sessionId: typeof input?.sessionId === "string" ? input.sessionId.slice(0, 256) : "",
  }))
  .handler(async ({ data }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key || !/^cs_[A-Za-z0-9_]+$/.test(data.sessionId)) {
      return { ok: false as const, error: "Ogiltig betalning." };
    }
    if (!allow("verify"))
      return { ok: false as const, error: "För många försök. Vänta en stund och ladda om sidan." };
    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(data.sessionId)}`,
      { headers: { Authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(10_000) },
    );
    if (!res.ok) return { ok: false as const, error: "Kunde inte hitta betalningen." };
    const session = (await res.json()) as CheckoutSession;
    const slug = session.metadata?.slug ?? "";
    const paid = paidSkrivklartCheckout(session);
    if (!paid || !getSellable(slug)) {
      return { ok: false as const, error: "Betalningen är inte klar ännu." };
    }

    const token = session.client_reference_id;
    if (token) {
      try {
        const sql = await getSql();
        const rows = await sql<{ product_slug: string }>`
          update orders set status = 'paid'
          where access_token = ${token} and status <> 'paid'
          returning product_slug
        `;
        if (rows[0]) {
          await sql`insert into funnel_events (name, product_slug) values ('paid', ${slug})`;
        }
      } catch {
        /* bookkeeping only */
      }
    }

    // The unlock runs from the purchase, not from the latest visit to /tack, so an old
    // or shared success link cannot extend a 30-day bundle forever.
    const until = checkoutExpiry(session.created, passDays(slug));
    if (until === null) {
      return { ok: false as const, error: "Det här köpet har gått ut. Köp igen för att låsa upp." };
    }
    return {
      ok: true as const,
      slug,
      isBundle: Boolean(getBundle(slug)),
      pass: await issuePass(slug, until),
      until,
      doc: returnDoc(slug, session.metadata?.return),
    };
  });

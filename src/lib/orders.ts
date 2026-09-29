import { createServerFn } from "@tanstack/react-start";
import { getProduct, PRO_PRICE_KR } from "./catalog";
import { getSql } from "./db";
import { issuePass, paymentsLive } from "./pass";
import { JOB_PACK_PRICE_KR, JOB_PACK_SLUG, PRO_SLUG, STRIPE_PRICES } from "./stripe-map";
import { uid } from "./utils";

/** How long an unlock lasts in the buyer's browser. */
export function passDays(slug: string) {
  return slug === PRO_SLUG ? 31 : slug === JOB_PACK_SLUG ? 30 : 365;
}

function cancelPath(slug: string) {
  if (slug === PRO_SLUG || slug === JOB_PACK_SLUG) return "/priser";
  if (slug === "myndighetsbrev") return "/brev";
  return `/dokument/${slug}`;
}

async function stripeCheckoutUrl(opts: {
  slug: string;
  token: string;
  origin: string;
  priceId: string;
}) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  const body = new URLSearchParams();
  body.set("mode", opts.slug === PRO_SLUG ? "subscription" : "payment");
  // Stripe fills in {CHECKOUT_SESSION_ID}; /tack verifies it server side.
  body.set("success_url", `${opts.origin}/tack?session_id={CHECKOUT_SESSION_ID}`);
  body.set("cancel_url", `${opts.origin}${cancelPath(opts.slug)}`);
  body.set("client_reference_id", opts.token);
  body.set("line_items[0][price]", opts.priceId);
  body.set("line_items[0][quantity]", "1");
  body.set("metadata[slug]", opts.slug);
  body.set("metadata[token]", opts.token);
  body.set("allow_promotion_codes", "true");
  body.set("locale", "sv");
  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  if (!res.ok) {
    console.error("stripe checkout failed", res.status, await res.text().catch(() => ""));
    return null;
  }
  const json = (await res.json()) as { url?: string };
  return json.url ?? null;
}

export const createOrder = createServerFn({ method: "POST" })
  .validator((input: { slug: string; origin?: string }) => input)
  .handler(async ({ data }) => {
    const isPro = data.slug === PRO_SLUG;
    const isPack = data.slug === JOB_PACK_SLUG;
    const product = isPro || isPack ? null : getProduct(data.slug);
    if (!isPro && !isPack && !product) return { ok: false as const, error: "Okänt dokument." };

    // Local preview without Stripe: unlock straight away so the flow can be tried.
    if (!paymentsLive()) {
      return {
        ok: true as const,
        checkoutUrl: null,
        pass: await issuePass(data.slug, passDays(data.slug)),
      };
    }

    const amount = isPro ? PRO_PRICE_KR : isPack ? JOB_PACK_PRICE_KR : product!.priceKr;
    const token = uid();
    try {
      const sql = await getSql();
      await sql`
        insert into orders (product_slug, amount_kr, status, access_token)
        values (${data.slug}, ${amount}, ${"pending"}, ${token})
      `;
    } catch {
      /* orders table is bookkeeping only */
    }

    const origin = (data.origin ?? "").replace(/\/$/, "");
    const priceId = STRIPE_PRICES[data.slug];
    let checkoutUrl: string | null = null;
    if (origin.startsWith("http") && priceId) {
      try {
        checkoutUrl = await stripeCheckoutUrl({ slug: data.slug, token, origin, priceId });
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
  .validator((input: { sessionId: string }) => input)
  .handler(async ({ data }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key || !/^cs_[A-Za-z0-9_]+$/.test(data.sessionId)) {
      return { ok: false as const, error: "Ogiltig betalning." };
    }
    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(data.sessionId)}`,
      { headers: { Authorization: `Bearer ${key}` } },
    );
    if (!res.ok) return { ok: false as const, error: "Kunde inte hitta betalningen." };
    const session = (await res.json()) as {
      status?: string;
      payment_status?: string;
      client_reference_id?: string | null;
      metadata?: { slug?: string };
    };
    const slug = session.metadata?.slug ?? "";
    const paid =
      session.status === "complete" &&
      (session.payment_status === "paid" || session.payment_status === "no_payment_required");
    if (!paid || !slug) {
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

    const days = passDays(slug);
    return {
      ok: true as const,
      slug,
      pass: await issuePass(slug, days),
      until: Date.now() + days * 86_400_000,
    };
  });

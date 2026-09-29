import { createFileRoute } from "@tanstack/react-router";
import { getSql } from "@/lib/db";

export const Route = createFileRoute("/api/stripe/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!secret) return new Response("webhook not configured", { status: 503 });
        const raw = await request.text();

        const sig = request.headers.get("stripe-signature") ?? "";
        if (!(await verifyStripeSignature(raw, sig, secret))) {
          return new Response("bad signature", { status: 400 });
        }

        let event: { type?: string; data?: { object?: Record<string, unknown> } };
        try {
          event = JSON.parse(raw) as typeof event;
        } catch {
          return new Response("invalid json", { status: 400 });
        }

        const type = event.type ?? "";
        if (
          type !== "checkout.session.completed" &&
          type !== "payment_intent.succeeded" &&
          type !== "checkout.session.async_payment_succeeded"
        ) {
          return Response.json({ received: true });
        }

        const obj = event.data?.object ?? {};
        const token =
          (typeof obj.client_reference_id === "string" && obj.client_reference_id) ||
          (typeof (obj.metadata as { token?: string } | undefined)?.token === "string"
            ? (obj.metadata as { token: string }).token
            : "");
        const slug =
          typeof (obj.metadata as { slug?: string } | undefined)?.slug === "string"
            ? (obj.metadata as { slug: string }).slug
            : "";

        if (token) {
          try {
            const sql = await getSql();
            const rows = await sql<{ product_slug: string }>`
              update orders set status = 'paid'
              where access_token = ${token} and status <> 'paid'
              returning product_slug
            `;
            const paidSlug = rows[0]?.product_slug ?? slug;
            if (paidSlug) {
              await sql`
                insert into funnel_events (name, product_slug) values ('paid', ${paidSlug})
              `;
            }
          } catch {
            /* db optional */
          }
        }

        return Response.json({ received: true });
      },
    },
  },
});

async function verifyStripeSignature(payload: string, header: string, secret: string) {
  let t = "";
  const v1: string[] = [];
  for (const part of header.split(",")) {
    const [k, ...rest] = part.split("=");
    const v = rest.join("=");
    if (k?.trim() === "t") t = v;
    else if (k?.trim() === "v1") v1.push(v);
  }
  if (!t || !v1.length) return false;
  // Reject replays older than five minutes, as Stripe's own libraries do.
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${t}.${payload}`));
  const hex = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return v1.some((candidate) => safeEqual(candidate, hex));
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

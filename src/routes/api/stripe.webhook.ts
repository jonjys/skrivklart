import { createFileRoute } from "@tanstack/react-router";
import { getSellable } from "@/lib/catalog";
import { getSql } from "@/lib/db";
import { paidSkrivklartCheckout, type CheckoutSession } from "@/lib/payment-policy";
import { verifyStripeSignature } from "@/lib/stripe-signature";

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

        let event: { id?: string; type?: string; data?: { object?: Record<string, unknown> } };
        try {
          event = JSON.parse(raw) as typeof event;
        } catch {
          return new Response("invalid json", { status: 400 });
        }

        const type = event.type ?? "";
        if (
          type !== "checkout.session.completed" &&
          type !== "checkout.session.async_payment_succeeded"
        ) {
          return Response.json({ received: true });
        }

        const obj = event.data?.object ?? {};
        // Completing Checkout is not proof of payment for delayed payment methods.
        // Ignore unpaid sessions and events from other apps on the shared account.
        if (!paidSkrivklartCheckout(obj as CheckoutSession)) return Response.json({ received: true });
        const token =
          (typeof obj.client_reference_id === "string" && obj.client_reference_id) ||
          (typeof (obj.metadata as { token?: string } | undefined)?.token === "string"
            ? (obj.metadata as { token: string }).token
            : "");
        const slug =
          typeof (obj.metadata as { slug?: string } | undefined)?.slug === "string"
            ? (obj.metadata as { slug: string }).slug
            : "";

        if (!getSellable(slug)) return Response.json({ received: true });
        if (token) {
          try {
            const sql = await getSql();
            const rows = await sql<{ product_slug: string }>`
              update orders set status = 'paid'
              where access_token = ${token} and status <> 'paid'
              returning product_slug
            `;
            const paidSlug = rows[0]?.product_slug;
            if (paidSlug) {
              await sql`
                insert into funnel_events (name, product_slug) values ('paid', ${paidSlug})
              `;
            }
          } catch {
            /* db optional */
          }
        }

        // Tell the owner about every completed sale (payment_intent events would double it).
        const paid =
          type === "checkout.session.async_payment_succeeded" ||
          (type === "checkout.session.completed" && obj.payment_status === "paid");
        // The Stripe account is shared with other apps: only Skrivklart's own products count.
        const item = getSellable(slug);
        if (paid && item) {
          const kr = typeof obj.amount_total === "number" ? Math.round(obj.amount_total / 100) : null;
          const { notifyOwner } = await import("@/lib/notify.server");
          await notifyOwner({
            subject: `Ny försäljning: ${item.name}${kr !== null ? ` – ${kr} kr` : ""}`,
            // Stripe may deliver the same event more than once.
            idempotencyKey: `sale-${typeof obj.id === "string" ? obj.id : (event.id ?? token)}`,
            text: [
              `Någon har just köpt ${item.name} på skrivklart.se.`,
              kr !== null ? `Belopp: ${kr} kr` : "",
              `Tid: ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })}`,
              "",
              "Detaljer finns i Stripe.",
            ]
              .filter((l, i) => l || i > 2)
              .join("\n"),
          });
        }

        return Response.json({ received: true });
      },
    },
  },
});

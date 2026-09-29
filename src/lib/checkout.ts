import { recordEvent } from "./ai";
import { createOrder } from "./orders";

export type CheckoutResult =
  | { kind: "redirect" }
  | { kind: "unlocked"; pass: string }
  | { kind: "error"; error: string };

/**
 * Sends the buyer to Stripe Checkout. Unlocking happens on /tack once the
 * server has confirmed the session. Without Stripe configured (local
 * preview) the server returns a pass directly.
 */
export async function startCheckout(slug: string): Promise<CheckoutResult> {
  try {
    const order = await createOrder({ data: { slug, origin: window.location.origin } });
    void recordEvent({ data: { name: "checkout", slug } });
    if (!order.ok) return { kind: "error", error: order.error };
    if (order.checkoutUrl) {
      window.location.href = order.checkoutUrl;
      return { kind: "redirect" };
    }
    if (order.pass) return { kind: "unlocked", pass: order.pass };
    return { kind: "error", error: "Betalningen kunde inte starta." };
  } catch {
    return { kind: "error", error: "Nätverksfel. Försök igen." };
  }
}

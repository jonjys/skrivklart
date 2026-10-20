/** Free unlocks are a local development feature, never a deployed fallback. */
export function paymentPreviewAllowed(env: Record<string, string | undefined>) {
  return !env.VERCEL && (env.NODE_ENV === "development" || env.SKRIVKLART_DEMO === "true");
}

export type CheckoutSession = {
  id?: string;
  status?: string;
  payment_status?: string;
  currency?: string | null;
  client_reference_id?: string | null;
  created?: number;
  metadata?: { app?: string; slug?: string; token?: string; return?: string } | null;
};

/** Also recognises Skrivklart's older sessions, which predate metadata.app. */
export function paidSkrivklartCheckout(session: CheckoutSession) {
  const meta = session.metadata;
  return Boolean(
    /^cs_[A-Za-z0-9_]+$/.test(session.id ?? "") &&
    session.status === "complete" &&
    (session.payment_status === "paid" || session.payment_status === "no_payment_required") &&
    session.currency === "sek" &&
    meta?.slug &&
    (meta.app === "skrivklart" || !meta.app) &&
    meta.token &&
    meta.token === session.client_reference_id,
  );
}

export function checkoutExpiry(created: unknown, days: number, now = Date.now()) {
  if (
    typeof created !== "number" ||
    !Number.isFinite(created) ||
    created <= 0 ||
    created * 1000 > now + 60_000
  )
    return null;
  const until = created * 1000 + days * 86_400_000;
  return until > now ? until : null;
}

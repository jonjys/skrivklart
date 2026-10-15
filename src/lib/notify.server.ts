/**
 * Mail to the owner through Resend: sales from the Stripe webhook and messages from the
 * contact form. Needs RESEND_API_KEY, NOTIFY_FROM (a sender on a verified Resend domain)
 * and NOTIFY_EMAIL (where it goes). Missing config means nothing is sent.
 */
export function notifyConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.NOTIFY_FROM && process.env.NOTIFY_EMAIL);
}

export async function notifyOwner(opts: {
  subject: string;
  text: string;
  replyTo?: string;
  /** Same key within 24 h sends once, across instances (Resend dedupes it). */
  idempotencyKey?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFY_FROM;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !from || !to) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        ...(opts.idempotencyKey ? { "Idempotency-Key": opts.idempotencyKey.slice(0, 256) } : {}),
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((a) => a.trim()).filter(Boolean),
        subject: opts.subject,
        text: opts.text,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) console.error("[notify] resend", res.status, await res.text().catch(() => ""));
    return res.ok;
  } catch (err) {
    console.error("[notify] resend", err);
    return false;
  }
}

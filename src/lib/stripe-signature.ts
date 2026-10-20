/** Verify the raw request body and a fresh Stripe v1 HMAC. */
export async function verifyStripeSignature(
  payload: string,
  header: string,
  secret: string,
  now = Date.now(),
) {
  const fields = header.split(",").map((p) => p.trim().split("="));
  const timestamp = fields.find(([k]) => k === "t")?.[1] ?? "";
  if (!/^\d+$/.test(timestamp) || Math.abs(now / 1000 - Number(timestamp)) > 300) return false;
  const signatures = fields.filter(([k, v]) => k === "v1" && /^[a-f0-9]{64}$/.test(v ?? ""));
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );
  for (const [, hex] of signatures) {
    const bytes = Uint8Array.from(hex.match(/../g)!, (b) => parseInt(b, 16));
    if (await crypto.subtle.verify("HMAC", key, bytes, enc.encode(`${timestamp}.${payload}`)))
      return true;
  }
  return false;
}

import { bundleCovers, getBundle } from "./catalog";

/**
 * Stateless unlock passes. After Stripe confirms a Checkout Session the server
 * signs `{slug, exp}` with PASS_SECRET; the browser keeps the pass and sends it
 * with every paid request. No database needed.
 *
 * Passes and sealed texts issued before PASS_SECRET existed were keyed on
 * STRIPE_SECRET_KEY, so that key is still accepted for reading. Never rotate
 * PASS_SECRET: every paid unlock depends on it.
 *
 * Without STRIPE_SECRET_KEY (local preview) payments are off and everything
 * unlocks, so the flow can still be tried end to end.
 */

const enc = new TextEncoder();
const dec = new TextDecoder();

function stripeKey() {
  const key = typeof process !== "undefined" ? process.env.STRIPE_SECRET_KEY : undefined;
  return key && key.trim() ? key.trim() : null;
}

export function paymentsLive() {
  return stripeKey() !== null;
}

/** Signing secret for new passes and seals. */
function signingSecret() {
  const own = typeof process !== "undefined" ? process.env.PASS_SECRET?.trim() : undefined;
  return own || stripeKey();
}

/** Every secret a pass or seal may have been made with, newest first. */
function readingSecrets() {
  const own = typeof process !== "undefined" ? process.env.PASS_SECRET?.trim() : undefined;
  return [own, stripeKey()].filter((k, i, all): k is string => Boolean(k) && all.indexOf(k) === i);
}

function b64url(bytes: Uint8Array) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function fromB64url(s: string) {
  const bin = atob(s.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((s.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function hmacKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(`skrivklart-pass:${secret}`),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function aesKey(secret: string) {
  const raw = await crypto.subtle.digest("SHA-256", enc.encode(`skrivklart-seal:${secret}`));
  return crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt", "decrypt"]);
}

/** Signs an unlock for `slug` that stops working at `expiresAt` (ms since epoch). */
export async function issuePass(slug: string, expiresAt: number) {
  const secret = signingSecret();
  if (!secret || !stripeKey()) return "dev";
  const body = b64url(enc.encode(JSON.stringify({ s: slug, e: expiresAt })));
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(body));
  return `${body}.${b64url(new Uint8Array(sig))}`;
}

/** True when `pass` pays for `slug`, directly or through a bundle. */
export async function passCovers(pass: string | undefined, slug: string) {
  if (!stripeKey()) return true;
  if (!pass) return false;
  const [body, sig] = pass.split(".");
  if (!body || !sig) return false;
  try {
    let ok = false;
    for (const secret of readingSecrets()) {
      ok = await crypto.subtle.verify("HMAC", await hmacKey(secret), fromB64url(sig), enc.encode(body));
      if (ok) break;
    }
    if (!ok) return false;
    const claim = JSON.parse(dec.decode(fromB64url(body))) as { s?: string; e?: number };
    if (typeof claim.e !== "number" || claim.e < Date.now()) return false;
    if (claim.s === slug) return true;
    const bundle = claim.s ? getBundle(claim.s) : undefined;
    return Boolean(bundle && bundleCovers(bundle, slug));
  } catch {
    return false;
  }
}

/** Encrypt a value so the browser can hold it without reading it. */
export async function seal(value: unknown) {
  const json = enc.encode(JSON.stringify(value));
  const secret = signingSecret();
  if (!secret || !stripeKey()) return `dev.${b64url(json)}`;
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await aesKey(secret), json);
  return `${b64url(iv)}.${b64url(new Uint8Array(ct))}`;
}

export async function unseal<T>(sealed: string): Promise<T | null> {
  const [a, b] = sealed.split(".");
  if (!a || !b) return null;
  if (!stripeKey()) {
    try {
      return a === "dev" ? (JSON.parse(dec.decode(fromB64url(b))) as T) : null;
    } catch {
      return null;
    }
  }
  for (const secret of readingSecrets()) {
    try {
      const pt = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: fromB64url(a) },
        await aesKey(secret),
        fromB64url(b),
      );
      return JSON.parse(dec.decode(pt)) as T;
    } catch {
      /* try the next key */
    }
  }
  return null;
}

export const LOCKED_ERROR = "Betalningen kunde inte verifieras. Lås upp dokumentet igen.";

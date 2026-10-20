import { bundleCovers, getBundle } from "./catalog.ts";
import { paymentPreviewAllowed } from "./payment-policy.ts";

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

/** What a sealed value is for. Each purpose has its own key, so one cannot be opened as another. */
export type SealPurpose = "brev" | "doc";

async function aesKey(secret: string, purpose: SealPurpose) {
  // "brev" keeps the original derivation so letters sealed before purposes existed still open.
  const label =
    purpose === "brev" ? `skrivklart-seal:${secret}` : `skrivklart-seal:${purpose}:${secret}`;
  const raw = await crypto.subtle.digest("SHA-256", enc.encode(label));
  return crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt", "decrypt"]);
}

/** Signs an unlock for `slug` that stops working at `expiresAt` (ms since epoch). */
export async function issuePass(slug: string, expiresAt: number) {
  const secret = signingSecret();
  if (!secret || !stripeKey()) {
    if (paymentPreviewAllowed(process.env)) return "dev";
    throw new Error("Payments are not configured");
  }
  const body = b64url(enc.encode(JSON.stringify({ s: slug, e: expiresAt })));
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(body));
  return `${body}.${b64url(new Uint8Array(sig))}`;
}

/** True when `pass` pays for `slug`, directly or through a bundle. */
export async function passCovers(pass: string | undefined, slug: string) {
  if (!stripeKey()) return paymentPreviewAllowed(process.env);
  if (!pass) return false;
  const parts = pass.split(".");
  // Exactly body.signature in base64url: no extra segments, padding or whitespace, so one
  // purchase has one spelling (rate limits key on it).
  if (parts.length !== 2 || !/^[\w-]+$/.test(parts[0]) || !/^[\w-]+$/.test(parts[1])) return false;
  const [body, sig] = parts;
  try {
    let ok = false;
    for (const secret of readingSecrets()) {
      ok = await crypto.subtle.verify(
        "HMAC",
        await hmacKey(secret),
        fromB64url(sig),
        enc.encode(body),
      );
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

/** Stable id of a pass for rate limits: the signed body, which no one can vary. */
export function passId(pass: string | undefined) {
  return pass?.split(".")[0] ?? "";
}

/** Encrypt a value so the browser can hold it without reading it. */
export async function seal(value: unknown, purpose: SealPurpose) {
  const json = enc.encode(JSON.stringify(value));
  const secret = signingSecret();
  if (!secret || !stripeKey()) {
    if (paymentPreviewAllowed(process.env)) return `dev.${b64url(json)}`;
    throw new Error("Payments are not configured");
  }
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    await aesKey(secret, purpose),
    json,
  );
  return `${b64url(iv)}.${b64url(new Uint8Array(ct))}`;
}

export async function unseal<T>(sealed: string, purpose: SealPurpose): Promise<T | null> {
  const [a, b] = sealed.split(".");
  if (!a || !b) return null;
  if (!stripeKey()) {
    if (!paymentPreviewAllowed(process.env)) return null;
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
        await aesKey(secret, purpose),
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

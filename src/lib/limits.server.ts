import { getRequestHeader } from "@tanstack/react-start/server";

/**
 * In-memory rate limits for the endpoints that spend money (Claude/xAI) or send mail.
 *
 * Production has no database, so the old daily counters lived in a throwaway PGLite per
 * function instance. These buckets are also per instance, but they are checked and
 * counted synchronously before any await, so parallel requests cannot all slip past,
 * and they key on the visitor's IP (or a verified pass). The Anthropic workspace spend
 * limit is the hard backstop; this keeps one visitor or script from reaching it.
 */

type Bucket = { n: number; reset: number };

const g = globalThis as typeof globalThis & {
  __skrivklartLimits__?: Map<string, Bucket>;
  __skrivklartSwept__?: number;
};
const buckets = (g.__skrivklartLimits__ ??= new Map());

const HOUR = 3_600_000;
const DAY = 24 * HOUR;
const MAX_BUCKETS = 50_000;

function sweep(now: number) {
  if ((g.__skrivklartSwept__ ?? 0) > now - 60_000 && buckets.size < MAX_BUCKETS) return;
  g.__skrivklartSwept__ = now;
  for (const [k, b] of buckets) if (b.reset <= now) buckets.delete(k);
  // Still too many live buckets: drop the oldest. Limits loosen, memory stays bounded.
  for (const k of buckets.keys()) {
    if (buckets.size <= MAX_BUCKETS * 0.8) break;
    buckets.delete(k);
  }
}

function room(key: string, limit: number, now: number) {
  const b = buckets.get(key);
  return !b || b.reset <= now || b.n < limit;
}

function count(key: string, windowMs: number, now: number) {
  const b = buckets.get(key);
  if (!b || b.reset <= now) buckets.set(key, { n: 1, reset: now + windowMs });
  else b.n += 1;
}

/** Best guess at the visitor's IP. Vercel sets x-vercel-forwarded-for / x-real-ip itself. */
export function clientIp() {
  const vercel = getRequestHeader("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  const real = getRequestHeader("x-real-ip")?.trim();
  const xff = getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
  return (vercel || real || xff || "unknown").slice(0, 64);
}

type Rule = { perHour: number; perDay: number; globalPerDay: number };

const RULES = {
  preview: { perHour: 8, perDay: 25, globalPerDay: 400 },
  full: { perHour: 10, perDay: 30, globalPerDay: 400 },
  rewrite: { perHour: 10, perDay: 30, globalPerDay: 300 },
  support: { perHour: 20, perDay: 60, globalPerDay: 600 },
  sambo: { perHour: 10, perDay: 30, globalPerDay: 500 },
  brev: { perHour: 6, perDay: 20, globalPerDay: 300 },
  contact: { perHour: 3, perDay: 6, globalPerDay: 100 },
} satisfies Record<string, Rule>;

export type LimitName = keyof typeof RULES;

function keys(name: LimitName, who: string) {
  const rule: Rule = RULES[name];
  return [
    [`${name}:h:${who}`, rule.perHour, HOUR],
    [`${name}:d:${who}`, rule.perDay, DAY],
    [`${name}:global`, rule.globalPerDay, DAY],
  ] as const;
}

/** True when every bucket has room. Counts nothing. */
export function check(name: LimitName, key?: string) {
  const now = Date.now();
  return keys(name, key || clientIp()).every(([k, limit]) => room(k, limit, now));
}

/** Counts one use in every bucket. */
export function consume(name: LimitName, key?: string) {
  const now = Date.now();
  sweep(now);
  for (const [k, , windowMs] of keys(name, key || clientIp())) count(k, windowMs, now);
}

/** Gives back one use, e.g. when the work it paid for failed. */
export function refund(name: LimitName, key?: string) {
  for (const [k] of keys(name, key || clientIp())) {
    const b = buckets.get(k);
    if (b && b.n > 0) b.n -= 1;
  }
}

/**
 * True, and counted, when this request may go ahead. `key` replaces the IP, e.g. a verified
 * pass id for paid calls, so customers behind one shared IP do not block each other.
 */
export function allow(name: LimitName, key?: string) {
  if (!check(name, key)) return false;
  consume(name, key);
  return true;
}

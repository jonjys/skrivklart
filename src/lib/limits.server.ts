import { getRequestHeader } from "@tanstack/react-start/server";

/**
 * In-memory rate limits for the endpoints that spend money (Claude/xAI) or send mail.
 *
 * Production has no database, so the old daily counters lived in a throwaway PGLite per
 * function instance. These buckets are also per instance, but they are checked and
 * incremented synchronously before any await, so parallel requests cannot all slip past,
 * and they key on the visitor's IP. The Anthropic workspace spend limit is the hard
 * backstop; this keeps one visitor or script from reaching it.
 */

type Bucket = { n: number; reset: number };

const g = globalThis as typeof globalThis & { __skrivklartLimits__?: Map<string, Bucket> };
const buckets = (g.__skrivklartLimits__ ??= new Map());

const HOUR = 3_600_000;
const DAY = 24 * HOUR;

function hit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  if (buckets.size > 20_000) {
    for (const [k, b] of buckets) if (b.reset <= now) buckets.delete(k);
  }
  const b = buckets.get(key);
  if (!b || b.reset <= now) {
    buckets.set(key, { n: 1, reset: now + windowMs });
    return true;
  }
  if (b.n >= limit) return false;
  b.n += 1;
  return true;
}

/** Best guess at the visitor's IP. Vercel sets x-real-ip / x-vercel-forwarded-for itself. */
export function clientIp() {
  const vercel = getRequestHeader("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  const real = getRequestHeader("x-real-ip")?.trim();
  const xff = getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
  return vercel || real || xff || "unknown";
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

/**
 * True when this request may go ahead. `key` overrides the IP, e.g. a pass for paid calls,
 * so customers behind one shared IP do not block each other.
 */
export function allow(name: LimitName, key?: string) {
  const rule: Rule = RULES[name];
  const who = key ?? clientIp();
  // Order matters: check the narrowest bucket first so a refused call does not use up the others.
  return (
    hit(`${name}:h:${who}`, rule.perHour, HOUR) &&
    hit(`${name}:d:${who}`, rule.perDay, DAY) &&
    hit(`${name}:global`, rule.globalPerDay, DAY)
  );
}

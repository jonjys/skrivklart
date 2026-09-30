import { createServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { PAY_METHODS } from "./site";

/** Stripe payment method ids we name on the site, in display order. */
const LABELS: [string, string][] = [
  ["swish", "Swish"],
  ["card", "Kort"],
  ["apple_pay", "Apple Pay"],
  ["google_pay", "Google Pay"],
  ["klarna", "Klarna"],
];

type Pref = { available?: boolean; display_preference?: { value?: string } };

let cache: { at: number; methods: string[] } | null = null;

/**
 * Reads which payment methods are switched on in Stripe, so turning on Swish
 * in the Dashboard shows up on the site without a code change.
 */
export const getPayMethods = createServerFn({ method: "GET" }).handler(async () => {
  if (cache && Date.now() - cache.at < 60 * 60 * 1000) return cache.methods;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return PAY_METHODS;
  try {
    const res = await fetch("https://api.stripe.com/v1/payment_method_configurations?limit=20", {
      headers: { Authorization: `Bearer ${key}` },
    });
    if (!res.ok) return PAY_METHODS;
    const json = (await res.json()) as {
      data?: ({ is_default?: boolean; active?: boolean; application?: string | null } & Record<string, unknown>)[];
    };
    const config = json.data?.find((c) => c.is_default && c.active && !c.application);
    if (!config) return PAY_METHODS;
    const methods = LABELS.filter(([id]) => {
      const pref = config[id] as Pref | undefined;
      return pref?.available && pref.display_preference?.value === "on";
    }).map(([, label]) => label);
    if (!methods.length) return PAY_METHODS;
    cache = { at: Date.now(), methods };
    return methods;
  } catch {
    return PAY_METHODS;
  }
});

let clientCache: string[] | null = null;

/** The live list on the client, falling back to PAY_METHODS until it loads. */
export function usePayMethods() {
  const [methods, setMethods] = useState<string[]>(clientCache ?? PAY_METHODS);
  useEffect(() => {
    if (clientCache) return;
    let alive = true;
    void getPayMethods()
      .then((m) => {
        clientCache = m;
        if (alive) setMethods(m);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  return methods;
}

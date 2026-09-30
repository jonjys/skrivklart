# Stripe live

Account: AI Commerce OS (acct_1U1ToQBEo0Yzuylw)

Checkout Sessions use inline `price_data`: prices live in `src/lib/catalog.ts`
(`PRODUCTS[].priceKr`, `BUNDLES[].priceKr`). No Price objects or Payment Links
to keep in sync. All purchases are one-time payments in SEK.

Unlocks are verified server side (`verifyCheckout` in `src/lib/orders.ts`) and
stored as signed passes (`src/lib/pass.ts`).

## Payment methods

The "Betala med …" line on the site is read live from the account's default
payment method configuration (`src/lib/pay-methods.ts`, cached for an hour).
Turning on Swish under Settings → Payment methods → platform account shows it
on the site automatically. Checkout already uses dynamic payment methods, so
no code change is needed.

Old Payment Links from before September 2026 are deactivated; the site only
sells through Checkout Sessions created in `src/lib/orders.ts`.

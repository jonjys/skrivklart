# Stripe live

Account: AI Commerce OS (acct_1U1ToQBEo0Yzuylw)

Checkout Sessions use inline `price_data`: prices live in `src/lib/catalog.ts`
(`PRODUCTS[].priceKr`, `BUNDLES[].priceKr`). No Price objects or Payment Links
to keep in sync. All purchases are one-time payments in SEK.

Unlocks are verified server side (`verifyCheckout` in `src/lib/orders.ts`) and
stored as signed passes (`src/lib/pass.ts`).

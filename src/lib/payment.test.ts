import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { afterEach, test } from "node:test";
import { checkoutExpiry, paidSkrivklartCheckout, paymentPreviewAllowed } from "./payment-policy.ts";
import { issuePass, passCovers, seal, unseal } from "./pass.ts";
import { verifyStripeSignature } from "./stripe-signature.ts";

const original = { ...process.env };
afterEach(() => {
  process.env = { ...original };
});

test("free unlocks only work in local development or an explicit local demo", () => {
  assert.equal(paymentPreviewAllowed({ NODE_ENV: "development" }), true);
  assert.equal(paymentPreviewAllowed({ NODE_ENV: "production" }), false);
  assert.equal(paymentPreviewAllowed({}), false);
  assert.equal(paymentPreviewAllowed({ NODE_ENV: "production", SKRIVKLART_DEMO: "true" }), true);
  assert.equal(
    paymentPreviewAllowed({ NODE_ENV: "development", VERCEL: "1", SKRIVKLART_DEMO: "true" }),
    false,
  );
});

const session = {
  id: "cs_live_example",
  status: "complete",
  payment_status: "paid",
  currency: "sek",
  client_reference_id: "unique-token",
  metadata: { app: "skrivklart", token: "unique-token", slug: "samboavtal" },
};

test("only settled Skrivklart sessions qualify, including the old session format", () => {
  assert.equal(paidSkrivklartCheckout(session), true);
  assert.equal(
    paidSkrivklartCheckout({ ...session, metadata: { ...session.metadata, app: undefined } }),
    true,
  );
  assert.equal(paidSkrivklartCheckout({ ...session, payment_status: "no_payment_required" }), true);
  for (const invalid of [
    { ...session, payment_status: "unpaid" },
    { ...session, status: "open" },
    { ...session, currency: "eur" },
    { ...session, client_reference_id: "another-order" },
    { ...session, metadata: { ...session.metadata, app: "another-app" } },
    { ...session, metadata: null },
    { ...session, id: "pi_not_a_checkout" },
  ])
    assert.equal(paidSkrivklartCheckout(invalid), false);
});

test("revisiting an old success link cannot extend access or use a missing purchase date", () => {
  const now = Date.now();
  const created = Math.floor((now - 86_400_000) / 1000);
  assert.equal(checkoutExpiry(created, 30, now), created * 1000 + 30 * 86_400_000);
  for (const invalid of [undefined, NaN, Infinity, -1, 0, now / 1000 + 120]) {
    assert.equal(checkoutExpiry(invalid, 30, now), null);
  }
  assert.equal(checkoutExpiry(created, 1, now), null);
});

test("production without a Stripe key refuses passes and plaintext seals", async () => {
  delete process.env.STRIPE_SECRET_KEY;
  process.env.NODE_ENV = "production";
  process.env.VERCEL = "1";
  process.env.SKRIVKLART_DEMO = "true";
  assert.equal(await passCovers("dev", "samboavtal"), false);
  await assert.rejects(issuePass("samboavtal", Date.now() + 60_000));
  await assert.rejects(seal({ secret: "text" }, "doc"));
  assert.equal(await unseal("dev.e30", "doc"), null);
});

test("paid passes reject tampering, expiry, other products and extra segments", async () => {
  process.env.STRIPE_SECRET_KEY = "sk_test_unit_only";
  process.env.PASS_SECRET = "unit-signing-secret";
  const pass = await issuePass("samboavtal", Date.now() + 60_000);
  assert.equal(await passCovers(pass, "samboavtal"), true);
  assert.equal(await passCovers(pass, "cv-text"), false);
  assert.equal(await passCovers(pass + ".x", "samboavtal"), false);
  assert.equal(await passCovers("dev", "samboavtal"), false);
  assert.equal(await passCovers("x" + pass, "samboavtal"), false);
  assert.equal(
    await passCovers(await issuePass("samboavtal", Date.now() - 1000), "samboavtal"),
    false,
  );
});

test("encrypted documents cannot be opened as cheaper letter analyses", async () => {
  process.env.STRIPE_SECRET_KEY = "sk_test_unit_only";
  process.env.PASS_SECRET = "unit-signing-secret";
  const value = { text: "confidential test document" };
  const sealed = await seal(value, "doc");
  assert.equal(sealed.includes(value.text), false);
  assert.deepEqual(await unseal(sealed, "doc"), value);
  assert.equal(await unseal(sealed, "brev"), null);
});

test("webhooks require an authentic, fresh signature over the unchanged raw body", async () => {
  const secret = "whsec_test_only";
  const payload = JSON.stringify({ type: "checkout.session.completed" });
  const now = Date.now();
  const timestamp = String(Math.floor(now / 1000));
  const signature = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
  const header = `t=${timestamp},v1=${signature}`;
  assert.equal(await verifyStripeSignature(payload, header, secret, now), true);
  assert.equal(await verifyStripeSignature(payload + " ", header, secret, now), false);
  assert.equal(await verifyStripeSignature(payload, header, "wrong-secret", now), false);
  assert.equal(await verifyStripeSignature(payload, header, secret, now + 301_000), false);
  assert.equal(await verifyStripeSignature(payload, `t=NaN,v1=${signature}`, secret, now), false);
  assert.equal(
    await verifyStripeSignature(payload, `t=${timestamp},v1=garbage,v1=${signature}`, secret, now),
    true,
  );
});

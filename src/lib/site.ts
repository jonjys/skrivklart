export const SITE_NAME = "Skrivklart";
export const SITE_URL = "https://www.skrivklart.se";
export const SITE_TAGLINE = "Du bär allt. Vi skriver breven.";
export const SITE_DESCRIPTION =
  "Avtal om underhållsbidrag, överklagande till Försäkringskassan, avbetalningsplan och brev till skola och socialtjänsten. Gratis utkast, hela texten från 59 kr. Inget konto.";

/** Shown next to every pay button. Add "Swish" here once it is switched on in Stripe. */
export const PAY_METHODS = ["Kort", "Apple Pay", "Google Pay", "Klarna"];

/** Launch code, created in Stripe as a 50 % promotion code. Hidden after it expires. */
export const LAUNCH_CODE = { code: "FORSTA", until: Date.UTC(2026, 9, 9, 22, 0), label: "t.o.m. 9 oktober" };

export function launchCodeActive(now = Date.now()) {
  return now < LAUNCH_CODE.until;
}

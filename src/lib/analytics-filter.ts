import type { BeforeSendEvent } from "@vercel/analytics/react";

/** Cookiefri sidvisningsstatistik. Skickar aldrig query eller fragment, och inget alls vid Do Not Track/GPC. */
export function beforeSend(
  event: BeforeSendEvent,
  nav: { doNotTrack?: string | null; globalPrivacyControl?: boolean } = typeof navigator === "undefined" ? {} : (navigator as never),
): BeforeSendEvent | null {
  if (nav.doNotTrack === "1" || nav.globalPrivacyControl === true) return null;
  const url = new URL(event.url);
  return { ...event, url: `${url.origin}${url.pathname}` };
}

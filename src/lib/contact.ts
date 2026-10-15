import { createServerFn } from "@tanstack/react-start";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** The contact form: reaches a person, unlike the support chat. */
export const sendContact = createServerFn({ method: "POST" })
  .validator((input: { email: string; message: string; ref?: string }) => ({
    email: String(input?.email ?? "").trim().slice(0, 200),
    message: String(input?.message ?? "").trim().slice(0, 4000),
    ref: typeof input?.ref === "string" ? input.ref.trim().slice(0, 200) : "",
  }))
  .handler(async ({ data }) => {
    if (!EMAIL.test(data.email)) {
      return { ok: false as const, error: "Skriv en e-postadress som vi kan svara till." };
    }
    if (data.message.length < 5) return { ok: false as const, error: "Skriv några ord om vad det gäller." };
    // Counted before the send so a burst cannot slip past; refunded if it fails.
    const { allow, refund } = await import("./limits.server");
    if (!allow("contact")) {
      return { ok: false as const, error: "Du har skickat flera meddelanden nyss. Vi svarar på dem först." };
    }
    const { notifyOwner } = await import("./notify.server");
    const sent = await notifyOwner({
      subject: `Skrivklart: meddelande från ${data.email}`,
      replyTo: data.email,
      text: `${data.message}\n\n— ${data.email}${data.ref ? `\nGäller: ${data.ref}` : ""}`,
    });
    if (!sent) {
      refund("contact");
      return {
        ok: false as const,
        error: "Meddelandet gick inte iväg just nu. Försök igen om en stund.",
      };
    }
    return { ok: true as const };
  });

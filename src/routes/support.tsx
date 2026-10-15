import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { askSupport } from "@/lib/ai";
import { sendContact } from "@/lib/contact";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support – fråga vilket brev du behöver | Skrivklart" },
      {
        name: "description",
        content:
          "Fråga Rådgivaren vilket brev eller avtal du behöver, eller skriv till oss om en betalning. Svar direkt i chatten, och en människa svarar på mejl.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.skrivklart.se/support" }],
  }),
});

type Msg = { role: "user" | "assistant"; content: string };

function SupportPage() {
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Jag är Rådgivaren. Säg vilket dokument du behöver – eller vad som fastnat – så pekar jag på rätt typ och pris.",
    },
  ]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setBusy(true);
    const res = await askSupport({ data: { messages: next } });
    setBusy(false);
    if (res.ok) setMessages([...next, { role: "assistant", content: res.text }]);
    else setMessages([...next, { role: "assistant", content: res.error }]);
  }

  return (
    <SiteFrame>
      <PageHero
        size="sm"
        kicker="Svar direkt, dygnet runt"
        title="Support"
        sub="Berätta vad som hänt, så pekar Rådgivaren på rätt brev och pris. Gäller det en betalning? Skriv till oss längre ner, så svarar en människa."
      />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="rounded-2xl border-2 border-line bg-paper p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="min-h-72 space-y-3">
            {messages.map((m, i) => (
              <p
                key={i}
                className={
                  m.role === "user"
                    ? "ml-8 rounded-2xl rounded-br-md bg-pine px-4 py-2.5 text-sm leading-relaxed text-pine-fg"
                    : "mr-8 rounded-2xl rounded-bl-md bg-bg-elevated px-4 py-2.5 text-sm leading-relaxed text-ink"
                }
              >
                {m.content}
              </p>
            ))}
            {busy ? <p className="text-sm text-subtle">Skriver…</p> : null}
          </div>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="T.ex. den andra föräldern betalar inte underhåll"
              aria-label="Meddelande"
            />
            <Button type="submit" size="icon" variant="accent" disabled={busy} aria-label="Skicka">
              <Send className="size-4" />
            </Button>
          </form>
        </div>
        <ContactForm />
      </div>
    </SiteFrame>
  );
}

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ref, setRef] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setBusy(true);
    setError(null);
    const res = await sendContact({ data: { email, message, ref } }).catch(() => null);
    setBusy(false);
    if (!res) return setError("Nätverksfel. Försök igen.");
    if (!res.ok) return setError(res.error);
    setDone(true);
  }

  return (
    <section
      id="kontakt"
      className="mt-10 scroll-mt-24 rounded-2xl border-2 border-line bg-paper p-5 shadow-[var(--shadow-soft)] sm:p-6"
    >
      <h2 className="font-display text-2xl tracking-tight">Skriv till en människa</h2>
      <p className="mt-1 text-sm text-muted">
        Har du betalat men inte fått din text, eller undrar något om ett köp? Vi svarar på mejl,
        oftast samma dag.
      </p>
      {done ? (
        <p role="status" className="mt-4 rounded-xl bg-bg-elevated p-4 text-sm text-ink">
          Tack, meddelandet är skickat. Vi svarar till {email}.
        </p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            void submit();
          }}
        >
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            Din e-post
            <Input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            Vad gäller det?
            <Textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="T.ex. jag betalade för samboavtalet men texten kom inte fram."
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            <span>
              Kvitto eller dokument <span className="font-normal text-subtle">(valfritt)</span>
            </span>
            <Input
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              placeholder="T.ex. Samboavtal, betalt i går kväll"
            />
          </label>
          {error ? (
            <p role="alert" className="text-sm text-danger">
              {error}
            </p>
          ) : null}
          <Button type="submit" variant="accent" size="lg" disabled={busy} className="self-start">
            Skicka
          </Button>
          <p className="text-xs text-subtle">
            Skriv inte personnummer. Vi använder din e-post bara för att svara dig.
          </p>
        </form>
      )}
    </section>
  );
}

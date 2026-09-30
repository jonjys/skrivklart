import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { askSupport } from "@/lib/ai";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support – fråga vilket brev du behöver | Skrivklart" },
      {
        name: "description",
        content:
          "Fråga Rådgivaren vilket brev eller avtal du behöver: underhåll, Försäkringskassan, inkasso, skola, bostad. Svar direkt.",
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
        sub="Berätta vad som hänt, så pekar Rådgivaren på rätt brev och pris. Inte juridisk rådgivning."
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
      </div>
    </SiteFrame>
  );
}

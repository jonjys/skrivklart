import { Link } from "@tanstack/react-router";
import {
  Check,
  Copy,
  Download,
  Loader2,
  Lock,
  Printer,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { generateDocument, recordEvent, rewriteDocument } from "@/lib/ai";
import { BUNDLES, bundleValueKr, type DocProduct } from "@/lib/catalog";
import { startCheckout } from "@/lib/checkout";
import { useSkrivklart } from "@/lib/store";
import { sek } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const INCLUDED = [
  "Hela dokumentet, färdigt att skicka eller skriva under",
  "Kopiera, ladda ner eller skriv ut",
  "Skriv om kortare eller formellare – ingår",
  "Sparas i din webbläsare. Inget konto.",
];

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function Generator({ product }: { product: DocProduct }) {
  const draft = useSkrivklart((s) => s.drafts[product.slug]);
  const setAnswers = useSkrivklart((s) => s.setAnswers);
  const setPreview = useSkrivklart((s) => s.setPreview);
  const setFull = useSkrivklart((s) => s.setFull);
  const unlock = useSkrivklart((s) => s.unlock);
  const relock = useSkrivklart((s) => s.relock);
  const pass = useSkrivklart((s) => s.passFor(product.slug));
  const unlocked = pass !== undefined;

  const answers = draft?.answers ?? {};
  const preview = draft?.preview ?? "";
  const full = draft?.full ?? "";
  const shown = unlocked && full ? full : preview;

  const [busy, setBusy] = useState<"preview" | "full" | "pay" | "rewrite" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const docRef = useRef<HTMLElement>(null);
  const autoFull = useRef(false);
  const upsell = BUNDLES.find((b) => b.includes !== "all" && b.includes.includes(product.slug));

  const missing = useMemo(() => {
    return product.fields.filter((f) => f.required && !answers[f.id]?.trim());
  }, [product.fields, answers]);

  function patch(id: string, value: string) {
    setAnswers(product.slug, { ...answers, [id]: value });
  }

  async function write(mode: "preview" | "full") {
    if (missing.length && mode === "preview") {
      setError(`Fyll i: ${missing.map((f) => f.label.toLowerCase()).join(", ")}.`);
      return;
    }
    setError(null);
    setBusy(mode);
    let res: Awaited<ReturnType<typeof generateDocument>>;
    try {
      res = await generateDocument({
        data: { slug: product.slug, answers, mode, pass: mode === "full" ? pass : undefined },
      });
    } catch {
      setBusy(null);
      setError("Nätverksfel. Försök igen.");
      return;
    }
    setBusy(null);
    if (!res.ok) {
      if ("locked" in res && res.locked) relock(product.slug);
      setError(res.error);
      return;
    }
    if (mode === "preview") {
      setPreview(product.slug, res.text);
      if (window.matchMedia("(max-width: 1023px)").matches) {
        requestAnimationFrame(() => docRef.current?.scrollIntoView({ behavior: "smooth" }));
      }
      if (unlocked) void write("full");
    } else {
      setFull(product.slug, res.text);
    }
  }

  // Back from Stripe with a draft and a fresh unlock: write the full text right away.
  useEffect(() => {
    if (unlocked && preview && !full && !autoFull.current && busy === null) {
      autoFull.current = true;
      void write("full");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked, preview, full]);

  async function pay() {
    setBusy("pay");
    setError(null);
    const result = await startCheckout(product.slug);
    if (result.kind === "redirect") return;
    setBusy(null);
    if (result.kind === "error") {
      setError(result.error);
      return;
    }
    unlock(product.slug, result.pass);
    toast.success("Dokumentet är olåst.");
  }

  async function rewrite(instruction: string) {
    const text = full || preview;
    if (!text) return;
    setBusy("rewrite");
    const res = await rewriteDocument({
      data: { slug: product.slug, text, instruction, pass },
    }).catch(() => ({ ok: false as const, error: "Nätverksfel. Försök igen." }));
    setBusy(null);
    if (res.ok) {
      setFull(product.slug, res.text);
      toast.success("Omskrivet.");
    } else {
      if ("locked" in res && res.locked) relock(product.slug);
      toast.error(res.error);
    }
  }

  function copy() {
    void navigator.clipboard.writeText(shown);
    void recordEvent({ data: { name: "copy", slug: product.slug } });
    toast.success("Kopierat.");
  }

  function save(blob: Blob, ext: string) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${product.slug}.${ext}`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function download() {
    save(new Blob([shown], { type: "text/plain;charset=utf-8" }), "txt");
  }

  function downloadHtml() {
    const html = `<!doctype html><html lang="sv"><head><meta charset="utf-8"><title>${escapeHtml(product.name)}</title>
<style>
  body{font-family:Georgia,"Iowan Old Style",serif;max-width:40rem;margin:2.5rem auto;padding:0 1.25rem;line-height:1.65;color:#1c1b18;background:#fffdf8}
  h1{font-size:1.15rem;font-weight:600;letter-spacing:-0.02em}
  pre{white-space:pre-wrap;font-family:inherit;font-size:1.05rem}
</style></head><body>
<h1>${escapeHtml(product.name)}</h1>
<pre>${escapeHtml(shown)}</pre>
</body></html>`;
    save(new Blob([html], { type: "text/html;charset=utf-8" }), "html");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
      <form
        className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-5 shadow-[var(--shadow-soft)]"
        onSubmit={(e) => {
          e.preventDefault();
          void write("preview");
        }}
      >
        <div>
          <p className="text-xs font-medium tracking-wide text-muted uppercase">Uppgifter</p>
          <h2 className="mt-1 font-display text-2xl tracking-tight">{product.name}</h2>
          <p className="mt-1 text-sm text-muted">{product.outcome}</p>
        </div>

        {product.fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1.5">
            <Label htmlFor={field.id}>
              {field.label}
              {field.required ? null : <span className="font-normal text-subtle"> (valfritt)</span>}
            </Label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.id}
                value={answers[field.id] ?? ""}
                placeholder={field.placeholder}
                onChange={(e) => patch(field.id, e.target.value)}
                required={field.required}
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                value={answers[field.id] ?? ""}
                onChange={(e) => patch(field.id, e.target.value)}
                required={field.required}
                className="h-11 w-full rounded-lg border border-line bg-paper px-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                id={field.id}
                value={answers[field.id] ?? ""}
                placeholder={field.placeholder}
                onChange={(e) => patch(field.id, e.target.value)}
                required={field.required}
              />
            )}
            {field.hint ? <p className="text-xs text-subtle">{field.hint}</p> : null}
          </div>
        ))}

        {error ? (
          <p role="alert" className="text-sm text-danger">
            {error}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={busy !== null} className="w-full">
          {busy === "preview" ? <Loader2 className="size-4 animate-spin" /> : null}
          {preview ? "Skriv nytt utkast" : "Skriv gratis utkast"}
        </Button>
        <p className="text-xs text-subtle">
          {unlocked
            ? "Olåst – du har redan betalat för det här dokumentet."
            : `Utkastet är gratis och kräver ingen betalning. Hela dokumentet kostar ${sek(product.priceKr)}.`}
        </p>
      </form>

      <div className="relative">
        <article
          ref={docRef}
          className="min-h-80 scroll-mt-4 rounded-xl border border-line bg-paper p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <p className="text-xs font-medium tracking-wide text-muted uppercase">Dokument</p>
          {shown ? (
            <pre className="mt-4 font-serif text-[1.05rem] leading-relaxed whitespace-pre-wrap text-ink">
              {shown}
            </pre>
          ) : busy === "preview" ? (
            <div className="mt-6 space-y-3" aria-live="polite">
              <p className="flex items-center gap-2 text-sm text-muted">
                <Loader2 className="size-4 animate-spin" /> Skriver ditt utkast…
              </p>
              {[92, 100, 84, 96, 70].map((w) => (
                <div key={w} className="h-3 animate-pulse rounded bg-line" style={{ width: `${w}%` }} />
              ))}
            </div>
          ) : (
            <div className="mt-6 max-w-md space-y-3 text-muted">
              <p>Fyll i uppgifterna. Utkastet landar här, gratis, på under en minut.</p>
              <p className="text-sm text-subtle">
                Du ser början av texten innan du betalar något.
              </p>
            </div>
          )}

          {preview && !unlocked ? (
            <div data-print-hide className="relative mt-2">
              {/* The locked rest, suggested but unreadable. */}
              <div aria-hidden className="pointer-events-none space-y-2.5 select-none blur-[3px]">
                {[98, 91, 100, 86, 95, 60, 0, 97, 89, 100, 74].map((w, i) =>
                  w ? (
                    <div key={i} className="h-3 rounded bg-line/80" style={{ width: `${w}%` }} />
                  ) : (
                    <div key={i} className="h-3" />
                  ),
                )}
              </div>
              <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-paper/0 via-paper/70 to-paper" />
            </div>
          ) : null}

          {preview && !unlocked ? (
            <div
              data-print-hide
              className="relative mt-4 rounded-xl border border-pine/30 bg-bg-elevated p-5 sm:p-6"
            >
              <p className="flex items-center gap-2 font-display text-xl tracking-tight">
                <Lock className="size-4 text-pine" />
                Resten av texten är skriven
              </p>
              <p className="mt-1 text-sm text-muted">
                Lås upp hela {product.name.toLowerCase()} för {sek(product.priceKr)} — en gång,
                ingen prenumeration.
              </p>
              <ul className="mt-4 space-y-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-pine" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                size="lg"
                className="mt-5 w-full"
                onClick={() => void pay()}
                disabled={busy !== null}
              >
                {busy === "pay" ? <Loader2 className="size-4 animate-spin" /> : null}
                Lås upp hela texten · {sek(product.priceKr)}
              </Button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-subtle">
                <ShieldCheck className="size-3.5" />
                Säker kortbetalning via Stripe. Tillbaka hit direkt efteråt.
              </p>
              {upsell ? (
                <div className="mt-4 rounded-lg border border-line bg-paper p-4 text-sm">
                  <p className="font-medium text-ink">
                    Behöver du fler?{" "}
                    <span className="text-muted">
                      {upsell.name}: {upsell.includes.length} dokument för {sek(upsell.priceKr)}
                    </span>
                  </p>
                  <p className="mt-1 text-muted">
                    Värt {sek(bundleValueKr(upsell))} styckvis.{" "}
                    <Link
                      to="/priser"
                      hash={upsell.slug}
                      className="font-medium text-pine underline underline-offset-2"
                    >
                      Se paketet
                    </Link>
                  </p>
                </div>
              ) : null}
              <p className="mt-4 text-[0.7rem] leading-relaxed text-subtle">
                Digitalt innehåll som levereras direkt. Genom att låsa upp samtycker du till att
                ångerrätten upphör när texten visas.
              </p>
            </div>
          ) : null}

          {preview && unlocked && !full ? (
            <div className="mt-8" data-print-hide>
              <Button
                type="button"
                className="w-full"
                disabled={busy !== null}
                onClick={() => void write("full")}
              >
                {busy === "full" ? <Loader2 className="size-4 animate-spin" /> : null}
                {busy === "full" ? "Skriver hela dokumentet…" : "Skriv hela dokumentet"}
              </Button>
            </div>
          ) : null}
        </article>

        {shown ? (
          <div className="mt-4 flex flex-wrap gap-2" data-print-hide>
            <Button type="button" variant="outline" size="sm" onClick={copy} disabled={!unlocked}>
              <Copy className="size-3.5" />
              Kopiera
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={download} disabled={!unlocked}>
              <Download className="size-3.5" />
              Textfil
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={downloadHtml} disabled={!unlocked}>
              <Download className="size-3.5" />
              HTML
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              disabled={!unlocked}
            >
              <Printer className="size-3.5" />
              Skriv ut
            </Button>
            {unlocked && full ? (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={busy !== null}
                  onClick={() => void rewrite("Gör texten kortare, behåll innehållet.")}
                >
                  {busy === "rewrite" ? (
                    <Loader2 className="size-3.5 animate-spin" />
                  ) : (
                    <RefreshCw className="size-3.5" />
                  )}
                  Kortare
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={busy !== null}
                  onClick={() => void rewrite("Gör tonen mer formell och saklig.")}
                >
                  Formellare
                </Button>
              </>
            ) : null}
          </div>
        ) : null}

        <p className="mt-4 text-xs leading-relaxed text-subtle">
          Skrivklart skriver utkast. Det är inte juridisk rådgivning och ersätter inte en jurist,
          fackförbund eller myndighetens egna blanketter. Läs igenom innan du skickar eller
          skriver under.
        </p>
      </div>
    </div>
  );
}

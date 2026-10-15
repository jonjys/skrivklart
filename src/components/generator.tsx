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
import {
  generateDocument,
  recordEvent,
  rewriteDocument,
  unlockDocument,
  type RewriteKind,
} from "@/lib/ai";
import { BUNDLES, bundleValueKr, type DocProduct } from "@/lib/catalog";
import { startCheckout } from "@/lib/checkout";
import { useSkrivklart } from "@/lib/store";
import { usePayMethods } from "@/lib/pay-methods";
import { BuyBundleButton } from "./buy-bundle-button";
import { LAUNCH_CODE, launchCodeActive } from "@/lib/site";
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
  const payMethods = usePayMethods();
  // Saved drafts and unlocks live in localStorage, which the server can't see.
  // Render them only after mount so the server HTML and first client render match.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const storedDraft = useSkrivklart((s) => s.drafts[product.slug]);
  const draft = mounted ? storedDraft : undefined;
  const setAnswers = useSkrivklart((s) => s.setAnswers);
  const setPreview = useSkrivklart((s) => s.setPreview);
  const setFull = useSkrivklart((s) => s.setFull);
  const unlock = useSkrivklart((s) => s.unlock);
  const relock = useSkrivklart((s) => s.relock);
  const storedPass = useSkrivklart((s) => s.passFor(product.slug));
  const pass = mounted ? storedPass : undefined;
  const unlocked = pass !== undefined;

  const answers = draft?.answers ?? {};
  const preview = draft?.preview ?? "";
  const full = draft?.full ?? "";
  const outline = draft?.outline ?? [];
  const restWords = draft?.restWords ?? 0;
  const shown = unlocked && full ? full : preview;

  const [busy, setBusy] = useState<"preview" | "full" | "pay" | "rewrite" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const docRef = useRef<HTMLElement>(null);
  const autoFull = useRef(false);
  const upsell = BUNDLES.find((b) => b.includes !== "all" && b.includes.includes(product.slug));

  const missing = useMemo(() => {
    return product.fields.filter((f) => f.required && !(answers[f.id]?.trim() || f.defaultValue));
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
        // The pass rides along on previews too, so customers draw on their own limit.
        data: { slug: product.slug, answers, mode, pass },
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
    if ("outline" in res) {
      setPreview(product.slug, res.text, {
        sealed: res.sealed,
        outline: res.outline,
        restWords: res.restWords,
      });
      if (window.matchMedia("(max-width: 1023px)").matches) {
        requestAnimationFrame(() => docRef.current?.scrollIntoView({ behavior: "smooth" }));
      }
      if (unlocked) void reveal(res.sealed);
    } else {
      setFull(product.slug, res.text, res.sealed);
    }
  }

  /** Opens the full text the preview already wrote. Older drafts without one are written anew. */
  async function reveal(sealedText?: string) {
    const sealed = sealedText ?? draft?.sealed;
    if (!sealed) return write("full");
    setError(null);
    setBusy("full");
    const res = await unlockDocument({ data: { slug: product.slug, sealed, pass } }).catch(() => null);
    setBusy(null);
    if (!res) {
      setError("Nätverksfel. Försök igen.");
      return;
    }
    if (!res.ok) {
      if ("locked" in res && res.locked) relock(product.slug);
      setError(res.error);
      return;
    }
    setFull(product.slug, res.text, res.sealed ?? sealed);
  }

  // Back from Stripe with a draft and a fresh unlock: open the full text right away.
  useEffect(() => {
    if (unlocked && preview && !full && !autoFull.current && busy === null) {
      autoFull.current = true;
      void reveal();
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

  async function rewrite(instruction: RewriteKind) {
    let sealed = draft?.sealed;
    setBusy("rewrite");
    if (!sealed) {
      // Texts unlocked before sealing existed: write the document once on the server
      // (paid, from the saved answers) so there is a server copy to rewrite.
      const fresh = await generateDocument({
        data: { slug: product.slug, answers, mode: "full", pass },
      }).catch(() => null);
      if (fresh?.ok && "sealed" in fresh && fresh.sealed) {
        sealed = fresh.sealed;
        setFull(product.slug, fresh.text, fresh.sealed);
      } else {
        setBusy(null);
        toast.error("Skriv ett nytt utkast först, så kan det skrivas om.");
        return;
      }
    }
    const res = await rewriteDocument({
      data: { slug: product.slug, sealed, instruction, pass },
    }).catch(() => ({ ok: false as const, error: "Nätverksfel. Försök igen." }));
    setBusy(null);
    if (res.ok) {
      setFull(product.slug, res.text, res.sealed);
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
      <form
        className="flex flex-col gap-4 rounded-2xl border-2 border-line bg-paper p-5 shadow-[var(--shadow-soft)]"
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
                value={answers[field.id] ?? field.defaultValue ?? ""}
                onChange={(e) => patch(field.id, e.target.value)}
                required={field.required}
                className="h-11 w-full rounded-lg border border-line bg-paper px-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
              >
                {field.defaultValue ? null : <option value="">{field.placeholder}</option>}
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

        <Button type="submit" size="xl" variant="accent" disabled={busy !== null} className="w-full">
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
          className="min-h-80 scroll-mt-20 rounded-2xl border-2 border-line bg-paper p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <p className="text-xs font-medium tracking-wide text-muted uppercase">Dokument</p>
          {shown ? (
            <pre className="mt-4 font-serif text-[1.05rem] leading-relaxed whitespace-pre-wrap text-ink">
              {shown}
            </pre>
          ) : busy === "preview" ? (
            <div className="mt-6 space-y-3" aria-live="polite">
              <p className="flex items-center gap-2 text-sm text-muted">
                <Loader2 className="size-4 animate-spin" /> Skriver hela texten åt dig – det tar
                oftast 20–40 sekunder.
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
            <div
              data-print-hide
              className="mt-4 rounded-xl border border-dashed border-line bg-bg-elevated/60 p-4"
            >
              <p className="text-sm font-semibold text-ink">
                Det här står i resten
                {restWords > 20 ? (
                  <span className="font-normal text-muted">
                    {" "}
                    – ca {Math.round(restWords / 10) * 10} ord till
                  </span>
                ) : null}
              </p>
              {outline.length ? (
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  {outline.map((h) => (
                    <li key={h} className="flex gap-2">
                      <Lock className="mt-0.5 size-3.5 shrink-0 text-subtle" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-sm text-muted">
                  Resten av texten, avslutningen och raderna för underskrift.
                </p>
              )}
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
                Få hela texten för {sek(product.priceKr)} – en gång, ingen prenumeration.
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
                size="xl"
                variant="accent"
                className="mt-5 h-auto min-h-14 w-full py-3 text-center whitespace-normal"
                onClick={() => void pay()}
                disabled={busy !== null}
              >
                {busy === "pay" ? <Loader2 className="size-4 animate-spin" /> : null}
                Lås upp hela texten · {sek(product.priceKr)}
              </Button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-subtle">
                <ShieldCheck className="size-3.5" />
                {payMethods.join(" · ")} via Stripe. Tillbaka hit direkt efteråt.
              </p>
              {launchCodeActive() ? (
                <p className="mt-2 text-center text-sm font-semibold text-clay">
                  Skriv koden {LAUNCH_CODE.code} i kassan – halva priset {LAUNCH_CODE.label}.
                </p>
              ) : null}
              {upsell ? (
                <div className="mt-4 rounded-lg border border-line bg-paper p-4 text-sm">
                  <p className="font-medium text-ink">
                    Behöver du fler?{" "}
                    <span className="text-muted">
                      {upsell.name}: {upsell.includes.length} dokument för {sek(upsell.priceKr)}
                    </span>
                  </p>
                  <p className="mt-1 text-muted">
                    Värt {sek(bundleValueKr(upsell))} styckvis. Det här dokumentet ingår, och du
                    kommer tillbaka hit efter betalningen.
                  </p>
                  <BuyBundleButton
                    slug={upsell.slug}
                    returnTo={product.slug}
                    variant="outline"
                    size="sm"
                    className="mt-3 h-auto w-full py-2 whitespace-normal"
                  >
                    Köp {upsell.name} · {sek(upsell.priceKr)}
                  </BuyBundleButton>
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
                onClick={() => void reveal()}
              >
                {busy === "full" ? <Loader2 className="size-4 animate-spin" /> : null}
                {busy === "full" ? "Öppnar hela dokumentet…" : "Visa hela dokumentet"}
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
                  onClick={() => void rewrite("kortare")}
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
                  onClick={() => void rewrite("formellare")}
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

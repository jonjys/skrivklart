import { createFileRoute, Link } from "@tanstack/react-router";
import { Loader2, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { analyzeBrev, unlockBrev, type BrevAnalysis } from "@/lib/brev";
import { getProduct } from "@/lib/catalog";
import { startCheckout } from "@/lib/checkout";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import { productJsonLd } from "@/lib/schema";
import { useSkrivklart } from "@/lib/store";
import { t, useI18n } from "@/lib/i18n";
import { sek } from "@/lib/utils";

const SLUG = "myndighetsbrev";

export const Route = createFileRoute("/brev")({
  component: BrevPage,
  head: () => ({
    meta: [
      { title: "Myndighetsbrev | Skrivklart" },
      {
        name: "description",
        content:
          "Klistra in brevet från FK, Skatteverket eller Kronofogden. Få det på vanlig svenska, med datum och vad du ska göra. 59 kr.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/brev` }],
  }),
});

function levelLabel(level: BrevAnalysis["riskLevel"], lang: "sv" | "en" | "ar") {
  if (level === "CRITICAL") return t(lang, "risk_high");
  if (level === "IMPORTANT") return t(lang, "risk_mid");
  return t(lang, "risk_low");
}

function BrevPage() {
  const product = getProduct(SLUG)!;
  const lang = useI18n((s) => s.lang);
  const pass = useSkrivklart((s) => s.passFor(SLUG));
  const unlock = useSkrivklart((s) => s.unlock);
  const relock = useSkrivklart((s) => s.relock);
  const unlocked = pass !== undefined;
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<BrevAnalysis | null>(null);
  const [sealed, setSealed] = useState<string | null>(null);
  const [full, setFull] = useState<BrevAnalysis | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("skrivklart:brev");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as { preview: BrevAnalysis; sealed?: string; text: string };
      setPreview(parsed.preview);
      setSealed(parsed.sealed ?? null);
      setText(parsed.text);
    } catch {
      /* ignore */
    }
  }, []);

  // Paid (or back from Stripe): let the server open the full analysis.
  useEffect(() => {
    if (!unlocked || !sealed || full) return;
    let stale = false;
    void unlockBrev({ data: { sealed, pass } })
      .then((res) => {
        if (stale) return;
        if (res.ok) setFull(res.full);
        else {
          if (res.error.startsWith("Betalningen")) relock(SLUG);
          setError(res.error);
        }
      })
      .catch(() => !stale && setError("Nätverksfel. Ladda om sidan."));
    return () => {
      stale = true;
    };
  }, [unlocked, sealed, full, pass, relock]);

  const shown = unlocked && full ? full : preview;

  async function analyze() {
    setError(null);
    setBusy(true);
    const res = await analyzeBrev({ data: { text, lang } }).catch(() => null);
    setBusy(false);
    if (!res) {
      setError("Nätverksfel. Försök igen.");
      return;
    }
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setPreview(res.preview);
    setSealed(res.sealed);
    setFull(null);
    sessionStorage.setItem(
      "skrivklart:brev",
      JSON.stringify({ preview: res.preview, sealed: res.sealed, text }),
    );
  }

  async function pay() {
    setPaying(true);
    const result = await startCheckout(SLUG);
    if (result.kind === "redirect") return;
    setPaying(false);
    if (result.kind === "error") {
      toast.error(result.error);
      return;
    }
    unlock(SLUG, result.pass);
    toast.success("Upplåst.");
  }

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: product.name,
              description: product.pitch,
              slug: product.slug,
              priceKr: product.priceKr,
              url: `${SITE_URL}/brev`,
            }),
          ),
        }}
      />
      <PageHero
        kicker={t(lang, "brev_kicker")}
        title={t(lang, "brev_h1")}
        sub={
          <>
            {t(lang, "brev_lead")} {sek(product.priceKr)}.
          </>
        }
      >
        <p className="text-sm text-pine-fg/60">{t(lang, "lang_note")}</p>
      </PageHero>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="rounded-2xl border-2 border-line bg-paper p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <label className="block text-sm font-semibold text-ink" htmlFor="brev-text">
            {t(lang, "brev_label")}
          </label>
          <Textarea
            id="brev-text"
            className="mt-2 min-h-48"
            placeholder={t(lang, "brev_ph")}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="xl"
              variant="accent"
              onClick={() => void analyze()}
              disabled={busy || text.trim().length < 12}
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : null}
              {t(lang, "brev_go")}
            </Button>
            <p className="text-sm text-subtle">{t(lang, "brev_free")}</p>
          </div>
        </div>

        {shown ? (
          <div className="mt-12 space-y-6">
            <div className="rounded-2xl border-2 border-line bg-paper p-6">
              <p className="text-sm text-muted">
                {shown.senderName ?? t(lang, "unknown_sender")}
                {shown.documentType ? ` · ${shown.documentType}` : ""}
              </p>
              <p className="mt-3 text-lg leading-relaxed text-ink">{shown.summary}</p>
              <p className="mt-4 text-sm text-pine">
                {shown.riskScore}/100 — {levelLabel(shown.riskLevel, lang)}
              </p>
            </div>

            {unlocked && full ? (
              <>
                <section>
                  <h2 className="font-display text-2xl tracking-tight">{t(lang, "brev_plain")}</h2>
                  <p className="mt-3 whitespace-pre-wrap leading-relaxed text-ink">
                    {full.plainLanguage}
                  </p>
                </section>
                {full.deadlines.length ? (
                  <section>
                    <h2 className="font-display text-2xl tracking-tight">
                      {t(lang, "brev_dates")}
                    </h2>
                    <ul className="mt-3 space-y-1 text-sm text-ink">
                      {full.deadlines.map((d) => (
                        <li key={d.description + (d.dueDate ?? "")}>
                          {d.description}
                          {d.dueDate ? ` — ${d.dueDate}` : ""}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
                {full.actionPlan.length ? (
                  <section>
                    <h2 className="font-display text-2xl tracking-tight">{t(lang, "brev_do")}</h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-ink">
                      {full.actionPlan.map((s) => (
                        <li key={s.step}>{s.step}</li>
                      ))}
                    </ol>
                  </section>
                ) : null}
                {full.consequences ? (
                  <p className="text-sm leading-relaxed text-muted">{full.consequences}</p>
                ) : null}
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/dokument/$slug" params={{ slug: "overklagande" }}>
                      {t(lang, "brev_appeal")}
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/dokument/$slug" params={{ slug: "reklamation" }}>
                      {t(lang, "brev_reklamation")}
                    </Link>
                  </Button>
                </div>
              </>
            ) : unlocked && sealed && !error ? (
              <p className="flex items-center gap-2 text-sm text-muted">
                <Loader2 className="size-4 animate-spin" /> Öppnar hela analysen…
              </p>
            ) : unlocked ? (
              <p className="text-sm text-muted">
                Du har redan låst upp. Tryck på knappen ovan igen.
              </p>
            ) : (
              <div className="rounded-2xl border-2 border-clay/30 bg-blush p-6">
                <p className="flex items-center gap-2 font-display text-xl">
                  <Lock className="size-4" />
                  {t(lang, "brev_lock")}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {t(lang, "brev_lock_sub")} {sek(product.priceKr)}.
                </p>
                <Button
                  className="mt-4"
                  size="lg"
                  variant="accent"
                  onClick={() => void pay()}
                  disabled={paying}
                >
                  {paying ? <Loader2 className="size-4 animate-spin" /> : null}
                  {t(lang, "brev_unlock")} {sek(product.priceKr)}
                </Button>
              </div>
            )}
          </div>
        ) : null}

        <p className="mt-16 text-xs text-subtle">{SITE_DESCRIPTION} Inte juridisk rådgivning.</p>
      </div>
    </SiteFrame>
  );
}

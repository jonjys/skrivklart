import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, Loader2, RotateCcw } from "lucide-react";
import { useState } from "react";
import { HeroChip, PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getProduct } from "@/lib/catalog";
import {
  checkSambo,
  SAMBO_LABELS,
  samboPrefill,
  type SamboAnswers,
  type SamboLevel,
  type SamboResult,
} from "@/lib/sambo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { siteImage } from "@/lib/schema";
import { useSkrivklart } from "@/lib/store";
import { cn, sek } from "@/lib/utils";

const TITLE = "Behöver vi samboavtal? Gratis samboavtal-koll på 1 minut";
const DESCRIPTION =
  "Svara på fem snabba frågor om bostad, insats, barn och sparande så får ni direkt en personlig bedömning: behöver ni samboavtal och vad ska stå i det? Gratis.";

const FAQ = [
  {
    q: "Behöver alla sambor ett samboavtal?",
    a: "Nej. Men äger ni en bostad som skaffats för att ni ska bo tillsammans är huvudregeln att den delas lika vid en separation, oavsett vem som betalat. Har den ena lagt mer pengar är ett samboavtal det enda sättet att bestämma något annat i förväg.",
  },
  {
    q: "Vad gäller utan samboavtal?",
    a: "Då gäller sambolagen. Gemensam bostad och bohag som skaffats för gemensamt bruk delas lika om någon begär bodelning inom ett år efter att ni flyttat isär. Sparande, bil och sådant man köpt för eget bruk ingår inte.",
  },
  {
    q: "Ärver sambor varandra?",
    a: "Nej. Sambor ärver inte varandra utan testamente. Ett samboavtal reglerar vad som händer vid separation, inte arv.",
  },
  {
    q: "Måste samboavtalet bevittnas?",
    a: "Nej, det räcker att det är skriftligt och undertecknat av er båda. Vittnen är ändå en bra vana om avtalet skulle ifrågasättas senare.",
  },
];

export const Route = createFileRoute("/samboavtal-koll")({
  component: SamboKollPage,
  head: () => ({
    meta: [
      { title: `${TITLE} | ${SITE_NAME}` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: siteImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/samboavtal-koll` }],
  }),
});

type Key = Exclude<keyof SamboAnswers, "ovrigt">;

const QUESTIONS: { key: Key; q: string; hint?: string }[] = [
  { key: "bostad", q: "Hur bor ni?" },
  { key: "agare", q: "Vem står som ägare eller på kontraktet?" },
  { key: "insats", q: "Vem har betalat insatsen eller kontantinsatsen?" },
  { key: "barn", q: "Har ni barn?" },
  { key: "sparande", q: "Har någon av er större sparande, bil eller arv som ska hållas utanför?" },
];

const LEVEL_STYLE: Record<SamboLevel, { label: string; className: string }> = {
  hog: { label: "Rekommenderas starkt", className: "bg-clay text-clay-fg" },
  medel: { label: "Klokt att skriva", className: "bg-sun text-ink" },
  lag: { label: "Inte nödvändigt just nu", className: "bg-pine text-pine-fg" },
};

function SamboKollPage() {
  const product = getProduct("samboavtal")!;
  const navigate = useNavigate();
  const setAnswers = useSkrivklart((s) => s.setAnswers);
  const existing = useSkrivklart((s) => s.drafts.samboavtal?.answers);
  const [answers, setLocal] = useState<Partial<SamboAnswers>>({});
  const [ovrigt, setOvrigt] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<SamboResult | null>(null);

  const complete = QUESTIONS.every((q) => answers[q.key]);
  const full = { ...answers, ovrigt } as SamboAnswers;

  async function run() {
    if (!complete || busy) return;
    setBusy(true);
    try {
      const res = await checkSambo({ data: full });
      setResult(res.result);
      requestAnimationFrame(() =>
        document.getElementById("resultat")?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    } finally {
      setBusy(false);
    }
  }

  function toAgreement() {
    const prefill = samboPrefill(full, result?.include ?? []);
    // Names and tone the visitor already typed win over the placeholders.
    const keep = Object.fromEntries(
      ["parter", "ton"].flatMap((k) => (existing?.[k]?.trim() ? [[k, existing[k]]] : [])),
    );
    setAnswers("samboavtal", { ...(existing ?? {}), ...prefill, ...keep });
    void navigate({ to: "/dokument/$slug", params: { slug: "samboavtal" }, hash: "skriv" });
  }

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <PageHero
        size="sm"
        kicker="Samboavtal-koll"
        title="Behöver ni"
        accent="samboavtal?"
        sub="Fem snabba frågor. Ni får en personlig bedömning direkt, och vad som bör stå i avtalet."
      >
        <div className="flex flex-wrap gap-2">
          {["Gratis", "1 minut", "Inget konto"].map((chip) => (
            <HeroChip key={chip}>
              <Check className="size-3.5 text-sun" />
              {chip}
            </HeroChip>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <ol className="space-y-6">
          {QUESTIONS.map((question, i) => (
            <li key={question.key} className="rounded-2xl border-2 border-line bg-paper p-5 shadow-[var(--shadow-soft)]">
              <p className="font-semibold">
                <span className="mr-2 text-clay">{i + 1}.</span>
                {question.q}
              </p>
              <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={question.q}>
                {Object.entries(SAMBO_LABELS[question.key]).map(([value, label]) => {
                  const active = answers[question.key] === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => {
                        setLocal((a) => ({ ...a, [question.key]: value }));
                        setResult(null);
                      }}
                      className={cn(
                        "min-h-11 rounded-xl border-2 px-4 py-2 text-sm font-semibold transition-colors",
                        active ? "border-pine bg-pine text-pine-fg" : "border-line bg-bg-elevated text-ink hover:border-pine/50",
                      )}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </li>
          ))}
          <li className="rounded-2xl border-2 border-line bg-paper p-5 shadow-[var(--shadow-soft)]">
            <label htmlFor="ovrigt" className="font-semibold">
              <span className="mr-2 text-clay">6.</span>
              Något mer? <span className="font-normal text-subtle">(valfritt)</span>
            </label>
            <Textarea
              id="ovrigt"
              className="mt-3"
              rows={3}
              value={ovrigt}
              onChange={(e) => setOvrigt(e.target.value)}
              placeholder="T.ex. jag hade lägenheten innan vi flyttade ihop, eller vi ska köpa hus i vår."
            />
          </li>
        </ol>

        <Button
          type="button"
          variant="accent"
          size="xl"
          className="mt-8 w-full"
          disabled={!complete || busy}
          onClick={() => void run()}
        >
          {busy ? <Loader2 className="size-5 animate-spin" /> : null}
          {busy ? "Bedömer…" : complete ? "Visa vår bedömning" : "Svara på frågorna ovan"}
        </Button>

        {result ? (
          <section
            id="resultat"
            className="mt-10 scroll-mt-6 rounded-3xl bg-paper p-6 shadow-[var(--shadow-lift)] sm:p-8"
            aria-live="polite"
          >
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-sm font-semibold",
                LEVEL_STYLE[result.level].className,
              )}
            >
              {LEVEL_STYLE[result.level].label}
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight">{result.headline}</h2>
            <p className="mt-3 leading-relaxed text-muted">{result.explanation}</p>
            {result.include.length ? (
              <>
                <h3 className="mt-6 font-semibold">Det här bör stå i ert avtal</h3>
                <ul className="mt-3 space-y-2">
                  {result.include.map((item) => (
                    <li key={item} className="flex gap-2.5 leading-relaxed">
                      <Check className="mt-1 size-4 shrink-0 text-ok" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {result.alsoConsider ? (
              <p className="mt-6 rounded-xl bg-blush px-4 py-3 text-sm leading-relaxed">{result.alsoConsider}</p>
            ) : null}

            <Button type="button" variant="accent" size="xl" className="mt-8 w-full" onClick={toAgreement}>
              Skriv vårt samboavtal
              <ArrowRight className="size-5" />
            </Button>
            <p className="mt-3 text-center text-sm text-subtle">
              Era svar och punkterna ovan följer med. Utkastet är gratis, hela avtalet{" "}
              {sek(product.priceKr)}, inget konto.
            </p>
            <button
              type="button"
              onClick={() => {
                setResult(null);
                setLocal({});
                setOvrigt("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mx-auto mt-4 flex items-center gap-1.5 text-sm text-muted hover:text-ink"
            >
              <RotateCcw className="size-3.5" />
              Börja om
            </button>
          </section>
        ) : null}

        <p className="mt-6 text-center text-xs text-subtle">
          En allmän bedömning utifrån sambolagen, inte juridisk rådgivning.
        </p>

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl tracking-tight">Vanliga frågor om samboavtal</h2>
          <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-paper">
            {FAQ.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Läs mer:{" "}
            <Link to="/guider/$slug" params={{ slug: "samboavtal-bostadsratt" }} className="underline hover:text-ink">
              samboavtal och bostadsrätt
            </Link>
            ,{" "}
            <Link to="/guider/$slug" params={{ slug: "separation-utan-samboavtal" }} className="underline hover:text-ink">
              separation utan samboavtal
            </Link>
            .
          </p>
        </section>
      </div>
    </SiteFrame>
  );
}

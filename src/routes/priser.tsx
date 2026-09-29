import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Loader2 } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { PRODUCTS, PRO_PRICE_KR } from "@/lib/catalog";
import { startCheckout } from "@/lib/checkout";
import { JOB_PACK_SLUG, PRO_SLUG } from "@/lib/stripe-map";
import { useSkrivklart } from "@/lib/store";
import { sek } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/priser")({
  component: PriserPage,
  head: () => ({
    meta: [
      { title: "Priser | Skrivklart" },
      {
        name: "description",
        content: "Ett dokument 79–199 kr. Skrivklart Pro 249 kr/mån. Inget konto för enstaka dokument.",
      },
    ],
  }),
});

function PriserPage() {
  const unlockPro = useSkrivklart((s) => s.unlockPro);
  const unlockJobPack = useSkrivklart((s) => s.unlockJobPack);
  const hasPro = useSkrivklart((s) => s.hasPro());
  const [busy, setBusy] = useState<string | null>(null);

  async function checkout(slug: string) {
    setBusy(slug);
    const result = await startCheckout(slug);
    if (result.kind === "redirect") return;
    setBusy(null);
    if (result.kind === "error") {
      toast.error(result.error);
      return;
    }
    const until = Date.now() + 30 * 24 * 60 * 60 * 1000;
    if (slug === PRO_SLUG) {
      unlockPro(result.pass, until);
      toast.success("Pro är aktivt.");
    } else {
      unlockJobPack(result.pass, until);
      toast.success("Jobbpaketet är olåst.");
    }
  }

  return (
    <SiteFrame>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Priser</h1>
        <p className="mt-3 max-w-xl text-muted">
          Ett dokument när du behöver det. Eller Pro om du skriver varje vecka.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper p-6 sm:p-8">
            <p className="text-sm font-medium text-muted">Per dokument</p>
            <p className="mt-2 font-display text-4xl tracking-tight">79–199 kr</p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {[
                "Utkast gratis",
                "Hela texten när du betalar",
                "Kopiera, ladda ner, skriv ut",
                "Omskrivning kortare eller formellare ingår",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="size-4 shrink-0 text-pine" />
                  {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full">
              <Link to="/dokument">Välj dokument</Link>
            </Button>
          </div>

          <div className="rounded-xl border border-ink bg-ink p-6 text-paper sm:p-8">
            <p className="text-sm font-medium text-paper/70">Skrivklart Pro</p>
            <p className="mt-2 font-display text-4xl tracking-tight">{sek(PRO_PRICE_KR)}/mån</p>
            <ul className="mt-6 space-y-2 text-sm text-paper/80">
              {[
                "Obegränsade dokument",
                "Alla dokumenttyper",
                "Obegränsade omskrivningar",
                "Ingen per-dokument-avgift",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="size-4 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant="outline"
              className="mt-8 w-full border-paper/20 bg-paper text-ink hover:bg-bg-elevated"
              onClick={() => void checkout(PRO_SLUG)}
              disabled={busy !== null || hasPro}
            >
              {busy === PRO_SLUG ? <Loader2 className="size-4 animate-spin" /> : null}
              {hasPro ? "Pro är aktivt" : "Starta Pro"}
            </Button>
            <p className="mt-3 text-center text-xs text-paper/60">Månadsvis. Säg upp via support när du vill.</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-line bg-paper p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-muted">Jobbpaket</p>
              <p className="mt-2 font-display text-3xl tracking-tight">199 kr</p>
              <p className="mt-2 max-w-md text-sm text-muted">
                Personligt brev, CV-profil och LinkedIn. Ett köp i stället för tre. 30 dagar i
                den här webbläsaren.
              </p>
            </div>
            <Button
              type="button"
              className="w-full md:w-auto"
              onClick={() => void checkout(JOB_PACK_SLUG)}
              disabled={busy !== null}
            >
              {busy === JOB_PACK_SLUG ? <Loader2 className="size-4 animate-spin" /> : null}
              Köp jobbpaketet
            </Button>
          </div>
        </div>

        <h2 className="mt-16 font-display text-2xl tracking-tight">Alla dokument</h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              to="/dokument/$slug"
              params={{ slug: p.slug }}
              className="flex items-center justify-between gap-4 py-4 text-sm hover:text-pine"
            >
              <span>{p.name}</span>
              <span className="tabular-nums text-muted">{sek(p.priceKr)}</span>
            </Link>
          ))}
        </div>
      </div>
    </SiteFrame>
  );
}

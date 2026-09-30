import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BuyBundleButton } from "@/components/buy-bundle-button";
import { HeroChip, PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import {
  BUNDLES,
  bundleValueKr,
  CATEGORIES,
  getProduct,
  FAMILY_SLUG,
  PRODUCTS,
} from "@/lib/catalog";
import { productOffer } from "@/lib/schema";
import { PAY_METHODS, SITE_NAME, SITE_URL } from "@/lib/site";
import { cn, sek } from "@/lib/utils";

const TITLE = "Priser – dokument från 59 kr, paket från 129 kr | Skrivklart";
const DESCRIPTION =
  "Kortare brev 59 kr, avtal och överklaganden 99 kr. Familjepaketet med sju dokument 149 kr. Allt i 30 dagar 199 kr. Ingen prenumeration, utkast gratis.";

export const Route = createFileRoute("/priser")({
  component: PriserPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/priser` }],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": BUNDLES.map((b) => ({
    "@type": "Product",
    name: `${SITE_NAME} ${b.name}`,
    description: b.short,
    sku: b.slug,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: productOffer(b.priceKr, `${SITE_URL}/priser#${b.slug}`),
  })),
};

function PriserPage() {
  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        kicker="Inga prenumerationer"
        title="Priser som"
        accent="går att betala."
        sub="Utkastet är alltid gratis. Du betalar bara för hela texten – en gång."
      >
        <div className="flex flex-wrap gap-2">
          <HeroChip strong>Från 59 kr</HeroChip>
          <HeroChip>Betala med {PAY_METHODS.join(", ")}</HeroChip>
        </div>
      </PageHero>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-line bg-paper p-6 sm:p-8">
            <p className="font-display text-5xl font-bold tracking-tight">
              59<span className="ml-1 text-xl">kr</span>
            </p>
            <p className="mt-1 font-semibold">Kortare brev</p>
            <p className="mt-2 text-sm text-muted">
              Avbetalningsplan, brev till skolan och socialtjänsten, myndighetsbrev, reklamation,
              hyresansökan, uppsägning.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-line bg-paper p-6 sm:p-8">
            <p className="font-display text-5xl font-bold tracking-tight">
              99<span className="ml-1 text-xl">kr</span>
            </p>
            <p className="mt-1 font-semibold">Avtal och överklaganden</p>
            <p className="mt-2 text-sm text-muted">
              Underhållsbidrag, boende och umgänge, överklagande till Försäkringskassan, personligt
              brev, CV, samboavtal.
            </p>
          </div>
        </div>

        <h2 className="mt-16 font-display text-4xl tracking-tight">
          Paket – köp flera, betala mindre
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {BUNDLES.map((b) => {
            const featured = b.slug === FAMILY_SLUG;
            const docs =
              b.includes === "all"
                ? null
                : b.includes.map((slug) => getProduct(slug)).filter((p) => p !== undefined);
            return (
              <div
                key={b.slug}
                id={b.slug}
                className={cn(
                  "flex scroll-mt-20 flex-col rounded-3xl p-6 sm:p-8",
                  featured
                    ? "bg-pine-deep text-pine-fg shadow-[var(--shadow-lift)]"
                    : "border-2 border-line bg-paper",
                )}
              >
                {featured ? (
                  <p className="mb-3 self-start rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">
                    Bäst värde
                  </p>
                ) : null}
                <h3 className="font-display text-3xl tracking-tight">{b.name}</h3>
                <p className={cn("mt-2 text-sm", featured ? "text-pine-fg/75" : "text-muted")}>
                  {b.short}
                </p>
                <div className="mt-6 flex items-end gap-3">
                  <p className="font-display text-5xl font-bold tracking-tight tabular-nums">
                    {b.priceKr}
                    <span className="ml-1 text-xl">kr</span>
                  </p>
                  <p className={cn("pb-1.5 text-sm", featured ? "text-pine-fg/60" : "text-subtle")}>
                    värt <span className="line-through">{sek(bundleValueKr(b))}</span>
                  </p>
                </div>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {docs
                    ? docs.map((p) => (
                        <li key={p.slug} className="flex gap-2">
                          <Check
                            className={cn(
                              "mt-0.5 size-4 shrink-0",
                              featured ? "text-sun" : "text-pine",
                            )}
                          />
                          {p.name}
                        </li>
                      ))
                    : [
                        `Alla ${PRODUCTS.length} dokumenttyper`,
                        "Obegränsat antal dokument",
                        "Omskrivningar ingår",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-pine" />
                          {line}
                        </li>
                      ))}
                  <li className={cn("pt-2 text-xs", featured ? "text-pine-fg/60" : "text-subtle")}>
                    Olåst i {b.days} dagar i den här webbläsaren. Engångsbetalning.
                  </li>
                </ul>
                <BuyBundleButton
                  slug={b.slug}
                  size="xl"
                  variant={featured ? "accent" : "primary"}
                  className="mt-8 w-full"
                >
                  Köp för {sek(b.priceKr)}
                </BuyBundleButton>
              </div>
            );
          })}
        </div>

        <h2 className="mt-20 font-display text-4xl tracking-tight">Alla dokument</h2>
        <div className="mt-6 grid gap-x-12 md:grid-cols-2">
          {CATEGORIES.map((cat) => {
            const docs = PRODUCTS.filter((p) => p.category === cat.id);
            if (!docs.length) return null;
            return (
              <div key={cat.id} className="mt-6">
                <h3 className="text-xs font-bold tracking-[0.18em] text-clay uppercase">
                  {cat.label}
                </h3>
                <div className="mt-2 divide-y divide-line border-y border-line">
                  {docs.map((p) => (
                    <Link
                      key={p.slug}
                      to={p.slug === "myndighetsbrev" ? "/brev" : "/dokument/$slug"}
                      params={p.slug === "myndighetsbrev" ? undefined : { slug: p.slug }}
                      className="flex items-center justify-between gap-4 py-3.5 text-sm hover:text-pine"
                    >
                      <span className="font-medium">{p.name}</span>
                      <span className="tabular-nums text-muted">{sek(p.priceKr)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-blush p-6 sm:p-8">
          <p className="font-display text-2xl tracking-tight">Osäker på vad du behöver?</p>
          <p className="mt-2 text-muted">
            Skriv utkastet först. Det är gratis, och du ser direkt om texten passar.
          </p>
          <Button asChild className="mt-4" variant="accent" size="lg">
            <Link to="/dokument">Se alla dokument</Link>
          </Button>
        </div>
      </div>
    </SiteFrame>
  );
}

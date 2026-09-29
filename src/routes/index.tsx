import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarHeart,
  Check,
  Coins,
  Home as HomeIcon,
  HeartHandshake,
  Landmark,
  MailQuestion,
  Receipt,
  School,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { BuyBundleButton } from "@/components/buy-bundle-button";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import {
  ALL_ACCESS_SLUG,
  bundleValueKr,
  getBundle,
  getProduct,
  MAMMA_SLUG,
  PRODUCTS,
} from "@/lib/catalog";
import { GUIDES } from "@/lib/guides";
import { HOME_COPY, SITUATIONS } from "@/lib/home-copy";
import { useI18n } from "@/lib/i18n";
import { merchantReturnPolicy, productImages, productOffer } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { sek } from "@/lib/utils";

const SV = HOME_COPY.sv;

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: SV.title },
      { name: "description", content: SV.description },
      { property: "og:title", content: SV.title },
      { property: "og:description", content: SV.description },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
});

const ICONS: Record<(typeof SITUATIONS)[number]["icon"], LucideIcon> = {
  coins: Coins,
  landmark: Landmark,
  receipt: Receipt,
  mail: MailQuestion,
  calendar: CalendarHeart,
  school: School,
  hand: HeartHandshake,
  home: HomeIcon,
};

const mamma = getBundle(MAMMA_SLUG)!;
const allAccess = getBundle(ALL_ACCESS_SLUG)!;
const mammaDocs = (mamma.includes as readonly string[])
  .map((slug) => getProduct(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const HOME_GUIDES = [
  "underhallsbidrag-avtal",
  "pappan-betalar-inte-underhall",
  "avbetalningsplan-inkasso",
]
  .map((slug) => GUIDES.find((g) => g.slug === slug))
  .filter((g): g is NonNullable<typeof g> => Boolean(g));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "sv-SE",
      description: SV.description,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/profil.jpg`,
      image: productImages,
      areaServed: "SE",
      hasMerchantReturnPolicy: merchantReturnPolicy,
    },
    {
      "@type": "OfferCatalog",
      name: "Dokument från Skrivklart",
      itemListElement: PRODUCTS.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.name, description: p.short },
        price: String(p.priceKr),
        priceCurrency: "SEK",
        url: `${SITE_URL}/dokument/${p.slug}`,
      })),
    },
    {
      "@type": "Product",
      name: `${SITE_NAME} ${mamma.name}`,
      description: mamma.short,
      image: productImages,
      brand: { "@type": "Brand", name: SITE_NAME },
      offers: productOffer(mamma.priceKr, `${SITE_URL}/priser`),
    },
    {
      "@type": "FAQPage",
      mainEntity: SV.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

function Home() {
  const lang = useI18n((s) => s.lang);
  const c = HOME_COPY[lang];

  return (
    <SiteFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-pine-deep text-pine-fg">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-clay/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-24 size-[28rem] rounded-full bg-sun/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-pine-fg/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-pine-fg/90">
              <Sparkles className="size-3.5 text-sun" />
              {c.kicker}
            </p>
            <h1 className="mt-6 font-display text-[2.9rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.4rem]">
              {c.hero_a}
              <br />
              <span className="text-sun">{c.hero_b}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pine-fg/80 sm:text-xl">
              {c.hero_sub}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.chips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-pine-fg/20 px-3 py-1.5 text-sm font-medium"
                >
                  <Check className="size-3.5 text-sun" />
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="accent">
                <a href="#situationer">
                  {c.cta_primary}
                  <ArrowRight className="size-5 rtl:-scale-x-100" />
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-pine-fg/25 bg-transparent text-pine-fg hover:bg-pine-fg/10"
              >
                <Link to="/brev">{c.cta_secondary}</Link>
              </Button>
            </div>
          </div>

          <HeroCard badge={c.card_badge} />
        </div>
      </section>

      {/* Situations */}
      <section id="situationer" className="scroll-mt-16 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">{c.sit_h}</h2>
          <p className="mt-3 text-lg text-muted">{c.sit_sub}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SITUATIONS.map((s) => {
            const Icon = ICONS[s.icon];
            const product = getProduct(s.to);
            const copy = c.sit[s.id];
            const isBrev = s.to === "myndighetsbrev";
            return (
              <Link
                key={s.id}
                to={isBrev ? "/brev" : "/dokument/$slug"}
                params={isBrev ? undefined : { slug: s.to }}
                className="group flex flex-col rounded-2xl border-2 border-line bg-paper p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-pine hover:shadow-[var(--shadow-lift)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blush text-clay">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl leading-tight tracking-tight">{copy.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{copy.d}</p>
                <p className="mt-4 flex items-center justify-between text-sm font-semibold">
                  <span className="tabular-nums text-pine">
                    {product ? `${sek(product.priceKr)}` : null}
                  </span>
                  <ArrowRight className="size-4 text-subtle transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100" />
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mammapaketet */}
      <section id="mammapaket" className="bg-blush">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-clay uppercase">{c.pack_kicker}</p>
            <h2 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">{c.pack_h}</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/80">{c.pack_p}</p>
            <div className="mt-8 flex items-end gap-4">
              <p className="font-display text-6xl font-bold tracking-tight tabular-nums">
                {mamma.priceKr}
                <span className="ml-1 text-2xl font-semibold">kr</span>
              </p>
              <p className="pb-2 text-sm text-muted">
                {c.pack_worth}{" "}
                <span className="tabular-nums line-through">{sek(bundleValueKr(mamma))}</span>
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <BuyBundleButton slug={MAMMA_SLUG} size="xl" variant="accent">
                {c.pack_cta}
              </BuyBundleButton>
              <Button asChild size="xl" variant="ghost">
                <Link to="/priser">{c.pack_more}</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-2 rounded-3xl bg-paper p-4 shadow-[var(--shadow-lift)] sm:p-6">
            {mammaDocs.map((p) => (
              <li
                key={p.slug}
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 odd:bg-bg-elevated"
              >
                <span className="flex items-center gap-3">
                  <Check className="size-4 shrink-0 text-clay" />
                  <span className="font-medium" lang="sv">
                    {p.name}
                  </span>
                </span>
                <span className="text-sm tabular-nums text-subtle line-through">{sek(p.priceKr)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">{c.steps_h}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {c.steps.map((step, i) => (
            <li key={step.t} className="relative rounded-2xl border border-line bg-paper p-6">
              <span className="font-display text-6xl leading-none font-bold text-clay/90">{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{step.t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Prices */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">{c.prices_h}</h2>
              <p className="mt-3 text-lg text-paper/70">{c.prices_sub}</p>
            </div>
            <Link to="/priser" className="text-sm font-semibold text-sun hover:underline">
              {c.see_prices} →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <PriceTile kr={59} label={c.per_doc} t={c.price_59.t} d={c.price_59.d} />
            <PriceTile kr={99} label={c.per_doc} t={c.price_99.t} d={c.price_99.d} />
            <PriceTile kr={mamma.priceKr} label={c.one_time} t={c.pack_h} d={mamma.short} highlight />
            <PriceTile kr={allAccess.priceKr} label={c.one_time} t={c.price_all.t} d={c.price_all.d} />
          </div>
        </div>
      </section>

      {/* Sample */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">{c.sample_h}</h2>
          <ul className="mt-8 space-y-4">
            {c.sample_points.map((point) => (
              <li key={point} className="flex gap-3 text-lg leading-snug">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-pine text-pine-fg">
                  <Check className="size-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <figure className="rotate-[-1deg] rounded-2xl border border-line bg-paper p-6 shadow-[var(--shadow-lift)] sm:p-8" dir="ltr" lang="sv">
          <p className="font-serif text-lg font-semibold">Avtal om underhållsbidrag</p>
          <div className="mt-4 space-y-3 font-serif leading-relaxed text-ink/90">
            <p>
              <strong>§ 1 Parter.</strong> Mellan [Förälder A], nedan kallad betalningsskyldig, och
              [Förälder B] har följande avtal träffats om underhåll för Elsa, född 2017.
            </p>
            <p>
              <strong>§ 2 Belopp.</strong> Betalningsskyldig betalar 2 000 kr per månad senast den
              25:e varje månad, med början den 1 november 2026.
            </p>
            <p>
              <strong>§ 3 Giltighet.</strong> Underhållet gäller till dess att barnet fyller 18 år,
              eller längre om barnet då går i skolan …
            </p>
          </div>
          <figcaption className="mt-5 text-sm text-subtle">{c.sample_label}</figcaption>
        </figure>
      </section>

      {/* Guides */}
      {HOME_GUIDES.length ? (
        <section className="border-t border-line bg-bg-elevated">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{c.guides_h}</h2>
              <Link to="/guider" className="text-sm font-semibold text-pine hover:underline">
                {c.all_guides} →
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {HOME_GUIDES.map((g) => (
                <Link
                  key={g.slug}
                  to="/guider/$slug"
                  params={{ slug: g.slug }}
                  lang="sv"
                  className="rounded-2xl border border-line bg-paper p-6 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold text-clay">{g.minutes} min</p>
                  <h3 className="mt-2 font-display text-xl tracking-tight">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted">{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-4xl tracking-tight">{c.faq_h}</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {c.faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-2xl leading-none text-clay transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-clay px-6 py-12 text-clay-fg sm:px-12 sm:py-16">
          <h2 className="max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">{c.final_h}</h2>
          <p className="mt-3 text-lg text-clay-fg/85">{c.final_p}</p>
          <Button asChild size="xl" className="mt-8 bg-paper text-ink hover:bg-bg-elevated">
            <a href="#situationer">
              {c.final_cta}
              <ArrowRight className="size-5 rtl:-scale-x-100" />
            </a>
          </Button>
        </div>
      </section>
    </SiteFrame>
  );
}

function PriceTile({
  kr,
  label,
  t,
  d,
  highlight,
}: {
  kr: number;
  label: string;
  t: string;
  d: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-2xl bg-sun p-6 text-ink"
          : "rounded-2xl border border-paper/15 bg-paper/5 p-6"
      }
    >
      <p className="font-display text-5xl font-bold tracking-tight tabular-nums">
        {kr}
        <span className="ml-1 text-xl font-semibold">kr</span>
      </p>
      <p className={highlight ? "mt-1 text-sm text-ink/70" : "mt-1 text-sm text-paper/60"}>{label}</p>
      <h3 className="mt-5 font-display text-xl tracking-tight">{t}</h3>
      <p className={highlight ? "mt-2 text-sm text-ink/75" : "mt-2 text-sm text-paper/70"}>{d}</p>
    </div>
  );
}

function HeroCard({ badge }: { badge: string }) {
  return (
    <div className="relative mx-auto hidden w-full max-w-md lg:mx-0 lg:block" dir="ltr" lang="sv" aria-hidden>
      <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-3xl bg-pine-fg/10" />
      <div className="relative rotate-[-2deg] rounded-3xl bg-paper p-6 text-ink shadow-[var(--shadow-lift)] sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Dokument</p>
          <span className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-clay">{badge}</span>
        </div>
        <p className="mt-4 font-serif text-2xl font-semibold tracking-tight">Avtal om underhållsbidrag</p>
        <div className="mt-5 space-y-2.5 font-serif text-[0.95rem] leading-relaxed text-ink/85">
          <p>
            <strong>§ 2</strong> Betalningsskyldig betalar <strong>2 000 kr</strong> per barn och
            månad, senast den 25:e.
          </p>
          <div className="h-2.5 w-11/12 rounded bg-line" />
          <div className="h-2.5 w-full rounded bg-line" />
          <div className="h-2.5 w-3/4 rounded bg-line" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-xs text-subtle">
          <div>
            <div className="h-6 border-b border-ink/40 font-serif text-base text-ink/80 italic">Anna</div>
            Förälder B
          </div>
          <div>
            <div className="h-6 border-b border-ink/40" />
            Vittne 1
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 rotate-[4deg] rounded-2xl bg-sun px-4 py-3 text-ink shadow-[var(--shadow-lift)]">
        <p className="text-xs font-semibold">Överklagande · FK</p>
        <p className="font-display text-lg font-bold">99 kr</p>
      </div>
    </div>
  );
}

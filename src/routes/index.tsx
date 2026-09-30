import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarHeart,
  Check,
  Coins,
  HeartHandshake,
  Home as HomeIcon,
  Landmark,
  MailQuestion,
  Receipt,
  School,
  type LucideIcon,
} from "lucide-react";
import { BuyBundleButton } from "@/components/buy-bundle-button";
import { SiteFrame } from "@/components/site-frame";
import { bundleValueKr, FAMILY_SLUG, getBundle, getProduct, PRODUCTS } from "@/lib/catalog";
import { HOME_COPY, SITUATIONS } from "@/lib/home-copy";
import { useI18n } from "@/lib/i18n";
import { merchantReturnPolicy, productImages, productOffer } from "@/lib/schema";
import { usePayMethods } from "@/lib/pay-methods";
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

const pack = getBundle(FAMILY_SLUG)!;
const packDocs = (pack.includes as readonly string[])
  .map((slug) => getProduct(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
      name: `${SITE_NAME} ${pack.name}`,
      description: pack.short,
      image: productImages,
      brand: { "@type": "Brand", name: SITE_NAME },
      offers: productOffer(pack.priceKr, `${SITE_URL}/priser#${pack.slug}`),
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
  const payMethods = usePayMethods();
  const lang = useI18n((s) => s.lang);
  const c = HOME_COPY[lang];

  return (
    <SiteFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* One screen: promise, then the choice. */}
      <section className="relative overflow-hidden bg-pine-deep text-pine-fg">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -right-32 size-[34rem] rounded-full bg-clay/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 pt-12 pb-14 sm:px-6 sm:pt-20 sm:pb-20">
          <p className="text-sm font-semibold text-sun">{c.kicker}</p>
          <h1 className="mt-3 font-display text-[2.8rem] leading-[0.98] tracking-tight sm:text-7xl">
            {c.hero_a} <span className="text-sun">{c.hero_b}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-fg/80 sm:text-xl">{c.hero_sub}</p>

          <h2 className="mt-10 font-sans text-sm font-bold tracking-[0.14em] text-pine-fg/60 uppercase">
            {c.pick}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {SITUATIONS.map((s) => {
              const Icon = ICONS[s.icon];
              const product = getProduct(s.to);
              const isBrev = s.to === "myndighetsbrev";
              return (
                <li key={s.id}>
                  <Link
                    to={isBrev ? "/brev" : "/dokument/$slug"}
                    params={isBrev ? undefined : { slug: s.to }}
                    className="group flex min-h-16 items-center gap-4 rounded-2xl bg-paper px-4 py-3 text-ink shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-blush text-clay">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex-1 text-base leading-snug font-semibold">{c.sit[s.id]}</span>
                    {product ? (
                      <span className="shrink-0 text-sm font-semibold tabular-nums text-pine">
                        {sek(product.priceKr)}
                      </span>
                    ) : null}
                    <ArrowRight className="size-4 shrink-0 text-subtle transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-pine-fg/80">
            {c.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-sun" />
                {item}
              </li>
            ))}
            <li className="text-pine-fg/60">
              {c.pay_with} {payMethods.join(", ")}
            </li>
          </ul>
        </div>
      </section>

      {/* Three steps, one line each. */}
      <section className="border-b border-line bg-paper">
        <ol className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {c.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-clay font-display text-lg font-bold text-clay-fg">
                {i + 1}
              </span>
              <span className="font-semibold">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Bundle */}
      <section id={pack.slug} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 rounded-3xl bg-blush p-6 sm:p-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">{c.pack_h}</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">{c.pack_p}</p>
            <p className="mt-6 flex items-end gap-3">
              <span className="font-display text-6xl font-bold tracking-tight tabular-nums">
                {pack.priceKr}
                <span className="ml-1 text-2xl">kr</span>
              </span>
              <span className="pb-2 text-sm text-muted">
                {c.pack_worth} <span className="tabular-nums line-through">{sek(bundleValueKr(pack))}</span>
              </span>
            </p>
            <BuyBundleButton slug={pack.slug} size="xl" variant="accent" className="mt-6 w-full sm:w-auto">
              {c.pack_cta}
            </BuyBundleButton>
          </div>
          <ul className="space-y-2">
            {packDocs.map((p) => (
              <li key={p.slug} className="flex items-center gap-3 rounded-xl bg-paper px-4 py-3" lang="sv">
                <Check className="size-4 shrink-0 text-clay" />
                <span className="font-medium">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-center">
          <Link to="/priser" className="font-semibold text-pine underline underline-offset-4 hover:text-ink">
            {c.more}
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-display text-4xl tracking-tight">{c.faq_h}</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
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
        </div>
      </section>
    </SiteFrame>
  );
}

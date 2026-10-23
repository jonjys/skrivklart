import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/catalog";
import { GUIDE_REDIRECTS, GUIDES, getGuide, guideMinutes } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { siteImage } from "@/lib/schema";
import { sek } from "@/lib/utils";

function swedishDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Stockholm",
  });
}

export const Route = createFileRoute("/guider/$slug")({
  loader: ({ params }) => {
    const moved = GUIDE_REDIRECTS[params.slug];
    if (moved) throw redirect({ href: moved, statusCode: 301 });
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    const related = [
      ...GUIDES.filter((g) => g.slug !== guide.slug && g.productSlug === guide.productSlug),
      ...GUIDES.filter((g) => g.slug !== guide.slug && g.productSlug !== guide.productSlug),
    ].slice(0, 3);
    return { guide, product: getProduct(guide.productSlug), related };
  },
  head: ({ loaderData }) => {
    const guide = loaderData?.guide;
    if (!guide) return { meta: [{ title: `Guider — ${SITE_NAME}` }] };
    const title = `${guide.seoTitle ?? guide.title} | ${SITE_NAME}`;
    const description = guide.seoDescription ?? guide.excerpt;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `${SITE_URL}/guider/${guide.slug}` },
        { property: "og:image", content: siteImage },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/guider/${guide.slug}` }],
    };
  },
  component: GuidePage,
  notFoundComponent: () => (
    <SiteFrame>
      <div className="bg-pine-deep px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl bg-paper p-8 text-center shadow-[var(--shadow-lift)] sm:p-10">
          <h1 className="font-display text-3xl tracking-tight">Guiden finns inte</h1>
          <p className="mt-3 text-muted">Länken kan vara gammal. Välj direkt i listan i stället.</p>
          <Link
            to="/guider"
            className="mt-6 inline-flex h-12 items-center rounded-xl bg-clay px-5 font-semibold text-clay-fg"
          >
            Till guiderna
          </Link>
        </div>
      </div>
    </SiteFrame>
  ),
});

function GuidePage() {
  const { guide, product, related } = Route.useLoaderData()!;
  const url = `${SITE_URL}/guider/${guide.slug}`;
  const updated = guide.updated ?? guide.published;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.seoTitle ?? guide.title,
    description: guide.seoDescription ?? guide.excerpt,
    inLanguage: "sv-SE",
    mainEntityOfPage: url,
    image: siteImage,
    datePublished: guide.published,
    dateModified: updated,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/profil.jpg` },
    },
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guider", item: `${SITE_URL}/guider` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };
  const faq = guide.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <SiteFrame>
      {[article, breadcrumbs, faq].filter(Boolean).map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <PageHero
        kicker={
          <>
            <Link to="/guider" className="hover:underline">
              Guider
            </Link>
            <span className="text-pine-fg/60"> · {guideMinutes(guide)} min läsning</span>
          </>
        }
        title={guide.title}
        sub={guide.excerpt}
      />
      <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm text-muted">
          Uppdaterad <time dateTime={updated}>{swedishDate(updated)}</time>
        </p>
        {guide.sections?.length ? (
          <nav
            aria-label="Innehåll i guiden"
            className="mt-6 rounded-2xl border border-line bg-paper p-5"
          >
            <p className="font-semibold">I den här guiden</p>
            <ul className="mt-3 space-y-2">
              {guide.sections.map((section, index) => (
                <li key={section.h}>
                  <a className="text-clay underline" href={`#avsnitt-${index + 1}`}>
                    {section.h}
                  </a>
                </li>
              ))}
              {guide.template ? (
                <li>
                  <a className="text-clay underline" href="#exempelmall">
                    Gratis exempelmall
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        ) : null}
        <div className="mt-6 space-y-5">
          {guide.body.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-ink">
              {p}
            </p>
          ))}
        </div>
        {guide.sections?.map((s, index) => (
          <section key={s.h} id={`avsnitt-${index + 1}`} className="mt-10 scroll-mt-24">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">{s.h}</h2>
            <div className="mt-4 space-y-5">
              {s.p.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-ink">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
        {guide.template ? (
          <section id="exempelmall" className="mt-10 scroll-mt-24">
            <h2 className="font-display text-2xl tracking-tight">{guide.template.title}</h2>
            <p className="mt-3 text-muted">
              Kopiera texten och ersätt hakparenteserna med dina egna uppgifter.
            </p>
            <pre className="mt-4 whitespace-pre-wrap break-words rounded-2xl border border-line bg-paper p-5 font-sans text-base leading-relaxed">
              {guide.template.text}
            </pre>
          </section>
        ) : null}
        {guide.sources?.length ? (
          <section className="mt-10" aria-label="Källor">
            <h2 className="font-display text-2xl">Källor och vidare läsning</h2>
            <ul className="mt-3 space-y-2">
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} className="text-clay underline">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        {guide.faq?.length ? (
          <section className="mt-12">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Vanliga frågor</h2>
            <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-paper">
              {guide.faq.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold text-ink">
                    {f.q}
                  </summary>
                  <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}
        {product ? (
          <div className="mt-12 rounded-2xl bg-pine-deep p-6 text-pine-fg sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-sun uppercase">
              Skriv det direkt
            </p>
            <p className="mt-2 font-display text-3xl tracking-tight">{product.name}</p>
            <p className="mt-2 text-pine-fg/80">
              {product.short} Förhandsgranska början gratis, {sek(product.priceKr)} för hela texten.
            </p>
            <Button
              asChild
              className="mt-6 h-auto min-h-12 whitespace-normal"
              size="lg"
              variant="accent"
            >
              <Link to="/dokument/$slug" params={{ slug: product.slug }}>
                Skriv {product.name.toLowerCase()}
              </Link>
            </Button>
            {product.slug === "samboavtal" ? (
              <Link
                to="/samboavtal-koll"
                className="mt-4 block text-sm text-pine-fg/80 underline hover:text-pine-fg"
              >
                Osäkra? Gör den gratis samboavtal-kollen först
              </Link>
            ) : null}
          </div>
        ) : null}
        {related.length ? (
          <section className="mt-14 border-t border-line pt-8">
            <h2 className="font-display text-2xl tracking-tight">Läs också</h2>
            <div className="mt-5 grid gap-3">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  to="/guider/$slug"
                  params={{ slug: g.slug }}
                  className="rounded-2xl border border-line bg-paper p-5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold text-clay">{guideMinutes(g)} min läsning</p>
                  <h3 className="mt-1 font-display text-lg tracking-tight">{g.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </SiteFrame>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/catalog";
import { getGuide } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { siteImage } from "@/lib/schema";
import { sek } from "@/lib/utils";

export const Route = createFileRoute("/guider/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide, product: getProduct(guide.productSlug) };
  },
  head: ({ loaderData }) => {
    const guide = loaderData?.guide;
    if (!guide) return { meta: [{ title: `Guider — ${SITE_NAME}` }] };
    return {
      meta: [
        { title: `${guide.title} | ${SITE_NAME}` },
        { name: "description", content: guide.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.excerpt },
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
  const { guide, product } = Route.useLoaderData()!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    inLanguage: "sv-SE",
    mainEntityOfPage: `${SITE_URL}/guider/${guide.slug}`,
    image: siteImage,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/profil.jpg` },
    },
  };

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        kicker={
          <>
            <Link to="/guider" className="hover:underline">
              Guider
            </Link>
            <span className="text-pine-fg/60"> · {guide.minutes} min läsning</span>
          </>
        }
        title={guide.title}
        sub={guide.excerpt}
      />
      <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="space-y-5">
          {guide.body.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-ink">
              {p}
            </p>
          ))}
        </div>
        {product ? (
          <div className="mt-12 rounded-2xl bg-pine-deep p-6 text-pine-fg sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-sun uppercase">
              Skriv det direkt
            </p>
            <p className="mt-2 font-display text-3xl tracking-tight">{product.name}</p>
            <p className="mt-2 text-pine-fg/80">
              {product.short} Gratis utkast, {sek(product.priceKr)} för hela texten.
            </p>
            <Button asChild className="mt-6" size="lg" variant="accent">
              <Link to="/dokument/$slug" params={{ slug: product.slug }}>
                Skriv {product.name.toLowerCase()}
              </Link>
            </Button>
          </div>
        ) : null}
      </article>
    </SiteFrame>
  );
}

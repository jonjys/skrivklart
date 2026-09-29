import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Guiden finns inte</h1>
        <Link to="/guider" className="mt-4 inline-block text-pine">
          Till guiderna
        </Link>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm text-muted">
          <Link to="/guider" className="hover:text-ink">
            Guider
          </Link>
          <span className="mx-2 text-subtle">/</span>
          {guide.minutes} min
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{guide.title}</h1>
        <p className="mt-4 text-lg text-muted">{guide.excerpt}</p>
        <div className="mt-8 space-y-4">
          {guide.body.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-ink">
              {p}
            </p>
          ))}
        </div>
        {product ? (
          <div className="mt-12 rounded-2xl bg-pine-deep p-6 text-pine-fg sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-sun uppercase">Skriv det direkt</p>
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

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check } from "lucide-react";
import { Generator } from "@/components/generator";
import { HeroChip, PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { BUNDLES, CATEGORIES, getProduct } from "@/lib/catalog";
import { recordEvent } from "@/lib/ai";
import { GUIDES } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { productJsonLd, siteImage } from "@/lib/schema";
import { sek } from "@/lib/utils";

export const Route = createFileRoute("/dokument/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const product = loaderData;
    if (!product) return { meta: [{ title: `Dokument — ${SITE_NAME}` }] };
    const title = `${product.name} – mall och färdig text, ${product.priceKr} kr | ${SITE_NAME}`;
    const description = `${product.pitch} Gratis utkast, hela texten ${sek(product.priceKr)}. Inget konto.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: siteImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/dokument/${product.slug}` }],
    };
  },
  component: DokumentPage,
  notFoundComponent: () => (
    <SiteFrame>
      <div className="bg-pine-deep px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl bg-paper p-8 text-center shadow-[var(--shadow-lift)] sm:p-10">
          <h1 className="font-display text-3xl tracking-tight">Dokumentet finns inte</h1>
          <p className="mt-3 text-muted">Länken kan vara gammal. Välj direkt i listan i stället.</p>
          <Link
            to="/dokument"
            className="mt-6 inline-flex h-12 items-center rounded-xl bg-clay px-5 font-semibold text-clay-fg"
          >
            Till alla dokument
          </Link>
        </div>
      </div>
    </SiteFrame>
  ),
});

function DokumentPage() {
  const product = Route.useLoaderData()!;
  const category = CATEGORIES.find((c) => c.id === product.category);
  const bundle = BUNDLES.find((b) => b.includes !== "all" && b.includes.includes(product.slug));
  const guides = GUIDES.filter((g) => g.productSlug === product.slug).slice(0, 3);

  useEffect(() => {
    void recordEvent({ data: { name: "view", slug: product.slug } });
  }, [product.slug]);

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Dokument", item: `${SITE_URL}/dokument` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/dokument/${product.slug}`,
      },
    ],
  };

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd({
              name: product.name,
              description: product.pitch,
              slug: product.slug,
              priceKr: product.priceKr,
            }),
            breadcrumbs,
          ]),
        }}
      />
      <PageHero
        wide
        kicker={
          <nav aria-label="Brödsmulor">
            <Link to="/dokument" className="hover:underline">
              Dokument
            </Link>
            {category ? <span className="text-pine-fg/60"> / {category.label}</span> : null}
          </nav>
        }
        title={product.name}
        sub={product.pitch}
      >
        <div className="flex flex-wrap gap-2">
          <HeroChip strong>{sek(product.priceKr)} för hela texten</HeroChip>
          {["Gratis utkast", "Inget konto", "Klart på en minut"].map((chip) => (
            <HeroChip key={chip}>
              <Check className="size-3.5 text-sun" />
              {chip}
            </HeroChip>
          ))}
          {bundle ? (
            <Link to="/priser" hash={bundle.slug} className="hover:opacity-90">
              <HeroChip>
                Ingår i {bundle.name}, {sek(bundle.priceKr)}
              </HeroChip>
            </Link>
          ) : null}
        </div>
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div>
          <Generator product={product} />
        </div>

        {guides.length ? (
          <section className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-2xl tracking-tight">Läs mer innan du skickar</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  to="/guider/$slug"
                  params={{ slug: g.slug }}
                  className="rounded-2xl border border-line bg-paper p-5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold text-clay">{g.minutes} min</p>
                  <h3 className="mt-2 font-display text-lg tracking-tight">{g.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </SiteFrame>
  );
}

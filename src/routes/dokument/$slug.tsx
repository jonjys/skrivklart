import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check } from "lucide-react";
import { Generator } from "@/components/generator";
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
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Dokumentet finns inte</h1>
        <Link to="/dokument" className="mt-4 inline-block text-pine">
          Till katalogen
        </Link>
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
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <nav aria-label="Brödsmulor" className="text-sm text-muted">
          <Link to="/dokument" className="hover:text-ink">
            Dokument
          </Link>
          {category ? (
            <>
              <span className="mx-2 text-subtle">/</span>
              {category.label}
            </>
          ) : null}
        </nav>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-6xl">{product.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{product.pitch}</p>
        <ul className="mt-5 flex flex-wrap gap-2 text-sm">
          <li className="rounded-full bg-pine px-3 py-1.5 font-semibold text-pine-fg tabular-nums">
            {sek(product.priceKr)} för hela texten
          </li>
          {["Gratis utkast", "Inget konto", "Klart på en minut"].map((chip) => (
            <li key={chip} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5">
              <Check className="size-3.5 text-pine" />
              {chip}
            </li>
          ))}
          {bundle ? (
            <li>
              <Link
                to="/priser"
                hash={bundle.slug}
                className="inline-flex rounded-full bg-blush px-3 py-1.5 font-semibold text-clay hover:underline"
              >
                Ingår i {bundle.name}, {sek(bundle.priceKr)}
              </Link>
            </li>
          ) : null}
        </ul>
        <div className="mt-10">
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

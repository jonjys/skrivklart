import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/catalog";
import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

/** Generated from the catalog and guides so new pages are never missing. */
const LASTMOD = "2026-09-29";

const STATIC: [path: string, priority: string, freq: string][] = [
  ["/", "1.0", "weekly"],
  ["/priser", "0.9", "weekly"],
  ["/brev", "0.9", "weekly"],
  ["/dokument", "0.9", "weekly"],
  ["/guider", "0.8", "weekly"],
  ["/support", "0.4", "monthly"],
  ["/om", "0.3", "yearly"],
  ["/villkor", "0.2", "yearly"],
  ["/integritet", "0.2", "yearly"],
];

function sitemap() {
  const urls = [
    ...STATIC,
    ...PRODUCTS.filter((p) => p.slug !== "myndighetsbrev").map(
      (p) => [`/dokument/${p.slug}`, p.category === "familj" || p.category === "ekonomi" ? "0.9" : "0.7", "monthly"] as const,
    ),
    ...GUIDES.map((g) => [`/guider/${g.slug}`, "0.7", "monthly"] as const),
  ];
  const body = urls
    .map(
      ([path, priority, freq]) =>
        `  <url><loc>${SITE_URL}${path}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { GUIDES } from "@/lib/guides";

export const Route = createFileRoute("/guider/")({
  component: GuiderIndex,
  head: () => ({
    meta: [
      { title: "Guider – underhållsbidrag, Försäkringskassan, inkasso och skola | Skrivklart" },
      {
        name: "description",
        content:
          "Korta guider på vanlig svenska: avtal om underhållsbidrag, när den andra föräldern inte betalar, avbetalningsplan hos inkasso, omprövning hos Försäkringskassan och brev till skolan.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.skrivklart.se/guider" }],
  }),
});

function GuiderIndex() {
  return (
    <SiteFrame>
      <PageHero
        kicker="Korta, på vanlig svenska"
        title="Guider"
        sub="Underhåll, Försäkringskassan, skulder, skolan och mer. Läs på några minuter – skriv brevet direkt efteråt."
      />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              to="/guider/$slug"
              params={{ slug: g.slug }}
              className="block rounded-2xl border-2 border-line bg-paper p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-pine"
            >
              <p className="text-xs font-semibold text-clay">{g.minutes} min läsning</p>
              <h2 className="mt-1 font-display text-2xl tracking-tight">{g.title}</h2>
              <p className="mt-2 text-sm text-muted">{g.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteFrame>
  );
}

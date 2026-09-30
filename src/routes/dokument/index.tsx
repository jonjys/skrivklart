import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DocCard } from "@/components/doc-card";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/catalog";
import { recordEvent } from "@/lib/ai";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dokument/")({
  component: DokumentIndex,
  head: () => ({
    meta: [
      { title: "Alla dokument – underhåll, Försäkringskassan, skulder, skola | Skrivklart" },
      {
        name: "description",
        content:
          "Avtal om underhållsbidrag och umgänge, överklagande till FK, avbetalningsplan, brev till skola och socialtjänsten, CV och fler. Gratis utkast, 59 eller 99 kr för hela texten.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.skrivklart.se/dokument" }],
  }),
});

function DokumentIndex() {
  const [cat, setCat] = useState<Category | "alla">("alla");
  const list = cat === "alla" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  useEffect(() => {
    void recordEvent({ data: { name: "view", slug: "katalog" } });
  }, []);

  return (
    <SiteFrame>
      <PageHero
        kicker="Gratis utkast · 59 eller 99 kr för hela texten"
        title="Alla dokument"
        sub="Välj vad det gäller. Fyll i det du vet. Du läser utkastet innan du betalar något."
      >
        <div className="flex flex-wrap gap-2">
          <FilterChip active={cat === "alla"} onClick={() => setCat("alla")}>
            Alla
          </FilterChip>
          {CATEGORIES.map((c) => (
            <FilterChip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
              {c.label}
            </FilterChip>
          ))}
        </div>
      </PageHero>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <DocCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </SiteFrame>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-150",
        active ? "bg-sun text-ink" : "border border-pine-fg/25 text-pine-fg hover:bg-pine-fg/10",
      )}
    >
      {children}
    </button>
  );
}

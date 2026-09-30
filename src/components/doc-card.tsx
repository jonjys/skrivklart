import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { DocProduct } from "@/lib/catalog";
import { sek } from "@/lib/utils";

export function DocCard({ product }: { product: DocProduct }) {
  const isBrev = product.slug === "myndighetsbrev";
  return (
    <Link
      to={isBrev ? "/brev" : "/dokument/$slug"}
      params={isBrev ? undefined : { slug: product.slug }}
      className="group flex flex-col rounded-2xl border-2 border-line bg-paper p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-pine hover:shadow-[var(--shadow-lift)]"
    >
      <h3 className="font-display text-xl leading-tight tracking-tight text-ink">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.short}</p>
      <p className="mt-4 flex items-center justify-between text-sm font-semibold">
        <span className="tabular-nums text-pine">{sek(product.priceKr)}</span>
        <ArrowRight className="size-4 text-subtle transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100" />
      </p>
    </Link>
  );
}

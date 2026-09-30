import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The dark band every page opens with, matching the home page hero. */
export function PageHero({
  kicker,
  title,
  accent,
  sub,
  children,
  size = "md",
  wide,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  /** Optional second part of the title, set in the yellow accent. */
  accent?: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
  size?: "sm" | "md";
  /** Match the wider 6xl content column (document pages). */
  wide?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-pine-deep text-pine-fg">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-32 size-[30rem] rounded-full bg-clay/25 blur-3xl"
      />
      <div
        className={cn(
          "relative mx-auto px-4 sm:px-6",
          wide ? "max-w-6xl" : "max-w-5xl",
          size === "sm" ? "pt-10 pb-10 sm:pt-14 sm:pb-12" : "pt-10 pb-12 sm:pt-16 sm:pb-16",
        )}
      >
        {kicker ? <div className="text-sm font-semibold text-sun">{kicker}</div> : null}
        <h1
          className={cn(
            "mt-3 font-display leading-[1.02] tracking-tight",
            size === "sm" ? "text-4xl sm:text-5xl" : "text-[2.5rem] sm:text-6xl",
          )}
        >
          {title}
          {accent ? <span className="text-sun"> {accent}</span> : null}
        </h1>
        {sub ? (
          <div className="mt-4 max-w-2xl text-lg leading-relaxed text-pine-fg/80">{sub}</div>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}

/** A light chip for use on the dark hero. */
export function HeroChip({ children, strong }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold",
        strong ? "bg-sun text-ink" : "border border-pine-fg/20 text-pine-fg/90",
      )}
    >
      {children}
    </span>
  );
}

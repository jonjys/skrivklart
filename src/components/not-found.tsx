import { Link } from "@tanstack/react-router";
import { SiteFrame } from "./site-frame";

/** Shown for any URL that does not exist, so an old or mistyped link still leads somewhere. */
export function NotFound() {
  return (
    <SiteFrame>
      <div className="bg-pine-deep px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl bg-paper p-8 text-center shadow-[var(--shadow-lift)] sm:p-10">
          <h1 className="font-display text-3xl tracking-tight">Sidan finns inte</h1>
          <p className="mt-3 text-muted">
            Länken kan vara gammal eller felskriven. Här är det de flesta letar efter:
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/dokument/$slug"
              params={{ slug: "samboavtal" }}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-clay px-5 font-semibold text-clay-fg"
            >
              Samboavtal
            </Link>
            <Link
              to="/dokument"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-line px-5 font-semibold text-ink"
            >
              Alla dokument
            </Link>
            <Link
              to="/guider"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-line px-5 font-semibold text-ink"
            >
              Guider
            </Link>
          </div>
        </div>
      </div>
    </SiteFrame>
  );
}

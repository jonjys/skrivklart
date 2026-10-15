import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { getBundle, getProduct, getSellable } from "@/lib/catalog";
import { verifyCheckout } from "@/lib/orders";
import { useSkrivklart } from "@/lib/store";

export const Route = createFileRoute("/tack")({
  component: TackPage,
  validateSearch: (search: Record<string, unknown>) => ({
    session_id: typeof search.session_id === "string" ? search.session_id : undefined,
    doc: typeof search.doc === "string" ? search.doc : undefined,
  }),
  head: () => ({
    meta: [{ title: "Tack — Skrivklart" }, { name: "robots", content: "noindex, nofollow" }],
  }),
});

type Status =
  | { state: "checking" }
  | { state: "done"; slug: string; doc?: string }
  | { state: "failed"; error: string };

function destination(slug: string, doc?: string) {
  // A bundle bought from a document page goes back to that document.
  if (doc && getProduct(doc)) return destination(doc);
  if (slug === "myndighetsbrev") return { to: "/brev" as const };
  const bundle = getBundle(slug);
  if (bundle) {
    const first = bundle.includes === "all" ? null : bundle.includes[0];
    if (!first) return { to: "/dokument" as const };
    if (first === "myndighetsbrev") return { to: "/brev" as const };
    return { to: "/dokument/$slug" as const, params: { slug: first } };
  }
  return { to: "/dokument/$slug" as const, params: { slug } };
}

function TackPage() {
  const { session_id, doc: docParam } = Route.useSearch();
  const navigate = useNavigate();
  const unlock = useSkrivklart((s) => s.unlock);
  const unlockBundle = useSkrivklart((s) => s.unlockBundle);
  const [status, setStatus] = useState<Status>({ state: "checking" });
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!session_id) {
      setStatus({ state: "failed", error: "Ingen betalning att bekräfta." });
      return;
    }
    const run = async (attempt: number): Promise<void> => {
      const res = await verifyCheckout({ data: { sessionId: session_id } }).catch(() => null);
      if (res?.ok) {
        if (res.isBundle) unlockBundle(res.slug, res.pass, res.until);
        else unlock(res.slug, res.pass);
        const doc = res.doc ?? (res.isBundle ? docParam : undefined);
        setStatus({ state: "done", slug: res.slug, doc });
        // Back to the draft, which then opens the full text. A bundle bought on its own
        // (no draft to return to) stays here with a button instead.
        if (!res.isBundle || doc) {
          setTimeout(() => void navigate({ ...destination(res.slug, doc), replace: true }), 1400);
        }
        return;
      }
      // Card payments settle within seconds; give Stripe a moment before giving up.
      if (attempt < 4) {
        setTimeout(() => void run(attempt + 1), 1500);
        return;
      }
      setStatus({ state: "failed", error: res?.error ?? "Kunde inte bekräfta betalningen." });
    };
    void run(0);
  }, [session_id, docParam, unlock, unlockBundle, navigate]);

  const slug = status.state === "done" ? status.slug : null;
  const doneDoc = status.state === "done" ? status.doc : undefined;
  const item = slug ? getSellable(slug) : null;
  const bundle = slug ? getBundle(slug) : null;

  return (
    <SiteFrame>
      <div className="bg-pine-deep px-4 py-14 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl bg-paper p-8 text-center shadow-[var(--shadow-lift)] sm:p-10">
          {status.state === "checking" ? (
            <>
              <Loader2 className="mx-auto size-7 animate-spin text-pine" />
              <h1 className="mt-4 font-display text-3xl tracking-tight">Bekräftar betalningen…</h1>
              <p className="mt-3 text-muted">Det tar bara några sekunder.</p>
            </>
          ) : status.state === "failed" ? (
            <>
              <h1 className="font-display text-3xl tracking-tight">Något gick snett</h1>
              <p className="mt-4 text-muted">{status.error}</p>
              <p className="mt-2 text-sm text-subtle">
                Har du betalat? Ladda om sidan. Fungerar det ändå inte, skriv till oss i
                kontaktformuläret så löser en människa det.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button type="button" onClick={() => window.location.reload()}>
                  Försök igen
                </Button>
                <Button asChild variant="outline">
                  <Link to="/support" hash="kontakt">
                    Kontakta oss
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <CheckCircle2 className="mx-auto size-10 text-pine" />
              <h1 className="mt-4 font-display text-4xl tracking-tight">Tack!</h1>
              <p className="mt-4 text-muted">
                {bundle
                  ? `${bundle.name} är olåst i den här webbläsaren i ${bundle.days} dagar.${doneDoc ? " Vi skickar dig tillbaka till texten…" : ""}`
                  : `${item?.name ?? "Dokumentet"} är olåst. Vi skickar dig tillbaka till texten…`}
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link {...destination(slug!, doneDoc)}>
                    {bundle && !doneDoc ? "Börja skriva" : "Öppna dokumentet"}
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </SiteFrame>
  );
}

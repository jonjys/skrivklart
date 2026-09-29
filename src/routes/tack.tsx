import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { getBundle, getSellable } from "@/lib/catalog";
import { verifyCheckout } from "@/lib/orders";
import { useSkrivklart } from "@/lib/store";

export const Route = createFileRoute("/tack")({
  component: TackPage,
  validateSearch: (search: Record<string, unknown>) => ({
    session_id: typeof search.session_id === "string" ? search.session_id : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Tack — Skrivklart" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

type Status =
  | { state: "checking" }
  | { state: "done"; slug: string }
  | { state: "failed"; error: string };

function destination(slug: string) {
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
  const { session_id } = Route.useSearch();
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
        setStatus({ state: "done", slug: res.slug });
        // Single documents go straight back to the draft, which then writes the full text.
        if (!res.isBundle) {
          setTimeout(() => void navigate({ ...destination(res.slug), replace: true }), 1400);
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
  }, [session_id, unlock, unlockBundle, navigate]);

  const slug = status.state === "done" ? status.slug : null;
  const item = slug ? getSellable(slug) : null;
  const bundle = slug ? getBundle(slug) : null;

  return (
    <SiteFrame>
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
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
              Har du betalat? Ladda om sidan, eller skriv till oss via support så löser vi det.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button type="button" onClick={() => window.location.reload()}>
                Försök igen
              </Button>
              <Button asChild variant="outline">
                <Link to="/support">Support</Link>
              </Button>
            </div>
          </>
        ) : (
          <>
            <CheckCircle2 className="mx-auto size-10 text-pine" />
            <h1 className="mt-4 font-display text-4xl tracking-tight">Tack!</h1>
            <p className="mt-4 text-muted">
              {bundle
                ? `${bundle.name} är olåst i den här webbläsaren i ${bundle.days} dagar.`
                : `${item?.name ?? "Dokumentet"} är olåst. Vi skickar dig tillbaka till texten…`}
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link {...destination(slug!)}>{bundle ? "Börja skriva" : "Öppna dokumentet"}</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </SiteFrame>
  );
}

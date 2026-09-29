import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/catalog";
import { verifyCheckout } from "@/lib/orders";
import { JOB_PACK_SLUG, JOB_PACK_UNLOCKS, PRO_SLUG } from "@/lib/stripe-map";
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
  if (slug === JOB_PACK_SLUG) {
    return { to: "/dokument/$slug" as const, params: { slug: JOB_PACK_UNLOCKS[0] } };
  }
  if (slug === PRO_SLUG) return { to: "/dokument" as const };
  return { to: "/dokument/$slug" as const, params: { slug } };
}

function TackPage() {
  const { session_id } = Route.useSearch();
  const navigate = useNavigate();
  const unlock = useSkrivklart((s) => s.unlock);
  const unlockPro = useSkrivklart((s) => s.unlockPro);
  const unlockJobPack = useSkrivklart((s) => s.unlockJobPack);
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
        if (res.slug === PRO_SLUG) unlockPro(res.pass, res.until);
        else if (res.slug === JOB_PACK_SLUG) unlockJobPack(res.pass, res.until);
        else unlock(res.slug, res.pass);
        setStatus({ state: "done", slug: res.slug });
        if (res.slug !== PRO_SLUG) {
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
  }, [session_id, unlock, unlockPro, unlockJobPack, navigate]);

  const slug = status.state === "done" ? status.slug : null;
  const product = slug && slug !== PRO_SLUG && slug !== JOB_PACK_SLUG ? getProduct(slug) : null;

  return (
    <SiteFrame>
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        {status.state === "checking" ? (
          <>
            <Loader2 className="mx-auto size-6 animate-spin text-pine" />
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
            <h1 className="font-display text-4xl tracking-tight">Tack!</h1>
            <p className="mt-4 text-muted">
              {slug === PRO_SLUG
                ? "Pro är aktivt i den här webbläsaren. Alla dokument är olåsta."
                : slug === JOB_PACK_SLUG
                  ? "Jobbpaketet är olåst: personligt brev, CV och LinkedIn. Vi skickar dig vidare…"
                  : product
                    ? `${product.name} är olåst. Vi skickar dig tillbaka till texten…`
                    : "Betalningen är klar."}
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link {...destination(slug!)}>
                  {slug === PRO_SLUG ? "Välj dokument" : "Öppna dokumentet"}
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </SiteFrame>
  );
}

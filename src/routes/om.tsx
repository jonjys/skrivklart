import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/om")({
  component: OmPage,
  head: () => ({
    meta: [
      { title: "Om Skrivklart – brev och avtal för dig som sköter allt själv" },
      {
        name: "description",
        content:
          "Skrivklart skriver utkast till brev och avtal på svenska: underhållsbidrag, Försäkringskassan, skulder, skola. Gratis utkast, från 59 kr.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.skrivklart.se/om" }],
  }),
});

function OmPage() {
  return (
    <SiteFrame>
      <PageHero
        size="sm"
        kicker="Om oss"
        title="Skrivklart"
        sub="Brev och avtal för dig som sköter allt själv – skrivna på en minut, till ett pris som går att betala."
      />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="space-y-4 rounded-2xl border-2 border-line bg-paper p-6 text-base leading-relaxed text-ink/85 sm:p-8">
          <p>
            De flesta fastnar inte för att de inte kan skriva. De fastnar för att texten ska vara
            formell, svensk och omöjlig att ångra – och blanketten sitter i kroppen.
          </p>
          <p>
            Skrivklart tar dina fakta och skriver utkastet. Du läser. Du ändrar. Du skickar. Vi är
            inte en juristbyrå, inte ett fackförbund, inte Skatteverket.
          </p>
          <p>
            Priset är lågt med flit. Ett personligt brev ska inte kosta en timmes konsult. Ett
            överklagande ska inte kräva att du sätter dig tre kvällar.
          </p>
          <p>
            <Link to="/dokument" className="text-pine hover:underline">
              Skriv ett dokument
            </Link>
            . Eller fråga{" "}
            <Link to="/support" className="text-pine hover:underline">
              Rådgivaren
            </Link>{" "}
            vad du egentligen behöver.
          </p>
        </div>
      </div>
    </SiteFrame>
  );
}

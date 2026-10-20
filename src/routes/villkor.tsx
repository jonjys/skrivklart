import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/villkor")({
  component: VillkorPage,
  head: () => ({
    meta: [
      { title: "Villkor | Skrivklart" },
      {
        name: "description",
        content:
          "Villkor för Skrivklart: utkast, inte juridisk rådgivning. Engångsbetalning via Stripe, digitalt innehåll levereras direkt.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.skrivklart.se/villkor" }],
  }),
});

function VillkorPage() {
  return (
    <SiteFrame>
      <PageHero size="sm" kicker="Det viktiga, kort" title="Villkor" />
      <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="space-y-4 rounded-2xl border-2 border-line bg-paper p-6 text-base leading-relaxed text-ink/85 sm:p-8">
          <p>
            Skrivklart säljer AI-genererade textutkast på svenska. Frågor om ett köp: skriv till oss
            i kontaktformuläret på supportsidan, så svarar en människa.
          </p>
          <p>
            Dokumenten är utkast. De är inte juridisk rådgivning, inte ett ombud, och inte en
            garanti för att en myndighet, arbetsgivare eller motpart godtar texten. Du ansvarar för
            att granska, komplettera och skicka.
          </p>
          <p>
            Betalning sker via Stripe. Ett enskilt dokument låses upp i din webbläsare. Ett paket
            låser upp de dokument som ingår under den tid som anges vid köpet (30 eller 60 dagar) i
            den här webbläsaren. Alla köp är engångsbetalningar, inga prenumerationer.
          </p>
          <p>
            Förhandsvisningen är gratis. I kassan begär du uttryckligen att det digitala
            innehållet levereras direkt och bekräftar att ångerrätten då upphör när leveransen
            påbörjas. Utan detta samtycke slutförs inte köpet. Din rätt att reklamera fel i
            tjänsten eller innehållet påverkas inte.
          </p>
          <p>
            Gick pengarna men texten kom inte fram: skriv till oss i kontaktformuläret på
            supportsidan. Då löser vi det.
          </p>
          <p>
            Vi kan stänga av missbruk, automatiserade anrop och uppenbara försök att kringgå
            betalning.
          </p>
          <p>Svensk lag. Tvist i svensk allmän domstol.</p>
        </div>
      </article>
    </SiteFrame>
  );
}

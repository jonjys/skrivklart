import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/villkor")({
  component: VillkorPage,
});

function VillkorPage() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-4xl tracking-tight">Villkor</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          <p>Skrivklart säljer AI-genererade textutkast på svenska. Tjänsten tillhandahålls av den som driver sajten.</p>
          <p>
            Dokumenten är utkast. De är inte juridisk rådgivning, inte ett ombud, och inte en garanti
            för att en myndighet, arbetsgivare eller motpart godtar texten. Du ansvarar för att
            granska, komplettera och skicka.
          </p>
          <p>
            Betalning sker via Stripe. Ett enskilt dokument låses upp i din webbläsare. Ett
            paket låser upp de dokument som ingår under den tid som anges vid köpet (30 eller 60
            dagar) i den här webbläsaren. Alla köp är engångsbetalningar, inga prenumerationer.
          </p>
          <p>
            Utkastet är gratis. Där ser du om texten duger innan du betalar. När du betalar
            levereras hela dokumentet direkt i webbläsaren. Då upphör ångerrätten för digitalt
            innehåll. Ingen återbetalning för att du «inte blev nöjd» efter att du fått texten.
          </p>
          <p>
            Gick pengarna men texten kom inte fram: skriv till support. Då tittar vi på det.
          </p>
          <p>Vi kan stänga av missbruk, automatiserade anrop och uppenbara försök att kringgå betalning.</p>
          <p>Svensk lag. Tvist i svensk allmän domstol.</p>
        </div>
      </article>
    </SiteFrame>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/integritet")({
  component: IntegritetPage,
  head: () => ({
    meta: [
      { title: "Integritet | Skrivklart" },
      {
        name: "description",
        content:
          "Så hanterar Skrivklart det du skriver: utkastet sparas i din webbläsare, betalning via Stripe, inga reklamprofiler.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.skrivklart.se/integritet" }],
  }),
});

function IntegritetPage() {
  return (
    <SiteFrame>
      <PageHero size="sm" kicker="Vad som händer med det du skriver" title="Integritet" />
      <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="space-y-4 rounded-2xl border-2 border-line bg-paper p-6 text-base leading-relaxed text-ink/85 sm:p-8">
          <p>
            Dokumentets innehåll sparas i din webbläsare (localStorage). Vi lagrar inte
            dokumenttexten i vår databas.
          </p>
          <p>
            När du skriver ett utkast skickas dina formuläruppgifter till vår AI-leverantör (xAI)
            för att producera texten. Skicka inte personnummer, bankuppgifter eller andras känsliga
            data i formuläret.
          </p>
          <p>
            Betalning hanteras av Stripe. De får de uppgifter som krävs för att genomföra köpet. Vi
            sparar orderns produkt, belopp och en slumpmässig åtkomstnyckel – inte kortnummer.
          </p>
          <p>
            Vi loggar anonyma händelser (visning, utkast, köp) för att se vad som fungerar. Ingen
            reklamprofil, inga tredjepartspixlar i skrivläget.
          </p>
          <p>Supportchatten skickar dina meddelanden till samma AI för att kunna svara.</p>
          <p>
            Vi räknar sidvisningar med Vercel Web Analytics. Det sätter inga cookies och följer dig
            inte mellan sajter. Vi skickar bara sidans adress utan frågeparametrar, så inga
            formuläruppgifter eller orderreferenser följer med. Vercel sparar hänvisande sajt, land,
            enhetstyp och webbläsare som samlad statistik. Har du Do Not Track eller Global Privacy
            Control påslaget skickas ingenting.
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}

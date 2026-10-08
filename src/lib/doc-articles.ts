/**
 * Long-form content shown under the generator on selected document pages, so the
 * page answers what people search for (and Google has something to rank).
 * Plain facts, no legal advice.
 */
export type DocArticle = {
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  faq: { q: string; a: string }[];
};

export const DOC_ARTICLES: Record<string, DocArticle> = {
  samboavtal: {
    seoTitle: "Samboavtal – mall och färdigt avtal på några minuter (99 kr) | Skrivklart",
    seoDescription:
      "Skriv ert samboavtal online: bostad, bostadsrätt, bohag och vad som gäller vid separation. Gratis utkast, färdigt avtal för 99 kr. Ingen registrering behövs.",
    intro:
      "Ett samboavtal bestämmer vad som händer med bostaden och bohaget om ni flyttar isär. Utan avtal gäller sambolagen, och den delar ofta på saker som ni själva tycker att den ena äger. Här är vad som gäller, vad avtalet ska innehålla och hur ni skriver det.",
    sections: [
      {
        h: "Vad gäller om ni inte har ett samboavtal?",
        p: [
          "Sambolagen gäller automatiskt när två personer bor tillsammans i ett parförhållande med gemensamt hushåll. Ni behöver inte anmäla något.",
          "Om ni separerar kan var och en begära bodelning. Då delas samboegendomen lika: den gemensamma bostaden och det bohag som ni skaffat för att använda tillsammans. Det spelar ingen roll vem som betalade eller vem som står på kontraktet.",
          "Sådant som inte räknas som samboegendom delas inte, till exempel bil, sparpengar, aktier, fritidshus och saker som den ena hade innan ni flyttade ihop och som inte skaffades för gemensamt bruk.",
          "Bodelning måste begäras senast ett år efter att ni flyttat isär. Begär ingen bodelning behåller var och en sitt.",
        ],
      },
      {
        h: "Vad kan ni bestämma i ett samboavtal?",
        p: [
          "Ni kan avtala att det inte ska bli någon bodelning alls, eller att viss egendom inte ska ingå. Det vanligaste är att bostaden som den ena köpte eller betalade kontantinsatsen för ska stanna hos den personen.",
          "Avtalet kan skrivas när ni redan bor ihop eller innan ni flyttar ihop. Ni kan ändra eller upphäva det senare genom ett nytt skriftligt avtal som ni båda skriver under.",
        ],
      },
      {
        h: "Samboavtal och bostadsrätt eller hus",
        p: [
          "En bostadsrätt eller ett hus som ni skaffat för att bo i tillsammans är samboegendom, även om bara den ena står som ägare. Vid en bodelning delas värdet då lika efter avdrag för skulder.",
          "Har den ena betalat hela eller större delen av kontantinsatsen är det just därför många skriver samboavtal: avtalet kan undanta bostaden från bodelningen, så att den stannar hos den som äger den.",
          "Äger ni bostaden tillsammans men med olika andelar, skriv in ägarandelarna i köpekontraktet. Samboavtalet kan sedan säga att bostaden inte ska ingå i bodelningen, så att era ägarandelar gäller.",
          "En hyresrätt som ni skaffat för gemensamt boende räknas också som samboegendom, oavsett vems namn som står på kontraktet.",
        ],
      },
      {
        h: "Det här ska stå i avtalet",
        p: [
          "Era namn och personnummer, och datum då ni flyttade ihop eller ska flytta ihop.",
          "Vilken bostad det gäller (adress, bostadsrätt, hus eller hyresrätt) och om den ska ingå i en bodelning eller inte.",
          "Bohag eller annat ni vill hålla utanför bodelningen, uppräknat så tydligt att det går att känna igen.",
          "Om bodelning inte ska ske alls, eller bara gälla viss egendom.",
          "Ort, datum och underskrift från er båda. Spara var sitt original.",
        ],
      },
      {
        h: "Behöver samboavtalet registreras?",
        p: [
          "Nej. Till skillnad från ett äktenskapsförord registreras samboavtal inte hos Skatteverket. Avtalet gäller när det är skriftligt och underskrivet av er båda.",
          "Vittnen är inget krav, men många låter två personer bevittna underskrifterna för att det inte ska kunna ifrågasättas senare.",
        ],
      },
      {
        h: "Om någon av er dör",
        p: [
          "Sambor ärver inte varandra enligt lag. Vill ni att den andra ska ärva behövs ett testamente, och det är ett separat dokument.",
          "Den efterlevande sambon kan begära bodelning och har då rätt att få ut samboegendom upp till ett värde av två prisbasbelopp, om det finns så mycket.",
        ],
      },
      {
        h: "Så skriver ni ert samboavtal här",
        p: [
          "Fyll i fälten ovan: vilka ni är, bostaden och vad som ska hållas utanför. Ni ser ett utkast direkt, gratis. Hela avtalet med numrerade paragrafer, underskriftsrader och plats för vittnen kostar 99 kr. Inget konto.",
          "Skriv ut två exemplar, läs igenom tillsammans och skriv under båda. Skrivklart ger ett skarpt utkast, inte juridisk rådgivning. Vid stora värden eller ovanliga situationer, låt en jurist läsa igenom.",
        ],
      },
    ],
    faq: [
      {
        q: "Måste ett samboavtal registreras hos Skatteverket?",
        a: "Nej. Ett samboavtal gäller när det är skriftligt och underskrivet av båda. Det är äktenskapsförord som registreras hos Skatteverket.",
      },
      {
        q: "Behövs vittnen på ett samboavtal?",
        a: "Nej, vittnen är inget krav enligt sambolagen. Två vittnen gör det svårare att senare ifrågasätta underskrifterna.",
      },
      {
        q: "Vem får bostaden om vi separerar utan samboavtal?",
        a: "Om bostaden skaffades för gemensamt boende är den samboegendom och värdet delas lika vid bodelning, oavsett vem som betalade. Med ett samboavtal kan ni bestämma att bostaden inte ska ingå.",
      },
      {
        q: "Kan man skriva samboavtal innan man flyttar ihop?",
        a: "Ja. Ni kan skriva samboavtal både innan ni flyttar ihop och när ni redan bor tillsammans.",
      },
      {
        q: "Ingår bilen och sparpengar i bodelningen?",
        a: "Nej. Sambolagens bodelning gäller bara gemensam bostad och bohag som skaffats för gemensamt bruk. Bil, sparande och aktier delas inte.",
      },
      {
        q: "Ärver sambor varandra?",
        a: "Nej. Sambor ärver inte varandra enligt lag. Vill ni det behövs ett testamente.",
      },
      {
        q: "Vad kostar ett samboavtal hos Skrivklart?",
        a: "Utkastet är gratis att läsa. Hela avtalet kostar 99 kr, en gång. Inget konto eller abonnemang.",
      },
    ],
  },
};

export function getDocArticle(slug: string): DocArticle | undefined {
  return DOC_ARTICLES[slug];
}

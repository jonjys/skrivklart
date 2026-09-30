export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  productSlug: string;
  minutes: number;
  body: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: "underhallsbidrag-avtal",
    title: "Avtal om underhållsbidrag: så skriver du det så att det håller",
    excerpt:
      "Ett muntligt löfte om underhåll är svårt att driva in. Ett skriftligt, bevittnat avtal går att ta till Kronofogden.",
    productSlug: "underhallsavtal",
    minutes: 4,
    body: [
      "Underhållsbidrag är pengar som föräldern som inte bor med barnet betalar till barnets försörjning. Enligt föräldrabalken ska båda föräldrarna bidra efter sin förmåga, och skyldigheten gäller tills barnet fyller 18 år – eller längre, upp till 21 år, om barnet fortfarande går i skolan.",
      "Ni kan komma överens om beloppet själva. Försäkringskassan har en räknare på sin webbplats som ger ett rimligt utgångsläge utifrån inkomster, boende och barnets behov. Använd den innan ni skriver.",
      "Det viktigaste är att avtalet är skriftligt och undertecknat av den som ska betala, och att två personer bevittnar underskriften. Ett sådant avtal kan Kronofogden verkställa om betalningarna slutar komma – utan att du först måste gå till domstol.",
      "Skriv in barnets namn och födelseår, belopp per barn och månad, vilken dag pengarna ska vara inne, hur de betalas och från vilket datum. Vill ni att beloppet följer prisutvecklingen, skriv det också.",
      "Spara originalet. Ta en kopia var. Om den andra föräldern vägrar skriva under kan du ansöka om underhållsstöd hos Försäkringskassan eller väcka talan i tingsrätten.",
    ],
  },
  {
    slug: "pappan-betalar-inte-underhall",
    title: "Den andra föräldern betalar inte underhåll – vad gör jag nu?",
    excerpt:
      "Tre vägar när pengarna uteblir: underhållsstöd från Försäkringskassan, Kronofogden eller ett nytt avtal.",
    productSlug: "underhallsavtal",
    minutes: 4,
    body: [
      "Om barnet bor hos dig och den andra föräldern inte betalar underhållsbidrag kan du ansöka om underhållsstöd hos Försäkringskassan. Då betalar Försäkringskassan ett fast belopp till dig, och kräver sedan den andra föräldern på pengarna. Du behöver inte driva det själv.",
      "Har ni redan ett skriftligt avtal som är bevittnat av två personer, eller en dom om underhåll, kan du vända dig direkt till Kronofogden och ansöka om verkställighet för det som inte betalats.",
      "Har ni inget avtal alls är det första steget att få ett på papper. Skicka ett förslag med belopp, betalningsdag och startdatum, och be om svar till ett visst datum. Sakligt, utan anklagelser – brevet kan komma att läsas av fler än er två.",
      "Spara alla meddelanden och kontoutdrag som visar vad som betalats och när. Det gör varje nästa steg enklare, oavsett om det är Försäkringskassan, Kronofogden eller tingsrätten.",
    ],
  },
  {
    slug: "umgangesavtal-mall",
    title: "Avtal om boende och umgänge: det ni bör skriva ner",
    excerpt:
      "Veckoschema, lov, hämtning och hur ni ändrar saker. Och hur avtalet kan få samma verkan som en dom.",
    productSlug: "umgangesavtal",
    minutes: 4,
    body: [
      "Ett avtal om boende och umgänge handlar om barnets vardag: var barnet bor, när barnet träffar den andra föräldern, hur lov och högtider delas och vem som hämtar och lämnar.",
      "Var konkret. 'Varannan helg' blir tydligare som 'varannan helg från fredag kl. 16 till söndag kl. 18, med start vecka 45'. Skriv också hur ni meddelar ändringar och hur långt i förväg.",
      "Ni kan be socialnämnden i kommunen att godkänna avtalet. Ett godkänt avtal gäller på samma sätt som en dom och kan verkställas. Socialnämnden godkänner avtalet om det är till barnets bästa.",
      "Om ni inte kommer överens erbjuder kommunen samarbetssamtal. De är kostnadsfria och ett bra steg innan någon går till domstol.",
    ],
  },
  {
    slug: "avbetalningsplan-inkasso",
    title: "Avbetalningsplan hos inkasso: så ber du om en",
    excerpt:
      "Ett konkret förslag med belopp och startdatum fungerar bättre än att vänta. Innan skulden går till Kronofogden.",
    productSlug: "avbetalningsplan",
    minutes: 3,
    body: [
      "Ett inkassokrav är inte ett beslut från en myndighet. Det är ett företag som vill ha betalt. De flesta går med på en avbetalningsplan om förslaget är rimligt och kommer i tid.",
      "Skriv vad skulden gäller, ärendenummer och vad du kan betala varje månad från ett visst datum. Hellre ett lägre belopp du klarar varje månad än ett högre du missar.",
      "Be om en skriftlig bekräftelse på planen, och fråga om de avstår från nya avgifter och från att ansöka om betalningsföreläggande hos Kronofogden så länge du betalar enligt planen.",
      "Om du anser att du inte är skyldig pengarna: säg det tydligt och skriftligt, så att ärendet blir tvistigt. Betala då inte bara för att bli av med brevet.",
      "Behöver du hjälp att få ihop ekonomin kan du kontakta budget- och skuldrådgivningen i din kommun. Den är gratis.",
    ],
  },
  {
    slug: "overklaga-bostadsbidrag",
    title: "Fått avslag på bostadsbidrag? Så begär du omprövning",
    excerpt:
      "Försäkringskassan prövar sitt beslut igen om du begär det inom två månader. Fakta, inte känslor.",
    productSlug: "overklagande",
    minutes: 3,
    body: [
      "Är du inte nöjd med ett beslut från Försäkringskassan, till exempel om bostadsbidrag, underhållsstöd eller VAB, kan du begära omprövning. Det ska göras inom två månader från den dag du fick beslutet.",
      "Skriv vilket beslut det gäller, datum och ärendenummer, vad du vill att Försäkringskassan ska ändra och varför. Peka ut de uppgifter de missat eller tolkat fel, och bifoga det som visar det: hyresavtal, lönebesked, intyg.",
      "Håll det sakligt och kort. En handläggare letar efter nya fakta eller fel i bedömningen, inte efter hur jobbigt situationen är – även om den är det.",
      "Blir omprövningen också ett avslag kan du överklaga till förvaltningsrätten. Hur du gör det står i beslutet.",
    ],
  },
  {
    slug: "ansokan-socialtjansten",
    title: "Ansöka om ekonomiskt bistånd: skriv så att det blir rätt från början",
    excerpt:
      "Vad du söker, för vad och varför det är bråttom. Och varför du ska be om ett skriftligt beslut.",
    productSlug: "socialtjansten",
    minutes: 3,
    body: [
      "Ekonomiskt bistånd söker du hos socialtjänsten i kommunen där du bor. Ju tydligare ansökan, desto färre kompletteringar och desto snabbare beslut.",
      "Skriv vad du söker, för vilken månad och vilket belopp: hyra, el, mat, något specifikt för barnen. Lista bilagorna, till exempel hyresavi, kontoutdrag och beslut från Försäkringskassan.",
      "Är det akut – en hyra som förfaller eller el som ska stängas av – skriv det överst med datum.",
      "Be alltid om ett skriftligt beslut. Då står det hur du överklagar om du får avslag. Ett överklagande ska ha kommit in inom tre veckor från att du fick beslutet.",
    ],
  },
  {
    slug: "brev-till-skolan",
    title: "Brev till skolan eller förskolan som blir besvarat",
    excerpt:
      "Ledighet, extra stöd eller oro för ditt barn. Ämnesrad, fakta, vad du vill och när du vill ha svar.",
    productSlug: "skola-forskola",
    minutes: 3,
    body: [
      "Ett mejl till skolan blir oftast läst när det är kort och tydligt. Skriv barnets namn och klass eller avdelning i ämnesraden, och vad det gäller.",
      "Beskriv det som hänt med datum, utan att döma någon. Skriv sedan vad du vill: ett möte, att skolan utreder behovet av stöd, eller ett svar på en ansökan.",
      "Gäller det kränkningar är skolan skyldig att utreda och vidta åtgärder när de fått kännedom om det. Be om besked om vad de gör och när.",
      "Ansökan om ledighet beslutar rektorn om. Skriv datum, skäl och hur ditt barn tar igen skolarbetet, och skicka den i god tid.",
    ],
  },
  {
    slug: "personligt-brev-som-las",
    title: "Personligt brev som någon faktiskt läser",
    excerpt: "Skippa mallarna. Tre grejer rekryterare skummar efter – och hur du ger dem det.",
    productSlug: "personligt-brev",
    minutes: 4,
    body: [
      "Rekryterare läser inte brev. De skummar. Första meningen avgör om de går vidare till stycke två. Om stycke ett är 'jag söker härmed tjänsten som' är du redan borta.",
      "Öppna med något som bara du kan säga: en siffra, ett ansvar, ett problem du löst. Inte en känsla.",
      "Andra stycket: varför just det här bolaget. En konkret sak från annonsen räcker. Tredje: vad du vill göra i rollen, inte vad du hoppas få.",
      "Håll det under en sida. Avsluta med att du tar en intervju, inte att du 'ser fram emot återkoppling i den mån det är möjligt'.",
    ],
  },
  {
    slug: "overklaga-utan-att-skrika",
    title: "Överklaga Försäkringskassan utan att skrika",
    excerpt: "Myndigheter struntar i känslor. De struntar inte i fakta de missat.",
    productSlug: "overklagande",
    minutes: 5,
    body: [
      "Ett överklagande är inte ett brev till en vän. Det är en begäran att ett beslut ska ändras, med grunder.",
      "Skriv vad beslutet säger, vilket datum, och vad du yrkar. Sen: vilka fakta som saknades eller tolkades fel. Punkt. Inte din livshistoria.",
      "Bifoga det du hänvisar till. Om du inte har diarienummer, lämna en lucka och fyll i från beslutet.",
      "Skicka i tid. Frist står i beslutet. En dag för sent och texten är värdelös oavsett hur bra den är.",
    ],
  },
  {
    slug: "mall-overklagande-forsakringskassan",
    title: "Mall: överklaga Försäkringskassan",
    excerpt: "Strukturen en handläggare förväntar sig. Inte en mall att klistra i blint.",
    productSlug: "overklagande",
    minutes: 5,
    body: [
      "Rubrik: Överklagande av beslut den [datum], diarienummer [nr]. Mottagare: den instans som står i beslutet, ofta Förvaltningsrätten via Försäkringskassan.",
      "1) Vad beslutet säger. En mening. 2) Vad du yrkar: att beslutet upphävs och att [ersättning/insats] beviljas. 3) Grunder: fakta som saknades, felaktig bedömning, läkarintyg de inte vägt in.",
      "Håll känslor utanför. 'Jag är förtvivlad' flyttar inget. 'Läkarintyg 12 mars anger nedsättning 75 %, vilket inte nämns i beslutet' gör det.",
      "Skicka inom den frist som står i beslutet, vanligen tre veckor. Behåll kopia. Det här är ett utkast, inte juridisk rådgivning.",
    ],
  },
  {
    slug: "samboavtal-innan-det-brinner",
    title: "Samboavtal innan det brinner",
    excerpt: "Inte romantiskt. Billigare än att bråka om soffan och insatsen.",
    productSlug: "samboavtal",
    minutes: 4,
    body: [
      "Sambolagen är inte samma sak som äktenskapsbalken. Bodelning gäller samboegendom – främst gemensam bostad och bohag ni skaffat för gemensamt bruk.",
      "Ett samboavtal kan ta undan det, eller slå fast det. Poängen är att ni vet vad som gäller den dag någon av er vill det.",
      "Skriv vem som äger bostaden, vem som lagt insats, vad som är enskilt. Underskrift av båda. Vittnen är bra vana, inte alltid ett lagkrav för just samboavtal – men gör det ändå.",
      "Det här är ett utkast, inte juridisk rådgivning. Har ni hus, bolag eller barn: visa en jurist innan ni skriver under.",
    ],
  },
  {
    slug: "samboavtal-mall",
    title: "Samboavtal mall – vad som måste med",
    excerpt: "Parter, bostad, bohag, bodelning, underskrift. Resten är brus.",
    productSlug: "samboavtal",
    minutes: 4,
    body: [
      "Ett samboavtal som håller att läsa högt: namn och personnummer på er båda, datum ni flyttade ihop, adressen.",
      "Bostaden: hyresrätt, bostadsrätt eller hus. Vem som står på kontraktet. Vem som la kontantinsats. Om den ska vara samboegendom eller inte.",
      "Bohag ni vill hålla utanför – räkna upp. Bil, sparande, arv. Det som inte nämns kan bli en slagsmålspunkt senare.",
      "Avsluta med att sambolagens bodelningsregler ersätts eller gäller, datum, ort, två underskrifter. Utkast, inte rådgivning.",
    ],
  },
  {
    slug: "hyresansokan-stockholm",
    title: "Hyresansökan i Stockholm som inte hamnar i högen",
    excerpt: "Värdar drunknar i 'vi är skötsamma'. Ge dem risk, inkomst och datum.",
    productSlug: "hyresansokan",
    minutes: 3,
    body: [
      "Värden vill veta tre saker: kan du betala, kommer du sköta lägenheten, kan du flytta när de vill.",
      "Skriv hushåll, ungefärlig inkomst, anställning, om du har referens, och när du kan tillträda. Husdjur i en mening, inte en uppsats.",
      "Koppla till just den lägenheten. Område, storlek, varför den passar. Generiska kärleksbrev till 'er vackra tvåa' åker ut.",
    ],
  },
  {
    slug: "reklamera-ratt",
    title: "Reklamera så företaget inte kan låtsas att de inte förstått",
    excerpt: "Krav, frist, kvitto. Inte en recension.",
    productSlug: "reklamation",
    minutes: 3,
    body: [
      "Säg vad du köpt, när, vad som är fel, och vad du kräver: reparation, ny vara, prisavdrag eller häva köpet.",
      "Ge en frist. 14 dagar är begripligt. Skriv att du vänder dig vidare om de tiger.",
      "Spara mailet. Chattar försvinner. Ett brev på pränt är det som räknas om ARN kommer in.",
    ],
  },
  {
    slug: "lana-ut-till-en-van",
    title: "När du lånar ut till en vän",
    excerpt: "Skuldebrevet är inte misstro. Det är hur vänskapen överlever beloppet.",
    productSlug: "skuldebrev",
    minutes: 3,
    body: [
      "Skriv belopp, om det är ränta eller inte, när det ska vara tillbaka, och vad som händer om det drar ut.",
      "Båda skriver under. En kopia var. Swish-historik är inte ett avtal.",
      "Om summan gör ont i magen redan nu: låna inte ut. Papperet räddar inte en dålig magkänsla.",
    ],
  },
  {
    slug: "konsultavtal-enskild-firma",
    title: "Konsultavtal för enskild firma",
    excerpt: "Uppdrag, arvode, IP. Innan du börjar i Slack.",
    productSlug: "konsultavtal",
    minutes: 4,
    body: [
      "Skriv vem som är uppdragsgivare och vem som är konsult, org.nr om ni har. Vad som ska levereras, när, var.",
      "Arvode: timme eller fast. När fakturan går. Dröjsmålsränta. Utlägg. F-skatt – du ansvarar för egna avgifter.",
      "IP: vem äger resultatet. Standard i Sverige är att kunden får det ni avtalat, resten stannar hos konsulten om ni inte säger annat.",
      "Uppsägning i dagar, inte 'när det känns'. Tillämplig lag Sverige. Utkast, inte juridisk rådgivning.",
    ],
  },
  {
    slug: "cv-profil-utan-floskler",
    title: "CV-profil utan floskler",
    excerpt: "Fem rader som avgör om de läser erfarenheten.",
    productSlug: "cv-text",
    minutes: 3,
    body: [
      "Profilen är inte en sammanfattning av allt du gjort. Den är ett svar på 'varför just du till den här tjänsten'.",
      "Börja med roll + år + en konkret effekt. Inte 'driven lagspelare med öga för detaljer'.",
      "Tre styrkor max, kopplade till sådant du kan peka på i punkterna under. Resten är brus de redan sett hundra gånger.",
    ],
  },
  {
    slug: "uppsagning-mall",
    title: "Mall: säga upp sig utan drama",
    excerpt: "Datum, tjänst, sista dag. HR behöver inte din livsberättelse.",
    productSlug: "uppsagning",
    minutes: 3,
    body: [
      "Ett uppsägningsbrev är ett meddelande, inte ett avskedstal. Skriv vem du är, vilken tjänst, och från vilket datum anställningen upphör.",
      "Kolla avtalet och lagen för uppsägningstid. Skriv den tid du räknar med, inte den du önskar.",
      "Be om skriftlig bekräftelse, arbetsgivarintyg och slutlön. Punkt. Skicka till chef och HR samma dag.",
    ],
  },
  {
    slug: "arn-anmalan-steg",
    title: "ARN-anmälan: när företaget sagt nej",
    excerpt: "Först reklamation. Sen nämnden. Inte tvärtom.",
    productSlug: "arn-anmalan",
    minutes: 4,
    body: [
      "ARN prövar tvister mellan konsument och näringsidkare. De vill se att du redan krävt rättelse.",
      "Skriv parter, vad du köpt, vad som är fel, vad du yrkar, och bifoga kvitto plus företagets svar.",
      "Håll känslor utanför. Nämnden läser yrkandet, inte din recension av kundtjänsten.",
    ],
  },
  {
    slug: "fullmakt-nar-du-inte-kan-ga-sjalv",
    title: "Fullmakt när du inte kan gå själv",
    excerpt: "Vem, vad, hur länge. Resten är vittnen om du vill vara extra tydlig.",
    productSlug: "fullmakt",
    minutes: 3,
    body: [
      "En fullmakt är en tillåtelse på papper. Ju snävare uppdrag, desto mindre kan den missbrukas.",
      "Skriv namn på båda, exakt vad den får göra, och ett slutdatum. 'Tills vidare' går, men datum är lugnare.",
      "Bank och mäklare kan kräva original och vittnen. Fråga dem innan du skriver, så du inte får göra om.",
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

export type Guide = {
  slug: string;
  /** H1 and card title. */
  title: string;
  /** <title> when the H1 is not how people search; " | Skrivklart" is added. */
  seoTitle?: string;
  /** Meta description, 130–160 characters. Falls back to the excerpt. */
  seoDescription?: string;
  excerpt: string;
  productSlug: string;
  /** First published, YYYY-MM-DD. */
  published: string;
  /** Last content change, YYYY-MM-DD, when later than `published`. */
  updated?: string;
  /** Opening paragraphs. */
  body: string[];
  sections?: { h: string; p: string[] }[];
  faq?: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  template?: { title: string; text: string };
};

export const GUIDES: Guide[] = [
  {
    slug: "underhallsbidrag-avtal",
    title: "Avtal om underhållsbidrag: så skriver du det så att det håller",
    excerpt:
      "Ett muntligt löfte om underhåll är svårt att driva in. Ett skriftligt, bevittnat avtal går att ta till Kronofogden.",
    productSlug: "underhallsavtal",
    published: "2026-09-29",
    updated: "2026-10-15",
    body: [
      "Underhållsbidrag är pengar som föräldern som inte bor med barnet betalar till barnets försörjning. Enligt föräldrabalken ska båda föräldrarna bidra efter sin förmåga, och skyldigheten gäller tills barnet fyller 18 år – eller längre, upp till 21 år, om barnet fortfarande går i skolan.",
      "Ni kan komma överens om beloppet själva. Försäkringskassan har en räknare på sin webbplats som ger ett rimligt utgångsläge utifrån inkomster, boende och barnets behov. Använd den innan ni skriver.",
      "Det viktigaste är att avtalet är skriftligt och undertecknat av den som ska betala, och att två personer bevittnar underskriften. Ett sådant avtal kan Kronofogden verkställa om betalningarna slutar komma – utan att du först måste gå till domstol.",
      "Skriv in barnets namn och födelseår, belopp per barn och månad, vilken dag pengarna ska vara inne, hur de betalas och från vilket datum. Beloppet räknas upp automatiskt den 1 februari varje år enligt lagen om ändring av vissa underhållsbidrag, så ni behöver inte skriva något om index. Skriver ni in en egen uppräkningsregel gäller den i stället för lagens.",
      "Spara originalet. Ta en kopia var. Om den andra föräldern vägrar skriva under kan du ansöka om underhållsstöd hos Försäkringskassan eller väcka talan i tingsrätten.",
    ],
  },
  {
    slug: "pappan-betalar-inte-underhall",
    title: "Den andra föräldern betalar inte underhåll – vad gör jag nu?",
    excerpt:
      "Tre vägar när pengarna uteblir: underhållsstöd från Försäkringskassan, Kronofogden eller ett nytt avtal.",
    productSlug: "underhallsavtal",
    published: "2026-09-29",
    updated: "2026-09-30",
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
    published: "2026-09-29",
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
    published: "2026-09-29",
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
    published: "2026-09-29",
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
    published: "2026-09-29",
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
    published: "2026-09-29",
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
    published: "2026-08-26",
    body: [
      "Rekryterare läser inte brev. De skummar. Första meningen avgör om de går vidare till stycke två. Om stycke ett är 'jag söker härmed tjänsten som' är du redan borta.",
      "Öppna med något som bara du kan säga: en siffra, ett ansvar, ett problem du löst. Inte en känsla.",
      "Andra stycket: varför just det här bolaget. En konkret sak från annonsen räcker. Tredje: vad du vill göra i rollen, inte vad du hoppas få.",
      "Håll det under en sida. Avsluta med att du tar en intervju, inte att du 'ser fram emot återkoppling i den mån det är möjligt'.",
    ],
  },
  {
    slug: "mall-overklagande-forsakringskassan",
    title: "Överklaga Försäkringskassan – mall och steg för steg",
    seoTitle: "Överklaga Försäkringskassan – mall och omprövning",
    seoDescription:
      "Hur överklagar man Försäkringskassan? Läs om omprövning, tvåmånadersfristen och vad brevet ska innehålla. Gratis exempelmall och hjälp att skriva.",
    excerpt:
      "Fått ett beslut du tycker är fel? Här finns en exempelmall och en väg från omprövning hos Försäkringskassan till överklagande till förvaltningsrätten.",
    productSlug: "overklagande",
    published: "2026-08-26",
    updated: "2026-10-23",
    body: [
      "Vill du skriva en överklagan till Försäkringskassan? Börja med att kontrollera om du har ett första beslut eller ett omprövningsbeslut. Det avgör vilket steg som kommer nu.",
      "Den här guiden hjälper dig att strukturera brevet. Skrivklart är en fristående skrivtjänst, inte Försäkringskassan eller ett juridiskt ombud. Du granskar och skickar själv din text.",
    ],
    sections: [
      {
        h: "Hur överklagar man Försäkringskassans beslut?",
        p: [
          "Begär först omprövning skriftligt hos Försäkringskassan. Använd deras blankett 7024 eller skriv ett eget brev. Har du redan fått ett omprövningsbeslut kan du överklaga det till förvaltningsrätten. Överklagandet ska ändå skickas till Försäkringskassan, som lämnar det vidare.",
        ],
      },
      {
        h: "Hur lång tid har jag på mig?",
        p: [
          "Din begäran om omprövning måste komma in inom två månader från att du tog del av beslutet. Ett senare överklagande måste komma in inom två månader från att du tog del av omprövningsbeslutet. Kontrollera instruktionerna i ditt beslut.",
          "Skriv upp när du tog del av beslutet och planera in tid för att samla underlagen. Spara en kopia av brevet och dokumentera när du skickar det.",
        ],
      },
      {
        h: "Vad ska stå i en överklagan till Försäkringskassan?",
        p: [
          "Ange beslutets datum, ersättningen det gäller, önskad ändring och dina skäl. Ta med namn, personnummer och kontaktuppgifter. Följ adressen och instruktionerna i beslutet.",
          "Gör en liten arbetslista: beslutets motivering, vad du invänder mot och vilken bilaga som stöder varje invändning. Ge bilagorna tydliga namn så att läsaren hittar rätt.",
        ],
      },
      {
        h: "Skriv tydliga skäl: koppla varje invändning till ett underlag",
        p: [
          "Skriv till exempel: ”I beslutet anges [uppgift]. Jag anser att den uppgiften är fel eftersom [förklaring]. Det framgår av [bilaga och datum].” Fyll bara i sådant som faktiskt stämmer i ditt ärende.",
          "Undvik färdiga argument som inte gäller dig. Ett kort, konkret stycke om just ditt beslut är mer användbart än en lång text med allmänna invändningar. Du behöver inte skriva hårt eller använda svåra ord för att vara tydlig.",
        ],
      },
      {
        h: "Kontrollera mallen innan du skickar",
        p: [
          "Ersätt alla hakparenteser. Kontrollera att datum, belopp och bilagor stämmer med dina egna handlingar. Läs sedan brevet som om du inte kände till ärendet: framgår det vad du vill få ändrat och varför?",
          "Mallen nedan visar en struktur, inte en bedömning av om du har rätt till ersättning. Anpassa den efter beslutets instruktioner.",
        ],
      },
      {
        h: "Vill du ha hjälp att formulera brevet?",
        p: [
          "Du kan använda exempeltexten på sidan själv. I Skrivklarts formulär beskriver du beslutet och dina skäl och anger om beslutet redan har omprövats. Början av den genererade texten visas gratis; hela texten kostar 99 kr. Du väljer själv om du vill köpa den.",
        ],
      },
    ],
    faq: [
      {
        q: "Är överklagan och överklagande samma sak?",
        a: "Överklagan används ofta i vardagligt språk. Myndigheter använder vanligtvis överklagande. Kontrollera framför allt vilket beslut du har och vilket steg instruktionerna beskriver.",
      },
      {
        q: "Finns det en gratis mall för att överklaga Försäkringskassan?",
        a: "Ja, exempeltexten på den här sidan är fri att använda och anpassa. Försäkringskassan har också en egen blankett för begäran om omprövning. Skrivklarts hjälp att generera en hel text är en separat betaltjänst.",
      },
      {
        q: "Kan jag använda samma text för sjukpenning och bostadsbidrag?",
        a: "Du kan återanvända strukturen, men skälen och bilagorna måste handla om ditt eget beslut. Kopiera inte någon annans medicinska eller ekonomiska uppgifter.",
      },
    ],
    template: {
      title: "Exempelmall: begäran om omprövning",
      text: "Till Försäkringskassan\n\nBegäran om omprövning\nBeslut: [datum, ersättning och ärendenummer]\n\nJag begär att beslutet ändras så att [den ändring du vill ha].\n\nMina skäl\nI beslutet anges [motiveringen du invänder mot]. Jag anser att detta är fel eftersom [dina konkreta skäl]. Som stöd bifogar jag [underlag och vad det visar].\n\nBilagor\n1. [Namn och datum]\n2. [Namn och datum]\n\n[Namn och personnummer]\n[Adress, telefon och mejl]\n[Ort och datum]",
    },
    sources: [
      {
        label: "Försäkringskassan: omprövning och överklagande",
        url: "https://www.forsakringskassan.se/om-forsakringskassan/nar-du-tycker-att-forsakringskassan-har-gjort-fel",
      },
    ],
  },
  {
    slug: "samboavtal-mall",
    seoTitle: "Vad ska stå i ett samboavtal? Checklista punkt för punkt",
    seoDescription:
      "Vad ett samboavtal måste innehålla: parter, bostad, bohag, vad som ska hållas utanför bodelningen och underskrifter. Checklista och gratis utkast.",
    title: "Vad ska stå i ett samboavtal? Checklista",
    excerpt: "Parter, bostad, bohag, bodelning, underskrift. Resten är brus.",
    productSlug: "samboavtal",
    published: "2026-08-26",
    updated: "2026-10-15",
    body: [
      "Ett samboavtal behöver inte vara långt, men det måste vara skriftligt och underskrivet av er båda. Det behöver inte registreras någonstans.",
      "Börja med parterna: namn och personnummer på er båda, och datum då ni flyttade ihop eller ska flytta ihop.",
      "Bostaden: hyresrätt, bostadsrätt eller hus, med adress. Skriv om den ska ingå i en bodelning eller inte. Utan avtal räknas en bostad som ni skaffat för att bo i tillsammans som samboegendom, även om bara den ena betalade.",
      "Bohag ni vill hålla utanför: räkna upp det så att det går att känna igen, till exempel soffan som den ena köpte före flytten eller ett ärvt möbelset.",
      "Bestäm om bodelning inte ska ske alls, eller bara om viss egendom. Bil, sparande och aktier ingår aldrig i en sambobodelning, så de behöver ni inte undanta.",
      "Avsluta med ort, datum och två underskrifter. Vittnen är inget krav, men två vittnen gör det svårare att ifrågasätta senare. Spara var sitt original.",
      "Tänk på att samboavtalet inte reglerar arv. Sambor ärver inte varandra, så vill ni det behövs ett testamente. Utkast, inte rådgivning.",
    ],
  },
  {
    slug: "samboavtal-bostadsratt",
    title: "Samboavtal och bostadsrätt – så skyddar du din insats",
    excerpt: "Den ena betalade kontantinsatsen. Utan avtal delas värdet ändå lika.",
    productSlug: "samboavtal",
    published: "2026-10-08",
    body: [
      "Den vanligaste anledningen till samboavtal är en bostadsrätt där den ena har betalat hela eller större delen av kontantinsatsen.",
      "Enligt sambolagen är en bostad som ni skaffat för att bo i tillsammans samboegendom. Det gäller även om bara den ena står som ägare och betalade allt. Om ni separerar och någon begär bodelning delas värdet lika efter avdrag för lånen.",
      "Hade den ena bostadsrätten innan ni flyttade ihop, och den inte skaffades för gemensamt boende, är den normalt inte samboegendom. Ett samboavtal gör det tydligt och undviker diskussionen.",
      "Köper ni bostaden tillsammans men betalar olika mycket: skriv era ägarandelar i köpekontraktet, till exempel 70/30. Skriv sedan ett samboavtal om att bostaden inte ska ingå i bodelningen, så att ägarandelarna gäller om ni flyttar isär.",
      "Skriv in bostadens adress och föreningens namn i avtalet, vem som äger vilken andel och att bostaden inte ska ingå i en bodelning enligt sambolagen. Skriv under båda, med ort och datum.",
      "Samboavtalet kan ändras senare, till exempel om den andra börjar betala mer av lånen. Det görs med ett nytt skriftligt avtal som ni båda skriver under.",
      "Vid stora belopp, eller om ni är osäkra på vem som äger vad, låt en jurist läsa igenom. Skrivklart ger ett skarpt utkast, inte juridisk rådgivning.",
    ],
  },

  {
    slug: "samboavtal-hus",
    title: "Samboavtal när ni har hus – vad som gäller och vad ni ska skriva",
    excerpt:
      "Ett hus ni köpt för att bo i tillsammans delas lika vid separation, oavsett vem som betalade. Om ni inte avtalar bort det.",
    productSlug: "samboavtal",
    published: "2026-10-10",
    body: [
      "Ett hus som ni har köpt för att bo i tillsammans räknas som samboegendom enligt sambolagen. Det gäller även om bara den ena står på lagfarten och betalade kontantinsatsen.",
      "Om ni separerar och någon av er begär bodelning delas husets värde lika, efter avdrag för lånen som hör till huset. Det är den vanligaste överraskningen för den som tog med sig pengarna in i köpet.",
      "Ägde den ena huset innan ni flyttade ihop, och köptes det inte för att ni skulle bo där tillsammans, är det normalt inte samboegendom. Fritidshus räknas inte heller som samboegendom.",
      "Köper ni huset tillsammans men betalar olika mycket: skriv era ägarandelar i köpekontraktet, till exempel 60/40. Skriv sedan ett samboavtal om att huset inte ska ingå i en bodelning, så att ägarandelarna gäller om ni flyttar isär.",
      "I avtalet: husets adress och fastighetsbeteckning, vem som äger vilken andel, och att huset inte ska ingå i bodelning enligt sambolagen. Ort, datum och båda era underskrifter. Avtalet behöver inte registreras.",
      "Utan avtal kan den av er som bäst behöver bostaden få ta över den vid en bodelning, mot att den andra löses ut. Med ett samboavtal bestämmer ni det själva i förväg.",
      "Vid stora belopp eller om ni är osäkra på vem som äger vad: låt en jurist läsa igenom. Skrivklart ger ett skarpt utkast, inte juridisk rådgivning.",
    ],
  },
  {
    slug: "separation-utan-samboavtal",
    title: "Separation utan samboavtal – det här händer med bostaden och bohaget",
    excerpt: "Vad som delas, vad som inte gör det, och varför fristen på ett år är viktig.",
    productSlug: "samboavtal",
    published: "2026-10-10",
    updated: "2026-10-15",
    body: [
      "Har ni inget samboavtal gäller sambolagen. Den delar bara samboegendom: den gemensamma bostaden och det bohag som ni skaffat för att använda tillsammans.",
      "Det som inte delas är bland annat bil, sparpengar, aktier, fritidshus och saker som bara den ena använder. Där behåller var och en sitt.",
      "Bodelning sker bara om någon av er begär det, och det måste göras senast ett år efter att ni flyttat isär. Begär ingen av er bodelning inom ett år behåller var och en det den äger.",
      "Vid bodelning räknas värdet på samboegendomen ihop, skulderna som hör till den dras av, och resten delas lika, oavsett vem som betalade. Har ni bott ihop kort tid kan en domstol jämka bodelningen så att den som ägde mer får behålla mer, men det går inte att räkna med.",
      "Den som bäst behöver bostaden kan få ta över den, mot att den andra får sin del i pengar eller annan egendom. Det kan gälla även en hyresrätt som ni skaffat för att bo i tillsammans.",
      "Är ni överens: skriv ner hur ni delar i ett bodelningsavtal, med datum och båda era underskrifter. Är ni inte överens kan tingsrätten utse en bodelningsförrättare.",
      "Vill ni slippa allt det här nästa gång, eller bor ni ihop nu? Ett samboavtal bestämmer i förväg vad som ska gälla. Utkast, inte juridisk rådgivning.",
    ],
  },

  {
    slug: "hyresansokan-stockholm",
    seoTitle: "Hyresansökan – så skriver du den så att hyresvärden svarar",
    seoDescription:
      "Så skriver du en hyresansökan som sticker ut: vem du är, inkomst, referenser och varför just du. Gratis utkast, färdig text 59 kr.",
    title: "Hyresansökan i Stockholm som inte hamnar i högen",
    excerpt: "Värdar drunknar i 'vi är skötsamma'. Ge dem risk, inkomst och datum.",
    productSlug: "hyresansokan",
    published: "2026-08-26",
    body: [
      "Värden vill veta tre saker: kan du betala, kommer du sköta lägenheten, kan du flytta när de vill.",
      "Skriv hushåll, ungefärlig inkomst, anställning, om du har referens, och när du kan tillträda. Husdjur i en mening, inte en uppsats.",
      "Koppla till just den lägenheten. Område, storlek, varför den passar. Generiska kärleksbrev till 'er vackra tvåa' åker ut.",
    ],
  },
  {
    slug: "reklamera-ratt",
    seoTitle: "Reklamation – så reklamerar du en vara eller tjänst",
    seoDescription:
      "Så reklamerar du rätt: vad du ska skriva, vilka frister som gäller enligt konsumentköplagen och vad du kan kräva. Gratis utkast, färdigt brev 59 kr.",
    title: "Reklamera så företaget inte kan låtsas att de inte förstått",
    excerpt: "Krav, frist, kvitto. Inte en recension.",
    productSlug: "reklamation",
    published: "2026-08-26",
    body: [
      "Säg vad du köpt, när, vad som är fel, och vad du kräver: reparation, ny vara, prisavdrag eller häva köpet.",
      "Ge en frist. 14 dagar är begripligt. Skriv att du vänder dig vidare om de tiger.",
      "Spara mailet. Chattar försvinner. Ett brev på pränt är det som räknas om ARN kommer in.",
    ],
  },
  {
    slug: "lana-ut-till-en-van",
    seoTitle: "Skuldebrev mellan vänner – så lånar du ut pengar tryggt",
    seoDescription:
      "Ska du låna ut pengar till en vän? Så skriver du ett skuldebrev med belopp, ränta och återbetalning. Gratis utkast, färdigt skuldebrev 99 kr.",
    title: "När du lånar ut till en vän",
    excerpt: "Skuldebrevet är inte misstro. Det är hur vänskapen överlever beloppet.",
    productSlug: "skuldebrev",
    published: "2026-08-26",
    body: [
      "Skriv belopp, om det är ränta eller inte, när det ska vara tillbaka, och vad som händer om det drar ut.",
      "Båda skriver under. En kopia var. Swish-historik är inte ett avtal.",
      "Om summan gör ont i magen redan nu: låna inte ut. Papperet räddar inte en dålig magkänsla.",
    ],
  },
  {
    slug: "konsultavtal-enskild-firma",
    seoTitle: "Konsultavtal för enskild firma – vad avtalet ska innehålla",
    seoDescription:
      "Vad ett konsultavtal för enskild firma ska innehålla: uppdrag, arvode, betalning, ansvar och uppsägning. Gratis utkast, färdigt avtal 99 kr.",
    title: "Konsultavtal för enskild firma",
    excerpt: "Uppdrag, arvode, IP. Innan du börjar i Slack.",
    productSlug: "konsultavtal",
    published: "2026-08-26",
    body: [
      "Skriv vem som är uppdragsgivare och vem som är konsult, org.nr om ni har. Vad som ska levereras, när, var.",
      "Arvode: timme eller fast. När fakturan går. Dröjsmålsränta. Utlägg. F-skatt – du ansvarar för egna avgifter.",
      "IP: vem äger resultatet. Standard i Sverige är att kunden får det ni avtalat, resten stannar hos konsulten om ni inte säger annat.",
      "Uppsägning i dagar, inte 'när det känns'. Tillämplig lag Sverige. Utkast, inte juridisk rådgivning.",
    ],
  },
  {
    slug: "cv-profil-utan-floskler",
    seoTitle: "CV-profil – exempel och hur du skriver den utan floskler",
    seoDescription:
      "Så skriver du en CV-profil som rekryterare läser: kort, konkret och utan floskler. Exempel och gratis utkast på några minuter.",
    title: "CV-profil utan floskler",
    excerpt: "Fem rader som avgör om de läser erfarenheten.",
    productSlug: "cv-text",
    published: "2026-08-26",
    body: [
      "Profilen är inte en sammanfattning av allt du gjort. Den är ett svar på 'varför just du till den här tjänsten'.",
      "Börja med roll + år + en konkret effekt. Inte 'driven lagspelare med öga för detaljer'.",
      "Tre styrkor max, kopplade till sådant du kan peka på i punkterna under. Resten är brus de redan sett hundra gånger.",
    ],
  },
  {
    slug: "uppsagning-mall",
    seoTitle: "Uppsägningsbrev – mall för att säga upp dig själv",
    seoDescription:
      "Så säger du upp dig skriftligt: datum, uppsägningstid, sista arbetsdag och begäran om arbetsgivarintyg. Gratis utkast, färdigt brev 59 kr.",
    title: "Mall: säga upp sig utan drama",
    excerpt: "Datum, tjänst, sista dag. HR behöver inte din livsberättelse.",
    productSlug: "uppsagning",
    published: "2026-08-26",
    body: [
      "Ett uppsägningsbrev är ett meddelande, inte ett avskedstal. Skriv vem du är, vilken tjänst, och från vilket datum anställningen upphör.",
      "Kolla avtalet och lagen för uppsägningstid. Skriv den tid du räknar med, inte den du önskar.",
      "Be om skriftlig bekräftelse, arbetsgivarintyg och slutlön. Punkt. Skicka till chef och HR samma dag.",
    ],
  },
  {
    slug: "arn-anmalan-steg",
    seoTitle: "ARN-anmälan – så anmäler du till Allmänna reklamationsnämnden",
    seoDescription:
      "Så anmäler du till ARN: när du kan, avgiften på 150 kr, beloppsgränser, ettårsfristen och vad anmälan ska innehålla. Gratis utkast.",
    title: "ARN-anmälan: när företaget sagt nej",
    excerpt: "Först reklamation. Sen nämnden. Inte tvärtom.",
    productSlug: "arn-anmalan",
    published: "2026-08-26",
    updated: "2026-10-15",
    body: [
      "ARN, Allmänna reklamationsnämnden, prövar tvister mellan konsument och företag. De vill se att du först har reklamerat till företaget och fått nej, eller inget svar alls.",
      "Kolla fyra saker innan du anmäler. Anmälan måste ha kommit in inom ett år från att du första gången klagade till företaget. Ditt krav måste nå upp till värdegränsen för området: 750 kr på till exempel allmänna området, elektronik och kläder, 1 500 kr för bland annat motor, möbler och resor, och 3 000 kr för bostad, bank och försäkring (se arn.se). ARN tar en avgift på 150 kr som inte betalas tillbaka. Och beslutet är en rekommendation – de flesta företag följer den, men den går inte att driva in hos Kronofogden.",
      "Skriv parter, vad du köpt och när, vad som är fel, vad du har krävt av företaget och vad de svarat, och vad du vill att ARN ska besluta. Bifoga kvitto, bilder och företagets svar.",
      "Håll känslor utanför. Nämnden läser yrkandet och bevisen, inte din recension av kundtjänsten.",
    ],
  },
  {
    slug: "fullmakt-nar-du-inte-kan-ga-sjalv",
    seoTitle: "Fullmakt – mall och vad den ska innehålla",
    seoDescription:
      "Så skriver du en fullmakt: vem som får göra vad, hur länge och när vittnen behövs. Gratis utkast, färdig fullmakt 59 kr.",
    title: "Fullmakt när du inte kan gå själv",
    excerpt: "Vem, vad, hur länge. Resten är vittnen om du vill vara extra tydlig.",
    productSlug: "fullmakt",
    published: "2026-08-26",
    body: [
      "En fullmakt är en tillåtelse på papper. Ju snävare uppdrag, desto mindre kan den missbrukas.",
      "Skriv namn på båda, exakt vad den får göra, och ett slutdatum. 'Tills vidare' går, men datum är lugnare.",
      "Bank och mäklare kan kräva original och vittnen. Fråga dem innan du skriver, så du inte får göra om.",
    ],
  },
  {
    slug: "skuldebrev-olika-kontantinsats",
    title: "Skuldebrev vid olika kontantinsats – räkneexempel, ränta och samboavtal",
    seoTitle: "Skuldebrev för kontantinsats – räkneexempel för sambor",
    seoDescription:
      "Betalar ni olika mycket i kontantinsats? Så räknar ni ut skuldebrevet, med exempel vid vinst, förlust och bodelning – och därför behövs ett samboavtal.",
    excerpt:
      "Den ena betalar mer av kontantinsatsen. Skuldebrevet ger pengarna tillbaka, men vid en bodelning bara fullt ut om ni också har ett samboavtal.",
    productSlug: "skuldebrev",
    published: "2026-10-20",
    body: [
      "Betalar ni olika mycket i kontantinsats men vill äga bostaden till hälften var, skriver den som betalat mindre ett skuldebrev till den andra på halva mellanskillnaden. Betalar A 400 000 kronor och B 100 000 blir skulden 150 000, och då har ni satt in 250 000 var. Skulden betalas tillbaka när ni säljer eller flyttar isär.",
      "Skuldebrevet gäller även utan samboavtal. Men begär någon av er bodelning efter en separation får den som är skyldig dra av skulden innan värdet delas lika, och då kan den som lånade ut förlora upp till hälften av pengarna. Skriv därför samtidigt ett samboavtal om att bostaden inte ska ingå i en bodelning.",
    ],
    sections: [
      {
        h: "Ägarandelar eller skuldebrev?",
        p: [
          "Det ena sättet är olika ägarandelar i köpekontraktet, till exempel 56/44. Den som betalade mer äger mer och får mer av både vinst och förlust.",
          "Det andra är att äga lika och skriva ett skuldebrev på halva mellanskillnaden, så att ni har satt in lika mycket var. Den som betalade mer får tillbaka ett bestämt belopp, oavsett hur priserna går. Resten av vinsten eller förlusten delar ni lika.",
          "Båda sätten har samma svaghet. En bostad som ni skaffat för att bo i tillsammans är samboegendom, och vid en bodelning delas dess värde efter avdrag för skulder lika, oavsett ägarandelar. Kombinera därför skuldebrevet eller ägarandelarna med ett samboavtal om att bostaden inte ska ingå i en bodelning.",
        ],
      },
      {
        h: "Räkneexempel: 400 000 mot 100 000 kronor",
        p: [
          "Ni köper en bostadsrätt för 2 500 000 kronor. A betalar 400 000 i kontantinsats och B 100 000. Bolånet är 2 000 000 och ni står för hälften var. Ni vill äga lika, så B lånar 150 000 av A och skriver ett skuldebrev.",
          "Om ni säljer för 2 750 000, alltså 10 procent mer, återstår 750 000 efter bolånet, 375 000 var. B betalar sin skuld, så A får 525 000 och B 225 000. Båda har tjänat 125 000.",
          "Om ni i stället säljer för 2 250 000, alltså 10 procent mindre, återstår 250 000 efter bolånet, 125 000 var. B ska ändå betala 150 000 till A. A får 275 000, medan B får inget och måste skjuta till 25 000. Båda har förlorat 125 000.",
          "Med ägarandelar i stället blir A:s andel 56 procent och B:s 44 procent, räknat på kontantinsatsen plus halva bolånet var. Vid vinsten får A 540 000 och B 210 000. Vid förlusten får A 260 000, medan B får inget och måste skjuta till 10 000. Exemplet bortser från amortering, mäklararvode och skatt.",
        ],
      },
      {
        h: "Vad händer med skuldebrevet utan samboavtal?",
        p: [
          "Begär någon av er bodelning inom ett år efter att ni flyttat isär räknas samboegendomen ihop och delas som huvudregel lika. Enligt 13 § sambolagen får var och en först dra av sina skulder från sin del av samboegendomen. B får alltså dra av skulden till A, eftersom lånet hör till bostaden. A:s fordran räknas inte in, eftersom den inte är samboegendom.",
          "Med bostaden värd 2 750 000 är A:s halva värd 375 000 efter bolånet. B:s halva är värd 225 000 efter bolånet och skulden till A. Tillsammans blir det 600 000, alltså 300 000 var. A får 300 000 i bodelningen och sedan 150 000 från B, totalt 450 000 i stället för 525 000. A har i praktiken fått stå för halva skulden.",
          "Ett samboavtal om att bostaden inte ska ingå i en bodelning stänger den vägen. Då gäller ägarandelarna och skuldebrevet som ni skrev dem. Ett oskäligt villkor kan jämkas, så låt avtalet spegla vad var och en faktiskt har betalat.",
          "Om någon av er dör får bara den som lever kvar begära bodelning, och det ska ske senast vid bouppteckningen. Den efterlevande har också rätt att få ut minst två prisbasbelopp ur samboegendomen, om den räcker. Dör A kan B alltså begära bodelning och dra av skulden, så att A:s arvingar får mindre. Ett samboavtal om bostaden gäller även då.",
        ],
      },
      {
        h: "Ränta eller räntefritt?",
        p: [
          "Räntefritt är det enklaste. Står det ingenting om ränta i skuldebrevet löper ingen ränta innan skulden ska betalas, enligt räntelagen. Vill den som betalade mer få del av bostadens värdeökning är olika ägarandelar enklare än ränta.",
          "Med fast ränta, till exempel 2 procent på 150 000, betalar B 3 000 kronor om året. A deklarerar räntan och anger B:s namn, personnummer och hur stor skulden var vid årsskiftet. Skatten är 30 procent, alltså 900 kronor. B kan inte göra ränteavdrag, eftersom lån utan säkerhet, till exempel lån från en privatperson, inte ger något avdrag från och med 2026.",
          "Betalas skulden för sent får långivaren kräva dröjsmålsränta. Om ni inte avtalat något annat är den Riksbankens referensränta plus åtta procentenheter. Står det ett bestämt datum i skuldebrevet löper räntan från det datumet. Ska skulden betalas när bostaden säljs, eller saknas förfallodag, löper räntan först 30 dagar efter att långivaren skickat ett krav på ett bestämt belopp med besked om att dröjsmålsränta annars tas ut.",
        ],
      },
      {
        h: "Vad ska stå i skuldebrevet?",
        p: [
          "Namn och personnummer på er båda och vem som lånar ut till vem. Beloppet i kronor, inte 'hälften av kontantinsatsen', och att lånet gäller kontantinsatsen för bostaden, med adress och föreningens namn eller fastighetsbeteckning om det är ett hus. Datum då pengarna betalades.",
          "När skulden ska betalas, till exempel när bostaden säljs, när samboförhållandet upphör eller senast ett visst datum, det som inträffar först. Står det ingen förfallodag kan långivaren kräva pengarna när som helst.",
          "Ränta eller räntefritt, att B får betala av i förväg och att skulden gäller fullt ut även om bostaden säljs med förlust. Sist ort, datum och underskrift. Lagen ställer inga formkrav. Den som lånar skriver under, gärna ni båda. Vittnen krävs inte men kan hjälpa om ni blir oense. Långivaren sparar originalet.",
          "Skriv under skuldebrevet och samboavtalet samma dag, helst före tillträdet. På Skrivklart fyller du i parter, belopp, ränta och återbetalning, till exempel att lånet gäller kontantinsatsen och ska betalas när bostaden säljs. Utkastet är gratis och hela skuldebrevet kostar 99 kronor. Samboavtalet är ett eget dokument.",
        ],
      },
      {
        h: "När ni amorterar eller bor ihop länge",
        p: [
          "Betalar den ena mer av bolånet eller en renovering uppstår en ny mellanskillnad som skuldebrevet inte täcker. Skriv då ett tillägg som ni båda undertecknar, och anteckna varje avbetalning B gör.",
          "En skuld preskriberas, alltså går inte längre att kräva, tio år efter att lånet gavs, även om den inte ska betalas förrän ni säljer. Preskriptionen avbryts om B betalar ränta eller amortering eller erkänner skulden, eller om B får ett skriftligt krav eller en skriftlig påminnelse från A. Då börjar tio nya år. Enklast är att B skriver under en kort bekräftelse på skulden med några års mellanrum. Skickar du i stället en påminnelse, se till att du kan visa att B har fått den.",
          "Gäller det stora belopp, låt en jurist läsa avtalen. Det här är inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur stort ska skuldebrevet vara?",
        a: "Ska ni äga lika och betala bolånet lika blir skulden halva mellanskillnaden mellan era insatser. Betalar den ena hela kontantinsatsen blir skulden hälften av den. Skriv beloppet i kronor, så att det inte blir tvist om vad ni menade.",
      },
      {
        q: "Räcker det med ett samboavtal?",
        a: "Nej, inte om ni äger bostaden till hälften var. Blir det ingen bodelning behåller var och en sin halva, och då får den som betalade mer inte tillbaka något extra. Ni behöver också ett skuldebrev eller olika ägarandelar.",
      },
      {
        q: "Kan vi skriva skuldebrevet i efterhand?",
        a: "Ja, om ni båda är överens om att pengarna var ett lån. Skriv när pengarna betalades och vilket datum ni skriver under. Ett skuldebrev i efterhand räknas som att den som lånat erkänner skulden, och då börjar en ny preskriptionstid på tio år.",
      },
      {
        q: "Kan vi låna kontantinsatsen av föräldrar mot skuldebrev?",
        a: "Ja. Står föräldern inte som ägare skriver den som lånar ett skuldebrev till föräldern. Sedan den 1 april 2026 får ett nytt bolån vara högst 90 procent av bostadens marknadsvärde, mot 85 procent tidigare, så minst 10 procent måste komma från annat håll. Är pengarna en gåva skriver ni ett gåvobrev i stället.",
      },
      {
        q: "Vad händer med skuldebrevet om vi gifter oss?",
        a: "Skuldebrevet gäller, men samboavtalet slutar spela roll, eftersom ingen sambobodelning görs när ni gifter er. I ett äktenskap är allt ni äger giftorättsgods, även A:s fordran på B, och vid en bodelning delas allt lika efter avdrag för skulder. Då tar fordran och skulden ut varandra. Vill ni att skuldebrevet ska hålla behöver ni ett äktenskapsförord som gör både bostaden och fordran till enskild egendom. Det ska vara skriftligt, daterat och undertecknat av er båda och registreras hos Skatteverket, som tar 275 kronor. Skrivs det före vigseln gäller det från vigseln om Skatteverket får det inom en månad efter vigseln, annars från den dag det kommer in.",
      },
      {
        q: "Vad gör jag om den andra inte betalar?",
        a: "Skicka först ett skriftligt krav med belopp och sista betalningsdag. Betalas det ändå inte, och har skulden förfallit enligt skuldebrevet, kan du ansöka om betalningsföreläggande hos Kronofogden. Ansökan kostar 300 kronor. Säger den andra att skulden inte stämmer kan du begära att domstolen prövar saken.",
      },
    ],
  },
  {
    slug: "aterkrav-forsakringskassan",
    title: "Återkrav från Försäkringskassan – så begär du eftergift och sänkt sanktionsavgift",
    seoTitle: "Återkrav från Försäkringskassan – omprövning och eftergift",
    seoDescription:
      "Fått återkrav från Försäkringskassan? Så svarar du på utredningen, begär omprövning eller eftergift, ber om lägre sanktionsavgift och delar upp skulden.",
    excerpt:
      "Svara på utredningen, begär omprövning eller eftergift och be om lägre sanktionsavgift. Så gör du när Försäkringskassan kräver tillbaka pengar.",
    productSlug: "overklagande",
    published: "2026-10-20",
    body: [
      "Ett återkrav betyder att Försäkringskassan har beslutat att du ska betala tillbaka pengar som betalats ut fel eller med för högt belopp. Du kan begära omprövning inom två månader, be att slippa betala hela eller delar av beloppet (eftergift) och ansöka om avbetalningsplan inom 30 dagar från beslutet. Sedan 1 juli 2026 kan du dessutom få betala en sanktionsavgift på 25 procent av beloppet, minst 2 368 kronor för beslut 2026.",
      "Som regel är du bara återbetalningsskyldig om du själv orsakat felet eller borde ha förstått att du fick för mycket. Undantag är bostadsbidrag och underhållsstöd, som kan krävas tillbaka även utan eget fel.",
    ],
    sections: [
      {
        h: "Måste jag betala tillbaka om felet var Försäkringskassans?",
        p: [
          "Oftast inte. För sjukpenning, föräldrapenning, vab, barnbidrag och de flesta andra ersättningar krävs att du lämnat felaktiga uppgifter, inte anmält en ändring, eller insåg eller rimligen borde ha insett att beloppet var fel. Räknade Försäkringskassan fel utan att du kunde märka det ska du inte betala tillbaka.",
          "Bostadsbidrag och underhållsstöd är undantag. Där krävs det som betalats ut för mycket tillbaka även om du gjort allt rätt, till exempel när bostadsbidraget stäms av och årsinkomsten blev högre än du räknade med. Skillnader under 1 200 kronor krävs inte tillbaka, men på större belopp tillkommer en avgift som räknas fram med statslåneräntan. Den är inte samma sak som sanktionsavgiften nedan.",
          "Läs motiveringen i beslutet noga. Saknas en tydlig förklaring till varför utbetalningen var fel, skriv det i din begäran om omprövning. Den bristen fanns i över hälften av de återkrav som Inspektionen för socialförsäkringen granskade 2025.",
        ],
      },
      {
        h: "Vad är den nya sanktionsavgiften?",
        p: [
          "Från 1 juli 2026 ska Försäkringskassan också besluta om en sanktionsavgift för den som orsakat en felaktig utbetalning genom en felaktig uppgift eller en ändring som inte anmälts. Det gäller även ärliga misstag, och även bostadsbidrag och underhållsstöd om du orsakat felet. En inkomstuppskattning som du hade fog för är dock inte en felaktig uppgift. Har du lämnat fel uppgifter medvetet eller av grov vårdslöshet kan du dessutom få bidragsspärr: ingen rätt till en eller flera ersättningar under minst tre månader och högst tre år.",
          "Avgiften är 25 procent av det du ska betala tillbaka, men minst 4 procent av prisbasbeloppet: 2 368 kronor för beslut 2026 och 2 384 kronor för beslut 2027. Ska du betala tillbaka 6 000 kronor i föräldrapenning blir avgiften alltså inte 1 500 utan 2 368 kronor, totalt 8 368 kronor om den inte sätts ned. Efterges återkravet helt blir det ingen avgift. Efterges det delvis räknas avgiften på resten, men aldrig under minimibeloppet.",
          "Det som avgör är när du lämnade uppgiften, eller när det du skulle ha anmält hände, inte när pengarna betalades ut. Låg det före 1 juli 2026 blir det ingen avgift. Ingen avgift heller om Försäkringskassan eller till exempel en arbetsgivare orsakade felet, eller om du själv rättade uppgiften eller anmälde ändringen innan du fått veta att Försäkringskassan utreder saken. En rättelse efter det räcker inte, så anmäl direkt på Mina sidor eller per telefon om du ser att du fått för mycket.",
          "Avgiften ska sättas ned helt eller delvis om det är oskäligt att ta ut hela beloppet, särskilt om felet kan antas bero på din ålder, hälsa eller liknande, om avgiften inte står i rimlig proportion till felet, eller om det gått oskäligt lång tid sedan du fick yttra dig om avgiften utan att det beror på dig. Försäkringskassan nämner själv kognitiva svårigheter och att ett barn kan drabbas.",
        ],
      },
      {
        h: "Hur svarar jag på utredningen innan beslutet?",
        p: [
          "Innan beslutet skickar Försäkringskassan utredningen till dig, och du får säga till om något inte stämmer. Svara inom tiden i brevet. Inget är beslutat än, så här har du störst chans att påverka.",
          "Rätta faktafel med datum och belopp. Förklara varför felet inte var ditt, eller varför du inte kunde förstå att du fick för mycket. Beskriv också din ekonomi: inkomst, hyra, fasta utgifter, skulder och hur många barn som bor hos dig. Försäkringskassan prövar om du helt eller delvis kan slippa betala tillbaka, men bara utifrån det de känner till. Gäller det något från 1 juli 2026, be också om att sanktionsavgiften inte tas ut eller sätts ned.",
        ],
      },
      {
        h: "Vad krävs för att få eftergift?",
        p: [
          "Försäkringskassan får efterge ett återkrav helt eller delvis om det finns särskilda skäl. Det är en samlad bedömning av betalningsförmåga, hälsa, social situation och hur stort beloppet är. Att du inte förstod att pengarna var fel kan också vägas in, och för underhållsstöd har domstol godtagit som skäl att felet var Försäkringskassans.",
          "Frågan avgörs i återkravsbeslutet, så be om eftergift när du svarar på utredningen eller i begäran om omprövning. Senare kan skulden bara efterges om det är uppenbart oskäligt att kräva betalning, till exempel vid allvarlig sjukdom och mycket svag ekonomi, och det beslutet går inte att överklaga.",
          "För bostadsbidrag är kraven snävare. Alla uppgifter du lämnade måste ha varit rätt, du ska ha anmält ändringar under året eller haft en godtagbar anledning att inte göra det, och du ska sakna förmåga att betala tillbaka även på längre sikt.",
          "Bifoga lönebesked, hyresavi, kontoutdrag, skulder hos Kronofogden och läkarintyg. Räkna ut vad som blir kvar varje månad efter hyra, mat och barnens kostnader, och skriv summan i brevet.",
        ],
      },
      {
        h: "Hur överklagar jag ett återkrav?",
        p: [
          "Begär omprövning hos Försäkringskassan, på blankett 7024 eller i ett eget brev, inom två månader från den dag du fick beslutet. Ändrar de inte beslutet kan du överklaga till förvaltningsrätten, också inom två månader. Överklagandet skickar du till Försäkringskassan.",
          "Skriv vilket beslut det gäller, vad som är fel och vad du vill uppnå: att återkravet upphävs, att det efterges helt eller delvis, eller att sanktionsavgiften sätts ned. Avgiften är ett eget beslut, så begär omprövning av båda inom två månader om du vill ändra båda. Ändras återkravet slutligt ska Försäkringskassan också ompröva avgiften. Med Skrivklarts Överklagande för 99 kronor svarar du på några frågor om beslutet och får en saklig begäran om omprövning, eller ett överklagande om beslutet redan har omprövats.",
          "En omprövning stoppar inte dröjsmålsräntan, så betala senast på förfallodagen om du kan, eller ansök om avbetalningsplan. Ändras beslutet får du tillbaka pengarna.",
        ],
      },
      {
        h: "Hur fungerar avbetalningsplan och ränta?",
        p: [
          "När beslutet har kommit har du 30 dagar att betala, med avi eller genom avdrag på en ersättning du får, eller att ansöka om avbetalningsplan på Mina sidor, per telefon eller med blankett 6850. Ansöker du före förfallodagen slipper du uppläggningsavgiften.",
          "En avbetalningsplan är ingen rättighet utan en överenskommelse. En plan på högst tolv månader som du söker på Mina sidor godkänns i regel automatiskt, medan längre tid, upp till 24 månader, bara beviljas i undantagsfall. Du väljer inte själv månadsbeloppet. Varje avi kostar 15 kronor och en påminnelse 60 kronor.",
          "Räntan på en avbetalningsplan är statens utlåningsränta plus två procentenheter, lägre än dröjsmålsräntan du annars får betala om du missar förfallodagen.",
        ],
      },
      {
        h: "Vad händer om jag inte kan betala alls?",
        p: [
          "Om du inte betalar och inte har ansökt om avbetalningsplan får du en påminnelse. Sedan går skulden till Kronofogden som ett så kallat allmänt mål.",
          "Hör av dig till Försäkringskassan före förfallodagen om du inte kan betala, och be om eftergift om ekonomin inte räcker. Kommunens budget- och skuldrådgivning hjälper dig gratis. Har skulden gått till Kronofogden bedömer de din betalningsförmåga innan de beslutar om utmätning.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur lång tid har jag på mig att överklaga ett återkrav?",
        a: "Begäran om omprövning ska ha kommit in till Försäkringskassan inom två månader från den dag du fick beslutet. Efter omprövningen har du två månader till på dig att överklaga till förvaltningsrätten.",
      },
      {
        q: "Kan jag slippa sanktionsavgiften om jag gjorde ett ärligt misstag?",
        a: "Inte automatiskt. Avgiften gäller även misstag, men tas inte ut om uppgiften lämnades, eller det du borde ha anmält hände, före 1 juli 2026, om Försäkringskassan orsakade felet eller om du rättade det innan de börjat utreda. Den ska också sättas ned om det är oskäligt att ta ut hela beloppet.",
      },
      {
        q: "Blir jag polisanmäld?",
        a: "Inte för ett ärligt misstag. Bidragsbrott kräver att du lämnat fel uppgifter medvetet eller av grov oaktsamhet. Sedan 1 juli 2026 polisanmäler Försäkringskassan, när en sanktionsavgift kan tas ut i stället, bara vid misstanke om grovt bidragsbrott eller om det finns särskilda skäl.",
      },
      {
        q: "Varför är återkravet högre än det jag fick in på kontot?",
        a: "Gäller det en skattepliktig ersättning, som sjukpenning eller föräldrapenning, betalar du tillbaka beloppet före skatt, eftersom Försäkringskassan redan betalat in skatten till Skatteverket. Skatten får du tillbaka via din egen beskattning: Försäkringskassan rättar din inkomstuppgift, och gäller det ett tidigare år omprövar Skatteverket normalt slutskattebeskedet automatiskt. Gäller det i år räknas det med i nästa deklaration.",
      },
      {
        q: "Får jag betalningsanmärkning för ett återkrav från Försäkringskassan?",
        a: "Inte så länge du betalar eller följer en avbetalningsplan. Går skulden till Kronofogden får du först en chans att betala eller invända. Först om du inte betalar då kan det bli en betalningsanmärkning.",
      },
      {
        q: "Ändras reglerna för bostadsbidrag 2027?",
        a: "Ja. Från 1 januari 2027 räknas bostadsbidraget på månadsinkomst i stället för årsinkomst, vilket ska ge färre återkrav. Har du redan bostadsbidrag gäller det först när din period tar slut och du ansöker igen. Tid före 2027, och månader 2027 som ett tidigare beslut gäller, stäms av enligt de gamla reglerna. Egenföretagare och den som har inkomst från utlandet påverkas inte.",
      },
    ],
  },
  {
    slug: "kan-inte-betala-hyran",
    title: "Kan inte betala hyran? Så räddar du lägenheten",
    seoTitle: "Kan inte betala hyran? Så undviker du att bli vräkt",
    seoDescription:
      "När hyran är sen, när du kan sägas upp och hur treveckorsfristen fungerar. Så ber du om avbetalningsplan och så kan socialtjänsten betala hyresskulden.",
    excerpt:
      "En vecka, tre veckor, Kronofogden. Så ser fristerna ut, och så använder du dem: avbetalningsplan till hyresvärden och ansökan till socialtjänsten.",
    productSlug: "avbetalningsplan",
    published: "2026-10-22",
    body: [
      "Kan du inte betala hyran ska du kontakta hyresvärden direkt och föreslå en avbetalningsplan skriftligt. Räcker pengarna inte alls kan du ansöka om ekonomiskt bistånd för hyran hos socialtjänsten i din kommun. Kontraktet är i fara först när hyran är mer än en vecka sen, och även efter en uppsägning kan du få bo kvar om skulden betalas inom tre veckor.",
      "Reglerna gäller när du hyr en hyresrätt: av ett bostadsbolag, av kommunen eller i andra hand av någon som själv har hyresrätt. Hyr du av en privatperson som äger bostaden, med ett avtal från den 1 juli 2026 eller senare, gäller andra regler. Det står längre ner.",
      "Vänta inte. Både hyresvärden och socialtjänsten kan göra mer ju tidigare de får veta. Kronofogden ger samma råd: kontakta hyresvärden direkt, och måste du välja mellan räkningar, betala hyran först.",
    ],
    sections: [
      {
        h: "Vad händer om man inte betalar hyran?",
        p: [
          "Hyran ska vara betald senast sista vardagen före den månad den gäller, om inget senare datum står i avtalet. Är den mer än en vecka sen räknas hyresrätten som förverkad, och hyresvärden får säga upp avtalet så att det upphör direkt. Hyresrätten är dock inte förverkad om förseningen är av ringa betydelse, men räkna inte med det.",
          "Ett exempel. Decemberhyran 2026 ska vara betald måndagen den 30 november. Är den obetald när måndagen den 7 december har gått, får hyresvärden säga upp dig. Några dagars försening påverkar inte kontraktet.",
          "Betalar du innan hyresvärden har sagt upp avtalet kan du inte förlora lägenheten för just den förseningen. Men är du sen gång på gång kan hyresvärden säga upp avtalet med vanlig uppsägningstid, och hyresnämnden får avgöra om du ska få bo kvar.",
        ],
      },
      {
        h: "Avbetalningsplan för hyran: så ber du om den",
        p: [
          "Hör av dig till hyresvärden så tidigt du kan, helst före förfallodagen. Hyresvärden måste inte gå med på en avbetalningsplan, men ett konkret förslag i tid är lätt att säga ja till.",
          "Skriv förslaget: vilken hyra det gäller, hur stor skulden är, hur mycket extra du betalar varje månad och från vilket datum. Be om ett skriftligt svar, och be hyresvärden att inte säga upp avtalet så länge du följer planen.",
          "Ett räkneexempel. Hyran är 8 400 kr och du har missat decemberhyran. Du betalar januarihyran som vanligt och lägger till 1 400 kr varje månad. Efter sex månader är skulden borta (6 x 1 400 kr = 8 400 kr). Välj ett belopp du säkert klarar. En plan som spricker gör läget sämre.",
          "Hos Skrivklart fyller du i skulden, ditt förslag och kort varför, ser utkastet gratis och betalar 59 kr för hela brevet. Brevet ber hyresvärden om skriftlig bekräftelse, om att inga nya avgifter läggs på under planen och om att vänta med att gå vidare till Kronofogden.",
        ],
      },
      {
        h: "Kan socialtjänsten betala hyran?",
        p: [
          "Ja, men inte automatiskt. Du måste ansöka, och socialtjänsten prövar din situation. Enligt Socialstyrelsens allmänna råd bör socialtjänsten ge bistånd till en hyresskuld om det annars kan få allvarliga sociala konsekvenser, som att du förlorar bostaden.",
          "Finns det barn i hushållet ska barnets bästa i första hand beaktas, enligt 3 kap. 1 § socialtjänstlagen. Skriv det i ansökan.",
          "Ansök skriftligt och skriv överst vilket datum lägenheten är i fara. Bifoga hyresavin, uppsägningen och kontoutdrag. Be om prövning enligt 12 kap. 1 § socialtjänstlagen, som före juli 2025 hette 4 kap. 1 §, och om ett skriftligt beslut. Ett avslag enligt den paragrafen kan överklagas till förvaltningsrätten, men inte ett beslut om bistånd utöver det enligt 12 kap. 2 §. Mer om ansökan står i vår guide om ekonomiskt bistånd.",
          "Har du pengar som inte går att få fram snabbt kan socialtjänsten ge bistånd mot återbetalning, eller hjälpa dig att få till en avbetalningsplan. Kolla också bostadsbidrag från Försäkringskassan, för barnfamiljer och unga under 29 år med låg inkomst, eller bostadstillägg från Pensionsmyndigheten om du har låg pension.",
        ],
      },
      {
        h: "Om socialtjänsten säger att hyran är för hög",
        p: [
          "Ibland godkänns bara en del av hyran, för att den anses för hög. Enligt Socialstyrelsens allmänna råd bör den faktiska hyran i regel godtas om behovet är kortvarigt, högst tre månader i följd.",
          "Annars bör hyran ändå godkännas under en övergångstid, och så länge du aktivt letar något billigare. Spara dina bostadsansökningar.",
          "Socialtjänsten bör också väga in skäl mot att flytta, till exempel att barnen skulle behöva byta skola, eller att arbetslöshet eller en betalningsanmärkning gör det svårt att få ett nytt kontrakt. Skriv in det som gäller dig.",
        ],
      },
      {
        h: "Har hyresvärden sagt upp dig? Du har tre veckor",
        p: [
          "Säger hyresvärden upp avtalet för obetald hyra ska du få en underrättelse om att du kan få tillbaka hyresrätten genom att betala, och hyresvärden ska meddela socialtjänsten (i lagen kallad socialnämnden). Betalar du inom tre veckor får du bo kvar. Fristen börjar först när underrättelsen har delgetts dig, alltså lämnats formellt, och socialtjänsten har fått meddelandet.",
          "Ett exempel. Delges du underrättelsen måndagen den 14 december 2026, och socialtjänsten har fått sitt meddelande, ska skulden vara betald senast måndagen den 4 januari 2027. Betalar du via banken räknas betalningen som gjord när banken tog emot ditt betalningsuppdrag. Spara kvittot.",
          "Det räcker också att socialtjänsten inom samma tre veckor skriftligen åtar sig att betala hyran. Skicka därför ansökan samma dag, med fristens datum överst. Är du redan medlem i Hyresgästföreningen kan du också få juridisk hjälp där.",
          "Var du sjuk eller hade ett liknande oförutsett hinder kan du ändå få bo kvar om du betalar så snart det går, dock senast när frågan om avhysning avgörs första gången. Lita inte på det undantaget.",
        ],
      },
      {
        h: "Vad händer när hyresvärden går till Kronofogden?",
        p: [
          "Efter de tre veckorna hänger det på att hyresvärden går med på en lösning. Annars kan hyresvärden ansöka hos Kronofogden om att du ska vräkas. Hyresvärden får inte själv byta lås eller ställa ut dina saker. Bara Kronofogden får genomföra en vräkning.",
          "Bekräfta så fort du kan att du har fått brevet från Kronofogden. Det betyder inte att du håller med. Är kravet fel, till exempel för att du betalade inom fristen, måste du bestrida det skriftligt inom tiden som står i brevet. Annars beslutar Kronofogden att du ska flytta, och beslutet kan ge en betalningsanmärkning. Inom en månad från beslutet kan du ansöka om återvinning, så att domstolen prövar saken.",
          "Ska beslutet genomföras får du ett brev med dag och tid, och samma uppgift går till socialtjänsten. Ibland kan Kronofogden ge dig mer tid. Kostnaden betalar du själv. Dina saker magasineras i högst tre månader på din bekostnad, sedan kastas eller säljs det du inte har hämtat. Husdjur som är kvar omhändertas och riskerar att avlivas. Går vräkningen inte att stoppa är det billigare att flytta själv före dagen.",
        ],
      },
      {
        h: "Hyr du av en privatperson? Nya regler sedan 1 juli 2026",
        p: [
          "Den 1 juli 2026 ersattes lagen om uthyrning av egen bostad från 2013 av en ny privatuthyrningslag. Den gäller när en privatperson hyr ut en bostad som hen äger, till exempel en bostadsrätt eller ett hus. Den gäller inte andrahandsuthyrning av en hyresrätt, fritidsboende eller den som regelmässigt hyr ut fler än två bostäder utöver rum i det egna hemmet.",
          "Har ditt avtal ingåtts den 1 juli 2026 eller senare får hyresvärden säga upp det så att det upphör direkt, om hyran är mer än två veckor sen. Det finns ingen treveckorsfrist, och hyresvärden måste inte meddela socialtjänsten. Är du uppsagd hjälper det inte att betala i efterhand, och hyresvärden kan kräva skadestånd.",
          "Det som skyddar dig är att betala före uppsägningen. Då får avtalet inte sägas upp på den grunden. Uppsägningen räknas som gjord när den har skickats till e-postadressen du har uppgett för avtalet, eller när ett rekommenderat brev har lämnats in på posten, även om du inte har läst den.",
          "Kontakta därför socialtjänsten redan när du ser att hyran inte går ihop. Avtal som ingicks före den 1 juli 2026 följer de tidigare reglerna, alltså enveckasregeln och treveckorsfristen ovan.",
        ],
      },
    ],
    faq: [
      {
        q: "Vad händer om jag är två dagar sen med hyran?",
        a: "Med en vanlig hyresrätt händer inget med kontraktet förrän hyran är mer än en vecka sen. Betala så fort du kan.",
      },
      {
        q: "Kan socialen betala min hyra?",
        a: "Ja, efter en ansökan. Socialtjänsten prövar först om du kan betala själv eller få pengarna på annat sätt, till exempel genom bostadsbidrag.",
      },
      {
        q: "Kan vi bli vräkta fast vi har barn?",
        a: "Ja. Men enligt Socialstyrelsen är det särskilt viktigt att socialtjänsten alltid tar personlig kontakt med familjen när barn berörs. Vänta inte på det, kontakta dem själv.",
      },
      {
        q: "Måste hyresvärden gå med på en avbetalningsplan?",
        a: "Nej. Men ett rimligt förslag i tid gör det lättare att säga ja. Få planen bekräftad skriftligt.",
      },
      {
        q: "Vad är nödbistånd?",
        a: "Ordet finns inte i socialtjänstlagen, men används om ekonomiskt bistånd i en akut situation. Skriv tydligt i ansökan att det är akut och vilket datum det gäller.",
      },
      {
        q: "Hamnar en hyresskuld hos Kronofogden?",
        a: "Det kan den. Ett beslut om betalning eller vräkning kan ge en betalningsanmärkning, som gör det svårare att få ett nytt kontrakt. Kommunens budget- och skuldrådgivning är gratis och har sekretess.",
      },
    ],
  },
  {
    slug: "avbetalningsplan-kronofogden",
    title: "Avbetalningsplan när skulden ligger hos Kronofogden – vem du ska fråga",
    seoTitle: "Avbetalningsplan hos Kronofogden – vem du ska fråga",
    seoDescription:
      "Kronofogden beslutar inte om avbetalningsplan för skulder till bank, inkasso eller hyresvärd. Så ber du borgenären om plan och återkallelse, med räkneexempel.",
    excerpt:
      "Kronofogden kan inte ge dig en plan för skulder till företag. Det kan den du är skyldig, och utmätningen stoppas bara om den säger till Kronofogden.",
    productSlug: "avbetalningsplan",
    published: "2026-10-24",
    body: [
      "Kronofogden kan inte bevilja en avbetalningsplan för skulder till företag eller privatpersoner, till exempel en bank, ett inkassobolag eller en hyresvärd. Det är den du är skyldig pengar, borgenären, som bestämmer. Säger borgenären ja måste den också återkalla målet hos Kronofogden eller begära uppskov där, annars fortsätter utmätningen.",
      "Är skulden till staten, som skatt eller underhållsstöd, är det Kronofogden som prövar uppskov och avbetalning. Kraven är höga, och Kronofogden skriver själv att uppskov sällan beviljas.",
      "Den här guiden gäller dig som redan har en skuld hos Kronofogden, alltså efter ett utslag eller en dom. Har du bara fått ett krav, ett betalningsföreläggande, är det ännu ingen skuld där. Svara inom tiden som står i brevet. Kommer du överens med den som kräver dig och den tar tillbaka kravet innan det blir ett utslag, kan du slippa betalningsanmärkning. Ligger skulden fortfarande hos ett inkassobolag, läs guiden om avbetalningsplan hos inkasso i stället.",
    ],
    sections: [
      {
        h: "Kan Kronofogden ge mig en avbetalningsplan?",
        p: [
          "Det beror på vem du är skyldig. Kronofogden delar in skulder i två sorter. Skulder till staten kallas allmänna, till exempel skatt, underhållsstöd och fordonsskulder. Skulder till företag och privatpersoner kallas enskilda, till exempel banklån, kontokortsskulder och hyresskulder.",
          "För enskilda skulder är svaret nej. Kronofogden skriver att de inte har någon möjlighet att besluta om avbetalningsplan eller uppskov. Du måste vända dig till den som ska ha betalt eller till dess ombud, som ofta är ett inkassobolag.",
          "Det är också borgenären som avgör om den vill gå med på en plan. Svaret beror bland annat på om du har jobb, hur stor inkomsten är, hur mycket du är skyldig och om du har andra skulder.",
        ],
      },
      {
        h: "Varför stoppas inte utmätningen när borgenären säger ja?",
        p: [
          "En överenskommelse mellan dig och borgenären når inte Kronofogden av sig själv. Planen betyder inte automatiskt att ansökan om utmätning tas tillbaka. Borgenären måste återkalla målet eller begära uppskov hos Kronofogden. Gör den inte det är Kronofogden skyldig att fortsätta utreda och utmäta tills skulden är betald.",
          "Återkallelse betyder att målet avslutas hos Kronofogden. Domen eller utslaget finns kvar, så borgenären kan ansöka igen om du slutar betala. Uppskov betyder bara en kort paus. Ett uppskov från borgenären får vara högst två månader, och borgenären kan ge uppskov högst två gånger per år. Annars förfaller ansökan om utmätning. Ska planen löpa längre än två månader är det därför återkallelse du ska be om.",
          "Har du flera enskilda skulder hos Kronofogden måste alla du är skyldig återkalla eller ge uppskov. Säger en enda nej fortsätter Kronofogden att driva in skulderna och utmäta. Skriv därför till var och en, och räkna så att alla förslag tillsammans går ihop. Har du också skulder till staten, som skatt, fortsätter Kronofogden med dem oavsett vad företagen svarar.",
          "Återkallelse kan också hjälpa dig med betalningsanmärkningen. Har du inte haft någon annan skuld registrerad hos Kronofogden de senaste två åren kan en återkallad skuld få sekretess, om du inte heller får någon ny skuld där de följande två åren. Då ska kreditupplysningsföretagen ta bort den betalningsanmärkning som kom när skulden registrerades för utmätning. En anmärkning för själva utslaget finns däremot kvar, även om du betalar, och tas bort senast tre år efter utslaget.",
        ],
      },
      {
        h: "Vem skriver jag till, och vad ska stå i brevet?",
        p: [
          "Skriv till den som har ansökt om utmätning, sökanden, eller till dess ombud. Namnet finns i breven från Kronofogden. I e-tjänsten Mina skulder på Kronofogdens Mina sidor ser du de skulder som Kronofogden driver in, med mer information om varje skuld. Ha skuldens nummer hos Kronofogden till hands, så att borgenären hittar rätt ärende.",
          "Skriv kort och sakligt: ditt namn och personnummer, skuldens nummer hos Kronofogden och borgenärens eget ärendenummer, hur mycket du kan betala varje månad, vilken dag och från vilket datum. Förklara i ett par meningar varför du inte kan betala allt nu. Sedan kommer den viktigaste meningen: 'Om ni godtar planen ber jag er att återkalla ansökan om utmätning hos Kronofogden och bekräfta det skriftligt till mig.'",
          "Be om planen skriftligt. Kronofogden råder dig att kontrollera att en avbetalningsplan innehåller era namn och kontaktuppgifter, den totala skulden, årsräntan, belopp per månad, hur länge du ska betala, ort, datum och underskrift av er båda.",
          "Hos Skrivklart kostar brevet Begäran om avbetalningsplan 59 kr. Du fyller i mottagare, skulden, ditt förslag och kort varför, och får ett brev med belopp, startdatum och en begäran om skriftlig bekräftelse. Brevet är skrivet för skulder som inte har gått till Kronofogden ännu. Skriv därför in skuldens nummer hos Kronofogden när du beskriver skulden. När du har kopierat eller laddat ner brevet byter du ut raden om att vänta med Kronofogden mot meningen om återkallelse ovan, innan du skickar.",
        ],
      },
      {
        h: "Hur mycket ska jag föreslå varje månad?",
        p: [
          "Föreslå ett belopp du klarar även en dyr månad. En plan som spricker gör det svårare att få en ny, och då fortsätter utmätningen. Tänk också på att ränta och avgifter gör att skulden växer under tiden. Du kan be borgenären att frysa räntan.",
          "Ett exempel. Du har 24 500 kr i månaden efter skatt, barnbidraget inräknat. Hyran är 8 900 kr, mat och hushåll 7 000 kr, förskolan 1 300 kr, el, telefon och försäkring 1 200 kr, resor 900 kr och kläder och annat till barnen 1 800 kr. Det blir 21 100 kr, och kvar finns 3 400 kr.",
          "Föreslå inte hela 3 400 kr. Något går sönder, ett barn behöver nya skor. Erbjuder du 1 500 kr i månaden är en skuld på 18 000 kr betald på drygt ett år, eftersom räntan tillkommer. Har du redan löneutmätning drar Kronofogden en del av lönen innan pengarna når dig, så räkna på det du faktiskt får ut.",
          "Räkna också ut ditt förbehållsbelopp på Kronofogdens webbplats. Det är det du alltid får behålla vid en löneutmätning: boendekostnaden plus ett normalbelopp, och i vissa fall tillägg, till exempel för barnomsorg och resor till jobbet. Normalbeloppet räknas om varje år från den 1 januari. För 2026 är det 6 243 kr i månaden för en ensamstående vuxen, 3 336 kr för ett barn upp till 6 år och 4 004 kr för ett barn som är 7 till 10 år. Barnens belopp minskas bland annat med barnbidrag och underhållsbidrag.",
          "Borgenären jämför ditt förslag med vad en löneutmätning skulle ge. Ligger lönen långt över förbehållsbeloppet kan Kronofogden ta mellanskillnaden varje månad, och då får ett lågt förslag sällan ja. Ligger lönen nära eller under finns lite att ta. Skriv det gärna i brevet, för det talar för din plan.",
        ],
      },
      {
        h: "Skatteskuld eller underhållsstöd hos Kronofogden – vad gäller då?",
        p: [
          "För skulder till staten får Kronofogden ge uppskov om det antas gynna staten, om din personliga situation kräver det, eller medan en annan myndighet prövar en ansökan om anstånd. Uppskov får bara ges om Skatteverket inte har något att invända, eller om Skatteverkets inställning uppenbart saknar betydelse. Uppskovet får inte vara längre än det som behövs för att du ska kunna betala, och det kan kopplas till en avbetalningsplan.",
          "I praktiken beviljas det sällan. Får du uppskov väntar Kronofogden med att utmäta så länge du betalar enligt planen. Uppskovet kan dras tillbaka om du inte följer planen eller inte betalar nya skatter när de förfaller. Skatteåterbäring tas till skulden även under uppskovet.",
          "När Skatteverket har lämnat över en skatteskuld till Kronofogden belastar den inte längre skattekontot, och Skatteverket kan inte ta tillbaka eller skriva av den. Det är Kronofogden du ska kontakta. Kan du betala, gör det före sista betaldatum i Kronofogdens brev. För privatpersoner utan företag får skulden då alltid sekretess, och Kronofogden lämnar inte ut den till kreditupplysningsföretagen förrän den tiden, normalt två veckor, har gått ut.",
          "Är skulden till Brottsoffermyndigheten, för ett skadestånd de har betalat ut till ett brottsoffer, kan du komma överens om en avbetalningsplan direkt med dem. Då återkallar de kravet hos Kronofogden.",
          "Är du den förälder som ska betala underhållsstöd till Försäkringskassan kan du ansöka om anstånd där, alltså att skjuta upp betalningen helt eller delvis. Försäkringskassan ska bevilja anstånd i den mån det behövs för att du ska få behålla det du och din familj behöver, räknat som vid en löneutmätning. Ett beslut om anstånd gäller i högst ett år. Skulden finns kvar och ska betalas senare, samtidigt som det löpande beloppet. En skuld som är fem månader gammal lämnar Försäkringskassan över till Kronofogden. Fråga dem vad anståndet betyder för det som redan ligger där.",
        ],
      },
      {
        h: "Vad gör jag om borgenären säger nej?",
        p: [
          "Då fortsätter Kronofogden. Du kan ändå betala av en del av skulden när du kan. Så länge skulden är registrerad hos Kronofogden ska du betala dit, med Swish via Mina sidor eller med bankgiro och OCR-nummer, inte direkt till borgenären. Frivilliga betalningar minskar skulden men stoppar inte utredningen.",
          "Har du löneutmätning kan du ansöka hos Kronofogden om uppehåll en begränsad tid, så kallat anstånd. Det kräver att alla borgenärer går med på det eller att du har särskilda skäl, till exempel en oförutsedd kostnad som du inte kunnat påverka, som vid sjukdom eller olycksfall. Extra kostnader kring jul eller semester räcker inte. Har hyran höjts eller familjen förändrats kan du be Kronofogden ompröva beslutet. Hör av dig direkt, för ett ändrat beslut gäller först från nästa löneutbetalning och räknas inte om bakåt i tiden.",
          "Kommunens budget- och skuldrådgivning är kostnadsfri och omfattas av sekretess. Alla kommuner måste erbjuda den. Rådgivaren kan hjälpa dig med budgeten, med att prioritera skulderna och med en ansökan om skuldsanering.",
          "Skuldsanering är till för den som inte kan betala sina skulder på många år. Du betalar då till Kronofogden i normalt fem år, och en löneutmätning upphör normalt när Kronofogden beslutar att inleda skuldsaneringen. Kronofogdens skuldsaneringstest ger en första bedömning.",
        ],
      },
    ],
    faq: [
      {
        q: "Jag har fått ett betalningsföreläggande. Kan jag få en avbetalningsplan?",
        a: "Ja, men då ligger skulden ännu inte hos Kronofogden för utmätning. Kontakta den som har ansökt, föreslå en plan och be att ansökan återkallas om ni kommer överens. Betala då direkt till dem. Bestrid bara om du anser att kravet är fel, och gör det inom tiden i brevet.",
      },
      {
        q: "Vad är skillnaden mellan uppskov och avbetalningsplan?",
        a: "En avbetalningsplan är en överenskommelse om hur mycket och hur ofta du betalar. Uppskov betyder att ärendet hos Kronofogden pausas en tid. För skulder till företag är det borgenären som begär uppskov, och det får vara högst två månader och ges högst två gånger per år. För en längre plan behöver borgenären återkalla målet. För skulder till staten är det Kronofogden som beviljar uppskov, oftast tillsammans med en avbetalningsplan.",
      },
      {
        q: "Försvinner betalningsanmärkningen om jag får en avbetalningsplan?",
        a: "Inte av planen i sig. Om borgenären återkallar målet, och du varken har haft någon annan skuld hos Kronofogden de senaste två åren eller får någon ny de följande två, kan skulden få sekretess. Då ska anmärkningen från när skulden registrerades för utmätning tas bort. Utslaget är däremot alltid offentligt, och anmärkningen för utslaget sparas i upp till tre år även om du betalar.",
      },
      {
        q: "Kan jag betala direkt till den jag är skyldig?",
        a: "Inte medan skulden är registrerad hos Kronofogden. Då betalar du till Kronofogden, med Swish via Mina sidor eller med bankgiro och OCR-nummer. När borgenären har återkallat målet betalar du enligt planen, så som ni har kommit överens. Har du redan betalat direkt till borgenären, meddela Kronofogden det. Spara kvittona.",
      },
    ],
    sources: [
      {
        label: "Kronofogden: uppskov med betalning och avbetalning",
        url: "https://www.kronofogden.se/nagon-har-krav-mot-dig/du-ska-betala-eller-gora-nagot-verkstallighet/du-kan-inte-betala-eller-gora-nagot/uppskov-med-betalning-och-avbetalning",
      },
      {
        label: "Kronofogden: jag kan inte betala hela min skuld – kan jag få en avbetalningsplan?",
        url: "https://kronofogden.se/kontakta-oss/fragor-och-svar/betala-en-skuld/2021-03-05-jag-kan-inte-betala-hela-min-skuld---kan-jag-fa-en-avbetalningsplan",
      },
      {
        label: "Kronofogden: kontakta den du är skyldig pengar",
        url: "https://www.kronofogden.se/rad-och-stod/om-privatekonomi/bli-skuldfri-och-undvik-nya-skulder/kontakta-den-du-ar-skyldig-pengar",
      },
      {
        label: "Kronofogden: skuld kan få sekretess",
        url: "https://www.kronofogden.se/nagon-har-krav-mot-dig/du-ska-betala-eller-gora-nagot-verkstallighet/skuld-kan-fa-sekretess",
      },
    ],
  },
  {
    slug: "avtal-vaxelvis-boende",
    title: "Avtal om växelvis boende: schema, kostnader och barnbidrag",
    seoTitle: "Avtal om växelvis boende: schema, kostnader, barnbidrag",
    seoDescription:
      "Så skriver ni avtal om växelvis boende: 7/7, 2-2-3 eller 2-2-5-5, bytesdag, vem betalar vad, hur barnbidraget delas och när underhåll ändå kan behövas.",
    excerpt:
      "Schema och bytesdag, vad ni delar på, barnbidraget och när underhåll ändå kan behövas. Med räkneexempel och en lista över vad ni bör skriva ner.",
    productSlug: "umgangesavtal",
    published: "2026-10-24",
    body: [
      "Ett avtal om växelvis boende är en skriftlig överenskommelse där ni som har gemensam vårdnad bestämmer att barnet ska bo ungefär lika mycket hos er båda. Skriv in schema och bytesdag, lov och högtider, hämtning och hur ni gör ändringar. Kostnaderna skriver ni bäst i ett eget avtal, eftersom socialnämnden bara godkänner boende och umgänge. Familjerätten i kommunen hjälper er utan kostnad att skriva avtalet, och ett godkänt avtal kan verkställas på samma sätt som en dom.",
      "Lagen säger inget om vilket schema ni ska ha, och bara i stora drag hur ni delar på kostnaderna. Resten bestämmer ni, och därför behöver det stå svart på vitt. Grunderna finns i guiden Avtal om boende och umgänge: det ni bör skriva ner. Här tar vi det som gäller just växelvis boende.",
    ],
    sections: [
      {
        h: "Varannan vecka, 2-2-3 eller 2-2-5-5?",
        p: [
          "Varannan vecka, ofta skrivet 7/7, betyder en hel vecka hos var och en av er. Det blir två byten på två veckor. Det är lätt att planera, men barnet är borta från den ena av er en vecka i taget.",
          "2-2-3 betyder två dagar hos den ena, två hos den andra och sedan fredag till söndag hos den första. Veckan efter byter ni plats. Det blir sex byten på två veckor, så barnet är aldrig mer än tre dagar från någon av er. Nackdelen är fler byten och mer packning.",
          "2-2-5-5 ligger mittemellan. Den ena har alltid måndag och tisdag, den andra alltid onsdag och torsdag, och helgerna växlar så att det blir fem dagar i sträck. Det blir fyra byten på två veckor, och fasta veckodagar gör det lättare att planera träningar.",
          "Alla tre ger sju nätter var på två veckor. Ju yngre barnet är, desto bättre brukar kortare perioder fungera, så 2-2-3 är vanligt för små barn. Skriv vilket schema ni valt och från vilket datum det gäller.",
        ],
      },
      {
        h: "Vilken bytesdag passar bäst?",
        p: [
          "Byter ni på fredag börjar varje period med en helg, och barnet hinner landa i det nya hemmet innan skolveckan börjar. Byter ni på måndag kan bytet ske via förskolan eller skolan, och helgen blir en lugn avslutning hos den förälder barnet redan är hos.",
          "Att byta via förskolan eller skolan fungerar bra på vardagar. Den ena lämnar på morgonen och den andra hämtar på eftermiddagen. Då slipper barnet ett avsked i dörren, och ni behöver inte ses vid varje byte.",
          "Sker bytet på lov eller en annan dag utan skola, skriver ni klockslag och plats, till exempel söndag kl. 18 hos den som tar över. Skriv också vad som följer med barnet: idrottskläder, läxor, mediciner och pass.",
        ],
      },
      {
        h: "Vem betalar vad vid växelvis boende?",
        p: [
          "Vardagskostnaderna betalar den som har barnet just då: mat, boende, hygien och vanliga utflykter. På så sätt bidrar ni båda till barnets försörjning.",
          "I ert avtal om kostnaderna skriver ni det som inte hör till en viss period: avgifter för fritidsaktiviteter, vinterjacka och vinterskor, mobiltelefon och abonnemang, glasögon, tandställning om ni får betala för den, barnförsäkring, cykel och skidor. Skriv också att ni ska vara överens innan någon köper något dyrt eller anmäler barnet till en ny aktivitet.",
          "Enligt föräldrabalken ska ni ta del i barnets kostnader var och en efter er förmåga. När Försäkringskassan och domstolar räknar på förmågan utgår de från överskottet, alltså det som blir kvar av inkomsten efter egna levnads- och boendekostnader. Med ungefär lika inkomster är hälften var enklast. Är skillnaden stor kan ni som en förenkling dela efter inkomst efter skatt.",
          "Anta att du tjänar 20 000 kronor i månaden efter skatt och den andra föräldern 30 000 kronor. Delar ni efter inkomst står du för 40 procent och den andra föräldern för 60 procent. Kostar fotbollen 2 400 kronor om året betalar du 960 kronor och den andra föräldern 1 440 kronor. Räknat på överskott får den som tjänar mest oftast en ännu större andel.",
          "Bestäm också hur ni betalar tillbaka till varandra, till exempel att den som lagt ut pengar skickar kvittot och får tillbaka den andras del inom 30 dagar.",
        ],
      },
      {
        h: "Hur delas barnbidraget vid växelvis boende?",
        p: [
          "Barnbidraget är 1 250 kronor i månaden per barn. Är barnet fött 1 mars 2014 eller senare och ni har gemensam vårdnad delas det lika, alltså 625 kronor var, om ni inte tillsammans har anmält att en av er ska få hela. Med två barn får ni då 1 325 kronor var i månaden, eftersom även flerbarnstillägget på 150 kronor delas.",
          "För barn födda före 1 mars 2014 gäller äldre regler så länge ingen av er har gjort en ny anmälan. Då får oftast mamman hela barnbidraget.",
          "Bor barnet växelvis kan ni anmäla till Försäkringskassan att barnbidraget ska delas lika. Är ni överens gör ni det tillsammans, och ändringen gäller tidigast från månaden efter att ni båda skrivit under. Annars kan en av er anmäla ensam. Då utreder Försäkringskassan var barnet bor, och den andra föräldern får två veckor på sig att svara.",
          "Den som anmäler ensam behöver kunna visa att barnet troligen bor växelvis. Ert skriftliga avtal om boendet är ett bra underlag.",
        ],
      },
      {
        h: "Måste någon betala underhållsbidrag vid växelvis boende?",
        p: [
          "Oftast inte. Bor barnet ungefär lika mycket hos er båda betalar normalt ingen av er underhållsbidrag, eftersom ni försörjer barnet varannan period var.",
          "Undantaget är när ekonomin skiljer sig mycket. Högsta domstolen slog 2013 fast att den förälder som har betydligt större ekonomiskt utrymme kan behöva betala underhållsbidrag även vid växelvis boende, om barnet annars inte får den standard det har rätt till (NJA 2013 s. 955). Försäkringskassan beskriver det så att barnet ska ha samma levnadsstandard hos er båda.",
          "Det finns ingen fast formel. I praxis har bidraget räknats för den tid barnet bor hos den förälder som ska få pengarna. Ni kan också jämna ut skillnaden genom att den med högre inkomst tar en större del av de delade kostnaderna.",
          "Kommer ni överens om ett fast belopp, skriv ett eget avtal om underhållsbidrag med två vittnen. Hur det går till står i guiden Avtal om underhållsbidrag: så skriver du det så att det håller.",
        ],
      },
      {
        h: "Folkbokföring, skola och resor",
        p: [
          "Barnet kan bara vara folkbokfört på en adress, även om det bor lika mycket hos er båda. Folkbokföringen avgör vilken kommun som är barnets hemkommun, alltså den kommun som ansvarar för förskola och skola.",
          "Sover barnet ungefär lika mycket hos er båda får ni själva bestämma vem av er barnet ska vara folkbokfört hos. En flytt ska anmälas till Skatteverket inom en vecka. Har ni gemensam vårdnad får den andra vårdnadshavaren sju dagar på sig att godkänna anmälan. Godkänner den inte, eller är ni inte överens, utreder Skatteverket var barnet ska vara folkbokfört, bland annat utifrån var barnet bor mest och var det går i förskola eller skola.",
          "Bor ni i samma kommun har en grundskoleelev enligt praxis rätt till skolskjuts från båda hemmen (RÅ 2002 ref. 91), om villkoren för skolskjuts i övrigt är uppfyllda, till exempel att eleven går i den skola kommunen placerat den i. Bor ni i olika kommuner har Högsta förvaltningsdomstolen sagt att en grundskoleelev inte har rätt till kostnadsfri skolskjuts från hemmet i den andra kommunen (HFD 2014 ref. 34).",
          "Lagens regel om att dela resekostnader gäller när barnet bor hos en förälder och träffar den andra, inte vid växelvis boende. Skriv därför in vem som kör, vem som betalar busskort eller bensin och vad som gäller om någon flyttar längre bort.",
        ],
      },
      {
        h: "Checklista: det här bör ni skriva ner",
        p: [
          "Parter och barn: era namn, barnens namn och födelseår, att ni har gemensam vårdnad och var barnen är folkbokförda. Schema: vilket schema, startdatum, bytesdag, klockslag och plats. Lov och högtider: jul, sommarlov, sportlov och födelsedagar. Ändringar: hur långt i förväg ni hör av er och att ni går till samarbetssamtal hos kommunen om ni inte kommer överens. Sist ort, datum och era underskrifter.",
          "Pengar, i ett eget avtal mellan er: vilka kostnader som följer barnet, vilka ni delar och i vilka andelar, hur ni betalar tillbaka till varandra och att barnbidraget delas lika. Anmäl också delningen till Försäkringskassan, eftersom avtalet i sig inte ändrar utbetalningen.",
        ],
      },
      {
        h: "Så får ni avtalet godkänt",
        p: [
          "Kontakta familjerätten i den kommun där barnet är folkbokfört. Där kan ni få hjälp att skriva avtalet utan kostnad, eller lämna in ett avtal som ni båda redan har skrivit under. Socialnämnden godkänner avtalet om det är förenligt med barnets bästa och frågorna är tillräckligt utredda. Därför vill familjerätten oftast prata med er båda, och ibland med barnet. Ett beslut att inte godkänna avtalet går inte att överklaga.",
          "Hos Skrivklart kostar avtalet om boende och umgänge 99 kronor. Du väljer växelvis boende, fyller i schema, lov och hämtning och får ett avtal som är redo att skriva under och lämna till familjerätten. Kostnaderna ingår inte i det avtalet. Ska den ena betala underhållsbidrag finns även avtalet om underhållsbidrag för 99 kronor, där ni också kan skriva hur ni delar extra kostnader. Båda ingår i Familjepaketet för 149 kronor. Läs igenom texten noga innan ni skriver under. Den ersätter inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur många dagar måste barnet bo hos mig för att det ska räknas som växelvis boende?",
        a: "Lagen anger ingen exakt gräns. Försäkringskassan utgår från att barnet bor ungefär lika mycket hos er båda. Bor barnet i genomsnitt färre än 12 dagar i månaden hos den ena, alltså under ungefär 40 procent av tiden, räknar Försäkringskassan det som umgänge. Vid 12 till 13 dagar kan det räknas som växelvis boende bara om andra omständigheter klart pekar åt det hållet, till exempel hur ni delar barnets försörjning, hur boendet är ordnat och var barnet har sina saker.",
      },
      {
        q: "Måste avtalet om växelvis boende godkännas av socialnämnden?",
        a: "Nej, ni kan ha en överenskommelse bara mellan er. Men först när avtalet är skriftligt och godkänt av socialnämnden gäller det som en dom och kan verkställas. Godkännandet gäller boende och umgänge. Ett avtal om underhållsbidrag behöver inte godkännas, med ett undantag: ska bidraget betalas som engångsbelopp eller för mer än tre månader i taget måste avtalet vara bevittnat av två personer och, om barnet är under 18 år, godkänt av socialnämnden.",
      },
      {
        q: "Får barnet själv bestämma om det vill bo växelvis?",
        a: "Det finns ingen åldersgräns. Barnet ska få säga vad det tycker, och dess åsikter väger tyngre ju äldre och mognare det är. Familjerätten kan prata med barnet innan avtalet godkänns. Det är ändå ni som vårdnadshavare, eller en domstol, som bestämmer.",
      },
      {
        q: "Kan jag få underhållsstöd om barnet bor växelvis?",
        a: "Nej. Underhållsstöd vid växelvis boende togs bort 1 mars 2018. Övergångsreglerna gällde till och med januari 2021, och sedan dess lämnas det inte alls. Får barnet inte den standard det har rätt till kan ni komma överens om underhållsbidrag, eller låta tingsrätten pröva frågan. Vänta inte för länge: tingsrätten kan bara fastställa underhållsbidrag för högst tre år bakåt från den dag talan väcktes, om inte den som ska betala går med på mer.",
      },
      {
        q: "Kan båda föräldrarna få bostadsbidrag när barnet bor växelvis?",
        a: "Ja. Det finns ett särskilt bidrag för barn som bor växelvis, och båda föräldrarna kan söka. Beloppet beror på inkomst och boendekostnad. Sedan 1 januari 2026 räknas en högre boendekostnad med för barnfamiljer, så det kan vara värt att räkna om. Från 1 januari 2027 räknas bostadsbidraget för de flesta på månadsinkomsten i stället för årsinkomsten, när ni får ett nytt beslut.",
      },
      {
        q: "Hur ändrar vi avtalet om något förändras?",
        a: "Ett godkänt avtal gäller tills ni skriver ett nytt som socialnämnden godkänner, eller tills en domstol beslutar något annat. Ingen av er kan säga upp det ensam. Är ni överens, skriv ett nytt avtal och låt socialnämnden godkänna det. Kommer ni inte överens erbjuder kommunen samarbetssamtal, även om barnets försörjning. Vill någon av er att tingsrätten ska avgöra boendet måste den som begär det i regel ha gått på ett informationssamtal hos kommunen högst ett år innan. Annars avvisar tingsrätten yrkandet.",
      },
    ],
    sources: [
      {
        label: "Försäkringskassan: underhåll – så funkar det",
        url: "https://www.forsakringskassan.se/privatperson/foralder/for-foraldrar-som-inte-lever-ihop/barnet-bor-hos-bada-foraldrarna---vaxelvist-boende",
      },
      {
        label: "Försäkringskassan: barnbidrag och flerbarnstillägg – så funkar det",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/barnbidrag-och-flerbarnstillagg/barnbidrag-och-flerbarnstillagg-sa-funkar-det",
      },
      {
        label: "Försäkringskassan: ändra vem som ska få barnbidraget och flerbarnstillägget",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/barnbidrag-och-flerbarnstillagg/andra-vem-som-ska-fa-barnbidraget-och-flerbarnstillagget",
      },
      {
        label: "Skatteverket: anmäla flytt för barn",
        url: "https://www.skatteverket.se/privat/folkbokforing/flyttanmalan/anmalaflyttforbarn.4.3810a01c150939e893f18d24.html",
      },
    ],
  },
  {
    slug: "hur-mycket-underhallsbidrag",
    title: "Underhållsbidrag – hur mycket ska man betala? Räkneexempel och belopp 2026",
    seoTitle: "Underhållsbidrag – hur mycket? Räkneexempel 2026",
    seoDescription:
      "Hur mycket underhållsbidrag ska man betala 2026? Så räknar ni ut beloppet, med räkneexempel för ett och två barn, syskon och tonåringar som fyller 16.",
    excerpt:
      "Det finns inget fast belopp, men en tydlig metod. Räkneexempel med 2026 års siffror för ett och två barn, låg inkomst, tonåringar och växelvis boende.",
    productSlug: "underhallsavtal",
    published: "2026-10-24",
    body: [
      "Det finns inget fast belopp för underhållsbidrag. Barnets kostnader, minus barnbidraget, delas mellan föräldrarna efter hur mycket var och en har kvar när det egna boendet och de egna levnadskostnaderna är betalda. I räkneexemplet nedan gäller det en nioåring, och föräldrarna tjänar 26 000 och 32 000 kronor efter skatt. Där betalar den andra föräldern cirka 2 340 kronor i månaden.",
      "Som jämförelse är underhållsstödet från Försäkringskassan 1 673 kronor per barn och månad till och med den månad barnet fyller 7 år, 1 823 kronor till och med den månad barnet fyller 15 och 2 223 kronor därefter. Ungefär så mycket kan barnet i regel få via Försäkringskassan om den andra föräldern betalar för lite eller inget alls. Beloppen i avtal och domar höjdes inte i februari 2026.",
    ],
    sections: [
      {
        h: "Hur räknas underhållsbidrag ut?",
        p: [
          "Kalla föräldern som barnet bor hos för A och den andra föräldern för B. Enligt föräldrabalken delar ni på barnets kostnader efter vad var och en har råd med.",
          "Först räknar ni ut barnets behov. Utgå från Konsumentverkets beräknade kostnader för mat, kläder, fritid och hygien för ett barn i den åldern. Lägg till barnets del av boendet och verkliga kostnader som förskola, fritids eller en aktivitet. Dra sedan av barnbidraget på 1 250 kronor.",
          "Sedan räknar var och en fram sitt överskott: inkomsten efter skatt, minus en skälig boendekostnad, minus ett normalbelopp för allt annat. Normalbeloppet är enligt lagen 120 procent av prisbasbeloppet, vilket 2026 blir 5 920 kronor i månaden.",
          "Sist delas barnets behov i proportion till överskotten. B betalar barnets behov gånger B:s överskott, delat med båda föräldrarnas överskott tillsammans. Den som har större överskott står för den större delen, även om det är föräldern som barnet bor hos.",
          "Försäkringskassan har en räknare, Beräkna underhållsbidrag. Där fyller ni i era egna siffror och får ett förslag på belopp.",
        ],
      },
      {
        h: "Räkneexempel 2026: ett barn på 9 år",
        p: [
          "Konsumentverkets siffror för 2026 ger 2 090 kronor i månaden för kläder, fritid, hygien med mera för ett barn som är 7–10 år. Mat kostar 1 650 kronor när barnet äter lunch i skolan. Med 1 500 kronor för barnets del av boendet blir behovet 5 240 kronor. Minus barnbidraget återstår 3 990 kronor.",
          "A tjänar 26 000 kronor efter skatt och betalar 8 000 kronor för sin egen del av boendet. Överskottet blir 26 000 minus 8 000 minus 5 920, alltså 12 080 kronor. B tjänar 32 000 kronor efter skatt och har 9 000 kronor i boende, vilket ger 17 080 kronor i överskott.",
          "Tillsammans har A och B 29 160 kronor i överskott, och B:s del av det är knappt 59 procent. B betalar då knappt 59 procent av 3 990 kronor, ungefär 2 340 kronor i månaden. A står för resten.",
          "Försäkringskassans eget exempel visar hur mycket inkomsterna styr. En 12-åring behöver 3 500 kronor i månaden efter barnbidraget. Föräldern som barnet bor hos tjänar 50 000 kronor i månaden och den andra 25 000. Eftersom föräldern som barnet bor hos har ett så mycket större överskott betalar den andra föräldern bara 500 kronor.",
        ],
      },
      {
        h: "Hur mycket blir det för 2 barn, eller syskon på olika håll?",
        p: [
          "Räkna fram ett belopp per barn. Ta samma föräldrar, två barn på 5 och 12 år och 1 000 kronor var för boendet. 5-åringen behöver 2 000 kronor för kläder, fritid, hygien med mera och 1 330 kronor för mat när lunchen äts på förskolan (1 710 kronor om all mat lagas hemma). 12-åringen behöver 2 070 och 2 060 kronor. Efter barnbidraget blir behovet 3 080 och 3 880 kronor.",
          "B:s andel på knappt 59 procent ger cirka 1 800 kronor för 5-åringen och 2 270 kronor för 12-åringen, totalt ungefär 4 080 kronor i månaden. Räcker B:s överskott inte till alla barn delas det som finns mellan barnen.",
          "Bor syskonen på olika håll betalar var och en för det barn som bor hos den andra.",
        ],
      },
      {
        h: "När barnet fyller 15, 16 eller 18 år",
        p: [
          "Från månaden efter 15-årsdagen höjs underhållsstödet till 2 223 kronor. Konsumentverkets kostnader stiger också. För en 15–17-åring är det 2 390 kronor för kläder, fritid och hygien och 2 370 kronor för mat när tonåringen äter lunch i skolan (3 050 kronor om all mat lagas hemma).",
          "När barnet fyller 16 upphör barnbidraget. Går barnet på gymnasiet betalar CSN i stället ut studiebidrag, 1 250 kronor i månaden, men inte i juli och augusti. Går barnet kvar i grundskolan förlängs barnbidraget. Räknar ni om första exemplet för en 16-åring, med studiebidraget avdraget, blir B:s del ungefär 2 930 kronor i månaden.",
          "Underhållsskyldigheten gäller tills barnet fyller 18. Går barnet då fortfarande i grundskolan, gymnasiet eller annan jämförlig grundutbildning fortsätter den så länge skolgången pågår, längst tills barnet fyller 21. Från 18-årsdagen betalas pengarna direkt till barnet. Det är också med barnet ni gör upp, så skriv gärna ett nytt avtal.",
          "Får ni underhållsstöd upphör det den månad barnet fyller 18. Barnet måste själv ansöka om förlängt underhållsstöd, helst några månader före 18-årsdagen. Det lämnas längst till och med juni det år barnet fyller 20.",
        ],
      },
      {
        h: "Låg inkomst, hög inkomst eller ny familj",
        p: [
          "Har B lite kvar efter boende och normalbelopp blir underhållsbidraget lågt, ibland noll. Säg att B tjänar 21 000 kronor efter skatt och betalar 7 500 kronor i boende. Då blir överskottet 7 580 kronor. Med A:s siffror ovan blir B:s del ungefär 1 540 kronor för 9-åringen. Det är mindre än underhållsstödet på 1 823 kronor.",
          "Då kan A ansöka om underhållsstöd. Gör det direkt. Stödet lämnas tidigast från månaden före den månad då ansökan kommer in till Försäkringskassan, så de månader du väntar går förlorade.",
          "Försäkringskassan betalar då ut underhållsstödet till A och kräver B på ett eget belopp. Det utgår från B:s inkomst före skatt enligt det senaste beslutet om slutlig skatt, alltså inkomsten för två år sedan. Från den dras 120 000 kronor. Av resten tas 14 procent för ett barn, 11,5 procent per barn för två och 10 procent per barn för tre, delat med 12. Antalet barn räknas på alla barn B är underhållsskyldig för, även barn som bor hos B. Beloppet blir aldrig högre än underhållsstödet.",
          "Med 240 000 kronor om året före skatt blir det 1 400 kronor i månaden för ett barn. Men i exemplet motsvarar B:s 21 000 kronor efter skatt ungefär 26 000 kronor före skatt, drygt 300 000 kronor om året. Då blir Försäkringskassans belopp över 2 000 kronor, och B får betala hela 1 823 kronor i månaden till Försäkringskassan. Det är mer än de 1 540 kronor som den vanliga beräkningen gav.",
          "Betalar B i stället direkt till A minst det belopp Försäkringskassan har räknat fram, får A mellanskillnaden upp till underhållsstödets nivå. Har B betalat i rätt tid till Försäkringskassan i tolv månader i följd prövar Försäkringskassan om stödet ska upphöra, så att B betalar direkt till A.",
          "Vid hög inkomst finns inget tak i lagen. Barnet ska ha ungefär samma levnadsstandard hos båda föräldrarna. Därför kan behovet räknas högre än Konsumentverkets nivåer, till exempel för fritid, resor och boende.",
          "Har B andra barn som bor hemma tar beräkningen hänsyn till dem om B:s överskott inte räcker till alla barn. För varje sådant barn räknas 40 procent av prisbasbeloppet, 1 973 kronor i månaden 2026, plus barnomsorg. Från det dras barnets egna inkomster, som barnbidrag, underhållsstöd och underhållsbidrag. Bor B ihop med det barnets andra förälder räknas även den förälderns överskott av. Det som återstår är B:s kostnad för barnet.",
          "Bor B med en make, eller med en sambo som B har barn med, kan 2 960 kronor i månaden räknas av för partnern om det finns särskilda skäl.",
        ],
      },
      {
        h: "Växelvis boende och umgängesavdrag",
        p: [
          "Bor barnet ungefär lika mycket hos er båda är ingen av er skyldig enligt lag att betala underhållsbidrag (7 kap. 2 § föräldrabalken). Är det stor skillnad på er ekonomi kan ni ändå komma överens om att den som har bättre ekonomi betalar en del, så att barnets levnadsstandard inte skiftar för mycket från vecka till vecka. Det är då frivilligt.",
          "Har den som betalar barnet hos sig minst fem hela dygn i följd, eller minst sex hela dygn under en kalendermånad, får den föräldern göra umgängesavdrag. Avdraget är en fyrtiondel av månadsbeloppet per dygn. På 2 340 kronor blir det drygt 58 kronor per dygn, och sex dygn ger 351 kronor mindre att betala.",
          "Dygnet då barnet lämnar dig räknas som ett helt dygn, om vistelsen inte börjar och slutar samma dygn. Avdraget måste göras på underhållsbidrag för tid senast sex månader efter utgången av den kalendermånad då vistelsen slutade. Annars går det förlorat.",
          "Avdraget gäller inte om beloppet redan är satt lägre just för att barnet är mycket hos den som betalar.",
        ],
      },
      {
        h: "Höjs underhållsbidraget 2026 eller 2027?",
        p: [
          "Inte 2026. Belopp i avtal och domar räknas om varje februari efter hur mycket prisbasbeloppet har ändrats, och lagen avrundar ändringen nedåt till hela procent. Prisbasbeloppet gick bara från 58 800 till 59 200 kronor, så Försäkringskassan bestämde omräkningen till 0 procent. I februari 2025 höjdes beloppen med 2 procent och i februari 2024 med 9 procent.",
          "Prisbasbeloppet för 2027 blir 59 600 kronor, bara 400 kronor mer än i år. Med lagens avrundning pekar det mot oförändrade belopp även i februari 2027, men Försäkringskassan fattar det formella beslutet i slutet av året.",
          "Ett belopp som bestämts i november, december eller januari räknas om tidigast i februari efter att ett år har gått.",
        ],
      },
      {
        h: "Skriv ner beloppet",
        p: [
          "När ni har kommit fram till ett belopp, skriv ner det. Underhållsbidrag betalas i förskott för varje kalendermånad. Vill ni att det ska betalas som ett engångsbelopp eller för längre perioder än tre månader i taget måste avtalet vara skriftligt, bevittnat av två personer och godkänt av socialnämnden. Annars befrias den som betalar inte från sin skyldighet.",
          "Hos Skrivklart kostar ett avtal om underhållsbidrag 99 kronor. Du fyller i barnens namn, vem som betalar, belopp per barn och månad, betalningsdag och startdatum. Du får ett avtal som hänvisar till lagens årliga omräkning, med rader för era underskrifter och två vittnen. Varför vittnena gör skillnad går vi igenom i guiden Avtal om underhållsbidrag.",
        ],
      },
    ],
    faq: [
      {
        q: "Vad är ett normalt underhållsbidrag?",
        a: "Det finns inget standardbelopp i lagen. Som jämförelse är underhållsstödet 1 673 till 2 223 kronor per barn och månad. I räkneexemplet ovan blir det cirka 2 340 kronor för en nioåring. Med god inkomst hos den som betalar kan beloppet bli högre, med låg inkomst lägre.",
      },
      {
        q: "Räknas barnbidraget in i underhållet?",
        a: "Ja. Barnbidraget räknas som barnets inkomst och dras av från behovet. Har ni gemensam vårdnad delas det normalt lika mellan er. För barn födda före mars 2014 kan äldre regler gälla om ingen ny anmälan har gjorts. Bor barnet varaktigt hos dig kan du anmäla till Försäkringskassan att du ska få hela, även om den andra föräldern inte godkänner det. Då utreder Försäkringskassan var barnet bor, och det tar längre tid.",
      },
      {
        q: "Måste jag betala underhåll om jag är arbetslös?",
        a: "Skyldigheten finns kvar, men beloppet beror på vad du har kvar efter boende och normalbelopp. Får den andra föräldern underhållsstöd räknar Försäkringskassan på din inkomst för två år sedan. Saknas inkomst utan rimlig förklaring bedömer de vad du skulle kunna tjäna. Betalar du till Försäkringskassan kan du vid låg inkomst ansöka om anstånd, alltså att skjuta upp betalningen helt eller delvis, högst ett år i taget. Skulden finns kvar och ska betalas av efteråt, samtidigt som de löpande betalningarna fortsätter. Betalar du direkt enligt avtal eller dom gäller beloppet tills ni har skrivit ett nytt avtal eller tingsrätten har jämkat det.",
      },
      {
        q: "Kan man kräva underhållsbidrag retroaktivt?",
        a: "Ja. Underhåll ska betalas från det att ni slutade bo ihop. I domstol kan det fastställas längst tre år bakåt från den dag talan väcks, om inte den som ska betala går med på mer. Ett fastställt bidrag som inte betalats går att kräva i fem år från förfallodagen.",
      },
      {
        q: "Kan vi ändra beloppet senare?",
        a: "Ja. Är ni överens skriver ni ett nytt avtal. Försäkringskassan rekommenderar en ny beräkning när någon av er får ny lön och när barnet blir äldre. Är ni inte överens kan tingsrätten jämka ett avtal eller en dom om förhållandena har ändrats. Ingen av er kan ändra beloppet på egen hand. Tills ni har ett nytt avtal eller en ny dom gäller det gamla beloppet med årlig omräkning, och det som inte betalas kan drivas in hos Kronofogden.",
      },
      {
        q: "Vad händer om vi inte kommer överens om beloppet?",
        a: "Då kan föräldern som barnet bor hos väcka talan om underhållsbidrag för barnets räkning i tingsrätten, som bestämmer beloppet. Under tiden går det att ansöka om underhållsstöd hos Försäkringskassan. Gör det så snart som möjligt, eftersom stödet lämnas tidigast från månaden före den månad du ansöker. Vad du gör när pengarna uteblir går vi igenom i guiden Den andra föräldern betalar inte underhåll.",
      },
    ],
    sources: [
      {
        label: "Försäkringskassan: så här beräknas underhållsbidrag",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/sa-har-beraknas-underhallsbidrag",
      },
      {
        label: "Försäkringskassan: underhåll – så funkar det",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/underhall-sa-funkar-det",
      },
      {
        label: "Försäkringskassan: så betalar du underhållet",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/sa-betalar-du-underhallet",
      },
      {
        label: "Försäkringskassan: om den som ska betala underhåll inte kan eller vill betala",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/om-den-som-ska-betala-underhall-inte-kan-eller-vill-betala",
      },
    ],
  },
  {
    slug: "lanat-ut-pengar-far-inte-tillbaka",
    title: "Lånat ut pengar och får inte tillbaka? Skicka ett kravbrev först – så gör du",
    seoTitle: "Lånat ut pengar och får inte tillbaka? Så gör du",
    seoDescription:
      "Lånat ut pengar och får inte tillbaka? Så kräver du dem, även utan skuldebrev: bevis, kravbrev med sista dag, dröjsmålsränta, Kronofogden och preskription.",
    excerpt:
      "Spara bevisen, skicka ett skriftligt krav med sista dag och gå sedan till Kronofogden. Det fungerar även utan skuldebrev.",
    productSlug: "betalningspaminelse",
    published: "2026-10-24",
    body: [
      "Har du lånat ut pengar och inte fått tillbaka dem kan du kräva dem, även om ni aldrig skrev något skuldebrev. Skicka först ett skriftligt krav med belopp och ett sista datum för betalning. Kommer pengarna ändå inte kan du ansöka om betalningsföreläggande hos Kronofogden. Då kräver Kronofogden personen på pengarna åt dig, och det kostar 300 kr.",
      "Det spelar ingen roll om pengarna gick till en kompis, ett ex eller en släkting, eller om de swishades eller lämnades kontant. Det som avgör hur lätt det blir är vad du kan visa: att pengarna gick över, att det var ett lån och vad ni sa om återbetalningen.",
    ],
    sections: [
      {
        h: "Steg 1: Spara bevisen innan du hör av dig",
        p: [
          "Ta skärmdumpar av sms, chattar och mejl där ni pratar om pengarna. Ett meddelande som ”kan jag låna 8 000 till hyran, du får tillbaka dem i maj” är ett starkt bevis. Spara också meddelanden där personen lovar att betala eller ber om mer tid.",
          "Ladda ner Swish-historiken eller ett kontoutdrag som visar överföringen, med datum, belopp och mottagare. Lämnade du kontanter, skriv ner när, var och om någon annan var med.",
          "Swish-historiken visar att pengarna gick över, men inte varför. Blir det tvist kan frågan bli om det var ett lån eller en gåva. Ju tydligare det står i era meddelanden att det var ett lån och att pengarna skulle betalas tillbaka, desto starkare står du.",
        ],
      },
      {
        h: "Lånat ut pengar utan skuldebrev – går det ändå?",
        p: [
          "Ja. Ett lån gäller även om ni bara kom överens muntligt eller i ett sms. Skillnaden mot ett skuldebrev är att det blir svårare att visa vad ni kom överens om.",
          "Bestämde ni inget datum för återbetalning ska pengarna betalas när du kräver dem. Därför behövs kravbrevet. Kronofogden tar bara upp ett krav där sista dagen för betalning har passerat, och utan bestämt datum är det ditt brev som sätter den dagen.",
        ],
      },
      {
        h: "Steg 2: Skicka ett kravbrev med sista dag för betalning",
        p: [
          "Ett kravbrev till en privatperson kan vara kort. Skriv vem du är, att du lånat ut ett visst belopp ett visst datum, vad som har betalats tillbaka och vad som återstår. Skriv sista dag för betalning, gärna två veckor fram, och hur pengarna ska betalas, till exempel ditt Swish-nummer eller kontonummer.",
          "Ett exempel: ”Den 12 mars 2026 lånade jag ut 8 000 kr till dig via Swish. Du betalade tillbaka 2 000 kr i maj. Jag kräver att du betalar resterande 6 000 kr till mitt Swish-nummer 070-000 00 00 senast den 16 november 2026. Betalar du inte i tid blir du skyldig att betala dröjsmålsränta, och jag kommer att ansöka om betalningsföreläggande hos Kronofogden.”",
          "Håll tonen saklig, utan hot eller anklagelser. Brevet kan senare läsas av Kronofogden eller en domare. Behåll en kopia och spara det som visar att brevet kom fram, till exempel personens svar.",
          "Vill du ha brevet färdigformulerat kan du skriva en betalningspåminnelse hos Skrivklart för 59 kr. Du fyller i vem du är, vem som ska betala, vad lånet gällde och beloppet, och ett nytt sista datum. Ett privat lån har inget fakturanummer, så ange datumet för överföringen som referens. Meningen om dröjsmålsränta lägger du själv till, liksom att du annars ansöker hos Kronofogden. Utan den meningen börjar räntan löpa först när personen har fått din ansökan från Kronofogden.",
        ],
      },
      {
        h: "Dröjsmålsränta mellan privatpersoner – hur fungerar det?",
        p: [
          "Räntelagen gäller även när en privatperson lånar ut till en annan, om ni inte har avtalat något annat. Hade ni bestämt ett datum för återbetalning löper dröjsmålsränta från det datumet.",
          "Hade ni inget datum börjar räntan löpa 30 dagar efter att du skickat ett krav på ett bestämt belopp. Mellan privatpersoner gäller det bara om kravet också säger att den som inte betalar blir skyldig att betala dröjsmålsränta. Därför står den meningen med i exemplet ovan. Räntan löper inte för tiden innan kravet kom fram. Saknade ditt krav meningen löper räntan ändå senast från den dag personen delges din ansökan om betalningsföreläggande.",
          "Räntan är Riksbankens referensränta plus åtta procentenheter. För andra halvåret 2026, från 1 juli till 31 december, är referensräntan 2 procent. Dröjsmålsräntan blir då 10 procent per år. Referensräntan bestäms på nytt varje halvår.",
          "Ett räkneexempel: du skickar kravet på 6 000 kr den 2 november 2026 med sista dag den 16 november. Räntan börjar ändå löpa först den 2 december, 30 dagar efter att du skickade kravet. Med 10 procent per år blir det 600 kr om året, ungefär 50 kr i månaden, så länge skulden och räntesatsen är desamma.",
        ],
      },
      {
        h: "Steg 3: Ansök om betalningsföreläggande hos Kronofogden",
        p: [
          "Har sista dagen passerat utan betalning kan du ansöka om betalningsföreläggande. Som privatperson gör du det i Kronofogdens e-tjänst eller med en blankett. Avgiften är 300 kr. I ansökan kan du begära att den som är skyldig ersätter avgiften och betalar dröjsmålsränta.",
          "Beskriv kravet så att den andra förstår vad det gäller: att du lånat ut pengar, belopp, datum, när lånet skulle ha betalats tillbaka och vad som redan har betalats. Vill du ha dröjsmålsränta måste du begära den i ansökan, med räntesats och från vilket datum. Kronofogden beslutar bara om det du har begärt. Kronofogden skickar sedan kravet till personen, som ska bekräfta att hen har tagit emot det.",
          "Betalar personen inte och säger inte emot, beslutar Kronofogden att skulden ska betalas. Det kallas utslag. Ett utslag ger också personen en betalningsanmärkning som ligger kvar i tre år.",
          "Om du inte har skrivit i ansökan att du inte vill ha verkställighet går utslaget automatiskt vidare till verkställighet. Då kan Kronofogden till exempel ta en del av personens lön, så kallad utmätning. Grundavgiften för det är 600 kr per år och betalas i första hand av den som är skyldig. Kan hen inte betala kan du få betala avgiften, men du får tillbaka den om det kommer in pengar i ärendet.",
          "Får du hela beloppet medan ärendet pågår, inklusive ränta och ansökningsavgiften, ska du återkalla ansökan. Avgiften på 300 kr får du inte tillbaka från Kronofogden när du återkallar. Får du en del, meddela Kronofogden hur mycket som återstår.",
        ],
      },
      {
        h: "Vad händer om personen säger att det var en gåva?",
        p: [
          "Säger personen emot, till exempel att pengarna var en gåva eller redan är återbetalda, kan Kronofogden inte avgöra saken. Du får då välja om tingsrätten ska pröva kravet. Vill du det måste du begära det skriftligen hos Kronofogden inom fyra veckor från att Kronofogden skickade beskedet om att personen sagt emot. Gör du inte det avskrivs ärendet.",
          "För att ärendet ska gå över till tingsrätten betalar du en tilläggsavgift: 600 kr om kravet är upp till ett halvt prisbasbelopp, vilket är 29 600 kr under 2026 och 29 800 kr under 2027, och 2 500 kr för större krav. Förlorar du kan du bli skyldig att betala den andras rättegångskostnader. Gäller kravet högst ett halvt prisbasbelopp blir det ett förenklat tvistemål, ofta kallat småmål. Då är det du kan behöva ersätta begränsat, till exempel kostnader för ombud.",
          "I tingsrätten är det i regel du som kräver pengarna som måste visa att det var ett lån och inte en gåva. Ta med skärmdumparna, Swish-historiken och ditt kravbrev.",
        ],
      },
      {
        h: "Hur länge gäller skulden? Preskriptionstid för lån",
        p: [
          "En skuld mellan privatpersoner preskriberas tio år efter att den uppstod, räknat från dagen du lånade ut pengarna. Efter det går den inte längre att kräva.",
          "Preskriptionen avbryts när personen får ett skriftligt krav eller en skriftlig påminnelse från dig, när hen erkänner skulden, till exempel genom att betala en del eller skriva att hen ska betala, eller när du ansöker om betalningsföreläggande. Då börjar en ny tioårsperiod från den dagen. Det är du som måste kunna visa att kravet kom fram, så spara svaren.",
          "Den kortare preskriptionstiden på tre år gäller när ett företag har sålt något till en konsument. Den gäller inte ett lån mellan två privatpersoner.",
        ],
      },
    ],
    faq: [
      {
        q: "Kan jag polisanmäla någon som inte betalar tillbaka ett lån?",
        a: "Att inte betala tillbaka är i sig inget brott, utan en tvist om pengar som du driver hos Kronofogden och vid behov i tingsrätten. Det kan vara bedrägeri om personen lurade dig att låna ut pengarna, till exempel med en påhittad historia eller ett löfte om att betala tillbaka som hen aldrig tänkte hålla. Tror du att det har hänt kan du göra en polisanmälan. Kravet på pengarna kan du driva hos Kronofogden oavsett.",
      },
      {
        q: "Får jag lägga på en påminnelseavgift?",
        a: "Bara om ni kom överens om det senast när du lånade ut pengarna. Då är avgiften högst 60 kr. Annars kan du inte ta betalt för påminnelsen, men du kan ha rätt till dröjsmålsränta enligt räntelagen.",
      },
      {
        q: "Vad kostar det att kräva tillbaka pengarna?",
        a: "Ett kravbrev kan du skicka själv. Ansökan om betalningsföreläggande hos Kronofogden kostar 300 kr, och du kan begära att få den ersatt. Går skulden till verkställighet är grundavgiften 600 kr per år. Den betalar i första hand den som är skyldig, men kan hen inte betala kan du få betala den. Säger personen emot och du vill gå vidare till tingsrätten tillkommer 600 kr för krav upp till 29 600 kr under 2026 och 2 500 kr för större krav. Förlorar du kan du också behöva betala den andras rättegångskostnader.",
      },
      {
        q: "Jag har lånat ut pengar till mitt ex. Gäller samma sak?",
        a: "Ja, ett lån till ett ex är ett lån som alla andra. Har ni bott ihop eller haft gemensam ekonomi kan det bli svårare att visa vad som var ett lån och vad som var gemensamma utgifter. Då blir sms och Swish-meddelanden från tiden för lånet extra viktiga.",
      },
      {
        q: "Räcker det att skicka kravet som sms?",
        a: "Ett sms är bättre än inget, men det blir lätt otydligt. Ett brev eller mejl med belopp, datum för lånet, vad som återstår och sista dag för betalning är lättare att visa upp för Kronofogden eller en domstol.",
      },
      {
        q: "Vad händer om personen inte har några pengar?",
        a: "Kronofogden utreder om det finns lön eller egendom att utmäta. Finns det inget får du ett besked om att personen inte kan betala. Skulden finns ändå kvar, och så länge ärendet pågår får du ett brev från Kronofogden en gång om året. Kan personen inte betala grundavgiften på 600 kr per år kan du få betala den i början av varje nytt handläggningsår. Du får tillbaka den om det senare kommer in pengar i ärendet. Vill du inte fortsätta kan du återkalla ansökan om verkställighet.",
      },
    ],
    sources: [
      {
        label: "Räntelag (1975:635)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rantelag-1975635_sfs-1975-635/",
      },
      {
        label: "Kronofogden: avgifter och kostnader",
        url: "https://kronofogden.se/kontakta-oss/avgifter-och-kostnader",
      },
      {
        label: "Kronofogden: du har ett krav – så funkar det",
        url: "https://kronofogden.se/sa-funkar-det-hos-kronofogden/du-har-ett-krav---sa-funkar-det",
      },
      {
        label: "Kronofogden: hur gör jag för att få tillbaka pengarna jag har lånat ut?",
        url: "https://kronofogden.se/kundservice-svarar/fragor-och-svar/betalningsforelaggande/2021-03-05-hur-gor-jag-for-att-fa-tillbaka-pengarna-jag-har-lanat-ut",
      },
    ],
  },
  {
    slug: "overklaga-ekonomiskt-bistand",
    title: "Överklaga beslut om ekonomiskt bistånd: mall, lagrum och exempel",
    seoTitle: "Överklagan ekonomiskt bistånd: mall, exempel och frist",
    seoDescription:
      "Mall för överklagande av ekonomiskt bistånd: tre veckors frist, vart det ska skickas, lagrum i nya socialtjänstlagen och exempel när hyran inte godkänns.",
    excerpt:
      "Tre veckor på dig, och överklagandet skickas till kommunen, inte direkt till domstolen. Så skriver du yrkande och grunder, med ett exempel för hyran.",
    productSlug: "overklagande",
    published: "2026-10-24",
    body: [
      "Det finns ingen blankett, så du skriver överklagandet själv. Det behöver fyra delar: vilket beslut det gäller (datum och diarienummer), vad du vill att förvaltningsrätten ändrar, varför beslutet är fel och vilka papper som visar det. Skriv under och skicka det till socialtjänsten i din kommun så att det har kommit in inom tre veckor från den dag du fick beslutet.",
      "Det gäller både helt avslag och delavslag. Till exempel när socialtjänsten bara godkänner en del av hyran, säger nej till tandvård eller glasögon, eller sänker försörjningsstödet för att du missat en aktivitet.",
      "Har du inte sökt ännu, börja med guiden om att ansöka om ekonomiskt bistånd.",
    ],
    sections: [
      {
        h: "Hur lång tid har jag på mig att överklaga?",
        p: [
          "Överklagandet ska ha kommit in till kommunen inom tre veckor från den dag du fick del av beslutet. Det står i 44 § förvaltningslagen. Tiden räknas alltså från när du fick beslutet, inte från datumet som står på det.",
          "Ett exempel. Beslutet är daterat fredag den 2 oktober 2026 och ligger i din brevlåda tisdag den 6 oktober. Då ska överklagandet vara framme hos socialtjänsten senast tisdag den 27 oktober. Är sista dagen en lördag, söndag, annan helgdag, midsommarafton, julafton eller nyårsafton räcker det att det kommer in nästa vardag.",
          "Kommer det in för sent avvisas det, och då prövas inte saken alls. Skicka hellre ett kort överklagande i tid och skriv att du kompletterar med fler papper.",
          "Har du bara fått ett muntligt besked? Be om beslutet skriftligt, det har du rätt till om du begär det. Vänta ändå inte med att överklaga. Fick du veta hur du överklagar när du fick beskedet kan de tre veckorna räknas redan från den dagen.",
        ],
      },
      {
        h: "Vart skickar jag överklagandet?",
        p: [
          "Överklagandet ställs till förvaltningsrätten men skickas till den nämnd eller enhet som fattade beslutet. Adressen står i beslutet.",
          "Kommunen kontrollerar först att det kommit in i tid. Är beslutet uppenbart fel kan kommunen ändra det själv, så länge överklagandet inte har skickats vidare. Överklagandet och dina handlingar skickas ändå till förvaltningsrätten, tillsammans med ett eventuellt nytt beslut, och överklagandet gäller då det nya beslutet. Förvaltningsrätten skickar ett brev till dig när det har kommit in.",
          "Behåll en kopia av allt du skickar, och skriv upp vilken dag du lämnade eller postade det. Vet du inte hur du ska göra kan du be handläggaren om hjälp. Socialtjänsten är skyldig att hjälpa dig med hur du överklagar.",
        ],
      },
      {
        h: "Mall: så bygger du överklagandet",
        p: [
          "Rubrik: Överklagande av beslut om ekonomiskt bistånd. Under rubriken: Till förvaltningsrätten i [ort], via [nämndens namn enligt beslutet] i [kommun]. Sedan ditt namn, personnummer, adress, telefon och e-post, och beslutets datum och diarienummer.",
          "Yrkande: vad du vill att domstolen ska göra, med belopp och månad. Domstolen får i regel inte gå utöver det du begärt, så skriv hela beloppet du behöver. Grunder: varför beslutet är fel, med fakta, datum och belopp. Skriv konkreta omständigheter, till exempel sjukdom, barnens behov eller att du inte hittar en billigare bostad, hellre än hur du mår.",
          "Bevisning: lista bilagorna och vad varje papper visar, till exempel hyresavtal, kostnadsförslag från tandläkaren, intyg från optiker eller utdrag ur bostadskön. Avsluta med ort, datum och underskrift. Vill du förklara muntligt kan du begära muntlig förhandling. Förvaltningsrätten ska hålla en om du begär det och den inte är uppenbart obehövlig.",
          "Vill du slippa formulera allt själv kan du på Skrivklart välja Kommun / socialtjänst och beskriva beslutet, vad som är fel och vad du vill ska hända. Du ser början av texten gratis, och hela överklagandet med bakgrund, grunder, bevisning och yrkande kostar 99 kr.",
        ],
      },
      {
        h: "Vilket lagrum ska jag hänvisa till?",
        p: [
          "Sedan 1 juli 2025 gäller en ny socialtjänstlag (2025:400). Rätten till ekonomiskt bistånd står i 12 kap. 1 §: den som inte själv kan klara sina ekonomiska behov, och inte heller få dem tillgodosedda på annat sätt, har rätt till bistånd för sin försörjning och för levnadskostnader i övrigt. Biståndet ska ge en skälig levnadsnivå. Vad försörjningsstödet ska täcka, bland annat boende och hushållsel, står i 12 kap. 7 §.",
          "Att beslutet går att överklaga står i 35 kap. 1 §. Hur och när du överklagar står i 43 och 44 §§ förvaltningslagen (2017:900). Många mallar och svar på nätet hänvisar fortfarande till 4 kap. 1 § i den gamla socialtjänstlagen (2001:453). Den gäller inte längre för nya beslut. Från 1 januari 2027 införs ett bidragstak och riksnormen ändras. Även beslut som bygger på de nya reglerna kan överklagas, om du anser att du inte fått en skälig levnadsnivå.",
          "Står det 12 kap. 2 § i ditt beslut gäller det bistånd som kommunen kan ge utöver det du har rätt till. Ett sådant beslut kan inte överklagas på vanligt sätt, bara laglighetsprövas enligt 13 kap. kommunallagen. Förvaltningsrätten prövar då bara om beslutet har kommit till på lagligt sätt. Den kan upphäva beslutet men inte bevilja dig pengar.",
          "En laglighetsprövning skickas direkt till förvaltningsrätten. Den ska ha kommit in inom tre veckor från den dag kommunen anslog på sin anslagstavla att protokollet justerats, så fråga kommunen vilket datum det var. Domstolen tar bara hänsyn till det du skrivit innan fristen gått ut. Har du sökt bistånd och fått nej, överklaga ändå på vanligt sätt inom tre veckor och skriv att du har rätt till biståndet enligt 12 kap. 1 §.",
        ],
      },
      {
        h: "Exempel: hyran är högre än kommunens riktvärde",
        p: [
          "Anta att du bor med två barn i en trea för 9 800 kr i månaden. Kommunens riktvärde för tre personer är 8 500 kr, och socialtjänsten godkänner bara det. Då saknar du 1 300 kr i månaden. Ett överklagande gäller bara den månad beslutet avser. Får du samma avdrag i november behöver du överklaga det beslutet också, inom tre veckor.",
          "Riktvärdet, som många kallar maxhyra, är kommunens egen riktlinje och ingen lag. Enligt Socialstyrelsens allmänna råd bör nämnden utgå från din faktiska kostnad och ditt behov av boende, och jämföra med vad en låginkomsttagare på orten normalt har råd med och med hyrorna i allmännyttan. Nämnden bör också ta hänsyn till barns behov av utrymme, även hos en förälder där barnen bara bor under umgänget.",
          "Är hyran för hög bör kommunen i regel ändå godta den under en övergångstid, så att du hinner hitta en billigare bostad, och så länge du aktivt söker en. Behöver du bistånd högst tre månader i följd bör kommunen i regel godta hela hyran. Nämnden bör också undvika beslut som tvingar dig att flytta från orten eller den del av kommunen där du bott i flera år. Den bör ta hänsyn till särskilda skäl mot flytt, till exempel att barnen skulle behöva byta förskola eller skola, eller att du har svårt att bli godkänd som hyresgäst på grund av arbetslöshet eller betalningsanmärkning.",
          "Ett yrkande kan låta så här: Jag yrkar att förvaltningsrätten ändrar socialnämndens beslut den 2 oktober 2026 och beviljar försörjningsstöd för hela hyran, 9 800 kr, för oktober 2026. I andra hand yrkar jag att förvaltningsrätten upphäver beslutet och skickar tillbaka ärendet till socialnämnden för ny prövning.",
          "I grunderna skriver du det som gör hyran skälig: att allmännyttans treor på orten kostar ungefär lika mycket, att du står i bostadskön sedan ett visst datum, att barnen går i skolan i området. Du kan också skriva: Nämnden har inte gett mig någon övergångstid. Enligt Socialstyrelsens allmänna råd bör hela hyran i vart fall godtas under en övergångstid, så att jag får skälig tid att hitta en billigare bostad.",
          "Hyr du i andra hand gäller från 1 januari 2027 en ny regel: kommunen ska bara betala boendet om hyresvärden, föreningen eller hyresnämnden har godkänt uthyrningen, om det inte finns särskilda skäl. Bifoga godkännandet.",
        ],
      },
      {
        h: "Fått nej eller sänkt stöd för att du missat en aktivitet?",
        p: [
          "Sedan 1 juli 2026 finns ett aktivitetskrav i försörjningsstödet (12 kap. 4 a § socialtjänstlagen). Har du fått försörjningsstöd i minst tre sammanhängande månader ska socialtjänsten begära att du deltar i aktiviteter, anpassade efter din förmåga, och med färre timmar om du har små barn. Den skyldigheten gäller första gången försörjningsstöd för oktober 2026. Kommunen får också ställa krav tidigare (12 kap. 4 d §). Vissa är undantagna, till exempel den som är under 18 år, har sjukpenning eller är föräldraledig med ett barn under ett år.",
          "Tackar du nej eller uteblir utan godtagbart skäl ska fortsatt försörjningsstöd nekas eller sättas ned, enligt 12 kap. 5 §. Finns det särskilda skäl får socialnämnden ändå avstå från det. Ett sådant beslut kan överklagas. Skriv att du hade ett godtagbart skäl och, i andra hand, att det finns särskilda skäl att inte neka eller sänka stödet, till exempel hur ett lägre stöd skulle drabba dig och barnen.",
          "Uteblev du för att du var sjuk ska du styrka det med läkarintyg om sjukdomen varade mer än sju dagar i följd. Finns det särskilda skäl kan kommunen begära intyg även för kortare tid, och den kan avstå från intyg om det är uppenbart onödigt (12 kap. 5 a §).",
          "I överklagandet skriver du vilket skäl du hade, med datum, och bifogar det som visar det: läkarintyg, besked från förskolan om att barnet var sjukt eller en kallelse till en anställningsintervju samma dag.",
          "Kontrollera också att kommunen gjort en individuell plan för aktiviteterna (12 kap. 4 e §), att tiden inte var mer än du klarar eller över 40 timmar i veckan, att den minskats med tio timmar om du har små barn (12 kap. 4 b §) och att kravet anpassats till barnomsorgen (12 kap. 4 c §). Har kommunen brustit i något av det, skriv det.",
        ],
      },
    ],
    faq: [
      {
        q: "Kan man överklaga ett beslut om ekonomiskt bistånd?",
        a: "Ja. Beslut om bistånd enligt 12 kap. 1 § socialtjänstlagen och beslut om att neka eller sänka försörjningsstöd enligt 12 kap. 5 § kan överklagas till förvaltningsrätten. Det gäller även när du fått en del men inte allt du sökte.",
      },
      {
        q: "Ska jag begära omprövning eller överklaga?",
        a: "Överklaga. Hos Försäkringskassan måste ett beslut omprövas innan du kan överklaga, men för socialtjänstens beslut finns inget sådant krav. Du kan be handläggaren titta på beslutet igen, men det stoppar inte de tre veckorna. Ändrar kommunen beslutet efter att du överklagat gäller överklagandet det nya beslutet.",
      },
      {
        q: "Kan man överklaga maxhyran?",
        a: "Inte själva riktlinjen. Men du kan överklaga beslutet där kommunen använt den på dig. Då prövar förvaltningsrätten om du fått en skälig levnadsnivå, utifrån din hyra, din familj och bostadsmarknaden där du bor.",
      },
      {
        q: "Kostar det något att överklaga till förvaltningsrätten?",
        a: "Nej, förvaltningsrätten tar ingen avgift. Du behöver inget ombud. Domstolen ska se till att målet blir så utrett som det behöver, men den kan inte ge dig juridiska råd. Anlitar du ett ombud betalar du det själv.",
      },
      {
        q: "Vad händer om överklagandet kommer in för sent?",
        a: "Då prövas det inte. Det gäller inte om du kom in för sent för att kommunen inte gav dig ett korrekt besked om hur du överklagar, till exempel om beskedet saknades eller var fel. Det gäller inte heller om överklagandet kom in till förvaltningsrätten inom de tre veckorna. Söker du på nytt för nästa månad blir det ett nytt beslut med en ny frist.",
      },
      {
        q: "Hur lång tid tar det, och vad händer om jag får rätt?",
        a: "Det tar ofta flera månader. Beslutet gäller direkt även om du överklagar (35 kap. 5 § socialtjänstlagen), så sök försörjningsstöd varje månad som vanligt och överklaga varje nytt beslut som är fel. Kan du inte betala hela hyran, prata med hyresvärden och socialtjänsten direkt. Får du en uppsägning för obetald hyra kan du behålla lägenheten om hyran betalas inom tre veckor från att du fick underrättelsen, eller om socialnämnden inom samma tid skriftligen lovar hyresvärden att betala. Får du rätt ändrar förvaltningsrätten beslutet, eller skickar tillbaka ärendet till socialtjänsten för ett nytt beslut, som du också kan överklaga.",
      },
      {
        q: "Vad gör jag om förvaltningsrätten också säger nej?",
        a: "Du kan överklaga till kammarrätten. Överklagandet skickas till förvaltningsrätten och ska ha kommit in inom tre veckor från den dag du fick domen. Meddelades domen vid en muntlig förhandling, eller sa rätten där vilken dag domen skulle meddelas, räknas de tre veckorna från den dagen i stället. Det krävs prövningstillstånd, så skriv också varför kammarrätten bör pröva målet. Det beviljas bara i en del mål. Hur du gör står i domen.",
      },
    ],
    sources: [
      {
        label: "Socialtjänstlag (2025:400)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/socialtjanstlag-2025400_sfs-2025-400/",
      },
      {
        label: "Förvaltningslag (2017:900)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forvaltningslag-2017900_sfs-2017-900/",
      },
      {
        label: "Förvaltningsprocesslag (1971:291)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forvaltningsprocesslag-1971291_sfs-1971-291/",
      },
      {
        label: "Lag (1930:173) om beräkning av lagstadgad tid",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1930173-om-beräkning-av-lagstadgad-tid_sfs-1930-173/",
      },
    ],
  },
  {
    slug: "personligt-brev-till-hyresvard",
    title: "Personligt brev till hyresvärd – mall och tre exempel",
    seoTitle: "Personligt brev till hyresvärd – exempel och mall",
    seoDescription:
      "Så skriver du ett personligt brev till hyresvärden: vad värden kontrollerar, en enkel mall och tre exempel för förälder, student och egenföretagare.",
    excerpt:
      "Vad värden kontrollerar, en mall i fyra delar och tre exempel: ensamstående förälder, student och egenföretagare med hund.",
    productSlug: "hyresansokan",
    published: "2026-10-24",
    body: [
      "Ett personligt brev till en hyresvärd är en kort presentation av dig och ditt hushåll. Skriv vem som ska bo i lägenheten, vad du arbetar med eller studerar och ungefär vad hushållet tjänar, när du kan flytta in och varför du är en trygg hyresgäst, gärna med en referens. Håll det under en sida och avsluta med telefonnummer och e-post.",
      "Värden får ofta många ansökningar på samma lägenhet och läser snabbt. Ett brev som direkt svarar på det värden undrar över kommer längre än ett som bara säger att du är lugn och skötsam. Brevet kallas ibland hyresansökan, men innehållet är detsamma.",
    ],
    sections: [
      {
        h: "Vad kontrollerar hyresvärden?",
        p: [
          "Alla bostadsbolag prövar den som söker på något sätt. Det vanligaste är en kreditupplysning. Det är också vanligt att be om arbetsgivarintyg och referens från en tidigare hyresvärd, visar Boverkets kartläggning från 2017. När Boverket följde upp 2021 var kraven i stort sett desamma. Men en del värdar som sänkt inkomstkraven hade i stället skärpt kraven på referenser och tog oftare inte emot den som har betalningsanmärkningar eller skulder hos Kronofogden.",
          "Inkomstkraven skiljer sig mycket. Ungefär vart femte bostadsbolag vill att inkomsten är minst tre gånger hyran. Betydligt fler räknar på hur mycket hushållet har kvar när hyran är betald, hos de kommunala bolagen ofta Kronofogdens förbehållsbelopp. En del gör en egen bedömning, och några har inget inkomstkrav alls. Många värdar räknar in mer än lön, till exempel a-kassa, sjukpenning, försörjningsstöd och barnbidrag. Privata fastighetsbolag är enligt Boverket oftare restriktiva än de kommunala när det gäller osäkra inkomster och bidrag.",
          "Ett räkneexempel med regeln om tre gånger hyran: hyran är 8 500 kronor i månaden. Då behöver hushållet ha minst 25 500 kronor i månaden. Tjänar du 22 000 kronor och får 3 500 kronor i underhållsbidrag från den andra föräldern, skriv båda beloppen. Fråga värden om de räknar före eller efter skatt och vilka inkomster som räknas.",
        ],
      },
      {
        h: "Mall: så bygger du brevet",
        p: [
          "Börja med en rubrik som säger vilken lägenhet det gäller, till exempel adressen eller annonsens rubrik. Värden kan ha flera lägenheter ute samtidigt.",
          "Första stycket: vilka som ska bo där. Antal vuxna och barn, eventuella husdjur och om någon röker. Andra stycket: ekonomi och trygghet. Vad du arbetar med eller studerar, anställningsform, ungefärlig inkomst per månad och hur länge du bott där du bor nu. Skriv att du kan skicka referens och lönespecifikation.",
          "Tredje stycket: varför just den här lägenheten, till exempel närhet till jobb eller skola. Avsluta med när du kan flytta in, att du gärna kommer på visning, att du vill bo kvar länge om det stämmer, och telefonnummer och e-post.",
          "Vill du inte formulera allt själv kan du svara på fyra frågor hos Skrivklart: lägenheten, vilka som ska bo där, varför just den och varför du är en trygg hyresgäst. Du ser början av brevet gratis, och hela texten kostar 59 kronor.",
        ],
      },
      {
        h: "Exempel: ensamstående förälder",
        p: [
          "Hej, jag heter Sara och söker tvåan på Björkvägen 12 för mig och min dotter, som är sju år. Jag är undersköterska med tillsvidareanställning sedan 2019 och tjänar 27 000 kronor i månaden före skatt. Vi har bott i vår nuvarande hyresrätt i sex år och alltid betalat hyran i tid. Min hyresvärd kan lämna referens. Lägenheten ligger nära min dotters skola, så hon kan gå kvar där. Vi kan flytta in den 1 december och vill bo länge. Du når mig på [telefon] eller [e-post].",
          "Därför fungerar det: inkomst, anställning och betalningshistorik står i tre meningar. Skolan förklarar varför just den lägenheten, och värden förstår att hon tänker bo kvar. Hon förklarar inte varför hon är ensam med barnet. Det behöver värden inte veta.",
        ],
      },
      {
        h: "Exempel: student som är ny i stan",
        p: [
          "Hej, jag heter Ali, är 20 år och flyttar hit för att börja på sjuksköterskeprogrammet i januari. Jag söker ettan på Kvarngatan 4 och bor ensam, utan husdjur, och röker inte. Jag får fullt studiemedel, cirka 13 600 kronor var fjärde vecka, och jobbar extra på helger och lov. Min mamma kan gå i borgen om du vill. Jag har bott hemma, så jag har ingen tidigare hyresvärd. Min chef på matbutiken där jag jobbat i tre år kan lämna referens. Jag vill bo kvar under hela utbildningen. Du når mig på [telefon] eller [e-post].",
          "Därför fungerar det: han säger själv att han saknar referens från en tidigare hyresvärd och ger en annan i stället. En chef, lärare eller tränare som känt dig länge duger. Borgen från en förälder kan väga upp en låg inkomst, men fråga först om värden tar emot det.",
        ],
      },
      {
        h: "Exempel: egenföretagare med hund",
        p: [
          "Hej, vi är Johanna och Erik, båda 34 år, och söker trean på Skolgatan 8. Johanna har fått tjänst som lärare på skolan i området. Erik är snickare och har haft egen firma sedan 2020. Tillsammans tjänar vi cirka 58 000 kronor i månaden före skatt, och vi skickar gärna Eriks beslutade skatteuppgifter för de två senaste åren. Vi har en lugn labrador på sex år. Hunden har bott med oss i två hyresrätter utan klagomål, och båda värdarna kan lämna referens. Vi kan flytta in den 1 februari. Du når oss på [telefon] eller [e-post].",
          "Därför fungerar det: en egenföretagare har ingen lönespecifikation, så de erbjuder något annat. Beslutade skatteuppgifter laddar du ner på Skatteverkets Mina sidor, under Skatter och deklarationer. Välj fullständiga uppgifter. Sedan inkomstår 2023 visar de offentliga uppgifterna bara den sammanlagda inkomsten, inte hur mycket som kommer från firman. Hunden nämns en gång, med referenser som visar att det har gått bra.",
        ],
      },
      {
        h: "Har du betalningsanmärkning eller skulder?",
        p: [
          "Många värdar säger nej till den som har betalningsanmärkningar eller hyresskulder, men inte alla. Enligt Boverkets kartläggning från 2017 kan det bero på hur stora skulderna är, vad de gäller och varför de uppstod. År 2021 såg Boverket att en del värdar hade blivit hårdare på den punkten. Därför är det ofta bättre att själv skriva om det än att värden hittar det i kreditupplysningen.",
          "Skriv kort vad det gäller, när det hände och vad som är annorlunda nu. Till exempel att skulden kom efter en separation, att den är betald eller att du har en avbetalningsplan, och att hyran har betalats i tid sedan dess. Kontoutdrag som visar hyrorna är ett bra bevis. Dölj gärna andra köp och överföringar innan du skickar dem.",
          "För en privatperson tas en betalningsanmärkning bort senast tre år efter händelsen som gav den, till exempel datumet för Kronofogdens utslag. Har du skuldsanering finns uppgiften kvar i fem år från beslutet att inleda den, eller tills betalningsplanen är slut om den är längre. Det är kreditupplysningsföretagen som har uppgifterna, så det är dem du frågar om vad som syns om dig.",
          "Betalar du skulden efter att Kronofogden har meddelat utslag finns anmärkningen ändå kvar. Men hade du betalat hela skulden innan den registrerades hos Kronofogden, eller fick du aldrig något besked innan, kan du ansöka om rättelse hos Kronofogden. Beviljas den tar kreditupplysningsföretagen bort anmärkningen. En betald skuld för till exempel skatt eller underhållsstöd kan också bli sekretessbelagd, och då ska anmärkningen från registreringen tas bort.",
        ],
      },
      {
        h: "Hyresgaranti från kommunen",
        p: [
          "Nytt sedan den 1 september 2026: kommunen måste ställa en hyresgaranti om du bor i kommunen, har barn som bor hos dig stadigvarande eller varannan vecka, behöver ett eget förstahandskontrakt med besittningsskydd i kommunen och inte kommer in på bostadsmarknaden utan garantin. Skyldigheten gäller inte korttidskontrakt i andra hand eller uthyrning från en privatperson, och inte om barnen bara är hos dig på umgänge. Kommunen kan ändå välja att ställa en garanti i andra fall.",
          "Garantin ska täcka minst sex månadshyror och gälla i minst två år. Om kommunen måste betala värden enligt garantin kan kommunen kräva tillbaka pengarna av dig. Det ska kommunen tala om skriftligt innan garantin ställs. Säger kommunen nej kan du överklaga beslutet till förvaltningsrätten. Överklagandet ska ha kommit in till kommunen inom tre veckor från den dag du fick beslutet. Har du fått en garanti, skriv det i brevet.",
        ],
      },
      {
        h: "Intresseanmälan på en annons – hur kort kan den vara?",
        p: [
          "En intresseanmälan är det första meddelandet du skickar på en annons. Tre till fem meningar räcker. Målet är att värden vill läsa mer eller ringa.",
          "Exempel: Hej, jag är intresserad av ettan på Storgatan 3 från den 1 november. Jag bor ensam, utan husdjur, röker inte och arbetar som elektriker med fast anställning. Jag kan komma på visning när det passar och skickar gärna referens och lönespecifikation. Hälsningar Jonas, [telefon].",
        ],
      },
      {
        h: "Se upp för bluffannonser",
        p: [
          "Betala aldrig något i förskott innan du har sett lägenheten och kontraktet är påskrivet, råder polisen. Var extra vaksam om uthyraren är utomlands, inte kan träffas eller vill ha pengar via en anonym betalningstjänst. Be att få se legitimation, kräv ett skriftligt hyreskontrakt och kontrollera med fastighetsägaren att personen har rätt att hyra ut.",
          "Betala heller aldrig extra för att få ett kontrakt. Det är brottsligt både att ta emot och att lämna sådan ersättning, och straffet kan bli upp till två års fängelse.",
          "Har du redan betalat och misstänker bedrägeri, ring din bank direkt så att de kan försöka stoppa betalningen. Polisanmäl sedan på 114 14.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur långt ska ett personligt brev till hyresvärden vara?",
        a: "Högst en sida, alltså under 400 ord. Kortare fungerar ofta bättre. Exemplen ovan är runt 100 ord.",
      },
      {
        q: "Ska jag skriva hur mycket jag tjänar?",
        a: "Ja, ett ungefärligt belopp per månad. Värden kommer ändå att fråga. Skriv också andra inkomster hushållet har, som underhållsbidrag, om värden räknar in dem.",
      },
      {
        q: "Får hyresvärden ta en kreditupplysning på mig?",
        a: "Ja. En hyresvärd kan ha ett legitimt behov av en kreditupplysning när du ska hyra en bostad. Du får ett skriftligt meddelande, en så kallad upplysningskopia, utan kostnad varje gång en upplysning om dig lämnas ut. Då ser du vem som har frågat.",
      },
      {
        q: "Vad ska jag skicka med brevet?",
        a: "Det värden ber om. Vanligt är arbetsgivarintyg eller anställningsavtal, de senaste lönespecifikationerna och namn och telefonnummer till en referens. Vänta med kopia på legitimation tills du vet att uthyraren är den hen säger sig vara.",
      },
      {
        q: "Måste jag berätta att jag har husdjur?",
        a: "Skriv det, i en mening: vilket djur och att det har fungerat där du bott tidigare. Säger värden nej till djur är det bättre att veta det innan du skriver kontrakt.",
      },
      {
        q: "Kan värden neka mig för att jag har försörjningsstöd?",
        a: "Ja, i regel. Värden bestämmer själv vilka inkomster som godkänns, så länge ingen diskrimineras på grund av kön, könsöverskridande identitet eller uttryck, etnisk tillhörighet, religion eller annan trosuppfattning, funktionsnedsättning, sexuell läggning eller ålder. Att ha försörjningsstöd är inte en sådan grund. I Boverkets kartläggning från 2017 räknade ändå de flesta bostadsbolag försörjningsstöd som inkomst. Högst 15 procent av de kommunala och 30 procent av de privata bolagen gjorde det inte. Fråga innan du söker.",
      },
      {
        q: "Barnen bor hos mig varannan vecka. Hur skriver jag det?",
        a: "Skriv det som det är: mina två barn bor hos mig varannan vecka och hos den andra föräldern varannan vecka. Då förstår värden varför du söker en större lägenhet fast du är ensam vuxen. Bor barnen hos dig varannan vecka räknas ni också som hushåll med barn om du behöver be kommunen om en hyresgaranti.",
      },
    ],
    sources: [
      {
        label: "Boverket: hyresgarantier",
        url: "https://www.boverket.se/sv/kommunernas-bostadsforsorjning/kommunens-verktyg/hyresgarantier/",
      },
      {
        label: "Förordning (2026:600) om kommuners skyldighet att ställa hyresgarantier",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2026600-om-kommuners-skyldighet-att_sfs-2026-600/",
      },
      {
        label: "IMY: när får en kreditupplysning lämnas ut?",
        url: "https://www.imy.se/vanliga-fragor-och-svar/nar-far-en-kreditupplysning-lamnas-ut/",
      },
      {
        label: "IMY: betalningsanmärkningar",
        url: "https://www.imy.se/privatperson/kreditupplysning/betalningsanmarkningar/",
      },
    ],
  },
  {
    slug: "sambo-flyttar-in-i-din-bostad",
    title: "Sambo flyttar in i din bostadsrätt eller ditt hus – så skyddar du bostaden",
    seoTitle: "Sambo flyttar in i min bostadsrätt – får hen hälften?",
    seoDescription:
      "Får sambon halva bostaden om ni separerar? Reglerna när hen flyttar in i din bostadsrätt eller ditt hus, fällorna och vad ni bör skriva före flytten.",
    excerpt:
      "En bostad du ägde innan ni flyttade ihop blir normalt inte samboegendom. Men ett nytt köp, en ombildning eller barn tillsammans kan ändra läget.",
    productSlug: "samboavtal",
    published: "2026-10-24",
    body: [
      "Flyttar din sambo in i en bostadsrätt eller ett hus som du redan äger, får hen normalt ingen del av bostaden om ni separerar. En bostad som du ägde innan ni blev sambor, och som du inte skaffade för att ni skulle bo där tillsammans, är inte samboegendom. Den ingår då inte i en bodelning.",
      "Men det finns fällor. Ett köp strax före flytten, ett byte till en ny bostad eller en ombildning medan ni bor ihop kan göra bostaden till samboegendom. Bohag som ni köper till ert gemensamma hem delas också. Och har ni barn tillsammans kan din sambo i vissa fall få ta över en bostadsrätt mot betalning.",
      "Den här guiden är för dig som äger bostaden. Ska ni köpa tillsammans, läs guiderna om samboavtal för bostadsrätt och för hus.",
    ],
    sections: [
      {
        h: "Kan min sambo kräva halva bostaden?",
        p: [
          "Sambolagen delar bara samboegendom, alltså den gemensamma bostaden och det bohag som skaffats för att ni ska använda det tillsammans. Båda villkoren måste vara uppfyllda. Att bostaden blir ert gemensamma hem räcker inte.",
          "Det slog Högsta domstolen fast i en dom i december 2022: en bostad som den ena skaffade innan samboendet var aktuellt ingår inte i bodelningen, även om ni sedan bor där ihop i många år. Då stannar också värdeökningen hos dig.",
          "Vem som står som ägare avgör alltså inte. En bostad som köptes för er båda kan delas lika även om bara den ena står på kontraktet.",
        ],
      },
      {
        h: "När blir bostaden ändå samboegendom?",
        p: [
          "Du köper inför flytten. Enligt Högsta domstolen räknas en bostad som köps under eller inför samboendet, och som ni sedan bor i, som köpt för gemensam användning om inte annat visas. Det är då du som måste visa att du inte köpte den för att ni skulle bo där tillsammans.",
          "Ni byter bostad. Säljer du din bostadsrätt och köper en ny som ni flyttar in i, räknas den nya bostaden normalt som samboegendom. Tänk på att du behöver din sambos samtycke för att sälja bostadsrätten ni bor i. Sambolagen skyddar inte heller pengarna från din gamla bostad. Ett exempel: du får ut 900 000 kr för din tvåa och lägger allt som kontantinsats i ett hus. När ni flyttar isär är huset värt 3 000 000 kr och lånet är 2 000 000 kr. Utan samboavtal kan din sambo vid en bodelning få hälften av husets värde efter lånet, alltså 500 000 kr, trots att hela kontantinsatsen var din. Har ni bott ihop kort tid kan en domstol jämka delningen, men det går inte att räkna med.",
          "Din hyresrätt ombildas. I samma dom hade en kvinna haft sin hyresrätt i fem år när sambon flyttade in. Året efter köpte hon lägenheten i eget namn vid en ombildning. När de separerade elva år senare var bostadsrätten samboegendom, och hon fick betala 795 384 kr till sin före detta sambo.",
          "Ni bygger ut. En tillbyggnad under samboendet gör inte ett hus du ägde innan till samboegendom. Det slog Högsta domstolen fast 2004. Det betyder samtidigt att din sambos pengar inte skyddas av sambolagen om det är hen som betalar.",
        ],
      },
      {
        h: "Kan min sambo ta över min bostadsrätt?",
        p: [
          "Ja, i vissa fall. Din sambo kan få ta över din hyresrätt eller bostadsrätt när ni flyttar isär, även om den inte är samboegendom. Det kräver att hen bäst behöver bostaden och att ett övertagande är skäligt med hänsyn till omständigheterna i övrigt. Regeln finns i 22 § sambolagen.",
          "Har ni inga barn tillsammans krävs dessutom synnerliga skäl, vilket är ett mycket högt krav. Har ni eller har ni haft barn tillsammans krävs inga synnerliga skäl, men hen måste fortfarande bäst behöva bostaden och övertagandet måste vara skäligt. Barn som bara en av er är förälder till, till exempel ditt barn från ett tidigare förhållande, räknas inte.",
          "Den som tar över ska ersätta dig för bostadens värde, antingen genom avräkning i bodelningen eller med pengar. Betalningen kan skjutas upp en tid om hen ställer godtagbar säkerhet. Du förlorar alltså inte värdet, men du kan förlora själva hemmet. Din sambo måste kräva det inom ett år efter att ni gått isär. Flyttar hen ut ur bostaden är fristen tre månader från flytten.",
          "Rätten går inte att avtala bort, inte ens med ett samboavtal. Den gäller inte en villa eller ett radhus som du äger med äganderätt, men ett radhus i en bostadsrättsförening är en bostadsrätt.",
          "Så länge bostadsrätten är ert gemensamma hem behöver du din sambos samtycke för att sälja, hyra ut eller pantsätta den, till exempel för att låna mer med den som säkerhet. Det gäller också efter en separation, så länge hen kan begära att ta över bostaden. Säljer eller hyr du ut utan samtycke kan hen inom tre månader från att hen fick veta det begära att domstolen förklarar avtalet ogiltigt. Säger hen nej kan du ansöka hos domstolen om tillstånd.",
        ],
      },
      {
        h: "Ska min sambo betala hyra till mig?",
        p: [
          "Det bestämmer ni själva. Många delar på avgift, ränta, el och mat. Oavsett vad ni kallar det gör betalningen inte din sambo till delägare och ändrar inte vad som ingår i en bodelning.",
          "Större summor är en annan sak. Betalar din sambo en renovering eller extra amortering finns inget i sambolagen som ger tillbaka pengarna om ni flyttar isär. Ska hen få tillbaka dem, skriv ett skuldebrev med belopp och hur det ska betalas tillbaka. Är det en gåva, skriv det också.",
          "Ska din sambo bli delägare i en bostadsrätt krävs ett skriftligt avtal som ni båda skriver under, både vid köp och vid gåva, och föreningen ska pröva hen som medlem. Gäller det ett hus krävs en skriftlig köpehandling eller ett gåvobrev, och lagfart ska sökas inom tre månader. Vid köp av en andel i ett hus är stämpelskatten 1,5 procent. Säljer du en andel räknas det som en försäljning som du ska deklarera, och vinsten kan beskattas. Det är då ett nytt köp medan ni är sambor, så skriv samboavtalet samtidigt.",
        ],
      },
      {
        h: "Får sambon flytta in utan föreningens tillstånd?",
        p: [
          "Ja. Så länge du själv bor kvar är det ingen andrahandsuthyrning, och du behöver inte styrelsens samtycke. Föreningen kan bara säga ifrån om det skadar föreningen eller grannarna, till exempel om lägenheten blir överbelagd. Det gäller i alla bostadsrättsföreningar.",
          "Din sambo ska själv anmäla flytten till Skatteverket, innan flytten eller senast en vecka efter. Kolla också hemförsäkringen. Hos de flesta bolag gäller den för alla som är folkbokförda på adressen, men vissa vill ha båda namnen i försäkringsbrevet.",
        ],
      },
      {
        h: "Bohaget: det som köps till ert gemensamma hem delas",
        p: [
          "Möbler och saker du hade innan förblir dina. Det som ni köper till ert gemensamma hem, före eller efter flytten, är samboegendom, oavsett vem som betalade. Undantaget är sådant som bara den ena använder.",
          "Anta att ni efter flytten köper en soffa och en tv, utan lån, och att de är värda 12 000 kr när ni flyttar isär. Att du betalade spelar ingen roll. Begär din sambo bodelning delas värdet lika, så vill du behålla båda får du lösa ut hen med 6 000 kr. Bodelning måste begäras inom ett år efter att ni flyttat isär.",
        ],
      },
      {
        h: "Det här skriver ni innan flytten",
        p: [
          "Lagen kräver inget samboavtal, och bostaden du redan äger är din även utan avtal. Avtalet gör ändå tydligt vad som gällde från början och skyddar dig om ni byter bostad, ombildar eller köper bohag ihop. Ett samboavtal ska vara skriftligt och undertecknat av er båda. Ni kan skriva det redan innan flytten, eftersom lagen uttryckligen gäller blivande sambor. Det behöver inte registreras, och vittnen är inget krav.",
          "Skriv in bostadens adress, förening eller fastighetsbeteckning, sedan när du ägt den och att den inte ska ingå i en bodelning. Ska samma sak gälla en bostad ni byter till eller en bostadsrätt efter en ombildning, skriv det också. Räkna upp de större sakerna i bohaget som du tar med dig. Resten, som namn, datum och underskrifter, finns i checklistan för samboavtal.",
          "Avtalet stoppar inte regeln om övertagande av bostadsrätt, och ett villkor som blir oskäligt kan jämkas. Ändras något stort, som att ni köper nytt eller får barn, skriv ett nytt avtal. Hos Skrivklart fyller ni i vilka ni är, bostaden och vad som är vems, och får ett samboavtal med numrerade punkter och underskriftsrader för 99 kr.",
        ],
      },
    ],
    faq: [
      {
        q: "Får min sambo hälften av min bostadsrätt om vi separerar?",
        a: "Inte om du ägde den innan ni blev sambor och inte skaffade den för att bo där tillsammans. Har ni barn tillsammans och hen bäst behöver bostaden kan hen ändå få ta över den om det är skäligt, men måste då ersätta dig för bostadens fulla värde.",
      },
      {
        q: "Måste jag lösa ut min sambo som flyttat in i mitt hus?",
        a: "Inte för huset, om du köpte det innan det var aktuellt att ni skulle flytta ihop. Köpte du det inför flytten räknas det normalt som samboegendom, och då kan du behöva lösa ut hen med halva nettovärdet. För bohag som ni skaffat till ert gemensamma hem kan du behöva lösa ut hen om hen begär bodelning inom ett år efter att ni flyttat isär.",
      },
      {
        q: "Jag flyttar in i min sambos bostadsrätt. Vilka rättigheter har jag?",
        a: "Du äger ingen del av den. Köpte din sambo den innan ni planerade att flytta ihop ingår den inte i en bodelning, men köpte hen den inför samboendet räknas den normalt som samboegendom och du kan begära bodelning inom ett år efter separationen. Du kan också i vissa fall få ta över bostadsrätten mot att du betalar hela dess värde. Har ni barn tillsammans krävs att du bäst behöver bostaden och att det är skäligt, annars krävs dessutom synnerliga skäl. Kravet måste framställas inom ett år efter separationen, eller inom tre månader om du flyttar ut. Ditt eget bohag är ditt. Lägger du pengar på bostaden, skriv ett skuldebrev.",
      },
      {
        q: "Jag flyttar till min sambo. Får jag hyra ut min egen bostadsrätt?",
        a: "Bara om styrelsen säger ja, eller om hyresnämnden ger tillstånd när styrelsen säger nej. Hyresnämnden ska ge tillstånd om du har skäl för uthyrningen och föreningen inte har någon befogad anledning att säga nej. Att ni provbor ihop brukar räknas som ett godtagbart skäl, och tillståndet gäller för en viss tid. Sedan den 1 juli 2026 krävs samtycke också när du hyr ut bara en del av lägenheten, om du inte använder den som permanentbostad eller annars i beaktansvärd utsträckning. Uthyrningar som redan pågick då omfattas inte av den nya regeln. Hyr du ut utan samtycke eller tillstånd kan föreningen säga upp dig och du kan förlora bostadsrätten, om du inte rättar dig så snart som möjligt efter en tillsägelse eller söker och får tillstånd från hyresnämnden.",
      },
      {
        q: "Påverkas mitt bostadsbidrag när min sambo flyttar in?",
        a: "Ja, ofta. Blir ni sambor ska bidraget räknas på er båda, så meddela Försäkringskassan direkt när hen flyttar in. Har du bostadstillägg som pensionär anmäler du det i stället till Pensionsmyndigheten, inom 14 dagar. Anmäler du för sent kan du få betala tillbaka och dessutom en sanktionsavgift.",
      },
      {
        q: "Ärver min sambo bostaden om jag dör?",
        a: "Nej. Sambor ärver inte varandra, så en bostad som inte är samboegendom går till dina arvingar, till exempel dina barn. Vill du att din sambo ska få bostaden behövs ett testamente, och dina barn har ändå rätt till sin laglott. En bostadsrätt kan din sambo i vissa fall få ta över mot full ersättning, enligt samma regel som vid separation. Bor hen kvar finns ingen tidsfrist, men flyttar hen ut måste kravet framställas mot dödsboet inom tre månader.",
      },
      {
        q: "När räknas vi som sambor?",
        a: "När ni bor tillsammans i ett parförhållande med gemensamt hushåll och det är tänkt att vara varaktigt. Det finns ingen minsta tid, så sambolagen kan gälla från dagen ni flyttar ihop. Är någon av er gift gäller inte sambolagens regler om bostad och bohag. Sambolagen gäller då för bostad och bohag som ni skaffat för att använda tillsammans, även sådant som köptes inför flytten.",
      },
    ],
    sources: [
      {
        label: "Sambolag (2003:376)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sambolag-2003376_sfs-2003-376/",
      },
      {
        label: "Regeringen: samboförhållande",
        url: "https://www.regeringen.se/regeringens-politik/familjeratt/samboforhallande/",
      },
      {
        label: "Skatteverket: flyttanmälan (adressändring)",
        url: "https://www.skatteverket.se/privat/folkbokforing/flyttanmalan.4.76a43be412206334b89800018531.html",
      },
      {
        label: "Försäkringskassan: meddela oss om något ändras",
        url: "https://www.forsakringskassan.se/om-forsakringskassan/meddela-oss-om-nagot-andras",
      },
    ],
  },
  {
    slug: "samboavtal-hyresratt",
    title: "Samboavtal i hyresrätt – vem får lägenheten om ni separerar?",
    seoTitle: "Samboavtal hyresrätt: vem får lägenheten vid separation?",
    seoDescription:
      "Samboavtal i hyresrätt: när lägenheten är samboegendom, när den andra ändå kan ta över kontraktet, fristerna, hyresvärdens roll och hur bohaget delas.",
    excerpt:
      "Var kontraktet ditt innan, eller fick ni lägenheten ihop? Det avgör vem som får bo kvar. Plus fristerna, hyresvärden och hur ni delar bohaget.",
    productSlug: "samboavtal",
    published: "2026-10-24",
    body: [
      "Ja, ett samboavtal kan gälla en hyresrätt. Har ni skaffat lägenheten för att bo i den tillsammans är den samboegendom. Vid en bodelning kan den av er som bäst behöver den då få ta över kontraktet om det är skäligt, oavsett vems namn som står på det. Hade den ena kontraktet innan ni flyttade ihop är lägenheten inte samboegendom. Den andra kan ändå få ta över den i vissa fall, men det kräver mer och det finns korta frister.",
      "Det betyder att ett samboavtal gör mindre för själva lägenheten än många tror, och mer för bohaget. Ett hyreskontrakt får inte säljas. Därför är det ofta möblerna, sängen, tv:n och köksmaskinerna som är värda pengar när ni flyttar isär.",
      "Sambolagen gäller bara om ingen av er är gift. Är någon av er fortfarande gift med någon annan gäller inte reglerna i den här guiden. Lagen gäller bara bostaden och bohaget. Bil, sparpengar och saker som bara den ena använder delas inte.",
    ],
    sections: [
      {
        h: "Kontraktet var ditt innan ni flyttade ihop – vad gäller?",
        p: [
          "Hade du hyresrätten innan din sambo flyttade in, och skaffade du den inte för att ni skulle bo där tillsammans, är den inte samboegendom. Den ingår inte i en bodelning, och huvudregeln är att du behåller den.",
          "Men sambolagen har ett undantag när bara du står på kontraktet. Din sambo kan få ta över lägenheten om hen bäst behöver den och det är skäligt. Har ni, eller har ni haft, barn tillsammans räcker det. Har ni inga gemensamma barn krävs dessutom synnerliga skäl, och det är ett högt krav. Barn som bara en av er har från ett tidigare förhållande räknas inte som gemensamma. De kan vägas in, men gör det inte automatiskt till synnerliga skäl.",
          "Din sambo måste kräva det senast ett år efter att ni flyttat isär. Har hen redan flyttat ut är fristen i stället tre månader från flytten. Högsta domstolen slog 2025 fast att samboförhållandet tar slut när ni flyttar isär, inte när ni gör slut. Kravet bör vara skriftligt, så att det går att visa att det kom fram i tid. Kravet flyttar inte i sig över kontraktet. Säger du nej måste din sambo väcka talan i tingsrätten.",
          "Den här rätten går inte att avtala bort. Den gäller också om ni i ett samboavtal har bestämt att bostaden inte ska ingå i en bodelning. En hyresrätt är sällan värd något i pengar, så den som tar över betalar oftast inget till den andra.",
        ],
      },
      {
        h: "Fick ni lägenheten tillsammans? Då är den samboegendom",
        p: [
          "Skaffade ni hyresrätten för att bo i den ihop är den samboegendom, även om bara den ena står på kontraktet. Det gäller till exempel om ni skaffade ett nytt kontrakt för att flytta ihop.",
          "Bodelning sker bara om någon av er begär det, senast ett år efter att ni flyttat isär. Vid bodelningen har den som bäst behöver bostaden rätt att få den, om det är skäligt mot den andra. Att barnen ska bo mest hos dig är ett skäl som kan väga tungt.",
          "En bodelning behöver inte gå via domstol. Är ni överens skriver ni en bodelningshandling där det står vem som får lägenheten, och ni skriver båda under. Det räcker för att hen ska kunna ta över kontraktet. Kan ni inte enas kan tingsrätten utse en bodelningsförrättare.",
          "Med ett samboavtal kan ni bestämma att lägenheten inte ska ingå i en bodelning. Står bara den ena på kontraktet behåller hen då lägenheten, och den andra kan bara ta över den enligt undantaget ovan. Det är den verkliga effekten av avtalet för en hyresrätt. Står ni båda på kontraktet gäller undantaget inte. Då gäller hyreslagen: säger den ena upp sig kan den andra få fortsätta hyra ensam, om hyresvärden skäligen kan godta hen.",
        ],
      },
      {
        h: "Vad har hyresvärden att säga till om?",
        p: [
          "Ert samboavtal binder inte hyresvärden. Vanligtvis får en hyresgäst inte lämna över kontraktet utan hyresvärdens samtycke.",
          "Undantaget är när lägenheten tilldelas den ena i en bodelning, eller när en sambo tar över den enligt sambolagen. Då tar hen över kontraktet utan att hyresvärden behöver godkänna det. Det gäller också om ni hyr tillsammans. Meddela hyresvärden skriftligt vem som har tagit över lägenheten. Från det att hyresvärden fått beskedet svarar den som flyttat inte längre för hyran.",
          "Säger den som står på kontraktet upp det medan du bor kvar som sambo, har du rätt att ta över kontraktet om hyresvärden skäligen kan godta dig som hyresgäst. Har du eller någon i ditt hushåll utsatts för brott av en närstående ska det räknas till din fördel. Säger hyresvärden nej kan frågan prövas av hyresnämnden.",
          "Vill ni lämna över kontraktet utan bodelning, till exempel för att lägenheten inte är samboegendom eller året har gått, krävs hyresvärdens samtycke eller hyresnämndens tillstånd. Hyresnämnden kan ge tillstånd att lämna över kontraktet till en närstående som varaktigt bor ihop med den som har det, om hyresvärden skäligen kan nöja sig med det. Enligt Sveriges Domstolar krävs i normalfallet att ni har bott ihop i cirka tre år.",
        ],
      },
      {
        h: "Hur delas möblerna och bohaget?",
        p: [
          "Bohag är möbler, hushållsmaskiner och andra saker som hör till hemmet. Det som ni köpt för att använda tillsammans är samboegendom, oavsett vem som betalade. Det som inte räknas är saker som bara den ena använder, oftast saker som den ena hade innan ni flyttade ihop, gåvor och arv som ska vara mottagarens enskilda, och sådant som främst används på fritiden.",
          "Ett exempel. Amira och Jonas flyttade 2023 in i en trea som de fick kontrakt på tillsammans. Soffan, sängen, matbordet och tv:n är i dag värda 24 000 kronor. Amira köpte saker för 18 000 kronor av det värdet och Jonas för 6 000. Ingen av dem har skulder som ska dras av. Då har var och en rätt till hälften, 12 000 kronor. Behåller var och en det den köpt ska Amira lämna saker eller pengar för 6 000 kronor till Jonas.",
          "Skulder dras av först. Det gäller lån för sakerna, men också andra skulder om den sambon inte kan betala dem med annat hen äger. Har ni bott ihop kort tid kan delningen jämkas, så att den som betalat mest får behålla mer. Det är vad sakerna är värda när ni delar som räknas, inte vad de kostade nya. Den som bäst behöver bohaget kan få det, och den som tar över mer än sin halva kan betala mellanskillnaden i pengar.",
          "Ingen av er får sälja eller pantsätta bohag som är samboegendom utan den andras samtycke. Den som står på kontraktet får inte heller överlåta lägenheten eller hyra ut den i andra hand utan samtycke, om lägenheten är samboegendom eller den andra kan ha rätt att ta över den. Görs det ändå kan den andra inom tre månader från att hen fick veta det begära att domstolen förklarar det ogiltigt.",
        ],
      },
      {
        h: "Din sambo vägrar flytta – vad kan du göra?",
        p: [
          "Är lägenheten samboegendom och har någon av er begärt bodelning, kan du ansöka hos tingsrätten om att få bo kvar tills bodelningen är klar. Får du rätt att bo kvar måste den andra genast flytta. Tingsrätten kan fatta ett tillfälligt beslut medan ärendet pågår.",
          "Har någon av er väckt talan i tingsrätten om att ta över lägenheten enligt undantaget för hyresrätter, kan domstolen på samma sätt bestämma vem som bor kvar under tiden. Får den som inte står på kontraktet bo kvar kan domstolen bestämma vad hen ska betala för det. I båda fallen kan domstolen också förbjuda er att besöka varandra.",
          "Står bara du på kontraktet, är lägenheten inte samboegendom och har din före detta sambo inte krävt att få ta över den i tid, har hen ingen rätt att bo kvar. Be hen skriftligt att flytta. Vägrar hen kan du ansöka om handräckning hos Kronofogden för att få hen avhyst. Byt inte lås och bär inte ut den andras saker på egen hand. Är du rädd för din sambo, kontakta polisen.",
        ],
      },
      {
        h: "Det här ska stå i ett samboavtal för en hyresrätt",
        p: [
          "Era namn och personnummer, lägenhetens adress, vem som står på kontraktet och sedan när. Skriv om lägenheten skaffades för att ni skulle bo där tillsammans, och om den ska ingå i en bodelning eller inte.",
          "Räkna sedan upp bohaget som ska hållas utanför, så att sakerna går att känna igen, och vem som äger dem. Ni kan också skriva att ingen bodelning alls ska ske. Avtalet ska vara skriftligt och undertecknat av er båda, men behöver inte registreras. Är ett villkor oskäligt kan det ändras eller strykas vid en bodelning.",
          "Hos Skrivklart fyller du i vilka ni är, bostaden och vem som står på kontraktet, vad som är vems och vad ni vill ska gälla. Utkastet ser du gratis, och hela samboavtalet med numrerade paragrafer och underskriftsrader kostar 99 kronor. Det är inte juridisk rådgivning, och avtalet kan inte ta bort den andras rätt att ta över lägenheten enligt undantaget ovan.",
        ],
      },
    ],
    faq: [
      {
        q: "Har min sambo rätt att bo kvar i min hyresrätt om vi separerar?",
        a: "Inte automatiskt. Var lägenheten din innan, står bara du på kontraktet och skaffades den inte för att ni skulle bo ihop, kan din sambo bara ta över den om hen bäst behöver den och det är skäligt. Har ni inga gemensamma barn krävs dessutom synnerliga skäl. Kravet måste komma inom ett år efter att ni flyttat isär, eller inom tre månader efter att hen flyttat ut.",
      },
      {
        q: "Behöver hyresvärden godkänna att min sambo flyttar in?",
        a: "Nej, det krävs inget tillstånd för att din sambo ska flytta in. Hyresvärden kan bara invända om ni blir fler än lägenheten är anpassad för, eller om det på annat sätt blir mer än hyresvärden skäligen behöver godta. Vill ni båda stå på kontraktet får ni fråga hyresvärden, för ni kan inte kräva det. Mot hyresvärden svarar bara den som står på kontraktet för hyran. Tänk på att sambolagen börjar gälla när ni stadigvarande bor ihop som par med gemensamt hushåll, med eller utan avtal.",
      },
      {
        q: "Vi står båda på kontraktet. Vad händer när vi separerar?",
        a: "Ni är båda hyresgäster tills något ändras. Kommer ni överens om vem som bor kvar, skriv ner det i ett bodelningsavtal som ni båda skriver under och skicka en kopia till hyresvärden. Säger bara den ena upp sig har den andra rätt att fortsätta hyra om hyresvärden skäligen kan godta hen som ensam hyresgäst. Den som säger upp sig svarar för hyran under uppsägningstiden, oftast tre månader.",
      },
      {
        q: "Vad händer med hyresrätten om min sambo dör?",
        a: "Bara du som efterlevande kan begära bodelning, och det ska ske senast vid bouppteckningen. Begär du det har du rätt att som din andel få minst två prisbasbelopp av samboegendomen, om det finns så mycket kvar efter skulderna. Det är 118 400 kronor vid dödsfall under 2026 och 119 200 kronor vid dödsfall under 2027. Var lägenheten din sambos och inte samboegendom gäller ingen ettårsfrist så länge du bor kvar. Flyttar du ut måste du kräva att få ta över den av dödsboet senast tre månader efter flytten.",
      },
      {
        q: "Hyresrätten ombildades till bostadsrätt medan vi bodde ihop. Blir den samboegendom?",
        a: "Ja, normalt. Högsta domstolen slog 2022 fast att en bostadsrätt som köps vid en ombildning under samboförhållandet, och används som gemensamt hem, är samboegendom. Det gäller även om hyreskontraktet var den enas sedan tidigare.",
      },
      {
        q: "Hur lång tid har vi på oss att begära bodelning?",
        a: "Ett år från den dag ni flyttade isär. Säg till den andra, gärna skriftligt. Är ni överens kan ni göra bodelningen själva i en handling som ni båda skriver under. Kommer ni inte överens kan någon av er ansöka hos tingsrätten om en bodelningsförrättare. Ansökningsavgiften är 900 kronor.",
      },
      {
        q: "Kan vi skriva samboavtal fast vi redan bor ihop?",
        a: "Ja. Både blivande sambor och sambor som redan bor ihop får skriva samboavtal, och ni kan ändra det senare genom ett nytt skriftligt avtal som ni båda skriver under.",
      },
    ],
    sources: [
      {
        label: "Sambolag (2003:376)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sambolag-2003376_sfs-2003-376/",
      },
      {
        label: "Jordabalk (1970:994)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/jordabalk-1970994_sfs-1970-994/",
      },
      {
        label: "Ny sambolag (Proposition 2002/03:80)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/ny-sambolag_gq0380/",
      },
      {
        label: "Sveriges Domstolar: så fungerar bodelning",
        url: "https://www.domstol.se/amnen/familj/skilsmassa-och-bodelning/bodelning/sa-fungerar-bodelning/",
      },
    ],
  },
  {
    slug: "umgangesavdrag",
    title: "Umgängesavdrag: så minskar underhållet när barnet är hos dig",
    seoTitle: "Umgängesavdrag – 30 dygn, 1/40 per dygn och räkneexempel",
    seoDescription:
      "Umgängesavdrag är 1/40 av underhållet per dygn. Hos Försäkringskassan krävs dom eller godkänt avtal om minst 30 dygn per kalenderår. Räkneexempel och regler.",
    excerpt:
      "Hos Försäkringskassan krävs dom eller godkänt avtal om minst 30 dygn per kalenderår. På underhållsbidrag räcker fem dygn i följd eller sex under en månad.",
    productSlug: "umgangesavtal",
    published: "2026-10-24",
    body: [
      "Umgängesavdrag betyder att du betalar mindre i underhåll när barnet är hos dig. Betalar du till Försäkringskassan för att den andra föräldern får underhållsstöd kan du få avdrag om ett avtal som socialnämnden godkänt, eller en dom som vunnit laga kraft, bestämmer att barnet ska vara hos dig minst 30 hela dygn per kalenderår. Betalar du underhållsbidrag direkt till den andra föräldern får du dra av 1/40 av månadsbeloppet för varje helt dygn, om barnet varit hos dig minst fem hela dygn i följd eller minst sex hela dygn under en kalendermånad.",
      "Det är alltså två regler med olika krav. Många texter på nätet blandar ihop dem, och en del påstår att umgängesavdraget togs bort 2016. Det stämmer bara till hälften.",
      "Nedan finns räkneexempel för båda reglerna och råd om hur avtalet ska skrivas för att Försäkringskassan ska kunna använda det.",
    ],
    sections: [
      {
        h: "Betalar du till Försäkringskassan eller till den andra föräldern?",
        p: [
          "Om Försäkringskassan betalar underhållsstöd till den andra föräldern betalar du i sin tur ett belopp till Försäkringskassan. Beloppet räknas fram utifrån din inkomst och hur många barn du har. Då gäller reglerna i socialförsäkringsbalken.",
          "Betalar du i stället underhållsbidrag direkt till den andra föräldern, enligt ett avtal eller en dom, gäller föräldrabalken. Där finns ett eget umgängesavdrag som du gör själv när du betalar.",
          "Har du betalat rätt belopp i rätt tid till Försäkringskassan i minst tolv månader i följd upphör underhållsstödet som huvudregel, om det inte finns särskilda skäl. Försäkringskassan skickar först ett meddelande till er båda så att ni kan yttra er. Upphör stödet ska du betala underhållsbidrag direkt till den andra föräldern, och då gäller föräldrabalkens avdrag i stället. Kom överens skriftligt om det nya beloppet.",
        ],
      },
      {
        h: "Vad krävs för umgängesavdrag hos Försäkringskassan?",
        p: [
          "Tre saker, och några undantag. Det ska finnas ett skriftligt umgängesavtal som socialnämnden har godkänt, eller en dom om umgänge som har vunnit laga kraft. Ett interimistiskt beslut, eller en dom som har överklagats och inte vunnit laga kraft, räcker inte. Av avtalet eller domen ska det framgå att barnet ska vara hos dig minst 30 hela dygn per kalenderår. Och du måste själv begära avdraget skriftligt. Försäkringskassan kallar det avdrag för återkommande umgänge.",
          "Dygnen räknas per kalenderår, januari till december. Börjar avtalet gälla sent på året kan det bli för få dygn det första året. Varannan helg från den 1 oktober ger bara omkring 14 dygn fram till nyår, och då blir det inget avdrag för det året.",
          "Inget avdrag görs när barnet har fyllt 18 år och får förlängt underhållsstöd. Har du haft ett avdrag som har upphävts kan en ny begäran prövas först två år efter upphävandet.",
          "Du begär avdraget i e-tjänsten Begär avdrag på underhållsstöd eller på blankett 2583. Skicka med din bestyrkta kopia av avtalet, där det syns att socialnämnden har godkänt det och vilket datum, eller en bestyrkt kopia av domen som visar att den har vunnit laga kraft. Kommunen kan bestyrka avtalet och tingsrätten domen. Skicka inte ditt enda original.",
          "Avdraget gäller umgänge, inte boende. Bor barnet växelvis hos er betalar Försäkringskassan inget underhållsstöd alls, och då finns inget belopp att göra avdrag på. När din begäran har kommit in skickar Försäkringskassan ett meddelande till den andra föräldern, som får 14 dagar på sig att lämna synpunkter.",
        ],
      },
      {
        h: "Så räknas avdraget – ett exempel",
        p: [
          "Ett dygn är ett kalenderdygn, från klockan 00 till 24. Dagen barnet kommer till dig räknas inte, men dagen barnet lämnas tillbaka räknas som ett helt dygn. Varannan helg från fredag eftermiddag till söndag kväll blir därför två dygn per helg, och 52 dygn på ett år om avtalet inte säger något särskilt om lov och semester.",
          "Står det mer om lov räknar Försäkringskassan varje period för sig. Fyra veckor i följd på sommaren ger 27 dygn, eftersom första dagen inte räknas. Veckor då barnet är på lov hos den andra föräldern räknas bort från helgerna.",
          "Avdraget är 1/40 av månadsbeloppet per dygn, utslaget på årets tolv månader. Om du ska betala 1 440 kronor i månaden är ett dygn värt 36 kronor. För 52 dygn blir det 1 872 kronor per år, eller 156 kronor i månaden. Du betalar 1 284 kronor i stället för 1 440.",
          "Avdraget gäller från och med månaden efter den månad då Försäkringskassan fick din begäran med avtalet eller domen. Kommer den in i oktober kan avdraget börja tidigast i november. Det blir inget avdrag för tiden innan. Skicka därför in begäran så snart avtalet är godkänt.",
          "Den andra föräldern får lika mycket mindre i underhållsstöd, i exemplet 156 kronor i månaden. Säg det öppet innan ni skriver under, så slipper ni en konflikt i efterhand.",
        ],
      },
      {
        h: "Skriv umgängesavtalet så att dygnen går att räkna",
        p: [
          "Avtalet ska vara skriftligt, underskrivet av er båda och godkänt av socialnämnden i den kommun där barnet är folkbokfört. I praktiken sköter oftast familjerätten det. Beslutet går inte att överklaga. Godkänner socialnämnden inte avtalet kan ni i stället be tingsrätten att besluta om umgänget. Hur godkännandet går till står i vår guide om umgängesavtal.",
          "Skriv schemat så att det går att räkna dygn: vilka veckor, vilken dag och tid barnet hämtas och lämnas, hur lov och sommar delas och från vilket datum avtalet gäller. Står det bara att umgänge sker när ni kommer överens går det inte att räkna dygn, och då kan Försäkringskassan inte ge något avdrag.",
          "När avtalet är godkänt får ni oftast inget separat beslut. Godkännandet brukar antecknas på avtalet, kommunen sparar originalet och ni får var sin bestyrkt kopia. Kontrollera att det syns att avtalet är godkänt och vilket datum. Annars ber Försäkringskassan dig komplettera.",
          "Familjerätten kan hjälpa er att formulera avtalet. Vill du hellre ha ett färdigt utkast att ta med dit kan du skriva ett avtal om boende och umgänge på Skrivklart för 99 kronor. Du fyller i schema, lov och hämtning, med klockslag och startdatum, och får ett avtal som ni båda skriver under. För att Försäkringskassan ska räkna med det måste ni sedan lämna det till familjerätten och få det godkänt av socialnämnden. Ett avtal som bara är underskrivet räcker inte.",
        ],
      },
      {
        h: "Umgängesavdrag på underhållsbidrag: 1/40 per dygn",
        p: [
          "Betalar du underhållsbidrag direkt till den andra föräldern får du göra avdrag om barnet har varit hos dig minst fem hela dygn i följd, eller minst sex hela dygn under samma kalendermånad. Du behöver inget godkänt avtal. Regeln finns i 7 kap. 4 § föräldrabalken. Att det är just 1/40 beror på att den andra föräldern har kvar sina fasta kostnader, som hyran, medan barnet är hos dig.",
          "Exempel: du betalar 1 800 kronor i månaden. Barnet är hos dig från den 5 juli till den 19 juli. Det blir 14 hela dygn. Ett dygn är värt 45 kronor, så avdraget blir 630 kronor. Nästa gång du betalar drar du av dem och betalar 1 170 kronor.",
          "Du kan vänta med avdraget, men inte hur länge som helst. Du måste göra det senast på underhållet för sjätte månaden efter den månad då barnet var hos dig. För vistelsen i juli är det underhållet för januari. Det betalas i förskott, alltså senast i slutet av december.",
          "Avdraget gäller inte om underhållsbidraget redan är bestämt med hänsyn till att barnet är hos dig i stor omfattning, ett så kallat nettoavtal. Då är umgänget redan avräknat i beloppet. Har en domstol bestämt underhållsbidraget kan domen också ange andra villkor för avdraget. Läs domen innan du drar av.",
          "Ni kan också välja ett nettoavtal från början. Räkna ut hur många dygn barnet är hos dig på ett år, ta 1/40 av bidraget gånger antalet dygn och dela med tolv. Det beloppet dras av varje månad. Sedan gör du inga fler avdrag, även om umgänget blir mer eller mindre.",
        ],
      },
      {
        h: "Avskaffades inte umgängesavdraget 2016?",
        p: [
          "Delvis. Den 1 april 2016 försvann den regel inom underhållsstödet som gav avdrag i efterhand för umgänge som redan hade ägt rum, fem dygn i följd eller sex dygn i en månad. Därför säger äldre texter att umgängesavdraget är avskaffat.",
          "Avdraget för minst 30 dygn per kalenderår enligt en dom eller ett godkänt avtal finns kvar. Detsamma gäller avdraget på underhållsbidrag i föräldrabalken. Båda reglerna gäller i dag, kontrollerat i oktober 2026.",
        ],
      },
      {
        h: "Om umgänget ändras eller inte blir av",
        p: [
          "Hos Försäkringskassan gäller avdraget bara så länge barnet faktiskt är hos dig som det står i avtalet eller domen. Ändras umgänget genom ett nytt avtal, en ny dom eller ett interimistiskt beslut ska du anmäla det till Försäkringskassan direkt, även om beslutet inte har vunnit laga kraft. Det är straffbart att lämna felaktiga uppgifter eller att inte meddela Försäkringskassan när uppgifterna ändras.",
          "Blir umgänget i väsentlig mån mindre än avtalet säger faller rätten till avdrag bort. Som riktmärke använder Försäkringskassan att umgänget blivit en fjärdedel mindre under tre månader. Uteblir umgänget en kortare tid för att barnet är sjukt kan avdraget få stå kvar. Detsamma kan gälla om umgänget blir mindre eller inte blir av för att den andra föräldern hindrar det.",
          "Upphävs avdraget kan du begära ett nytt tidigast två år senare. Tänk efter innan du själv ber om att få det borttaget.",
        ],
      },
    ],
    faq: [
      {
        q: "Kan jag få umgängesavdrag retroaktivt?",
        a: "Inte hos Försäkringskassan. Avdraget gäller tidigast från månaden efter den månad då din begäran med avtalet eller domen kom in. Betalar du underhållsbidrag direkt till den andra föräldern kan du göra avdraget i efterhand, men senast på underhållet för den sjätte månaden efter den månad då vistelsen slutade.",
      },
      {
        q: "Kan jag få avdrag om avtalet börjar gälla mitt i året?",
        a: "Ja, om barnet enligt avtalet ska vara hos dig minst 30 hela dygn under resten av kalenderåret. Annars blir det inget avdrag det året, men avdraget kan gälla från nästa år.",
      },
      {
        q: "Måste den andra föräldern godkänna avdraget?",
        a: "Inte själva avdraget. Men umgängesavtalet måste ni båda ha skrivit under, och Försäkringskassan låter den andra föräldern lämna synpunkter innan de beslutar. På underhållsbidrag är avdraget en rätt enligt lag.",
      },
      {
        q: "Räcker det med en muntlig överenskommelse om umgänge?",
        a: "Inte hos Försäkringskassan. Där krävs ett skriftligt avtal som socialnämnden godkänt, eller en dom som har vunnit laga kraft. På underhållsbidrag räcker det att barnet faktiskt har varit hos dig, men skriv upp datumen så att ni kan stämma av.",
      },
      {
        q: "Gäller umgängesavdrag vid växelvis boende?",
        a: "Nej. Försäkringskassan betalar inget underhållsstöd vid växelvis boende, så det finns inget att göra avdrag på. Bor barnet ungefär lika mycket hos er båda behöver normalt ingen av er betala underhåll till den andra. Är det stor skillnad på er ekonomi kan det ändå vara rimligt att den som har bäst ekonomi betalar en del.",
      },
      {
        q: "Räknas dagen jag hämtar barnet?",
        a: "Nej. Dagen barnet kommer till dig räknas inte som ett helt dygn, men dagen barnet lämnas tillbaka gör det. Börjar och slutar besöket samma dag blir det inget dygn alls. Det gäller båda reglerna.",
      },
      {
        q: "Vem betalar resorna när jag är umgängesförälder?",
        a: "Bor barnet med bara den ena föräldern ska den föräldern vara med och betala resekostnaderna för umgänget, efter vad som är skäligt utifrån er ekonomi och situation. Det står i föräldrabalken. Skriv in i umgängesavtalet vem som hämtar och lämnar. Hur ni delar på resekostnaderna skriver ni i en egen överenskommelse, eftersom socialnämnden inte godkänner ekonomiska villkor i ett umgängesavtal.",
      },
    ],
    sources: [
      {
        label: "Försäkringskassan: så betalar du underhållet",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/sa-betalar-du-underhallet",
      },
      {
        label: "Försäkringskassan: underhåll – så funkar det",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/underhall-sa-funkar-det",
      },
      {
        label: "Socialförsäkringsbalk (2010:110)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/socialforsakringsbalk-2010110_sfs-2010-110/",
      },
      {
        label: "Föräldrabalk (1949:381)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/foraldrabalk-1949381_sfs-1949-381/",
      },
    ],
  },
  {
    slug: "vad-kostar-samboavtal",
    title: "Vad kostar ett samboavtal? Skriva själv, nättjänst eller jurist",
    seoTitle: "Samboavtal kostnad 2026: gratis, nättjänst eller jurist",
    seoDescription:
      "Vad kostar ett samboavtal? Priser för eget avtal, nättjänst och jurist, vad som krävs för att avtalet ska gälla och när en jurist är värd pengarna.",
    excerpt:
      "Gratis om ni skriver själva, runt 500–600 kronor hos en nättjänst och från cirka 3 700 hos jurist. Vad ni får för pengarna och när en jurist är värd det.",
    productSlug: "samboavtal",
    published: "2026-10-24",
    body: [
      "Ett samboavtal kostar inget om ni skriver det själva. Nättjänster hos juristbyråer tar ungefär 500–600 kronor, och hos en jurist börjar priset på omkring 3 700 kronor. Lagen ställer samma krav oavsett väg: avtalet ska vara skriftligt och underskrivet av er båda.",
      "Ni betalar alltså inte för att avtalet ska bli giltigt, utan för hjälp: att någon formulerar avtalet, ställer rätt frågor eller ger råd om just er situation. Priserna nedan gäller i oktober 2026 och kan ändras.",
      "Den största kostnaden är ofta att inte ha något avtal alls. I räkneexemplet längre ner kan den som betalade hela insatsen få lämna ifrån sig 350 000 kronor.",
    ],
    sections: [
      {
        h: "Vad kostar de olika alternativen?",
        p: [
          "Gratis. Ni skriver avtalet själva, för hand eller på dator, eller utgår från en gratis mall från nätet. Det kostar inget, men ni ansvarar själva för att allt blir rätt och att inget viktigt saknas.",
          "99 kronor. Hos Skrivklart svarar ni på några frågor om er två, bostaden, vad som är vems och vad ni önskar. Ni ser ett utkast gratis och betalar för hela texten, med numrerade punkter och underskriftsrader. Ni läser, rättar och skriver under. Ingen jurist granskar det, så det är ett utkast och inte juridisk rådgivning.",
          "Omkring 500–600 kronor. Flera juristbyråer och nättjänster har formulär där ni fyller i era uppgifter och får ett färdigt avtal. Hos två av de större kostar det 495 och 595 kronor. Vissa låter er skriva under med BankID.",
          "Från omkring 3 700 kronor. Hos en av de största familjerättsbyråerna är standardpriset 3 695 kronor för en inledande rådgivning och avtalet, på byråns egna kontor. Franchisekontor kan ha andra priser. Behöver ni fler möten, eller är situationen krånglig, kostar varje extra timme 2 495 kronor. Samma byrå samarbetar med Swedbank, och som Swedbankkunder får ni 20 procent rabatt på juridiska dokument och 10 procent på möten med jurist. Fråga gärna er egen bank om den har ett liknande avtal.",
        ],
      },
      {
        h: "Kan man skriva samboavtal själv – blir det giltigt?",
        p: [
          "Ja. Sambolagen ställer två krav: avtalet ska vara skriftligt och undertecknat av er båda. Ett handskrivet avtal på ett vanligt papper räcker. Det behöver inte bevittnas och ska inte registreras någonstans, så det tillkommer inga avgifter.",
          "Lagen kräver inget datum, men skriv ort och datum ändå. Det visar när avtalet gjordes. Skriv ut två exemplar och skriv under båda, så har ni var sitt original.",
          "Ni kan skriva avtalet innan ni flyttar ihop eller när som helst medan ni bor ihop. Vill ni ändra något senare skriver ni ett nytt avtal på samma sätt.",
          "BankID då? Sambolagen säger inget om digitala underskrifter, och det är inte klarlagt om en sådan räcker. Har ni signerat digitalt, skriv ut avtalet och skriv under på papper också. Det kostar inget och tar bort tvivlet.",
        ],
      },
      {
        h: "Vanliga misstag när man skriver själv",
        p: [
          "Att försöka dela bil eller sparpengar. En bodelning mellan sambor gäller bara bostad och bohag som ni har skaffat för att använda tillsammans. En bostad som den ena ägde redan innan och inte skaffade för er gemensamt ingår inte. Bil, pengar på banken och fritidshus ingår aldrig. Ett samboavtal kan bara ta bort egendom från bodelningen, inte lägga till.",
          "Att vara otydlig om bohaget. 'Mina möbler' räcker inte om ni är oense om fem år. Beskriv sakerna så att de går att känna igen, till exempel 'tv:n och bokhyllan som A tog med från sin förra lägenhet'.",
          "Att skriva att ingen bodelning alls ska ske utan att tänka på dödsfall. Ett sådant avtal gäller även om en av er dör, och då kan den som lever kvar inte begära bodelning. Utan avtal kan den efterlevande begära bodelning och få hälften av samboegendomen efter skulder, och alltid minst två prisbasbelopp om det finns så mycket. Vid dödsfall under 2026 är det 118 400 kronor. Begäran måste göras senast när bouppteckningen efter den avlidne förrättas. Vill ni bara reglera en separation, skriv det uttryckligen.",
          "Att tro att avtalet ordnar arv. Sambor ärver inte varandra, så vill ni det behövs ett testamente. Har den som dör barn kan barnen ändå begära ut sin laglott, som är hälften av deras arv enligt lag.",
          "Att skriva ett villkor som gynnar den ena orimligt mycket. Ett oskäligt villkor kan jämkas eller lämnas utan avseende vid en bodelning. Skriv något ni båda tycker är rimligt även om några år.",
        ],
      },
      {
        h: "Vad kostar det att inte ha ett samboavtal?",
        p: [
          "Ett exempel. Ni köper en bostadsrätt för 2 000 000 kronor för att bo i tillsammans. Den ena sambon, A, betalar hela kontantinsatsen på 300 000 kronor, tar lånet och står ensam som ägare.",
          "Efter fem år flyttar ni isär. Bostaden är nu värd 2 300 000 kronor och lånet är 1 600 000 kronor. Kvar efter lånet är 700 000 kronor. Vi räknar bara på bostaden här. Utan avtal räknas bostaden som samboegendom. Begär den andra sambon, B, bodelning inom ett år delas värdet lika, och B kan få 350 000 kronor trots att A betalade insatsen.",
          "Med ett skriftligt avtal om att bostaden inte ska ingå i en bodelning behåller A hela värdet. I undantagsfall kan B ändå få ta över bostadsrätten, men bara mot full ersättning till A. Jämfört med 350 000 kronor spelar det liten roll om avtalet kostade 0 eller 3 700 kronor. Det som avgör är att avtalet finns och är tydligt.",
          "Till det kommer kostnaden för själva bodelningen om ni inte kommer överens. Då kan tingsrätten utse en bodelningsförrättare, oftast en advokat, som tar betalt per timme, och arvodet delar ni som regel lika.",
        ],
      },
      {
        h: "När är det värt att betala en jurist?",
        p: [
          "Är er situation enkel räcker det ofta med ett avtal ni skriver själva: en hyresrätt, vanligt bohag och ungefär lika mycket pengar in från båda. Det blir svårare när mycket står på spel.",
          "Betala för råd när en av er sätter in ett stort belopp i bostaden, när ni äger bostaden och någon av er har barn sedan tidigare, eller när lån och ägande ligger i olika namn. Med barn sedan tidigare behövs ofta också ett testamente, och det är bra om avtalet och testamentet hänger ihop.",
          "Har ni redan flyttat isär är det inte ett samboavtal ni behöver längre. Då handlar det om bodelning, och där brukar juridisk hjälp vara värd pengarna. Bodelning måste begäras senast ett år efter att ni flyttade isär, annars behåller var och en sitt. Vill den ena ta över en hyresrätt eller bostadsrätt som den andra har måste det begäras inom samma år, och senast tre månader efter att den andra flyttat ut. Står ni precis inför en separation kan ni i stället skriva ett föravtal om hur bodelningen ska göras.",
        ],
      },
    ],
    faq: [
      {
        q: "Vad kostar ett samboavtal hos en jurist?",
        a: "Räkna med från omkring 3 700 kronor för ett möte och ett färdigt avtal, och mer om ni behöver fler möten eller har en krånglig situation. Be om ett prisförslag innan ni bokar.",
      },
      {
        q: "Kan man göra ett samboavtal gratis?",
        a: "Ja. Ni kan skriva det själva eller använda en gratis mall. Det är giltigt om det är skriftligt och ni båda har skrivit under. Läs mallen noga. Bil och sparande ingår inte i en bodelning mellan sambor, och ett samboavtal kan inte lägga till dem, så en mall som delar upp sådant ger ingen verkan.",
      },
      {
        q: "Är ett handskrivet samboavtal giltigt?",
        a: "Ja, om ni båda har skrivit under det. Det spelar ingen roll om det är skrivet för hand eller på dator. Skriv tydligt, lägg till ort och datum och spara var sitt original.",
      },
      {
        q: "Kan vi skriva under samboavtalet med BankID?",
        a: "Vissa nättjänster erbjuder det, men lagen säger inte om en digital underskrift räcker. Skriv därför också under på papper. Då är ni säkra på att kravet på skriftligt och undertecknat avtal är uppfyllt.",
      },
      {
        q: "Kan man skriva samboavtal i efterhand?",
        a: "Ja, så länge ni bor ihop. Ni kan också skriva det innan ni flyttar ihop. Har ni redan flyttat isär är det i stället bodelning det gäller, och den måste begäras senast ett år efter att ni flyttade isär.",
      },
      {
        q: "Kostar det något att ändra ett samboavtal?",
        a: "Ni ändrar det genom att skriva ett nytt avtal som ni båda skriver under. Gör ni det själva kostar det inget. Hos en jurist eller nättjänst betalar ni oftast igen.",
      },
      {
        q: "Gäller samboavtalet om vi gifter oss?",
        a: "Nej. Sambolagen gäller inte för gifta, så när ni gifter er med varandra slutar samboavtalet att spela roll. Vill ni hålla egendom utanför en bodelning som gifta behövs ett äktenskapsförord. Det ska vara skriftligt, daterat och undertecknat av er båda och registreras hos Skatteverket, och avgiften är 275 kronor. Skriver ni det före bröllopet gäller det från vigseln bara om Skatteverket får det inom en månad efter vigseln, annars först från den dag det kommer in.",
      },
    ],
    sources: [
      {
        label: "Sambolag (2003:376)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sambolag-2003376_sfs-2003-376/",
      },
      {
        label: "Regeringen: samboförhållande",
        url: "https://regeringen.se/regeringens-politik/familjeratt/samboforhallande/",
      },
      {
        label: "SCB: prisbasbeloppet för år 2026",
        url: "https://scb.se/hitta-statistik/statistik-efter-amne/priser-och-ekonomiska-tendenser/priser/konsumentprisindex-kpi/pong/statistiknyhet/prisbasbeloppet-for-ar-2026",
      },
      {
        label: "Skatteverket: äktenskapsförord",
        url: "https://www.skatteverket.se/privat/folkbokforing/aktenskap/aktenskapsregistret/aktenskapsforord.4.8639d413207905e9480002503.html",
      },
    ],
  },
  {
    slug: "avslag-sjukpenning",
    title: "Avslag på sjukpenning trots läkarintyg? Så begär du omprövning och skyddar din SGI",
    seoTitle: "Avslag på sjukpenning trots läkarintyg – så gör du",
    seoDescription:
      "Fått avslag på sjukpenning trots läkarintyg? Så begär du omprövning inom två månader, bemöter ”normalt förekommande arbete” och skyddar din SGI.",
    excerpt:
      "Läkarintyget räcker inte alltid. Så svarar du på beslutet punkt för punkt, begär omprövning inom två månader och skyddar din SGI.",
    productSlug: "overklagande",
    published: "2026-10-24",
    body: [
      "Försäkringskassan kan avslå sjukpenning trots läkarintyg, eftersom intyget är ett av flera underlag och myndigheten gör en egen bedömning av din arbetsförmåga. Efter dag 180 jämförs din förmåga dessutom med arbeten på hela arbetsmarknaden, inte bara med ditt eget jobb. Du kan begära omprövning skriftligt, och begäran ska ha kommit in inom två månader från den dag du fick beslutet.",
      "Omprövningen görs bara en gång i samma fråga. Därför ska allt finnas med innan Försäkringskassan fattar omprövningsbeslutet: vad i beslutet som är fel, vilka begränsningar Försäkringskassan inte har vägt in och vilka intyg som visar det.",
      "Tänk också på din sjukpenninggrundande inkomst, SGI. Den skyddas inte av att du begär omprövning. Läs avsnittet om SGI redan i dag, även om du inte orkar skriva brevet än.",
    ],
    sections: [
      {
        h: "Varför blir det avslag trots läkarintyg?",
        p: [
          "Läkaren intygar att du är sjuk. Försäkringskassan avgör om sjukdomen sätter ner din arbetsförmåga så mycket att du har rätt till sjukpenning. Det är två olika frågor, och därför kan även ett intyg på 100 procent sluta i ett avslag.",
          "Försäkringskassan läser intyget som en kedja: diagnos, funktionsnedsättning och aktivitetsbegränsning. Funktionsnedsättningen är vad sjukdomen gör med kroppen eller psyket. Aktivitetsbegränsningen är vad du därför inte klarar, till exempel att sitta mer än en kort stund eller att minnas instruktioner. Enligt Försäkringskassan är en vanlig orsak till kompletteringar att kedjan inte hänger ihop.",
          "Ett intyg som bara säger ”utmattningssyndrom, sjukskrivs 100 procent” ger alltså lite att gå på. Det ska framgå vad du konkret inte klarar, vad läkaren själv har sett och vad som är din egen beskrivning.",
        ],
      },
      {
        h: "Vad händer vid dag 90, 180 och 365?",
        p: [
          "Bedömningen blir strängare ju längre du är sjukskriven. Det kallas rehabiliteringskedjan. De första 90 dagarna jämförs din förmåga med ditt vanliga arbete eller ett tillfälligt annat arbete hos arbetsgivaren. Från dag 91 räknas alla arbeten hos arbetsgivaren. Rehabiliteringskedjan gäller fullt ut bara för anställda. Är du egenföretagare jämförs du med dina vanliga arbetsuppgifter de första 180 dagarna och därefter med normalt förekommande arbete på arbetsmarknaden.",
          "Från dag 181 prövas om du kan försörja dig i ett normalt förekommande arbete på arbetsmarknaden. Försäkringskassan fortsätter att jämföra med arbete hos din arbetsgivare om övervägande skäl talar för att du kan gå tillbaka dit i samma omfattning senast dag 365. Samma sak gäller om det finns särskilda skäl att tro att du är tillbaka senast dag 550, eller om det vore oskäligt, till exempel vid en allvarlig sjukdom som successivt blir sämre.",
          "Efter dag 365 gäller bara de två sista undantagen. Är du arbetslös jämförs du med hela arbetsmarknaden från första dagen. Arbetar du som anställd eller egenföretagare och har fyllt 64 år jämförs du inte med hela arbetsmarknaden. Är du född 1962 eller tidigare gäller 63 år. Du jämförs i stället med arbete hos din arbetsgivare eller annat lämpligt arbete som är tillgängligt för dig, fram till månaden innan du fyller 67 år. Gränsen följer den lägsta åldern för att ta ut inkomstpension, som höjdes till 64 år 2026.",
        ],
      },
      {
        h: "Har du fått ett brev om att Försäkringskassan tänker avslå?",
        p: [
          "Innan Försäkringskassan avslår sjukpenning helt eller delvis ska du normalt få veta vad beslutet blir och varför, och få tid att svara. Tiden är oftast 14 dagar. Du kan be om längre tid om du väntar på ett nytt intyg.",
          "Det är nu du har störst chans att påverka beslutet. Svara skriftligt, på samma sätt som i en omprövning, och kontakta din läkare direkt om ett kompletterande intyg. Brevet ska också berätta hur du skyddar din SGI.",
        ],
      },
      {
        h: "Så bemöter du ”normalt förekommande arbete” punkt för punkt",
        p: [
          "Ett avslag som bygger på normalt förekommande arbete ska peka ut minst en yrkesgrupp som Försäkringskassan anser att du klarar. Arbetsförmedlingen har ett kunskapsmaterial som beskriver vilka fysiska och psykiska krav varje yrkesgrupp ställer. Leta upp yrkesgruppen som beslutet nämner i Arbetsförmedlingens kunskapsmaterial och skriv av kraven.",
          "Ställ sedan varje krav mot din aktivitetsbegränsning och mot intyget som visar den. Anta att beslutet pekar på en yrkesgrupp med arbete vid dator större delen av dagen. Ditt läkarintyg från den 4 september 2026 anger att du får yrsel efter 20 minuter framför skärm och måste vila. Då skriver du: ”Yrkesgruppen kräver långvarigt skärmarbete. Enligt läkarintyg den 4 september 2026 klarar jag 20 minuter i taget. Detta har inte vägts in i beslutet.”",
          "Saknas yrkesgrupp i ett sådant avslag, påpeka det. Argumentera däremot inte med att det saknas jobb där du bor, med din ålder eller din utbildning. Bara dina medicinska förutsättningar får vägas in, och jämförelsen görs mot hela landets arbetsmarknad.",
          "Be läkaren om ett intyg som tar ställning till just de krav yrkesgruppen ställer. Det väger tyngre än din egen beskrivning, även om den också hör hemma i brevet.",
        ],
      },
      {
        h: "Begär omprövning: det här ska stå i brevet",
        p: [
          "Begäran ska vara skriftlig. Du kan använda Försäkringskassans blankett 7024 eller skriva ett eget brev. Ange vilket beslut det gäller med datum och förmån, hur du vill att det ändras och varför, och ditt namn, personnummer, adress och telefonnummer.",
          "Räkna fristen från den dag du fick beslutet. Kom brevet den 22 oktober 2026 ska begäran ha kommit in senast den 22 december 2026. Infaller sista dagen på en lördag, söndag, helgdag, midsommarafton, julafton eller nyårsafton räcker det att begäran kommer in nästa vardag. Du kan inte få anstånd med själva begäran, men du kan be om mer tid att komplettera. Då ska du få minst den tid som återstår av de två månaderna.",
          "Skicka hellre en kort begäran i tid och skriv att intyg kommer, än vänta in allt. Försäkringskassan gör då en ny, fullständig prövning, och beslutet får inte ändras till din nackdel.",
          "Skrivklarts Överklagande hjälper dig med formuleringarna för 99 kr. Du beskriver beslutet, varför det är fel och vad du vill ska hända, och får en färdig begäran om omprövning med bakgrund, grunder, bevisning och yrkande.",
        ],
      },
      {
        h: "Hur skyddar jag min SGI efter ett avslag?",
        p: [
          "SGI är den inkomst din sjukpenning räknas på. Medan du väntar på beslut är din SGI skyddad, men bara för den period du har sökt sjukpenning för och längst till den dag du får beslutet. Tar intygsperioden slut innan beslutet kommer, skicka ett nytt intyg om du fortfarande är sjuk eller anmäl dig hos Arbetsförmedlingen. Att du begär omprövning förlänger inte skyddet. Försäkringskassans tumregel är att det inte ska finnas en enda dag utan arbete eller SGI-skydd.",
          "Har du fått sjukpenning behöver du inte vara anmäld hos Arbetsförmedlingen under 25 arbetsdagar räknat från din sista dag med sjukpenning, inte från beslutet. Har de 25 dagarna redan gått när beslutet kommer, anmäl dig senast dagen efter att du fick beslutet. Säkrast är att anmäla dig direkt. Har du sökt sjukpenning men aldrig fått någon gäller inte de 25 dagarna. Anmäl dig då senast dagen efter att du fick beslutet.",
          "Det fungerar även om du har kvar din anställning men av hälsoskäl inte kan gå tillbaka till ditt arbete. Du ska söka jobb aktivt och vara beredd att ta ett arbete i samma omfattning som din SGI bygger på. Bygger den på heltid räcker det inte att söka deltid.",
        ],
      },
      {
        h: "Om omprövningen också blir ett avslag",
        p: [
          "Då kan du överklaga till förvaltningsrätten. Överklagandet ska ha kommit in inom två månader från den dag du fick omprövningsbeslutet. Du skickar det till Försäkringskassan, som skickar det vidare till domstolen.",
          "Det kostar ingenting att överklaga. Vill du ha ett ombud, till exempel en advokat, betalar du det själv. Domstolen kan ändra beslutet eller skicka tillbaka ärendet till Försäkringskassan. För att gå vidare till kammarrätten krävs prövningstillstånd.",
          "Är du fortfarande sjuk kan du också ansöka om sjukpenning för en senare period med ett nytt intyg. Den perioden prövas som ett nytt ärende.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur lång tid tar en omprövning hos Försäkringskassan?",
        a: "Försäkringskassan strävar efter att skicka omprövningsbeslutet inom sex veckor, men det kan ta längre tid. Under tiden får du ingen sjukpenning för den period avslaget gäller.",
      },
      {
        q: "Kan jag begära omprövning flera gånger?",
        a: "Nej. Försäkringskassan omprövar samma fråga bara en gång. Är du inte nöjd med omprövningsbeslutet är nästa steg att överklaga till förvaltningsrätten.",
      },
      {
        q: "Vad är skillnaden mellan omprövning och överklagande?",
        a: "Omprövning gör Försäkringskassan själv, och den måste komma först. Ett överklagande prövas av förvaltningsrätten och gäller omprövningsbeslutet. Skickar du ett överklagande innan beslutet är omprövat räknas det som en begäran om omprövning.",
      },
      {
        q: "Vad händer om jag missar tvåmånadersfristen?",
        a: "En begäran som kommer in för sent avvisas. Försäkringskassan ska då ändå pröva om beslutet är så uppenbart fel att det behöver ändras. Beror förseningen på att Försäkringskassan gav fel information om hur du begär omprövning ska begäran inte avvisas. Var du för sjuk för att hinna kan du ansöka hos kammarrätten om återställande av försutten tid. Skicka därför en kort begäran i tid och komplettera senare. För en senare sjukperiod kan du ansöka på nytt.",
      },
      {
        q: "Ska jag skriva ett personligt brev till Försäkringskassan?",
        a: "Ja, men sakligt. Beskriv en vanlig dag: vad du klarar, hur länge och vad som händer efteråt. Koppla varje begränsning till ett intyg. Försäkringskassan skiljer på läkarens iakttagelser och din egen beskrivning, så brevet kompletterar intyget men ersätter det inte.",
      },
      {
        q: "Får jag pengar medan jag väntar på omprövningen?",
        a: "Inte sjukpenning för den tid avslaget gäller. Är du med i en a-kassa, fråga dem vad som gäller när du är anmäld hos Arbetsförmedlingen. Räcker pengarna inte till hyra och mat kan du söka ekonomiskt bistånd hos socialtjänsten i din kommun.",
      },
    ],
    sources: [
      {
        label: "Försäkringskassan: rehabiliteringskedjan",
        url: "https://www.forsakringskassan.se/privatperson/sjuk-eller-skadad/rehabiliteringskedjan",
      },
      {
        label: "Försäkringskassan: intyg för sjukpenning",
        url: "https://www.forsakringskassan.se/halso-och-sjukvarden/sjukdom-och-skada/intyg-for-sjukpenning",
      },
      {
        label: "Försäkringskassan: när du tycker att Försäkringskassan har gjort fel",
        url: "https://www.forsakringskassan.se/om-forsakringskassan/om-du-inte-ar-nojd",
      },
      {
        label: "Försäkringskassan: sjukpenninggrundande inkomst (SGI)",
        url: "https://www.forsakringskassan.se/privatperson/sjukpenninggrundande-inkomst-sgi",
      },
    ],
  },
  {
    slug: "samboavtal-i-efterhand",
    title: "Samboavtal i efterhand – går det när ni redan bor ihop eller har köpt bostad?",
    seoTitle: "Samboavtal i efterhand – går det efter inflytt och köp?",
    seoDescription:
      "Ja, ni kan skriva samboavtal när som helst så länge ni bor ihop, även efter köpet. Så gör ni om insatsen var ojämn, och när det är för sent.",
    excerpt:
      "Ja, ni kan skriva samboavtal så länge ni bor ihop, och det gäller även det ni redan har köpt. Efter separationen är det för sent.",
    productSlug: "samboavtal",
    published: "2026-10-24",
    body: [
      "Ja, ni kan skriva ett samboavtal i efterhand. Sambolagen säger att sambor, eller blivande sambor, får avtala om att bodelning inte ska ske eller att viss egendom inte ska ingå i en bodelning. Det spelar ingen roll om ni har bott ihop i två månader eller tolv år, och avtalet gäller också bostad och bohag som ni redan har köpt.",
      "Det enda formkravet är att avtalet är skriftligt och att ni båda skriver under. Det behöver inte registreras någonstans och det behövs inga vittnen. Gränsen går vid separationen. När ni har flyttat isär är ni inte längre sambor, och då är det för sent för ett samboavtal.",
      "Här går vi igenom det som brukar bli svårt när man gör det i efterhand: en bostad som redan är köpt med olika stora insatser, vad avtalet kan och inte kan göra, och hur du tar upp frågan utan att det låter som misstro.",
    ],
    sections: [
      {
        h: "Varför gäller avtalet även det ni redan har köpt?",
        p: [
          "En bodelning utgår från hur det ser ut den dag samboförhållandet tar slut. Det är då man räknar ihop samboegendomen, alltså den bostad och det bohag som ni har skaffat för att använda tillsammans. Det som någon av er ägde innan ni flyttade ihop ingår som regel inte, till exempel en lägenhet som den ena redan bodde i. För det som ni har skaffat tillsammans spelar det ingen roll om avtalet skrivs före eller efter köpet.",
          "Därför fungerar ett samboavtal som skrivs efter inflytten eller efter bostadsköpet lika bra som ett som skrevs innan. Står det i avtalet att bostaden inte ska ingå i en bodelning, så ingår den inte, även om ni köpte den för flera år sedan.",
          "Utan avtal gäller sambolagen. Begär någon av er bodelning räknas samboegendomen ihop, skulderna dras av och resten delas lika, oavsett vem som betalade. Bodelning måste begäras senast ett år efter att ni flyttat isär.",
        ],
      },
      {
        h: "Ni har redan köpt och betalade olika mycket – vad gör ni nu?",
        p: [
          "Det här är det vanligaste läget. Ni står som ägare till hälften var, men den ena lade in mer pengar i kontantinsatsen. Ett samboavtal räcker inte ensamt. Avtalet kan bara säga att bostaden inte ska delas i en bodelning, och då gäller ägarandelarna i köpekontraktet. De är fortfarande hälften var.",
          "Ett exempel. Ni köpte en bostadsrätt och kontantinsatsen var 420 000 kronor. Den ena betalade 320 000 kronor och den andra 100 000 kronor. Hälften av insatsen är 210 000 kronor. Den som betalade mest lade alltså in 110 000 kronor mer än sin halva, och den andra 110 000 kronor mindre.",
          "Vill ni att skillnaden ska gå tillbaka om ni flyttar isär, skriv ett skuldebrev där den som betalade mindre står som skyldig 110 000 kronor till den andra. Skriv när det ska betalas, till exempel när bostaden säljs eller om ni separerar. Tänk på att skulden preskriberas tio år efter att skuldebrevet skrevs, även om den inte ska betalas förrän senare. Bryt preskriptionen minst vart tionde år, till exempel genom att den som är skyldig skriver under på att skulden finns kvar eller genom att den andra skickar en skriftlig påminnelse. Skriv sedan samboavtalet, så att bostaden inte delas i en bodelning utan ägarandelarna gäller.",
          "Det går också att ändra ägarandelarna i efterhand, men det är en ny överlåtelse av en del av bostaden. För ett hus krävs ny lagfart, och betalar den ena för andelen, eller tar över en stor del av lånet, kan det bli stämpelskatt på 1,5 procent. För de flesta är skuldebrev plus samboavtal det enklaste.",
        ],
      },
      {
        h: "Vad kan ett samboavtal inte göra?",
        p: [
          "Ett samboavtal kan bara ta bort saker från en bodelning, inte lägga till. Bil, sparpengar och aktier är inte samboegendom och delas aldrig i en bodelning mellan sambor. Vill ni att den andra ska få del av något sådant är det en gåva eller ett köp, och det kräver ett annat papper.",
          "Avtalet flyttar inte heller ägandet. Står bara den ena som ägare och ni skriver att bostaden inte ska ingå i en bodelning, behåller ägaren bostaden eller hela dess värde om ni flyttar isär. Är det en bostadsrätt eller hyresrätt och har ni barn ihop kan den andra i vissa fall få ta över den, men måste då betala hela värdet. Har den andra bidragit till insatsen behövs ett skuldebrev för att de pengarna ska komma tillbaka.",
          "Är ett villkor i avtalet oskäligt kan det jämkas eller bortses från vid en bodelning. Då vägs bland annat in hur avtalet kom till och vad som har hänt sedan. Ett avtal som känns rimligt för er båda håller bättre.",
        ],
      },
      {
        h: "Hur tar du upp det utan att det låter som misstro?",
        p: [
          "Juridiken är sällan problemet. Det svåra är att säga till någon du har bott med i flera år att du vill skriva ett samboavtal. Många hör det som att du planerar för att det ska ta slut.",
          "Börja i det praktiska. Ett bra tillfälle är när något ändras: ni har köpt, ni tar nya lån, någon använder ett arv eller en gåva till bostaden, eller ni får barn. Säg vad du vill skydda och varför, till exempel att dina föräldrar hjälpte dig med insatsen och att du vill kunna ge tillbaka pengarna om något händer. Har föräldrar gett pengar till insatsen som gåva med villkor att pengarna ska vara mottagarens enskilda egendom, ingår den delen inte i samboegendomen. Be om ett skriftligt gåvobrev med det villkoret när gåvan ges.",
          "Skriv avtalet tillsammans. Gör först var sin lista över vad ni tycker är vems, jämför dem och läs sedan utkastet i lugn och ro. Ett tydligt avtal skyddar båda, eftersom ingen behöver bråka om pengar i ett läge när ni redan mår dåligt.",
          "Säger den andra nej går det inte att tvinga fram. Utan båda era underskrifter finns inget avtal, och då gäller sambolagen.",
        ],
      },
      {
        h: "När ska man skriva samboavtal – före eller efter bostadsköpet?",
        p: [
          "Helst i samband med köpet. Då kan ni skriva ägarandelar i köpekontraktet som motsvarar vad var och en betalar av hela priset, alltså insats och lån tillsammans, och skriva samboavtalet direkt. Delar ni lika på lånet blir skillnaden ofta liten. I exemplet ovan, med en bostad för 4,2 miljoner kronor och ett lån som ni delar lika, blir det ungefär 53/47. Då behövs inget skuldebrev för insatsen.",
          "Men bättre sent än aldrig. Ett avtal som skrivs efter inflytten eller efter köpet gäller på samma sätt, så länge ni fortfarande bor ihop.",
          "Se över avtalet när något stort händer, till exempel om ni byter bostad eller om den andra börjar betala mer av lånen. Ni ändrar det med ett nytt skriftligt avtal som ni båda skriver under.",
        ],
      },
      {
        h: "Ni har redan flyttat isär – är det för sent?",
        p: [
          "Ja, både för ett samboavtal och för ett föravtal. Ett föravtal om den kommande bodelningen kan bara skrivas när separationen är nära men innan ni har flyttat isär, och det ska vara skriftligt och underskrivet av er båda. Har ni redan flyttat isär återstår att göra en bodelning, eller att ingen av er begär bodelning inom ett år.",
          "Är ni överens om hur ni delar skriver ni ett bodelningsavtal, med datum och båda era underskrifter. Bodelning måste begäras senast ett år efter att ni flyttade isär. Begär ingen av er bodelning inom den tiden behåller var och en det den äger.",
        ],
      },
      {
        h: "Så skriver ni avtalet nu",
        p: [
          "Skriv era namn och personnummer, när ni flyttade ihop, bostadens adress och vem som äger vilken andel. Skriv sedan vad som inte ska ingå i en bodelning: all samboegendom, bara bostaden eller vissa saker i bohaget. Beskriv sakerna så att de går att känna igen.",
          "Bestäm också om avtalet ska gälla bara om ni separerar, eller även om någon av er dör. Avsluta med ort, datum och båda era underskrifter, och spara var sitt original.",
          "Hos Skrivklart svarar du på några frågor om er bostad, vem som har betalat vad och vad ni vill hålla utanför, och får ett färdigt samboavtal med numrerade punkter och underskriftsrader för 99 kronor. Ett skuldebrev kostar lika mycket.",
        ],
      },
    ],
    faq: [
      {
        q: "Kan man skriva samboavtal när som helst?",
        a: "Ja, så länge ni är sambor eller ska bli det. Det finns ingen tidsgräns efter inflytten eller efter ett köp. När ni har flyttat isär går det inte längre.",
      },
      {
        q: "Vi har bott ihop i många år. Är det lönt nu?",
        a: "Ja, om ni vill att något annat än hälften var ska gälla för bostaden och bohaget. Efter många år har ofta mer hunnit bli samboegendom. Vid en bodelning kan delningen jämkas så att den som ägde mer får behålla mer. Då vägs särskilt in hur länge ni har bott ihop, men också er ekonomi. Efter många år ska ni inte räkna med jämkning, och då är ett avtal det enda sättet att slippa hälften var.",
      },
      {
        q: "Måste samboavtalet registreras eller bevittnas?",
        a: "Nej. Det räcker att det är skriftligt och underskrivet av er båda. Vittnen är inget krav men gör det svårare att ifrågasätta avtalet senare. Det är äktenskapsförord, inte samboavtal, som ska registreras hos Skatteverket.",
      },
      {
        q: "Hur upphäver man ett samboavtal?",
        a: "Med ett nytt skriftligt avtal som ni båda skriver under, där det står att det gamla inte ska gälla eller vad som gäller i stället. Lagen ger ingen möjlighet för den ena att ensam säga upp avtalet.",
      },
      {
        q: "Gäller samboavtalet om vi gifter oss?",
        a: "Nej. Gifter ni er med varandra blir det ingen bodelning enligt sambolagen, utan äktenskapsbalken gäller. Vill ni hålla något utanför då behövs ett äktenskapsförord. Det ska registreras hos Skatteverket och avgiften är 275 kronor.",
      },
      {
        q: "Vad händer med avtalet om någon av oss dör?",
        a: "Sambor ärver inte varandra. Utan avtal kan den som lever kvar begära bodelning, senast när bouppteckningen förrättas. Det är bara den efterlevande som kan begära det, inte arvingarna. Den efterlevande har då rätt att få minst två prisbasbelopp av samboegendomen efter avdrag för skulder, om den räcker. 2026 är det 118 400 kronor. Står det i avtalet att ingen bodelning ska ske kan den rätten försvinna, så skriv om avtalet bara ska gälla vid separation. Vill ni ärva varandra behövs ett testamente. Har någon av er barn, även gemensamma, kan barnen ändå begära sin laglott, alltså hälften av det de skulle ha ärvt enligt lag. Ett testamente kan därför inte ge allt till den som lever kvar.",
      },
    ],
    sources: [
      {
        label: "Sambolag (2003:376)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sambolag-2003376_sfs-2003-376/",
      },
      {
        label: "Skatteverket: äktenskapsförord",
        url: "https://www.skatteverket.se/privat/aktenskapsregistret/aktenskapsforord.4.8639d413207905e9480002503.html",
      },
      {
        label: "SCB: prisbasbeloppet för år 2026",
        url: "https://scb.se/hitta-statistik/statistik-efter-amne/priser-och-ekonomiska-tendenser/priser/konsumentprisindex-kpi/pong/statistiknyhet/prisbasbeloppet-for-ar-2026",
      },
    ],
  },
  {
    slug: "separation-sambo-med-barn",
    title: "Separation som sambo med barn: checklista för barnen, pengarna och bostaden",
    seoTitle: "Separation som sambo med barn – checklista i rätt ordning",
    seoDescription:
      "Separerar ni som sambor med barn? Så ordnar ni boende och umgänge, underhåll, vem som bor kvar och fristerna på tre månader och ett år.",
    excerpt:
      "Ingen domstol håller i trådarna när sambor går isär. Det här ska ni ordna första veckan, första månaden och inom ett år.",
    productSlug: "umgangesavtal",
    published: "2026-10-24",
    body: [
      "När ni separerar som sambor med barn finns det ingen domstol eller myndighet som håller ihop processen. Ni bestämmer själva var barnen ska bo, hur umgänget ska se ut och hur ni delar på kostnaderna, och har ni gemensam vårdnad fortsätter den som förut. Bostaden och bohaget som ni skaffat för att använda tillsammans delas enligt sambolagen, men bara om någon av er begär bodelning inom ett år efter att ni flyttat isär. Har ni ett samboavtal om att bodelning inte ska göras, eller att viss egendom ska hållas utanför, gäller avtalet.",
      "Att ingen håller i trådarna betyder också att ingen påminner er om fristerna. Checklistan nedan tar det mest brådskande först: första veckan, första månaden och det första året. Den gäller sambor, inte gifta.",
    ],
    sections: [
      {
        h: "Första veckan: barnen, vårdnaden och adressen",
        p: [
          "Börja med barnen. Om det går, berätta tillsammans och gör ett tillfälligt schema för de närmaste veckorna. Barnets bästa ska avgöra frågor om boende och umgänge, och barnet har rätt att få veta vad som händer och att säga vad det tycker.",
          "Vårdnaden ändras inte av att ni flyttar isär. Var ni inte gifta när barnet föddes fick den som födde barnet ensam vårdnad, om ni inte anmält gemensam vårdnad, till exempel när föräldraskapet bekräftades. Är du osäker på vad som gäller för er, fråga Skatteverket.",
          "Anmäl flytten till Skatteverket senast en vecka efter flyttdagen. Barn kan bara vara folkbokförda på en adress, den där de sover flest nätter. Flyttar barnet med dig får den andra vårdnadshavaren frågan om att godkänna. Är ni inte överens gör Skatteverket en bedömning, till exempel utifrån var barnet bor mest och går i skola.",
          "Flytta inte ut i panik om du vill ha kvar bostaden. Bor ni i den andras hyres- eller bostadsrätt som hen hade redan innan ni flyttade ihop, och du flyttar ut, har du bara tre månader på dig att kräva att få ta över den. Ett hus som den andra äger kan du inte kräva att få ta över.",
        ],
      },
      {
        h: "Var ska barnen bo och när ska de träffa den andra föräldern?",
        p: [
          "Antingen bor barnen mest hos den ena och har umgänge med den andra, eller så bor de växelvis, ungefär lika mycket hos er båda. Skriv ett avtal om det. Godkänns avtalet av socialnämnden, via familjerätten i kommunen där barnet är folkbokfört, gäller det som en dom och kan verkställas via tingsrätten. Ett avtal som inte är godkänt fungerar så länge ni båda följer det, men det går inte att driva igenom.",
          "Skriv konkret. Inte bara varannan helg, utan fredag klockan 16 till söndag klockan 18, med start ett visst datum. Ta med lov och högtider, hämtning och lämning och hur ni meddelar ändringar. Bor barnet bara hos den ena ska den föräldern också vara med och betala resorna till umgänget, efter vad som är skäligt.",
          "På Skrivklart kostar ett avtal om boende och umgänge 99 kr. Du svarar på frågor om boendet, vardagsschemat, lov och hämtning, och får ett avtal som är klart att skriva under. Behöver ni också ett avtal om underhållsbidrag ingår båda i Familjepaketet för 149 kr.",
          "Kommer ni inte överens kan ni boka samarbetssamtal hos familjerätten. Samtalen är gratis. Den som vill gå till tingsrätten när ni inte är överens måste i regel först ha varit på informationssamtal hos kommunen, högst ett år innan. Kravet har gällt sedan mars 2022. Vill någon av er det, ska kommunen erbjuda informationssamtal var för sig.",
        ],
      },
      {
        h: "Första månaden: underhåll och barnbidrag",
        p: [
          "Bor barnen mest hos dig ska den andra föräldern betala underhållsbidrag. Vid växelvis boende behöver normalt ingen betala, om det inte är stor skillnad på er ekonomi. Underhållet gäller från att ni slutade bo ihop och betalas i förskott varje månad. Med Försäkringskassans verktyg Beräkna underhållsbidrag kan ni räkna ut ett skäligt belopp.",
          "Skriv in beloppet i ett avtal som två personer bevittnar. Då kan Kronofogden driva in pengarna om de uteblir, och ansökan är gratis. Bidraget räknas normalt upp varje februari, men för 2026 blev uppräkningen noll procent.",
          "Betalar den andra inte, eller för lite, kan du söka underhållsstöd hos Försäkringskassan om barnet bor hos dig hela eller större delen av tiden och är folkbokfört hos dig. Stödet är 1 673 kr i månaden till och med månaden barnet fyller 7 år, 1 823 kr till och med månaden det fyller 15 och 2 223 kr därefter. Är barnet 9 år och den andra betalar 1 000 kr till dig, kan du få mellanskillnaden på 823 kr. Försäkringskassan räknar också fram vad den andra ska betala utifrån sin inkomst, så beloppet kan bli ett annat. Sök direkt, för stödet betalas tidigast från en månad före ansökan.",
          "Barnbidraget, 1 250 kr per barn och månad, delas mellan vårdnadshavarna. Bor barnet stadigvarande bara hos dig, och inte växelvis, kan du anmäla till Försäkringskassan att du ska få hela barnbidraget. Det går även om den andra inte godkänner det, men då utreder Försäkringskassan var barnet bor.",
        ],
      },
      {
        h: "Vem får bo kvar i bostaden när sambor med barn separerar?",
        p: [
          "Det beror på bostaden. Har ni skaffat den för att bo i tillsammans är den samboegendom, oavsett vem som står på kontraktet eller betalade. Då har den som bäst behöver bostaden rätt att ta över den vid bodelningen, om det är skäligt, mot att den andra får sin del i pengar eller annan egendom. Den som barnen ska bo hos mest brukar anses ha störst behov.",
          "Hade den ena hyres- eller bostadsrätten redan innan ni flyttade ihop är den normalt inte samboegendom. Eftersom ni har barn tillsammans kan den andra ändå få ta över den, om hen bäst behöver den och det är skäligt. Kravet ska framföras inom ett år från att ni flyttade isär, eller inom tre månader om du har flyttat ut. Den som tar över ersätter den andra för bostadens värde. Ett hus som den ena ägde sedan tidigare går inte att kräva på det sättet.",
          "Under tiden får den som står på bostaden inte sälja eller hyra ut den utan ditt samtycke. Har någon av er begärt bodelning, eller väckt talan om att ta över den andras hyres- eller bostadsrätt, kan tingsrätten på ansökan bestämma vem som får bo kvar tills frågan är avgjord. Den andra måste då flytta genast.",
          "Är du utsatt för hot eller våld kan du ansöka om kontaktförbud avseende gemensam bostad hos polisen på 114 14. Vid akut fara, ring 112.",
        ],
      },
      {
        h: "Inom ett år: begär bodelning i tid",
        p: [
          "Bodelningen gäller bara samboegendom: den gemensamma bostaden och bohag som ni skaffat för att använda tillsammans. Bil och sparpengar ingår inte. Varje sambos skulder dras av från hens egen del, i första hand skulder som hör till samboegendomen. Resten läggs ihop och delas lika. Har ni bott ihop kort tid kan den som har mest samboegendom få behålla mer.",
          "Begäran ska göras senast ett år efter att samboförhållandet upphörde. Högsta domstolen slog fast 2025 att det är när ni faktiskt flyttar isär som räknas, inte när ni gjorde slut.",
          "Ett exempel. Ni flyttar isär den 1 november 2026. Då har ni till den 1 november 2027 på er att begära bodelning. Hade den andra hyresrätten redan innan ni flyttade ihop och du flyttar ut samma dag men vill ta över den, måste du kräva det senast den 1 februari 2027. Skicka kravet skriftligt på ett sätt som visar att den andra har fått det, till exempel rekommenderat brev med mottagningsbevis eller ett mejl som hen bekräftar, och spara en kopia. Du kan också ansöka om bodelningsförrättare hos tingsrätten inom fristen.",
          "Är ni överens skriver ni ett bodelningsavtal med datum och båda era underskrifter. Annars kan tingsrätten utse en bodelningsförrättare, som ni betalar tillsammans. Den av er som inte har råd kan söka ersättningsgaranti hos tingsrätten för upp till fem timmars arbete. Den betalas bara ut om din andel efter skulder blir mindre än 100 000 kr.",
        ],
      },
      {
        h: "Tre papper att skriva medan ni fortfarande pratar",
        p: [
          "Det första är avtalet om boende och umgänge, gärna godkänt av familjerätten. Det andra är avtalet om underhållsbidrag, bevittnat av två personer. Det tredje är ett bodelningsavtal om bostaden och bohaget som ni båda skriver under: vem som tar över vad och vad den andra får i ersättning. Blir ni inte klara i tid, begär bodelning skriftligt inom ett år så att rätten inte går förlorad. Det ni har skrivit under tillsammans är lättare att hålla fast vid om ni blir osams senare.",
          "Gäller det stora värden, eller känner du dig pressad att skriva under, ta hjälp av en jurist först. Det här är en checklista, inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Måste vi gå till domstol när vi separerar som sambor med barn?",
        a: "Nej. Är ni överens om barnen, underhållet och bostaden kan ni skriva avtal själva. Domstolen kommer in först om ni inte kommer överens, och i frågor om barnen måste den som vill gå till tingsrätten då i regel först ha varit på informationssamtal hos kommunen.",
      },
      {
        q: "Kan jag kräva att den andra flyttar ut?",
        a: "Inte på egen hand. Har någon av er begärt bodelning, eller har du gått till tingsrätten för att ta över den andras hyres- eller bostadsrätt, kan tingsrätten bestämma vem som får bo kvar tills frågan är avgjord. Den andra måste då flytta genast. Är du utsatt för hot eller våld kan du ansöka om kontaktförbud hos polisen.",
      },
      {
        q: "Vad gäller vid växelvis boende?",
        a: "Barnet kan bara vara folkbokfört på en adress. Barnbidraget delas, och normalt betalar ingen av er underhållsbidrag om det inte är stor skillnad på er ekonomi. Underhållsstöd från Försäkringskassan kräver att barnet bor hos dig hela eller större delen av tiden.",
      },
      {
        q: "Gäller ett avtal om boende och umgänge som vi skrivit själva?",
        a: "Det fungerar så länge ni båda följer det. För att det ska gälla som en dom och kunna verkställas måste socialnämnden godkänna det. Ni kan när som helst komma överens om något annat och följa det. Men det godkända avtalet gäller och kan verkställas tills ni skriver ett nytt avtal som socialnämnden godkänner, så låt godkänna även ändringen om den ska hålla.",
      },
      {
        q: "Kan jag få underhåll i efterhand?",
        a: "Underhållet gäller från att ni slutade bo ihop. En domstol kan fastställa underhållsbidrag högst tre år bakåt från att du väckte talan, om inte den andra går med på mer. Underhållsstöd betalas tidigast från en månad före ansökan, så vänta inte med att söka.",
      },
      {
        q: "Vad händer om ingen av oss begär bodelning inom ett år?",
        a: "Då blir det ingen bodelning. Var och en behåller det den äger. Äger ni bostaden tillsammans fortsätter ni att äga den tillsammans, och vill en av er ut kan hen begära hos tingsrätten att den säljs.",
      },
    ],
    sources: [
      {
        label: "Sambolag (2003:376)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sambolag-2003376_sfs-2003-376/",
      },
      {
        label: "Föräldrabalk (1949:381)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/foraldrabalk-1949381_sfs-1949-381/",
      },
      {
        label: "Försäkringskassan: underhåll – så funkar det",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/underhall-sa-funkar-det",
      },
      {
        label: "Försäkringskassan: om den som ska betala underhåll inte kan eller vill betala",
        url: "https://www.forsakringskassan.se/privatperson/familj-och-barn/foraldrar-som-inte-lever-ihop/om-den-som-ska-betala-underhall-inte-kan-eller-vill-betala",
      },
    ],
  },
];

/** Guides merged into another page; the old URL answers with a permanent redirect. */
export const GUIDE_REDIRECTS: Record<string, string> = {
  "samboavtal-innan-det-brinner": "/samboavtal-koll",
  "overklaga-utan-att-skrika": "/guider/mall-overklagande-forsakringskassan",
};

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

/** Every word a reader sees in the guide. */
export function guideText(g: Guide) {
  return [
    ...g.body,
    ...(g.template ? [g.template.title, g.template.text] : []),
    ...(g.sections ?? []).flatMap((s) => [s.h, ...s.p]),
    ...(g.faq ?? []).flatMap((f) => [f.q, f.a]),
  ].join(" ");
}

/** Reading time at ~200 words a minute, at least one minute. */
export function guideMinutes(g: Guide) {
  return Math.max(1, Math.round(guideText(g).split(/\s+/).filter(Boolean).length / 200));
}

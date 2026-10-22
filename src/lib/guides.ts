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
    title: "Begära omprövning hos Försäkringskassan – mall och steg",
    excerpt:
      "Först omprövning hos Försäkringskassan, sedan förvaltningsrätten. Två månader på dig. Så skriver du begäran.",
    productSlug: "overklagande",
    published: "2026-08-26",
    updated: "2026-10-15",
    body: [
      "Steg 1 är inte förvaltningsrätten. Ett beslut från Försäkringskassan ska först omprövas: skriv rubriken 'Begäran om omprövning av beslut den [datum], ärendenummer [nr]' och skicka till Försäkringskassan. Först när du fått omprövningsbeslutet kan du överklaga till förvaltningsrätten, och då skickar du överklagandet till Försäkringskassan, som lämnar det vidare.",
      "1) Vad beslutet säger. En mening. 2) Vad du yrkar: att beslutet upphävs och att [ersättning/insats] beviljas. 3) Grunder: fakta som saknades, felaktig bedömning, läkarintyg de inte vägt in.",
      "Håll känslor utanför. 'Jag är förtvivlad' flyttar inget. 'Läkarintyg 12 mars anger nedsättning 75 %, vilket inte nämns i beslutet' gör det.",
      "Både begäran om omprövning och ett senare överklagande ska ha kommit in till Försäkringskassan inom två månader från den dag du fick beslutet. Andra myndigheter har ofta kortare tid, till exempel tre veckor – kolla alltid fristen i ditt beslut. Behåll en kopia. Det här är ett utkast, inte juridisk rådgivning.",
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
    ...(g.sections ?? []).flatMap((s) => [s.h, ...s.p]),
    ...(g.faq ?? []).flatMap((f) => [f.q, f.a]),
  ].join(" ");
}

/** Reading time at ~200 words a minute, at least one minute. */
export function guideMinutes(g: Guide) {
  return Math.max(1, Math.round(guideText(g).split(/\s+/).filter(Boolean).length / 200));
}

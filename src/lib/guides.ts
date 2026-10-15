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
    excerpt: "Först omprövning hos Försäkringskassan, sedan förvaltningsrätten. Två månader på dig. Så skriver du begäran.",
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
    seoDescription: "Vad ett samboavtal måste innehålla: parter, bostad, bohag, vad som ska hållas utanför bodelningen och underskrifter. Checklista och gratis utkast.",
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
    excerpt: "Ett hus ni köpt för att bo i tillsammans delas lika vid separation, oavsett vem som betalade. Om ni inte avtalar bort det.",
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
    seoDescription: "Så skriver du en hyresansökan som sticker ut: vem du är, inkomst, referenser och varför just du. Gratis utkast, färdig text 59 kr.",
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
    seoDescription: "Så reklamerar du rätt: vad du ska skriva, vilka frister som gäller enligt konsumentköplagen och vad du kan kräva. Gratis utkast, färdigt brev 59 kr.",
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
    seoDescription: "Ska du låna ut pengar till en vän? Så skriver du ett skuldebrev med belopp, ränta och återbetalning. Gratis utkast, färdigt skuldebrev 99 kr.",
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
    seoDescription: "Vad ett konsultavtal för enskild firma ska innehålla: uppdrag, arvode, betalning, ansvar och uppsägning. Gratis utkast, färdigt avtal 99 kr.",
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
    seoDescription: "Så skriver du en CV-profil som rekryterare läser: kort, konkret och utan floskler. Exempel och gratis utkast på några minuter.",
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
    seoDescription: "Så säger du upp dig skriftligt: datum, uppsägningstid, sista arbetsdag och begäran om arbetsgivarintyg. Gratis utkast, färdigt brev 59 kr.",
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
    seoDescription: "Så anmäler du till ARN: när du kan, avgiften på 150 kr, beloppsgränser, ettårsfristen och vad anmälan ska innehålla. Gratis utkast.",
    title: "ARN-anmälan: när företaget sagt nej",
    excerpt: "Först reklamation. Sen nämnden. Inte tvärtom.",
    productSlug: "arn-anmalan",
    published: "2026-08-26",
    updated: "2026-10-15",
    body: [
      "ARN, Allmänna reklamationsnämnden, prövar tvister mellan konsument och företag. De vill se att du först har reklamerat till företaget och fått nej, eller inget svar alls.",
      "Kolla fyra saker innan du anmäler. Anmälan måste ha kommit in inom ett år från att du första gången klagade till företaget. Ditt krav måste nå upp till värdegränsen för området: 750 kr på till exempel allmänna området, elektronik och kläder, 1 500 kr för bland annat motor, möbler och resor, och 3 000 kr för bostad, bank och försäkring (se arn.se). ARN tar en avgift på 150 kr som inte betalas tillbaka. Och beslutet är en rekommendation – de flesta företag följer den, men den går inte att driva in hos Kronofogden.",
      "Skriv parter, vad du köpt och när, vad som är fel, vad du har krävt av företaget och vad de svarat, och vad du vill att ARN ska besluta. Bifoga kvitto, bilder och företagets svar.",
      "Håll känslor utanför. Nämnden läser yrkandet och bevisen, inte din recension av kundtjänsten.",
    ],
  },
  {
    slug: "fullmakt-nar-du-inte-kan-ga-sjalv",
    seoTitle: "Fullmakt – mall och vad den ska innehålla",
    seoDescription: "Så skriver du en fullmakt: vem som får göra vad, hur länge och när vittnen behövs. Gratis utkast, färdig fullmakt 59 kr.",
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

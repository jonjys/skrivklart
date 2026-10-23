/**
 * Long-form content shown under the generator on selected document pages, so the
 * page answers what people search for (and Google has something to rank).
 * Plain facts, no legal advice.
 */
export type DocArticle = {
  heading?: string;
  updated?: string;
  sources?: { label: string; url: string }[];
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  faq: { q: string; a: string }[];
};

export const DOC_ARTICLES: Record<string, DocArticle> = {
  samboavtal: {
    heading: "Samboavtal – skriv ert avtal online",
    updated: "2026-10-23",
    sources: [
      {
        label: "Sambolagen, särskilt 9 § om samboavtal",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sambolag-2003376_sfs-2003-376/",
      },
    ],
    seoTitle: "Samboavtal online – skapa avtal för 99 kr | Skrivklart",
    seoDescription:
      "Skapa samboavtal för bostadsrätt, hus och bohag. Svara på frågor och förhandsgranska början gratis. Hela avtalstexten 99 kr. Inget konto behövs.",
    intro:
      "Ett samboavtal bestämmer vad som händer med bostaden och bohaget om ni flyttar isär. Utan avtal gäller sambolagen, och den delar ofta på saker som ni själva tycker att den ena äger. Här är vad som gäller, vad avtalet ska innehålla och hur ni skriver det.",
    sections: [
      {
        h: "Vad gäller om ni inte har ett samboavtal?",
        p: [
          "Sambolagen gäller automatiskt när två personer bor tillsammans i ett parförhållande med gemensamt hushåll. Ni behöver inte anmäla något.",
          "Om ni separerar kan var och en begära bodelning. Då delas samboegendomen lika: den gemensamma bostaden och det bohag som ni skaffat för att använda tillsammans. Huvudregeln är att värdet delas lika, oavsett vem som betalade eller står på kontraktet. Har ni bott ihop kort tid kan bodelningen jämkas så att den som ägde mer får behålla mer, men det avgörs i efterhand och går inte att räkna med. Ett samboavtal kan undanta egendom från bodelning, men oskäliga villkor kan jämkas.",
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
  underhallsavtal: {
    seoTitle: "Avtal om underhållsbidrag – mall, färdigt avtal 99 kr | Skrivklart",
    seoDescription:
      "Skriv avtal om underhållsbidrag med belopp, betalningsdag och vittnesrader. Med två vittnen kan Kronofogden driva in det. Gratis utkast, färdigt avtal 99 kr.",
    intro:
      "Ett avtal om underhållsbidrag bestämmer hur mycket den förälder som inte bor med barnet ska betala varje månad, när pengarna ska vara inne och hur länge. Är avtalet skriftligt och bevittnat av två personer kan Kronofogden driva in pengarna om de slutar komma. Nedan går vi igenom hur beloppet räknas fram, vad som ska stå i avtalet, hur beloppet räknas upp varje år och vad som gäller för underhållsstöd och barn över 18.",
    sections: [
      {
        h: "Hur mycket underhållsbidrag ska betalas?",
        p: [
          "Det finns inget fast belopp i lagen. Enligt föräldrabalken ska föräldrarna stå för barnets underhåll utifrån barnets behov och sin samlade ekonomi, och dela på kostnaden efter förmåga. Den förälder som inte bor med barnet gör sin del genom att betala underhållsbidrag.",
          "Börja med barnets behov: mat, kläder, boende, fritid och annat som barnet kostar. Barnets egna inkomster och förmåner räknas också in. Den som betalar får enligt lag först behålla ett förbehållsbelopp för egna levnadskostnader: en skälig boendekostnad plus ett normalbelopp på 120 procent av prisbasbeloppet per år. För 2026 är normalbeloppet 71 040 kr om året, eller 5 920 kr i månaden. För 2027 blir det 71 520 kr om året, eller 5 960 kr i månaden.",
          "Samma beräkning brukar göras för båda föräldrarna. Det som blir kvar av inkomsten efter skatt och förbehållsbelopp är det ekonomiska utrymmet, och barnets behov delas i proportion till det. Har den som betalar andra barn som bor hemma får hen också räkna av en del för deras underhåll, och då kan bidraget bli lägre. Ett förenklat exempel: barnet behöver 6 000 kr i månaden och föräldern som inte bor med barnet har dubbelt så stort utrymme som den andra. Då står hen för två tredjedelar, och underhållsbidraget blir 4 000 kr.",
          "Enklast är att använda Försäkringskassans verktyg Beräkna underhållsbidrag. Det har förifyllda belopp för vad barn normalt kostar, baserade på Konsumentverkets beräkningar, och tar ungefär en kvart. Räkna om när någon av er får ny inkomst och när barnet blir äldre, eftersom äldre barn kostar mer. Kommer ni inte överens kan ni boka kostnadsfria samarbetssamtal hos familjerätten i kommunen. Hjälper inte det kan en domstol bestämma beloppet. Betalar den andra föräldern inget under tiden kan föräldern som barnet bor hos söka underhållsstöd hos Försäkringskassan.",
        ],
      },
      {
        h: "Det här ska stå i avtalet",
        p: [
          "Fullständiga namn och personnummer för barnet och för er båda. Skriv dem i fälten ovan, eller fyll i dem för hand innan ni skriver under. Pengarna är barnets. Föräldern som barnet bor hos tar emot dem och skriver under avtalet tillsammans med den som betalar. Har ni flera barn, skriv beloppet för varje barn för sig.",
          "Belopp per barn och månad, i kronor. Vilken dag pengarna ska vara inne och till vilket konto. Underhållsbidrag betalas i förskott för varje kalendermånad, så bidraget för december ska vara betalt senast den 30 november. Skriv därför till exempel ”senast den 25:e i månaden före” i fältet för betalning.",
          "Från vilket datum avtalet gäller och hur länge. Normalt betalas bidraget från att ni inte längre bor ihop och tills barnet fyller 18 år, eller längre om barnet går i skolan efter 18, dock längst tills barnet fyller 21. Skriv också att beloppet ändras enligt lag varje år (mer om det nedan), och annat ni kommit överens om, till exempel hur ni delar på glasögon, tandställning eller dyra fritidsaktiviteter.",
          "Försäkringskassan har en blankett, Avtal om underhållsbidrag till barn, som ni kan fylla i för hand. Här skrivs avtalet i stället med era uppgifter och det ni kommit överens om i övrigt. Fyll i fälten ovan: barnen, föräldrarna, belopp, betalningsdag och startdatum. Du ser ett utkast direkt, gratis. Hela avtalet med numrerade paragrafer, underskriftsrader och två vittnesrader kostar 99 kr, utan konto. Skrivklart ger ett färdigt underlag, inte juridisk rådgivning.",
        ],
      },
      {
        h: "Bevittnat avtal: så kan Kronofogden driva in pengarna",
        p: [
          "Ett skriftligt avtal om underhållsbidrag som två personer har bevittnat kan Kronofogden driva in på samma sätt som en dom (3 kap. 19 § utsökningsbalken). Du kan alltså vända dig direkt till Kronofogden om betalningarna uteblir, utan att först gå till domstol.",
          "Det är den betalande förälderns underskrift som ska bevittnas. Två personer skriver under på att underskriften är äkta och lägger till namnförtydligande. Välj vittnen som inte själva är parter, till exempel en vän eller en granne, och låt dem vara med när avtalet skrivs under. Spara originalet på ett säkert ställe.",
          "Utan vittnen gäller avtalet fortfarande mellan er, men Kronofogden kan inte driva in pengarna med det som grund. Detsamma gäller ett muntligt avtal, som dessutom är svårt att bevisa. Det märks ofta först när betalningarna redan har slutat komma. Då återstår att söka underhållsstöd hos Försäkringskassan eller gå till domstol.",
          "Det kostar inget att ansöka hos Kronofogden. Har du flera barn skickar du en ansökan per barn. Underhållsbidrag har förtur före andra skulder när Kronofogden utmäter lön. Rätten att kräva ut obetalt bidrag går förlorad fem år efter förfallodagen. Till skillnad från vanliga skulder stoppas den tiden inte av ett krav eller en påminnelse. Det som i regel räddar pengarna är att Kronofogden hinner göra utmätning före femårsgränsen, så vänta inte för länge.",
        ],
      },
      {
        h: "Indexering: beloppet räknas om varje februari",
        p: [
          "Ni behöver inte förhandla om prisökningar. Enligt lagen (1966:680) om ändring av vissa underhållsbidrag följer underhållsbidrag som bestämts genom avtal eller dom förändringen i prisbasbeloppet. Ändringen sker den 1 februari, och procentsatsen bestäms av Försäkringskassan. Men ingen skickar besked om det nya beloppet. Den som betalar måste själv höja betalningen. Fortsätter hen med det gamla beloppet efter en höjning kan den som tar emot pengarna ansöka hos Kronofogden om att driva in mellanskillnaden.",
          "Procentsatsen avrundas nedåt till hela procent. Den 1 februari 2025 höjdes beloppen med 2 procent, så 2 000 kr blev 2 040 kr. För 2026 blev procentsatsen 0, och beloppen ändrades inte. Prisbasbeloppet för 2027 är mindre än 1 procent högre än för 2026, så beloppen väntas inte heller ändras den 1 februari 2027.",
          "Har beloppet bestämts i november, december eller januari hoppar det över den närmaste 1 februari. Det ändras först den 1 februari efter att ett helt år har gått. Ett avtal från december 2026 ändras alltså första gången den 1 februari 2028.",
          "Skriv gärna i avtalet att beloppet ändras enligt den lagen, så att ingen blir osäker. Skriver ni i stället in en egen modell, till exempel att beloppet följer den betalande förälderns inkomst, gäller er modell och inte lagens.",
        ],
      },
      {
        h: "Underhållsstöd eller underhållsbidrag – vad är skillnaden?",
        p: [
          "Underhållsbidrag är pengar som ni föräldrar kommer överens om, eller som en domstol bestämmer. Beloppet utgår från barnets behov och er ekonomi.",
          "Underhållsstöd betalas av Försäkringskassan när barnet bor hos dig och den andra föräldern inte betalar, eller betalar för lite. Det är ett fast belopp som beror på barnets ålder, inte på er ekonomi. Under 2026 är det 1 673 kr i månaden till och med månaden barnet fyller 7 år, 1 823 kr till och med månaden barnet fyller 15 och 2 223 kr därefter. Den andra föräldern betalar sedan ett belopp till Försäkringskassan som beror på hens inkomst.",
          "Stödet lämnas tidigast från månaden före den månad du ansöker, så ansök så snart betalningarna uteblir. Betalar den andra föräldern ett underhållsbidrag som är lägre än underhållsstödet kan du få mellanskillnaden från Försäkringskassan. Betalar hen minst lika mycket i rätt tid lämnas inget underhållsstöd. Ett underhållsbidrag kan alltså bli både högre och lägre än stödet, beroende på er ekonomi.",
          "Underhållsstödet upphör normalt när den andra föräldern har betalat rätt belopp till Försäkringskassan tolv månader i följd. Då är det bra att ha ett eget avtal om underhållsbidrag klart. Finns det hot mot dig eller barnet kan du söka underhållsstöd i stället för att förhandla med den andra föräldern.",
        ],
      },
      {
        h: "Underhållsbidrag efter 18 år",
        p: [
          "Underhållsskyldigheten upphör när barnet fyller 18. Går barnet i skolan efter 18-årsdagen fortsätter den så länge skolgången pågår, men längst tills barnet fyller 21. Med skolgång menas grundskola, gymnasieskola och annan jämförlig grundutbildning. Högskolestudier räknas inte.",
          "Från 18 år betalas underhållet direkt till barnet. Försäkringskassan råder den unga och föräldern som betalar att skriva ett nytt avtal, och det vanliga är att behålla samma belopp som före 18-årsdagen. Kommer pengarna inte kan den unga själv ansöka hos Kronofogden.",
          "Den som har fyllt 18, går i grundskolan eller på gymnasiet och får studiebidrag eller förlängt barnbidrag, bor och är folkbokförd hos en av föräldrarna och inte är gift kan få förlängt underhållsstöd om den andra föräldern inte betalar. Det är 2 223 kr i månaden och lämnas längst till och med juni det år den unga fyller 20. Underhållsbidraget kan alltså gälla längre än stödet. Den unga ansöker själv, gärna några månader före 18-årsdagen.",
        ],
      },
    ],
    faq: [
      {
        q: "Måste avtalet registreras eller godkännas av socialnämnden?",
        a: "Nej, inte ett vanligt avtal där bidraget betalas varje månad. Det skickas inte heller till Försäkringskassan. Undantaget är om underhållet ska betalas som ett engångsbelopp eller för längre perioder än tre månader i taget. Då måste avtalet vara skriftligt och bevittnat av två personer, och om barnet är under 18 också godkänt av socialnämnden. Annars räknas förskottet inte som betalt, och den som betalade i förväg kan bli skyldig att betala igen.",
      },
      {
        q: "Vilka misstag ska jag undvika?",
        a: "Att vittnen saknas, så att Kronofogden inte kan använda avtalet. Att ett belopp för alla barn står ihop i stället för per barn. Att startdatum eller betalningsdag saknas. Att hela årets underhåll betalas i förskott utan socialnämndens godkännande. Att den som betalar glömmer att höja beloppet när det räknas upp. Och att pengar lämnas kontant utan kvitto. Betala via bank, så att det syns vad som betalats och när.",
      },
      {
        q: "Kan vi ändra avtalet senare?",
        a: "Ja. Enklast är att skriva ett nytt avtal som ersätter det gamla. Är ni inte överens kan domstolen jämka avtalet om förhållandena har ändrats, till exempel inkomsterna, eller om avtalet var oskäligt redan från början. Har beloppet inte ändrats på sex år, annat än genom den årliga indexeringen, kan domstolen pröva det på nytt även utan sådana skäl.",
      },
      {
        q: "Kan jag kräva underhållsbidrag för tid som redan har gått?",
        a: "Ja, men med gränser. Går du till domstol kan bidrag bestämmas för högst tre år bakåt från den dag talan väcks, om inte den andra föräldern går med på mer. Är bidraget redan bestämt i ett avtal eller en dom men inte betalt, går rätten att kräva ut det förlorad fem år efter förfallodagen.",
      },
      {
        q: "Kan vi komma överens om att inget underhåll ska betalas?",
        a: "Ni kan skriva det, men underhållsbidraget är barnets pengar. Är ett avtal om noll kronor eller ett för lågt belopp oskäligt kan domstolen jämka det, även om ni båda har skrivit under. Föräldern som barnet bor hos kan också söka underhållsstöd hos Försäkringskassan om den andra föräldern betalar mindre än stödet.",
      },
      {
        q: "Betalar man underhållsbidrag vid växelvis boende?",
        a: "Oftast inte, eftersom ni båda står för barnets kostnader när barnet bor lika mycket hos er. Skiljer sig er ekonomi mycket kan det ändå vara rimligt att den med bättre ekonomi betalar ett visst underhåll, så att barnets levnadsstandard inte skiljer sig för mycket mellan hemmen.",
      },
      {
        q: "Får den som betalar göra avdrag när barnet är hos hen?",
        a: "Ja. Är barnet hos den som betalar minst fem hela dygn i följd, eller minst sex hela dygn under en kalendermånad, får hen dra av 1/40 av månadsbeloppet för varje helt dygn. Med 2 000 kr i månaden blir det 50 kr per dygn. Avdraget måste göras inom sex månader efter den månad då vistelsen slutade, annars går det förlorat. Det gäller inte om beloppet redan är satt med hänsyn till att barnet bor mycket hos den som betalar. Har ni räknat in umgänget i beloppet, skriv det i fältet Övrigt så att det kommer med i avtalet.",
      },
      {
        q: "Är underhållsbidrag till barn skattepliktigt?",
        a: "Nej. Underhållsbidrag till barn beskattas inte hos den som tar emot det, och den som betalar får inte dra av det i deklarationen.",
      },
    ],
  },
  umgangesavtal: {
    seoTitle: "Umgängesavtal – mall för boende och umgänge (99 kr) | Skrivklart",
    seoDescription:
      "Skriv ett umgängesavtal: schema, lov, hämtning eller växelvis boende, att ta med till familjerätten. Se början av utkastet gratis, hela avtalet 99 kr.",
    intro:
      "Ett avtal om boende och umgänge, ofta kallat umgängesavtal, beskriver barnets vardag efter en separation: var barnet bor, när barnet är hos den andra föräldern, hur loven delas och vem som hämtar. Ni kan skriva det själva. Vill ni att det ska gälla som en dom kan socialnämnden i kommunen godkänna det.",
    sections: [
      {
        h: "Vårdnad, boende och umgänge – vad är skillnaden?",
        p: [
          "Vårdnad är det juridiska ansvaret för barnet och de stora besluten, som skola, vård och pass. Gifta föräldrar har gemensam vårdnad och behåller den efter en skilsmässa, om inte en domstol beslutar något annat eller ni skriver ett avtal om vårdnad som socialnämnden godkänner. Ogifta föräldrar har gemensam vårdnad bara om de har anmält det, till exempel när föräldraskapet bekräftades, eller om den har bestämts genom avtal eller dom.",
          "Boende handlar om var barnet bor. Har ni gemensam vårdnad kan barnet bo hos den ena av er eller växelvis hos er båda.",
          "Umgänge är den tid barnet har med den förälder som det inte bor hos. Det kan vara att barnet och föräldern träffas, men också annan kontakt, som telefon- och videosamtal. Umgänget är barnets rätt, inte förälderns, och ska inte ske om det strider mot barnets bästa. Ni har ett gemensamt ansvar för att barnets behov av umgänge blir tillgodosett så långt det går.",
          "Ett avtal om boende och umgänge ändrar inte vårdnaden. Har ni gemensam vårdnad fattar ni fortfarande de stora besluten tillsammans, även om barnet bor mest hos den ena.",
        ],
      },
      {
        h: "Måste avtalet godkännas av socialnämnden?",
        p: [
          "Nej, inte för att ni ska kunna följa det. Har ni gemensam vårdnad får ni själva bestämma var barnet ska bo, utan domstol eller socialnämnd. En skriftlig överenskommelse som ni båda har skrivit under gör det tydligt vad ni har kommit överens om.",
          "Skillnaden märks om ni blir oense. Ett avtal som socialnämnden har godkänt gäller på samma sätt som en dom. Följer den ena föräldern det inte kan den andra ansöka om verkställighet hos tingsrätten. En överenskommelse som inte är godkänd, muntlig eller skriftlig, kan inte verkställas.",
          "Föräldrabalken ställer två krav för att avtalet ska bli bindande och kunna verkställas: det ska vara skriftligt och socialnämnden ska godkänna det. Det gäller både boende och umgänge. Ett avtal om boende kan bara skrivas om ni har gemensam vårdnad. Ett avtal om umgänge går att skriva även om en av er har ensam vårdnad.",
        ],
      },
      {
        h: "Så går godkännandet till hos familjerätten",
        p: [
          "Avtalet prövas av socialnämnden i den kommun där barnet är folkbokfört. Kontakta familjerätten där. Ni kan komma med en färdig överenskommelse och be om godkännande, eller få hjälp att skriva avtalet hos dem. Familjerätten tar inte betalt för det. Väntetiden skiljer sig mellan kommuner, så fråga när ni bokar tid.",
          "En handläggare träffar er. Ni visar legitimation och att ni är barnets föräldrar, till exempel med personbevis. Handläggaren frågar om det finns våld, hot, missbruk eller psykisk ohälsa i familjen och tittar i socialtjänstens register. Barnet ska få information och möjlighet att säga vad det tycker, men behöver aldrig göra det. Ofta pratar handläggaren med barnet, om det inte är olämpligt. Annars kan nämnden ta reda på barnets åsikter genom er.",
          "Socialnämnden godkänner avtalet om det är till barnets bästa. Nämnden kan inte ändra i avtalet, bara säga ja eller nej, men den kan hjälpa er att formulera om sådant som är oklart. Beslutet går inte att överklaga.",
          "Avtalet gäller från den dag det godkänns, och ni får var sin bestyrkt kopia. Fram till dess kan båda ändra sig. Myndigheten för familjerätt och föräldraskapsstöd rekommenderar separata avtal för boende och umgänge och ett för varje barn, så familjerätten kan vilja skriva om er överenskommelse på sina egna blanketter. Ert avtal blir då underlaget.",
        ],
      },
      {
        h: "Växelvis boende – det här gäller",
        p: [
          "Växelvis boende betyder att barnet bor ungefär lika mycket hos er båda. Det vanliga är en vecka hos var och en, men ni kan välja en annan rytm, till exempel 2-2-5-5: två dagar hos den ena, två hos den andra och sedan fem och fem. Då är barnet aldrig borta från någon av er mer än fem dagar. Växelvis boende kräver att ni kan samarbeta och att skola, kompisar och fritid fungerar från båda adresserna.",
          "Vid växelvis boende finns inget umgänge i lagens mening, eftersom umgänge bara gäller en förälder som barnet inte bor hos. Hela schemat, loven och hämtningen ska därför stå under boendet, så tydligt att det går att följa utan att fråga.",
          "Barnet kan bara vara folkbokfört på en adress. Sover barnet ungefär lika många nätter hos er båda, och ni har gemensam vårdnad, får ni själva välja vilken. Barnbidraget kan delas mellan er. Kontrollera hos Försäkringskassan vem som får det i dag och anmäl en ändring om det behövs.",
          "Underhållsbidrag betalas normalt inte vid växelvis boende. Var och en betalar för barnets vardag under sin tid med barnet. Kom ändå överens om hur ni delar större utgifter som kläder, cykel, mobil och fritidsaktiviteter, särskilt om era inkomster skiljer sig mycket. Skriv det i en egen överenskommelse vid sidan av boendeavtalet, eftersom socialnämnden inte godkänner ekonomiska uppgörelser.",
        ],
      },
      {
        h: "Det här ska stå i avtalet",
        p: [
          "Era namn, personnummer och adresser, och barnets namn och personnummer. Har ni flera barn, skriv vad som gäller för vart och ett.",
          "Var barnet bor och ett vardagsschema med dagar och klockslag. Skriv så att en utomstående förstår, till exempel jämna veckor från torsdag efter skolan till måndag morgon när barnet lämnas på skolan. Ett avtal som ska godkännas bör vara så tydligt att det går att verkställa.",
          "Lov och högtider: jul, nyår, påsk, sportlov, höstlov, sommarlov och födelsedagar. Udda och jämna år är ett enkelt sätt att växla. Skriv också vad som gäller när ett lov krockar med vardagsschemat.",
          "Hämtning, lämning och resor: vem hämtar, var och när. Bor barnet bara hos den ena av er ska den föräldern enligt lag bidra skäligt till resorna för umgänget. Hur ni delar kostnaden kan ni skriva i en egen överenskommelse. Socialnämnden godkänner inte den delen, och den kan inte verkställas tillsammans med umgänget.",
          "Kontakt och ändringar: när barnet kan ringa eller videosamtala med den andra föräldern, hur ni meddelar ändringar och hur långt i förväg, och vad som gäller om barnet är sjukt. Vill ni prova ett schema först kan avtalet gälla en viss tid. Skriv då vad som gäller när tiden har gått ut.",
        ],
      },
      {
        h: "Vanliga misstag",
        p: [
          "För vaga formuleringar. ”Umgänge enligt överenskommelse” eller bara ”varannan helg” räcker inte den dag ni blir oense. Det som inte står i avtalet går inte att verkställa.",
          "Pengar i samma avtal. Underhållsbidrag och resekostnader hör inte hemma i det avtal som socialnämnden ska godkänna. Underhåll skrivs i ett eget skriftligt avtal, som i regel inte behöver godkännas. Ska bidraget betalas som ett engångsbelopp eller för mer än tre månader i taget krävs två vittnen och socialnämndens godkännande. Skrivklart har ett eget avtal om underhållsbidrag.",
          "Att tro att vanan ändrar avtalet. Ett godkänt avtal gäller tills ett nytt avtal har godkänts eller en domstol har beslutat något annat, även om ni i praktiken följer ett annat schema. Har barnet länge levt på ett annat sätt kan tingsrätten vägra verkställa det gamla avtalet om det uppenbart strider mot barnets bästa. Vill ni att ändringen ska gälla, låt socialnämnden godkänna ett nytt avtal.",
        ],
      },
      {
        h: "Skriv avtalet här",
        p: [
          "Formuläret ovan frågar efter barn, boende, schema, lov och hämtning. Namn, personnummer och adresser fyller ni i på raderna i avtalet. Början av avtalet ser ni direkt, gratis. Hela överenskommelsen med numrerade punkter och underskriftsrader kostar 99 kr.",
          "Läs igenom den tillsammans, skriv under och ta med den till familjerätten om ni vill ha den godkänd. Skrivklart ger ett utkast, inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Måste ett umgängesavtal godkännas av socialnämnden?",
        a: "Nej, ni kan följa en egen överenskommelse. Men bara ett avtal som är skriftligt och godkänt av socialnämnden gäller som en dom och kan verkställas om den andra föräldern inte följer det.",
      },
      {
        q: "Vad händer om den andra föräldern inte följer avtalet?",
        a: "Är avtalet godkänt kan du ansöka om verkställighet hos tingsrätten där barnet bor. Tingsrätten försöker först få till en frivillig lösning och kan utse en medlare. Annars kan den till exempel besluta om vite. Tingsrätten tar hänsyn till barnets vilja och vägrar verkställighet som uppenbart strider mot barnets bästa. Ett avtal som inte är godkänt kan inte verkställas.",
      },
      {
        q: "Vad gör jag om den andra föräldern inte vill skriva på?",
        a: "Då finns inget avtal att godkänna. Kommunen ska erbjuda samarbetssamtal, där en samtalsledare hjälper er att hitta en lösning. Samtalen är frivilliga och kostnadsfria. Vill någon av er gå till tingsrätten måste den i regel först ha deltagit i ett informationssamtal hos kommunen, högst ett år innan. Ansökningsavgiften i tingsrätten är 900 kr.",
      },
      {
        q: "Kan vi ändra ett godkänt avtal?",
        a: "Ja, genom ett nytt avtal som socialnämnden godkänner eller genom ett domstolsbeslut. Tills dess gäller det gamla avtalet.",
      },
      {
        q: "Hur ser ett vanligt umgänge ut?",
        a: "Det finns ingen norm i lagen. Ni bestämmer utifrån vad som är bäst för just ert barn. Varannan helg, ofta med en kväll i veckan däremellan, är ett vanligt upplägg. För små barn fungerar ofta kortare och tätare träffar bättre.",
      },
      {
        q: "Från vilken ålder får barnet bestämma själv?",
        a: "Det finns ingen fast ålder. Barnet ska få säga vad det tycker, och åsikterna väger tyngre ju äldre och mognare barnet är. Avgörande är alltid barnets bästa.",
      },
      {
        q: "Vad kostar avtalet hos Skrivklart?",
        a: "Början av avtalet kan ni läsa gratis. Hela avtalet kostar 99 kr, en gång. Det ingår också i Familjepaketet för 149 kr. Inget konto eller abonnemang.",
      },
    ],
  },
  overklagande: {
    heading: "Skriv en begäran om omprövning eller ett överklagande",
    updated: "2026-10-23",
    seoTitle: "Skriv överklagande eller omprövning – 99 kr | Skrivklart",
    seoDescription:
      "Begär omprövning eller överklaga beslut från Försäkringskassan, a-kassan, CSN eller kommunen. Frister, vad du ska skriva, gratis utkast. Hela texten 99 kr.",
    intro:
      "Har du fått ett beslut som du tycker är fel kan du be myndigheten att titta på det igen, eller låta en domstol pröva det. Det kallas omprövning och överklagande. Fristen är kort, ofta tre veckor eller två månader, och den räknas från dagen du fick beslutet. Så här fungerar det hos Försäkringskassan, a-kassan, CSN och kommunen: fristerna, vad texten ska innehålla och vad som händer sedan.",
    sections: [
      {
        h: "Omprövning eller överklagande – vad är skillnaden?",
        p: [
          "Vid en omprövning går samma myndighet igenom ditt ärende en gång till. Hos Försäkringskassan görs det av en annan handläggare än den som fattade beslutet.",
          "Vid ett överklagande är det en domstol, oftast förvaltningsrätten, som prövar om beslutet är rätt. Överklagandet skickar du ändå till myndigheten som fattade beslutet. Den skickar det vidare.",
          "Försäkringskassan, Pensionsmyndigheten och a-kassan måste ompröva sina beslut innan de kan överklagas. Skriver du ”överklagande” för tidigt räknas det som en begäran om omprövning, så hos dem spelar rubriken ingen roll. Hos CSN och kommunen skriver du ett överklagande och skickar det inom tre veckor. Myndigheten tittar då först på beslutet själv och skickar sedan ärendet vidare.",
          "Vid omprövning hos Försäkringskassan eller a-kassan får beslutet inte ändras till din nackdel.",
        ],
      },
      {
        h: "Hur lång tid har du på dig?",
        p: [
          "Fristen står i beslutet, i stycket om hur du överklagar. Myndigheten måste tala om det. Fristen räknas från dagen du fick beslutet, inte från datumet som står på det. Fick du beslutet den 14 mars och fristen är två månader, ska din text ha kommit in senast den 14 maj.",
          "Försäkringskassan och Pensionsmyndigheten: två månader för att begära omprövning, räknat från dagen du fick beslutet. Är du inte nöjd med omprövningsbeslutet har du två månader till på dig att överklaga det, räknat från dagen du fick omprövningsbeslutet. A-kassan har samma frister.",
          "CSN och kommunen, till exempel socialtjänstens beslut om ekonomiskt bistånd: tre veckor. Det är också huvudregeln i förvaltningslagen för de flesta myndighetsbeslut. Skatteverket är ett undantag. Beslut om din slutliga skatt, alltså deklarationen, kan du begära omprövning av eller överklaga till och med det sjätte året efter inkomståret. Många andra beslut från Skatteverket, till exempel om betalning av skatt, har en frist på två månader. Fristen står i beslutet.",
          "Texten måste ha kommit fram till myndigheten senast sista dagen. Det räcker inte att den är postad. Är sista dagen en lördag, söndag, helgdag, midsommarafton, julafton eller nyårsafton räcker det att den kommer in nästa vardag. Kommer den in för sent avvisas den som huvudregel, och då prövas inte saken. Undantagen står under frågorna längre ner.",
        ],
      },
      {
        h: "Det här ska stå i texten",
        p: [
          "Dina uppgifter: namn, personnummer, adress, telefonnummer och mejladress. Sedan vilket beslut det gäller, med datum och ärendenummer eller diarienummer.",
          "Vad du vill ska hända. Skriv det rakt ut, till exempel att beslutet ska ändras och att bostadsbidrag ska beviljas från ett visst datum. Det kallas yrkande. Utan yrkande vet myndigheten inte vad du begär.",
          "Varför beslutet är fel. Läs motiveringen i beslutet. Där ska det stå vilka regler och vilka omständigheter som avgjorde. Bemöt dem en i taget: vad som saknades, vad som bedömts fel och vad som visar det. Bifoga kopior på intyg, avtal eller lönebesked och behåll originalen.",
          "Avsluta med ort, datum och underskrift, och spara en kopia. I formuläret ovan fyller du i myndighet, vad beslutet säger, varför det är fel, vad du vill ska hända och om beslutet redan har omprövats. Utifrån det blir texten en begäran om omprövning eller ett överklagande. Du ser början av texten direkt, gratis. Hela texten med bakgrund, grunder, bevisning och yrkande kostar 99 kr. Namn, personnummer och ärendenummer fyller du i där det står hakparenteser, och läs igenom innan du skickar. Skrivklart ger inte juridisk rådgivning.",
        ],
      },
      {
        h: "Försäkringskassan, CSN och kommunen",
        p: [
          "Försäkringskassan: Begär omprövning skriftligt, med Försäkringskassans blankett eller i ett eget brev. Försäkringskassan siktar på att du ska få omprövningsbeslutet inom sex veckor, men det kan ta längre tid. Är du fortfarande inte nöjd överklagar du omprövningsbeslutet. Skicka överklagandet till Försäkringskassan, som lämnar det vidare till förvaltningsrätten där du bor.",
          "CSN: Ditt överklagande ska ha kommit in till CSN inom tre veckor. CSN gör först en ny prövning och skickar sedan ärendet vidare, oavsett om beslutet ändras eller inte. Gäller det studiestöd går det till Överklagandenämnden för studiestöd, vars beslut inte går att överklaga vidare. Gäller det återbetalning av lån går det till förvaltningsrätten.",
          "Hos CSN gäller det gamla beslutet tills du fått ett nytt. Har du en betalningsplan fortsätter du att betala enligt den under tiden.",
          "Kommunen: Beslut om bistånd från socialtjänsten, till exempel ekonomiskt bistånd eller hemtjänst, överklagar du till förvaltningsrätten. Skicka överklagandet till kommunen inom tre veckor. Det krävs ingen blankett, du skriver själv. Kommunen kan i vissa fall ändra beslutet själv, men överklagandet skickas ändå vidare till förvaltningsrätten tillsammans med det nya beslutet. Alla beslut från socialtjänsten går inte att överklaga på det sättet, men kan beslutet överklagas ska det stå i beslutet hur du gör.",
        ],
      },
      {
        h: "Vanliga misstag",
        p: [
          "Att vänta. Många väntar på ett nytt läkarintyg eller ett papper från arbetsgivaren och missar fristen. Skicka in i tid och skriv att du kommer att komplettera, med vad och ungefär när.",
          "Att beskriva hur jobbigt allt är i stället för vad som är fel. Handläggare och domare letar efter uppgifter som saknas eller har bedömts fel. Skriv om dem.",
          "Att glömma vad du vill ska hända. Ett överklagande ska ange hur beslutet ska ändras. Skriv det i en egen mening, gärna först eller sist.",
          "Att gissa vad beslutet bygger på. Du har rätt att ta del av allt material i ditt ärende. Är motiveringen oklar, be om materialet direkt, men låt inte väntan få dig att missa fristen. Ett annat misstag är att skicka texten direkt till domstolen. Skicka den till myndigheten som fattade beslutet.",
        ],
      },
      {
        h: "Vad händer i förvaltningsrätten?",
        p: [
          "När myndigheten har skickat vidare ditt överklagande får du ett brev från förvaltningsrätten. Du kallas nu klagande, och myndigheten är din motpart.",
          "Målet handläggs i regel skriftligt. Myndigheten får yttra sig, och domstolen skickar det till dig så att du kan svara. Du kan också begära muntlig förhandling. Förvaltningsrätten ska hålla en om du begär det, om det inte är uppenbart obehövligt.",
          "Det kostar inget att få sitt överklagande prövat. Anlitar du ett ombud betalar du det själv.",
          "Domstolen kan låta beslutet stå kvar, ändra det eller skicka tillbaka ärendet till myndigheten för ett nytt beslut. Är du inte nöjd kan du oftast överklaga till kammarrätten, men då krävs prövningstillstånd. Hur och när står i avgörandet.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur lång tid har jag på mig att överklaga Försäkringskassan?",
        a: "Två månader för att begära omprövning, räknat från dagen du fick beslutet. Efter omprövningen har du två månader till, räknat från dagen du fick omprövningsbeslutet, för att överklaga till förvaltningsrätten.",
      },
      {
        q: "Måste jag begära omprövning innan jag överklagar?",
        a: "Hos Försäkringskassan, Pensionsmyndigheten och a-kassan, ja. Ett överklagande som kommer in innan beslutet har omprövats räknas som en begäran om omprövning. Hos kommunen och CSN skriver du ett överklagande direkt och skickar det till myndigheten som fattade beslutet.",
      },
      {
        q: "Vad händer om jag missar fristen?",
        a: "Då avvisas ditt överklagande eller din begäran om omprövning, och saken prövas inte. Det finns undantag: om myndigheten inte informerade rätt om hur du överklagar, eller om ditt överklagande kom in i tid till domstolen i stället för till myndigheten. Missade du fristen av en giltig ursäkt, till exempel allvarlig sjukdom, kan du ansöka om att få fristen återställd. Har du nya uppgifter, hör ändå av dig till myndigheten och fråga vad som går att göra.",
      },
      {
        q: "Kostar det något att överklaga?",
        a: "Nej. Det kostar inget att begära omprövning, och förvaltningsrätten tar inte ut någon avgift för att pröva ett överklagande. Anlitar du ett ombud betalar du det själv.",
      },
      {
        q: "Gäller beslutet medan jag väntar på svar?",
        a: "Oftast ja. Beslutet gäller tills det har ändrats. Tar beslutet något ifrån dig, till exempel ett återkrav eller en indragen ersättning, kan du be den som prövar överklagandet, oftast förvaltningsrätten, att beslutet tills vidare inte ska gälla. Det kallas inhibition. Vid ett avslag finns det inget att stoppa, så då hjälper det inte.",
      },
      {
        q: "Kan beslutet bli sämre om jag begär omprövning?",
        a: "Inte hos Försäkringskassan eller a-kassan. Lagen säger att beslutet inte får ändras till din nackdel vid omprövningen.",
      },
      {
        q: "Behöver jag en jurist för att överklaga?",
        a: "Nej. De flesta skriver själva. Myndigheten är skyldig att hjälpa dig så att du kan ta till vara din rätt, så ring och fråga hur du gör. Förvaltningsrätten ska dessutom se till att målet blir tillräckligt utrett och kan be dig förtydliga det som är oklart.",
      },
      {
        q: "Hur lång tid tar det i förvaltningsrätten?",
        a: "Det varierar mellan domstolar och måltyper, men räkna med flera månader. Förvaltningsrätten i Malmö anger till exempel ungefär 6–7 månader för mål om bistånd från socialtjänsten och 12–13 månader för socialförsäkringsmål (2026). Varje förvaltningsrätt publicerar sina ungefärliga handläggningstider på domstol.se.",
      },
    ],
  },
  avbetalningsplan: {
    seoTitle: "Avbetalningsplan hos inkasso – brev och mall (59 kr) | Skrivklart",
    seoDescription:
      "Be inkassobolaget om en avbetalningsplan med ett konkret förslag: belopp, startdatum och skriftlig bekräftelse. Gratis utkast, färdigt brev för 59 kr.",
    intro:
      "En begäran om avbetalningsplan är ett kort brev till den du är skyldig pengar. Där skriver du hur mycket du kan betala varje månad och från vilket datum. Ingen är skyldig att säga ja, men ett rimligt förslag som kommer i tid har bäst chans. Här är vad som gäller, vad brevet ska innehålla och vad som händer om skulden går vidare till Kronofogden.",
    sections: [
      {
        h: "När ska du be om en avbetalningsplan?",
        p: [
          "Så fort du vet att du inte kan betala hela beloppet. Det kan gälla en faktura som snart förfaller, ett krav från ett inkassobolag eller en skuld som har sålts vidare och nu hanteras av en kreditförvaltare. Ju tidigare du hör av dig, desto färre avgifter och desto mindre risk att skulden går vidare till Kronofogden.",
          "Ett inkassokrav ska ge dig rimlig tid att betala eller invända. Finansinspektionen har tillsyn över inkassobolagen. Enligt deras regler bör tiden vara minst åtta dagar från att kravet skickades med vanlig post och minst sex dagar med digital post. Du bör alltid ha minst fyra bankdagar på dig, räknat från den dag du kan antas ha fått kravet. Skicka din begäran före sista dagen i kravet.",
          "Ett inkassokrav ger ingen betalningsanmärkning. Den risken kommer först om skulden går vidare till Kronofogden och du inte betalar eller invänder där.",
        ],
      },
      {
        h: "Kan inkassobolaget säga nej?",
        p: [
          "Ja. Det finns ingen lag som ger dig rätt till en avbetalningsplan. Den som ska ha betalt bestämmer. Enligt Kronofogden spelar det in om du har arbete, hur stor inkomsten är, hur mycket du är skyldig och om du har andra skulder.",
          "Det finns däremot regler för hur det ska gå till. Enligt Finansinspektionens regler om god inkassosed bör inkassobolaget fråga om din ekonomi när de gör en plan. De bör också låta dig säga vad du tycker om upplägget. När ni är överens ska du få en skriftlig bekräftelse. Så länge du betalar enligt planen bör de inte skicka nya krav eller gå vidare till Kronofogden.",
          "Får du nej kan du fråga vad de kan gå med på, och lägga ett nytt förslag om du kan. Du kan också betala en del av skulden direkt. Då minskar skulden, men ärendet kan fortfarande gå vidare.",
        ],
      },
      {
        h: "Det här ska stå i brevet",
        p: [
          "Ditt namn och dina kontaktuppgifter, vem du skriver till och ärendenumret eller fakturanumret. Skriv vad skulden gäller och beloppet så som det står i kravet.",
          "Ditt förslag: ett fast belopp per månad, vilken dag i månaden du betalar och datum för första betalningen. Räkna på din budget först. Hyra, el och mat går före. Ett lägre belopp som du klarar varje månad är bättre än ett högre som du missar. Men beloppet måste stå i rimlig proportion till skulden: ett förslag som knappt täcker räntan betalar aldrig av den och är svårt att få igenom. En plan som inte håller kan göra det svårare att få en ny.",
          "Kort varför. Två eller tre meningar räcker, till exempel att du är ensam med två barn och att inkomsten inte räcker till hela beloppet just nu. Du behöver inte berätta mer än så.",
          "Be om tre saker: en skriftlig bekräftelse på planen, att de väntar med Kronofogden så länge du betalar och att inga fler avgifter läggs på under planen, utöver den lagliga avgiften för att upprätta själva planen. Lagen begränsar redan vad ett inkassobolag får ta betalt för: påminnelse, inkassokrav och planen. Annat inkassoarbete får de inte ta betalt av dig för. Däremot löper räntan vidare, aviseringsavgifter kan tillkomma om det står i avtalet, och går ärendet till Kronofogden läggs bland annat en ansökningsavgift på 300 kr på skulden.",
          "Håller du inte med om skulden, eller bara om en del av den, skriv det tydligt. En begäran om avbetalningsplan, liksom en delbetalning, räknas normalt som att du erkänner skulden. Det avbryter också preskriptionen, så en gammal skuld får ny preskriptionstid. För köp och tjänster du gjort som privatperson är den tre år. Är du osäker på om kravet stämmer, eller om skulden kan vara för gammal, ta reda på det innan du ber om en plan. Ett krav som du anser är fel ska du i stället bestrida skriftligt, och förklara varför.",
        ],
      },
      {
        h: "Avgifter och ränta under planen",
        p: [
          "Lagen om ersättning för inkassokostnader sätter tak för avgifterna. Ett inkassokrav får som regel kosta högst 180 kr. För att upprätta en avbetalningsplan (i lagen kallas den amorteringsplan) får inkassobolaget ta ut högst 170 kr, om planen har gjorts tillsammans med dig och skickats till dig skriftligt. En påminnelseavgift på högst 60 kr får bara tas ut om det avtalades senast när skulden uppstod, i praktiken i avtalet eller villkoren.",
          "Dröjsmålsräntan löper tills skulden är betald. Har ni inte avtalat något annat är den referensräntan plus åtta procentenheter. Du kan fråga om de kan sänka eller stoppa räntan under planen. Det måste de inte gå med på. Ju längre planen är, desto mer betalar du totalt.",
          "Läs bekräftelsen innan du börjar betala. Enligt Finansinspektionen bör den visa skulden, räntan och avgifterna var för sig. Den bör också visa hur många betalningar det blir och när, vad du betalar totalt och hur planen upphör.",
          "Kan du inte betala en månad, hör av dig före förfallodagen. Missar du en betalning utan att säga till kan planen upphöra, och då kan ärendet gå vidare till Kronofogden.",
        ],
      },
      {
        h: "Om skulden redan har gått till Kronofogden",
        p: [
          "Har du fått ett betalningsföreläggande kan du fortfarande vända dig till den som har ansökt, oftast inkassobolaget, och be om en avbetalningsplan. Men en överenskommelse stoppar inte ärendet av sig själv. Be uttryckligen om att ansökan hos Kronofogden dras tillbaka, och få det skriftligt. Enligt Finansinspektionens regler ska ett inkassobolag snarast återkalla ansökan när ni har kommit överens om en plan, om ni inte har avtalat något annat.",
          "Håll koll på tidsfristen i brevet från Kronofogden under tiden. Bestrid bara om du anser att kravet är fel. Att du inte har råd räcker inte som skäl. Om ärendet går till domstol och du förlorar kan du dessutom få betala motpartens rättegångskostnader.",
          "Betalar eller bestrider du inte i tid kan Kronofogden besluta att du ska betala. Det beslutet kallas utslag. Då kan du få en betalningsanmärkning. Den registreras av kreditupplysningsföretagen och finns kvar i tre år. Den kan göra det svårare att hyra bostad, låna pengar eller teckna abonnemang.",
          "Har Kronofogden redan börjat driva in skulden (verkställighet) kan de inte besluta om en avbetalningsplan för skulder till företag eller privatpersoner. Du får fråga den du är skyldig. De kan begära uppskov hos Kronofogden eller dra tillbaka ärendet. För skulder till staten, som skatt, beviljar Kronofogden avbetalning bara i sällsynta fall. Har du fått ett återkrav från Försäkringskassan kan du ansöka hos Försäkringskassan om en avbetalningsplan, som regel på högst tolv månader. Gör det före förfallodagen, då slipper du uppläggningsavgiften. Ränta tillkommer på det du delar upp.",
        ],
      },
      {
        h: "Gratis hjälp från kommunen",
        p: [
          "Alla kommuner har budget- och skuldrådgivning. Den är gratis och rådgivarna har tystnadsplikt. De kan hjälpa dig att göra en budget, prioritera skulderna och kontakta dem du är skyldig. De kan också hjälpa dig att ansöka om skuldsanering hos Kronofogden om det behövs.",
          "Sök på ditt postnummer på Konsumentverkets webbplats, så får du kontaktuppgifter till rådgivningen i din kommun.",
        ],
      },
      {
        h: "Så skriver du brevet här",
        p: [
          "Fyll i fälten ovan: vem du skriver till, skulden, ditt förslag och kort varför. Du väljer ton och ser ett utkast direkt, gratis. Hela brevet kostar 59 kr, en gång. Inget konto.",
          "Brevet hänvisar till ärendet, lägger fram ditt förslag och ber om en skriftlig bekräftelse. Ditt namn och dina kontaktuppgifter fyller du i själv där brevet har hakparenteser, innan du skickar det. Skicka det via mejl eller inkassobolagets webbformulär så att du har en kopia, och spara svaret. Skrivklart ger ett utkast, inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Kan inkassobolaget säga nej till en avbetalningsplan?",
        a: "Ja. Du har ingen lagstadgad rätt till en avbetalningsplan, det är den som ska ha betalt som bestämmer. Ett konkret förslag med belopp och startdatum som kommer före sista betalningsdagen har bäst chans.",
      },
      {
        q: "Får man en betalningsanmärkning av ett inkassokrav?",
        a: "Nej. För privatpersoner kan en betalningsanmärkning komma när Kronofogden har beslutat att du ska betala (utslag) eller när en domstol har dömt att du ska betala. Den kan också komma när det finns obetalda skulder till staten eller kommunen hos Kronofogden, till exempel skatt eller felparkeringsavgifter, eller när en skuldsanering inleds. Anmärkningen finns kvar i tre år.",
      },
      {
        q: "Kan Kronofogden ge mig en avbetalningsplan?",
        a: "Inte för skulder till företag eller privatpersoner. Där får du fråga den du är skyldig, även om ärendet redan är hos Kronofogden. För skulder till staten, som skatt, beviljar Kronofogden avbetalning eller uppskov bara i sällsynta fall.",
      },
      {
        q: "Vad kostar en avbetalningsplan hos inkasso?",
        a: "Inkassobolaget får ta ut högst 170 kr för att upprätta en skriftlig plan tillsammans med dig. Dessutom löper ränta tills skulden är betald. Bekräftelsen bör visa vad du betalar totalt.",
      },
      {
        q: "Vad händer om jag missar en betalning?",
        a: "Det beror på villkoren i bekräftelsen. Planen kan upphöra och ärendet gå vidare till Kronofogden. Kan du inte betala en månad, hör av dig före förfallodagen och föreslå en lösning.",
      },
      {
        q: "Kan inkassobolaget ändra en plan vi redan har kommit överens om?",
        a: "Planen är en överenskommelse och gäller för båda. Så länge du betalar enligt den bör inkassobolaget inte skicka nya krav eller gå vidare till Kronofogden. Vill de ändra något, be att få det skriftligt och hänvisa till bekräftelsen du fick. Missar du betalningar kan de däremot säga upp planen, på det sätt som står i bekräftelsen.",
      },
      {
        q: "Måste jag betala om jag inte håller med om skulden?",
        a: "Inte om du har goda skäl, till exempel att du redan har betalat eller aldrig beställde varan. Bestrid kravet skriftligt och förklara varför. Inkassobolaget ska då utreda saken, och vid en saklig invändning får de inte ansöka om betalningsföreläggande hos Kronofogden. Vill de driva kravet vidare måste de i stället stämma dig i tingsrätten, där tvisten prövas. Be inte om en avbetalningsplan för en skuld du inte erkänner.",
      },
      {
        q: "Är det bättre att ringa eller skriva?",
        a: "Båda går. Skriv gärna, eller bekräfta det ni kom överens om i ett mejl efteråt, så att det finns svart på vitt. När planen är klar ska inkassobolaget ge dig en skriftlig bekräftelse.",
      },
    ],
  },
  socialtjansten: {
    seoTitle: "Brev till socialtjänsten – försörjningsstöd (59 kr) | Skrivklart",
    seoDescription:
      "Skriv till socialtjänsten: ansökan om försörjningsstöd, komplettering eller akut behov, och hur du överklagar. Gratis utkast, färdigt brev för 59 kr.",
    intro:
      "Ekonomiskt bistånd söker du hos socialtjänsten i kommunen där du bor. Ett tydligt brev gör det lättare för handläggaren att förstå ditt läge och svårare att missa något. Här är vad som gäller för försörjningsstöd, vad brevet ska innehålla, vad du gör när det är akut och hur du överklagar ett beslut. Gäller det en orosanmälan om ett barn är det något annat. Kontakta då socialtjänsten i kommunen där barnet bor.",
    sections: [
      {
        h: "Vad är ekonomiskt bistånd och försörjningsstöd?",
        p: [
          "Ekonomiskt bistånd är kommunens stöd när du inte kan klara din försörjning på något annat sätt. Rätten till bistånd står i socialtjänstlagen, och hjälpen ska ge en skälig levnadsnivå.",
          "Biståndet har två delar. Försörjningsstöd gäller de vanliga kostnaderna varje månad: en riksnorm för mat, kläder och skor, fritid, förbrukningsvaror, hälsa och hygien samt dagstidning och telefon, plus rimliga kostnader för boende, hushållsel, hemförsäkring, arbetsresor, fackavgift och a-kassa. Den andra delen gäller enstaka behov, till exempel tandvård, glasögon, medicin, umgänge med barn eller flytt.",
          "Du ska först försöka klara dig själv. I regel kan du inte få bistånd så länge du har pengar på banken eller andra tillgångar. Du ska också först söka andra ersättningar som bostadsbidrag, underhållsstöd, sjukpenning eller föräldrapenning. Kan du arbeta ska du söka jobb och delta i de insatser som kommunen eller Arbetsförmedlingen erbjuder. Det kallas att stå till arbetsmarknadens förfogande. Bor du med make eller sambo räknas hushållets inkomster och kostnader ihop.",
          "Riksnormen för 2026 är 5 220 kr i månaden för en ensamstående vuxen och 8 510 kr för sammanboende, plus belopp för barn. Boende, el och de andra kostnaderna läggs till, och hushållets inkomster dras av. Socialstyrelsen har en provberäkning på sin webbplats som ger en fingervisning. Det är ändå kommunens bedömning av just ditt hushåll som avgör.",
        ],
      },
      {
        h: "Vad ska stå i brevet till socialtjänsten?",
        p: [
          "Söker du för första gången, ring socialtjänstens mottagning. I många kommuner börjar det så, ofta följt av ett besök, innan du kan söka i e-tjänsten eller på blankett. Finns det en blankett eller e-tjänst, använd den. Ett eget brev är bra när läget behöver förklaras, när du kompletterar en ansökan, när något är bråttom eller när du vill be om ett möte.",
          "Börja med ditt namn, personnummer, adress och telefonnummer, och diarienummer om du har ett. Beskriv sedan hushållet kort: vilka som bor hos dig, barnens åldrar, vilka inkomster ni har och vad som har förändrats.",
          "Skriv exakt vad du söker, för vilken månad och hur mycket. ”Hyra för december, 7 400 kr” är tydligare än ”hjälp med hyran”. I många kommuner söker man försörjningsstöd en månad i taget. Räkna upp bilagorna, till exempel hyresavi, kontoutdrag, lönebesked och beslut från Försäkringskassan.",
          "Avsluta med att du ber om ett skriftligt beslut. Skriv sakligt och utan att be om ursäkt. Spara en kopia av allt du skickar och skriv upp datumet.",
          "Här på sidan fyller du i vad det gäller, ditt läge, vad du söker och vilka bilagor du har. Du ser ett utkast direkt, gratis. Hela brevet, med rubrik, plats för diarienummer, bilageförteckning och begäran om skriftligt beslut, kostar 59 kr. Inget konto.",
        ],
      },
      {
        h: "När det är akut: hyra, mat eller el",
        p: [
          "Har du inte pengar till mat, ska elen stängas av eller förfaller hyran inom några dagar? Skriv det överst i brevet, med datum. Ring också socialtjänsten samma dag, eftersom ett brev kan bli liggande innan någon hinner läsa det.",
          "Kommunen har det yttersta ansvaret för att den som behöver hjälp får det. Är du tillfälligt i en annan kommun när något akut händer, är det den kommunen som ansvarar för den akuta hjälpen.",
          "Har du fått en uppsägning för obetald hyra kan du oftast få bo kvar om skulden betalas inom tre veckor. Fristen räknas från att du fick beskedet om att du kan få tillbaka bostaden genom att betala, som oftast kommer tillsammans med uppsägningen. Hyresvärden ska som regel också meddela socialtjänsten. Ett viktigt undantag: hyr du av en privatperson och avtalet började gälla den 1 juli 2026 eller senare, behöver hyresvärden inte meddela socialtjänsten, och du kan inte få tillbaka bostaden genom att betala i efterhand. Kontakta socialtjänsten direkt och bifoga uppsägningen.",
          "Gäller det el, bifoga brevet där det står när elen stängs av och hur mycket som är obetalt.",
        ],
      },
      {
        h: "Be om ett skriftligt beslut",
        p: [
          "Du har rätt att ansöka och att få ett beslut. Får du helt eller delvis avslag ska beslutet vara skriftligt och motiverat. Enligt förvaltningslagen ska du alltid få beslutet skriftligt om du ber om det.",
          "Beslutet ska visa vad du har fått och inte fått, vilka skäl socialtjänsten har haft och hur du överklagar. Får du bara ett nej i telefon eller på ett möte, skriv och be om ett skriftligt beslut. Utan beslut finns inget att överklaga.",
          "Du har rätt att läsa det som finns i ditt ärende. Står något fel i socialtjänstens anteckningar, säg det, så ska det antecknas. Du får också ta med en person som stöd eller låta någon vara ditt ombud.",
        ],
      },
      {
        h: "Så överklagar du socialtjänstens beslut",
        p: [
          "Beslut om ekonomiskt bistånd enligt socialtjänstlagen kan överklagas till förvaltningsrätten. Det gäller också beslut om att neka eller sätta ned försörjningsstödet för att du inte deltagit i en aktivitet. Läs beslutet först. Där står hur du överklagar.",
          "Överklagandet ska ha kommit in inom tre veckor från den dag du fick del av beslutet. Skicka det till kommunen som fattade beslutet, inte till domstolen. Kommunen kontrollerar att det kommit in i tid och skickar det vidare till förvaltningsrätten.",
          "Det finns ingen blankett. Skriv vilket beslut du överklagar med datum och diarienummer, hur du vill att det ändras och varför du anser att det är fel. Bifoga det som visar det, och skriv dina kontaktuppgifter. Förvaltningsrätten tar inte ut någon avgift.",
          "Du kan söka bistånd för nästa månad medan överklagandet prövas. Förvaltningsrättens dom kan i sin tur överklagas till kammarrätten, men där krävs prövningstillstånd. För själva överklagandet finns ett eget dokument här på Skrivklart. Skrivklart ger ett skarpt utkast, inte juridisk rådgivning.",
        ],
      },
      {
        h: "Nytt från juli 2026: aktivitetskrav och läkarintyg",
        p: [
          "Sedan den 1 juli 2026 finns ett aktivitetskrav i socialtjänstlagen. Har du haft försörjningsstöd i minst tre månader i följd ska socialtjänsten som huvudregel begära att du deltar i aktiviteter som för dig närmare arbete eller studier. Kommunerna måste ställa kravet från och med försörjningsstödet för oktober 2026. Socialtjänsten får ställa ett krav redan tidigare, men då för kortare tid, och även det kravet måste du följa.",
          "Kravet får vara högst 40 timmar i veckan och ska utgå från vad du klarar. Finns det barn i hushållet som är under åtta år, eller äldre men ännu inte har avslutat första skolåret, minskas tiden med tio timmar i veckan. Barnet behöver inte vara ditt eget. Aktiviteterna ska också anpassas efter när det finns förskola eller fritids.",
          "Vissa omfattas inte av kravet: den som är under 18 år eller är 18–20 år och går i grund- eller gymnasieskolan, den som arbetar, går ett program hos Arbetsförmedlingen eller läser sfi på heltid, den som har nått riktåldern för pension och den som är föräldraledig med ett barn under ett år. Har du sjukpenning, sjukersättning eller aktivitetsersättning gäller undantaget i den omfattning du har ersättningen.",
          "Avböjer du en aktivitet eller uteblir utan godtagbart skäl ska försörjningsstödet nekas eller sättas ned. Godtagbara skäl kan vara sjukdom, vård av sjukt barn eller en kallelse från en annan myndighet. Tackar du nej till en aktivitet för att du är sjuk krävs läkarintyg, oavsett hur länge du är sjuk. Uteblir du från en aktivitet som du redan går på krävs läkarintyg om du är sjuk mer än sju dagar i följd. Socialtjänsten kan begära intyg tidigare om det finns särskilda skäl.",
          "Från den 1 januari 2027 ändras riksnormen. Dagstidning och telefon ersätts av internet och telefoni, och försörjningsstödet begränsas för hushåll med fler än tre hemmavarande barn och skolungdomar under 21 år. Fråga din handläggare vad det betyder för er.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur lång tid har jag på mig att överklaga socialtjänstens beslut?",
        a: "Tre veckor från den dag du fick del av beslutet. Skicka överklagandet till kommunen som fattade beslutet. Kommunen skickar det vidare till förvaltningsrätten.",
      },
      {
        q: "Måste jag använda kommunens blankett?",
        a: "Finns det en blankett eller e-tjänst, använd den. Söker du för första gången börjar det i många kommuner med ett samtal till socialtjänstens mottagning. Ett eget brev kan du lägga till för att förklara läget, komplettera ansökan eller visa att något är akut.",
      },
      {
        q: "Kan socialtjänsten säga nej utan ett skriftligt beslut?",
        a: "Du har rätt att få din ansökan prövad och att få ett beslut. Ett helt eller delvis avslag ska vara skriftligt och motiverat. Har du bara fått ett muntligt nej, be skriftligt om ett beslut.",
      },
      {
        q: "Hur lång tid tar det att få beslut om försörjningsstöd?",
        a: "Det finns ingen fast tidsgräns, men ansökan ska handläggas skyndsamt. Är det akut, säg det direkt. Har ärendet inte avgjorts inom sex månader kan du enligt förvaltningslagen skriftligen begära att kommunen avgör det.",
      },
      {
        q: "Måste jag söka bostadsbidrag och underhållsstöd först?",
        a: "Ja. Du ska först söka de ersättningar du kan ha rätt till, till exempel bostadsbidrag, underhållsstöd, sjukpenning eller föräldrapenning. Bifoga beslutet, eller visa att du har sökt.",
      },
      {
        q: "Kostar det något att överklaga till förvaltningsrätten?",
        a: "Nej. Förvaltningsrätten tar inte ut någon avgift. Anlitar du ett ombud, till exempel en advokat, betalar du det själv.",
      },
      {
        q: "Vilka misstag är vanligast i en ansökan om ekonomiskt bistånd?",
        a: "Att skriva för allmänt, att glömma bilagor, att inte ha sökt andra ersättningar först och att missa fristen för överklagande. Skriv vad du söker, för vilken månad och hur mycket, och spara en kopia av allt du skickar.",
      },
    ],
  },
};

export function getDocArticle(slug: string): DocArticle | undefined {
  return DOC_ARTICLES[slug];
}

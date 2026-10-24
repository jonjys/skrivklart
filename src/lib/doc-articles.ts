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
  andrahandskontrakt: {
    seoTitle: "Andrahandskontrakt – mall och nya regler 2026 | Skrivklart",
    seoDescription:
      "Andrahandskontrakt för hyresrätt, bostadsrätt eller hus enligt reglerna från 1 juli 2026: hyra, uppsägning och samtycke. Färdigt kontrakt för 99 kr.",
    intro:
      "Ett andrahandskontrakt är avtalet mellan den som hyr ut sin bostad och den som flyttar in. Det visar vilken bostad det gäller, hur länge uthyrningen pågår, vad hyran är och hur avtalet sägs upp. Reglerna skiljer sig mellan hyresrätt och bostadsrätt eller hus. Sedan den 1 juli 2026 gäller dessutom en ny lag när privatpersoner hyr ut: privatuthyrningslagen. Här är vad som gäller och vad kontraktet ska innehålla, oavsett om du hyr ut eller ska flytta in.",
    sections: [
      {
        h: "Hyresrätt eller bostadsrätt – vilka regler gäller?",
        p: [
          "Hyr du ut en hyresrätt gäller hyreslagen, alltså 12 kapitlet i jordabalken. Du blir hyresvärd för den som flyttar in. Mot fastighetsägaren är det fortfarande du som ansvarar för att hyran blir betald och för skador och störningar.",
          "Hyr du som privatperson ut en bostadsrätt, ett hus eller en ägarlägenhet gäller i stället privatuthyrningslagen. Den gäller avtal som har ingåtts från och med den 1 juli 2026, även muntliga avtal.",
          "Avtal som ingicks före det datumet följer den gamla lagen om uthyrning av egen bostad. Där kan hyran prövas mot dina kostnader för bostaden. Den som hyr har en månads uppsägningstid, och du som hyr ut kan säga upp med tre månader, även ett tidsbestämt avtal.",
          "Privatuthyrningslagen gäller inte om du regelmässigt hyr ut fler än två bostäder utöver ditt eget hem. Då gäller hyreslagen även för en bostadsrätt.",
        ],
      },
      {
        h: "Samtycke från hyresvärden eller föreningen",
        p: [
          "För att hyra ut en hyresrätt i andra hand behöver du hyresvärdens samtycke. Säger hyresvärden nej kan du ansöka om tillstånd hos hyresnämnden. Ansökan ska vara skriftlig och kostar inget.",
          "Hyresnämnden ger tillstånd om du har beaktansvärda skäl. Det kan till exempel vara sjukdom, ålder, tillfälligt arbete eller studier på annan ort, en längre utlandsvistelse eller att du ska provbo som sambo. Dessutom krävs att hyresvärden inte har ett godtagbart skäl att säga nej och att hyran inte är för hög.",
          "Tillståndet gäller en viss tid, i regel högst ett år åt gången. Sedan kan du ansöka igen. Lagen har ingen fast gräns för hur länge du får hyra ut i andra hand.",
          "För en bostadsrätt är det föreningens styrelse som ska säga ja. Säger styrelsen nej kan hyresnämnden ge tillstånd. Där är kravet lägre än för en hyresrätt. Det räcker att du har ett godtagbart skäl, till exempel att du hyr ut till en närstående, arbetar eller studerar på annan ort eller provbor som sambo, och att föreningen inte har ett godtagbart skäl att säga nej. Även det tillståndet gäller en viss tid.",
          "Föreningen får ta ut en avgift för andrahandsuthyrning om stadgarna tillåter det. Avgiften får vara högst tio procent av prisbasbeloppet per lägenhet och år, alltså 5 920 kr under 2026. Hyr du ut en del av året räknas taket per månad. Äger du ett hus eller en ägarlägenhet behöver du inte fråga någon om lov.",
          "Be om samtycket skriftligt och spara det. Det gäller bara för den person och den period som du har fått ja till. Hyr du ut en hyresrätt utan samtycke kan du bli uppsagd och förlora lägenheten, även om du redan har avslutat uthyrningen. Tar du dessutom ut för hög hyra kan det vara ett brott. Även en bostadsrättsförening kan säga upp dig, men där får du först en chans att rätta till det.",
        ],
      },
      {
        h: "Hur hög får hyran vara?",
        p: [
          "Hyresrätt: Hyran får inte vara högre än den hyra du själv betalar. Hyr du ut möblerat får du lägga på högst 15 procent av din hyra för möbler och utrustning. El, internet och liknande får bara kosta vad det faktiskt kostar dig. Hyr du ut en del av lägenheten gäller motsvarande del av hyran.",
          "Har den som hyr betalat för mycket kan hen ansöka hos hyresnämnden och få tillbaka det, med ränta, för upp till två år före ansökan. Ansökan ska komma in senast tre månader efter att hen har flyttat. En för hög hyra kan dessutom göra att du förlorar ditt eget kontrakt.",
          "Bostadsrätt och hus: Enligt privatuthyrningslagen kommer ni överens om hyran. Är den väsentligt högre än vad som i allmänhet tas ut för liknande bostäder som hyrs ut privat, kan den som hyr be hyresnämnden sätta ned den. En sänkning gäller i regel från den dag ansökan kom in till hyresnämnden. Det som har betalats för mycket sedan dess ska betalas tillbaka med ränta. Har den som hyr ut förhalat en förhandling kan nämnden bestämma att sänkningen ska gälla från en tidigare tidpunkt.",
          "Ni får avtala att till exempel el, värme, kyla, varmvatten och vatten betalas efter förbrukning, och att hyran följer ett index, till exempel KPI. En indexhöjning ska meddelas skriftligt och gäller tidigast efter en månad. Den gamla hyran måste också ha gällt i minst ett år.",
          "Ta aldrig betalt för själva kontraktet, utöver hyran. För en hyresrätt är det ett brott att begära, avtala om eller ta emot en sådan ersättning, och du kan dessutom förlora ditt eget kontrakt. Även den som betalar för ett kontrakt kan dömas för brott, utom i ringa fall.",
        ],
      },
      {
        h: "Uppsägningstid och hur länge kontraktet gäller",
        p: [
          "Ett andrahandskontrakt gäller antingen tills vidare eller för en bestämd tid. Skriv in vilket det är: startdatum, och slutdatum om kontraktet är tidsbestämt. Säg alltid upp skriftligt och spara en kopia.",
          "Hyresrätt: Ett kontrakt som gäller tills vidare sägs upp med tre månaders uppsägningstid, till ett månadsskifte. Den som hyr i andra hand får alltid säga upp med tre månader, även om kontraktet gäller en bestämd tid.",
          "Ett vanligt misstag gäller tidsbestämda kontrakt på en hyresrätt. Har uthyrningen pågått mer än nio månader i följd upphör kontraktet inte av sig självt när tiden är slut. Du måste säga upp det skriftligt senast tre månader före slutdatumet. Gör du inte det fortsätter det att gälla, i regel tills vidare.",
          "Bostadsrätt och hus enligt privatuthyrningslagen: Ett tidsbestämt kontrakt upphör när tiden är slut, utan uppsägning. Den som hyr kan ändå säga upp det i förtid, med tre månaders uppsägningstid till ett månadsskifte. Ett kontrakt som gäller tills vidare kan ni båda säga upp på samma sätt.",
          "Du som hyr ut kan inte säga upp ett tidsbestämt kontrakt i förtid, om inte den som hyr bryter mot sina skyldigheter, till exempel betalar hyran mer än två veckor för sent. Har hyran betalats innan du säger upp, eller är förseelsen ringa, får du inte säga upp avtalet. Uppsägningen ska vara skriftlig.",
        ],
      },
      {
        h: "Besittningsskydd och avstående",
        p: [
          "Besittningsskydd betyder att den som hyr har rätt att bo kvar trots att hyresvärden säger upp kontraktet. Vill hyresvärden ändå att hyresgästen flyttar är det hyresnämnden som avgör.",
          "Hyr någon din hyresrätt i andra hand får hen besittningsskydd mot dig när uthyrningen har pågått längre än två år i följd. Mot fastighetsägaren får den som hyr i andra hand aldrig besittningsskydd. Upphör förstahandskontraktet, till exempel för att du blir uppsagd, måste även den som hyr i andra hand flytta.",
          "Kan uthyrningen bli längre än två år, skriv en överenskommelse om avstående från besittningsskydd. Den ska vara ett eget dokument, inte en punkt i kontraktet, och den ingår alltså inte i kontraktet du skriver här. Du behöver inte hyresnämndens godkännande om överenskommelsen gäller högst fyra år från inflyttningen och du själv ska flytta tillbaka. I andra fall kan den behöva godkännas av hyresnämnden.",
          "Hyr du ut en bostadsrätt eller ett hus enligt privatuthyrningslagen har den som hyr inget besittningsskydd. Då behövs ingen sådan överenskommelse.",
        ],
      },
      {
        h: "Det här ska stå i andrahandskontraktet",
        p: [
          "Namn, personnummer och kontaktuppgifter för dig som hyr ut och för den som hyr. Adress, lägenhetsnummer och storlek, och om bostaden hyrs ut möblerad. Hyr du ut möblerat, gör en inventarielista och bifoga den. Skriv upp skador och brister vid inflyttningen, gärna med foton.",
          "Hyrestiden: tills vidare, eller start- och slutdatum. Hyran per månad, när och hur den ska betalas och vad som ingår, till exempel el och internet. Om ni har en deposition: beloppet och när den ska betalas tillbaka. Lagen sätter ingen gräns för hur stor den får vara, men en eller två månadshyror är vanligt. Uppsägningstiden, och att uppsägning ska ske skriftligt.",
          "Regler om husdjur och rökning, och att den som hyr inte får hyra ut vidare. Att hyresvärdens eller föreningens samtycke finns, med datum, gärna som bilaga. Ska du själv flytta in, be att få se samtycket innan du betalar hyra eller deposition. Ort, datum och underskrift från er båda. Ett muntligt avtal gäller också, men båda har rätt att kräva att det skrivs ned.",
          "Fyll i fälten ovan med parter, bostad, hyra och period. Du ser början av kontraktet direkt, gratis. Hela kontraktet kostar 99 kr, med numrerade paragrafer om parter, bostad, hyrestid, hyra, skick, uppsägning, samtycke och tvister. Läs igenom det och ändra det som inte stämmer för er. Skriv ut två exemplar, skriv under båda och behåll var sitt. Skrivklart ger ett skarpt utkast, inte juridisk rådgivning.",
          "Ska den som flyttar in bo där längre än ett år, eller har hen ingen annan bostad att flytta tillbaka till, ska hen anmäla flytten till Skatteverket senast en vecka efter flytten.",
        ],
      },
    ],
    faq: [
      {
        q: "Får jag hyra ut min hyresrätt i andra hand?",
        a: "Ja, om hyresvärden säger ja. Säger hyresvärden nej kan hyresnämnden ge tillstånd för en viss tid, om du har ett beaktansvärt skäl, till exempel tillfälligt arbete eller studier på annan ort. Utan samtycke riskerar du att förlora lägenheten.",
      },
      {
        q: "Gäller ett andrahandskontrakt utan hyresvärdens godkännande?",
        a: "Ja, avtalet mellan er gäller ändå. Men den som hyr ut riskerar att bli uppsagd, och då måste den som hyr i andra hand också flytta.",
      },
      {
        q: "Hur mycket får jag ta i hyra för en hyresrätt i andra hand?",
        a: "Högst samma hyra som du själv betalar. För möbler får du lägga på högst 15 procent av din hyra, och el eller internet får bara kosta vad det kostar dig. Den som har betalat för mycket kan kräva tillbaka det via hyresnämnden.",
      },
      {
        q: "Vilken uppsägningstid gäller för ett andrahandskontrakt?",
        a: "Oftast tre månader, till ett månadsskifte. Den som hyr kan alltid säga upp med tre månader, även ett tidsbestämt kontrakt. Gäller det en bostadsrätt eller ett hus och avtalet ingicks före den 1 juli 2026 har den som hyr en månads uppsägningstid, och den som hyr ut tre månader, även om kontraktet är tidsbestämt.",
      },
      {
        q: "Får den som hyr i andra hand besittningsskydd?",
        a: "I en hyresrätt får hen besittningsskydd mot dig när uthyrningen har pågått längre än två år i följd, om ni inte har skrivit en separat överenskommelse om avstående. I en bostadsrätt eller ett hus som en privatperson hyr ut enligt privatuthyrningslagen finns inget besittningsskydd. Hyr du regelmässigt ut fler än två bostäder gäller i stället hyreslagen.",
      },
      {
        q: "Kan jag få bostadsbidrag om jag hyr i andra hand?",
        a: "Ja, om du har barn som bor hos dig eller är under 29 år och uppfyller villkoren om inkomst. Du behöver i regel vara folkbokförd i bostaden. Försäkringskassan vill då se ditt andrahandskontrakt och ett aktuellt dokument från hyresvärden, föreningen eller hyresnämnden som visar att uthyrningen är godkänd och för vilken period.",
      },
      {
        q: "Behöver jag tillstånd för att ha en inneboende?",
        a: "Nej, inte om du själv bor kvar och det håller sig inom rimliga gränser, till exempel inte fler boende än lägenheten är gjord för. Bor du inte där själv räknas det som andrahandsuthyrning, och då behövs samtycke.",
      },
      {
        q: "Måste jag betala skatt när jag hyr ut i andra hand?",
        a: "Bara om du går med överskott. Du får göra ett schablonavdrag på högst 40 000 kr per bostad och år. Äger ni bostaden tillsammans delar ni på avdraget. För en hyresrätt får du också dra av den del av din hyra som gäller den uthyrda delen och tiden, och för en bostadsrätt gäller samma sak för avgiften till föreningen. För ett hus eller en ägarlägenhet drar du i stället av 20 procent av hyresintäkten. Överskottet tas upp som kapitalinkomst i deklarationen och beskattas med 30 procent.",
      },
    ],
  },
  "arn-anmalan": {
    seoTitle: "Anmäla till ARN – mall för din ARN-anmälan (99 kr) | Skrivklart",
    seoDescription:
      "Text till din ARN-anmälan: beloppsgränser, ettårsfristen, avgiften på 150 kr och handläggningstiden 2026. Gratis utkast, hela texten för 99 kr.",
    intro:
      "ARN, Allmänna reklamationsnämnden, är dit du vänder dig när du har klagat till ett företag och fått nej, eller inget svar alls. Nämnden prövar tvisten och ger en rekommendation om hur den bör lösas. Nedan går vi igenom vad som gäller 2026: när du kan anmäla, beloppsgränserna, tidsfristen, avgiften, vad anmälan ska innehålla och hur lång tid det tar.",
    sections: [
      {
        h: "När kan du anmäla till ARN?",
        p: [
          "ARN är en statlig myndighet som prövar tvister mellan konsumenter och företag. Allt sköts skriftligt, och du behöver inget ombud.",
          "Grundkraven är tre. Du köpte varan eller tjänsten av ett företag, för privat bruk. Du har först klagat till företaget. Och företaget har sagt helt eller delvis nej, eller inte svarat fast det haft rimlig tid på sig. ARN skriver att företaget bör ha svarat inom fyra veckor. Dessutom måste företaget rikta sig till den svenska marknaden eller ha tillräcklig anknytning till Sverige. Det är bra att veta om du har handlat från en utländsk webbutik. Kravet måste också nå upp till värdegränsen och anmälan komma in i tid. Mer om det nedan.",
          "ARN prövar inte köp mellan privatpersoner. Nämnden prövar inte heller tvister om hälso- och sjukvård, även fakturor för sådan vård, köp av hus, tomt eller annan fastighet, köp eller upplåtelse av bostadsrätt eller tomträtt, kontrollavgifter för parkering eller tjänster från advokater. Tvister om hyra av lägenhet eller arrende prövas bara om de gäller ett krav på pengar.",
          "ARN prövar inte heller tvister som handläggs i eller redan har avgjorts av en domstol, Kronofogden eller hyres- och arrendenämnden, eller tvister som en annan godkänd tvistlösningsnämnd kan pröva. Har företaget gått i konkurs prövar ARN inte ärendet.",
        ],
      },
      {
        h: "Beloppsgränser: hur stort måste ditt krav vara?",
        p: [
          "ARN prövar bara krav som är minst en viss summa, en så kallad värdegräns. Gränserna höjdes den 1 augusti 2025 och finns i tre nivåer: 750, 1 500 och 3 000 kr. Tidigare var de 500, 1 000 och 2 000 kr.",
          "750 kr gäller för de flesta köp: elektronik, skor, kläder och textil, tvätt, el- och gasavtal, spel och lotterier och allmänna tvister som abonnemang, cyklar, frisör och flytt. Samma gräns gäller när du kräver ersättning enligt reglerna om resenärers rättigheter, till exempel för en inställd eller försenad flygning, tågresa, bussresa, båtresa eller resa med kollektivtrafiken. Kravet riktas då mot transportföretaget.",
          "1 500 kr gäller motor, möbler och övriga resor, till exempel paketresor. 3 000 kr gäller bank, försäkring, bostad och båt. Till bostad räknas till exempel hantverkare i hemmet, kök, fönster, värmepumpar och husbyggen. Med båt menas tvister om själva båten, inte båtresor.",
          "Det är värdet av det du kräver som räknas, inte vad du betalade. Köpte du en jacka för 2 000 kr och kräver 500 kr i prisavdrag ligger kravet under gränsen. Avgiften till ARN räknas inte in. Krav på ersättning för oro eller besvär räknas inte heller in.",
        ],
      },
      {
        h: "Tidsfrist: ett år från första reklamationen, inte sex månader",
        p: [
          "Anmälan måste ha kommit in till ARN inom ett år från att du första gången klagade till företaget. Det gäller även om företaget aldrig svarade. Det är dagen ARN tar emot anmälan som räknas.",
          "Du kan ha läst att du har sex månader på dig från att företaget sagt nej. Den regeln fanns i ARN:s tidigare instruktion, som slutade gälla 2016. I dag räknas tiden från din första reklamation, inte från företagets nej. Drar företaget ut på svaret kan en stor del av året gå innan du ens fått nej. Vänta inte på att de ska ändra sig.",
          "För bank- och försäkringsärenden finns ett undantag. Har bolagets egen klagomålshantering, till exempel hos en kundombudsman, tagit så lång tid att mer än ett år har gått, kan ARN ändå pröva ärendet. Då ska du anmäla inom två månader från att kundombudsmannen eller motsvarande första gången fattade beslut.",
          "Själva reklamationen har egna frister. Gäller det en vara räknas en reklamation inom två månader från att du märkte felet alltid som gjord i tid. Företaget ansvarar för fel som visar sig inom tre år från att du fick varan.",
        ],
      },
      {
        h: "Är det gratis att anmäla till ARN?",
        p: [
          "Nej, inte längre. Sedan den 1 augusti 2024 kostar en anmälan 150 kr. Gör du anmälan på webben betalar du när du skickar in. Med pappersblanketten får du ett inbetalningskort. Avgiften betalas inte tillbaka, inte ens om ARN avvisar ärendet. Betalar du inte avgiften prövas inte ärendet.",
          "Du kan kräva att företaget ersätter dig för avgiften. Skriv det med i ditt yrkande, alltså det du vill att ARN ska besluta. Får du rätt kan nämnden rekommendera att företaget ersätter dig för de 150 kronorna, men bara om du har begärt det.",
          "Det är fortfarande ett billigt sätt att få en tvist prövad. I tingsrätten är ansökningsavgiften 900 kr för mindre krav, och där kan du dessutom få betala en del av motpartens kostnader om du förlorar.",
        ],
      },
      {
        h: "Det här ska stå i anmälan",
        p: [
          "Anmälan måste göras i ARN:s webbformulär på arn.se eller på deras pappersblankett. Ett vanligt mejl eller brev räcker inte. Det du skriver läser både nämnden och företaget, och allt du skickar in blir allmän handling.",
          "Här på Skrivklart fyller du i fälten ovan: företaget, köpet, vad som hänt och vad du vill att ARN ska besluta. Du ser ett utkast direkt, gratis. Hela texten, med parter, avtalet, händelseförlopp, yrkande och en lista över bilagor, kostar 99 kr. Sedan för du själv över texten till ARN:s formulär, bifogar dina underlag och skickar in. Anmälan skickas inte in åt dig, och ARN:s avgift på 150 kr ingår inte i priset.",
          "Skriv händelseförloppet i datumordning. Vad du köpte, när, för hur mycket och ordernummer. Vad som är fel och när du märkte det. När och hur du reklamerade, och vad företaget svarade. Ta med företagets namn, kontaktuppgifter och gärna organisationsnummer, så att ARN kan skicka anmälan vidare.",
          "Yrkandet är det viktigaste. Skriv exakt vad du vill att ARN ska besluta och med vilket belopp: pengarna tillbaka, prisavdrag, reparation eller ersättning för en viss kostnad. Förklara hur du räknat fram summan. Ett krav som ”jag vill ha rätt” går inte att besluta om. ARN kan bara ge dig rätt till ersättning för ekonomisk skada, till exempel en reparation du fått betala. Ersättning för oro, besvär eller din egen tid går inte att få. Utöver avgiften kan du inte heller få ersättning för vad ärendet kostar dig, som ombud eller hjälp att skriva anmälan.",
          "Bifoga kopior av kvitto eller orderbekräftelse, bilder på felet, din reklamation och företagets svar. Behåll originalen själv. ARN tar inte emot länkar som bevis, så ta en skärmbild i stället. Välj ut det som visar felet och ditt krav. Skickar du för mycket eller rörigt underlag kan ARN låta bli att pröva ärendet. Du kan inte anmäla anonymt.",
        ],
      },
      {
        h: "Hur lång tid tar det och vad händer sedan?",
        p: [
          "En jurist på ARN går igenom anmälan och hör av sig om något saknas. Sedan får företaget läsa den och svara, och du får kommentera svaret. Svarar inte företaget i tid avgör ARN ärendet utifrån det du har skickat in.",
          "Enligt ARN är en normal handläggningstid ungefär sex månader. Men ARN har fått in ovanligt många ärenden och skriver att det kan ta längre tid. Första halvåret 2026 kom det in 16 291 ärenden, jämfört med 10 316 samma period 2025. Det går inte att få förtur.",
          "Beslutet är en rekommendation om hur tvisten bör lösas. Det kan inte överklagas och går inte att driva in hos Kronofogden. Beror beslutet på ett klart förbiseende eller misstag från ARN kan du skriftligen begära omprövning inom fyra veckor från beslutet.",
          "De flesta företag följer beslutet. Under 2025 följde företagen ARN:s rekommendation i 76 procent av de ärenden där konsumenten fått helt eller delvis rätt. Företag som inte följer den kan hamna på tidningen Råd & Röns svarta lista.",
          "Har du fått helt eller delvis rätt skickar ARN en fråga till dig om företaget har följt rekommendationen. Du har en månad på dig att svara. Svarar du att företaget inte har följt den får företaget två veckor på sig att svara.",
          "Följer företaget inte beslutet kan du gå vidare själv. Gäller kravet pengar kan du ansöka om betalningsföreläggande hos Kronofogden, vilket kostar 300 kr. Bestrider företaget kan ärendet gå vidare till tingsrätten, och då betalar du bara mellanskillnaden upp till tingsrättens avgift. Du kan också lämna in en stämningsansökan direkt till tingsrätten. Är kravet högst ett halvt prisbasbelopp, 29 600 kr år 2026, blir det ett förenklat tvistemål med lägre avgift och begränsad kostnadsrisk.",
          "Det här är allmän information, inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Kostar det något att anmäla till ARN?",
        a: "Ja. Sedan den 1 augusti 2024 kostar en anmälan 150 kr. Avgiften betalas inte tillbaka, men om du har begärt det i anmälan kan ARN rekommendera att företaget ersätter dig om du får rätt.",
      },
      {
        q: "Hur lång tid har jag på mig att anmäla till ARN?",
        a: "Anmälan ska ha kommit in inom ett år från att du första gången klagade till företaget. Den gamla regeln om sex månader efter företagets nej gäller inte längre.",
      },
      {
        q: "Hur lång tid tar det innan ARN fattar beslut?",
        a: "ARN anger en normal handläggningstid på ungefär sex månader, men skriver att det just nu kan ta längre tid eftersom nämnden har fått in ovanligt många ärenden. Det går inte att få förtur.",
      },
      {
        q: "Vilka beloppsgränser gäller hos ARN?",
        a: "750 kr för de flesta områden, till exempel elektronik, kläder, skor, allmänna tvister och krav enligt reglerna om resenärers rättigheter, som ersättning för ett inställt eller försenat flyg eller tåg. 1 500 kr för motor, möbler och övriga resor, till exempel paketresor. 3 000 kr för bank, försäkring, bostad och båt. Det är värdet av ditt krav som räknas, inte vad varan kostade.",
      },
      {
        q: "Måste företaget följa ARN:s beslut?",
        a: "Nej. Beslutet är en rekommendation, men de flesta företag följer det. Företag som inte gör det kan hamna på Råd & Röns svarta lista. Vill du ändå ha pengarna kan du ansöka om betalningsföreläggande hos Kronofogden eller gå till tingsrätten.",
      },
      {
        q: "Varför kan ARN avvisa en anmälan?",
        a: "ARN kan avvisa eller låta bli att pröva en anmälan om du inte först har klagat till företaget, om kravet är under värdegränsen, om anmälan kom in mer än ett år efter din första reklamation, om avgiften inte är betald eller om kompletteringar inte kommer in i tid. Det gäller också om företaget har gått i konkurs, om tvisten redan prövas i domstol eller hos Kronofogden, om den gäller ett område som ARN inte prövar eller om ärendet är så omfattande eller rörigt att det inte går att pröva skriftligt.",
      },
      {
        q: "Kan jag få hjälp med anmälan?",
        a: "Ja. Många kommuner har en konsumentvägledare som kostnadsfritt kan hjälpa dig i kontakten med företaget och ibland också med anmälan till ARN. Vill du ha hjälp med själva texten kan du fylla i fälten ovan och få ett utkast direkt.",
      },
    ],
  },
  betalningspaminelse: {
    seoTitle: "Betalningspåminnelse – mall och regler (59 kr) | Skrivklart",
    seoDescription:
      "Kunden har inte betalat? Skriv en saklig betalningspåminnelse och se vad som gäller för påminnelseavgift och ränta. Se början gratis, färdig påminnelse 59 kr.",
    intro:
      "En betalningspåminnelse är ett kort, sakligt brev till den som inte har betalat en faktura i tid. Ofta räcker det för att pengarna ska komma. Här är vad som gäller för påminnelseavgift och dröjsmålsränta, vad påminnelsen ska innehålla och vad du gör om kunden ändå inte betalar.",
    sections: [
      {
        h: "När ska du skicka en betalningspåminnelse?",
        p: [
          "Skicka påminnelsen när förfallodagen har passerat och pengarna inte har kommit. Vänta gärna ett par bankdagar, så att du inte påminner om något som redan är betalt.",
          "Lagen kräver ingen påminnelse innan du går vidare till inkasso. Men ofta har kunden bara missat fakturan, och då räcker ett sakligt brev.",
          "En påminnelse är inte ett inkassokrav. Du får ange ett nytt sista datum och skriva att fakturan lämnas över till inkasso, till exempel till ett inkassoföretag, om den inte betalas. Enligt inkassolagen räknas just det inte som en inkassoåtgärd. Skriver du om andra åtgärder, som Kronofogden, gäller strängare regler.",
          "Du kan skicka en betalningspåminnelse även som privatperson, till exempel om någon inte har betalat för något du sålt eller inte har betalat tillbaka ett lån.",
        ],
      },
      {
        h: "Påminnelseavgift: högst 60 kr, och bara om det är avtalat",
        p: [
          "Du får ta ut en påminnelseavgift bara om ni kom överens om det senast när skulden uppstod, till exempel i avtalet, offerten eller villkoren som kunden godkände. Att skriva in avgiften först i påminnelsen räcker inte.",
          "Avgiften får vara högst 60 kronor, om det inte finns särskilda skäl. Konsumentverket skriver att ett företag bara får ta ut en påminnelseavgift en gång. Ta alltså inte ut en ny avgift för varje påminnelse om samma faktura. Ränta får inte räknas på avgiften.",
          "Säljer du som företag till ett annat företag eller en myndighet gäller en egen regel. Har du rätt till dröjsmålsränta har du också rätt till en förseningsersättning på 450 kronor. Påminnelseavgift och inkassoavgift ryms då inom de 450 kronorna och kan inte tas ut ovanpå.",
        ],
      },
      {
        h: "Dröjsmålsränta: referensräntan plus 8 procentenheter",
        p: [
          "Har ni inte avtalat om någon annan ränta gäller räntelagen. Dröjsmålsräntan är då Riksbankens referensränta plus 8 procentenheter per år. Referensräntan bestäms för ett halvår i taget. Från 1 juli till 31 december 2026 är den 2 procent, så dröjsmålsräntan är 10 procent. Den 1 januari 2027 kan den ändras. Fortsätter förseningen in i nästa år, kontrollera den aktuella siffran hos Riksbanken.",
          "Var sista betalningsdagen bestämd i förväg, till exempel i avtalet eller i villkoren före köpet, räknas ränta från den dagen. Säljer du till en privatperson räknas ett datum som du skriver först på fakturan oftast inte som bestämt i förväg. Då börjar räntan löpa 30 dagar efter att du skickat en faktura eller ett krav på ett bestämt belopp där det står att ränta tas ut vid sen betalning. Mellan företag, och när ett företag kräver en myndighet på betalning, behöver det inte stå.",
          "Ett räkneexempel: 5 000 kr som betalas 30 dagar för sent, med 10 procents ränta, blir 5 000 × 0,10 × 30 / 365. Det är ungefär 41 kr. Räntan räknas på fakturabeloppet, inte på avgifter.",
          "Har kunden inte kunnat betala på grund av sjukdom, arbetslöshet eller något liknande som hen inte kunnat påverka, kan räntan sättas ned om full ränta vore oskälig.",
        ],
      },
      {
        h: "Det här ska stå i påminnelsen",
        p: [
          "Ditt namn eller företagsnamn och hur du nås. Kundens namn. Fakturanummer, fakturadatum, vad fakturan gällde och den förfallodag som har passerat.",
          "Det obetalda beloppet. Påminnelseavgift och ränta på egna rader, och bara om du har rätt att ta ut dem.",
          "Ett nytt sista datum och hur kunden betalar: bankgiro, kontonummer eller Swish, och vilken referens som ska anges så att betalningen går att koppla till fakturan.",
          "En mening om att kunden kan höra av sig om något är fel med fakturan, och vad som händer annars, till exempel att den lämnas till inkasso.",
        ],
      },
      {
        h: "Exempel på betalningspåminnelse",
        p: [
          "Så här kan en kort påminnelse se ut. Byt ut det som står inom hakparentes.",
          "Betalningspåminnelse",
          "Hej [kundens namn]. Vi har inte fått betalt för faktura [nummer] på [belopp] kr, som skulle ha betalats senast [förfallodag].",
          "Betala senast [nytt datum] till [bankgiro eller Swish] och ange fakturanumret.",
          "Har du redan betalat kan du bortse från påminnelsen. Är något fel med fakturan, hör av dig till [telefon eller e-post].",
          "Med vänlig hälsning, [ditt namn eller företag]",
        ],
      },
      {
        h: "Så skriver du påminnelsen här",
        p: [
          "Fyll i fälten ovan: vem du är, kunden, fakturan och nytt sista datum. Du ser början av påminnelsen direkt, gratis. Hela påminnelsen, klar att skicka, kostar 59 kr. Inget konto behövs.",
          "Betaluppgifterna står som platshållare som du fyller i själv. Skrivklart räknar inte ut påminnelseavgift eller ränta och skriver inget om inkasso. Ska det vara med, lägg till det i texten innan du skickar. Texten är inte juridisk rådgivning.",
        ],
      },
      {
        h: "Vanliga misstag",
        p: [
          "Att ta ut påminnelseavgift som aldrig avtalades. Kunden behöver inte betala den, och det blir lätt en onödig diskussion om 60 kronor.",
          "Att kalla påminnelsen för inkassokrav, eller hota med Kronofogden och betalningsanmärkning. Enligt Finansinspektionens regler får rubriken ”Inkassokrav” bara användas på ett krav som uppfyller inkassolagens regler. Ett inkassokrav ger i sig ingen betalningsanmärkning. Skriv bara det du faktiskt tänker göra.",
          "Att räkna ränta från fel dag, eller på hela summan inklusive avgifter.",
          "Att glömma betaluppgifter och referens. Spara också en kopia av allt du skickar, med datum.",
          "Att vänta för länge. Tio år efter att en skuld uppstod går den inte längre att kräva in, den preskriberas. Har ett företag sålt en vara eller tjänst till en privatperson för privat bruk gäller tre år. När kunden har fått ett skriftligt krav, till exempel en påminnelse, börjar en ny period löpa. Det är mottagandet som räknas. Är tiden nära att gå ut, skicka kravet så att du kan visa att det kom fram, och spara beviset.",
        ],
      },
      {
        h: "Om kunden ändå inte betalar: inkassokrav och Kronofogden",
        p: [
          "Nästa steg är ett inkassokrav. Är det din egen faktura kan du skicka inkassokravet själv. Tillstånd från Finansinspektionen behövs bara för den som driver in skulder åt någon annan eller skulder som köpts upp för indrivning. Vänta tills sista datumet i påminnelsen har passerat.",
          "Ett inkassokrav ska vara skriftligt och tydligt ange ditt namn och vad skulden gäller. Själva skulden, räntan och avgifterna ska stå var för sig. För räntan anger du upplupen ränta, räntesats, period och det belopp räntan räknats på, och om den räknats enligt räntelagen eller enligt avtal. Enligt Finansinspektionens föreskrifter ska kravet också innehålla kundens namn, dina fullständiga kontaktuppgifter, utskriftsdatum, vart betalning och invändningar ska skickas och vilka åtgärder som kan bli aktuella om kunden inte betalar. För ett korrekt inkassokrav får du ta ut högst 180 kronor.",
          "Kunden ska få skälig tid att betala eller invända. Finansinspektionen rekommenderar minst åtta dagar från att kravet skickas med vanlig post och minst sex dagar med digital post, alltså en digital brevlåda och inte vanlig e-post. Kunden bör alltid få minst fyra bankdagar från att hen kan antas ha fått kravet, och längre tid runt storhelger. Skicka inte inkassokravet som mejl eller sms. Det avråder Finansinspektionen från.",
          "Betalar kunden ändå inte kan du ansöka om betalningsföreläggande hos Kronofogden, alltså ett sätt att få ett beslut om att kunden ska betala. Ansökan kostar 300 kronor, och avgiften kan du kräva tillbaka av den som är skyldig. Driver du företag ska kunden enligt inkassolagen först ha fått ett inkassokrav, och betaltiden i kravet ska ha gått ut.",
          "Säger kunden emot med ett sakligt skäl, till exempel att arbetet inte blev gjort, är det en tvist. Enligt Finansinspektionens regler ska man då inte ansöka om betalningsföreläggande. Bestrider kunden hos Kronofogden kan du välja att låta tingsrätten pröva saken. Det kostar en tilläggsavgift: 600 kronor om kravet är under ett halvt prisbasbelopp (29 600 kronor 2026), annars 2 500 kronor. Förlorar du kan du få betala den andra partens rättegångskostnader, men i mål om mindre belopp, så kallade småmål, är den ersättningen begränsad.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur mycket får påminnelseavgiften vara?",
        a: "Högst 60 kronor, och bara om ni avtalade om avgiften senast när skulden uppstod. Enligt Konsumentverket får ett företag bara ta ut den en gång.",
      },
      {
        q: "Hur räknar jag ut dröjsmålsränta?",
        a: "Om inget annat är avtalat är räntan referensräntan plus 8 procentenheter per år. Räkna fakturabeloppet gånger räntesatsen gånger antal dagar för sent, delat med 365. Från 1 juli till 31 december 2026 är dröjsmålsräntan 10 procent. Den 1 januari 2027 kan den ändras.",
      },
      {
        q: "Hur lång tid ska kunden få på sig efter påminnelsen?",
        a: "Lagen sätter ingen fast tid för en påminnelse. Minst åtta dagar är rimligt. Det är också den tid Finansinspektionen anger för ett inkassokrav som skickas med vanlig post.",
      },
      {
        q: "Måste jag skicka en påminnelse innan inkasso?",
        a: "Nej, det finns inget sådant krav i lag. Men har du skickat en påminnelse med ett sista datum ska du vänta tills det har passerat innan du skickar ett inkassokrav.",
      },
      {
        q: "Kan jag skicka påminnelsen med mejl?",
        a: "Ja, mejl går bra för en påminnelse. Skicka till en adress du vet att kunden använder och spara mejlet med datum. Ett inkassokrav ska du däremot inte skicka med mejl.",
      },
      {
        q: "Får jag skicka ett inkassokrav själv?",
        a: "Ja. För din egen faktura behövs inget tillstånd. Kravet måste vara skriftligt och uppfylla inkassolagens regler, och då får du ta ut högst 180 kronor för det.",
      },
      {
        q: "Kan jag ta ut 450 kr i förseningsersättning?",
        a: "Bara om du säljer som företag till ett annat företag eller en myndighet och har rätt till dröjsmålsränta. Lagen ger ingen rätt till förseningsersättning från en privatperson.",
      },
      {
        q: "Avbryter en betalningspåminnelse preskriptionen?",
        a: "Ja. När kunden har fått ett skriftligt krav börjar en ny preskriptionstid löpa. Det är mottagandet som räknas, så spara bevis på att kravet kom fram. Den nya tiden är tre år om ett företag kräver en privatperson på betalt för en vara eller tjänst, annars tio år.",
      },
      {
        q: "Jag har själv fått en betalningspåminnelse. Vad gör jag?",
        a: "Stämmer fakturan, betala före det nya datumet. Stämmer den inte, säg emot skriftligt till företaget och spara en kopia. Kan du inte betala allt på en gång, föreslå en avbetalningsplan innan det går till inkasso.",
      },
    ],
  },
  fullmakt: {
    seoTitle: "Fullmakt – mall, vittnen och återkallelse (59 kr) | Skrivklart",
    seoDescription:
      "Fullmakt steg för steg: vad som ska stå, när vittnen behövs och hur du återkallar den. Se början gratis, hela fullmakten kostar 59 kr. Inget konto.",
    intro:
      "En fullmakt ger någon annan rätt att göra en bestämd sak åt dig, oftast på papper. Det kan vara att sköta ett bankärende, att ha kontakt med Försäkringskassan eller att hämta en försändelse hos ett utlämningsställe som vill ha en skriftlig fullmakt. Hos PostNord behövs ingen fullmakt för att hämta ett paket åt dig. Den som hämtar visar sin egen legitimation och din. Det finns ingen blankett som gäller överallt. Nedan ser du vad fullmakten ska innehålla, vad posten, banken och myndigheter brukar kräva och när du behöver en framtidsfullmakt i stället.",
    sections: [
      {
        h: "Vad är en fullmakt och när behöver du en?",
        p: [
          "Med en fullmakt får någon annan göra något i ditt namn. Den personen kallas fullmaktshavare eller ombud. Det hen gör inom fullmaktens gränser gäller som om du hade gjort det själv. Det står i avtalslagen.",
          "En fullmakt kan gälla en enda sak vid ett tillfälle. Den kan också gälla flera saker under en längre tid, till exempel att sköta kontakten med en myndighet medan du är sjuk.",
          "För det mesta kräver lagen ingen särskild form. Ett viktigt undantag är köp, byte eller gåva av fastighet. Då måste fullmakten vara skriftlig, och det ska uttryckligen stå i den att ombudet får sälja eller köpa fastigheten. Lantmäteriet vill som huvudregel ha fullmakten i original när lagfarten söks. I praktiken är det ändå banken, posten eller myndigheten som ska godta fullmakten som bestämmer vad som räcker. Skriftligt är nästan alltid säkrast.",
        ],
      },
      {
        h: "Det här ska stå i fullmakten",
        p: [
          "Skriv ditt namn och personnummer, och samma uppgifter för den som får fullmakten.",
          "Skriv exakt vad hen får göra. ”Skriva under hyresavtalet för lägenheten på …” är tydligare än ”sköta mina ärenden”. Får hen ta emot pengar eller skriva under avtal åt dig, skriv det uttryckligen.",
          "Skriv hur länge fullmakten gäller: ett slutdatum eller ”tills vidare”. Lagen kräver inget slutdatum, och utan datum gäller fullmakten tills du återkallar den. Skriv också om ombudet får lämna över uppdraget till någon annan. Hos en myndighet får ombudet det bara om det står i fullmakten.",
          "Avsluta med ort, datum och din underskrift. En vanlig fullmakt behöver inga vittnen enligt lag, men banker kräver det ofta. Två vittnen gör det också svårare att ifrågasätta underskriften senare. Välj vuxna vittnen som inte är den som får fullmakten.",
        ],
      },
      {
        h: "Hämta paket eller post åt någon",
        p: [
          "Hos PostNord behövs ingen fullmakt för att hämta en försändelse åt dig, till exempel när du är hemma med ett sjukt barn. Den som hämtar visar sin egen legitimation och din. Är det ett rekommenderat brev ska ni båda skriva under.",
          "Vill du ändå ge någon fullmakt hos PostNord, till exempel för att du saknar giltig legitimation, måste den skrivas på PostNords egen blankett. Den lämnas in personligen hos PostNord en vecka innan den ska börja gälla. Den gäller när PostNord har bekräftat registreringen med brev, och i högst fem år. Med den kan ombudet hämta och kvittera dina brev och paket, även rekommenderade. En fullmakt som du skriver själv gäller inte hos PostNord.",
          "Har avsändaren valt att försändelsen bara får lämnas ut till dig personligen hjälper ingen fullmakt. Det står på avin om försändelsen bara får lämnas ut till dig.",
          "För många paket är det enklast att dela avin eller paketboxnyckeln i PostNords app med den som ska hämta. Andra fraktbolag och utlämningsställen har egna regler. Läs avin, och fråga utlämningsstället om de vill ha en skriftlig fullmakt.",
        ],
      },
      {
        h: "Fullmakt för bank, Försäkringskassan och Skatteverket",
        p: [
          "Banker har ofta egna fullmaktsblanketter, och många kräver att fullmakten är bevittnad. Kontakta banken först och fråga vad de godtar. En fullmakt ger aldrig rätt att använda ditt BankID, dina kort eller dina koder. De är personliga och får inte lånas ut, inte ens till någon i familjen.",
          "Hos Försäkringskassan måste ett ombud ha fullmakt, till exempel för att begära omprövning åt dig. Du kan använda blanketten Fullmakt för ombud (5607), skriva en egen fullmakt eller lämna fullmakten muntligt via kundtjänst på 0771-524 524. Enligt förvaltningslagen ska en fullmakt till ett ombud hos en myndighet innehålla ombudets namn och vad uppdraget omfattar.",
          "Ska någon deklarera åt dig digitalt registrerar du hen som deklarationsombud hos Skatteverket, i e-tjänsten Ombud och behörigheter eller med blankett SKV 4809. Via e-tjänsten gäller det direkt. Med pappersblanketten börjar det gälla 14 dagar efter att Skatteverket har handlagt ansökan.",
        ],
      },
      {
        h: "Framtidsfullmakt eller vanlig fullmakt?",
        p: [
          "En vanlig fullmakt är till för när du själv kan bestämma och följa det som görs. En framtidsfullmakt börjar gälla först när du på grund av sjukdom, till exempel demens, varaktigt och i huvudsak inte längre kan ha hand om dina angelägenheter. Det är den som har fullmakten som bedömer när det har hänt. Tingsrätten prövar det bara om det står i fullmakten att domstol ska göra det, eller om fullmaktshavaren själv begär det.",
          "En framtidsfullmakt har strikta formkrav. Du måste ha fyllt 18 år och kunna ha hand om dina angelägenheter när du skriver den. Den ska vara skriftlig, och det ska stå att det är en framtidsfullmakt, vem som får den och vilka angelägenheter den gäller. Du skriver under, eller intygar att det är din underskrift, inför två vittnen som är där samtidigt och vet att det är en framtidsfullmakt. Vittnena skriver sedan under fullmakten. Sedan 1 juli 2026 får du och vittnena också skriva under elektroniskt, med en så kallad avancerad elektronisk underskrift.",
          "Den som får fullmakten får inte vara vittne. Det får inte heller din make eller sambo, dina syskon eller släktingar i rakt led, som föräldrar, barn och barnbarn. Samma sak gäller svärföräldrar, svärbarn, styvföräldrar och styvbarn. Vittnena måste ha fyllt 15 år och förstå vad det innebär att bevittna.",
          "Fullmakten du skriver här är en vanlig fullmakt, inte en framtidsfullmakt. Om det är uppenbart att du inte längre kan sköta din ekonomi, och ingen framtidsfullmakt, god man eller förvaltare redan har hand om samma frågor, kan dina närmaste anhöriga i en bestämd turordning få sköta vardagliga ekonomiska saker, som att betala räkningar. Det kallas anhörigbehörighet. Den räcker inte för att sälja en bostad eller ge bort pengar.",
        ],
      },
      {
        h: "Så skriver du fullmakten här",
        p: [
          "Fyll i fälten ovan: vem som ger fullmakten, vem som får den, vad hen får göra och hur länge. Början av fullmakten ser du direkt, gratis. Hos Skrivklart kostar hela fullmakten 59 kr, med uppdragets gränser, giltighetstid, hur den återkallas, underskriftsrad och plats för vittnen. Du behöver inget konto.",
          "Skriv ut, fyll i det som står inom hakparentes och skriv under. Ge originalet till den som ska använda fullmakten och spara en kopia själv. Det är ett färdigt underlag, inte juridisk rådgivning.",
          "Vill du ta tillbaka fullmakten, be om originalet och förstör det. Den som har fullmakten är skyldig att lämna tillbaka den när du ber om det. Har du berättat för en bank eller någon annan att personen har fullmakt, meddela dem också att den inte gäller längre.",
        ],
      },
    ],
    faq: [
      {
        q: "Behöver en fullmakt bevittnas?",
        a: "Nej, inte en vanlig fullmakt. Lagen kräver inga vittnen, men banker kräver det ofta. Välj då vuxna vittnen som inte är den som får fullmakten. En framtidsfullmakt måste däremot skrivas under inför två vittnen.",
      },
      {
        q: "Hur länge gäller en fullmakt?",
        a: "Så länge som står i den. Står inget slutdatum gäller den tills du återkallar den. Den upphör inte heller automatiskt om du dör. Enligt avtalslagen gäller den som huvudregel även efter dödsfallet, tills dödsboet återkallar den.",
      },
      {
        q: "Hur återkallar jag en fullmakt?",
        a: "Ta tillbaka originalet och förstör det. Har du meddelat en bank eller myndighet om fullmakten, säg till dem att den är återkallad. Har originalet kommit bort, eller får du inte tillbaka det, kan du ansöka hos tingsrätten där du bor om att fullmakten förklaras kraftlös. Beslutet kungörs i Post- och Inrikes Tidningar.",
      },
      {
        q: "Kan någon hämta ut mitt paket åt mig?",
        a: "Ja. Hos PostNord behövs ingen fullmakt. Den som hämtar visar sin egen och din legitimation, eller så delar du avin i PostNords app. För rekommenderade brev ska ni båda skriva under, om du inte har registrerat en fullmakt på PostNords egen blankett. Försändelser med personlig utlämning lämnas bara ut till dig.",
      },
      {
        q: "Kan jag använda fullmakten på apoteket?",
        a: "Nej, för apoteksärenden finns en särskild fullmakt. Den registreras i Läkemedelskollen, som du når via 1177, eller med E-hälsomyndighetens blankett på ett apotek. Ombudet måste godkänna den, och den gäller i högst fyra år.",
      },
      {
        q: "Vad är skillnaden mellan generalfullmakt och specialfullmakt?",
        a: "En generalfullmakt ger någon rätt att sköta många av dina ärenden. Den räcker ändå inte för allt. Ska ombudet sälja eller köpa en fastighet måste det stå uttryckligen i fullmakten, och banker vill ofta att du använder deras egna blanketter. En specialfullmakt gäller en bestämd sak, till exempel att sälja en bil. Den är lättare för banken eller myndigheten att bedöma och svårare att missbruka.",
      },
      {
        q: "Måste jag använda Försäkringskassans blankett?",
        a: "Nej. Du kan använda blanketten Fullmakt för ombud (5607), men du får också skriva en egen fullmakt eller lämna den muntligt via kundtjänst. Den ska visa ombudets namn och vad ombudet får göra.",
      },
      {
        q: "Räcker en vanlig fullmakt om jag blir sjuk eller dement?",
        a: "Det är osäkert. Lagen säger inte tydligt om en vanlig fullmakt fortsätter att gälla när du inte längre kan fatta egna beslut, och banken kan sluta godta den. Du kan då inte heller kontrollera eller återkalla den. Vill du vara säker på att någon kan sköta dina saker då, skriv en framtidsfullmakt med två vittnen.",
      },
    ],
  },
  hyresansokan: {
    seoTitle: "Hyresansökan – personligt brev till hyresvärd | Skrivklart",
    seoDescription:
      "Skriv en hyresansökan som hyresvärden läser: inkomst, referenser och varför just du. Se början gratis, färdigt brev för 59 kr. Inget konto.",
    intro:
      "En hyresansökan är brevet du skickar när du söker en lägenhet hos ett bostadsbolag eller en privatperson som hyr ut. Ofta kallas det personligt brev till hyresvärden. Brevet ska visa att du kan betala hyran, att du sköter ditt boende och när du kan flytta in. Ska du vända dig till hyresnämnden är det en annan sak, med nämndens egna blanketter. Här är vad värdar brukar kräva, vad de inte får göra och hur du skriver ett brev som blir läst.",
    sections: [
      {
        h: "När behöver du skriva en hyresansökan?",
        p: [
          "Söker du via en kommunal bostadskö avgör oftast kötiden vem som får erbjudandet. Där ändrar ett brev inte din plats. Du behöver däremot kunna visa att du uppfyller värdens villkor, till exempel med intyg om inkomst.",
          "Brevet gör mest skillnad när värden väljer själv. Det gäller privata hyresvärdar med egen intresseanmälan, lägenheter i andra hand och privatpersoner som hyr ut sin bostadsrätt eller sitt hus. Där kan många svara på samma annons, och ett tydligt brev gör att värden minns dig.",
          "Varje hyresvärd bestämmer själv vilka krav som gäller. Därför kan villkoren skilja sig mycket mellan två lägenheter i samma område. Läs villkoren i annonsen innan du skriver.",
        ],
      },
      {
        h: "Vad kräver hyresvärden? Inkomst, kreditupplysning och referenser",
        p: [
          "Inkomst. De flesta större bostadsbolag har ett inkomstkrav. Ett vanligt krav är att din inkomst före skatt ska vara minst tre gånger hyran. Är hyran 8 000 kr i månaden blir kravet 24 000 kr i månaden före skatt. En del värdar, bland annat de kommunala bolagen i Stockholm, räknar i stället på hur mycket du har kvar att leva på när hyran är betald, ofta utifrån Kronofogdens normalbelopp.",
          "Vilka inkomster som räknas skiljer sig åt. En del värdar godtar a-kassa, sjukpenning, pension, bostadsbidrag, barnbidrag, underhållsstöd och försörjningsstöd. Andra är mer restriktiva. Många vill också se att anställningen eller inkomsten håller minst sex månader framåt. Har du eget företag kan värden kräva att det har funnits minst ett år och att du kan visa inkomsten. Studerar du räknar en del värdar studiebidraget, och studentbostäder har egna villkor som utgår från studierna i stället för lönen.",
          "Kreditupplysning. Nästan alla bostadsbolag tar en kreditupplysning. Det är tillåtet när du har sökt en bostad hos värden, eftersom värden då kan ha ett legitimt behov av att bedöma din ekonomi. Du ska få en kopia av upplysningen, så att du ser vem som frågade och vad som lämnades ut.",
          "Referenser och intyg. Många kontaktar din nuvarande eller förra hyresvärd för att höra om hyran betalats i tid och om boendet skötts. Räkna också med att visa anställningsavtal eller ett anställningsintyg från arbetsgivaren och dina senaste lönespecifikationer. Ha dem klara innan du söker.",
        ],
      },
      {
        h: "Om du har betalningsanmärkning eller inte når inkomstkravet",
        p: [
          "Många värdar säger nej till sökande med betalningsanmärkningar eller skulder hos Kronofogden. Det är ändå inte alltid stopp. Det kan bero på vad skulden gäller, hur stor den är och hur gammal den är. Hos de kommunala bostadsbolagen i Stockholm kan du godkännas trots en skuld hos Kronofogden, om du har betalat enligt en plan, haft löneutmätning eller skuldsanering i minst sex månader utan avbrott och inte fått nya anmärkningar. En hyresskuld måste vara betald innan ansökan prövas, och skulder från tidigare boende godtas inte.",
          "En betalningsanmärkning finns kvar i tre år för en privatperson, även om du har betalat skulden. Har du betalat, skriv det kort i brevet. Det är bättre att värden får veta det av dig än från kreditupplysningen.",
          "Når du inte upp till inkomstkravet kan du fråga om värden godtar en borgensman eller en deposition. Fråga också din kommun om kommunal hyresgaranti. Då går kommunen i borgen för hyran, om du har ekonomi för ett eget boende men ändå har svårt att få kontrakt, till exempel för att du är projektanställd. Alla kommuner erbjuder det inte. Men sedan den 1 september 2026 måste kommunen ställa en hyresgaranti för en barnfamilj som bor i kommunen och behöver garantin för att få en permanent hyresrätt med besittningsskydd. Om kommunen får betala hyran åt dig kan du bli skyldig att betala tillbaka pengarna.",
          "Är du ensamstående förälder, skriv alla inkomster hushållet har, även barnbidrag, underhållsstöd eller underhållsbidrag och bostadsbidrag, om värden räknar dem.",
        ],
      },
      {
        h: "Personligt brev till hyresvärden: det här ska stå med",
        p: [
          "Vilka som ska bo i lägenheten: antal vuxna och barn, och om ni har husdjur. Skriv det rakt ut. Det kommer fram ändå när ni skriver kontrakt.",
          "Vad du jobbar med, vilken typ av anställning du har och ungefär vad hushållet har i inkomst per månad. En siffra säger mer än orden ”stabil ekonomi”.",
          "Varför just den här lägenheten: läget, storleken, avståndet till jobb eller skola. En mening som visar att du har läst annonsen räcker.",
          "Varför du är en trygg hyresgäst. Skriv hur länge du har bott där du bor nu, att hyran har betalats i tid, vem som kan lämna referens och hur länge du räknar med att bo kvar. Avsluta med när du kan flytta in och hur värden når dig.",
          "Så kan det låta: ”Hej, jag heter [namn] och söker tvåan på [gatan]. Jag arbetar som undersköterska på [arbetsplats], fast anställd sedan 2021, och tjänar 29 000 kr i månaden före skatt. Vi är två vuxna och en katt. Jag har hyrt min nuvarande lägenhet i fyra år och alltid betalat i tid, och min hyresvärd [namn, telefon] kan lämna referens. Vi kan flytta in den 1 december.”",
          "Vanliga misstag är samma brev till alla annonser, långa förklaringar om varför ni måste flytta och ord som ”skötsam” utan något som visar det. Ett brev på en sida räcker.",
        ],
      },
      {
        h: "Vad hyresvärden inte får göra, och hur du undviker bedrägerier",
        p: [
          "En hyresvärd får inte välja bort dig av skäl som har samband med etnisk tillhörighet, religion eller annan trosuppfattning, kön, könsöverskridande identitet eller uttryck, sexuell läggning, funktionsnedsättning eller ålder. Det kan gälla även en privatperson som annonserar ut sin bostad till allmänheten. Uthyrning inom privat- och familjelivet, till exempel till en vän eller släkting, omfattas däremot inte. Åldersgränser, till exempel för ungdoms- och seniorbostäder, kan vara tillåtna om de har ett berättigat syfte och är lämpliga och nödvändiga för att nå det syftet. Tror du att du har blivit diskriminerad kan du anmäla det till Diskrimineringsombudsmannen, DO.",
          "Det är brottsligt att ta betalt för ett hyreskontrakt, och det är också brottsligt att betala för ett. Den som säljer ett kontrakt kan dömas till fängelse i upp till två år, och upp till fyra år om brottet är grovt. Den som köper kan dömas till böter eller fängelse. Den som har köpt ett svartkontrakt riskerar dessutom att förlora lägenheten.",
          "Bedragare lägger ut lägenheter med bra läge och rimlig hyra, ofta i andra hand, och ber om flera månadshyror i förskott eller som deposition. Polisen råder: betala aldrig innan du har sett lägenheten och kontraktet är påskrivet. Be om legitimation, kontrollera med fastighetsägaren att den som hyr ut verkligen har lägenheten och betala inte via anonyma betaltjänster.",
          "Skicka inte kopia på pass eller körkort till någon du inte har kunnat kontrollera. Betala heller ingen avgift för att någon ska förmedla en lägenhet till dig. Det är förbjudet, utom för yrkesmässiga bostadsförmedlingar, och de får bara ta en begränsad avgift om du faktiskt får ett kontrakt.",
        ],
      },
      {
        h: "Så skriver du din hyresansökan här",
        p: [
          "Här på Skrivklart fyller du i fälten ovan: Lägenheten, Vem ska bo där, Varför just den och Varför du är en säker hyresgäst. Skriv inkomsten under Vem ska bo där och när du kan flytta in under Varför just den, annars blir det en tom plats i brevet. Du ser början av brevet direkt, gratis. Hela brevet kostar 59 kr, en gång. Inget konto.",
          "Det som brevet inte vet, till exempel namn, telefonnummer och e-post, står inom [hakparentes]. Fyll i allt sådant, läs igenom och ändra det som inte stämmer. Det ska låta som du, och allt som står i brevet ska du kunna visa om värden frågar.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur mycket måste jag tjäna för att få hyra en lägenhet?",
        a: "Det bestämmer varje hyresvärd. Ett vanligt krav är att inkomsten före skatt är minst tre gånger hyran. Andra värdar räknar på hur mycket du har kvar att leva på efter hyran, och några har inget inkomstkrav alls. Kraven står oftast i annonsen.",
      },
      {
        q: "Räknas försörjningsstöd och underhållsstöd som inkomst?",
        a: "Det beror på värden. En del, till exempel de kommunala bostadsbolagen i Stockholm, räknar studiebidrag, bostadsbidrag, barnbidrag, underhållsbidrag, a-kassa och försörjningsstöd från Stockholms kommun. Andra godtar bara lön och pension. Fråga innan du söker, och skriv i brevet vilka inkomster hushållet har.",
      },
      {
        q: "Får hyresvärden ta en kreditupplysning på mig?",
        a: "Ja. En hyresvärd kan ha ett legitimt behov av en kreditupplysning när du söker bostad hos den. Du ska få en kopia från kreditupplysningsföretaget. Tror du att någon har tagit en upplysning utan skäl kan du kontakta kreditupplysningsföretaget, som ska utreda det.",
      },
      {
        q: "Kan jag få en lägenhet om jag har betalningsanmärkning?",
        a: "Ibland. Många värdar säger nej, men en del gör en egen bedömning av vad skulden gäller och hur stor den är. En betalningsanmärkning finns kvar i tre år för en privatperson. Fråga om värden godtar en borgensman eller en deposition.",
      },
      {
        q: "Hur långt ska ett personligt brev till hyresvärden vara?",
        a: "En sida räcker, ungefär 200 till 400 ord. Värden ska snabbt kunna se vilka ni är, vad ni har för inkomst, varför ni är trygga hyresgäster och när ni kan flytta in.",
      },
      {
        q: "Vad ska jag tänka på om jag hyr i andra hand?",
        a: "Den som hyr ut en hyresrätt i andra hand behöver tillstånd från sin hyresvärd eller från hyresnämnden. För en bostadsrätt krävs i stället samtycke från bostadsrättsföreningens styrelse, eller tillstånd från hyresnämnden om styrelsen har sagt nej. Be att få se tillståndet. Kräv ett skriftligt kontrakt, och se till att en eventuell deposition står i det. Hyr du av en privatperson som äger bostaden, till exempel en bostadsrätt eller ett hus, gäller sedan den 1 juli 2026 privatuthyrningslagen, och du har rätt att kräva att avtalet skrivs ner. Hyresgästföreningen råder att depositionen inte ska vara mer än ett par månadshyror.",
      },
      {
        q: "Vad händer efter att jag har skickat ansökan?",
        a: "Värden hör av sig till de sökande den vill gå vidare med. Ofta blir det visning, kreditupplysning och kontroll av intyg och referenser. Får du lägenheten skriver ni hyreskontrakt. Läs det innan du skriver under och spara en kopia. Flytten anmäler du till Skatteverket senast en vecka efter att du har flyttat in.",
      },
    ],
  },
  klagomal: {
    seoTitle: "Skriva klagomål – mall för klagomålsbrev, 59 kr | Skrivklart",
    seoDescription:
      "Skriv ett klagomål till företag, myndighet, kommun eller vården, med kronologi, tydligt krav och bilagor. Se början gratis, färdigt klagomålsbrev för 59 kr.",
    intro:
      "I ett klagomål berättar du vad som har hänt, vad du vill ha och när du vill ha svar. Det kan gå till ett företag, en myndighet, kommunen eller vården. Här får du veta vart du skickar det, vad det ska innehålla och vad du kan göra om svaret inte räcker.",
    sections: [
      {
        h: "Klagomål, reklamation eller överklagande?",
        p: [
          "Ett klagomål handlar om hur du har blivit behandlad, eller om något som har gått snett. Det kan vara ett dåligt bemötande, ett ärende som står still, ett löfte som inte hölls eller något som hände i vården. Du berättar vad som hänt och säger vad du vill.",
          "Är det fel på en vara eller tjänst som du har köpt är det en reklamation. Den har egna regler. Reklamerar du inom två månader från att du upptäckte felet är du alltid i tid. För varor gäller rätten att reklamera fel som visar sig inom tre år från köpet. För det finns en egen mall här: Reklamation.",
          "Är du missnöjd med ett beslut, till exempel ett avslag på ett bidrag, ska du begära omprövning eller överklaga. Ett klagomål ändrar inte beslutet, och tiden för att överklaga går ändå. Hur lång tid du har står i beslutet. Ofta är det tre veckor. Hos Försäkringskassan är det två månader.",
          "Ibland behövs båda. Du överklagar beslutet och skriver ett separat klagomål om hur ärendet sköttes.",
        ],
      },
      {
        h: "Så klagar du på ett företag",
        p: [
          "Skriv till kundtjänst. Ring eller chatta gärna, men skicka också något skriftligt: ett mejl, ett kontaktformulär eller ett brev. Det går att visa upp i efterhand. Spara en kopia av det du skickar och av svaret.",
          "Räcker inte svaret kan du be att ärendet går vidare till en chef eller till företagets klagomålsansvariga. Banker och försäkringsbolag har i regel en klagomålsansvarig som utreder om bolaget har gjort fel. Konsumenternas Bank- och finansbyrå och Konsumenternas Försäkringsbyrå ger gratis vägledning.",
          "Skriv när du vill ha svar, till exempel inom 14 dagar. Gäller det något du har köpt och har du ett krav, till exempel pengar tillbaka, kan du anmäla till Allmänna reklamationsnämnden (ARN). Det gäller om företaget säger nej eller inte har svarat inom skälig tid. ARN räknar med ungefär fyra veckor. Anmälan ska komma in inom ett år från att du första gången klagade hos företaget.",
          "Anmälan till ARN kostar 150 kr. Kravet måste vara värt minst ett visst belopp, till exempel 750 kr för de flesta varor och 3 000 kr för bank och försäkring. ARN prövar inte krav som bara gäller bemötande eller en ursäkt. Beslutet är en rekommendation, inte en dom, och det tar ofta omkring sex månader. För anmälan finns en egen mall: ARN-anmälan.",
          "Gratis råd får du hos Konsumentverket. Där förklarar de vad som gäller, men de kontaktar inte företaget åt dig. Kommunens konsumentvägledare, om din kommun har en, kan ofta ge mer personligt stöd, till exempel hjälp med en reklamation eller en anmälan till ARN.",
        ],
      },
      {
        h: "Klagomål på en myndighet eller kommunen",
        p: [
          "Börja hos myndigheten själv. Skriv till din handläggare eller till myndighetens funktion för synpunkter och klagomål, och ange ditt ärendenummer. Enligt förvaltningslagen ska myndigheten hjälpa dig och sköta ärendet så enkelt och snabbt som möjligt. Det kan du hänvisa till i brevet.",
          "Står ditt ärende still? Har du ansökt om något och inte fått beslut inom sex månader får du skriftligen begära att myndigheten avgör ärendet. Myndigheten ska då inom fyra veckor antingen fatta beslut eller avslå din begäran i ett särskilt beslut. Ett sådant avslag går att överklaga.",
          "Gäller det skolan, börja med läraren eller rektorn. Löser det sig inte skickar du ett skriftligt klagomål till huvudmannen. Det är kommunen, eller för en friskola det företag, den stiftelse eller den styrelse som driver skolan. Skolinspektionen tar i regel emot ditt ärende först när huvudmannen har fått klagomålet.",
          "Gäller det socialtjänsten, till exempel hemtjänst, äldreboende eller försörjningsstöd, eller stöd enligt LSS, klagar du först hos kommunen. Du kan också lämna uppgifter till IVO genom Berätta för IVO. Du får bara en bekräftelse på att uppgifterna kommit in, men IVO använder dem i sin tillsyn.",
          "Rättar myndigheten inte till det kan du anmäla till JO, Riksdagens ombudsmän. JO granskar statliga och kommunala myndigheter och kan kritisera dem. JO kan inte ändra ett beslut och prövar inte skadestånd. JO utreder normalt inte sådant som ligger mer än två år tillbaka.",
        ],
      },
      {
        h: "Klagomål på vården: vårdgivaren, patientnämnden och IVO",
        p: [
          "Klaga först där du fick vård, hos mottagningen eller vårdgivaren. Enligt patientsäkerhetslagen ska vårdgivaren svara snarast. Svaret ska förklara vad som hänt och, när det behövs, vad vården gör för att det inte ska hända igen. Socialstyrelsen anger att verksamheten bör bekräfta direkt att klagomålet kommit in och svara inom fyra veckor. Är patienten under 18 år bör svaret komma snabbare.",
          "Vill du inte ta kontakten själv kan patientnämnden i din region hjälpa dig. Det kostar inget. Patientnämnden utreder inte och avgör inte vem som har rätt, men hjälper dig att få svar från vården. Den hjälper också till med tandvård som regionen bedriver eller betalar för.",
          "Är du fortfarande inte nöjd kan du lämna ett klagomål till IVO, Inspektionen för vård och omsorg. Du ska först ha vänt dig till vårdgivaren eller patientnämnden. IVO utreder bara de allvarligaste fallen, till exempel en skada som inte går över, ett dödsfall, något som hänt under psykiatrisk tvångsvård eller när vården allvarligt har kört över dig. IVO utreder i regel inte händelser som ligger mer än två år tillbaka, så vänta inte för länge. Inom ungefär en månad får du besked om IVO ska utreda. Själva utredningen tar lång tid, enligt IVO i genomsnitt omkring 23 månader just nu.",
          "Ett klagomål till vården, patientnämnden eller IVO ger ingen ersättning. Har du skadats i vården gör du en patientskadeanmälan. Gäller det vård som regionen driver eller betalar för skickar du den till Löf, regionernas ömsesidiga försäkringsbolag. Gäller det annan vård, fråga vårdgivaren vilken patientförsäkring som gäller. Anmälan ska göras inom tio år från att skadan orsakades, alltså från behandlingen eller händelsen och inte från när du märkte skadan. Vänta inte med anmälan.",
        ],
      },
      {
        h: "Det här ska stå i ett klagomålsbrev",
        p: [
          "Rubrik och referens: ordet klagomål och vad det gäller. Lägg till ärendenummer, ordernummer eller kundnummer.",
          "Vem du är: namn, adress och hur du nås. Personnummer bara om mottagaren behöver det för att hitta ditt ärende.",
          "Vad som har hänt, i datumordning. Ett datum per händelse, vem du pratade med och vad som sades. Skriv det du vet, inte vad du tror att någon tänkte.",
          "Vad du vill: ett tydligt krav. Det kan vara ett skriftligt svar, en rättelse, ett beslut, en ursäkt eller ersättning med ett belopp. Skriv också när du vill ha svar.",
          "Bilagor: en lista över kopiorna som du skickar med, till exempel kvitton, beslut, mejl och bilder. Skicka kopior och behåll originalen.",
          "Ett kort exempel: Klagomål, ordernummer 12345. Den 3 september ringde jag er kundtjänst om att paketet inte kommit. Den 10 september lovade ni att skicka ett nytt, men inget har kommit. Jag vill att ni senast den 15 oktober skickar varan eller betalar tillbaka 450 kr. Bilagor: orderbekräftelse, mejl från 10 september.",
        ],
      },
      {
        h: "Så skriver du klagomålet här",
        p: [
          "Ett klagomål som är långt och argt och saknar krav leder sällan någonstans. Ta en sak per brev. Skriv lugnt, även om du är arg. Den som läser ska förstå ärendet utan att ha pratat med dig.",
          "Fyll i fälten ovan: vem brevet ska till, vad som har hänt och vad du vill. Skriv i fältet om vad du vill också när du vill ha svar, till exempel inom 14 dagar. Början av brevet ser du direkt, gratis. Hela klagomålsbrevet med kronologi, tydligt krav och plats för bilagor kostar 59 kr. Inget konto.",
          "Läs igenom brevet och fyll i allt som står inom [hakparentes], till exempel ärendenummer, datum och bilagor. Skicka det sedan skriftligt. Spara en kopia och skriv upp när du skickade det. Skrivklart ger ett färdigt utkast, inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur skriver man ett klagomål till ett företag?",
        a: "Skriv till kundtjänst eller till företagets klagomålsansvariga. Berätta kort vad som hänt, i datumordning, och säg vad du vill ha och när du vill ha svar. Skicka det skriftligt och spara en kopia. Gäller det ett köp och säger företaget nej kan du anmäla till ARN. Det kostar 150 kr, kravet måste vara värt minst ett visst belopp och anmälan ska göras inom ett år från att du första gången klagade.",
      },
      {
        q: "Hur lång tid har de på sig att svara?",
        a: "För företag finns i regel ingen fast svarstid i lag, så skriv själv när du vill ha svar. Bankens klagomålsansvariga bör normalt svara inom 14 dagar. Vården bör enligt Socialstyrelsen svara inom fyra veckor. Har en myndighet inte avgjort din ansökan inom sex månader kan du skriftligen begära att den gör det. Inom fyra veckor ska den då antingen fatta beslut eller avslå din begäran i ett beslut som går att överklaga.",
      },
      {
        q: "Var klagar man på vården?",
        a: "Först hos vårdgivaren där du fick vård. Patientnämnden i din region kan hjälpa dig att få svar, och det kostar inget. Gäller det en allvarlig händelse, som en bestående skada eller ett dödsfall, kan du lämna ett klagomål till IVO när vården har fått svara. IVO utreder i regel inte händelser som ligger mer än två år tillbaka. Vill du ha ersättning för en skada gör du en patientskadeanmälan. För vård som regionen driver eller betalar för skickar du den till Löf. Gäller det annan vård, fråga vårdgivaren vilken patientförsäkring som gäller.",
      },
      {
        q: "Kan andra läsa mitt klagomål?",
        a: "Det du skickar till en myndighet eller kommun blir i regel en allmän handling som vem som helst kan begära ut, om inte uppgifterna skyddas av sekretess. Ett klagomål till IVO har lågt sekretesskydd. Enligt IVO kan uppgifterna lämnas ut till medier och allmänhet. Skriv det som behövs för ärendet, men inte mer än nödvändigt om din hälsa eller din familj.",
      },
      {
        q: "Kan jag klaga anonymt?",
        a: "Ett företag eller en myndighet behöver veta vem du är för att kunna hantera ditt ärende. JO utreder normalt inte anonyma anmälningar. Om socialtjänst, LSS och vård kan du lämna uppgifter anonymt genom Berätta för IVO. Du får ingen återkoppling, och utan kontaktuppgifter får du inte heller någon bekräftelse på att uppgifterna kommit in.",
      },
      {
        q: "Kan jag få ersättning?",
        a: "Skriv hur mycket du vill ha och hur du har räknat fram beloppet. Ett företag kan gå med på kravet. Gäller det ett köp kan ARN pröva det, om kravet är värt minst ARN:s lägsta belopp. ARN:s beslut är en rekommendation och inte bindande. JO och IVO beslutar inte om ersättning. Gäller kravet ett felaktigt beslut av en statlig myndighet, eller att den inte har beslutat, prövar Justitiekanslern det. Andra skadeståndskrav prövar ofta myndigheten själv, till exempel Försäkringskassan, Skatteverket eller CSN. Krav mot en kommun eller region skickar du till kommunen eller regionen. Skador i vården ersätts genom patientförsäkringen.",
      },
      {
        q: "Kan jag klaga på min hyresvärd?",
        a: "Ja. Anmäl felet skriftligt till hyresvärden, beskriv det, ta bilder och spara en kopia. Dra inte av på hyran på egen hand. Rättas felet inte till kan du ansöka hos hyresnämnden. Den kan besluta att hyresvärden ska åtgärda bristen.",
      },
      {
        q: "Kan jag klaga på en granne som stör?",
        a: "Ja. Skriv till hyresvärden, eller till styrelsen om du bor i bostadsrätt. Skriv upp datum, tider och vad som hände. Hyresvärden ska då uppmana grannen att sluta störa. Spara en kopia av det du skickar.",
      },
    ],
  },
  "personligt-brev": {
    seoTitle: "Personligt brev – exempel, mall och tips (99 kr) | Skrivklart",
    seoDescription:
      "Så långt ska brevet vara, så börjar och avslutar du, exempel och tips utan erfarenhet. Se början av ditt brev gratis, hela brevet 99 kr. Inget konto.",
    intro:
      "I ett personligt brev förklarar du varför du söker just det här jobbet och varför du passar. Cv:t visar vad du har gjort. Brevet visar hur du tänker och arbetar. Här får du veta hur långt brevet ska vara, hur du börjar och hur du avslutar. Du får också ett exempel att utgå från och tips för dig som har lite eller ingen erfarenhet.",
    sections: [
      {
        h: "Vad är ett personligt brev, och behövs det alltid?",
        p: [
          "Ett personligt brev skickas tillsammans med cv:t när du söker jobb. De två ska komplettera varandra. Cv:t listar jobb, utbildning och datum. Brevet förklarar varför du söker och ger exempel på hur du arbetar. Skriv inte samma sak två gånger.",
          "Alla arbetsgivare ber inte om ett brev. En del använder urvalsfrågor i stället, som du svarar på direkt i ansökan. Svara då ordentligt på varje fråga. Skriv inte ”se cv” eller ”se personligt brev”, för då kan rekryteraren missa just det hen letar efter.",
          "Ber annonsen om ett personligt brev ska du skicka ett. Står det ingenting kan ett kort brev ändå hjälpa, till exempel när du byter bransch eller när cv:t inte visar varför du passar.",
        ],
      },
      {
        h: "Hur långt ska brevet vara, och vad ska stå i det?",
        p: [
          "Högst en A4-sida. Det är Arbetsförmedlingens råd, och rekryterare lägger ofta bara någon minut på varje ansökan. Det blir tre eller fyra korta stycken med luft emellan, ofta runt 300 till 400 ord.",
          "Högst upp skriver du ditt namn, telefonnummer, e-post, ort och datum. Skriv gärna tjänstens namn som rubrik, till exempel ”Ansökan: kundtjänstmedarbetare”. Står det en kontaktperson i annonsen kan du börja med ”Hej [förnamn],”. Annars räcker ”Hej,” eller så går du direkt på första meningen.",
          "Sedan kommer själva brevet. Först vilket jobb du söker och varför du passar. Därefter ett eller två konkreta exempel från jobb, skola eller fritid som visar det som annonsen efterfrågar. Sist en mening om varför du vill till just den här arbetsplatsen.",
          "Avsluta med att du gärna berättar mer, till exempel ”Jag berättar gärna mer på en intervju.” Skriv sedan ”Med vänliga hälsningar” och ditt namn. Hoppa över krystade fraser som ”i hopp om ett positivt besked”.",
          "Spara brevet som pdf eller Word, så att det går att läsa i arbetsgivarens system. Ska du klistra in texten i ett formulär, kontrollera att styckena syns ordentligt innan du skickar.",
        ],
      },
      {
        h: "Så börjar du brevet",
        p: [
          "Rekryteraren läser ofta många ansökningar och bestämmer sig snabbt. Börja därför med det som säger mest om dig och jobbet, inte med en artig inledning.",
          "Du kan börja med något du har gjort som liknar jobbet: ”I tre år har jag tagit hand om kunder i kassan på en matbutik, och nu vill jag göra det i er kundtjänst.” Eller med något i annonsen som du känner igen dig i: ”Ni söker någon som håller ordning när mycket händer samtidigt. Så ser mina dagar som barnskötare ut.” Eller med varför du byter: ”Efter tio år som undersköterska vet jag hur man lugnar en orolig människa. Nu vill jag använda det i ett nytt yrke.”",
          "Undvik att börja med egenskaper som ”stresstålig” eller ”driven”. Sådana ord står i nästan alla brev och säger lite. Visa i stället med ett exempel.",
        ],
      },
      {
        h: "Exempel på ett personligt brev",
        p: [
          "Här är ett kort exempel för en tjänst som kundtjänstmedarbetare. Byt ut det som inte stämmer för dig. Det viktiga är strukturen, inte orden.",
          "Inledning: ”De senaste fyra åren har jag rett ut problem åt kunder varje dag i butik. Nu vill jag göra det i er kundtjänst, och därför söker jag jobbet som kundtjänstmedarbetare hos [företag].”",
          "Exempel: ”På [butik] var det jag som tog hand om reklamationer och missnöjda kunder. Jag har lärt mig att lyssna klart innan jag svarar och att alltid säga när kunden får besked. Jag lärde också upp nya kollegor i kassasystemet.”",
          "Varför just dem, och avslutning: ”I annonsen skriver ni att ni vill korta svarstiderna i chatten. I butiken svarade jag också på kundernas mejl, så jag är van att skriva korta och tydliga svar. Jag berättar gärna mer på en intervju. Med vänliga hälsningar, [Ditt namn]”",
        ],
      },
      {
        h: "Personligt brev utan erfarenhet",
        p: [
          "Även om du aldrig har haft ett jobb, eller har varit borta från arbetslivet länge, har du erfarenhet som räknas. Arbetsförmedlingen lyfter fram skolprojekt, praktik, ideellt arbete och uppdrag i föreningar. Det kan vara att du har tränat ett barnlag, suttit i elevrådet eller skött kassan i en förening.",
          "Visa egenskaper med exempel. ”Jag är ansvarsfull” säger lite. ”Jag hade hand om nycklarna och låste upp hallen före varje träning i två år” säger mer. Så här kan en inledning se ut för ett första jobb: ”Jag har inte haft ett jobb än, men i två år har jag tränat ett fotbollslag med tolv tioåringar. Jag vet hur det är att ansvara för att alla kommer i tid och att ingen blir utanför. Det vill jag ta med mig till jobbet som butiksbiträde hos [företag].”",
          "Du behöver inte uppfylla alla krav i annonsen. Skriv det du har och hur du ska lära dig det som saknas, till exempel en kurs som du har börjat. Skriv inte att du kan något som du inte kan. Det brukar märkas på intervjun.",
          "Du behöver inte heller förklara varje lucka i cv:t eller skriva om barn, hälsa eller familj. Enligt föräldraledighetslagen får en arbetsgivare inte missgynna den som söker jobb av skäl som har samband med föräldraledighet. Det gäller även ledighet för vård av sjukt barn. Undantaget är om den olika behandlingen är en nödvändig följd av själva ledigheten. Det skyddet gäller föräldraledighet, inte hälsa i allmänhet. Diskrimineringslagen skyddar dessutom mot missgynnande som har samband med bland annat kön och funktionsnedsättning.",
        ],
      },
      {
        h: "Vanliga misstag och när brevet är skickat",
        p: [
          "Ett vanligt misstag är ett brev som kunde ha skickats till vilket företag som helst. Ändra åtminstone inledningen och stycket om arbetsplatsen för varje annons, och kontrollera att det står rätt företag och rätt tjänst. Ett annat misstag är för många detaljer. Välj de exempel som passar annonsen och stryk resten.",
          "Står det i annonsen att urvalet sker löpande kan tjänsten tillsättas före sista ansökningsdag. Skicka då så tidigt du kan.",
          "Är du arbetslös och inskriven hos Arbetsförmedlingen ska du redovisa jobbet i din aktivitetsrapport. Det gäller också om du till exempel praktiserar eller arbetstränar. Rapporten lämnar du mellan den 1 och den 14 varje månad, för månaden innan. Spara brevet eller en bekräftelse på att du har sökt jobbet i minst tre månader, eftersom Arbetsförmedlingen ibland gör kontroller.",
        ],
      },
      {
        h: "Skriv ditt brev här",
        p: [
          "Här på sidan fyller du i tjänsten, arbetsgivaren, din bakgrund och varför du söker, och väljer ton. Inom en minut ser du början av brevet, gratis. Hela brevet hos Skrivklart, ungefär en A4-sida och klart att klistra in, kostar 99 kr. Inget konto behövs. Vill du ha det kortare eller mer formellt kan du låta skriva om det utan att betala mer. Behöver du också en cv-profil och en LinkedIn-text ingår alla tre i Jobbpaketet för 129 kr.",
          "Arbetsförmedlingen påpekar att många arbetsgivare använder rekryteringssystem med AI-stöd och att helt AI-skrivna texter kan sorteras bort. Läs därför igenom brevet, fyll i det som står inom [hakparentes], lägg till telefonnummer och e-post högst upp och ändra det som inte låter som du.",
        ],
      },
    ],
    faq: [
      {
        q: "Hur långt ska ett personligt brev vara?",
        a: "Högst en A4-sida, det råder Arbetsförmedlingen. Tre eller fyra korta stycken brukar räcka, ofta runt 300 till 400 ord.",
      },
      {
        q: "Hur börjar man ett personligt brev?",
        a: "Skriv vilket jobb du söker och varför du passar, gärna med något konkret som du har gjort. Undvik att börja med att du härmed söker tjänsten eller med en rad egenskaper.",
      },
      {
        q: "Hur avslutar man ett personligt brev?",
        a: "Med en kort mening om att du gärna träffar dem och berättar mer, till exempel ”Jag berättar gärna mer på en intervju.” Skriv sedan ”Med vänliga hälsningar” och ditt namn. Telefon och e-post står redan högst upp.",
      },
      {
        q: "Vad skriver man i ett personligt brev utan erfarenhet?",
        a: "Skriv om skola, praktik, ideellt arbete, föreningsliv eller annat där du har tagit ansvar. Ge ett kort exempel och skriv vad du vill lära dig i jobbet.",
      },
      {
        q: "Måste man skicka ett personligt brev om annonsen inte ber om det?",
        a: "Nej. Har annonsen urvalsfrågor är det viktigaste att du svarar ordentligt på dem. Ett kort brev kan ändå hjälpa när cv:t inte visar varför du söker.",
      },
      {
        q: "Måste jag berätta att jag har barn eller har varit föräldraledig?",
        a: "Nej, det behöver inte stå i brevet. En arbetsgivare får inte missgynna den som söker jobb av skäl som har samband med föräldraledighet. Att välja bort någon för att hon är gravid räknas som diskriminering på grund av kön.",
      },
      {
        q: "Kan jag använda samma personliga brev till flera jobb?",
        a: "Grunden kan vara densamma, men anpassa inledningen och stycket om arbetsplatsen efter varje annons. Kontrollera alltid att det står rätt företagsnamn.",
      },
      {
        q: "Ska brevet skickas som pdf eller Word?",
        a: "Båda fungerar. Arbetsförmedlingen rekommenderar pdf eller Word så att brevet går att läsa korrekt. Texten du får här klistrar du in i Word eller Google Dokument. Vill du ha en pdf väljer du Skriv ut och sedan Spara som pdf. Ber annonsen dig klistra in texten i ett formulär gör du det i stället.",
      },
    ],
  },
  reklamation: {
    seoTitle: "Reklamation – mall för vara och tjänst (59 kr) | Skrivklart",
    seoDescription:
      "Reklamera en felaktig vara eller tjänst: 3 år för varor, säg till helst inom 2 månader och se vad du kan kräva. Gratis utkast, färdigt brev för 59 kr.",
    intro:
      "En reklamation är ett meddelande till företaget om att det du köpt är felaktigt och vad du vill att de gör åt det. Har du köpt av ett företag har du ett starkt skydd. Konsumentköplagen gäller för varor och konsumenttjänstlagen för hantverk och reparationer. Här ser du vilka tider som gäller, vad du kan kräva och vad som ska stå i brevet.",
    sections: [
      {
        h: "Hur länge kan du reklamera? Tre år enligt konsumentköplagen",
        p: [
          "Köper du en vara av ett företag gäller konsumentköplagen. Företaget ansvarar för fel som fanns när du fick varan och som visar sig inom tre år. Det gäller både nya och begagnade varor. Köper du begagnat på offentlig auktion bedöms felet dock utifrån utropspriset, och då har du inte rätt till prisavdrag.",
          "Felet behöver inte märkas direkt. En vara kan ha haft ett fel från början, även om det visar sig först efter en tid. Har du själv orsakat felet, till exempel genom att använda varan på fel sätt, räknas det däremot inte som fel. Det gör inte heller normalt slitage.",
          "Garantin är något annat. Den är frivillig och kommer ofta från tillverkaren. Har garantin gått ut kan du ändå reklamera enligt lagen, så länge det har gått mindre än tre år sedan du fick varan.",
          "Köper du av en privatperson gäller köplagen i stället. Där är skyddet svagare, och den yttersta gränsen är två år från att du fick varan. ARN prövar bara tvister med företag, och brevet här är skrivet för köp från företag. Men om ett företag förmedlar köpet åt en privatperson, till exempel en butik som säljer begagnat i kommission, gäller konsumentköplagen. Då ansvarar både säljaren och företaget.",
        ],
      },
      {
        h: "Skälig tid: skriv inom två månader",
        p: [
          "Du ska säga till inom skälig tid från att du märkte felet, eller borde ha märkt det. Skriver du inom två månader från att du upptäckte felet räknas det alltid som i tid.",
          "Väntar du längre kan du förlora rätten att kräva något. Skriv hellre direkt, även om du inte vet vad felet beror på. Det räcker att du beskriver vad som är fel.",
          "Visar sig felet strax innan tre år har gått kan du fortfarande reklamera. Du måste då reklamera senast två månader efter att de tre åren har gått.",
        ],
      },
      {
        h: "Fel inom två år: företaget måste bevisa att det inte är deras ansvar",
        p: [
          "Visar sig ett fel inom två år från att du fick varan räknas det som ett fel som företaget ansvarar för. Vill företaget slippa ansvaret måste de visa att felet beror på något annat, till exempel att varan har tappats.",
          "Regeln gäller inte när den inte passar varan eller felet, till exempel färskvaror som bara håller några dagar. Har du köpt ett levande djur gäller regeln bara fel som visar sig inom sex månader. För digitalt innehåll, till exempel en app eller ett spel du laddat ner, gäller den i ett år.",
          "Du behöver fortfarande kunna visa att varan faktiskt är felaktig, till exempel med bilder eller film. Företaget måste däremot bevisa att felet inte fanns från början.",
          "Efter två år är det du som behöver visa att felet fanns redan när du fick varan. Då kan ett utlåtande från någon sakkunnig behövas.",
          "Reklamerar du inom två år, eller medan garantin gäller, bör du normalt inte behöva betala för att företaget undersöker felet. Efter två år får företaget bara ta betalt om felet visar sig inte vara deras ansvar, om du fick veta avgiften i förväg och om den är rimlig.",
        ],
      },
      {
        h: "Vad kan du kräva av företaget?",
        p: [
          "I första hand kan du kräva att felet lagas eller att du får en ny vara. Du får välja. Blir ditt val orimligt dyrt jämfört med det andra får företaget oftast välja det billigare. Det ska ske inom skälig tid och utan kostnad för dig, och företaget betalar frakten.",
          "Prisavdrag eller hävning blir aktuellt om felet inte går att åtgärda, om reparationen drar ut på tiden eller misslyckas, eller om felet är allvarligt. Häva betyder att du lämnar tillbaka varan och får pengarna tillbaka, på samma sätt som du betalade. Du behöver inte nöja dig med ett tillgodokvitto eller presentkort. Har du haft stor nytta av varan innan du hävde köpet kan företaget ibland göra ett avdrag för det, ett så kallat nyttoavdrag. Är felet litet, och företaget kan visa det, får du inte häva köpet.",
          "Företaget har i regel rätt att först försöka laga eller byta, även om du hellre vill ha pengarna tillbaka. Skriv det du vill ha, men räkna med att det kan sluta med en reparation.",
          "Har du inte betalat än får du hålla inne så mycket som behövs för att täcka ditt krav. Har du köpt på faktura eller avbetalning, meddela både företaget och kreditgivaren. Du kan också kräva ersättning för kostnader som felet orsakat, till exempel resor och frakt, men inte för besväret. Vill du ha med det i brevet, skriv kostnaderna och beloppen i fältet om felet.",
        ],
      },
      {
        h: "Fel på en tjänst: konsumenttjänstlagen",
        p: [
          "Har du anlitat ett företag för att reparera, renovera, måla, städa eller förvara något gäller konsumenttjänstlagen. Den gäller arbete på saker, byggnader och mark. Tjänster på människor, som frisör, omfattas inte av lagen. Du kan ändå reklamera, och lagens regler används ofta som vägledning.",
          "Tidsreglerna liknar dem för varor. Klaga inom skälig tid. Inom två månader från att du märkte felet är alltid i tid. Den yttersta gränsen är tre år efter att arbetet blev klart. För arbete på hus, mark och andra fasta saker är den tio år.",
          "Du kan först kräva att företaget rättar till felet utan kostnad för dig. Erbjuder sig företaget direkt att rätta till felet har det i regel rätt att göra det. Gör de inte det inom skälig tid får du göra prisavdrag. Avdraget ska som regel motsvara vad det kostar att få felet åtgärdat av någon annan.",
          "Häva avtalet kan du om felet är så allvarligt att tjänsten i praktiken inte är till nytta för dig, eller om företaget har försökt rätta till felet flera gånger utan att lyckas.",
          "Regeln om att företaget måste bevisa att felet inte fanns från början gäller köp av varor. Vid tjänster behöver du i regel själv kunna visa att arbetet är felaktigt, till exempel med bilder eller ett utlåtande från en besiktningsman.",
        ],
      },
      {
        h: "Mall: det här ska stå i reklamationen",
        p: [
          "Vad du köpt, när och av vem, med pris och ordernummer. Vad som är fel, när du upptäckte det och vad du redan har sagt till företaget. Bifoga bilder och kvitto, orderbekräftelse eller kontoutdrag.",
          "Vad du kräver: reparation, ny vara, prisavdrag eller att köpet hävs. Brevet ber företaget svara inom 14 dagar. Det är ingen lagregel, men det visar att du menar allvar. Din reklamation gäller även om företaget inte svarar.",
          "Skicka skriftligt, gärna med mejl, och spara en kopia. Har ni pratat i telefon, skicka ett mejl efteråt om vad ni kom fram till. Säger företaget nej kan du anmäla till Allmänna reklamationsnämnden (ARN). Hör de inte av sig alls, vänta ändå ungefär fyra veckor innan du anmäler. Gratis hjälp på vägen får du av kommunens konsumentvägledning, om din kommun har en. Finns företaget i ett annat EU-land kan Konsument Europa hjälpa dig.",
          "Fyll i fälten ovan: företaget, vad du köpte och när, felet och vad du kräver. Du ser ett utkast direkt, gratis. Hela brevet kostar 59 kr. Inget konto. Byt ut det som står inom hakparentes, läs igenom och skicka. Skrivklart skriver brevet men ger inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Måste jag ha kvar kvittot för att reklamera?",
        a: "Nej. Ingen lag kräver kvitto. Ett kontoutdrag eller en orderbekräftelse kan räcka, men du måste kunna visa när du köpte, av vem och till vilket pris.",
      },
      {
        q: "Butiken säger att jag ska kontakta tillverkaren. Stämmer det?",
        a: "Nej. Enligt lagen kan du alltid ställa krav mot företaget som sålde varan till dig. Finns en garanti från tillverkaren kan du välja att använda den, men du måste inte.",
      },
      {
        q: "Garantin har gått ut. Kan jag ändå reklamera?",
        a: "Ja, om det har gått mindre än tre år sedan du fick varan och felet fanns från början. Garantin är frivillig och kommer utöver din reklamationsrätt.",
      },
      {
        q: "Är ångerrätt och reklamation samma sak?",
        a: "Nej. Ångerrätten gäller när du handlat på distans, till exempel på nätet, eller vid hemförsäljning. Då har du oftast 14 dagar på dig att ångra köpet, även om inget är fel. Reklamation gäller när varan eller tjänsten är felaktig.",
      },
      {
        q: "Hur lång tid får en reparation ta?",
        a: "Den ska ske inom skälig tid. Det bedöms från fall till fall, efter vilket fel det är och hur mycket du behöver varan. Konsumentverket skriver att du kan få räkna med någon eller några veckor. Drar det ut för länge kan du ha rätt till prisavdrag eller att häva köpet.",
      },
      {
        q: "Vad gör jag om företaget säger nej?",
        a: "Du kan anmäla till Allmänna reklamationsnämnden, ARN. Företaget ska ha sagt nej eller inte svarat. ARN skriver att ett företag bör ha svarat inom fyra veckor. Anmälan ska komma in inom ett år från att du först klagade och kostar 150 kr. Avgiften betalas inte tillbaka, men får du helt eller delvis rätt kan du begära att företaget ersätter den. Det måste du begära i anmälan eller under ärendet. Ditt krav måste också vara över en minsta summa, som skiljer sig mellan olika områden. Handläggningen tar normalt omkring sex månader, men ARN skriver att det just nu kan ta längre tid. Beslutet är en rekommendation. Du kan också gå till domstol.",
      },
      {
        q: "Kan jag reklamera om företaget har gått i konkurs?",
        a: "Ibland. Har säljaren gått i konkurs, lagt ner eller går inte att nå kan du rikta kravet mot ett företag tidigare i ledet som sålt varan vidare, till exempel grossisten eller importören. Säg till dem inom skälig tid. Har du betalat med kreditkort, på faktura eller avbetalning kan du ofta också ställa samma krav mot kreditgivaren.",
      },
    ],
  },
  "skola-forskola": {
    seoTitle: "Brev till skola eller förskola – ledighet, stöd | Skrivklart",
    seoDescription:
      "Ansök om ledighet, be om stöd, be skolan utreda en kränkning eller klaga hos rektorn – i skola eller förskola. Se början gratis, hela brevet 59 kr.",
    intro:
      "Ett brev eller mejl till rektorn, mentorn eller förskolan blir oftast läst och besvarat när det är kort och sakligt och säger vad du vill ha. Här går vi igenom de vanligaste ärendena: att ansöka om ledighet, anmäla kränkningar, be om särskilt stöd, ta upp frånvaro och ändra tider i förskolan. Du får veta vad skolan måste göra när ditt brev har kommit fram, vilka tidsfrister som gäller och vart du vänder dig om inget händer.",
    sections: [
      {
        h: "Ansöka om ledighet från skolan",
        p: [
          "I grundskolan och förskoleklassen är det rektorn som beslutar om ledighet. Ett barn kan få kortare ledighet för enskilda angelägenheter. Enligt förarbetena till skollagen menas med det upp till tio dagar. Rektorn kan låta någon annan besluta om sådan ledighet, så ibland är det mentorn som svarar. Ledighet längre än tio dagar kräver synnerliga skäl, alltså mycket starka skäl. Det beslutet fattar alltid rektorn själv.",
          "Ditt barn har ingen rätt till ledighet, inte heller till tio dagar om året. Rektorn väger samman hur länge barnet blir borta, hur det går i skolan, om barnet kan ta igen det som missas och hur viktig ledigheten är för barnet. Förarbetena nämner vissa resor, familjehögtider och religiösa högtider som exempel. En vanlig semesterresa räknas sällan som synnerliga skäl. Många skolor är restriktiva med ledighet.",
          "Skriv barnets namn och klass, vilka datum det gäller, varför ni behöver ledigt och hur barnet ska ta igen skolarbetet. Skicka ansökan i god tid. Många skolor har en egen blankett eller e-tjänst, så titta på skolans webbplats först. Har ni gemensam vårdnad vill skolan oftast att båda vårdnadshavarna skriver under. Förskolan omfattas inte av skolplikten, så där behöver du inte söka ledighet. I förskoleklassen gäller däremot skolplikt och samma regler som i skolan.",
          "Ett nej till ledighet kan inte överklagas till Skolväsendets överklagandenämnd. Tar du ändå barnet ur skolan räknas frånvaron normalt som ogiltig. En statlig utredning ser över reglerna. Den tittar bland annat på en övre gräns för hur lång ledighet rektorn får bevilja och på en möjlig avgift för föräldrar som tar barnet ur skolan utan beviljad ledighet. Utredningen ska vara klar senast den 31 mars 2027. Tills något nytt beslutas gäller reglerna ovan.",
        ],
      },
      {
        h: "Anmäla kränkning eller mobbning",
        p: [
          "Kränkande behandling är när någon kränker ett barns värdighet, till exempel genom att hota, håna eller frysa ut. Det kan vara en annan elev eller någon i personalen. All personal i skolan och förskolan ska aktivt uppmärksamma och motverka kränkande behandling och trakasserier och se till att det som händer blir hanterat. Det gäller även om det bara har hänt en gång.",
          "Sedan den 1 augusti 2026 gäller nya regler för vad som ska anmälas vidare. Personalen ska informera rektorn när ett barn anser sig ha blivit utsatt för allvarlig eller upprepad kränkande behandling. Det är personalen som bedömer om det är allvarligt eller upprepat. Upprepat betyder att det har hänt mer än en gång. Kränkningar från någon i personalen ska alltid rapporteras. Rektorn ska anmäla till huvudmannen, alltså kommunen eller den som driver en fristående skola. Huvudmannen ska skyndsamt utreda vad som har hänt och vidta de åtgärder som skäligen krävs för att det inte ska hända igen.",
          "Därför spelar det roll vad du skriver. Räkna upp varje händelse med datum, vad som hände, var det hände och vad ditt barn har berättat. Har det hänt flera gånger, skriv det. Skriv också om det kan vara ett brott, om flera barn har varit inblandade, om de som kränkt är betydligt äldre eller om ditt barn har svårt att skydda sig, till exempel på grund av en funktionsnedsättning. Sådant kan göra att kränkningen räknas som allvarlig. Be skolan utreda och svara skriftligt om vilka åtgärder den vidtar och när den följer upp.",
          "Skolan får inte straffa ditt barn för att barnet har berättat eller varit med i en utredning. Varje förskola och skola ska varje år göra en plan mot kränkande behandling, och du kan be att få läsa den. Handlar det om trakasserier eller sexuella trakasserier som har att göra med till exempel kön, etnisk tillhörighet, religion eller funktionsnedsättning gäller också diskrimineringslagen. Då måste skolan alltid utreda, även om det bara har hänt en gång, och du kan anmäla till Diskrimineringsombudsmannen. Gäller det våld eller hot kan du polisanmäla. I skolan är rektorn dessutom skyldig att polisanmäla när en elev misstänks för ett brott i samband med skolan, om inte starka skäl talar emot det.",
        ],
      },
      {
        h: "Be om särskilt stöd och åtgärdsprogram",
        p: [
          "Finns det risk att ditt barn inte når de kunskaper som minst krävs, ska skolan ge extra anpassningar i den vanliga undervisningen. Det är mindre insatser som lärarna kan göra utan något formellt beslut. Räcker det inte, eller finns det redan från början skäl att tro att extra anpassningar inte räcker, ska det anmälas till rektorn. Rektorn ska då se till att behovet av särskilt stöd utreds skyndsamt. Det gäller också när barnet har andra svårigheter i skolan, till exempel psykisk ohälsa, svårt i samspelet med andra eller upprepad frånvaro.",
          "Du kan själv be skolan utreda. Beskriv vad du ser hemma, vad lärarna har sagt och vad som redan har provats, och be om ett möte. Det du berättar ska tas på allvar, men det är rektorn som beslutar om utredningen. Ditt barn behöver ingen diagnos. En diagnos får aldrig vara ett villkor för stöd i skolan. Skolan behöver inte ditt medgivande för att utreda behovet, men en psykologisk eller medicinsk utredning får inte göras om vårdnadshavarna inte går med på det.",
          "Visar utredningen att barnet behöver särskilt stöd ska rektorn besluta om ett åtgärdsprogram. Det är ett skriftligt beslut om vilket stöd barnet behöver, hur det ska ges, när det följs upp och vem som ansvarar. Ni ska få vara med när programmet tas fram, men ni kan inte kräva en viss insats. Behövs inget särskilt stöd ska rektorn i stället besluta att inget åtgärdsprogram ska göras.",
          "Beslutet om åtgärdsprogram kan överklagas till Skolväsendets överklagandenämnd. Det gäller också ett beslut att inte göra något program och ett beslut att avsluta det. Överklagandet ska ha kommit in inom tre veckor från att ni fick del av beslutet. Det skickas till den som fattade beslutet, inte direkt till nämnden. Har ni gemensam vårdnad behöver ni i regel båda stå bakom överklagandet. Nämnden kan fastställa eller upphäva beslutet, men den bestämmer inte själv vilket stöd barnet ska få. Extra anpassningar kan inte överklagas.",
          "Reglerna om extra anpassningar och särskilt stöd i skolan ändras den 1 juli 2028. Då ersätts extra anpassningar bland annat av stödundervisning i svenska och matematik. Fram till dess gäller det som står här. I förskolan finns inga åtgärdsprogram, men rektorn ska se till att ett barn som behöver särskilt stöd får det, och ni ska få vara med och utforma stödet. De reglerna ändras inte.",
        ],
      },
      {
        h: "Skolfrånvaro: när barnet inte kommer till skolan",
        p: [
          "Är ditt barn sjukt eller borta av något annat skäl ska du anmäla det till skolan så snart som möjligt, på det sätt som skolan har bestämt. Är barnet borta utan giltigt skäl ska rektorn se till att du får veta det samma dag.",
          "Har barnet upprepad eller längre frånvaro ska rektorn se till att frånvaron utreds skyndsamt. Det gäller även giltig frånvaro, till exempel när barnet är sjukanmält. Utredningen görs tillsammans med barnet, dig och elevhälsan och ska visa varför barnet är borta. Det finns ingen fast gräns för hur många dagar det ska vara. Finns det tecken på att barnet behöver särskilt stöd ska det också utredas.",
          "Frånvaro kan ha orsaker i skolan, till exempel otrygghet, kränkningar eller att barnet inte får det stöd det behöver. Skriv vad du ser, vad barnet säger och vad ni redan har provat. Be om en frånvaroutredning och ett möte med elevhälsan. Som vårdnadshavare ansvarar du för att barnet går i skolan. Kommunen kan i sista hand förelägga dig att se till att det sker, med vite. Det betyder att du kan behöva betala en summa pengar om du inte gör det kommunen kräver. Det får kommunen bara göra om frånvaron beror på att du inte har gjort det du ska. Ett brev där du ber skolan om hjälp visar vad du har gjort.",
          "I gymnasiet kan skolan rapportera ogiltig frånvaro till CSN. Är frånvaron upprepad och mer än fyra timmar under en månad kan studiebidraget dras in. CSN meddelar då Försäkringskassan, som kan dra in till exempel bostadsbidrag och flerbarnstillägg.",
        ],
      },
      {
        h: "Förskolan: schema, tider och klagomål",
        p: [
          "Förskolans chef heter rektor sedan 2019. Det är rektorn du skriver till om schema, stöd, oro och klagomål. Vardagsfrågor tar du med personalen på avdelningen. Reglerna om kränkande behandling och om klagomål gäller i förskolan precis som i skolan.",
          "Från ett års ålder ska barn erbjudas förskola i den omfattning som behövs för att föräldrarna arbetar eller studerar. Det gäller också om barnet har ett eget behov på grund av familjens situation eller behöver särskilt stöd i sin utveckling. Är du arbetslös, eller föräldraledig med ett syskon, ska barnet erbjudas minst tre timmar om dagen eller 15 timmar i veckan. Från hösten det år barnet fyller tre år ska alla barn erbjudas minst 525 timmar om året, och de timmarna är avgiftsfria.",
          "Kommunen behöver inte erbjuda förskola på kvällar, nätter och helger. Den ska dock sträva efter att ordna omsorg på sådana tider när föräldrarnas arbete kräver det. Ändras din situation, till exempel när du får nytt jobb, nya arbetstider eller börjar studera, behöver du oftast lämna ett nytt schema. Skriv i god tid vilka tider barnet behöver och från vilket datum, och be om skriftligt besked. Hur schemat lämnas in bestäms lokalt, och många kommuner har en e-tjänst för det. Behöver barnet mer tid än du har fått, skriv till rektorn och förklara varför.",
        ],
      },
      {
        h: "Om du inte får svar",
        p: [
          "Skriv till den som kan besluta: mentorn för vardagsfrågor och rektorn för ledighet, stöd och kränkningar. Skicka som mejl, eller klistra in texten i skolans blankett eller e-tjänst om den har en. Be om svar till ett visst datum och spara en kopia av allt du skickar.",
          "Händer inget, vänd dig till huvudmannen. För kommunala skolor och förskolor är det kommunen. För fristående är det den som driver verksamheten, till exempel ett bolag, en förening eller en stiftelse. Huvudmannen ska bekräfta att klagomålet har kommit in, utreda det skyndsamt och återkoppla till dig. Huvudmannen ska också ha skriftliga rutiner för klagomål och se till att de är kända.",
          "Blir det ändå inte bättre kan du lämna uppgifter till Skolinspektionen. Skolinspektionen vill att du först har klagat hos huvudmannen och att huvudmannen har fått en chans att rätta till det, och den startar inte alltid en granskning. Uppgifter om kränkningar lämnar du till Barn- och elevombudet (BEO), som är en del av Skolinspektionen. BEO läser alla uppgifter men startar inte alltid en utredning. När BEO utreder granskar BEO om huvudmannen har gjort det lagen kräver. Hittar BEO brister kan de kräva att huvudmannen åtgärdar dem, och i vissa fall kan BEO kräva skadestånd för barnets räkning. Går ditt barn i en fristående förskola vänder du dig till kommunen, inte till Skolinspektionen. Gäller det kränkande behandling kan du ändå lämna uppgifter till BEO.",
          "Här på sidan väljer du vad ärendet gäller: ledighet, extra stöd, oro eller kränkning, eller schema och omsorgstid. Gäller det frånvaro eller ett klagomål väljer du Annat. Sedan fyller du i vem brevet ska till, barnets namn och klass eller avdelning och vad som har hänt, och väljer ton. Du ser början av brevet direkt, gratis. Hela brevet kostar 59 kr. Det har ämnesrad, händelserna i datumordning, vad du begär och ett datum för svar. Inget konto behövs. Skrivklart hjälper dig att formulera brevet, men det är inte juridisk rådgivning.",
        ],
      },
    ],
    faq: [
      {
        q: "Har mitt barn rätt till tio dagars ledighet om året?",
        a: "Nej. Det finns ingen rätt till ledighet. Rektorn får bevilja kortare ledighet efter en samlad bedömning av barnets skolsituation. Enligt förarbetena menas med kortare ledighet upp till tio dagar. Längre ledighet kräver synnerliga skäl, och en vanlig semesterresa räknas sällan dit.",
      },
      {
        q: "Måste båda vårdnadshavarna skriva under ledighetsansökan?",
        a: "Har ni gemensam vårdnad vill skolan oftast att båda skriver under. Många skolor har en egen blankett eller e-tjänst för det. Är det svårt att få den andra förälderns underskrift, kontakta skolan och fråga hur ni ska göra.",
      },
      {
        q: "Kan man överklaga ett nej till ledighet?",
        a: "Nej, inte till Skolväsendets överklagandenämnd. Ledighet är inte ett av de beslut som kan överklagas dit. Har du nya skäl kan du skriva till rektorn igen och förklara.",
      },
      {
        q: "Måste skolan utreda när mitt barn blir kränkt?",
        a: "Inte alltid. Personalen ska alltid ta tag i det som har hänt. Sedan den 1 augusti 2026 ska personalen informera rektorn om allvarliga eller upprepade kränkningar, och alltid om kränkningar från personal. Det är personalen som bedömer om det är allvarligt eller upprepat. Huvudmannen ska då utreda skyndsamt och vidta åtgärder. Trakasserier och sexuella trakasserier, till exempel kopplade till kön, etnisk tillhörighet eller funktionsnedsättning, måste skolan alltid utreda, även om det bara har hänt en gång. Skriv därför ner varje tillfälle med datum.",
      },
      {
        q: "Måste mitt barn ha en diagnos för att få särskilt stöd?",
        a: "Nej. En diagnos får aldrig vara ett villkor för stöd i skolan. Det som avgör är vilket behov barnet har i skolan.",
      },
      {
        q: "Hur lång tid har jag på mig att överklaga ett åtgärdsprogram?",
        a: "Tre veckor från den dag ni fick del av beslutet. Skicka överklagandet till den som fattade beslutet, oftast skolan. Kommer det in i tid skickas det vidare till Skolväsendets överklagandenämnd. Nämnden kan fastställa eller upphäva beslutet, men bestämmer inte själv vilket stöd barnet ska få.",
      },
      {
        q: "Hur mycket frånvaro krävs innan skolan måste göra något?",
        a: "Det finns ingen fast gräns. Vid upprepad eller längre frånvaro ska rektorn se till att den utreds skyndsamt, även när barnet är sjukanmält. Du kan själv be om en frånvaroutredning.",
      },
      {
        q: "Hur många timmar förskola får mitt barn om jag är arbetslös eller föräldraledig?",
        a: "Minst tre timmar om dagen eller 15 timmar i veckan, från ett års ålder. För föräldralediga gäller det om du är ledig med ett syskon. Från hösten det år barnet fyller tre år ska alla barn erbjudas minst 525 avgiftsfria timmar om året.",
      },
    ],
  },
  skuldebrev: {
    seoTitle: "Skuldebrev – mall för lån mellan privatpersoner | Skrivklart",
    seoDescription:
      "Skriv ett skuldebrev när du lånar ut till en vän eller släkting: belopp, ränta, återbetalning och försening. Se början gratis, hela för 99 kr. Inget konto.",
    intro:
      "Ett skuldebrev, ibland kallat revers, är ett skriftligt löfte från den som lånar att betala tillbaka. Det visar tydligt vad ni har kommit överens om, och det är ditt bästa bevis om pengarna inte kommer tillbaka. Nedan går vi igenom vad som gäller när du lånar ut pengar till en vän eller någon i familjen: vad skuldebrevet ska innehålla, ränta, preskription och vad du gör om lånet inte betalas.",
    sections: [
      {
        h: "Behövs ett skuldebrev när man lånar ut till en vän?",
        p: [
          "Det finns inga formkrav för lån mellan privatpersoner. Ett lån som ni bara har pratat om gäller också. Problemet kommer om ni blir oense. Då är det du som lånat ut som måste kunna visa att det var ett lån och vad ni bestämde.",
          "En Swish eller en banköverföring visar att pengar har skickats, men inte varför. Utan något skriftligt kan det bli ord mot ord om det var ett lån, en gåva eller betalning för något annat.",
          "Konsumentkreditlagen gäller när ett företag lånar ut till en konsument, eller när ett företag förmedlar lånet som ombud för långivaren. Den 20 november 2026 ersätts den av en ny konsumentkreditlag med samma grundregel. Lånar du själv ut till en vän, ett syskon eller ditt vuxna barn bestämmer ni villkoren själva. Just därför behöver de stå på papper.",
        ],
      },
      {
        h: "Enkelt eller löpande skuldebrev?",
        p: [
          "Ett enkelt skuldebrev är ställt till en namngiven person, till exempel ”till Anna Svensson”. Skriv alltid ut långivarens namn. Ett skuldebrev där det inte framgår vem som ska få betalt räknas som löpande. Papperet är ett bevis på skulden. Kommer det bort finns skulden kvar, men den blir svårare att bevisa.",
          "Ett löpande skuldebrev är ställt till ”innehavaren” eller till ”Anna Svensson eller order”. Då är det papperet i sig som är värt pengarna. Den som har det i sin hand antas ha rätt att få betalt. Den som betalar hela skulden har rätt att samtidigt få tillbaka originalet. Även ett enkelt skuldebrev kan säljas vidare, men då får den nya ägaren aldrig bättre rätt än du hade. Med ett löpande skuldebrev kan köparen få bättre rätt.",
          "För låntagaren är ett löpande skuldebrev mer riskabelt. Säljs det vidare till någon som inte känner till era mellanhavanden kan låntagaren bli tvungen att betala den nya ägaren, till exempel om hen redan har betalat hela lånet till dig utan att få tillbaka originalet.",
          "Och för dig som lånar ut: tappar du bort ett löpande skuldebrev måste du ansöka hos Kronofogden om att det dödas, alltså förklaras ogiltigt, innan du kan driva in skulden. Det kostar en avgift och tar minst ett år, eftersom Kronofogden först kungör förlusten och ger den som har papperet tid att höra av sig.",
          "Mellan vänner och familj räcker nästan alltid ett enkelt skuldebrev.",
        ],
      },
      {
        h: "Det här ska stå i skuldebrevet",
        p: [
          "Namn, personnummer och adress för den som lånar ut och den som lånar. Beloppet, gärna i både siffror och bokstäver. Datum när pengarna betalades ut och hur, till exempel överföring till ett visst konto.",
          "Om lånet har ränta eller är räntefritt. Hur det ska betalas tillbaka: ett datum för hela beloppet, eller delbetalningar med belopp och datum. Står det ingen förfallodag måste låntagaren betala när du begär det.",
          "Vad som gäller vid försening, och eventuell säkerhet. Sist ort, datum och låntagarens underskrift. Underskriften visar att låntagaren har tagit på sig skulden och gör skuldebrevet till ett starkt bevis. Du som lånar ut behåller originalet och låntagaren får en kopia.",
          "Ge kvitto på varje inbetalning. När allt är betalt lämnar du tillbaka originalet till låntagaren, eller skriver ”Skulden är betald i sin helhet” med datum och din underskrift på det.",
          "Hos Skrivklart fyller du i vilka ni är, beloppet och villkoren, och får ett enkelt skuldebrev. Början av texten ser du direkt, gratis. Hela skuldebrevet, med paragrafer om belopp, ränta, återbetalning, försening och underskrift, kostar 99 kr. Skrivklart skriver texten åt dig, men det är inte juridisk rådgivning. Gäller det stora belopp eller säkerhet i en bostad, låt en jurist läsa igenom.",
        ],
      },
      {
        h: "Ränta på lån mellan privatpersoner",
        p: [
          "Ni bestämmer själva om lånet ska ha ränta och hur hög den ska vara. Skriver ni ingenting om ränta är lånet räntefritt fram till förfallodagen.",
          "Betalas lånet inte i tid gäller räntelagens dröjsmålsränta, om ni inte har avtalat något annat. Den är Riksbankens referensränta plus åtta procentenheter. Med en bestämd förfallodag räknas räntan från den dagen. Utan förfallodag räknas den från 30 dagar efter att du skickat ett krav på ett bestämt belopp, där det står att du tar ut dröjsmålsränta om pengarna inte betalas. Ränta tas aldrig ut för tiden innan kravet har nått låntagaren.",
          "Håll räntan rimlig. Enligt avtalslagen kan en domstol jämka, alltså ändra eller stryka, ett oskäligt villkor. Har någon utnyttjat den andras trångmål, oförstånd, lättsinne eller beroende ställning för att få en förmån som står i uppenbart missförhållande till vad hen själv ger, gäller avtalet inte mot den som drabbats.",
          "Får du ränta tar du själv upp den i din deklaration, i punkt 7.2 (Ränteinkomster, utdelningar m.m.). Skatten är 30 procent. Under övriga upplysningar skriver du låntagarens namn och personnummer, hur mycket ränta du har fått och hur stor skulden var den 31 december.",
          "Den som lånar får inget avdrag för ränta som betalas från och med 2026. Avdrag ges bara för vissa lån från banker och andra godkända kreditgivare, så ett lån från en privatperson ger inget avdrag, inte ens om låntagaren har lämnat säkerhet.",
        ],
      },
      {
        h: "Om lånet inte betalas tillbaka",
        p: [
          "Börja med en skriftlig påminnelse. Skriv belopp, vad det gäller, ett sista datum att betala och att du tar ut dröjsmålsränta om pengarna inte kommer. Ett sms eller mejl fungerar. Men preskriptionen avbryts bara om låntagaren faktiskt har fått påminnelsen, och det är du som måste kunna visa det. Spara meddelandet och helst ett svar från låntagaren, eller skicka ett rekommenderat brev med mottagningsbevis.",
          "Betalar låntagaren ändå inte kan du ansöka om betalningsföreläggande hos Kronofogden. Det fungerar lika bra mot en vän som mot ett företag. Avgiften är 300 kronor, och den kan du kräva tillbaka av låntagaren. I ansökan beskriver du lånet: belopp, när du lånade ut, vad som har betalats tillbaka, när lånet skulle vara betalt och vad som återstår.",
          "Kronofogden skickar kravet till låntagaren. Säger hen inte emot beslutar Kronofogden att skulden ska betalas, och du kan begära att den drivs in. Säger låntagaren emot kan du begära att ärendet går vidare till tingsrätten. Gäller det högst 29 600 kronor (ett halvt prisbasbelopp 2026) blir det ett förenklat tvistemål, där den som förlorar bara behöver betala en liten del av motpartens kostnader. I tingsrätten är skuldebrevet ditt viktigaste bevis.",
        ],
      },
      {
        h: "Preskription: skulden gäller i tio år",
        p: [
          "En skuld mellan privatpersoner preskriberas efter tio år. Tiden räknas från när skulden uppstod, alltså normalt när du lånade ut pengarna, inte från förfallodagen. Den kortare tiden på tre år gäller bara när ett företag har sålt något till en konsument.",
          "Preskriptionen avbryts om låntagaren betalar ränta eller amortering, lovar att betala eller på annat sätt erkänner skulden. Den avbryts också om låntagaren får ett skriftligt krav eller en påminnelse från dig, eller om du gör skulden gällande hos Kronofogden eller i domstol. Efter ett erkännande, krav eller en påminnelse börjar en ny tioårsperiod samma dag. Går du via Kronofogden eller domstol börjar den nya perioden när ärendet är avslutat, men bara om låntagaren har fått del av det.",
          "Betalar låntagaren regelbundet avbryts preskriptionen vid varje betalning. Har det gått länge utan betalningar, skicka en skriftlig påminnelse innan tio år har gått och se till att du kan visa att låntagaren har fått den, till exempel genom ett svar från hen eller ett mottagningsbevis. När skulden väl är preskriberad kan du inte längre kräva betalning.",
        ],
      },
    ],
    faq: [
      {
        q: "Måste ett skuldebrev bevittnas?",
        a: "Nej. Det finns inga formkrav på skuldebrev. Vittnen kan ändå göra det svårare att senare påstå att underskriften inte är äkta.",
      },
      {
        q: "Räcker det att låntagaren skriver under?",
        a: "Ja. Låntagarens underskrift visar att hen har tagit på sig skulden. Underskriften kan vara på papper eller digital, till exempel med BankID via en signeringstjänst. Låt gärna båda skriva under, så syns det att ni är överens om villkoren.",
      },
      {
        q: "Kan man skriva ett skuldebrev i efterhand?",
        a: "Ja. Skriv när och hur pengarna betalades ut. När låntagaren skriver under erkänner hen samtidigt skulden, och då börjar preskriptionstiden om, förutsatt att skulden inte redan hunnit preskriberas.",
      },
      {
        q: "Måste jag ta ut ränta när jag lånar ut till familjen?",
        a: "Nej. Ni bestämmer själva. Skriv ut att lånet är räntefritt, så blir det inte oklart. Betalas lånet för sent gäller ändå räntelagens dröjsmålsränta, om ni inte har skrivit något annat.",
      },
      {
        q: "Ska jag skriva skuldebrev när jag lånar ut till mitt barn?",
        a: "Ja, om pengarna ska betalas tillbaka. En gåva från förälder till barn räknas som förskott på arv om inget annat sägs. Med ett skuldebrev är det tydligt att det är ett lån, och skulden finns kvar även om du skulle dö innan den är betald.",
      },
      {
        q: "Hur länge gäller en skuld till en privatperson?",
        a: "Tio år från att du lånade ut pengarna. Varje betalning, erkännande eller skriftlig påminnelse som låntagaren har fått gör att en ny tioårsperiod börjar.",
      },
      {
        q: "Vad händer med lånet om låntagaren dör?",
        a: "Skulden finns kvar och ska betalas av dödsboet innan arvet delas ut. Arvingarna ärver inte skulden, och räcker inte dödsboets tillgångar behöver de inte betala med egna pengar. Kontakta dödsbodelägarna eller den som gör bouppteckningen och visa skuldebrevet, så att skulden tas upp i bouppteckningen.",
      },
      {
        q: "Gäller ett lån utan skuldebrev?",
        a: "Ja, även ett muntligt lån gäller. Men blir ni oense är det du som lånat ut som måste visa att det var ett lån och inte en gåva. Ett skuldebrev gör det enkelt.",
      },
    ],
  },
  uppsagning: {
    seoTitle: "Uppsägningsbrev – mall och uppsägningstid | Skrivklart",
    seoDescription:
      "Säg upp dig med ett kort, tydligt brev. Uppsägningstid enligt LAS, provanställning, arbetsgivarintyg och a-kassa. Se början gratis, hela brevet 59 kr.",
    intro:
      "Ett uppsägningsbrev är ett kort besked till din arbetsgivare om att du slutar. Det behöver inte vara långt, men det ska vara tydligt: vilken tjänst det gäller, när du säger upp dig och vilken dag du räknar med att sluta. Nedan går vi igenom uppsägningstiden enligt lagen, vad som gäller under provanställning och vad du ska be om innan du går.",
    sections: [
      {
        h: "Måste man säga upp sig skriftligt?",
        p: [
          "Nej, inte enligt lagen. Lagen om anställningsskydd (LAS) kräver skrift bara när det är arbetsgivaren som säger upp. Säger du upp dig själv gäller uppsägningen även om du gör det muntligt, i ett mejl eller i ett sms. Kolla ändå att ditt anställningsavtal eller kollektivavtal inte kräver skriftlig uppsägning.",
          "Skriv ändå. Uppsägningstiden räknas från dagen arbetsgivaren fick din uppsägning. Blir ni oense om datumet senare är det du som behöver visa när det skedde, och ett daterat mejl eller brev gör det enkelt.",
          "Berätta gärna för din chef först. Skicka sedan brevet till chefen och HR samma dag, och be om en skriftlig bekräftelse på att de har fått det.",
          "Tänk efter innan du skickar. En uppsägning är i regel bindande när arbetsgivaren har fått den, och vill du ångra dig behöver arbetsgivaren normalt gå med på det. Ett undantag: sa du upp dig i hastigt mod, till exempel under ett bråk, och tar tillbaka det direkt, kan uppsägningen sakna verkan om arbetsgivaren förstod eller borde ha förstått att du inte menade allvar. Ta i så fall tillbaka den skriftligt så fort du kan, helst samma dag, och kontakta facket.",
        ],
      },
      {
        h: "Hur lång är uppsägningstiden enligt LAS?",
        p: [
          "Säger du upp dig från en tillsvidareanställning är uppsägningstiden enligt LAS minst en månad, oavsett hur länge du har jobbat. De längre tiderna i lagen, upp till sex månader, gäller bara när arbetsgivaren säger upp dig. Har du företagsledande ställning, till exempel som vd, gäller i stället det som står i ditt avtal.",
          "Har arbetsplatsen kollektivavtal kan uppsägningstiden vara en annan, ofta mellan en och tre månader. Ibland står en längre tid i anställningsavtalet. Läs båda, eller fråga facket eller HR, innan du skriver vilken dag du slutar.",
          "Under uppsägningstiden jobbar du som vanligt och får lön. Vill du sluta tidigare behöver arbetsgivaren gå med på det, så få det gärna skriftligt. Går du innan uppsägningstiden är slut utan en sådan överenskommelse kan du bli skyldig att betala skadestånd. Enligt många kollektivavtal får arbetsgivaren också hålla inne lön för de dagar du inte arbetar.",
          "Ett undantag: har arbetsgivaren allvarligt brutit mot sina skyldigheter mot dig, till exempel genom att inte betala ut lön trots påminnelser, får du lämna anställningen direkt. Räcker skälet inte kan du bli skadeståndsskyldig, så prata med facket eller en jurist innan du gör det.",
        ],
      },
      {
        h: "Säga upp sig under provanställning eller visstid",
        p: [
          "En provanställning får vara högst sex månader. Om inget annat har avtalats får du avbryta den innan prövotiden är slut, och LAS kräver då ingen uppsägningstid från dig.",
          "Många kollektivavtal har ändå en uppsägningstid under provanställningen, ofta 14 dagar eller en månad. Kolla vad som gäller på din arbetsplats.",
          "Vill du inte fortsätta när prövotiden är slut räcker det enligt LAS att du säger det senast sista dagen. Kollektivavtalet kan kräva besked tidigare, till exempel 14 dagar innan. Säger ingen av er något blir provanställningen automatiskt en tillsvidareanställning.",
          "En tidsbegränsad anställning, till exempel ett vikariat, slutar av sig själv när perioden är slut. Den går i regel inte att säga upp i förtid, om inte anställningsavtalet eller kollektivavtalet säger att den får sägas upp. Många kollektivavtal tillåter det, till exempel med 14 dagars besked. Läs båda innan du skriver.",
          "Är du timanställd och jobbar pass för pass behöver du i regel bara jobba de pass du redan har tackat ja till. Sedan kan du tacka nej till nya.",
        ],
      },
      {
        h: "Det här ska stå i uppsägningsbrevet",
        p: [
          "Skriv ditt namn, din tjänst och att du säger upp dig, och sätt dagens datum överst. Lämnar du brevet på papper, skriv under det.",
          "Skriv vilken dag du räknar med är din sista anställningsdag. Är du osäker, skriv att du slutar enligt gällande uppsägningstid och be arbetsgivaren bekräfta datumet.",
          "Be om en skriftlig bekräftelse på att uppsägningen har kommit fram, och om ett arbetsgivarintyg. Vill du också ha besked om slutlön och semesterersättning kan du lägga till en mening om det. Du behöver inte skriva varför du slutar.",
          "Fyll i fälten ovan med arbetsgivare, tjänst och sista dag, och välj ton. Vill du nämna varför du slutar räcker en mening, men det är valfritt. Du ser början av brevet direkt, gratis, och hela brevet kostar 59 kr. Ditt namn och dina kontaktuppgifter fyller du i där brevet har hakparenteser. Skrivklart skriver brevet åt dig men ger inte juridisk rådgivning.",
        ],
      },
      {
        h: "Arbetsgivarintyg, slutlön och semesterersättning",
        p: [
          "Arbetsgivarintyget behövs om du söker ersättning från a-kassan. Där står bland annat hur länge du har jobbat och varför anställningen tog slut. Be om det redan i uppsägningsbrevet, även om du har ett nytt jobb på gång.",
          "Arbetsgivaren ska lämna de uppgifter a-kassan behöver, och intyget ska vara gratis. Det skickas oftast digitalt via arbetsgivarintyg.nu, som är a-kassornas egen tjänst. Sedan oktober 2025 hämtar a-kassan inkomstuppgifterna från Skatteverket, men intyget behövs fortfarande.",
          "Semester som du har tjänat in men inte tagit ut ska betalas ut som semesterersättning, senast en månad efter att anställningen har upphört.",
          "Har du fått betald semester i förskott minskas din semesterersättning i regel med det beloppet när du själv säger upp dig. Det gäller inte om förskottet betalades ut mer än fem år innan du slutar, eller om du slutar på grund av sjukdom eller för att arbetsgivaren allvarligt har brustit i sina skyldigheter, till exempel inte betalat lön.",
        ],
      },
      {
        h: "Om du inte har ett nytt jobb",
        p: [
          "Säger du upp dig själv utan giltig anledning stängs du av från a-kassan i 45 ersättningsdagar, ungefär nio veckor, räknat från dagen du slutade. Dagar du jobbar under den tiden räknas in. Hade du högst 10 dagar kvar av anställningen blir avstängningen 20 ersättningsdagar. Regeln finns i den nya lagen om arbetslöshetsförsäkring som gäller sedan oktober 2025.",
          "Har du inkomstförsäkring via facket gäller den oftast inte heller när du säger upp dig själv. Läs villkoren innan du skickar brevet.",
          "Giltig anledning kan till exempel vara att du inte har fått ut din lön, eller att du av hälsoskäl inte kan fortsätta i ditt arbete eller i något annat arbete hos arbetsgivaren. Att du inte trivs räcker oftast inte.",
          "Det är du som behöver visa skälet. Gäller det hälsan krävs ett läkarintyg som är utfärdat innan anställningen upphör, så skaffa det innan du säger upp dig. Spara också lönebesked och mejl.",
          "Skriv in dig hos Arbetsförmedlingen redan första dagen du är arbetslös. A-kassan prövar din rätt till ersättning från den dagen. Det skyddar också din SGI, som styr hur mycket du får från Försäkringskassan om du blir sjuk, vabbar eller är föräldraledig.",
        ],
      },
    ],
    faq: [
      {
        q: "Kan man säga upp sig via mejl eller sms?",
        a: "Ja. LAS har inget formkrav när du själv säger upp dig, men kolla att ditt anställningsavtal eller kollektivavtal inte kräver skriftlig uppsägning. Mejl är bra, eftersom det syns vilken dag du skickade det. Be om en bekräftelse på att uppsägningen har kommit fram.",
      },
      {
        q: "Hur lång uppsägningstid har jag om jag säger upp mig själv?",
        a: "En månad enligt LAS, oavsett hur länge du har jobbat. Kollektivavtalet kan ange en annan tid, och ibland står en längre tid i anställningsavtalet. Kolla båda.",
      },
      {
        q: "Måste jag skriva varför jag slutar?",
        a: "Nej. Du behöver inte ange något skäl. Slutar du av ett skäl som a-kassan kan godta, till exempel utebliven lön, är det däremot bra att ha det dokumenterat.",
      },
      {
        q: "Kan jag ångra min uppsägning?",
        a: "I regel bara om arbetsgivaren går med på det. Har du sagt upp dig i hastigt mod, till exempel under ett bråk, och tar tillbaka det direkt kan uppsägningen sakna verkan om arbetsgivaren borde ha förstått att du inte menade allvar. Säg till skriftligt så fort du kan, helst samma dag.",
      },
      {
        q: "Hur säger jag upp mig under en provanställning?",
        a: "Om inget annat har avtalats kan du avbryta provanställningen utan uppsägningstid. Kollektivavtalet kan ha en kort uppsägningstid, ofta 14 dagar eller en månad. Skriv ett kort besked med datum, och tänk på att a-kassan kan stänga av dig även när du lämnar en provanställning.",
      },
      {
        q: "Vad är skillnaden mellan arbetsgivarintyg och tjänstgöringsintyg?",
        a: "Arbetsgivarintyget är till för a-kassan och visar hur länge du har jobbat och varför du slutade. Ett tjänstgöringsintyg visar när du jobbade och vad du gjorde. Ett arbetsbetyg innehåller också ett omdöme om hur du har skött jobbet. Båda är till för framtida arbetsgivare. Det finns ingen lagstadgad rätt till betyg, men kollektivavtal kan ge rätt till det, och det räknas som god sed att arbetsgivaren skriver ett om du ber om det.",
      },
      {
        q: "När ska jag lämna in uppsägningen?",
        a: "Räkna bakåt från dagen du vill sluta. Med en månads uppsägningstid behöver arbetsgivaren ha fått uppsägningen minst en månad innan. Får arbetsgivaren den den 15 oktober blir sista dagen i regel den 15 november, inte vid nästa månadsskifte. Kollektivavtalet kan ha andra regler. Har du ett nytt jobb, kolla startdatumet innan du säger upp dig.",
      },
      {
        q: "Får arbetsgivaren lägga min semester på uppsägningstiden?",
        a: "Inte utan att du går med på det. Semester som du inte hinner ta ut får du i stället betalt för som semesterersättning.",
      },
      {
        q: "Kan jag säga upp mig när jag är sjukskriven eller föräldraledig?",
        a: "Ja. Uppsägningstiden börjar som vanligt när arbetsgivaren har fått din uppsägning. Har du inget nytt jobb, skriv in dig hos Arbetsförmedlingen första dagen efter att anställningen har tagit slut, så att du behåller din SGI.",
      },
    ],
  },
};

export function getDocArticle(slug: string): DocArticle | undefined {
  return DOC_ARTICLES[slug];
}

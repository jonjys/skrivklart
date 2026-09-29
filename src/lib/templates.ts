/** Offline/fallback writer so a sale still delivers if the model is down. */

function val(answers: Record<string, string>, key: string, fallback: string) {
  const v = answers[key]?.trim();
  return v || fallback;
}

function previewOf(full: string) {
  const parts = full.split(/\n\n+/);
  const take = parts.slice(0, 2).join("\n\n");
  if (take.length > 80) return `${take}\n\n…`;
  return `${full.slice(0, 420).trim()}\n\n…`;
}

export function fallbackDocument(
  slug: string,
  answers: Record<string, string>,
  mode: "preview" | "full",
) {
  const full = write(slug, answers);
  return mode === "preview" ? previewOf(full) : full;
}

function write(slug: string, a: Record<string, string>): string {
  switch (slug) {
    case "personligt-brev":
      return personligtBrev(a);
    case "cv-text":
      return cvText(a);
    case "linkedin-profil":
      return linkedin(a);
    case "hyresansokan":
      return hyresansokan(a);
    case "andrahandskontrakt":
      return andrahand(a);
    case "overklagande":
      return overklagande(a);
    case "reklamation":
      return reklamation(a);
    case "klagomal":
      return klagomal(a);
    case "samboavtal":
      return samboavtal(a);
    case "skuldebrev":
      return skuldebrev(a);
    case "sekretessavtal":
      return nda(a);
    case "konsultavtal":
      return konsult(a);
    case "uppsagning":
      return uppsagning(a);
    case "arn-anmalan":
      return arn(a);
    case "anstallningsavtal":
      return anstallning(a);
    case "fullmakt":
      return fullmakt(a);
    case "offert":
      return offert(a);
    case "betalningspaminelse":
      return paminelse(a);
    case "underhallsavtal":
      return underhall(a);
    case "umgangesavtal":
      return umgange(a);
    case "avbetalningsplan":
      return avbetalning(a);
    case "skola-forskola":
      return skola(a);
    case "socialtjansten":
      return socialtjansten(a);
    default:
      return "Kunde inte skriva det dokumentet just nu.";
  }
}

function personligtBrev(a: Record<string, string>) {
  const roll = val(a, "roll", "[tjänst]");
  const bolag = val(a, "arbetsgivare", "[arbetsgivare]");
  const bakgrund = val(a, "bakgrund", "[din bakgrund]");
  const varfor = val(a, "varfor", "[varför tjänsten]");
  return `[Ort] den [datum]

Ansökan: ${roll}, ${bolag}

Jag söker tjänsten som ${roll} hos er.

${bakgrund}

${varfor}

Jag tar gärna en intervju och kan börja enligt överenskommelse.

Med vänlig hälsning
[Ditt namn]
[telefon]
[e-post]`;
}

function cvText(a: Record<string, string>) {
  const mal = val(a, "mal", "[önskad roll]");
  const exp = val(a, "erfarenhet", "[erfarenhet]");
  const styrkor = val(a, "styrkor", "[styrkor]");
  return `Profil
${mal}. ${exp} Jag vill att ni minns: ${styrkor}

Erfarenhet
[Roll], [företag] ([år]–[år])
• Ansvar och resultat i en mening.
• Verktyg eller metod du faktiskt använde.
• Något mätbart om du har det.

[Roll], [företag] ([år]–[år])
• Tre punkter, samma logik.

[Roll], [företag] ([år]–[år])
• Tre punkter, samma logik.`;
}

function linkedin(a: Record<string, string>) {
  const roll = val(a, "roll", "[roll]");
  const bakgrund = val(a, "bakgrund", "[bakgrund]");
  const mal = val(a, "mal", "[mål]");
  return `Headline
${roll} | ${mal}

Om
${bakgrund}

Jag är mest intressant för folk som behöver ${roll.toLowerCase()} och vill ha någon som levererar utan teater.

Erfarenhet
• ${roll} — [företag], [år]
• [tidigare roll] — [företag], [år]
• [tidigare roll] — [företag], [år]`;
}

function hyresansokan(a: Record<string, string>) {
  return `[Ort] den [datum]

Hyresansökan: ${val(a, "objekt", "[lägenhet]")}

Hej,

Jag vill hyra ${val(a, "objekt", "[lägenheten]")}.

Hushåll: ${val(a, "hushall", "[hushåll]")}

Varför just den: ${val(a, "varfor", "[varför]")}

Varför jag är en säker hyresgäst: ${val(a, "trygghet", "[trygghet]")}

Jag kan tillträda [datum] och skickar gärna referens, anställningsavtal och senaste lönespecifikation.

Med vänlig hälsning
[Namn]
[telefon]
[e-post]`;
}

function andrahand(a: Record<string, string>) {
  return `ANDRAHANDSAVTAL

1. Parter
${val(a, "parter", "[hyresvärd i första hand / hyresgäst]")}

2. Objekt
${val(a, "objekt", "[adress, storlek, vad som ingår]")}

3. Hyra, period, deposition
${val(a, "villkor", "[hyra, datum, el/internet, uppsägning]")}

4. Skick
Lägenheten hyrs i det skick den visats. Skador utöver normalt slitage ersätts av hyresgästen.

5. Andrahandsuthyrning och regler
Andrahandsuthyrning kräver giltigt godkännande från förening/värd. ${val(a, "ovrigt", "")}

6. Uppsägning
Skriftlig uppsägning enligt villkoren i punkt 3.

7. Tvist
Svensk lag. Tvist prövas av svensk allmän domstol.

Ort och datum: [ort], [datum]

______________________          ______________________
Hyresvärd (förstahand)          Hyresgäst`;
}

function overklagande(a: Record<string, string>) {
  const mynd = val(a, "myndighet", "[myndighet]");
  return `Överklagande av beslut

Mottagare: ${mynd}
Diarienummer: [diarienummer]
Beslutets datum: [datum]

1. Bakgrund
${val(a, "beslut", "[vad beslutet säger]")}

2. Yrkande
${val(a, "yrkande", "[vad du vill ska hända]")}

3. Grunder
${val(a, "fel", "[varför beslutet är fel]")}

Jag ber att handlingarna kompletteras med de bilagor som följer, märkta Bilaga 1 och framåt.

Ort och datum: [ort], [datum]

[Namn]
[personnummer utelämnat — fyll i på utskriften]
[adress]
[telefon]
[e-post]`;
}

function reklamation(a: Record<string, string>) {
  const kravMap: Record<string, string> = {
    avhjalpande: "reparation",
    omleverans: "ny vara / att arbetet görs om",
    prisavdrag: "prisavdrag",
    hagang: "att köpet hävs och att pengarna återbetalas",
  };
  const krav = kravMap[a.krav] ?? val(a, "krav", "[krav]");
  return `Reklamation

Till: ${val(a, "foretag", "[företag]")}
Order/avtal: [ordernummer]
Datum: [datum]

Jag reklamerar följande köp:
${val(a, "kop", "[vad du köpte och när]")}

Felet:
${val(a, "fel", "[felet]")}

Jag kräver ${krav}.

Jag ber om skriftligt svar inom 14 dagar. Om ni inte åtgärdar ärendet tar jag det vidare, bland annat till ARN när det är tillämpligt.

Med vänlig hälsning
[Namn]
[telefon]
[e-post]
[adress]`;
}

function klagomal(a: Record<string, string>) {
  return `Klagomål

Till: ${val(a, "mottagare", "[mottagare]")}
Ärende: [diarienummer/ärendenummer om du har]

Vad det gäller
${val(a, "arende", "[kronologi]")}

Yrkande
${val(a, "krav", "[vad du vill]")}

Bilagor: [lista]

Ort och datum: [ort], [datum]

[Namn]
[telefon]
[e-post]`;
}

function samboavtal(a: Record<string, string>) {
  return `SAMBOAVTAL

1. Parter
${val(a, "parter", "[sambo A och sambo B]")}

2. Bostad
${val(a, "bostad", "[bostaden]")}

3. Egendom
${val(a, "egendom", "[vad som är vems]")}

4. Särskilda bestämmelser
${val(a, "onskemal", "Inga utöver detta avtal.")}

5. Bodelning
Parterna är överens om att sambolagens bodelningsregler ersätts av detta avtal i den utsträckning avtalet reglerar egendomen.

6. Underskrift
Avtalet gäller när båda har undertecknat.

Ort och datum: [ort], [datum]

______________________          ______________________
Sambo A                         Sambo B

Vittne: ________________        Vittne: ________________`;
}

function skuldebrev(a: Record<string, string>) {
  return `SKULDEBREV

1. Parter
${val(a, "parter", "[långivare och låntagare]")}

2. Skulden
${val(a, "villkor", "[belopp, ränta, återbetalning]")}

3. Övrigt
${val(a, "ovrigt", "Inga särskilda villkor.")}

4. Dröjsmål
Vid försening utgår dröjsmålsränta enligt räntelagen om inte annat avtalats.

5. Underskrift
Låntagaren erkänner skulden och förbinder sig att betala enligt detta brev.

Ort och datum: [ort], [datum]

______________________          ______________________
Långivare                       Låntagare`;
}

function nda(a: Record<string, string>) {
  return `SEKRETESSAVTAL

1. Parter
${val(a, "parter", "[parterna]")}

2. Konfidentiell information
${val(a, "vad", "[vad som är hemligt]")}

3. Tid
Skyldigheten gäller ${val(a, "tid", "[tid]")} och därefter så länge informationen inte är allmänt känd.

4. Undantag
Avtalet gäller inte information som mottagaren redan hade, som blir offentlig utan brott mot avtalet, eller som måste lämnas enligt lag.

5. Återlämning
På begäran återlämnas eller raderas materialet, så långt det är praktiskt möjligt.

6. Vite
Vite: [belopp] kr per brott, utan att det utesluter skadestånd.

7. Lag
Svensk lag. Tvist i svensk allmän domstol.

Ort och datum: [ort], [datum]

______________________          ______________________
Part 1                          Part 2`;
}

function konsult(a: Record<string, string>) {
  return `KONSULTAVTAL

1. Parter
${val(a, "parter", "[uppdragsgivare och konsult]")}

2. Uppdrag
${val(a, "uppdrag", "[uppdraget]")}

3. Arvode och betalning
${val(a, "arvode", "[arvode]")}

4. Ansvar
Konsulten utför uppdraget som självständig näringsidkare och svarar för egna skatter och avgifter.

5. Immateriella rättigheter, sekretess, uppsägning
${val(a, "ovrigt", "Resultatet av uppdraget tillfaller uppdragsgivaren när det är betalt. Sekretess gäller under uppdraget och 24 månader därefter. Uppsägningstid: [dagar] dagar.")}

6. Lag
Svensk lag.

Ort och datum: [ort], [datum]

______________________          ______________________
Uppdragsgivare                  Konsult`;
}

function uppsagning(a: Record<string, string>) {
  return `${val(a, "ort", "[ort]")} den [datum]

Uppsägning av anställning

Till: ${val(a, "arbetsgivare", "[arbetsgivare]")}

Härmed säger jag upp min anställning som ${val(a, "roll", "[roll]")}.

Sista anställningsdag enligt avtal/lag: ${val(a, "sista-dag", "[datum]")}.
${val(a, "anledning", "")}

Jag ber om skriftlig bekräftelse samt arbetsgivarintyg och slutlön enligt gängse regler.

Med vänlig hälsning
[Namn]
[personnummer utelämnat — fyll i på utskriften]
[telefon]
[e-post]`;
}

function arn(a: Record<string, string>) {
  return `ANMÄLAN TILL ALLMÄNNA REKLAMATIONSNÄMNDEN

1. Parter
Konsument: [ditt namn, adress, e-post, telefon]
Näringsidkare: ${val(a, "foretag", "[företag]")}

2. Avtalet
${val(a, "kop", "[vad du köpte, när, pris]")}

3. Vad som hänt
${val(a, "fel", "[felet och vad företaget svarat]")}

4. Yrkande
${val(a, "krav", "[vad du vill att ARN ska besluta]")}

5. Bilagor
Kvitto/orderbekräftelse, reklamationen, företagets svar, foton. Märk Bilaga 1 och framåt.

Ort och datum: [ort], [datum]

[Namn]`;
}

function anstallning(a: Record<string, string>) {
  return `ANSTÄLLNINGSAVTAL

1. Parter
Arbetsgivare: ${val(a, "arbetsgivare", "[bolag, org.nr]")}
Arbetstagare: ${val(a, "arbetstagare", "[namn]")}

2. Tjänst
${val(a, "roll", "[befattning, plats, tillträde]")}

3. Anställningsform och omfattning
${val(a, "form", "[tillsvidare/visstid, heltid/deltid]")}

4. Lön och förmåner
${val(a, "lon", "[månadslön, semester, övrigt]")}

5. Övrigt
${val(a, "ovrigt", "Kollektivavtal: [ja/nej, vilket]. Bisyssla kräver samtycke om den konkurrerar. Sekretess om affärsförhållanden under anställningen.")}

6. Uppsägning
Enligt lag och eventuellt kollektivavtal, om inte längre tid avtalats.

Ort och datum: [ort], [datum]

______________________          ______________________
Arbetsgivare                    Arbetstagare`;
}

function fullmakt(a: Record<string, string>) {
  return `FULLMAKT

Fullmaktsgivare: ${val(a, "givare", "[namn]")}
Fullmäktig: ${val(a, "mottagare", "[namn]")}

Fullmäktigen får ${val(a, "uppdrag", "[vad fullmakten gäller]")}.

Giltig: ${val(a, "tid", "[t.o.m. datum / tills vidare]")}

Fullmakten kan återkallas skriftligen. Den ska visas i original på begäran.

Ort och datum: [ort], [datum]

______________________
Fullmaktsgivare

Vittne: ________________        Vittne: ________________`;
}

function offert(a: Record<string, string>) {
  return `OFFERT

Från: ${val(a, "avsandare", "[firma]")}
Till: ${val(a, "kund", "[kund]")}
Datum: [datum]
Giltig: [antal dagar]

1. Omfattning
${val(a, "jobb", "[vad som ska göras, material, vad som inte ingår]")}

2. Pris
${val(a, "pris", "[pris, moms, betalning]")}

3. Accept
Svara skriftligen (mejl räcker) så gäller offerten. Ändringar av omfattning ger nytt pris.

Ort och datum: [ort], [datum]

______________________
${val(a, "avsandare", "[firma]")}`;
}

function paminelse(a: Record<string, string>) {
  return `[Ort] den [datum]

Betalningspåminnelse

${val(a, "mottagare", "[kund]")}

Vi har inte registrerat betalning för:

${val(a, "faktura", "[fakturanr, belopp, förfallodatum, vad det gällde]")}

Var vänlig betala ${val(a, "nydatum", "inom 8 dagar")}.

Betaluppgifter: [bankgiro/swish/kontonr]

Om beloppet redan är betalt: bortse från brevet.

Med vänlig hälsning
${val(a, "avsandare", "[firma]")}`;
}

function underhall(a: Record<string, string>) {
  return `AVTAL OM UNDERHÅLLSBIDRAG

§ 1 Parter
Betalningsskyldig förälder och mottagande förälder:
${val(a, "foraldrar", "[Förälder A, personnummer] och [Förälder B, personnummer]")}

§ 2 Barn
Avtalet gäller underhåll för:
${val(a, "barn", "[barnets namn, födelsedatum]")}

§ 3 Belopp
Betalningsskyldig förälder betalar ${val(a, "belopp", "[belopp] kr per barn och månad")}.

§ 4 Betalning
${val(a, "betalning", "Beloppet betalas i förskott senast den [dag] varje månad till [kontonummer].")}

§ 5 Giltighet
Underhållet betalas från och med ${val(a, "start", "[datum]")} till dess att barnet fyller 18 år. Går barnet i skolan efter 18 års ålder betalas underhåll så länge skolgången pågår, dock längst till dess att barnet fyller 21 år.

§ 6 Övrigt
${val(a, "ovrigt", "[t.ex. indexuppräkning, delning av kostnader för fritidsaktiviteter]")}

§ 7 Ändringar
Ändringar av detta avtal ska göras skriftligt och undertecknas av båda föräldrarna.

Detta avtal har upprättats i två likalydande exemplar, av vilka parterna tagit var sitt.

[Ort] den [datum]

______________________________          ______________________________
Betalningsskyldig förälder               Mottagande förälder
[Namnförtydligande]                      [Namnförtydligande]

Underskriften av den betalningsskyldiga föräldern bevittnas av:

______________________________          ______________________________
Vittne 1                                 Vittne 2
[Namnförtydligande, adress]              [Namnförtydligande, adress]`;
}

function umgange(a: Record<string, string>) {
  const boendeMap: Record<string, string> = {
    "hos-mig": "Barnet/barnen bor stadigvarande hos [Förälder A] och har umgänge med [Förälder B] enligt nedan.",
    vaxelvis: "Barnet/barnen bor växelvis hos båda föräldrarna enligt nedan.",
    "hos-andra": "Barnet/barnen bor stadigvarande hos [Förälder B] och har umgänge med [Förälder A] enligt nedan.",
  };
  return `ÖVERENSKOMMELSE OM BOENDE OCH UMGÄNGE

1. Parter
[Förälder A, personnummer] och [Förälder B, personnummer].

2. Barn
${val(a, "barn", "[barnets namn, födelsedatum]")}

3. Boende
${boendeMap[a.boende] ?? "[var barnet bor]"}

4. Vardagsschema
${val(a, "schema", "[veckor, dagar och tider]")}

5. Lov och högtider
${val(a, "lov", "[jul, nyår, påsk, sommarlov, födelsedagar]")}

6. Hämtning, lämning och kontakt
${val(a, "praktiskt", "[vem hämtar och lämnar, var, och hur barnet håller kontakt med den andra föräldern]")}

7. Ändringar
Ändringar i schemat meddelas skriftligt i god tid, senast [antal] dagar i förväg. Tillfälliga byten görs i samförstånd och med barnets bästa i första hand.

8. Om vi inte är överens
Vi ska i första hand försöka lösa oenigheter genom samtal. Därefter kan vi vända oss till kommunens samarbetssamtal.

9. Godkännande
Föräldrarna kan gemensamt be socialnämnden att godkänna denna överenskommelse. Ett godkänt avtal gäller på samma sätt som en dom.

[Ort] den [datum]

______________________________          ______________________________
[Förälder A]                             [Förälder B]`;
}

function avbetalning(a: Record<string, string>) {
  return `Till: ${val(a, "mottagare", "[företag/inkassobolag]")}
Ärende: ${val(a, "arende", "[ärendenummer, fakturanummer, belopp]")}
Datum: [datum]

Begäran om avbetalningsplan

Jag har tagit emot ert krav och vill lösa ärendet. Jag har i dag inte möjlighet att betala hela beloppet på en gång.
${a.varfor?.trim() ? `\n${a.varfor.trim()}\n` : ""}
Jag föreslår följande avbetalningsplan: ${val(a, "forslag", "[belopp] kr per månad från och med [datum]")}, tills skulden är betald.

Jag ber er
- bekräfta avbetalningsplanen skriftligt,
- inte lägga på nya avgifter så länge jag betalar enligt planen, och
- avvakta med att ansöka om betalningsföreläggande hos Kronofogden medan planen följs.

Jag ser fram emot ert svar senast [datum].

Med vänlig hälsning
[Namn]
[Adress]
[Telefon]
[E-post]`;
}

function skola(a: Record<string, string>) {
  const amne: Record<string, string> = {
    ledighet: "Ansökan om ledighet",
    stod: "Begäran om extra stöd",
    oro: "Oro för mitt barn – begäran om utredning och åtgärder",
    omsorg: "Schema och omsorgstid",
    annat: "Fråga från vårdnadshavare",
  };
  const barn = val(a, "barn", "[barnets namn, klass]");
  const begaran: Record<string, string> = {
    ledighet: "Jag ansöker om ledighet för [barnet] under perioden [datum–datum]. Skolarbetet tar vi igen genom [plan].",
    stod: "Jag ber skolan utreda om [barnet] behöver extra anpassningar eller särskilt stöd, och föreslår att vi ses på ett möte.",
    oro: "Jag ber skolan utreda det som hänt och återkomma med vilka åtgärder ni vidtar och när.",
    omsorg: "Jag ber att få bekräftat att schemat enligt ovan fungerar från och med [datum].",
    annat: "Jag ber om ert svar på ovanstående.",
  };
  return `Ämne: ${amne[a.arende] ?? "Fråga från vårdnadshavare"} – ${barn}

Hej,

Jag skriver till ${val(a, "mottagare", "[skola, rektor/mentor]")} som vårdnadshavare till ${barn}.

${val(a, "beskrivning", "[vad som hänt eller vad du behöver, med datum]")}

${begaran[a.arende] ?? begaran.annat}

Jag är tacksam för ett svar senast [datum].

Med vänliga hälsningar
[Namn]
[Telefon]`;
}

function socialtjansten(a: Record<string, string>) {
  const rubrik: Record<string, string> = {
    bistand: "Ansökan om ekonomiskt bistånd",
    komplettering: "Komplettering till ansökan om ekonomiskt bistånd",
    mote: "Begäran om möte",
    akut: "Ansökan om ekonomiskt bistånd – akut behov",
  };
  const bilagor = a.bilagor?.trim();
  return `Till: Socialtjänsten i [kommun]
Diarienummer: [om du har]
Datum: [datum]

${rubrik[a.arende] ?? "Ansökan om ekonomiskt bistånd"}

Min situation
${val(a, "lage", "[hushållet, inkomster, vad som hänt]")}

Vad jag söker
${val(a, "behov", "[belopp och vad det avser]")}
${a.arende === "akut" ? "\nBehovet är akut eftersom [t.ex. hyran förfaller den (datum)]. Jag ber er därför hantera ansökan skyndsamt.\n" : ""}
Bilagor
${bilagor ? bilagor : "[hyresavi, kontoutdrag, beslut från Försäkringskassan]"}

Jag ber om ett skriftligt beslut.

Med vänlig hälsning
[Namn]
[Personnummer]
[Adress]
[Telefon]`;
}

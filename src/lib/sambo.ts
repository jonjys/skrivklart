import { createServerFn } from "@tanstack/react-start";
import { countToday, track } from "./ai";
import { parseJson } from "./brev";
import { complete } from "./llm";

export type SamboAnswers = {
  bostad: "hyresratt" | "bostadsratt" | "hus" | "koper";
  agare: "en" | "bada" | "ingen";
  insats: "en" | "lika" | "ingen";
  barn: "inga" | "gemensamma" | "sarkull";
  sparande: "nej" | "ja";
  ovrigt: string;
};

export type SamboLevel = "hog" | "medel" | "lag";

export type SamboResult = {
  level: SamboLevel;
  headline: string;
  explanation: string;
  include: string[];
  alsoConsider: string | null;
};

export const SAMBO_LABELS = {
  bostad: {
    hyresratt: "Hyresrätt",
    bostadsratt: "Bostadsrätt",
    hus: "Hus eller villa",
    koper: "Vi ska köpa",
  },
  agare: {
    en: "En av oss",
    bada: "Båda",
    ingen: "Inte bestämt än",
  },
  insats: {
    en: "Mest den ena",
    lika: "Ungefär lika",
    ingen: "Ingen insats",
  },
  barn: {
    inga: "Inga barn",
    gemensamma: "Gemensamma barn",
    sarkull: "Barn från tidigare relation",
  },
  sparande: {
    nej: "Nej",
    ja: "Ja, en av oss mer",
  },
} as const;

function describe(a: SamboAnswers) {
  return [
    `Boende: ${SAMBO_LABELS.bostad[a.bostad]}`,
    `Står på kontraktet / äger: ${SAMBO_LABELS.agare[a.agare]}`,
    `Har betalat insats/kontantinsats: ${SAMBO_LABELS.insats[a.insats]}`,
    `Barn: ${SAMBO_LABELS.barn[a.barn]}`,
    `Större sparande, bil eller arv som skiljer: ${SAMBO_LABELS.sparande[a.sparande]}`,
    a.ovrigt.trim() ? `Övrigt: ${a.ovrigt.trim().slice(0, 600)}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/** Where the generator form starts when the visitor continues to the agreement. */
export function samboPrefill(a: SamboAnswers): Record<string, string> {
  const owner =
    a.agare === "en" ? "Den ena av oss står som ägare" : a.agare === "bada" ? "Vi äger den tillsammans" : "Ägandet är inte bestämt än";
  const insats =
    a.insats === "en" ? ", och den ena har betalat större delen av insatsen" : a.insats === "lika" ? ", och vi har betalat ungefär lika mycket" : "";
  return {
    bostad: `${SAMBO_LABELS.bostad[a.bostad]}. ${owner}${insats}.`,
    egendom: [
      a.sparande === "ja" ? "Den ena har större sparande/bil som ska hållas utanför." : "",
      a.barn === "sarkull" ? "Det finns barn från tidigare relation." : "",
      a.ovrigt.trim(),
    ]
      .filter(Boolean)
      .join(" "),
  };
}

const FACTS = `Fakta du ska utgå från (hitta inte på annat, inga lagrumsnummer):
- Sambolagen gäller bara samboegendom: gemensam bostad och bohag som skaffats för gemensamt bruk. Det spelar ingen roll vem som betalade.
- En bostad som den ena hade innan ni flyttade ihop och som inte skaffades för gemensamt boende är normalt inte samboegendom. Köptes den för att ni skulle bo där tillsammans är den det, även om bara den ena står som ägare.
- Hyresrätt kan också vara samboegendom om den skaffades för gemensamt boende.
- Sparande, bil, fritidshus och sådant man köpt för eget bruk ingår inte i en bodelning mellan sambor.
- Vid separation delas samboegendomen lika om någon begär bodelning inom ett år efter att ni flyttat isär.
- Ett samboavtal kan ta bort samboegendom från bodelningen (helt eller delvis). Det ska vara skriftligt och undertecknat av båda. Vittnen krävs inte men är bra.
- Sambor ärver inte varandra. Vill ni det behövs testamente. Har någon barn från tidigare relation (särkullbarn) kan barnet kräva sin laglott direkt.
- Köper ni tillsammans men betalar olika: skriv ägarandelar i köpekontraktet och ett samboavtal om att bostaden inte ska ingå i bodelningen.`;

const SYSTEM = `Du är Skrivklarts samboavtal-koll. Du ger en kort, personlig bedömning av om ett par behöver samboavtal, på enkel svenska, varm och saklig ton. Inte juridisk rådgivning, men säg inte det i varje mening.

${FACTS}

Svara BARA med ett JSON-objekt, ingen kodblocksmarkering:
{"level": "hog" | "medel" | "lag", "headline": string (max 10 ord), "explanation": string (3-5 meningar, tilltala med "ni"), "include": string[] (3-5 konkreta punkter att skriva in i avtalet), "alsoConsider": string | null (en mening om t.ex. testamente, eller null)}
"hog" = samboavtal rekommenderas starkt, "medel" = klokt att skriva, "lag" = inte nödvändigt just nu men kan vara bra. Inga emojis.`;

function fallback(a: SamboAnswers): SamboResult {
  const owned = a.bostad !== "hyresratt";
  const uneven = a.agare === "en" || a.insats === "en";
  const level: SamboLevel = owned && uneven ? "hog" : owned || a.sparande === "ja" || a.barn === "sarkull" ? "medel" : "lag";
  const headline =
    level === "hog"
      ? "Ja, ett samboavtal skyddar er båda"
      : level === "medel"
        ? "Klokt att skriva ett samboavtal"
        : "Inte nödvändigt nu, men bra att ha";
  const explanation =
    level === "hog"
      ? "Har bostaden skaffats för att ni ska bo där tillsammans räknas den som samboegendom, och då delas den lika vid en separation oavsett vem som betalat. När den ena har lagt mer pengar blir det sällan rättvist. Med ett samboavtal bestämmer ni själva i förväg vad som gäller."
      : level === "medel"
        ? "Utan avtal delas gemensam bostad och bohag lika om ni flyttar isär och någon begär bodelning. Det kan bli fel om ni bidragit olika mycket eller vill hålla vissa saker utanför. Ett kort samboavtal gör det tydligt."
        : "I en hyresrätt där ni bidrar ungefär lika finns oftast inte så mycket att tvista om. Ett samboavtal kan ändå vara bra för bohaget och för att ni båda vet vad som gäller.";
  return {
    level,
    headline,
    explanation,
    include: [
      owned ? "Vem som äger bostaden och vem som betalat insatsen" : "Vem som får ha kvar hyreskontraktet vid en separation",
      "Att bostaden och/eller bohaget inte ska ingå i en bodelning (eller hur det ska delas)",
      "Lista över bohag som den ena ägde innan ni flyttade ihop",
      ...(a.sparande === "ja" ? ["Att sparande och bil inte påverkas av avtalet"] : []),
    ],
    alsoConsider:
      a.barn === "sarkull"
        ? "Sambor ärver inte varandra, och särkullbarn kan kräva sin laglott direkt. Fundera på testamente."
        : "Sambor ärver inte varandra. Vill ni det behövs ett testamente.",
  };
}

const PICK = <T extends string>(v: unknown, allowed: readonly T[], d: T): T =>
  allowed.includes(v as T) ? (v as T) : d;

export const checkSambo = createServerFn({ method: "POST" })
  .validator((input: SamboAnswers) => ({
    bostad: PICK(input.bostad, ["hyresratt", "bostadsratt", "hus", "koper"] as const, "bostadsratt"),
    agare: PICK(input.agare, ["en", "bada", "ingen"] as const, "en"),
    insats: PICK(input.insats, ["en", "lika", "ingen"] as const, "lika"),
    barn: PICK(input.barn, ["inga", "gemensamma", "sarkull"] as const, "inga"),
    sparande: PICK(input.sparande, ["nej", "ja"] as const, "nej"),
    ovrigt: String(input.ovrigt ?? "").slice(0, 600),
  }))
  .handler(async ({ data }): Promise<{ ok: true; result: SamboResult; ai: boolean }> => {
    const used = await countToday("sambo_check");
    const raw =
      used < 300
        ? await complete({
            system: SYSTEM,
            messages: [{ role: "user", content: describe(data) }],
            maxTokens: 700,
            effort: "low",
          })
        : null;
    await track("sambo_check", "samboavtal");
    if (raw) {
      try {
        const j = parseJson(raw) as Record<string, unknown>;
        const result: SamboResult = {
          level: PICK(j.level, ["hog", "medel", "lag"] as const, "medel"),
          headline: String(j.headline ?? "").slice(0, 120),
          explanation: String(j.explanation ?? "").slice(0, 1200),
          include: Array.isArray(j.include) ? j.include.map(String).slice(0, 6) : [],
          alsoConsider: typeof j.alsoConsider === "string" && j.alsoConsider.trim() ? j.alsoConsider : null,
        };
        if (result.headline && result.explanation) return { ok: true, result, ai: true };
      } catch {
        /* fall through */
      }
    }
    return { ok: true, result: fallback(data), ai: false };
  });

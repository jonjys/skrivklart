import { createServerFn } from "@tanstack/react-start";
import { BUNDLES, getProduct, PRODUCTS } from "./catalog";
import { getSql } from "./db";
import { LOCKED_ERROR, passCovers } from "./pass";
import { fallbackDocument } from "./templates";

const SYSTEM = `Du är Skrivklart, en svensk dokumentförfattare. Du skriver färdiga texter som mottagaren kan skicka eller skriva under efter att ha fyllt i [platshållare].

Regler:
- Alltid svenska.
- Inga emojis.
- Inga markdown-rubriker med #. Använd vanliga brev- och avtalskonventioner.
- Inga AI-floskler, ingen "som en språkmodell", inget "hoppas detta hjälper".
- Om fakta saknas: använd tydliga [HAKPARENTESER].
- Hitta inte på personuppgifter, lagrumsnummer eller diarienummer.
- Dokumentet ska kunna kopieras rakt av.
- Inte juridisk rådgivning inne i texten.`;

async function countToday(name: string) {
  try {
    const sql = await getSql();
    const rows = await sql<{ n: number }>`
      select count(*)::int as n from funnel_events
      where name = ${name} and created_at > date_trunc('day', now())
    `;
    return rows[0]?.n ?? 0;
  } catch {
    return 0;
  }
}

async function track(name: string, slug?: string) {
  try {
    const sql = await getSql();
    await sql`
      insert into funnel_events (name, product_slug)
      values (${name}, ${slug ?? null})
    `;
  } catch {
    /* preview without db is fine */
  }
}

async function chat(
  messages: { role: "system" | "user" | "assistant"; content: string }[],
  maxTokens: number,
) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { ok: false as const, error: "AI är inte tillgänglig just nu." };

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      messages,
      max_tokens: maxTokens,
      temperature: 0.4,
    }),
  });
  if (!res.ok) return { ok: false as const, error: "Kunde inte skriva just nu. Försök igen." };
  const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = body.choices?.[0]?.message?.content?.trim() ?? "";
  if (!text) return { ok: false as const, error: "Tomt svar. Försök igen." };
  return { ok: true as const, text };
}

export const generateDocument = createServerFn({ method: "POST" })
  .validator(
    (input: {
      slug: string;
      answers: Record<string, string>;
      mode: "preview" | "full";
      pass?: string;
    }) => input,
  )
  .handler(async ({ data }) => {
    const product = getProduct(data.slug);
    if (!product) return { ok: false as const, error: "Okänt dokument." };
    if (data.mode === "full" && !(await passCovers(data.pass, data.slug))) {
      return { ok: false as const, error: LOCKED_ERROR, locked: true as const };
    }

    const cap = data.mode === "full" ? 80 : 120;
    const used = await countToday(data.mode === "full" ? "generate_full" : "generate_preview");
    if (used >= cap) return { ok: false as const, error: "Kö just nu. Försök om en stund." };

    const facts = Object.entries(data.answers)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const modeLine =
      data.mode === "preview"
        ? "Skriv BARA inledningen: rubrik/datumrad om det passar, plus de två första styckena. Avsluta efter ~180 ord, mitt i en naturlig övergång. Inte hela dokumentet."
        : "Skriv HELA dokumentet, komplett och redo att använda.";

    const result = await chat(
      [
        { role: "system", content: SYSTEM },
        {
          role: "user",
          content: `${product.extraPrompt}\n\n${modeLine}\n\nTyp: ${product.name}\nUppgifter från kunden:\n${facts || "(inga)"}`,
        },
      ],
      data.mode === "full" ? 2200 : 500,
    );

    if (result.ok) {
      await track(data.mode === "full" ? "generate_full" : "generate_preview", data.slug);
      return result;
    }

    const text = fallbackDocument(data.slug, data.answers, data.mode);
    await track(data.mode === "full" ? "generate_full" : "generate_preview", data.slug);
    return { ok: true as const, text };
  });

export const rewriteDocument = createServerFn({ method: "POST" })
  .validator((input: { slug: string; text: string; instruction: string; pass?: string }) => input)
  .handler(async ({ data }) => {
    const product = getProduct(data.slug);
    if (!product) return { ok: false as const, error: "Okänt dokument." };
    if (!(await passCovers(data.pass, data.slug))) {
      return { ok: false as const, error: LOCKED_ERROR, locked: true as const };
    }
    const used = await countToday("rewrite");
    if (used >= 80) return { ok: false as const, error: "Kö just nu. Försök om en stund." };

    const result = await chat(
      [
        { role: "system", content: SYSTEM },
        {
          role: "user",
          content: `Skriv om dokumentet enligt instruktionen. Behåll sakuppgifter. Returnera bara den nya texten.\n\nInstruktion: ${data.instruction}\n\nDokument:\n${data.text.slice(0, 8000)}`,
        },
      ],
      2200,
    );
    if (result.ok) await track("rewrite", data.slug);
    return result;
  });

export const askSupport = createServerFn({ method: "POST" })
  .validator((input: { messages: { role: "user" | "assistant"; content: string }[] }) => input)
  .handler(async ({ data }) => {
    const used = await countToday("support");
    if (used >= 80) return { ok: false as const, error: "Supportkön är full. Försök senare." };

    const trimmed = data.messages.slice(-8).map((m) => ({
      role: m.role,
      content: m.content.slice(0, 1200),
    }));

    const result = await chat(
      [
        {
          role: "system",
          content:
            `Du är Rådgivaren på Skrivklart. Varm, kort, svensk, saklig. Många som skriver är ensamstående föräldrar – var respektfull och konkret. Hjälp kunden välja dokument. Dokument och priser: ${PRODUCTS.map((p) => `${p.name} ${p.priceKr} kr`).join(", ")}. Paket: ${BUNDLES.map((b) => `${b.name} ${b.priceKr} kr (${b.short})`).join("; ")}. Inga prenumerationer. Utkastet är alltid gratis. Inte juridisk rådgivning. Inga emojis. Max 120 ord.`,
        },
        ...trimmed,
      ],
      350,
    );
    if (result.ok) {
      await track("support");
      return result;
    }

    const last = trimmed.filter((m) => m.role === "user").at(-1)?.content.toLowerCase() ?? "";
    const hint = routeSupport(last);
    return { ok: true as const, text: hint };
  });

function routeSupport(q: string) {
  const pick = (slug: string, line: string) => {
    const p = getProduct(slug);
    return p ? `${p.name}, ${p.priceKr} kr. ${line}` : line;
  };
  if (/underhåll|underhall|betalar inte|pappan/.test(q))
    return pick("underhallsavtal", "Bevittnat av två personer kan det drivas in via Kronofogden. Ingår i Familjepaketet, 149 kr för sju dokument.");
  if (/umgänge|umgange|varannan|vårdnad|boende/.test(q))
    return pick("umgangesavtal", "Schema, lov och hämtning. Socialnämnden kan godkänna avtalet.");
  if (/inkasso|avbetal|skuld|kronofogd/.test(q))
    return pick("avbetalningsplan", "Ett konkret förslag innan det går vidare. Budget- och skuldrådgivningen i kommunen är gratis.");
  if (/skola|förskola|forskola|rektor|ledighet/.test(q))
    return pick("skola-forskola", "Ledighet, stöd, oro eller kränkning.");
  if (/socialtjänst|socialtjanst|bistånd|bistand|soc\b/.test(q))
    return pick("socialtjansten", "Be alltid om ett skriftligt beslut.");
  if (/försäkringskassa|bostadsbidrag|csn|a-kassa|överklag/.test(q))
    return pick("overklagande", "Du fyller i beslutet och vad som är fel – vi skriver det sakligt och precist.");
  if (/brev|förstår inte|forstar inte/.test(q))
    return pick("myndighetsbrev", "Klistra in brevet på sidan Brev så får du det på vanlig svenska.");
  if (/arn|nämnd/.test(q)) return pick("arn-anmalan", "När företaget redan sagt nej.");
  if (/reklam|fel på|pengarna tillbaka/.test(q)) return pick("reklamation", "Krav, frist, ordernummer.");
  if (/sambo|bodeln/.test(q)) return pick("samboavtal", "Vem äger bostad och bohag.");
  if (/hyra|lägenhet|värd/.test(q)) return pick("hyresansokan", "Eller andrahandskontrakt om ni redan är överens.");
  if (/cv|linkedin|personligt brev|ansök|jobb/.test(q))
    return "Jobbpaketet: personligt brev, CV och LinkedIn för 129 kr.";
  if (/säg upp|sluta|uppsäg/.test(q)) return pick("uppsagning", "Kort, datum, begäran om arbetsgivarintyg.");
  if (/fullmakt/.test(q)) return pick("fullmakt", "En sida: vem, vad, hur länge.");
  if (/lån|skuldebrev/.test(q)) return pick("skuldebrev", "Belopp, ränta, datum.");
  return "Berätta vad det gäller: barn och underhåll, Försäkringskassan, skulder, skolan eller bostad. Kortare brev 59 kr, avtal 99 kr, Familjepaketet 149 kr. Inget konto. Inte juridisk rådgivning.";
}

export const getStats = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const sql = await getSql();
    const rows = await sql<{ name: string; n: number }>`
      select name, count(*)::int as n from funnel_events
      where created_at > now() - interval '7 days'
      group by name
    `;
    const map: Record<string, number> = {};
    for (const r of rows) map[r.name] = r.n;
    return {
      previews: map.generate_preview ?? 0,
      full: map.generate_full ?? 0,
      paid: map.paid ?? 0,
    };
  } catch {
    return { previews: 0, full: 0, paid: 0 };
  }
});

export const recordEvent = createServerFn({ method: "POST" })
  .validator((input: { name: string; slug?: string }) => input)
  .handler(async ({ data }) => {
    const allowed = new Set(["view", "checkout", "paid", "copy"]);
    if (!allowed.has(data.name)) return { ok: false as const };
    await track(data.name, data.slug);
    return { ok: true as const };
  });

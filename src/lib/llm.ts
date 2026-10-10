import Anthropic from "@anthropic-ai/sdk";

// Server-only text completion. Claude first, xAI if Claude is missing or fails,
// null if both are out so callers can drop to templates.

export type LlmMessage = { role: "user" | "assistant"; content: string };
export type LlmEffort = "low" | "medium" | "high";

const CLAUDE_MODEL = "claude-opus-5-5";

let client: Anthropic | null = null;
function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ??= new Anthropic({ timeout: 90_000, maxRetries: 1 });
  return client;
}

async function viaClaude(system: string, messages: LlmMessage[], maxTokens: number, effort: LlmEffort) {
  const c = anthropic();
  if (!c) return null;
  try {
    const res = await c.beta.messages.create({
      model: CLAUDE_MODEL,
      // Thinking is always on for this model, so leave room for it on top of the answer.
      max_tokens: maxTokens + 4000,
      system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
      messages,
      output_config: { effort },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
    });
    if (res.stop_reason === "refusal") {
      console.warn("[llm] claude refused");
      return null;
    }
    const text = res.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();
    return text || null;
  } catch (err) {
    if (err instanceof Anthropic.APIError) console.error("[llm] claude", err.status, err.message);
    else console.error("[llm] claude", err);
    return null;
  }
}

async function viaXai(system: string, messages: LlmMessage[], maxTokens: number) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "grok-4.5",
        messages: [{ role: "system", content: system }, ...messages],
        max_tokens: maxTokens,
        temperature: 0.3,
      }),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    return body.choices?.[0]?.message?.content?.trim() || null;
  } catch {
    return null;
  }
}

export async function complete(opts: {
  system: string;
  messages: LlmMessage[];
  maxTokens: number;
  effort?: LlmEffort;
}): Promise<string | null> {
  const effort = opts.effort ?? "low";
  return (
    (await viaClaude(opts.system, opts.messages, opts.maxTokens, effort)) ??
    (await viaXai(opts.system, opts.messages, opts.maxTokens))
  );
}

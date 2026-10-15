import Anthropic from "@anthropic-ai/sdk";

// Server-only text completion. Claude first, xAI if Claude is missing or fails,
// null if both are out so callers can drop to templates.

export type LlmMessage = { role: "user" | "assistant"; content: string };
export type LlmEffort = "low" | "medium" | "high";

const CLAUDE_MODEL = "claude-opus-5-5";

// Thinking is always on for this model and shares max_tokens with the answer.
const THINKING_HEADROOM: Record<LlmEffort, number> = { low: 2500, medium: 5000, high: 8000 };

let client: Anthropic | null = null;
function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  // No SDK retries: a retried timeout doubles the wait, and xAI and the templates are the retry.
  client ??= new Anthropic({ maxRetries: 0 });
  return client;
}

async function viaClaude(
  system: string,
  messages: LlmMessage[],
  maxTokens: number,
  effort: LlmEffort,
  timeoutMs: number,
) {
  const c = anthropic();
  if (!c) return null;
  try {
    const res = await c.beta.messages.create(
      {
        model: CLAUDE_MODEL,
        max_tokens: maxTokens + THINKING_HEADROOM[effort],
        system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
        messages,
        output_config: { effort },
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
      },
      { timeout: timeoutMs },
    );
    if (res.stop_reason === "refusal") {
      console.warn("[llm] claude refused");
      return null;
    }
    if (res.stop_reason === "max_tokens") {
      // A document cut off before the signature lines is worse than the template.
      console.warn("[llm] claude truncated", res.usage?.output_tokens);
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

async function viaXai(system: string, messages: LlmMessage[], maxTokens: number, timeoutMs: number) {
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
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as {
      choices?: { message?: { content?: string }; finish_reason?: string }[];
    };
    const choice = body.choices?.[0];
    if (choice?.finish_reason === "length") return null;
    return choice?.message?.content?.trim() || null;
  } catch {
    return null;
  }
}

export async function complete(opts: {
  system: string;
  messages: LlmMessage[];
  maxTokens: number;
  effort?: LlmEffort;
  /** Per-provider deadline. Keep the sum well under the function's maxDuration. */
  timeoutMs?: number;
  /** False skips the xAI fallback, for calls that must finish quickly. */
  fallback?: boolean;
}): Promise<string | null> {
  const effort = opts.effort ?? "low";
  const timeoutMs = opts.timeoutMs ?? 60_000;
  const claude = await viaClaude(opts.system, opts.messages, opts.maxTokens, effort, timeoutMs);
  if (claude || opts.fallback === false) return claude;
  return viaXai(opts.system, opts.messages, opts.maxTokens, Math.min(timeoutMs, 45_000));
}

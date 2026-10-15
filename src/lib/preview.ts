/** Pure helpers for the free part of a document. No server or browser APIs. */

export function words(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Index just after the last sentence end in `text` that keeps it within `maxWords`. */
function sentenceCut(text: string, maxWords: number) {
  let cut = 0;
  for (const m of text.matchAll(/[.!?]+["»”)]?(?=\s|$)/g)) {
    const end = (m.index ?? 0) + m[0].length;
    if (words(text.slice(0, end)) > maxWords) break;
    cut = end;
  }
  if (cut) return cut;
  // No sentence fits: cut on the last word boundary instead.
  const parts = text.split(/(\s+)/);
  let out = "";
  for (const part of parts) {
    if (words(out + part) > maxWords) break;
    out += part;
  }
  return out.trimEnd().length;
}

/**
 * The free part of a document: whole paragraphs up to ~160 words and never more than
 * 40 % of the text. A paragraph that does not fit is cut on a sentence (or word) boundary,
 * so the preview is always an exact prefix of the text the buyer pays for.
 */
export function clip(full: string, maxWords = 160) {
  const budget = Math.max(1, Math.min(maxWords, Math.floor(words(full) * 0.4)));
  const out: string[] = [];
  let n = 0;
  for (const para of full.split(/\n{2,}/)) {
    const w = words(para);
    if (n + w <= budget) {
      out.push(para);
      n += w;
      continue;
    }
    if (!out.length || n < budget * 0.6) {
      const part = para.slice(0, sentenceCut(para, budget - n)).trim();
      if (part) out.push(part);
    }
    break;
  }
  return `${out.join("\n\n").trim()}\n\n…`;
}

/** Section headings left after the free part, so the paywall can show what is in the rest. */
export function outlineOf(full: string, shown: string) {
  const seen = new Set(shown.split("\n").map((l) => l.trim()));
  const headings = full
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 2 && l.length <= 60 && !seen.has(l) && !/[.:,;]$/.test(l))
    .filter(
      (l) =>
        /^(§\s*\d+|\d{1,2}[.)])\s+\p{Lu}/u.test(l) ||
        // An all-caps line counts only if it has real words, not a phone or id number.
        (/^[\p{Lu}\d\s–-]{4,}$/u.test(l) && /\p{Lu}{3}/u.test(l)),
    );
  return [...new Set(headings)].slice(0, 10);
}

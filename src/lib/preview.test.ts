import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { clip, outlineOf, words } from "./preview.ts";

const body = (c: string) => c.replace(/\n\n…$/, "");

describe("clip", () => {
  it("is an exact prefix, even through odd punctuation", () => {
    const text = "Hej.\n\n" + "Beslutet... Det är fel?! Beloppet 10.000 kr enl. beslutet. ".repeat(40);
    assert.ok(text.startsWith(body(clip(text))));
  });

  it("never shows more than 40 % of a short document", () => {
    const text = Array.from({ length: 10 }, (_, i) => `Stycke ${i} med fem ord.`).join("\n\n");
    assert.ok(words(body(clip(text))) <= Math.floor(words(text) * 0.4));
  });

  it("cuts one long paragraph on a word boundary", () => {
    const text = "ord ".repeat(500).trim();
    const shown = body(clip(text));
    assert.ok(text.startsWith(shown));
    assert.ok(words(shown) <= 160);
  });
});

describe("outlineOf", () => {
  it("lists remaining headings once and skips id and phone numbers", () => {
    const doc = "AVTAL\n\n§ 1 Parter\nA och B\n\n§ 2 Belopp\n850101-1234\n070-123 45 67\nUNDERSKRIFT\nUNDERSKRIFT";
    assert.deepEqual(outlineOf(doc, "AVTAL\n\n§ 1 Parter\nA och B"), ["§ 2 Belopp", "UNDERSKRIFT"]);
  });
});

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { JOB_PACK_UNLOCKS } from "./stripe-map";

export type Draft = {
  slug: string;
  answers: Record<string, string>;
  preview: string;
  full: string;
  unlocked: boolean;
  /** Signed unlock pass from the server (see lib/pass.ts). */
  pass?: string;
};

type State = {
  drafts: Record<string, Draft>;
  proUntil: number | null;
  proPass: string | null;
  packUntil: number | null;
  packPass: string | null;
  setAnswers: (slug: string, answers: Record<string, string>) => void;
  setPreview: (slug: string, preview: string) => void;
  setFull: (slug: string, full: string) => void;
  unlock: (slug: string, pass: string) => void;
  relock: (slug: string) => void;
  unlockPro: (pass: string, until: number) => void;
  unlockJobPack: (pass: string, until: number) => void;
  isUnlocked: (slug: string) => boolean;
  passFor: (slug: string) => string | undefined;
  hasPro: () => boolean;
};

const empty = (slug: string): Draft => ({
  slug,
  answers: {},
  preview: "",
  full: "",
  unlocked: false,
});

const inPack = (slug: string) => (JOB_PACK_UNLOCKS as readonly string[]).includes(slug);

export const useSkrivklart = create<State>()(
  persist(
    (set, get) => ({
      drafts: {},
      proUntil: null,
      proPass: null,
      packUntil: null,
      packPass: null,
      setAnswers: (slug, answers) =>
        set((s) => ({
          drafts: { ...s.drafts, [slug]: { ...(s.drafts[slug] ?? empty(slug)), answers } },
        })),
      setPreview: (slug, preview) =>
        set((s) => ({
          drafts: { ...s.drafts, [slug]: { ...(s.drafts[slug] ?? empty(slug)), preview } },
        })),
      setFull: (slug, full) =>
        set((s) => ({
          drafts: { ...s.drafts, [slug]: { ...(s.drafts[slug] ?? empty(slug)), full } },
        })),
      unlock: (slug, pass) =>
        set((s) => ({
          drafts: {
            ...s.drafts,
            [slug]: { ...(s.drafts[slug] ?? empty(slug)), unlocked: true, pass },
          },
        })),
      // The server rejected whichever pass passFor handed out: drop exactly that one.
      relock: (slug) => {
        const s = get();
        const bad = s.passFor(slug);
        if (bad && bad === s.proPass) return set({ proPass: null, proUntil: null });
        if (bad && bad === s.packPass) return set({ packPass: null, packUntil: null });
        set({
          drafts: {
            ...s.drafts,
            [slug]: { ...(s.drafts[slug] ?? empty(slug)), unlocked: false, pass: undefined },
          },
        });
      },
      unlockPro: (pass, until) => set({ proPass: pass, proUntil: until }),
      unlockJobPack: (pass, until) => set({ packPass: pass, packUntil: until }),
      isUnlocked: (slug) => get().passFor(slug) !== undefined,
      passFor: (slug) => {
        const s = get();
        const now = Date.now();
        if (s.proPass && s.proUntil && s.proUntil > now) return s.proPass;
        if (s.packPass && s.packUntil && s.packUntil > now && inPack(slug)) return s.packPass;
        const d = s.drafts[slug];
        return d?.unlocked && d.pass ? d.pass : undefined;
      },
      hasPro: () => {
        const s = get();
        return Boolean(s.proPass && s.proUntil && s.proUntil > Date.now());
      },
    }),
    {
      name: "skrivklart-v1",
      version: 2,
      // v1 unlocked on the client alone; those unlocks carry no pass, so drop them.
      migrate: (persisted) => {
        const old = (persisted ?? {}) as { drafts?: Record<string, Draft> };
        const drafts: Record<string, Draft> = {};
        for (const [slug, d] of Object.entries(old.drafts ?? {})) {
          drafts[slug] = { ...d, unlocked: false, full: "", pass: undefined };
        }
        return { drafts, proUntil: null, proPass: null, packUntil: null, packPass: null } as State;
      },
    },
  ),
);

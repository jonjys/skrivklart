import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ALL_ACCESS_SLUG, bundleCovers, getBundle } from "./catalog";

export type Draft = {
  slug: string;
  answers: Record<string, string>;
  preview: string;
  full: string;
  unlocked: boolean;
  /** Signed unlock pass from the server (see lib/pass.ts). */
  pass?: string;
  /** The full text, encrypted by the server; opened after payment and used for rewrites. */
  sealed?: string;
  /** Section headings in the locked part of the preview. */
  outline?: string[];
  /** Words left after the free part. */
  restWords?: number;
};

export type PreviewMeta = Pick<Draft, "sealed" | "outline" | "restWords">;

type BundleUnlock = { pass: string; until: number };

type State = {
  drafts: Record<string, Draft>;
  bundles: Record<string, BundleUnlock>;
  setAnswers: (slug: string, answers: Record<string, string>) => void;
  setPreview: (slug: string, preview: string, meta?: PreviewMeta) => void;
  setFull: (slug: string, full: string, sealed?: string) => void;
  unlock: (slug: string, pass: string) => void;
  unlockBundle: (slug: string, pass: string, until: number) => void;
  relock: (slug: string) => void;
  isUnlocked: (slug: string) => boolean;
  passFor: (slug: string) => string | undefined;
  hasBundle: (slug: string) => boolean;
  hasPro: () => boolean;
};

const empty = (slug: string): Draft => ({
  slug,
  answers: {},
  preview: "",
  full: "",
  unlocked: false,
});

export const useSkrivklart = create<State>()(
  persist(
    (set, get) => ({
      drafts: {},
      bundles: {},
      setAnswers: (slug, answers) =>
        set((s) => ({
          drafts: { ...s.drafts, [slug]: { ...(s.drafts[slug] ?? empty(slug)), answers } },
        })),
      // A new preview replaces the old document entirely, including any unlocked full text.
      setPreview: (slug, preview, meta) =>
        set((s) => ({
          drafts: {
            ...s.drafts,
            [slug]: {
              ...(s.drafts[slug] ?? empty(slug)),
              preview,
              full: "",
              sealed: meta?.sealed,
              outline: meta?.outline,
              restWords: meta?.restWords,
            },
          },
        })),
      setFull: (slug, full, sealed) =>
        set((s) => {
          const d = s.drafts[slug] ?? empty(slug);
          return { drafts: { ...s.drafts, [slug]: { ...d, full, sealed: sealed ?? d.sealed } } };
        }),
      unlock: (slug, pass) =>
        set((s) => ({
          drafts: {
            ...s.drafts,
            [slug]: { ...(s.drafts[slug] ?? empty(slug)), unlocked: true, pass },
          },
        })),
      unlockBundle: (slug, pass, until) =>
        set((s) => ({ bundles: { ...s.bundles, [slug]: { pass, until } } })),
      // The server rejected whichever pass passFor handed out: drop exactly that one.
      relock: (slug) => {
        const s = get();
        const bad = s.passFor(slug);
        const bundle = Object.entries(s.bundles).find(([, b]) => b.pass === bad);
        if (bundle) {
          const bundles = { ...s.bundles };
          delete bundles[bundle[0]];
          return set({ bundles });
        }
        set({
          drafts: {
            ...s.drafts,
            [slug]: { ...(s.drafts[slug] ?? empty(slug)), unlocked: false, pass: undefined },
          },
        });
      },
      isUnlocked: (slug) => get().passFor(slug) !== undefined,
      passFor: (slug) => {
        const s = get();
        const now = Date.now();
        for (const [bundleSlug, b] of Object.entries(s.bundles)) {
          const bundle = getBundle(bundleSlug);
          if (bundle && b.until > now && bundleCovers(bundle, slug)) return b.pass;
        }
        const d = s.drafts[slug];
        return d?.unlocked && d.pass ? d.pass : undefined;
      },
      hasBundle: (slug) => {
        const b = get().bundles[slug];
        return Boolean(b && b.until > Date.now());
      },
      hasPro: () => get().hasBundle(ALL_ACCESS_SLUG),
    }),
    {
      name: "skrivklart-v1",
      version: 3,
      migrate: (persisted, version) => {
        const old = (persisted ?? {}) as {
          drafts?: Record<string, Draft>;
          proPass?: string | null;
          proUntil?: number | null;
          packPass?: string | null;
          packUntil?: number | null;
        };
        const drafts: Record<string, Draft> = {};
        for (const [slug, d] of Object.entries(old.drafts ?? {})) {
          // v1 unlocked on the client alone; those unlocks carry no pass.
          drafts[slug] = version < 2 ? { ...d, unlocked: false, full: "", pass: undefined } : d;
        }
        const bundles: Record<string, BundleUnlock> = {};
        if (version === 2 && old.proPass && old.proUntil) {
          bundles.pro = { pass: old.proPass, until: old.proUntil };
        }
        if (version === 2 && old.packPass && old.packUntil) {
          bundles.jobbpaket = { pass: old.packPass, until: old.packUntil };
        }
        return { drafts, bundles } as unknown as State;
      },
    },
  ),
);

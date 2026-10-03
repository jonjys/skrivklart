import { type ReactNode, useEffect } from "react";
import { applyDocumentLang, t, useI18n } from "@/lib/i18n";
import { LAUNCH_CODE, launchCodeActive } from "@/lib/site";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SupportWidget } from "./support-widget";

export function SiteFrame({ children }: { children: ReactNode }) {
  const lang = useI18n((s) => s.lang);
  useEffect(() => {
    applyDocumentLang(lang);
  }, [lang]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-ink">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        {t(lang, "skip")}
      </a>
      {launchCodeActive() ? (
        <div className="bg-sun px-4 py-2 text-center text-sm font-semibold text-ink">
          Lanseringsvecka: halva priset med koden{" "}
          <span className="rounded bg-ink px-1.5 py-0.5 font-mono text-sun">{LAUNCH_CODE.code}</span> i
          kassan, {LAUNCH_CODE.label}.
        </div>
      ) : null}
      <SiteHeader />
      <main id="innehall" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <SupportWidget />
    </div>
  );
}

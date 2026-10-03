import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const message = error instanceof Error ? error.message : String(error ?? "");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-pine-deep px-6 text-center text-pine-fg">
      <span className="text-sun" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="font-display text-3xl tracking-tight">Något gick snett</h1>
      <p className="max-w-md text-sm break-words text-pine-fg/70">
        {message || "Ett oväntat fel uppstod. Ladda om sidan."}
      </p>
      <a href="/" className="mt-4 rounded-xl bg-clay px-5 py-3 font-semibold text-clay-fg">
        Till startsidan
      </a>
    </main>
  );
}

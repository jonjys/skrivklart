// Playwright is a local QA tool (browser-smoke, preview thumbnails) and is kept
// out of package.json so it never ships with the Vercel build. Resolve it from
// the project, then from the global npm root where the sandbox bakes it in.
import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

export async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    /* fall through to the global install */
  }
  try {
    const root = execSync("npm root -g", { encoding: "utf8" }).trim();
    const entry = createRequire(join(root, "noop.js")).resolve("playwright");
    return await import(pathToFileURL(entry).href);
  } catch {
    throw new Error(
      "Playwright is not installed. Run `npm install --no-save playwright` for local QA.",
    );
  }
}

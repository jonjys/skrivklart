import { createFileRoute } from "@tanstack/react-router";

/** Short, shareable address for the most searched document. */
export const Route = createFileRoute("/samboavtal")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/dokument/samboavtal" },
        }),
    },
  },
});

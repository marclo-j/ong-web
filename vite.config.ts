// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force Nitro on and target Vercel so `vite build` emits a Vercel Build Output
  // API bundle (.vercel/output) that Vercel serves as SSR. Without this, Nitro is
  // skipped outside the Lovable sandbox and Vercel returns 404. Inside the Lovable
  // sandbox this preset is ignored and the build is forced back to Cloudflare.
  nitro: { preset: "vercel" },
});

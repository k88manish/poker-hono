import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import build from "@hono/vite-cloudflare-pages";
import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom'],
  },
  plugins: [
    devServer({
      entry: "src/index.tsx",
      adapter, // Cloudflare Adapter
    }),
    build(),
  ],
});

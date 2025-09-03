import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vasc.dev/",
  integrations: [react(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      wrap: true,
    },
    syntaxHighlight: "shiki",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

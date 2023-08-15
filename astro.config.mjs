import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vasc.dev/",
  integrations: [tailwind(), react(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      wrap: true,
    },
    syntaxHighlight: "shiki",
  },
});

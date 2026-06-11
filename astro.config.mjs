import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build
export default defineConfig({
  site: "https://meridianlab-base.github.io",
  base: "/Meridianlabs-WebPage",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});

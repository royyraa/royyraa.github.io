import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Astro config for GitHub Pages user site
export default defineConfig({
    integrations: [react(), tailwind(), sitemap()],
    site: 'https://royyraa.github.io',
    base: '/',
});


import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Astro config for GitHub Pages user site
export default defineConfig({
    integrations: [sitemap({
        filter: (page) => !page.endsWith('/papers/') && !page.endsWith('/my-journey/'),
    })],
    site: 'https://royyraa.github.io',
    base: '/',
});

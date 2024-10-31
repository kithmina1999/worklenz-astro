import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";


export default defineConfig({
  site: "https://worklenz.com",
  integrations: [tailwind(), mdx(), icon(), sitemap(), react()],
  build: {
    // Ensure that the 404 page is generated
    output: 'server'
  },
  trailingSlash: 'ignore'
});
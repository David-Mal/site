import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` once you have your own domain (e.g. https://davidmalutan.dev).
export default defineConfig({
  site: 'https://davidmalutan.pages.dev',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});

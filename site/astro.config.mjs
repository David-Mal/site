import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` once you have your own domain (e.g. https://davidmalutan.dev).
export default defineConfig({
  site: 'https://site.david-malutan23.workers.dev',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});

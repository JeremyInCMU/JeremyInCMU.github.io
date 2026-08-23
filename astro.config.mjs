import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// For a user site (JeremyInCMU.github.io) the site lives at the domain root,
// so `base` stays '/'. If you ever move this to a *project* repo (e.g.
// github.com/JeremyInCMU/blog served at /blog), set `base: '/blog'`.
export default defineConfig({
  site: 'https://JeremyInCMU.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});

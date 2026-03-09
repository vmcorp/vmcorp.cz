import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vmcorp.cz',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://vmcorp.cz/',
      i18n: {
        defaultLocale: 'cs',
        locales: {
          cs: 'cs',
          en: 'en',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

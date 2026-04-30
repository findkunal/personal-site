// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://personal-site-fawn-kappa.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'gu'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          gu: 'gu-IN',
        },
      },
    }),
  ],
});

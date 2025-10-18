import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['nb', 'sv', 'en'],
  defaultLocale: 'nb',
  localePrefix: 'always',
});

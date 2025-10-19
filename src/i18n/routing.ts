import { defineRouting } from 'next-intl/routing';

const LOCALES = ['nb', 'sv', 'en'] as const
export type AvailableLocales = (typeof LOCALES)[number]

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: 'nb',
  localePrefix: 'always',
});

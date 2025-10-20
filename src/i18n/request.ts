import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // Import required localizations for routes, look into route specific for reducing build times
  // const metadata = (await import(`../translations/${locale}/metadata.json`)).default;
  const base = (await import(`../translations/${locale}/header.json`)).default;
  const header = (await import(`../translations/${locale}/header.json`)).default;
  const cta = (await import(`../translations/${locale}/cta.json`)).default;
  const errors = (await import(`../translations/${locale}/errors.json`)).default;

  return {
    locale,
    messages: { base, header, cta, errors },
  };
});

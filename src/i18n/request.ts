import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // Global translations
  const metadata = (await import(`../translations/${locale}/metadata.json`)).default;
  const base = (await import(`../translations/${locale}/base.json`)).default;
  const errors = (await import(`../translations/${locale}/errors.json`)).default;
  const dictionary = (await import(`../translations/${locale}/dictionary.json`)).default;

  // Import required localizations for routes, look into route specific for reducing build times
  const landing = (await import(`../translations/${locale}/pages/landing.json`)).default;
  const about = (await import(`../translations/${locale}/pages/about.json`)).default;
  const ki = (await import(`../translations/${locale}/pages/ki.json`)).default;
  const opplæringskontor = (await import(`../translations/${locale}/pages/opplæringskontor.json`)).default;

  return {
    locale,
    messages: { metadata, base, errors, dictionary, landing, about, ki, opplæringskontor },
  const contact = (await import(`../translations/${locale}/pages/contact.json`)).default;

  return {
    locale,
    messages: { metadata, base, errors, dictionary, landing, about, ki, contact },
  };
});

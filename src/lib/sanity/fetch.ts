import { type Tiltak } from '@/types/sanity/sanity.types';
import { type GetTiltakById, type GetTiltakByLocale } from '@/types/sanity/client.types';
import { sanityGenerateTiltakLocalizedQuery, sanityGenerateTiltakQuery } from './queries';
import { sanityFetch } from './client';

/**
 * This function is responsible for getting all translations for a single tiltak and
 * is most often used to generate a list of available localizations for pages
 * @example
 * // Build a language selector for a tiltak page:
 * const allLocales = await getTiltakById({ index: 1 });
 * const available = allLocales.map(doc => doc.language); // ['nb','sv',...]
 */
export async function getTiltakById({ index }: GetTiltakById): Promise<Tiltak[]> {
  const query = sanityGenerateTiltakQuery(index);
  const tags = ['tiltak', `tiltak:${index}`];

  return await sanityFetch<Tiltak[]>({
    query,
    tags,
  });
}

/**
 * Retrieves a single translated version of a tiltak by its index and locale
 * @example
 * // SSR page load:
 * const doc = await getTiltakByIdLocalized({ index: 1, locale: "nb" });
 * if (doc === null) notFound();
 */
export async function getTiltakByIdLocalized({
  index,
  locale,
}: GetTiltakByLocale): Promise<Tiltak | null> {
  const query = sanityGenerateTiltakLocalizedQuery(index, locale);
  const tags = ['tiltak', `tiltak:${index}`, `tiltak:${index}:${locale}`];

  return await sanityFetch<Tiltak>({
    query,
    tags,
  });
}

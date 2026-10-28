import { AvailableLocales } from '@/i18n/routing';
import { defineQuery } from 'next-sanity';

export function sanityGenerateTiltakQuery(id: number): string {
  return defineQuery(`*[_type == "tiltak" && index == "${id}"]`);
}

export function sanityGenerateTiltakLocalizedQuery(id: number, locale: AvailableLocales): string {
  return defineQuery(`*[_type == "tiltak" && index == "${id}" && language == "${locale}"][0]`);
}

export function sanityGenerateContactsQuery(): string {
  // Admin (group 1) keeps its hand-picked priority order; everyone else is sorted alphabetically by first name.
  return defineQuery(
    `*[_type == "contacts"]{..., "image": image.asset->url} | order(select(group == 1 => priority, 9999) asc, fname asc)`
  );
}

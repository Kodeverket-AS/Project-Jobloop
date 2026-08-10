import { AvailableLocales } from '@/i18n/routing';
import { defineQuery } from 'next-sanity';

export function sanityGenerateTiltakQuery(id: number): string {
  return defineQuery(`*[_type == "tiltak" && index == "${id}"]`);
}

export function sanityGenerateTiltakLocalizedQuery(id: number, locale: AvailableLocales): string {
  return defineQuery(`*[_type == "tiltak" && index == "${id}" && language == "${locale}"][0]`);
}

export function sanityGenerateContactsQuery(): string {
  return defineQuery(`*[_type == "contacts"]{..., "image": image.asset->url} | order(priority asc, lname asc)`);
}

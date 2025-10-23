import { type AvailableLocales } from '@/i18n/routing';
import { type QueryParams } from 'next-sanity';

export type SanityFetch = {
  query: string;
  params?: QueryParams;
  tags?: string[];
};

export type GetTiltakById = {
  index: number;
};

export type GetTiltakByLocale = {
  locale: AvailableLocales;
} & GetTiltakById;

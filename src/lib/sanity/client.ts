import { type SanityImageSource } from '@sanity/image-url/lib/types/types';
import createImageUrlBuilder from '@sanity/image-url';
import { assertValue } from '@/util/validation';
import { createClient } from 'next-sanity';
import { SanityFetch } from '@/types/sanity/client.types';

const dataset = assertValue(
  process.env.NEXT_PUBLIC_DATASET,
  'Missing environment variable: NEXT_PUBLIC_DATASET'
);

const projectId = assertValue(
  process.env.NEXT_PUBLIC_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_PROJECT_ID'
);

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-09';

// Init client for communicating with Sanity
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Create image builder for resolving image urls
const imageBuilder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource): string | undefined {
  // todo add better error handling
  if (!source) {
    return undefined;
  }

  return imageBuilder?.image(source).url();
}

/**
 * Generalized function for fetching data from sanity
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: SanityFetch): Promise<T> {
  return client.fetch(query, params, {
    next: {
      tags,
    },
  });
}

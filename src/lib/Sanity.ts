import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const Client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

// Handle sanity images without GROQ manipulation
const builder = imageUrlBuilder(Client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

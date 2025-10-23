import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://www.jobloop.no';
  const ROUTES = ['om-oss', 'kontakt'];

  // todo: We should fetch lastModified from Sanity imo
  return ROUTES.map((route) => ({
    url: BASE_URL + '/nb/' + route,
    lastModified: new Date(),
    alternates: {
      languages: {
        sv: BASE_URL + '/sv/' + route,
        en: BASE_URL + '/en/' + route,
      },
    },
  }));
}

import type { MetadataRoute } from 'next'

// todo: update vals
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jobloop',
    short_name: 'Jobloop short name',
    description: 'Jobloop description',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
import './globals.css';
import { Roboto } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/navigation/Footer';
import { ScrollToTopButton } from '@/components/buttons';

const roboto = Roboto({ weight: ['400', '700', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Jobloop: Inkluderende arbeidspraksis og effektiv jobbmatching',
  description:
    'Få tilgang til inkluderende arbeidsmuligheter, skreddersydd yrkesopplæring og en vei inn i arbeidslivet. Jobloop kobler kandidater og arbeidsgivere på en smartere måte.',

  keywords: [
    'jobbmatching',
    'inkludering',
    'yrkesopplæring',
    'arbeidspraksis',
    'Jobloop',
    'frontend opplæring',
    'backend kurs',
    'fullstack utvikling',
    'IT-jobb',
    'arbeidsinkludering',
  ],
  authors: [{ name: 'Jobloop' }],
  robots: 'index, follow',

  openGraph: {
    title: 'Jobloop – Inkluderende arbeidspraksis og effektiv jobbmatching',
    description:
      'Jobloop gir tilgang til inkluderende arbeidsmuligheter, praksisplasser og opplæring innen IT og teknologi.',
    url: 'https://www.jobloop.no',
    siteName: 'Jobloop',
    images: [
      {
        url: '/FSE-Vinner2024-063.webp',
        width: 1200,
        height: 630,
        alt: 'Jobloop – Inkluderende arbeidspraksis',
      },
    ],
    locale: 'no_NO',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jobloop – Inkluderende arbeidspraksis og effektiv jobbmatching',
    description:
      'Få tilgang til inkluderende arbeidsmuligheter, praksisplasser og yrkesopplæring. Jobloop kobler arbeidsgivere og kandidater effektivt.',
    images: ['/FSE-Vinner2024-063.webp'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='no' className={roboto.className}>
      <body>
        <Navigation />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}

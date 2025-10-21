// Styling
import '@/assets/global.css';
import { Roboto } from 'next/font/google';

// Globals
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { ScrollToTopButton } from '@/components/buttons';
import Footer from '@/components/navigation/Footer';
import { Header } from '@/components/navigation/Header';

/**
 * This function is responsible for generating all localized routes at runtime ensuring that
 * all languages are respected, but also limiting locales to those defined in i18n config
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;

/**
 * This function is responsible for generating localized metadata
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'metadata' });

  // Helper for getting keywords
  const messages = await getMessages();

  return {
    title: t('title'),
    description: t('description'),
    keywords: messages.metadata.keywords ?? [],
    authors: [
      { name: 'Jobloop', url: 'https://www.jobloop.no' },
      { name: 'Kodeverket', url: 'https://www.kodeverketbergen.no/' },
    ],
    robots: 'index, follow',
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: t('openGraph.url'),
      siteName: 'Jobloop',
      images: [
        {
          url: '/FSE-Vinner2024-063.webp',
          width: 1200,
          height: 630,
          alt: t('openGraph.alt'),
        },
      ],
      locale: t('openGraph.locale'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ['/FSE-Vinner2024-063.webp'],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  } satisfies Metadata;
}

// Configure Roboto font
const roboto = Roboto({ weight: ['400', '700', '900'], subsets: ['latin'] });

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

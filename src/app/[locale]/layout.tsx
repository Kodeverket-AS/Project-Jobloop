// Styling
import '../../assets/global.css';
import { Roboto } from 'next/font/google';

// Globals
import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Components
import { ScrollToTopButton } from '@/components/buttons';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/navigation/Footer';

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
export async function generateMetadata(props: Omit<LayoutProps<'/[locale]'>, 'children'>) {
  const { locale } = await props.params;

  // Load localized metadata based on locale
  const localizedMetadata = (await import(`@/translations/${locale}/metadata.json`)) as Metadata;
  return localizedMetadata;
}

// Configure Roboto font
const roboto = Roboto({ weight: ['400', '700', '900'], subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
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
          <Navigation />
          {children}
          <ScrollToTopButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

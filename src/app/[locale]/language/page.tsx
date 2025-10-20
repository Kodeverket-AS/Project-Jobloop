import HeroSub from '@/components/herosub';
import { AvailableLocales } from '@/i18n/routing';
import { getTiltakById, getTiltakByIdLocalized } from '@/lib/sanity/fetch';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const result = await getTiltakById({ index: 99 });

  return result.map((tiltak) => ({
    locale: tiltak.language,
  }));
}

// Limit page generations to locales found in Sanity, e.g;
// If only NB and EN exists, then SV leads to 404
export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;

  const tiltak = await getTiltakByIdLocalized({ index: 99, locale: locale as AvailableLocales });
  if (!tiltak) return notFound();

  return (
    <main>
      <h1>language test page</h1>
      <HeroSub {...tiltak} />
    </main>
  );
}

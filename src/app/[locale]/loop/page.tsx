import { getTiltakById, getTiltakByIdLocalized } from '@/lib/sanity/fetch';
import { notFound } from 'next/navigation';
import { AvailableLocales } from '@/i18n/routing';
import HeroSub from '@/components/herosub';

export async function generateStaticParams() {
  const result = await getTiltakById({ index: 10 });
  return result.map((tiltak) => ({ locale: tiltak.language ?? '' }));
}

export default async function Loop({ params }: { params: Promise<{ locale: string }> }) {
  // Check that page exists in Sanity with correct locale
  const locale = (await params).locale;
  const tiltak = await getTiltakByIdLocalized({ index: 10, locale: locale as AvailableLocales });
  if (!tiltak) return notFound();

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...tiltak} />
    </main>
  );
}

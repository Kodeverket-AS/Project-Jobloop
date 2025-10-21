import { getTiltakById, getTiltakByIdLocalized } from '@/lib/sanity/fetch';
import { AvailableLocales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/feature/LeaderSection';

export async function generateStaticParams() {
  const result = await getTiltakById({ index: 4 });
  return result.map((tiltak) => ({ locale: tiltak.language ?? '' }));
}

export default async function Spillbasert({ params }: { params: Promise<{ locale: string }> }) {
  // Check that page exists in Sanity with correct locale
  const locale = (await params).locale;
  const tiltak = await getTiltakByIdLocalized({ index: 4, locale: locale as AvailableLocales });
  if (!tiltak) return notFound();

  return (
    <main className='flex flex-col my-16 items-center gap-16 w-full max-w-[1536px] mx-auto'>
      <HeroSub {...tiltak} />
      <CourseSummary {...tiltak} />
      <Curriculum title={tiltak.title} curriculum={tiltak.curriculum} />
      <LeaderSection leaders={tiltak.courseLeaders} />
    </main>
  );
}

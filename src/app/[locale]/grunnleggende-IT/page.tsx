import { getTiltakById, getTiltakByIdLocalized } from '@/lib/sanity/fetch';
import { AvailableLocales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import LeaderSection from '@/components/LeaderSection';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';

export async function generateStaticParams() {
  const result = await getTiltakById({ index: 3 });
  return result.map((tiltak) => ({ locale: tiltak.language ?? '' }));
}

export default async function GrunnleggendeIT({ params }: { params: Promise<{ locale: string }> }) {
  // Check that page exists in Sanity with correct locale
  const locale = (await params).locale;
  const tiltak = await getTiltakByIdLocalized({ index: 3, locale: locale as AvailableLocales });
  if (!tiltak) return notFound();

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...tiltak} />
      <CourseSummary {...tiltak} />
      <Curriculum title={'Grunnleggende IT'} curriculum={tiltak.curriculum} />
      <LeaderSection leaders={tiltak.courseLeaders} />
    </main>
  );
}

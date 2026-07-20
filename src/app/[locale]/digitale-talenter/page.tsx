import { getTiltakById, getTiltakByIdLocalized } from '@/lib/sanity/fetch';
import { getTranslations } from 'next-intl/server';
import { AvailableLocales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/feature/LeaderSection';

// TODO: The "contact" button should probably go to an actual contact form, some base contact area for those who don't know where to even start, or at the very least highlight WHO to contact!
// Consider pre-filling the search field to direct towards the course leader.
// OR: Simply send the user to the "course leaders" section of the page??

export async function generateStaticParams() {
  const result = await getTiltakById({ index: 2 });
  return result.map((tiltak) => ({ locale: tiltak.language ?? '' }));
}

export default async function DigitaleTalenter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Check that page exists in Sanity with correct locale
  const locale = (await params).locale;
  const tiltak = await getTiltakByIdLocalized({ index: 2, locale: locale as AvailableLocales });
  if (!tiltak) return notFound();

  const t = await getTranslations('dictionary');

  return (
    <main
      id='main'
      className='
        flex flex-col items-center gap-12 w-full max-w-[1536px] my-12 mx-auto px-4
      '
    >
      <HeroSub {...tiltak} />
      <CourseSummary {...tiltak} />
      <div className='w-full max-w-4xl px-4'>
        <div className='
          relative rounded-xl overflow-hidden shadow-2xl bg-white/5
          backdrop-blur-xs aspect-video animate-fade-in ring-1 ring-black/10
        '>
          <video muted loop playsInline controls className='w-full h-full object-cover'>
            <source src='/videos/Digitale talenter.mp4' type='video/mp4' />
            {t('videoFallback')}
          </video>
        </div>
      </div>
      <Curriculum title='Digitale Talenter' curriculum={tiltak.curriculum} />
      <LeaderSection leaders={tiltak.courseLeaders} />
    </main>
  );
}

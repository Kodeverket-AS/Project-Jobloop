import { getTiltakById, getTiltakByIdLocalized } from '@/lib/sanity/fetch';
import { AvailableLocales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/feature/LeaderSection';

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

  return (
    <main className='flex flex-col items-center gap-12 w-full max-w-[1536px] my-12 mx-auto'>
      <HeroSub {...tiltak} />
      <CourseSummary {...tiltak} />
      <div className='w-full max-w-4xl px-4'>
        <div className='relative rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-xs aspect-video animate-fade-in ring-1 ring-black/10'>
          <video muted loop playsInline controls className='w-full h-full object-cover'>
            <source src='/videos/Digitale talenter.mp4' type='video/mp4' />
            Nettleseren din støtter ikke videoavspilling.
          </video>
        </div>
      </div>
      <Curriculum title='Digitale Talenter' curriculum={tiltak.curriculum} />
      <LeaderSection leaders={tiltak.courseLeaders} />
    </main>
  );
}

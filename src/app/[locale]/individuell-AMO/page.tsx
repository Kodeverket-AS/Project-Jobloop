import type { Metadata } from 'next';
import ContactSection from '@/components/feature/individuell-amo/ContactSection';
import IntroSection from '@/components/feature/individuell-amo/IntroSection';
import ProgramsSection from '@/components/feature/individuell-amo/ProgramsSection';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Individuell AMO | JobLoop',
    description:
      'Individuell AMO fra JobLoop — skreddersydd arbeidsmarkedsopplæring med tett oppfølging, i samarbeid med NAV.',
  };
}

export default function IndividuellAMO() {
  return (
    <main id='main' className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16 px-4'>
      <HeroSub {...tiltak} department='Individuell AMO' />
    </main>
  );
}

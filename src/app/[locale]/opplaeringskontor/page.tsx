import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { SectionComponent, TextBlock } from '@/components/feature/opplaeringskontor/SectionComponent';
import Fordeler from '@/components/feature/opplaeringskontor/Fordeler';
import ReviewKH from '@/components/feature/opplaeringskontor/ReviewKH';
import CTASection from '@/components/feature/ki/CTASection';

export async function generateStaticParams() {
  return [
    { locale: 'nb' },
    { locale: 'en' },
    { locale: 'sv' },
  ];
}

export default async function OpplæringskontorPage() {
  const t = await getTranslations('opplæringskontor');
  return (
    <main className='flex flex-col items-center justify-between min-h-screen mt-10 space-y-16 mb-12 px-4'>
      <SectionComponent
        leftContent={
          <TextBlock title={t('section1.title')} contentString={t('section1.content')} />
        }
        rightContent={
          <Image
            src='/opplæringskontor.jpg'
            alt='Opplæringskontor'
            width={600}
            height={400}
            className='w-full h-auto object-cover rounded-xl'
          />
        }
      />

      <SectionComponent
        leftContent={
          <Image
            src='/opplæringskontor2.jpg'
            alt='Opplæringskontor 2'
            width={600}
            height={400}
            className='w-full h-auto object-cover rounded-xl'
          />
        }
        rightContent={
          <TextBlock title={t('section2.title')} contentString={t('section2.content')} />
        }
        reverseLayoutOrder={true}
      />

      <SectionComponent
        leftContent={
          <TextBlock title={t('section3.title')} contentString={t('section3.content')} />
        }
        rightContent={
          <Image
            src='/opplæringskontor3.jpg'
            alt='Opplæringskontor 3'
            width={600}
            height={400}
            className='w-full h-auto object-cover rounded-xl'
          />
        }
      />

      <Fordeler title={t('fordeler.title')} items={t.raw('fordeler.items')} />
      <SectionComponent
        leftContent={
          <Image
            src='/opplæringskontor4.jpg'
            alt='Opplæringskontor 4'
            width={600}
            height={400}
            className='w-full h-auto object-cover rounded-xl'
          />
        }
        rightContent={
          <TextBlock title={t('section4.title')} contentString={t('section4.content')} />
        }
        reverseLayoutOrder={true}
      />
      
      <ReviewKH
        name={t('review.name')}
        position={t('review.position')}
        company={t('review.company')}
        text={t('review.text')}
      />
      <CTASection />
    </main>
  );
}

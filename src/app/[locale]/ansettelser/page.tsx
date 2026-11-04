import Image from 'next/image';
import { ExternalLinkButton } from '@/components/buttons';
import { getTranslations } from 'next-intl/server';

export default async function Ansettelser() {
  const textKeys = ['text1', 'text2', 'text3'] as const;
  const t = await getTranslations('ansettelser');
  return (
    <main
      id='main'
      className='
        flex flex-col items-center gap-16 bg-gray-100 max-w-[1536px] mx-auto
        my-12 px-4
      '
    >
      <section
        className='relative bg-white p-8 rounded-lg shadow-md flex flex-col'
        aria-labelledby='ansettelser-title'
      >
        <h1
          id='ansettelser-title'
          className='
            text-4xl font-bold text-center order-2 pb-2 mb-6 border-b-4
            border-jobloop-primary-green
          '
        >
          {t('intro.title')}
        </h1>
        <Image
          src='/hiring.jpg'
          alt={t('intro.imageAlt')}
          width={150}
          height={150}
          className='flex justify-center mb-6 rounded-full order-first mx-auto'
        />
        <h2 className='
          text-xl! lg:text-2xl! font-semibold mb-4 text-center order-3
        '>
          {t('main.heading')}
        </h2>
        {textKeys.map((key, i) => (
          <p key={key} className={`text-lg mb-4 text-center order-${i+3}`}>
            {t(`main.${key}`)}
          </p>
        ))}
        <ExternalLinkButton
          Path='https://arbeidsplassen.nav.no/stillinger?q=jobloop&v=3'
          Text={t('main.linkAlt')}
          ClassName='mx-auto order-last mt-1'
        />
      </section>
    </main>
  );
}

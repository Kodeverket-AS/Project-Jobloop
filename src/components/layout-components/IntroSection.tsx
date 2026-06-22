'use client';

import Image, { type StaticImageData } from 'next/image';
import ButtonCTA from './ButtonCTA';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface IntroSection {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  path: string;
  isButton: boolean;
  btnVariant?: 'internalLink' | 'externalLink' | 'readMorePill';
  btnText?: string;
  ifImageLink: boolean;
  imageLinkPath: string;
}

export function IntroSection({
  title,
  text,
  image,
  alt,
  path,
  isButton,
  btnVariant,
  btnText,
  ifImageLink,
  imageLinkPath,
}: IntroSection) {
  const t = useTranslations('dictionary');
  const t1 = useTranslations('landing');

  // TODO: Find out if this should be combined with its reverse version similar to PartnerProject.tsx
  return (
    <section
      className='flex flex-col gap-[calc(var(--spacing)*6)] lg:gap-[calc(var(--spacing)*12)] lg:flex-row le:gap-12 rounded-xl'
      aria-labelledby='intro-section-title'
      >
      <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center'>
        <h2
          id='intro-section-title'
          className='text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit'
        >
          {title}
        </h2>
        <p className='text-gray-600 text-base xl:leading-relaxed lg:text-xl'>{text}</p>
        {isButton && (
          <ButtonCTA
            isButton={true}
            Path={path}
            Text={btnText ?? t('readMore')}
            btnVariant={btnVariant}
          />
        )}
      </div>
      {ifImageLink ? (
        <Link
          href={imageLinkPath}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t1('intro.award')}
          className='w-full lg:w-1/2 order-first block saturate-100 hover:saturate-150'
        >
          <figure className='relative group overflow-hidden rounded-xl'>
            <Image
              alt={alt}
              src={image}
              width={1500}
              height={700}
              className='max-w-full h-112 object-cover shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
            />
            <figcaption className='absolute z-10 p-4 transition-all rounded-b-2xl duration-500 bottom-0 lg:-bottom-20 lg:group-hover:bottom-0 left-0 w-full h-20 bg-black/70 text-kv-white text-center font-bold md:text-[1.4rem] text-[1.1rem]'>
              {t1('intro.award')}
            </figcaption>
          </figure>
        </Link>
      ) : (
        <Image
          alt={alt}
          src={image}
          width={1000}
          height={500}
          className='w-full lg:w-1/2 order-first block saturate-100 hover:saturate-150 rounded-xl max-w-full h-96 object-cover shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
        />
      )}
    </section>
  );
}

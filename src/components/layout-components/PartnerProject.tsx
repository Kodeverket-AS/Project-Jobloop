'use client';

import Image, { type StaticImageData } from 'next/image';
import ButtonCTA from './ButtonCTA';

interface PartnerProject {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  path: string;
  isButton: boolean;
  direction?: 'normal' | 'reverse';
  btnVariant?: 'internalLink' | 'externalLink' | 'readMorePill';
  btnText?: string;
}

// TODO: Remove divs where reasonable.
export const PartnerProject = ({
  title,
  text,
  image,
  alt,
  path,
  isButton,
  direction = 'normal',
  btnVariant,
  btnText,
}: PartnerProject) => {
  const headingId = 'partner-title-' + title.toLowerCase().replace(/\s+/g, '-');

  return (
    <article
      className='flex flex-col gap-6 lg:flex-row lg:gap-12'
      aria-labelledby={headingId}
    >
      <div
        className={`
          flex flex-col gap-4 w-full lg:w-1/2 justify-center
          ${direction === 'reverse' ? 'order-first' : 'order-last'}
        `}
      >
        <h3
          id={headingId}
          className='
            text-kv-black max-sm:text-[1.3rem]! sm:text-[2rem]! md:text-2xl
            lg:text-3xl border-b-2 md:border-b-4 pb-2 w-fit
            border-jobloop-primary-green
          '
        >
          {title}
        </h3>
        <p className='text-gray-600 text-base xl:leading-relaxed lg:text-lg'>
          {text}
        </p>
        {isButton && (
          <ButtonCTA
            isButton={true}
            Path={path}
            Text={btnText ?? 'Les mer'}
            btnVariant={btnVariant}
          />
        )}
      </div>
      <div
        className={`
          w-full lg:w-1/2
          ${direction === 'reverse' ? 'order-last' : 'order-first'}
        `}
      >
        <Image
          alt={alt}
          src={image}
          width={1000}
          height={500}
          className='
            max-w-full h-96 object-cover rounded-xl shadow-lg shadow-gray-300/50
            hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500
            hover:scale-[1.02]
          '
        />
      </div>
    </article>
  );
};

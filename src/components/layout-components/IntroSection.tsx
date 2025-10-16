'use client';

import Image, { type StaticImageData } from 'next/image';
import ButtonCTA from './ButtonCTA';

interface IntroSection {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  path: string;
  isButton: boolean;
  btnVariant?: 'internalLink' | 'externalLink';
  btnText?: string;
  ifImageLink: boolean;
  imageLinkPath: string;
}

export const IntroSection = ({
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
}: IntroSection) => {
  return (
    <div className='flex flex-col gap-6   lg:flex-row lg:gap-12 rounded-xl'>
      {ifImageLink ? (
        <a
          href={imageLinkPath}
          target='_blank'
          title='Klikk bilde for å lese mer om FERD prisen her'
          className='relative w-full lg:w-1/2 overflow-hidden group saturate-100 hover:saturate-150'
        >
          <div className='absolute z-10 p-4 transition-all rounded-b-2xl duration-500 bottom-0 lg:-bottom-20 lg:group-hover:-bottom-0 left-0 w-full h-20 bg-black/70'>
            <h3 className='text-kv-white text-center '>
              Klikk bilde for å lese om da vi mottok FERD prisen 2024
            </h3>
          </div>
          <Image
            alt={alt}
            src={image}
            width={1500}
            height={700}
            className='max-w-full h-112 object-cover rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
          />
        </a>
      ) : (
        <div className='w-full lg:w-1/2'>
          <Image
            alt={alt}
            src={image}
            width={1000}
            height={500}
            className='max-w-full h-96 object-cover rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center'>
        <h2 className='text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit'>
          {title}
        </h2>
        <p className='text-gray-600 text-base xl:leading-relaxed lg:text-xl'>
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
    </div>
  );
};

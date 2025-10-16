'use client';

import type { Tiltak } from '@/types/sanity/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/lib/Sanity';
import { PortableText } from '@portabletext/react';
import { LinkButtonAnimatedWithIcon } from '@/components/buttons';

export default function HeroSub({
  heading,
  image,
  introtext,
}: Pick<Tiltak, 'image' | 'introtext' | 'heading'>) {
  return (
    <div className='flex flex-col gap-6  lg:flex-row  rounded-xl'>
      <div className='w-full lg:w-1/2 flex items-center'>
        <Image
          src={image ? urlFor(image).url() : ''}
          width={1000}
          height={500}
          className='max-w-full h-96 object-cover rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
          alt={image?.alt || ''}
        />
      </div>
      <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center'>
        <h2 className='text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit'>
          {heading ? heading : 'Tittel kommer her'}
        </h2>
        <div className='text-gray-600 text-base xl:leading-relaxed lg:text-xl'>
          {introtext ? (
            <PortableText value={introtext} />
          ) : (
            <p>Her kommer en introtekst</p>
          )}
        </div>
        <div>
          <LinkButtonAnimatedWithIcon Path='/kontakt' Text={'Kontakt Oss'} />
        </div>
      </div>
    </div>
  );
}

'use client';

import type { Tiltak } from '@/types/sanity/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/lib/Sanity';
import { PortableText } from '@portabletext/react';

// todo is this used?

export default function ForCompanies({ image3, employer }: Tiltak) {
  return (
    <div className='flex flex-col justify-between px-4 md:flex-row-reverse md:px-0'>
      <div className='w-full h-80 md:w-96 md:pt-3 md:h-96'>
        <Image
          src={image3 ? urlFor(image3).url() : ''}
          width={500}
          height={500}
          alt={image3?.alt || ''}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col w-full gap-3 md:w-1/2'>
        <h2 className='text-xl md:text-2xl lg:text-3xl pb-3 border-b-2 border-jobloop-primary-green'>
          For bedrifter
        </h2>
        {employer && <PortableText value={employer} />}
      </div>
    </div>
  );
}

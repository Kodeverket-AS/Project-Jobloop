'use client';

import { Tiltak } from '@/types/sanity/sanity.types';
import Image from 'next/image';

// todo is this even used?

export default function Places({ cities }: Pick<Tiltak, 'cities'>) {
  return (
    <div className='w-full   2xl:max-w-[1600px]'>
      <div className='text-center'>
        <h2 className='text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit mx-auto'>
          Våre lokaler
        </h2>
      </div>
      <div className='flex flex-col gap-16'>
        {cities?.map((city, index) => (
          <div
            key={`${city}-${index}`}
            className='flex flex-col gap-6 lg:flex-row lg:gap-12'
          >
            <div className='w-full lg:w-1/2 flex items-center justify-center'>
              <Image
                src={''}
                width={400}
                height={400}
                alt={''}
                className='object-cover w-80 h-80 rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
              />
            </div>
            <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center'>
              <h3 className='text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit'>
                {city}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

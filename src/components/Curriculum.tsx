'use client';

import { PortableText } from '@portabletext/react';
import { Tiltak } from '@/types/sanity/sanity.types';

export default function Curriculum({
  curriculum,
  title,
}: Pick<Tiltak, 'title' | 'curriculum'>) {
  return (
    <div className='w-full max-w-[1536px] mx-auto px-4'>
      <div className='bg-linear-to-br from-jobloop-primary-green/10 via-white to-jobloop-primary-orange/10 rounded-2xl p-8 shadow-lg border border-jobloop-primary-green/20'>
        <div className='text-center mb-8'>
          <h2 className='text-kv-black text-2xl md:text-3xl font-bold border-b-4 pb-3 border-jobloop-primary-green w-fit mx-auto'>
            {'Hva lærer du i ' + title + '?'}
          </h2>
        </div>
        <div className='prose prose-lg max-w-none text-gray-700 leading-relaxed mx-auto'>
          {curriculum && <PortableText value={curriculum} />}
        </div>
      </div>
    </div>
  );
}

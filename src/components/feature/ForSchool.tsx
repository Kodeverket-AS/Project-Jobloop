import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Tiltak } from '@/types/sanity/sanity.types';
import { urlFor } from '@/lib/Sanity';
import { getTranslations } from 'next-intl/server';

export default async function ForSchool({ image4, school }: Pick<Tiltak, 'image4' | 'school'>) {
  const t = await getTranslations('base.components.school');
  return (
    <div className='w-full max-w-[1536px] mx-auto px-4'>
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-linear-to-br from-jobloop-primary-green/20 via-white to-jobloop-primary-green/10 rounded-2xl p-8 shadow-lg border border-jobloop-primary-green/20'>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className='relative overflow-hidden rounded-xl shadow-lg group'>
            <Image
              src={image4 ? urlFor(image4).url() : ''}
              width={500}
              height={500}
              alt={image4?.alt ? image4?.alt : ''}
              className='object-cover w-full h-80 lg:h-96 group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 space-y-6'>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold text-kv-black pb-3 border-b-2 border-jobloop-primary-green w-fit'>
              {t('title', { target: t('school') })}
            </h2>
          </div>
          <div className='prose prose-lg max-w-none text-gray-700 leading-relaxed'>
            {school && <PortableText value={school} />}
          </div>
        </div>
      </div>
    </div>
  );
}

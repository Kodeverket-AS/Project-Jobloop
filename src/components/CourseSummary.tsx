import { PortableText } from '@portabletext/react';
import CourseCard from './CourseCard';
import { Tiltak } from '@/types/sanity/sanity.types';
import { getTranslations } from 'next-intl/server';

export default async function CourseSummary(tiltak: Tiltak) {
  const t = await getTranslations('base.components');
  return (
    <div className='flex flex-col md:flex-row px-4 md:px-0'>
      <div className='flex flex-col gap-4 w-full md:w-1/2 justify-center'>
        <h2 className='text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit'>
          {t('course.targetGroup', { target: tiltak.title || 'dette' })}
        </h2>
        <div className='text-gray-600 text-base xl:leading-relaxed lg:text-xl md:w-5/6 lg:pr-20'>
          {tiltak.targetGroup && <PortableText value={tiltak.targetGroup} />}
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <CourseCard {...tiltak} />
      </div>
    </div>
  );
}

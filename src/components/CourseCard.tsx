import { Tiltak } from '@/types/sanity/sanity.types';
import { getTranslations } from 'next-intl/server';

/**
 * Renders an "About the course" card.
 */
export default async function CourseCard({
  targetGroupShort,
  duration,
  lectureType,
  locations,
}: Tiltak) {
  const t = await getTranslations('base.components.course');

  const courseDetails = [
    {label: t('demographic'), value: targetGroupShort},
    {label: t('duration'), value: duration},
    {label: t('format'), value: lectureType},
    {label: t('location'), value: locations},
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  // TODO: Get rid of divs where possible.
  // TODO: Check if the parent section should be an article element instead.
  // TODO: Check if the top of this card should be a header.
  return (
    <section className='
      flex flex-col p-6 shadow-lg hover:shadow-xl transition-all duration-300
      bg-kv-white rounded-xl border border-gray-100 w-full md:w-1/2
      hover:border-jobloop-primary-green/20
    '>
      <h2 className='
        text-[1.4rem]! md:text-2xl font-bold text-kv-black mb-4 border-b-2
        border-jobloop-primary-green w-fit pb-2
      '>
        {t('title')}
      </h2>
      <p className='pb-4 border-b-2 border-gray-200 md:pt-2 text-gray-600'>
        {t('description')}
      </p>
      <div className='space-y-4 pt-4'>
        {courseDetails.map(({ label, value }) => (
          <section key={label}
          >
            <h3 className='
              text-[1.125rem]! font-semibold text-jobloop-primary-green mb-2
            '>
              {label}
            </h3>
            <p className='text-gray-700'>
              {value}
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}

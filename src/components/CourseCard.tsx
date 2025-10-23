import { Tiltak } from '@/types/sanity/sanity.types';
import { getTranslations } from 'next-intl/server';

export default async function CourseCard({
  targetGroupShort,
  duration,
  lectureType,
  locations,
}: Tiltak) {
  const t = await getTranslations('base.components.course');
  return (
    <div className='flex flex-col p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-kv-white rounded-xl border border-gray-100 hover:border-jobloop-primary-green/20'>
      <h3 className='text-xl md:text-2xl font-bold text-kv-black mb-4 border-b-2 border-jobloop-primary-green w-fit pb-2'>
        {t('title')}
      </h3>
      <p className='pb-4 border-b-2 border-gray-200 md:pt-2 text-gray-600'>{t('description')}</p>
      <div className='space-y-4 pt-4'>
        <div>
          <h4 className='text-lg font-semibold text-jobloop-primary-green mb-2'>
            {t('demographic')}
          </h4>
          <p className='text-gray-700'>{targetGroupShort}</p>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-jobloop-primary-green mb-2'>{t('duration')}</h4>
          <p className='text-gray-700'>{duration}</p>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-jobloop-primary-green mb-2'>{t('format')}</h4>
          <p className='text-gray-700'>{lectureType}</p>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-jobloop-primary-green mb-2'>{t('location')}</h4>
          <p className='text-gray-700'>{locations}</p>
        </div>
      </div>
    </div>
  );
}

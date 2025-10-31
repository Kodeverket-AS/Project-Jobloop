import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function DescriptionSection() {
  const t = await getTranslations('ki.description');
  return (
    <div className='w-full space-y-8 text-lg '>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div className='w-full'>
          <Image
            src='/ki.jpg'
            alt={t('image.alt')}
            width={600}
            height={400}
            className='w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
          />
        </div>
        <div className='space-y-6'>
          <p className='text-md md:text-lg lg:text-xl text-center md:text-left leading-relaxed lg:leading-loose'>
            {t('paragraph1')}
          </p>

          <p className='text-md md:text-lg lg:text-xl text-center md:text-left leading-relaxed lg:leading-loose'>
            {t('paragraph2')}
          </p>
        </div>
      </div>
    </div>
  );
}

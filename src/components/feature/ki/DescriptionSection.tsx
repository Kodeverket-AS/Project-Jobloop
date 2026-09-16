import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function DescriptionSection() {
  const t = await getTranslations('ki.description');

  return (
    <div className='w-full text-lg grid md:grid-cols-2 gap-8'>
      <div className='order-last flex flex-col justify-center gap-6'>
        <p className='
          text-md md:text-lg lg:text-xl text-center md:text-left leading-relaxed
          lg:leading-loose
        '>
          {t('paragraph1')}
        </p>

        <p className='
          text-md md:text-lg lg:text-xl text-center md:text-left leading-relaxed
          lg:leading-loose
        '>
          {t('paragraph2')}
        </p>
      </div>
      <Image // TODO: Consider if this should be less prominent on smaller screens (or swap with something more informative).
        src='/ki.jpg'
        alt={t('image.alt')}
        width={600}
        height={400}
        className='
          w-full h-auto rounded-2xl shadow-lg hover:shadow-xl order-first
          motion-safe:transition-all motion-safe:duration-300
        '
      />
    </div>
  );
}

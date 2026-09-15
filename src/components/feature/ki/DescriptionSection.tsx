import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function DescriptionSection() {
  const t = await getTranslations('ki.description');

  // TODO: Deal with divs.
  // TODO: Consider adding a h2 heading for this section.
  // TODO: Fix alignment issues for lg and up (text is slightly higher than it is supposed to be).
  return (
    <div className='w-full space-y-8 text-lg grid md:grid-cols-2 gap-8 content-center'>
      <div className='space-y-6 md:order-last sm:order-first flex flex-col flex-nowrap self-center'>
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
      <Image
        src='/ki.jpg'
        alt={t('image.alt')}
        width={600}
        height={400}
        className='
          w-full h-auto rounded-2xl shadow-lg hover:shadow-xl md:order-first
          motion-safe:transition-all motion-safe:duration-300 sm:order-last
        '
      />
    </div>
  );
}

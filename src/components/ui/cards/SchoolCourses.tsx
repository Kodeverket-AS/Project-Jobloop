import Image, { type StaticImageData } from 'next/image';
import { LesMerButton } from '@/components/buttons';
import { useTranslations } from 'next-intl';

interface SchoolCoursesCardProps {
  image: StaticImageData;
  title: string;
  text: string;
  path: string;
  alt: string;
  isNew?: boolean;
}

/**
 * @deprecated This function was used for rendering school course cards before the LandingCoursesCard component was introduced.
 */
export function SchoolCoursesCard({
  image,
  title,
  text,
  path,
  alt,
  isNew,
}: SchoolCoursesCardProps) {
  const t = useTranslations('dictionary');

  return (
    <li className={`
      group relative flex flex-col w-full p-6 gap-4 lg:gap-6 xl:flex-row-reverse
      justify-between bg-white border border-gray-50 rounded-xl shadow-sm
      hover:shadow-md transition-all duration-200
    `}>
      <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
        <h3 className='text-kv-black text-xl md:text-2xl'>
          {isNew && (
            <span className='sr-only'>{t('new')}: </span>
          )}
          {title}
        </h3>
        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
          {text}
        </p>
        <div className='pt-2'>
          <LesMerButton
            Path={path}
            Text={t('readMore')}
            Aria={`Les mer om ${title}`}
          />
        </div>
      </div>
      <a
        href={path}
        className='w-full h-80 xl:w-1/2 relative overflow-hidden rounded-xl order-first'
      >
        <Image
          alt={alt}
          src={image}
          width={600}
          height={600}
          className='max-w-full h-full object-cover'
        />
      </a>
      {isNew && (
        <div
          className={`
            absolute px-6 py-2 top-4 left-4 z-10 bg-jobloop-primary-orange
            text-white text-md font-bold transform shadow-lg
          `}
          style={{ transform: 'rotate(-20deg) translateX(-10px)' }}
          aria-hidden='true'
        >
          {t('new')}
        </div>
      )}
    </li>
  );
}

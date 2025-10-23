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
    <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between relative'>
      {isNew && (
        <div
          className='absolute top-4 left-4  bg-jobloop-primary-orange text-white px-6 py-2 text-md font-bold transform  z-10 shadow-lg'
          style={{ transform: 'rotate(-20deg) translateX(-10px)' }}
        >
          {t('new')}
        </div>
      )}
      <a href={path} className='w-full h-80 xl:w-1/2 relative overflow-hidden rounded-xl'>
        <Image
          alt={alt}
          src={image}
          width={600}
          height={600}
          className='max-w-full h-full object-cover'
        />
      </a>
      <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
        <h3 className='text-kv-black text-xl md:text-2xl'>{title}</h3>
        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>{text}</p>
        <div className='pt-2'>
          <LesMerButton Path={path} Text={t('readMore')} />
        </div>
      </div>
    </div>
  );
}

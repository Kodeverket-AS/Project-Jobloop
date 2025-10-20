import { LesMerButton } from '@/components/buttons';
import Image, { type StaticImageData } from 'next/image';

interface CoursesProps {
  image: StaticImageData;
  title: string;
  text: string;
  path: string;
  alt: string;
}

export function CoursesCard({ image, title, text, path, alt }: CoursesProps) {
  return (
    <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
      <a href={path} className='w-full h-80 xl:w-1/2 relative overflow-hidden rounded-xl'>
        <Image
          alt={alt}
          src={image}
          width={600}
          height={600}
          className='object-cover h-full max-w-full'
        />
      </a>
      <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
        <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>{title}</h3>
        <p className='text-base text-gray-600 md:text-lg leading-relaxed'>{text}</p>
        <div className='pt-2'>
          <LesMerButton Path={path} />
        </div>
      </div>
    </div>
  );
}

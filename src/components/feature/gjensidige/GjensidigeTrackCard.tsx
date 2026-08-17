import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

interface GjensidigeTrackCardProps {
  title: string;
  ageRange: {
    min: number;
    max: number;
  };
  text: {
    paragraph1: ReactNode;
    paragraph2: ReactNode;
  };
  goals: string[];
  goalListTitle: string;
  video?: {
    src?: string;
    title?: string;
  };
};

export default async function GjensidigeTrackCard({
  title,
  ageRange,
  text,
  goals,
  goalListTitle,
  video
}: GjensidigeTrackCardProps) {
  const t = await getTranslations('gjensidige');

  return (
    <li
      className='
        bg-white border border-gray-200 rounded-xl shadow-lg
        transition-all duration-500 overflow-hidden group flex flex-col
        motion-safe:hover:shadow-2xl motion-safe:animate-fade-in-up
        motion-safe:delay-100 motion-safe:hover:-translate-y-2
      '
    >
      <div className='p-6 flex flex-col order-last'>
        <h3 className='
          text-2xl font-bold text-[#002B49] mb-4 transition-colors
          group-hover:text-[#4AB5A3] duration-300 order-2
        '>
          {title}
        </h3>
        <span
        className='
          bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs
          font-bold uppercase mb-3 inline-block order-first max-w-fit
        '>
          {ageRange.min} – {ageRange.max} {t('common.year')}
        </span>
        <p className='text-[#555] mb-4 leading-relaxed order-3'>
          {text.paragraph1}
        </p>
        <p className='text-[#555] mb-4 leading-relaxed text-sm order-4'>
          {text.paragraph2}
        </p>
        <ul
          className='list-disc pl-5 space-y-2 text-[#444] text-sm order-last'
          aria-label={goalListTitle}
        >
          {goals.map((goal, index) => (
            <li
              key={index}
              className='
                hover:text-[#4AB5A3] transition-colors duration-200
              '
            >
              {goal}
            </li>
          ))}
        </ul>
      </div>
      {video?.src ? (
        <div className='
        relative w-full overflow-hidden rounded-t-xl border-t-[6px]
        border-t-[#4AB5A3] transition-transform duration-500
        bg-[#2c3e50] aspect-video order-first
      '>
        <iframe
          src={video?.src}
          title={video?.title}
          className='absolute inset-0 w-full h-full'
          allow='
            accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture
          '
          allowFullScreen
        />
        <div
          className='
            absolute inset-0 bg-linear-to-t from-black/20 to-transparent
            pointer-events-none
          '
          aria-hidden='true'
        />
        </div>
      ) : (
        <div className='
          relative w-full overflow-hidden rounded-t-xl border-t-[6px]
          border-t-[#4AB5A3] aspect-video bg-[#27ae60]
          transition-transform duration-500
        '>
          <div className='
            absolute inset-0 bg-linear-to-t from-black/20
            to-transparent
          '/>
          <span className='
            text-white text-xs absolute bottom-3 left-4 z-10 opacity-90
          '>
            Video kommer snart
          </span>
        </div>
      )}
    </li>
  );
}

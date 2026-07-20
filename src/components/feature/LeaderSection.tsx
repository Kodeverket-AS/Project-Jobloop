import { type Tiltak } from '@/types/sanity/sanity.types';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/Sanity';
import { getTranslations } from 'next-intl/server';

// TODO: Deal with divs.
export default async function LeaderSection({ leaders }: { leaders: Tiltak['courseLeaders'] }) {
  if (!leaders || leaders.length === 0) {
    return null;
  }

  const t = await getTranslations('base.components.courseLeaders');

  // TODO: Add proper links to addresses and phone numbers.
  // TODO: Find out how to access that part of the text..
  return (
    <section 
      className='w-full max-w-[1536px] mx-auto px-4 space-y-8'
      aria-labelledby='course-leaders-title'
    >
      <div className='text-center mb-12'>
        <h2
          id='course-leaders-title'
          className='text-kv-black text-2xl md:text-3xl font-bold mb-4'
        >
          {t('title')}
        </h2>
        <div className='w-24 h-1 bg-jobloop-primary-green mx-auto'></div>
      </div>

      <ul
        aria-labelledby='course-leaders-title'
        className='space-y-8'
      >
      {leaders.map((courseLeader, index) => (
        <li
          key={index}
          className='
            flex flex-col md:flex-row p-5 md:p-6 gap-5 md:gap-6 items-center
            rounded-xl shadow-lg border-2 border-jobloop-primary-green
          '
        >
          <div className='
            w-full md:w-2/3 space-y-2 md:space-y-3 min-w-0 order-last
          '>
            <div>
              <h3 className='
                text-kv-black text-lg md:text-xl font-bold w-fit pb-1.5
                border-b-2 border-jobloop-primary-green
              '>
                {courseLeader.position}
              </h3>
            </div>

            {/* TODO: Consider if the name of the person matters more than their position. Especially for course leaders, who are already under a heading indicating their role. */}
            <p className='text-base font-semibold text-jobloop-primary-green'>
              {courseLeader.name}
            </p>

            {courseLeader.description && (
              <div className='
                prose prose-sm sm:prose max-w-none text-gray-700
                leading-relaxed
              '>
                <PortableText
                  // TODO: Request that location, email and phone number be served one at a time to allow for easier parsing.
                  // The content of courseLeader.description is served in a variation of formats, making parsing it challenging and a potential source of errors.
                  value={courseLeader.description}
                />
              </div>
            )}
          </div>

          <div className='
            w-full md:w-1/3 flex justify-center shrink-0 order-first
          '>
            <div className='
              relative overflow-hidden rounded-lg shadow-md group bg-linear-to-br
              from-jobloop-primary-green/20 to-jobloop-primary-orange/20
            '>
              {courseLeader.image ? (
                <Image
                  src={
                    typeof courseLeader.image === 'string'
                      ? courseLeader.image
                      : urlFor(courseLeader.image).width(300).url()
                  }
                  width={300}
                  height={300}
                  alt={courseLeader.image?.alt || `Bilde av ${courseLeader.name}`}
                  className='
                    object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44
                    group-hover:scale-105 transition-transform duration-300
                  '
                />
              ) : (
                <div
                  className='
                    w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 flex items-center
                    justify-center
                  '>
                  <div className='text-center'>
                    <div className='
                      w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 flex items-center
                      justify-center rounded-full bg-jobloop-primary-green/30
                    '>
                      <span className='
                        text-xl sm:text-2xl font-bold
                        text-jobloop-primary-green
                      '>
                        {courseLeader.name
                          ? courseLeader.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                          : ''}
                      </span>
                    </div>

                    <p className='
                      text-xs sm:text-sm text-gray-600 font-medium
                    '>
                      {courseLeader.name}
                    </p>
                  </div>
                </div>
              )}
              <div className='
                absolute inset-0 bg-linear-to-t from-black/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              '/>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </section>
  );
}

import { type Tiltak } from '@/types/sanity/sanity.types';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/Sanity';
import { getTranslations } from 'next-intl/server';

export default async function LeaderSection({ leaders }: { leaders: Tiltak['courseLeaders'] }) {
  if (!leaders || leaders.length === 0) {
    return null;
  }

  const t = await getTranslations('base.components.courseLeaders');

  return (
    <section 
      className='w-full max-w-[1536px] mx-auto px-4 space-y-8'
      aria-labelledby='course-leaders-title'
    >
      {/* TODO: Shorten the bottom border so it is smaller than the text itself. */}
      <h2
        id='course-leaders-title'
        className='
          text-kv-black text-2xl md:text-3xl font-bold pb-4 text-center
          border-b-4 border-jobloop-primary-green w-fit mx-auto
        '
      >
        {t('title')}
      </h2>
      <ul className='space-y-8'>
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
            {/* TODO: Consider if the name of the person matters more than their position. Especially for course leaders, who are already under a heading indicating their role.  */}
            <h3
              className='
                text-kv-black text-lg md:text-xl font-bold w-fit pb-1.5
                border-b-2 border-jobloop-primary-green
              '
            >
              {courseLeader.position}
            </h3>
            <p className='text-base font-semibold text-jobloop-primary-green'>
              {courseLeader.name}
            </p>

            {courseLeader.description && (
              <address className='
                prose prose-sm sm:prose max-w-none text-gray-700
                leading-relaxed not-italic
              '>
                <PortableText
                  // TODO: Find out how to access location, email, and phone number, and add proper links to addresses and phone numbers. Possibly, request that location, email and phone number be served one at a time to allow for easier parsing.
                  value={courseLeader.description}
                />
              </address>
            )}
          </div>

          <div
            // TODO: Try to get rid of the remaining divs.
            className='
              w-full md:w-1/3 flex justify-center shrink-0 order-first
            '
          >
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
                  // TODO: Improve alt text ("image of ..." should be avoided as screen-readers announce that it is an image), and translate it.
                  alt={courseLeader.image?.alt || `Bilde av ${courseLeader.name}`}
                  className='
                    object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44
                    motion-safe:group-hover:scale-105 transition-transform
                    motion-safe:duration-300
                  '
                />
              ) : (
                <div
                  className='
                    w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 flex items-center
                    justify-center flex-col
                  '
                  aria-hidden='true'
                >
                  <span className='
                    w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 flex items-center
                    justify-center rounded-full bg-jobloop-primary-green/30
                    text-xl sm:text-2xl font-bold text-jobloop-primary-green
                  '>
                    {courseLeader.name
                      ? courseLeader.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                      : ''
                    }
                  </span>
                  <p className='text-xs sm:text-sm text-gray-600 font-medium'>
                    {courseLeader.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
      </ul>
    </section>
  );
}

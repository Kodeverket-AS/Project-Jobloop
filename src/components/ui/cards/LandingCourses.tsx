import Image, { type StaticImageData } from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface LandingCoursesCardProps {
  image: StaticImageData;
  title: string;
  text: string;
  path: string;
  alt: string;
  context: string;
  isNew?: boolean;
}

// TODO: Properly test with a screen reader!
// TODO: Ensure that the link is understood as a read more.
// TODO: Rename to a more fitting name, as this is now also used on "om-oss".
/**
 * Creates a card component for displaying course information on the landing page.
 * 
 * The card allows for marking new courses with a visually hidden label for
 * screen readers, while announcing the new status in the heading.
 * 
 * The function makes use of the context parameter to generate unique IDs for
 * the title and description elements, ensuring proper accessibility.
 * 
 * @param image The image to display on the card.
 * @param title The title of the course.
 * @param text The description text of the course.
 * @param path The URL path to navigate to when the card is clicked.
 * @param alt The alt text for the image.
 * @param context The context in which the card is used (e.g., "school" or "work").
 * @param isNew Indicates if the course is new.
 * 
 * @return A JSX element representing the landing courses card.
 */
export function LandingCoursesCard({
  image,
  title,
  text,
  path,
  alt,
  context,
  isNew
}: LandingCoursesCardProps) {
  const t = useTranslations("dictionary");
  const slug = title.replace(/\s+/g, '-').toLowerCase();
  const titleId = `${context}-course-${slug}`;

  return (
    <li
      className={`
        flex
        bg-white rounded-xl hover:shadow-md border border-gray-50
        transition-all duration-200
        ${context === 'school' ? 'shadow-sm' : 'shadow-xs'}
      `}
    >
      <article
        aria-labelledby={titleId}
        className={`
          landing-card
          group relative flex flex-col w-full p-6 gap-4
          [&>a]:order-1 [&>h3]:order-2 [&>p]:order-3 [&>footer]:order-4
          xl:grid xl:grid-cols-2 xl:grid-rows-[1fr_auto_auto_auto_1fr]
          xl:gap-x-6 xl:gap-y-4
          focus-within:rounded-xl focus-within:shadow-sm 
          focus-within:shadow-jobloop-primary-green
          ${context === 'partners' ? 'xl:pb-0 xl:pt-2' : ''}
        `}
      >
        <h3
          id={titleId}
          className={`
            text-xl text-kv-black md:text-2xl font-semibold leading-tight
            xl:col-start-1 xl:row-start-2 xl:pt-0
            ${context === 'partners'
              ? 'lg:pt-2'
              : 'pt-7 lg:pt-8'
            }
          `}
        >
          {isNew && (
            <span className='sr-only'>
              { // TODO: Simplify this.
                t(`new${context.charAt(0).toUpperCase() + context.slice(1)}Course`)
              }:
            </span>
          )}
          {title}
        </h3>
        <p
          className='
            text-base text-gray-600 md:text-lg leading-relaxed pb-2
            xl:col-start-1 xl:row-start-3
          '
        >
          {text}
        </p>
        <div
          className={`
            max-w-full overflow-hidden rounded-xl xl:col-start-2 xl:row-start-1
            xl:row-span-5 xl:min-h-0 xl:self-center
            ${context === 'partners'
              ? 'rounded-lg h-48 flex justify-center xl:mb-4'
              : 'rounded-xl max-h-full h-80'
            }
          `}
        >
          <Image
            alt={alt}
            src={image}
            width={context === 'partners' ? 300 : 600}
            height={context === 'partners' ? 150 : 600}
            className={`
              ${context === 'partners'
                ? 'object-contain max-h-full max-w-full'
                : 'object-cover object-center h-full w-full'
              }
            `}
          />
        </div>
        <footer
          className='
            order-4 md:mt-auto xl:mt-0
            xl:col-start-1 xl:row-start-4
          '
        >
          <Link
            href={path}
            className={`
              focus-visible:outline-none
              before:rounded-xl before:absolute before:content-['']
              before:inset-0 before:w-[calc(100% - 50px)] before:m-[25px]
              before:z-1 xl:before:m-0 xl:before:row-start-1
              xl:before:col-start-2 xl:before:w-[calc(100%-25px)]
              ${context === 'partners'
                ? 'before:h-48 xl:before:h-80'
                : 'before:h-80'
              }
            `}
          >
            <span
              // TODO: Move button-like to SpecialButtons.tsx
              // TODO: Check if button-animations should have "prefers reduced motion" media query.
              // TODO: Consider removing custom css and copy hover style for focus style.
              className='
                w-full md:w-auto md:max-w-[155px] inline-flex items-center
                justify-center gap-3 px-6 py-3 bg-jobloop-primary-green
                text-white rounded-full hover:bg-jobloop-primary-orange
                hover:shadow-lg transition-all duration-300 group/btn
                hover:scale-105
              '
            >
              <span className='font-medium'>
                { // TODO: Add context to the "read more" button.
                  t('readMore')
                }
              </span>
              <FaArrowRight
                className='
                  transition-transform duration-300
                  group-hover/btn:translate-x-1 group-hover/btn:scale-110
                '
                aria-hidden='true'
              />
            </span>
          </Link>
        </footer>
        {isNew && (
          <div
            aria-hidden='true'
            className='
              absolute px-6 py-2 top-4 left-4 z-20 bg-jobloop-primary-orange
              text-white text-md font-bold transform shadow-lg
            '
            style={{ transform: 'rotate(-20deg) translateX(-10px)' }}
          >
            {t('new')}
          </div>
        )}
      </article>
    </li>
  );
}

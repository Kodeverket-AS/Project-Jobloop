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

// TODO: Remove divs where possible.
// TODO: Test these with a screen reader!
// TODO: Move the emulated button and it's span to a separate component.
// TODO: Ensure that the link is understood as a read more.
// TODO: Fix titles not being positioned correctly on smaller screens.
/**
 * Creates a card component for displaying course information on the landing page.
 * 
 * This card makes use of only one link, which covers both the image and the
 * "read more" button by using hit-spans to emulate multiple clickable areas.
 * Drawback: User can't right click to save the image.
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
  const descriptionId = `${context}-course-description-${slug}`;

  return (
    <li>
      <article
        aria-labelledby={titleId}
        className='
          group relative flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse
          bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-50
          p-6 transition-all duration-200 justify-between xl:h-full
          [&:has(.read-more-hit:hover)_.read-more-pill]:bg-jobloop-primary-orange
          [&:has(.read-more-hit:hover)_.read-more-pill]:shadow-lg
          [&:has(.read-more-hit:hover)_.read-more-pill]:scale-105
          [&:has(.read-more-hit:hover)_.read-more-icon]:translate-x-1
          [&:has(.read-more-hit:hover)_.read-more-icon]:scale-110
        '
      >
        <div
          className='
            relative z-20 flex flex-col w-full gap-4 xl:w-1/2 order-last
            pointer-events-none xl:h-full xl:py-3
          '
        >
          <h3
            id={titleId}
            className='
              text-xl text-kv-black md:text-2xl font-semibold leading-tight
            '
          >
            {isNew && (
              <span className='sr-only'>
                {t(`new${context.charAt(0).toUpperCase() + context.slice(1)}Course`)}:
              </span>
            )}
            {title}
          </h3>
          <p
            id={descriptionId}
            className='
              text-base text-gray-600 md:text-lg leading-relaxed
              pointer-events-auto select-text cursor-text
            '
          >
            {text}
          </p>
          <footer className='pt-2 xl:mt-auto'>
            <span // TODO: Remove after moving this to a button file.
              // TODO: Act like hover when this card is tabbed to.
              aria-hidden='true'
              className='
                w-full md:w-auto md:max-w-[155px] inline-flex gap-3 px-6 py-3
                text-white items-center justify-center
                bg-jobloop-primary-green rounded-full transition-all
                duration-300 read-more-pill pointer-events-none
              '
            >
              <span className='font-medium'>{t('readMore')}</span>
              <FaArrowRight
                className='read-more-icon transition-transform duration-300'
                aria-hidden='true'
              />
            </span>
          </footer>
        </div>
        <div // TODO: Consider changing this to a figure?
          className='
            relative z-20 w-full h-80 xl:w-1/2 overflow-hidden rounded-xl
            order-first pointer-events-none
          '
        >
          <Image
            alt={alt}
            src={image}
            width={600}
            height={600}
            className='object-cover h-full max-w-full'
          />
        </div>
        <Link // Link with hits to emulate having one link on the image and one on the button.
          href={path}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className='
            absolute inset-0 z-10 rounded-xl pointer-events-none focus-visible:outline
            focus-visible:outline-offset-4 focus-visible:outline-jobloop-primary-green
          '
        >
          <span
            aria-hidden='true'
            className='
              read-more-hit absolute left-6 right-6 bottom-6 h-12
              pointer-events-auto md:right-auto md:w-[135px] xl:bottom-9
            '
          />
          <span
            // TODO: Fix image-hit stretching past the image width.
            aria-hidden='true'
            className='
              image-hit absolute top-6 left-0 h-80 w-full rounded-xl
              pointer-events-auto xl:left-auto xl:right-0 xl:w-[calc(50%-0.75rem)]
            '
          />
        </Link>
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
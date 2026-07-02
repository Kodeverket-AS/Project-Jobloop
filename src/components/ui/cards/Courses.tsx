import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image, { type StaticImageData } from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
interface CoursesProps {
  image: StaticImageData;
  title: string;
  text: string;
  path: string;
  alt: string;
}

/**
 * @deprecated This function was used for rendering work course cards before the LandingCoursesCard component was introduced.
 */
export function CoursesCard({ image, title, text, path, alt }: CoursesProps) {
  const t = useTranslations("dictionary");
  const slug = title.replace(/\s+/g, '-').toLowerCase();
  const titleId = `course-${slug}`;
  const descriptionId = `course-description-${slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className={`
        group relative flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse
        bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-50
        p-6 transition-all duration-200 justify-between xl:h-full
        [&:has(.read-more-hit:hover)_.read-more-pill]:bg-jobloop-primary-orange
        [&:has(.read-more-hit:hover)_.read-more-pill]:shadow-lg
        [&:has(.read-more-hit:hover)_.read-more-pill]:scale-105
        [&:has(.read-more-hit:hover)_.read-more-icon]:translate-x-1
        [&:has(.read-more-hit:hover)_.read-more-icon]:scale-110
      `}
    >
      <div className={`
        relative z-20 flex flex-col w-full gap-4 xl:w-1/2 order-last
        pointer-events-none xl:h-full xl:py-3
      `}>
        <h3
          id={titleId}
          className={`
            text-xl text-kv-black md:text-2xl font-semibold leading-tight
          `}
        >
          {title}
        </h3>
        <p
          id={descriptionId}
          className={`
            text-base text-gray-600 md:text-lg leading-relaxed
            pointer-events-auto select-text cursor-text
          `}
        >
          {text}
        </p>
        <div className='pt-2 xl:mt-auto'>
          <span
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
        </div>
      </div>
      <div
        className={`
          relative z-20 w-full h-80 xl:w-1/2 overflow-hidden rounded-xl
          order-first pointer-events-none
        `}
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
        className={`
          absolute inset-0 z-10 rounded-xl pointer-events-none focus-visible:outline
          focus-visible:outline-offset-4 focus-visible:outline-jobloop-primary-green
        `}
      >
        <span
          aria-hidden='true'
          className={`
            read-more-hit absolute left-6 right-6 bottom-6 h-12
            pointer-events-auto md:right-auto md:w-[135px] xl:bottom-9
          `}
        />
        <span // Drawback: User can't right click and save the image, as it is below the link.
          aria-hidden='true'
          className={`
            image-hit absolute top-6 left-0 h-80 w-full rounded-xl
            pointer-events-auto xl:left-auto xl:right-0 xl:w-[calc(50%-0.75rem)]
          `}
        />
      </Link>
    </article>
  );
}

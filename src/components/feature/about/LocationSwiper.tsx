'use client';

import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { A11y, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaPause, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

/**
 * Problem: Location Carousel has no pause mechanism for motion-sensitive users
 * In LocationCarousel.tsx, the Swiper carousel autoplays without checking
 * prefers-reduced-motion or providing a pause button. This fails WCAG 2.2.2
 * (Pause, Stop, Hide) and can be problematic for vestibular disorder users.
 *
 * Note: Is the carousel currently purely decorative? I would not say so, but
 * it clearly does not provide proper information about the locations, nor
 * does it provide a way to navigate somewhere one can get more information
 * about them. How can we improve that?
 * 
 * Solution: Add navigation controls as well as a pause-button, and consider
 * adding information about each location to distinguish this from a purely
 * decorative carousel.
 * 
 * Checklist for carousel accessibility:
 * 3. Changes to carousel items must be communicated to all users, including
 *    screen reader users.
 *    Status: ?
 // TODO: Give the carousel entries a better description.
 * 
 // TODO: Remove divs where possible and restructure.
 // TODO: Do something about slow response time when clicking the navigation and pagination buttons.
 */
export function LocationSwiper() {
  const swiperRef = useRef<Swiper | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const prefersReducedMotionRef = useRef(false);
  const userPausedRef = useRef(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const t = useTranslations('about');

  const cities = [
    { name: 'Bergen', src: '/Bergen.webp' },
    { name: 'Haugesund', src: '/Haugesund.webp' },
    { name: 'Stavanger', src: '/Stavanger.webp' },
    { name: 'Tønsberg', src: '/Tønsberg.webp' },
    { name: 'Remote', src: '/Remote.webp' },
    { name: 'Oslo', src: '/Oslo.webp' },
    { name: 'Molde', src: '/Molde.webp' },
    { name: 'Alta', src: '/Alta.webp' },
    { name: 'Ålesund', src: '/Ålesund.webp' },
  ];

  const handleToggleAutoplay = () => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    if (swiper.autoplay.running) {
      userPausedRef.current = true;
      swiper.autoplay.stop();
      setIsPaused(true);
      return;
    }
    
    // Respect reduced-motion: do not restart autoplay while reduce is enabled.
    if (prefersReducedMotionRef.current) return;
    userPausedRef.current = false;
    swiper.autoplay.start();
    setIsPaused(false);
  };

  const handleCarouselKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // TODO: Find out how to have this work as long as the carousel has been clicked, same where it was clicked.
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      swiper.slidePrev();
    };

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      swiper.slideNext();
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;

    swiperRef.current = new Swiper(containerRef.current, {
      modules: [A11y, Pagination, Navigation, Autoplay],

      // Accessibility
      a11y: {
        enabled: true,
        // TODO: Translate a11y messages!
        // firstSlideMessage: '',
        // lastSlideMessage: '',
        // nextSlideMessage: '',
        // prevSlideMessage: '',
        // paginationBulletMessage: '',
        // slideLabelMessage: '',
      },

      // Pagination
      pagination: {
        el: paginationRef.current,
        clickable: true,
        bulletElement: 'button',
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-active-custom',
      },

      // Navigation
      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },

      // Sizing
      spaceBetween: 15,
      slidesPerView: 2,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      },

      // Autoplay
      autoplay: mediaQuery.matches
        ? false
        : {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      loop: true,
      speed: prefersReducedMotionRef.current ? 0 : 1200,
      effect: 'slide',

      // Interaction
      grabCursor: true,
      touchRatio: 1,
      touchAngle: 45,
      threshold: 5,
      touchStartPreventDefault: false,
      touchMoveStopPropagation: false,
    });

    // If reduced-motion is enabled on first load, reflect paused state in UI.
    setIsPaused(mediaQuery.matches);
    const handleMotionChange = (event: MediaQueryListEvent) => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      prefersReducedMotionRef.current = event.matches;
      swiper.params.speed = event.matches ? 0 : 1200;

      // Reduced motion turned on: force stop autoplay.
      if (event.matches) {
        swiper.autoplay?.stop();
        setIsPaused(true);
        return;
      }

      // Reduced motion turned off: resume only if user did not manually pause.
      if (!userPausedRef.current) {
        swiper.autoplay?.start();
        setIsPaused(false);
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      swiperRef.current?.destroy(true, true);
      swiperRef.current = null;
    };
  }, []);

  return (
    <section
      className='
        w-full max-w-[1536px] mx-auto py-16 pb-10 rounded-xl bg-linear-to-br
        from-jobloop-primary-green/50 via-white to-jobloop-primary-orange/50
      '
      aria-labelledby='location-swiper-title'
    >
      <div className='container relative mx-auto px-4 text-center flex flex-col'>
        <h2
          id='location-swiper-title'
          className='text-2xl md:text-3xl font-bold mb-4 text-kv-black'
        >
          {t('about.locations.title')}
        </h2>
        <span
          className='
            block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-8 mx-auto
          '
        />

        <button
          className={`
            absolute group overflow-hidden
            -top-10 left-0 rounded-xl p-2 sm:left-6
            shadow-lg shadow-kv-black/20 hover:cursor-pointer
            scale-100 lg:hover:scale-105 transition-all
            motion-reduce:transition-none motion-reduce:lg:hover:scale-100
            ${
              prefersReducedMotionRef.current
              ? 'bg-[#adadab]'
              : isPaused ? 'bg-jobloop-primary-orange' : 'bg-jobloop-primary-green'
            }
          `}
          aria-label={
            // TODO: Translate aria-label
            prefersReducedMotionRef.current
              ? 'Carousel autoplay disabled due to reduced motion preference'
              : isPaused ? 'Play carousel' : 'Pause carousel'
          }
          aria-pressed={isPaused}
          onClick={handleToggleAutoplay}
          disabled={prefersReducedMotionRef.current}
          title={
            // TODO: Translate title
            prefersReducedMotionRef.current
              ? 'Carousel autoplay disabled due to reduced motion preference'
              : isPaused ? 'Play carousel' : 'Pause carousel'
          }
        >
          <div
            className={`
              absolute inset-0 w-0
              group-hover:w-[175%] transition-all duration-500 md:duration-600
              lg:duration-700 ease-in-out -z-10 motion-reduce:transition-none
              ${
                prefersReducedMotionRef.current
                ? ''
                : isPaused ? 'bg-jobloop-primary-green' : 'bg-jobloop-primary-orange'
              }
            `}
            style={{ transform: 'skewX(-45deg)', left: '-35%' }}
          ></div>
          {isPaused ? (
            <FaPlay
              className='text-2xl'
              aria-hidden='true'
            />
          ) : (
            <FaPause
              className='text-2xl'
              aria-hidden='true'
            />
          )}
        </button>

        <div
          // TODO: Consider moving the tabindex to the list element itself.
          ref={containerRef}
          tabIndex={0}
          role='region'
          aria-roledescription='carousel'
          aria-label={t('about.locations.title')}
          onKeyDown={handleCarouselKeyDown}
          className='
            swiper relative max-w-7xl mx-auto locations-swiper w-full
            overflow-hidden focus:rounded-xl focus:shadow-sm
            focus:shadow-jobloop-primary-green
          '
          // TODO: Improve the look of the carousel when focused.
        >
          <ul
            className='swiper-wrapper'
          >
            {cities.map((city) => (
              <li
                className='
                  swiper-slide flex! flex-col! items-center gap-3 p-2 mb-8
                '
                key={city.name}
              >
                <h3
                  className='order-last'
                >
                  {city.name}
                </h3>
                <div
                  className='
                    w-32 h-32 md:w-40 md:h-40 overflow-hidden
                    rounded-xl shadow-lg group hover:shadow-xl transition-all
                    duration-300 hover:scale-105 order-first
                    motion-reduce:transition-none
                  '
                >
                  <Image
                    src={city.src}
                    alt={city.name}
                    width={200}
                    height={200}
                    className='
                      object-cover w-full h-full group-hover:scale-110
                      transition-transform duration-300
                      motion-reduce:transition-none
                    '
                  />
                  <div
                    className='
                      absolute inset-0 bg-linear-to-t from-black/20
                      to-transparent opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      motion-reduce:transition-none
                    '
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className='
            relative flex flex-row justify-around content-center
          '
        >
          {/* Navigation */}
          {/*
          // TODO: Consider adding in a hover animation to make the color change less abrupt.
          */}
          <button
            ref={prevRef}
            className='
              order-first hover:cursor-pointer scale-100 lg:hover:scale-110
              transition-all motion-reduce:transition-none
              motion-reduce:lg:hover:scale-100
            '
            aria-label='Previous slide'
          >
            <FaChevronLeft
              className='
                text-2xl text-jobloop-primary-orange
                hover:text-jobloop-primary-green
              '
              aria-hidden='true'
            />
          </button>
          <button
            ref={nextRef}
            className='
              group overflow-hidden order-last hover:cursor-pointer scale-100
              lg:hover:scale-110 transition-all motion-reduce:transition-none
              motion-reduce:lg:hover:scale-100
            '
            aria-label='Next slide'
          >
            <FaChevronRight
              // Using jobloop-secondary-orange to avoid it blending with background.
              className='
                text-2xl text-jobloop-secondary-orange
                hover:text-jobloop-primary-green
              '
              aria-hidden='true'
            />
          </button>

          {/* Pagination */}
          <div
            // TODO: Find out why the scale transition seems to be delayed.
            ref={paginationRef}
            className='
              swiper-pagination block! box-content! relative! top-[unset]!
              bottom-[unset]! left-[unset]! w-auto! *:hover:cursor-pointer
              *:scale-100 *:lg:hover:scale-110 *:transition-all
              *:motion-reduce:transition-none *:motion-reduce:lg:hover:scale-100
            '
          ></div>
        </div>
      </div>
    </section>
  );
}
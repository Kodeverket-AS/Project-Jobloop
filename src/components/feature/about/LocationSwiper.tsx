'use client';

import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { A11y, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaPause , FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
 * 1. Users must be able to pause carousel movement because it can be too fast
 *    or distracting, making text hard to read.
 *    Status: ?
 // TODO: Add pause mechanism with a visible pause button
 // TODO: Find out why prefers-reduced-motion makes the swiper jump once and then pause.
 * 
 * 2. All functionality, including navigating between carousel items, must be
 *    operable by keyboard.
 *    Status: ?
 // TODO: Add option to navigate between carousel elements with arrow keys (left, right).
 // TODO: Consider if pausing the carousel while tabbed to is proper.
 * 
 * 3. Changes to carousel items must be communicated to all users, including
 *    screen reader users.
 *    Status: ?
 // TODO: Give the carousel entries a better description.
 * 
 * 4. The keyboard position (“focus”) is managed in a reasonable and
 *    comprehensible fashion.
 *    Status: ?
 // TODO: Make it possible to escape the carousel when navigating using tab.
 * 
 // TODO: Remove divs where possible and restructure.
 // TODO: Do something about slow response time when clicking the navigation and pagination buttons.
 */
export function LocationSwiper() {
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

  useEffect(() => {
    if (!containerRef.current) return;

    const swiper = new Swiper(containerRef.current, {
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
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      loop: true, // TODO: Examine if this still breaks keyboard navigation.
      speed: 1200,
      effect: 'slide',

      // Interaction
      grabCursor: true,
      touchRatio: 1,
      touchAngle: 45,
      threshold: 5,
      touchStartPreventDefault: false,
      touchMoveStopPropagation: false,
    });

    return () => {
      swiper.destroy(true, true);
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
          className='
            absolute -top-12 left-4 text-jobloop-primary-orange hover:text-jobloop-primary-green
          '
          aria-label='Pause carousel'
          // TODO: Add button function
        >
          <FaPause
            className='text-2xl'
            aria-hidden='true'
          />
        </button>

        <div
          ref={containerRef}
          className='
            swiper relative max-w-7xl mx-auto locations-swiper w-full
            overflow-hidden motion-reduce:transition-none
          '
          // TODO: Find out if using role='region' would be appropriate here.
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
                    '
                  />
                  <div
                    className='
                      absolute inset-0 bg-linear-to-t from-black/20
                      to-transparent opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
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
          // TODO: Update text color on both buttons so they don't blend in too much.
          // TODO: Consider adding in a hover animation to make the color change less abrupt.
          */}
          <button
            ref={prevRef}
            className='order-first hover:cursor-pointer'
            aria-label='Previous slide'
          >
            <FaChevronLeft
              className='text-2xl text-jobloop-primary-orange hover:text-jobloop-primary-green'
              aria-hidden='true'
            />
          </button>
          <button
            ref={nextRef}
            className='order-last hover:cursor-pointer'
            aria-label='Next slide'
          >
            <FaChevronRight
              className='text-2xl text-jobloop-primary-orange hover:text-jobloop-primary-green'
              aria-hidden='true'
            />
          </button>

          {/* Pagination */}
          <div
            ref={paginationRef}
            className='swiper-pagination block! box-content! relative! top-[unset]! bottom-[unset]! left-[unset]! w-auto! *:hover:cursor-pointer'
          ></div>
        </div>
      </div>
    </section>
  );
}
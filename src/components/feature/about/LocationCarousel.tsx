'use client';

import { useEffect, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination, Autoplay } from 'swiper/modules';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function LocationCarousel() {
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

  // TODO: Test this properly with a screen reader.
  // TODO: Find out if and how to add in navigation buttons that are accessible and can be placed correctly.
  // TODO: Attempt to clean up divs
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const isPaused = reducedMotion || userPaused;

  // Watch prefers-reduced-motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // Keep Swiper autoplay in sync with reduced motion
  useEffect(() => {
    if (!swiper?.autoplay) return;

    if (isPaused) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }, [swiper, isPaused]);

  // Respect reduced motion: user cannot force autoplay on
  const handleToggleAutoplay = () => {
    if (reducedMotion) return;
    setUserPaused((prev) => !prev);
  };

  return (
    <section
      className={`
        w-full max-w-[1536px] mx-auto py-16 rounded-xl bg-linear-to-br
        from-jobloop-primary-green/50 via-white to-jobloop-primary-orange/50
      `}
      aria-labelledby='location-carousel-title'
    >
      <div className='relative container mx-auto px-4 text-center'>
        <h2
          id='location-carousel-title'
          className='text-2xl md:text-3xl font-bold mb-4 text-kv-black'
        >
          {t('about.locations.title')}
        </h2>
        <span className='block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-8 mx-auto'></span>

        <button
          // TODO: Translate aria-labels
          type='button'
          onClick={handleToggleAutoplay}
          aria-pressed={isPaused}
          disabled={reducedMotion}
          aria-label={
            reducedMotion
              ? 'Autoplay disabled due to reduced motion preference'
              : isPaused
              ? 'Play carousel'
              : 'Pause carousel'
          }
          title={
            reducedMotion
              ? 'Autoplay disabled due to reduced motion preference'
              : isPaused
              ? 'Play carousel'
              : 'Pause carousel'
          }
          className='absolute top-0 left-0 lg:left-4 xl:left-6 rounded-xl ml-4 p-2 shadow-lg bg-jobloop-primary-green hover:bg-jobloop-primary-orange disabled:opacity-60 disabled:cursor-not-allowed'
        >
          {isPaused ? <FaPlay aria-hidden='true' /> : <FaPause aria-hidden='true' />}
        </button>

        <Swiper
          modules={[A11y, Keyboard, Pagination, Autoplay]}
          wrapperTag={'ul'}
          className='relative max-w-7xl mx-auto locations-swiper motion-reduce:transition-none'

          onSwiper={setSwiper}

          // Accessibility
          a11y={{
            enabled: true,
            // TODO: Translate a11y messages!
            // firstSlideMessage: '',
            // lastSlideMessage: '',
            // nextSlideMessage: '',
            // prevSlideMessage: '',
            // paginationBulletMessage: '',
            // slideLabelMessage: '',
          }}

          // Keyboard navigation
          keyboard={{
            enabled: true,
          }}

          // Pagination
          pagination={{
            enabled: true,
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}

          // Sizing
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
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
          }}

          // Autoplay
          autoplay={
            reducedMotion
              ? false
              : {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
          }
          loop={false} // This creates a focus trap if enabled.
          speed={reducedMotion ? 0 : 1200}
          effect='slide'

          // Interaction
          grabCursor={true}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
        >
          {cities.map((city) => (
            <SwiperSlide
              key={city.name}
              tag={'li'}
              className='flex! flex-col! items-center gap-3 p-2 mb-8'
            >
              <h3 className='order-last'>
                {city.name}
              </h3>
              <div
                className={`
                  w-32 h-32 md:w-40 md:h-40 overflow-hidden
                  rounded-xl shadow-lg group hover:shadow-xl transition-all
                  duration-300 hover:scale-105
                `}
              >
                <Image
                  src={city.src}
                  alt={city.name}
                  width={200}
                  height={200}
                  className={`
                    object-cover w-full h-full group-hover:scale-110
                    transition-transform duration-300
                  `}
                />
                <div
                  className={`
                    absolute inset-0 bg-linear-to-t from-black/20
                    to-transparent opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .locations-swiper {
          overflow: hidden;
        }

        .locations-swiper .swiper-slide {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .locations-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50%;
          cursor: pointer;
        }

        .swiper-pagination-bullet-active-custom {
          background: #f4a366;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(244, 163, 102, 0.5);
          cursor: pointer;
        }

        .locations-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .swiper-wrapper {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

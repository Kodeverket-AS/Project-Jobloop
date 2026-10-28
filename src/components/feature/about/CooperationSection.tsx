'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LinkButtonAnimatedWithIcon } from '@/components/buttons';
import { useTranslations } from 'next-intl';

export function CooperationSection() {
  const [photosAnimated, setPhotosAnimated] = useState(false);

  const t = useTranslations('about');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !photosAnimated) {
            setPhotosAnimated(true);

            const photos = entry.target.querySelectorAll('.team-photo');
            photos.forEach((photo, index) => {
              setTimeout(() => {
                photo.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    const teamSection = document.querySelector('.team-section');
    const samarbeidSection = document.querySelector('.samarbeid-section');

    if (samarbeidSection) {
      observer.observe(samarbeidSection);
    } else if (teamSection) {
      observer.observe(teamSection);
    }

    return () => observer.disconnect();
  }, [photosAnimated]);

  // TODO: Deal with divs and restructure.
  // TODO: Improve alt text and translate it!
  return (
    <section
      className='samarbeid-section'
      aria-labelledby='contact-us-title'
    >
      <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start'>
        <div className='flex flex-col items-start text-left max-w-lg order-last'>
          <div className='relative w-fit mx-auto md:mx-0 '>
            <h2
              id='contact-us-title'
              className='
                text-xl text-center md:text-left md:text-2xl font-bold mb-6
                border-jobloop-primary-orange border-b-4 pb-2
              '
            >
              {t('about.contactUs.title')}
            </h2>
          </div>
          <p className='text-lg leading-relaxed mb-8 text-pretty'>
            {t('about.contactUs.text')}
          </p>
          <LinkButtonAnimatedWithIcon Path={'/kontakt'} Text={t('about.contactUs.cta')} />
        </div>

        <div className='relative w-full md:w-64 h-64 mb-24 lg:mb-0 lg:mr-12 order-first'>
          <Image
            src='/Kim.jpg'
            alt='Kim'
            width={150}
            height={150}
            className='rounded-full absolute top-0 -left-5 team-photo slide-left'
          />
          <Image
            src='/Inger.jpg'
            alt='Inger Johanne'
            width={150}
            height={150}
            className='rounded-full absolute top-0 -right-5 team-photo slide-right'
          />
          <Image
            src='/Sina.jpg'
            alt='Sina'
            width={150}
            height={150}
            className='rounded-full absolute bottom-0 left-1/4 team-photo slide-bottom'
          />
        </div>
      </div>
    </section>
  );
}

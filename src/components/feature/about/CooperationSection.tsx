'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LinkButtonAnimatedWithIcon } from '@/components/buttons';
import { useTranslations } from 'next-intl';

export function CooperationSection() {
  const [photosAnimated, setPhotosAnimated] = useState(false);

  const t = useTranslations('base');

  useEffect(() => {
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
  return (
    <section className=' samarbeid-section'>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start'>
        <div className='relative w-full md:w-64 h-64 mb-24 lg:mb-0 lg:mr-12'>
          <div className='absolute top-0 left-[-20px] team-photo slide-left'>
            <Image
              src='/Karl.webp'
              alt='Karl Håkon'
              width={150}
              height={150}
              className='rounded-full'
            />
          </div>
          <div className='absolute top-0 right-[-20px] team-photo slide-right'>
            <Image
              src='/Inger.jpg'
              alt='Inger Johanne'
              width={150}
              height={150}
              className='rounded-full'
            />
          </div>
          <div className='absolute bottom-0 left-1/4 team-photo slide-bottom'>
            <Image src='/Sina.jpg' alt='Sina' width={150} height={150} className='rounded-full' />
          </div>
        </div>

        <div className='flex flex-col items-start text-left max-w-lg'>
          <div className='relative w-fit mx-auto md:mx-0 '>
            <h2 className='text-xl text-center md:text-left md:text-2xl font-bold mb-2'>
              {t('about.contactUs.title')}
            </h2>
            <span className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6'></span>
          </div>
          <p className='text-lg leading-relaxed mb-8 text-pretty'>{t('about.contactUs.text')}</p>
          <LinkButtonAnimatedWithIcon Path={'/kontakt'} Text={t('about.contactUs.cta')} />
        </div>
      </div>
    </section>
  );
}

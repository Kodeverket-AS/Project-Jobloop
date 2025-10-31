'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function CourseInfoCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  const t = useTranslations('ki.course');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.card-slide-in');
      cards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='w-full mx-auto mb-16'>
      <h2 className='text-3xl font-bold text-center mb-12 text-jobloop-primary-green'>
        {t('title')}
      </h2>
      <div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-jobloop-primary-green/20 hover:shadow-xl transition-all duration-300'>
        <div className='grid gap-6' ref={cardsRef}>
          <div className='card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-lg hover:scale-105 transition-all duration-300'>
            <div>
              <h3 className='text-xl font-bold text-jobloop-primary-grey mb-2'>
                {t('duration.title')}
              </h3>
              <p className='text-lg'>
                {t.rich('duration.text', {
                  span: (chunks) => (
                    <span className='font-bold text-jobloop-primary-orange'>{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
          <div className='card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-lg hover:scale-105 transition-all duration-300'>
            <div>
              <h3 className='text-xl font-bold text-jobloop-primary-grey mb-2'>
                {t('content.title')}
              </h3>
              <p className='text-lg'>{t('content.text')}</p>
            </div>
          </div>
          <div className='card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-lg hover:scale-105 transition-all duration-300'>
            <div>
              <h3 className='text-xl font-bold text-jobloop-primary-grey mb-2'>
                {t('format.title')}
              </h3>
              <p className='text-lg'>
                {t.rich('format.text', {
                  span: (chunks) => (
                    <span className='font-bold text-jobloop-primary-orange text-2xl'>{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
          <div className='card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-lg hover:scale-105 transition-all duration-300'>
            <div>
              <h3 className='text-xl font-bold text-jobloop-primary-grey mb-2'>
                {t('signup.title')}
              </h3>
              <p className='text-lg'>
                {t.rich('signup.text', {
                  span: (chunks) => (
                    <span className='font-bold text-jobloop-primary-orange text-2xl'>{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
          <div className='card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-lg hover:scale-105 transition-all duration-300'>
            <div>
              <h3 className='text-xl font-bold text-jobloop-primary-grey mb-2'>
                {t('location.title')}
              </h3>
              <p className='text-lg'>{t('location.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

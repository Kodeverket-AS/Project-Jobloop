'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

type CardConfig = {
  key: string;
  border: 'orange' | 'green';
  rich?: boolean;
  emphasizeSize?: boolean;
};

const CARDS: CardConfig[] = [
  {key: 'duration', border: 'orange', rich: true},
  {key: 'content', border: 'green'},
  {key: 'format', border: 'orange', rich: true, emphasizeSize: true},
  {key: 'signup', border: 'green', rich: true, emphasizeSize: true},
  {key: 'location', border: 'orange'}
];

// TODO: H2 needs a different color that has better contrast with the background.
export default function CourseInfoCards() {
  const cardsRef = useRef<HTMLUListElement>(null);

  const t = useTranslations('ki.course');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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
    <section className='w-full mx-auto mb-16'>
      <h2 className='
        text-3xl font-bold text-center mb-12 text-jobloop-primary-green
      '>
        {t('title')}
      </h2>
      <ul
        className='
          grid gap-6 bg-white rounded-2xl p-8 shadow-lg border-2
          border-jobloop-primary-green/20 hover:shadow-xl
          motion-safe:transition-all motion-safe:duration-300
        '
        ref={cardsRef}
      >
        {CARDS.map(({ key, rich, emphasizeSize }, index) => (
          <li
            key={key}
            className={`
              card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4
              ${
                index % 2 === 0
                ? 'border-jobloop-primary-orange'
                : 'border-jobloop-primary-green'
              }
              hover:shadow-lg motion-safe:hover:scale-105
              motion-safe:transition-all motion-safe:duration-300
            `}
          >
            <h3 className='text-xl font-bold text-jobloop-primary-grey mb-2'>
              {t(`${key}.title`)}
            </h3>
            <p className='text-lg'>
              {rich
                ? t.rich(`${key}.text`, {
                  span: (chunks) => (
                    <span
                      className={`font-bold text-jobloop-primary-orange ${
                        emphasizeSize ? 'text-2xl' : ''
                      }`}
                    >
                      {chunks}
                    </span>
                  ),
                })
              : t(`${key}.text`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

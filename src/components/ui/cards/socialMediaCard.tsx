'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

interface SocialMediaCardProps {
  text: string;
  link: string;
  icon: ReactNode;
}

export function SocialMediaCard({ text, link, icon }: SocialMediaCardProps) {
  const t = useTranslations('dictionary');
  const t1 = useTranslations('base.header.navigation');
  const handleClick = () => {
    window.location.href = link;
  };

  // TODO: Check if this page is actually linked anywhere, if not, consider doing something about that.
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='
        w-full flex flex-row p-12 gap-10 rounded-xl shadow-lg items-center
      '
    >
      <div className='flex flex-col'>
        <h3>{text}</h3>
        <p
          onClick={() => handleClick}
          className='hover:text-jobloop-secondary-green'
        >
          {t('readMore')}
          <span className='lowercase sr-only'> {t1('about.label')} {t('on')} {text}</span>
        </p>
      </div>
      {icon}
    </a>
  );
}

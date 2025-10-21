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
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <a href={link} className='w-full flex justify-center'>
      <div className='w-full  flex flex-row p-12 gap-10 rounded-xl shadow-lg items-center '>
        <div>{icon}</div>
        <div className='flex flex-col'>
          <h3>{text}</h3>
          <p onClick={() => handleClick} className='hover:text-jobloop-secondary-green'>
            {t('readMore')}
          </p>
        </div>
      </div>
    </a>
  );
}

'use client';

import { useTranslations } from 'next-intl';

interface BookKimButtonProps {
  className?: string;
}

export function BookKimButton({ className = '' }: BookKimButtonProps) {
  const t = useTranslations('dictionary');
  const t1 = useTranslations('gjensidige');
  return (
    <a
      href="https://calendar.app.google/RRhkgNFmGyTTbYmd6"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block bg-[#002B49] text-white px-8 py-4 rounded-full font-bold
        text-lg hover:bg-[#004d7a] hover:scale-105 hover:shadow-lg
        transition-all duration-300 ${className}
      `}
    >
      {t1('common.buttons.bookConversationWithKim')}
      <span className='sr-only'> ({t('opensInNewTab')})</span>
    </a>
  );
}

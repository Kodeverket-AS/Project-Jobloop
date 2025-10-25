'use client';

import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function LocaleMenuMobile() {
  const curLocale = useLocale();
  const t = useTranslations('base.header.localeSwitcher');

  // State
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  useClickOutside(container, () => setIsOpen(false));

  // Gather info
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Handle user locale change
  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
      router.refresh();
    });
  }

  return (
    <span
      ref={container}
      className='flex flex-col pt-12 gap-4 border-t border-jobloop-primary-green'
    >
      <p className='text-center text-jobloop-secondary-green'>{t('changeLocale')}</p>
      {routing.locales.map((locale) => (
        <button
          key={locale}
          tabIndex={0}
          disabled={isPending}
          onClick={() => onSelectChange(locale)}
          aria-label={`Click to select ${t('locales', { locale })} as your language`}
          className='group flex gap-2 items-center cursor-pointer'
        >
          <Image
            src={`/images/flags/${locale}.svg`}
            height={20}
            width={24}
            alt={`Picture of ${t('locales', { locale: locale })}s flag`}
            className='rounded-md'
          />
          <p className='group-hover:underline duration-200'>{t('locales', { locale: locale })}</p>
        </button>
      ))}
    </span>
  );
}

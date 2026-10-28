'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useTransition } from 'react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useClickOutside } from '@/hooks/useClickOutside';
import { MdLanguage } from 'react-icons/md';
import { LuLoader } from 'react-icons/lu';

export default function LocaleMenu({ altColor }: { altColor: boolean }) {
  const curLocale = useLocale();
  const t = useTranslations('base.header.localeSwitcher');

  // State
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const container = useRef<HTMLLIElement>(null);
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

  // Variable to avoid expected ts error in the Link element
  const hrefPath = {pathname, params};

  // Handle keyboard Escape to close the dropdown
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // TODO: Find out if it is possible to underline the svg-element in addition to the button.
  // TODO: Have current locale background expand fully?
  return (
    <li ref={container} className='relative'>
      <button
        ref={toggleRef}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-2 font-semibold text-xl md:hover:underline cursor-pointer uppercase ${altColor ? 'text-kv-white' : 'text-jobloop-primary-grey'} ${isPending ? 'animate-pulse' : ''}`}
        aria-label={t('openLanguageSwitcher')}
        aria-expanded={isOpen}
      >
        {isPending ? <LuLoader className='animate-spin' /> : <MdLanguage aria-hidden='true' />}
        <span className='uppercase'>{curLocale}</span>
      </button>
      <ul
        className={`
          w-36 absolute right-0 flex flex-col p-2 overflow-hidden bg-kv-white
          shadow-md border-jobloop-primary-grey border rounded-md duration-200
          ${isOpen ? 'visible opacity-100 z-99' : 'hidden opacity-0'}
        `}
      >
        {routing.locales.map((locale) => {
          const isCurrent = curLocale === locale;
          const localeLabel = t('locales', { locale });

          return (
            <li key={locale}>
              <Link
                href={hrefPath}
                locale={locale}
                hrefLang={locale}
                lang={locale}
                aria-label={t('selectLanguage', { locale })}
                aria-current={isCurrent ? 'page' : undefined}
                className={`
                  group flex gap-2 p-1 text-jobloop-primary-grey
                  ${isCurrent || isPending
                    ? 'pointer-events-none'
                    : 'cursor-pointer hover:bg-jobloop-primary-green/20'
                  }
                  ${isCurrent ? 'bg-jobloop-primary-green/50' : ''}
                  ${isPending ? 'opacity-60' : ''}
                `}
                onClick={
                  isCurrent
                    ? undefined
                    : (event) => {
                      event.preventDefault();
                      onSelectChange(locale);
                    }
                }
              >
                <p className='order-last group-hover:underline duration-200'>
                  {localeLabel}
                </p>
                <Image
                  src={`/images/flags/${locale}.svg`}
                  height={20}
                  width={24}
                  alt={t('flagAlt', { locale })}
                  className='rounded-md order-first'
                  aria-hidden='true'
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

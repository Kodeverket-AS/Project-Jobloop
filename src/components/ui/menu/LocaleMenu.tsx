'use client';

import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';
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

  /**
   * Problem: LocaleMenu dropdown has no keyboard Escape handler
   * In LocaleMenu.tsx, the dropdown only closes via useClickOutside. Keyboard
   * users expect Escape to close it.
   // TODO: Add keyboard Escape handler to close the dropdown.
   // TODO: Find out if it is possible to underline the svg-element in addition to the button.
   // TODO: Switch language buttons to <a> elements for better semantics.
   // TODO: Add hreflang attribute to language switchers.
   // TODO: Improve and translate flag alt text.
   // TODO: Translate locale button labels.
   */
  return (
    <li ref={container} className='relative'>
      <button
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-2 font-semibold text-xl md:hover:underline cursor-pointer uppercase ${altColor ? 'text-kv-white' : 'text-jobloop-primary-grey'} ${isPending ? 'animate-pulse' : ''}`}
        aria-label='Click button to open language switcher'
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {isPending ? <LuLoader className='animate-spin' /> : <MdLanguage />}
        <span className='uppercase'>{curLocale}</span>
      </button>
      <ul
        className={`${isOpen ? 'visible opacity-100' : 'hidden opacity-0'} w-36 absolute right-0 flex flex-col p-2 overflow-hidden bg-kv-white shadow-md border-jobloop-primary-grey border rounded-md duration-200`}
      >
        {routing.locales.map((locale) => (
          <li key={locale}>
            <button
              key={locale}
              tabIndex={0}
              disabled={isPending}
              onClick={() => onSelectChange(locale)}
              aria-label={`Click to select ${t('locales', { locale })} as your language`}
              className='group flex gap-2 p-1 cursor-pointer text-jobloop-primary-grey'
              lang={locale}
            >
              <Image
                src={`/images/flags/${locale}.svg`}
                height={20}
                width={24}
                alt={`Picture of ${t('locales', { locale: locale })}s flag`} // TODO: Update this. Currently reads "Picture of Norsks flag".
                className='rounded-md'
              />
              <p className='group-hover:underline duration-200'>{t('locales', { locale: locale })}</p>
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}

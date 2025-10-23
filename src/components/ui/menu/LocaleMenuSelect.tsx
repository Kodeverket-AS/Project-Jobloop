'use client';

import { type ChangeEvent, type ReactNode, useTransition } from 'react';
import { type Locale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

interface MenuProps {
  defaultValue: string;
  children: ReactNode;
}

/**
 * This componennt creates a locale switcher menu for our website
 */
export function LocaleMenuSelect({ defaultValue, children }: MenuProps) {
  // State
  const [isPending, startTransition] = useTransition();

  // Gather info
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Handle user locale change
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <span>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </span>
  );
}

import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { LocaleMenuSelect } from './LocaleMenuSelect';
import Image from 'next/image';

export default function LocaleMenu() {
  const locale = useLocale();
  const t = useTranslations('base.header.localeSwitcher');

  return (
    <LocaleMenuSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          <Image
              src={`/images/flags/${cur}.svg`}
              height={20}
              width={24}
              alt={`Picture of ${t('locales', { locale: cur })}s flag`}
            />
          <span>{t('locales', { locale: cur })}</span>
        </option>
      ))}
    </LocaleMenuSelect>
  );
}

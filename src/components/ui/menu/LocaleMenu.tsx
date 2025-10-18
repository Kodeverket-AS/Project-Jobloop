import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { LocaleMenuSelect } from './LocaleMenuSelect';

export default function LocaleMenu() {
  const locale = useLocale();
  const t = useTranslations("cta.localeSwitcher");

  return (
    <LocaleMenuSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locales', { locale: cur })}
        </option>
      ))}
    </LocaleMenuSelect>
  );
}

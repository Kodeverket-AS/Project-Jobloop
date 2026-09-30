'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export function NotFoundPage() {
  const router = useRouter();
  const t = useTranslations('errors');

  // TODO: Consider adding icons to the buttons for better visual cues.
  // TODO: Consider removing the p elements and make the buttons more descriptive instead (currently they just repeat the information, with the "Go back" button slightly more clear).
  // TODO: Improve the styling of the buttons so they are consistent with the SpecialButtons.tsx behavior (Especially regarding screen sizes)!
  return (
    <div className='flex flex-row flex-wrap gap-12 justify-center items-center'>

      {/*<p className='sr-only'>
        {t('page.notFound.actions.goHome.text')}
      </p>*/}
      <Link
        href='/'
        title={t('page.notFound.actions.goHome.text')}
        className='
          w-full md:w-auto md:max-w-[155px] inline-flex gap-3 px-6 py-3
          bg-jobloop-primary-green p-2 rounded-md text-white text-center
          hover:bg-jobloop-primary-orange
          hover:shadow-lg motion-safe:duration-300 transition-all group/btn
        '
      >
        {t('page.notFound.actions.goHome.label')}
      </Link>

      {/*<p className='sr-only'>
        {t('page.notFound.actions.goBack.text')}
      </p>*/}
      <button
        type='button'
        title={t('page.notFound.actions.goBack.text')}
        onClick={() => router.back()}
        className='
          w-full md:w-auto md:max-w-[155px] inline-flex gap-3 px-6 py-3
          bg-jobloop-primary-green p-2 rounded-md text-white text-center
          hover:bg-jobloop-primary-orange
          hover:shadow-lg motion-safe:duration-300 transition-all group/btn
        '
      >
        {t('page.notFound.actions.goBack.label')}
      </button>

      {/* <p className='flex flex-col items-center'>
        <span>{t('page.notFound.actions.changeLocale.text')}</span>
        <button type='button' onClick={() => router.back()} className='bg-slate-200 p-2 rounded-md'>
          {t('page.notFound.actions.changeLocale.label')}
        </button>
      </p> */}
    </div>
  );
}

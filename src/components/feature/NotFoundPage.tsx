'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';

export function NotFoundPage() {
  const router = useRouter();
  const t = useTranslations('errors');

  return (
    <div className='
      flex flex-row flex-wrap w-full gap-12 justify-center items-center px-10
    '>
      <Link
        href='/'
        title={t('page.notFound.actions.goHome.text')}
        className='
          w-full md:w-[185px] inline-flex gap-3 px-6 py-3 p-2
          justify-center rounded-md text-white text-center
          bg-jobloop-primary-green hover:bg-jobloop-primary-orange
          hover:shadow-lg motion-safe:duration-300 transition-all group/btn
        '
      >
        {t('page.notFound.actions.goHome.label')}
        <BsHouse
          className='self-center stroke-1'
          aria-hidden='true'
        />
      </Link>

      <button
        type='button'
        title={t('page.notFound.actions.goBack.text')}
        onClick={() => router.back()}
        className='
          w-full md:w-[185px] inline-flex gap-3 px-6 py-3 p-2
          justify-center rounded-md text-white text-center
          bg-jobloop-primary-green hover:bg-jobloop-primary-orange
          hover:shadow-lg motion-safe:duration-300 transition-all group/btn
        '
      >
        {t('page.notFound.actions.goBack.label')}
        <BsArrowReturnLeft
          className='self-center stroke-1'
          aria-hidden='true'
        />
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

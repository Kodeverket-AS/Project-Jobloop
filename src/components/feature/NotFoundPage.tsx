'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export function NotFoundPage() {
  const router = useRouter();
  const t = useTranslations('errors');
  return (
    <div className='flex flex-wrap gap-12'>
      <span className='flex flex-col items-center'>
        <p>{t('page.notFound.actions.goHome.text')}</p>
        <Link href='/' className='bg-slate-200 p-2 rounded-md'>
          {t('page.notFound.actions.goHome.label')}
        </Link>
      </span>
      <span className='flex flex-col items-center'>
        <p>{t('page.notFound.actions.goBack.text')}</p>
        <button type='button' onClick={() => router.back()} className='bg-slate-200 p-2 rounded-md'>
          {t('page.notFound.actions.goBack.label')}
        </button>
      </span>
      {/* <span className='flex flex-col items-center'>
        <p>{t('page.notFound.actions.changeLocale.text')}</p>
        <button type='button' onClick={() => router.back()} className='bg-slate-200 p-2 rounded-md'>
          {t('page.notFound.actions.changeLocale.label')}
        </button>
      </span> */}
    </div>
  );
}

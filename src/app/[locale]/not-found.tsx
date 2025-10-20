import { NotFoundPage } from '@/components/feature/NotFoundPage';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('errors');
  return (
    <main className='flex-1 flex flex-col items-center gap-16 my-16'>
      <h1>{t('page.notFound.title')}</h1>
      <p>{t('page.notFound.body')}</p>
      <NotFoundPage />
    </main>
  );
}

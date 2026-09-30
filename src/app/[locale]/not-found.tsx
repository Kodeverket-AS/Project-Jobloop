import { NotFoundPage } from '@/components/feature/NotFoundPage';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('errors');

  // TODO: Consider adding some visual element to lessen irritation of encountering a 404 page (see "Evil By Design - Interaction Design to Lead Us Into Temptation" by Chris Nodder. Specifically the chapter on "Avoiding anger" 120).
  // TODO: Page could do well with more polish.
  return (
    <main id='main'>
      <section
        className='
          flex flex-1 flex-col items-center gap-16 mx-8 my-16 pt-8 pb-12
          bg-white rounded-xl hover:shadow-md border border-gray-50
          transition-all motion-safe:duration-200 lg:mx-18
        '
        aria-labelledby='not-found-title'
      >
        <h1 id='not-found-title'>{t('page.notFound.title')}</h1>
        <p className='px-10 text-balance text-center'>{t('page.notFound.body')}</p>
        <NotFoundPage />
      </section>
    </main>
  );
}

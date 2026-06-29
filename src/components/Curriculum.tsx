import { type Tiltak } from '@/types/sanity/sanity.types';
import { PortableText } from '@portabletext/react';
import { getTranslations } from 'next-intl/server';

// TODO: Deal with divs.
// TODO: Fix spacing difference that happens when removing the parent div.
// TODO: Fix spacing issue that happens when removing h2 div.
// TODO: Look into the heading border solution here and see if it can be used to replace divs in other files.
export default async function Curriculum({
  curriculum,
  title,
}: Pick<Tiltak, 'title' | 'curriculum'>) {
  const t = await getTranslations('base.components.curriculum');
  return (
    <section
      className='w-full max-w-[1536px] mx-auto px-4'
      aria-labelledby='curriculum-title'
    >
      <div className='bg-linear-to-br from-jobloop-primary-green/10 via-white to-jobloop-primary-orange/10 rounded-2xl p-8 shadow-lg border border-jobloop-primary-green/20'>
        <h2
          id='curriculum-title'
          className='text-kv-black text-2xl md:text-3xl font-bold border-b-4 pb-3 border-jobloop-primary-green w-fit mx-auto text-center mb-8'
        >
          {t('title', { subject: title || "<missing title>"})}
        </h2>

        <div className='prose prose-lg max-w-none text-gray-700 leading-relaxed mx-auto'>
          {curriculum && <PortableText value={curriculum} />}
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from 'react';

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export type LegalContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
};

// Legal pages exist in Norwegian and English. Swedish visitors get the Norwegian version.
export type LegalLocale = 'nb' | 'en';

export function getLegalLocale(locale: string): LegalLocale {
  return locale === 'en' ? 'en' : 'nb';
}

export default function LegalPage({
  title,
  lastUpdatedLabel,
  lastUpdated,
  intro,
  sections,
}: LegalContent) {
  return (
    <main className='flex flex-col items-center w-full max-w-[1536px] mx-auto mt-10 mb-16 px-4'>
      <article className='w-full max-w-3xl text-kv-black'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          {title}
          <span className='block w-1/2 h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
        </h1>
        <p className='text-sm text-neutral-500 mb-8'>
          {lastUpdatedLabel}: {lastUpdated}
        </p>
        <div className='text-base md:text-lg leading-relaxed text-neutral-700 space-y-4 mb-12'>
          {intro}
        </div>
        <div className='flex flex-col gap-10'>
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                {index + 1}. {section.title}
              </h2>
              <div className='[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:underline [&_a:hover]:text-jobloop-primary-green text-base md:text-lg leading-relaxed text-neutral-700 space-y-4'>
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

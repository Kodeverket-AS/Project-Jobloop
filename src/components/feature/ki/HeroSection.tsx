import Image from 'next/image';
import { Caveat } from 'next/font/google';
import { getTranslations } from 'next-intl/server';

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function HeroSection() {
  const t = await getTranslations('ki.hero');
  const t1 = await getTranslations('base.header.navigation');

  // TODO: Deal with divs.
  return (
    <div className='w-full grid md:grid-cols-2 gap-8'>
      <h1
        id='ki-intro-title'
        className={`
          text-4xl md:text-5xl lg:text-6xl font-bold leading-normal
          bg-jobloop-primary-green/50 border-8 border-white rounded-2xl p-8
          text-center flex items-center justify-center hover:shadow-lg
          motion-safe:transition-all motion-safe:duration-300 order-last
          ${caveat.className}
        `}
      >
        {t.rich('subtitle', { // TODO: Try to get rid of the <br></br> tags in the translation files, CSS should handle line breaks instead!
          br: () => <br />
        })}
      </h1>
      <div className='
        space-y-6 flex flex-col items-center justify-center order-first
      '>
        <p className={`text-4xl  font-medium ${caveat.className}`}>
          {t('title')}
          <span className='sr-only'>Jobloop.</span>
        </p>
        <div className='flex items-center space-x-4'>
          <Image
            src='/JobloopFarge.svg'
            alt={t1('logo.alt')}
            width={180}
            height={180}
            aria-hidden='true' // Purely decorative, hidden from screen readers.
          />
        </div>
        <div className='
          w-full bg-white-50 rounded-2xl p-6 text-center border-2
          border-jobloop-primary-orange hover:shadow-lg
          motion-safe:transition-all motion-safe:duration-300
        '>
          <p className='text-lg  font-medium mb-2'>{t('questions')}:</p>
          <a
            href='mailto:oda.kristin@jobloop.no'
            className='
              text-jobloop-primary-orange font-semibold text-lg
              hover:underline transition-colors motion-safe:duration-300
            '
          >
            oda.kristin@jobloop.no
          </a>
        </div>
      </div>
    </div>
  );
}

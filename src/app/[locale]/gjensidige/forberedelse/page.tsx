import type { Metadata } from 'next';
import Image from 'next/image';
import GjensidigeHeader from '@/components/feature/gjensidige/GjensidigeHeader';
import { BookKimButton } from '@/components/buttons';
import { QuestionCard } from './components/QuestionCard';
import { InfoCard } from './components/InfoCard';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { questions, infoCards, expectations } from './data';
import GjensidigeImage from '@public/gjensidige.jpg';
import KimImage from '@public/Kim.jpg';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Forberedelse - Gjensidige & JobLoop',
    description: 'Forbered deg på samtalen med JobLoop',
  };
}

// TODO: Translate page!
// TODO: Respect prefers-reduced-motion!
// TODO: Deal with divs and restructure where reasonable.
// TODO: Consider hiding emojis in headings from screen-readers.
// TODO: Deal with emojis.
export default async function Forberedelse() {
  const t = await getTranslations('gjensidige');
  return (
    <div className="min-h-screen bg-[#f4f6f8] font-['Segoe_UI',Arial,sans-serif] text-[#333] leading-relaxed">
      <GjensidigeHeader />

      <main
        id='main'
        className='
          max-w-[1536px] px-4 py-16 flex flex-col items-center gap-16 w-full
          mx-auto
        '
      >
      <section
        className='
          bg-gradient-to-b from-[#002B49] to-[#003d6b] text-white py-16
          px-5 w-full rounded-2xl relative overflow-hidden
        '
        // TODO: Add aria-labelledby
      >
        <div
          className='
            absolute inset-0 bg-gradient-to-r from-transparent via-white/5
            to-transparent motion-safe:animate-shimmer bg-[length:200%_100%]
            rounded-2xl
          '
        />
        <div className='w-full max-w-[1536px] mx-auto px-4 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            <div className='
              flex-shrink-0 order-2 lg:order-1 w-64 md:w-72 lg:w-80
              motion-safe:animate-fade-in-up motion-safe:delay-100
            '>
              <div className='
                aspect-[3/4] relative rounded-lg shadow-2xl overflow-hidden
              '>
                <Image 
                  src={GjensidigeImage} 
                  alt={t('prep.hero.image.alt')} // TODO: Improve alt text.
                  fill
                  sizes='(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px'
                  className='object-cover object-center'
                />
              </div>
            </div>
            <div className='flex-1 text-center lg:text-left order-1 lg:order-2'>
              <h1 className='
                text-4xl md:text-5xl mb-6 font-bold
                motion-safe:animate-fade-in-up motion-safe:delay-200
              '>
                {t('prep.hero.title')}
              </h1>
              <p className='
                text-xl md:text-2xl opacity-95 leading-relaxed mb-6
                motion-safe:animate-fade-in-up motion-safe:delay-300
              '>
                {t('prep.hero.subtitle')}
              </p>
              <div className='
                space-y-3 text-lg opacity-90 leading-relaxed
                motion-safe:animate-fade-in-up motion-safe:delay-400
              '>
                <p>{t('prep.hero.paragraph1')}</p>
                <p>{t('prep.hero.paragraph2')}</p>
                <p>{t('prep.hero.paragraph3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='bg-white py-12 px-5 w-full rounded-2xl'
        aria-labelledby='beforeMeeting'
      >
        <div className='w-full mx-auto px-4'>
          <AnimateOnScroll
            // TODO: Find out how to respect reduced motion
          >
            <h2
              id='beforeMeeting'
              className='text-3xl font-bold text-[#002B49] mb-8 text-center'
            >
              {t('prep.beforeMeeting.title')}
            </h2>
          </AnimateOnScroll>
          <div className='max-w-4xl mx-auto space-y-8 text-[#555]'>
            <AnimateOnScroll>
              <div className='text-center mb-8'>
                <p className='text-lg mb-4'>{t('prep.beforeMeeting.paragraph1')}</p>
                <p className='mb-4'>{t('prep.beforeMeeting.paragraph2')}</p>
              </div>
            </AnimateOnScroll>

            {questions.map((q, idx) => (
              // TODO: Fix up these
              // TODO: Hide emojis from screen readers, as they are just decorative.
              <AnimateOnScroll key={idx}>
                <QuestionCard {...q} />
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll>
              <div className='
                bg-gradient-to-r from-[#fff5f5] to-[#fffafa] p-8 rounded-lg
                border-l-4 border-[#C3002F] shadow-md
              '>
                <p // TODO: Should this be h3 instead?
                  className='font-semibold text-[#002B49] mb-3 text-lg'
                >
                  <span role="img" aria-hidden="true">💡</span>
                  {t('prep.beforeMeeting.remember.title')}
                </p>
                <p className='mb-3 text-[#555] leading-relaxed'>
                  {t('prep.beforeMeeting.remember.paragraph1')}
                </p>
                <p className='text-[#555] leading-relaxed'>
                  {t('prep.beforeMeeting.remember.paragraph2')}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section
        className='bg-[#EBF2F6] py-16 px-5 w-full rounded-2xl'
        // TODO: Add aria-labelledby
      >
        <div className='w-full mx-auto px-4'>
          <AnimateOnScroll>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-[#002B49] mb-6'>
                {t('prep.talkingSoon.title')}
              </h2>
              <p className='text-xl text-[#555] mb-4 max-w-2xl mx-auto'>
                {t('prep.talkingSoon.paragraph1')}
              </p>
              <p className='text-lg text-[#555] max-w-2xl mx-auto'>
                {t('prep.talkingSoon.paragraph2')}
              </p>
            </div>
          </AnimateOnScroll>

          <div className='grid md:grid-cols-2 gap-6 mb-12'>
            {infoCards.map((card, idx) => (
              <AnimateOnScroll key={idx}>
                <InfoCard {...card} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className='
              bg-gradient-to-br from-white to-[#EBF2F6] p-8 rounded-lg
              shadow-lg border-l-[10px] border-[#2C8C7D] mb-8 hover:shadow-xl
              transition-all duration-300
            '>
            <div className='flex items-start gap-4 mb-6'>
              <div
                // TODO: Move this and hide it from screen readers as it is just decorative
                className='
                  bg-[#2C8C7D] text-white w-16 h-16 rounded-full flex
                  items-center justify-center text-3xl flex-shrink-0
                '
              >
                ✅
              </div>
              <div className="flex-1">
                <h3 className='text-2xl font-bold text-[#002B49] mb-3'>
                  {t('prep.afterMeeting.title')}
                </h3>
                <p className='text-[#555] mb-6 leading-relaxed'>
                  {t('prep.afterMeeting.text')}
                </p>
              </div>
            </div>
            <div className='bg-white p-6 rounded-lg border border-gray-200'>
              <p
                // TODO: Should this be a h4?
                className='font-semibold text-[#002B49] text-lg mb-4'
              >
                {t('prep.afterMeeting.whatToExpect.title')}
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                {expectations.map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <span className='text-[#2C8C7D] text-xl'>✓</span>
                    <span className='text-[#555] text-sm'>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </AnimateOnScroll>

          <div className='
            bg-gradient-to-b from-[#EBF2F6] to-white py-20 px-5 w-full
          '>
            <div className='w-full mx-auto px-4'>
              <AnimateOnScroll>
                <div className='max-w-4xl mx-auto text-center mb-12'>
                  <h2 className='text-4xl md:text-5xl font-bold text-[#002B49] mb-6'>
                    {t('common.interested.title')}
                  </h2>
                  <p className='
                    text-xl text-[#555] mb-4 max-w-2xl mx-auto leading-relaxed
                  '>
                    {t('common.interested.text')}
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className='
                  bg-white max-w-4xl mx-auto p-10 md:p-14 rounded-xl
                  shadow-xl border-l-[10px] border-[#002B49]
                '>
                  <div className='flex items-center justify-center gap-3 mb-6'>
                    <div className='
                      bg-[#002B49] text-white w-14 h-14 rounded-full flex
                      items-center justify-center text-2xl
                    '>
                      📧
                    </div>
                    <h3 className='text-3xl font-bold text-[#002B49]'>
                      {t('common.interested.contact.title')}
                    </h3>
                  </div>
                  
                  <p className='
                    text-lg text-[#555] mb-8 leading-relaxed max-w-2xl mx-auto
                  '>
                    {t('common.interested.contact.text')}
                  </p>
                  
                  <div className='
                    bg-gradient-to-r from-[#EBF2F6] to-[#e0f2f1] p-6
                    rounded-lg mb-8 max-w-4xl mx-auto
                  '>
                    <div className='flex flex-col sm:flex-row items-center gap-6'>
                      <div className='flex-shrink-0'>
                        <Image 
                          src={KimImage} 
                          alt={t('common.projectLeader') + ' Kim'}
                          width={128}
                          height={128}
                          className='
                            w-32 h-32 rounded-full object-cover shadow-lg
                            border-4 border-white
                          '
                        />
                      </div>
                      <div className='flex-1 text-center sm:text-left'>
                        <p className='font-bold text-[#002B49] text-xl mb-4'>
                          {t('common.projectLeader')} Kim
                        </p>
                        <div className='
                          flex flex-col sm:flex-row items-center sm:items-start
                          justify-center sm:justify-start gap-4 text-lg
                        '>
                          <div
                            // TODO: Mark up phone number as an actual tel link
                            className='flex items-center gap-2 text-[#555]'
                          >
                            <span className='text-2xl'>📞</span>
                            <span>97 46 91 10</span>
                          </div>
                          <span className='hidden sm:inline text-gray-400'>|</span>
                          <div className='flex items-center gap-2 text-[#555]'>
                            <span className='text-2xl'>✉️</span>
                            <a
                              href='mailto:kim@jobloop.no'
                              className='
                                text-[#002B49] underline font-medium
                                hover:text-[#4AB5A3] transition-colors
                              '
                            >
                              kim@jobloop.no
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='
                    flex flex-col sm:flex-row items-center justify-center gap-4
                  '>
                    <a
                      href='mailto:kim@jobloop.no'
                      className='
                        inline-block bg-[#002B49] text-white px-10 py-4
                        rounded-full font-bold text-lg hover:bg-[#004d7a]
                        hover:scale-105 hover:shadow-lg transition-all
                        duration-300
                      '
                    >
                      {t('common.buttons.sendEmailNow')}
                    </a>
                    <BookKimButton />
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className='mt-12 text-center'>
                  <p className='text-2xl font-bold text-[#002B49] mb-3'>
                    {t('prep.outro.title')}
                  </p>
                  <p className='text-lg text-[#555]'>
                    {t('prep.outro.text')}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

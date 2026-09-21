import type { Metadata } from 'next';
import Image from 'next/image';
import GjensidigeHeader from '@/components/feature/gjensidige/GjensidigeHeader';
import { BookKimButton } from '@/components/buttons';
import { QuestionCard } from './components/QuestionCard';
import { InfoCard } from './components/InfoCard';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { questions, infoCards, expectations } from './data';
import GjensidigeImage from '@public/gjensidige.jpg';
import { getTranslations } from 'next-intl/server';
import { projectLeader } from '../projectLeader';

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
export default async function Forberedelse() {
  const t = await getTranslations('gjensidige');
  return (
    <main className='
      min-h-screen bg-[#f4f6f8] font-["Segoe_UI",Arial,sans-serif]
      text-[#333] leading-relaxed
    '>
      <GjensidigeHeader />
      <article
        id='main'
        className='
          max-w-[1536px] px-4 py-16 flex flex-col items-center *:mb-16 w-full
          mx-auto
        '
        aria-labelledby='heroTitle'
      >
        <div className='
          bg-linear-to-b from-[#002B49] to-[#003d6b] text-white py-16
          px-9 w-full rounded-2xl relative overflow-hidden animate-shimmer
          max-w-[1536px] mx-auto z-10 flex flex-col
          lg:flex-row items-center gap-8 lg:gap-12
        '>
          <div className='flex-1 text-center lg:text-left order-1 lg:order-2'>
            <h1
              id='heroTitle'
              className='
                text-4xl md:text-5xl mb-6 font-bold animate-fade-in-up delay-200
              '
            >
              {t('prep.hero.title')}
            </h1>
            <p className='
              text-xl md:text-2xl opacity-95 leading-relaxed mb-6
              animate-fade-in-up delay-300
            '>
              {t('prep.hero.subtitle')}
            </p>
            <div className='
              space-y-3 text-lg opacity-90 leading-relaxed animate-fade-in-up
              delay-400
            '>
              <p>{t('prep.hero.paragraph1')}</p>
              <p>{t('prep.hero.paragraph2')}</p>
              <p>{t('prep.hero.paragraph3')}</p>
            </div>
          </div>
          <div className='
            shrink-0 order-2 lg:order-1 w-64 md:w-72 lg:w-80
            animate-fade-in-up delay-100
            aspect-3/4 relative rounded-lg shadow-2xl overflow-hidden
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

        <AnimateOnScroll
          as='section'
          ariaLabelledBy='beforeMeeting'
          className='bg-white py-12 px-5 w-full rounded-2xl mx-auto'
        >
          <h2
            id='beforeMeeting'
            className='text-3xl font-bold text-[#002B49] mb-8 text-center'
          >
            {t('prep.beforeMeeting.title')}
          </h2>
          <div className='max-w-4xl mx-auto space-y-8 text-[#555]'>
            <AnimateOnScroll
              className='text-center mb-8'
            >
              <p className='text-lg mb-4'>{t('prep.beforeMeeting.paragraph1')}</p>
              <p className='mb-4'>{t('prep.beforeMeeting.paragraph2')}</p>
            </AnimateOnScroll>

            {questions.map((q, idx) => (
              <AnimateOnScroll key={idx}>
                <QuestionCard {...q} />
              </AnimateOnScroll>
            ))}
            <AnimateOnScroll
              as='section'
              ariaLabelledBy='prep-before-meeting-remember-title'
              className='
                bg-linear-to-r from-[#fff5f5] to-[#fffafa] p-8 rounded-lg
                border-l-4 border-[#C3002F] shadow-md
              '
            >
              <h3
                id='prep-before-meeting-remember-title'
                className='font-semibold! text-[#002B49] mb-3 text-lg! flex'
              >
                {t('prep.beforeMeeting.remember.title')}
                <span
                  className='mr-1 order-first'
                  aria-hidden='true'
                >
                  💡
                </span>
              </h3>
              <p className='mb-3 text-[#555] leading-relaxed'>
                {t('prep.beforeMeeting.remember.paragraph1')}
              </p>
              <p className='text-[#555] leading-relaxed'>
                {t('prep.beforeMeeting.remember.paragraph2')}
              </p>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          as='section'
          ariaLabelledBy='prep-talking-soon-title'
          className='bg-[#EBF2F6] pt-16 px-9 w-full rounded-t-2xl mx-auto mb-0!'
        >
          <h2
            id='prep-talking-soon-title'
            className='text-4xl font-bold text-[#002B49] mb-6 text-center'
          >
            {t('prep.talkingSoon.title')}
          </h2>
          <p className='text-xl text-center text-[#555] mb-4 max-w-2xl mx-auto'>
            {t('prep.talkingSoon.paragraph1')}
          </p>
          <p className='text-lg text-center text-[#555] max-w-2xl mx-auto'>
            {t('prep.talkingSoon.paragraph2')}
          </p>
          <div className='grid md:grid-cols-2 gap-6 my-12'>
            {infoCards.map((card, idx) => (
              <AnimateOnScroll key={idx}>
                <InfoCard {...card} />
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll
            as='section'
            ariaLabelledBy='prep-after-meeting-title'
            className='
              bg-linear-to-br from-white to-[#EBF2F6] p-8 rounded-lg
              shadow-lg border-l-10 border-[#2C8C7D] mb-12 hover:shadow-xl
              transition-all duration-300
            '
          >
            <div className='flex items-start gap-4 mb-6'>
              <div className='flex-1 order-last'>
                <h3
                  id='prep-after-meeting-title'
                  className='text-2xl font-bold text-[#002B49] mb-3'
                >
                  {t('prep.afterMeeting.title')}
                </h3>
                <p className='text-[#555] mb-6 leading-relaxed'>
                  {t('prep.afterMeeting.text')}
                </p>
              </div>
              <span
                className='
                  bg-[#2C8C7D] text-white w-16 h-16 rounded-full flex
                  items-center justify-center text-3xl shrink-0 order-first
                '
                aria-hidden='true'
              >
                ✅
              </span>
            </div>
            <section
              className='bg-white p-6 rounded-lg border border-gray-200'
              aria-labelledby='prep-after-meeting-what-to-expect-title'
            >
              <h4
                id='prep-after-meeting-what-to-expect-title'
                className='font-semibold text-[#002B49] text-lg mb-4'
              >
                {t('prep.afterMeeting.whatToExpect.title')}
              </h4>
              <ul
                className='grid md:grid-cols-2 gap-4'
                aria-label={t('prep.afterMeeting.whatToExpect.title')}
              >
                {expectations.map((item, idx) => (
                  <li key={idx} className='flex gap-3 items-baseline mb-1'>
                    <span className='text-[#555] text-sm order-last'>
                      {item}
                    </span>
                    <span
                      className='text-[#2C8C7D] text-xl order-first'
                      aria-hidden='true'
                    >
                      ✓
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </AnimateOnScroll>
        </AnimateOnScroll>

        <AnimateOnScroll
          as='section'
          ariaLabelledBy='common-interested-title'
          className='bg-[#EBF2F6] py-16 px-9 w-full mx-auto text-center mt-0! mb-0! rounded-b-2xl -top-1 relative'
        >
          <div
            className='bg-linear-to-b from-[#EBF2F6] to-white rounded-2xl'
          >
            <h2
              id='common-interested-title'
              className='text-4xl md:text-5xl font-bold text-[#002B49] mb-6'
            >
              {t('common.interested.title')}
            </h2>
            <p className='
              text-xl text-[#555] mb-12 max-w-2xl mx-auto leading-relaxed
            '>
              {t('common.interested.text')}
            </p>
            <AnimateOnScroll
              as='section'
              ariaLabelledBy='common-interested-contact-title'
              className='
                bg-white max-w-4xl p-10 md:p-14 rounded-xl shadow-xl
                border-l-10 border-[#002B49] mx-9 lg:mx-auto
              '
            >
              <h3
                id='common-interested-contact-title'
                className='
                  text-3xl font-bold text-[#002B49] flex items-center gap-3 mb-6
                  justify-center
                '
              >
                {t('common.interested.contact.title')}
                <span
                  className='
                    bg-[#002B49] text-white w-14 h-14 rounded-full flex
                    items-center justify-center text-2xl order-first
                  '
                  aria-hidden='true'
                >
                  📧
                </span>
              </h3>
              <p className='
                text-lg text-[#555] mb-8 leading-relaxed max-w-2xl mx-auto
                text-left
              '>
                {t('common.interested.contact.text')}
              </p>
              <div className='
                bg-linear-to-r from-[#EBF2F6] to-[#e0f2f1] p-6
                rounded-lg mb-8 max-w-4xl mx-auto
                flex flex-col sm:flex-row items-center gap-6
              '>
                <Image 
                  src={projectLeader.image} 
                  alt={t('common.projectLeader') + ' ' + projectLeader.name}
                  width={128}
                  height={128}
                  className='
                    w-32 h-32 rounded-full object-cover shadow-lg
                    border-4 border-white shrink-0
                  '
                />
                <div className='flex-1 text-center sm:text-left'>
                  <p className='font-bold text-[#002B49] text-xl mb-4'>
                    {t('common.projectLeader')} {projectLeader.name}
                  </p>
                  <address className='
                    flex flex-col sm:flex-row items-center sm:items-start
                    justify-center sm:justify-start gap-4 text-lg not-italic
                  '>
                    <a
                      href={`tel:${projectLeader.phone}`}
                      className='
                        flex items-center gap-2 text-[#555] hover:text-[#4AB5A3]
                        transition-colors after:content-["|"] after:text-gray-400
                        after:sm:inline after:hidden after:order-last after:ml-2
                        after:self-baseline
                      '
                    >
                      <span
                        // TODO: Consider adding "+47" to the phone number for international format
                        className='order-last'
                      >
                        {projectLeader.phoneDisplay}
                      </span>
                      <span
                        className='text-2xl order-first'
                        aria-hidden='true'
                      >
                        📞
                      </span>
                    </a>
                    <a
                      href={`mailto:${projectLeader.email}`}
                      className='flex items-center gap-2 text-[#555]'
                    >
                      <span className='
                        text-[#002B49] underline font-medium
                        hover:text-[#4AB5A3] transition-colors order-last
                      '>
                        {projectLeader.email}
                      </span>
                      <span
                        className='text-2xl order-first'
                        aria-hidden='true'
                      >
                        ✉️
                      </span>
                    </a>
                  </address>
                </div>
              </div>
              <div className='
                flex flex-col sm:flex-row items-center justify-center gap-4
              '>
                <a
                  href={`mailto:${projectLeader.email}`}
                  className='
                    inline-block bg-[#002B49] text-white px-10 py-4
                    rounded-full font-bold text-lg hover:bg-[#004d7a]
                    motion-safe:hover:scale-105 hover:shadow-lg transition-all
                    motion-safe:duration-300
                  '
                >
                  {t('common.buttons.sendEmailNow')}
                </a>
                <BookKimButton />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll
              as='section'
              ariaLabelledBy='prepOutroTitle'
              className='mt-12 pb-20 text-center'
            >
              <h3
                id='prepOutroTitle'
                className='text-2xl! font-bold text-[#002B49] mb-3'
              >
                {t('prep.outro.title')}
              </h3>
              <p
                // TODO: Consider changing this if Kim is not the contact person!
                className='text-lg text-[#555]'
              >
                {t('prep.outro.text')}
              </p>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </article>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import GjensidigeHeader from '@/components/feature/gjensidige/GjensidigeHeader';
import GjensidigeTrackCard from '@/components/feature/gjensidige/GjensidigeTrackCard';
import GjensidigeImage from '@public/gjensidige2.jpg';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gjensidige & JobLoop Pilot',
    description: 'Nytt pilottilbud for kunder av Gjensidige',
  };
}

// TODO: Translate page
// TODO: Deal with divs and restructure
// TODO: Minimize repetition
// TODO: Find out if Kim is the correct person, as the live site says something different (maybe set a simple controller for it at the top of the file?).
export default async function Pilot() {
  const t = await getTranslations('gjensidige');

  const tracks = [
    {
      title: t('about.tracks.completeUngdomsskole.title'),
      ageRange: {
        min: 13,
        max: 16,
      },
      text: {
        paragraph1: t.rich('about.tracks.completeUngdomsskole.paragraph1', {
          strong: (chunks) => <strong>{chunks}</strong>
        }),
        paragraph2: t('about.tracks.completeUngdomsskole.paragraph2')
      },
      goals: [
        t('about.tracks.completeUngdomsskole.goals.goal1'),
        t('about.tracks.completeUngdomsskole.goals.goal2'),
        t('about.tracks.completeUngdomsskole.goals.goal3')
      ],
      goalListTitle: t('about.tracks.completeUngdomsskole.goals.goalListTitle'),
      video: {
        src: 'https://www.youtube.com/embed/68ujVT_dw6A?rel=0',
        title: t('about.tracks.completeUngdomsskole.video.title')
      }
    },
    {
      title: t('about.tracks.completeVGS.title'),
      ageRange: {
        min: 16,
        max: 26,
      },
      text: {
        paragraph1: t.rich('about.tracks.completeVGS.paragraph1', {
          strong: (chunks) => <strong>{chunks}</strong>
        }),
        paragraph2: t('about.tracks.completeVGS.paragraph2'),
      },
      goals: [
        t('about.tracks.completeVGS.goals.goal1'),
        t('about.tracks.completeVGS.goals.goal2'),
        t('about.tracks.completeVGS.goals.goal3'),
      ],
      goalListTitle: t('about.tracks.completeVGS.goals.goalListTitle'),
      video: {
        src: 'https://www.youtube.com/embed/9rvvNz67NxY?rel=0',
        title: t('about.tracks.completeVGS.video.title')
      }
    },
    {
      title: t('about.tracks.workAndITCompetence.title'),
      ageRange: {
        min: 16,
        max: 26,
      },
      text: {
        paragraph1: t.rich('about.tracks.workAndITCompetence.paragraph1', {
          strong: (chunks) => <strong>{chunks}</strong>
        }),
        paragraph2: t('about.tracks.workAndITCompetence.paragraph2'),
      },
      goals: [
        t('about.tracks.workAndITCompetence.goals.goal1'),
        t('about.tracks.workAndITCompetence.goals.goal2'),
        t('about.tracks.workAndITCompetence.goals.goal3'),
      ],
      goalListTitle: t('about.tracks.workAndITCompetence.goals.goalListTitle'),
      // No video currently available
    }
  ];

  const commonQuestions = [
    {
      q: t('about.commonQuestions.cost.question'),
      a: t('about.commonQuestions.cost.answer'),
    },
    {
      q: t('about.commonQuestions.treatment.question'),
      a: t('about.commonQuestions.treatment.answer'),
    },
    {
      q: t('about.commonQuestions.skillset.question'),
      a: t('about.commonQuestions.skillset.answer'),
    },
    {
      q: t('about.commonQuestions.school.question'),
      a: t('about.commonQuestions.school.answer'),
    },
    {
      q: t('about.commonQuestions.workFromHome.question'),
      a: t('about.commonQuestions.workFromHome.answer'),
    },
  ];

  return (
    <div className="
      min-h-screen bg-[#f4f6f8] font-['Segoe_UI',Arial,sans-serif]
      text-[#333] leading-relaxed
    ">
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
            bg-gradient-to-b from-[#002B49] to-[#001f35] text-white
            py-16 px-5 w-full rounded-2xl text-center relative overflow-hidden
          '
          aria-labelledby='gjensidige-hero-title'
        >
          <div className='
            absolute inset-0 bg-gradient-to-r from-transparent via-white/5
            to-transparent motion-safe:animate-shimmer bg-[length:200%_100%] rounded-2xl
          '/>
          <div className='max-w-4xl mx-auto relative z-10'>
            <h1
              id='gjensidige-hero-title'
              className='
                text-4xl md:text-5xl font-bold mb-6
                motion-safe:animate-fade-in-up motion-safe:delay-100
              '
            >
              {t('about.hero.title')}
            </h1>
            <p className='
              text-xl md:text-2xl mb-12 opacity-90 leading-relaxed
              motion-safe:animate-fade-in-up motion-safe:delay-200
            '>
              {t('about.hero.subtitle')}
            </p>
            
            <div className='
              flex justify-center motion-safe:animate-fade-in-up
              motion-safe:delay-300
            '>
              <Image
                src={GjensidigeImage}
                alt={t('about.hero.image.alt')} // TODO: Update alt text to something more descriptive (use image description from previous use of this image?)
                width={600}
                height={340}
                className='
                  w-full max-w-[600px] h-auto rounded-lg object-cover
                  object-center border-2 border-white/30 aspect-video
                '
              />
            </div>
            {/* VIDEO placeholder 
            <div className="bg-[#001f35] w-full max-w-[600px] h-[340px] mx-auto rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center relative hover:border-white/50 transition-all duration-500 animate-fade-in-up delay-300 group cursor-pointer">
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4 opacity-80 animate-pulse-slow">▶</div>
                <p className="text-gray-300">VIDEO: Hei, er du forsikret i Gjensidige?</p>
              </div>
            </div>
            */}
          </div>
        </section>

        <section
          className='bg-white py-16 px-5 w-full rounded-2xl'
          aria-labelledby='gjensidige-tracks-title'
          // TODO: Consider combining this section with the bottom one
        >
          <div className='max-w-4xl mx-auto text-center'>
            <h2
              id='gjensidige-tracks-title'
              className='
                text-3xl md:text-4xl font-bold text-[#002B49] mb-6
                motion-safe:animate-fade-in-up motion-safe:delay-100
              '
            >
              {t('about.tracks.title')}
            </h2>
            <p className='
                text-lg text-[#555] leading-relaxed max-w-2xl mx-auto
                motion-safe:animate-fade-in-up motion-safe:delay-200
              '
            >
              {t('about.tracks.text1')}{' '}
              {t.rich('about.tracks.text2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
          </div>
        </section>

        <section
          className='bg-white py-12 px-5 w-full rounded-2xl'
          aria-label='Gjensidige tracks section' // TODO: Add aria-label translation
          // TODO: Consider adding in a silent heading to this section
        >
          <div className='max-w-[1536px] mx-auto'>
            <ul
              className='grid lg:grid-cols-3 gap-8'
              // TODO: Add aria-label or aria-labelledby to the list
            >
              {tracks.map((track) => (
                <GjensidigeTrackCard
                  key={track.title}
                  title={track.title}
                  ageRange={track.ageRange}
                  text={track.text}
                  goals={track.goals}
                  goalListTitle={track.goalListTitle}
                  video={track.video}
                />
              ))}
            </ul>
          </div>
        </section>

        <section
          className='bg-white py-16 px-5 w-full rounded-2xl'
          aria-labelledby='gjensidige-common-questions-title'
        >
          <div className='max-w-4xl mx-auto'>
            <h2
              id='gjensidige-common-questions-title'
              className='
                text-3xl md:text-4xl font-bold text-[#002B49] mb-12 text-center
                motion-safe:animate-fade-in-up motion-safe:delay-100
              '
            >
              {t('about.commonQuestions.title')}
            </h2>
            
            <div className='space-y-8'>
              {commonQuestions.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`
                      pb-6 hover:border-[#4AB5A3]
                      transition-colors motion-safe:duration-300
                      motion-safe:animate-fade-in-up group
                      motion-safe:delay-${index + 1}00
                      ${index !== commonQuestions.length - 1 ? 'border-b border-gray-200' : ''}
                    `}
                  >
                    <h3 className='
                      text-xl font-bold text-[#002B49] mb-3
                      group-hover:text-[#4AB5A3] transition-colors duration-300
                    '>
                      {item.q}
                    </h3>
                    <p className='text-[#555] leading-relaxed'>
                      {item.a}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className='
            bg-[#EBF2F6] py-16 px-5 w-full rounded-2xl relative overflow-hidden
          '
          aria-labelledby='gjensidige-interested-title'
        >
          <div className='
            absolute inset-0 bg-gradient-to-br from-[#4AB5A3]/5 to-transparent
            rounded-2xl
          '/>
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <h2
              id='gjensidige-interested-title'
              className='
                text-3xl md:text-4xl font-bold text-[#002B49] mb-6
                motion-safe:animate-fade-in-up motion-safe:delay-100
              '
            >
              {t('common.interested.title')}
            </h2>
            <p className='
              text-lg text-[#555] mb-6 leading-relaxed motion-safe:animate-fade-in-up
              motion-safe:delay-200
            '>
              {t('common.interested.text')}
            </p>
            
            <div className='
              mb-8 p-6 bg-white rounded-xl shadow-md border-2
              border-[#4AB5A3] hover:shadow-xl hover:border-[#3a9a8a]
              transition-all duration-500 motion-safe:animate-fade-in-up
              motion-safe:delay-200 group
            '>
              <p className='text-[#555] mb-4 leading-relaxed'>
                <strong className='
                  text-[#002B49] group-hover:text-[#4AB5A3]
                  transition-colors duration-300
                '>
                  {t('about.uncertain.title')}
                </strong>
              </p>
              <p className='text-[#555] mb-6 leading-relaxed'>
                {t('about.uncertain.text')}
              </p>
              <Link
                href='/gjensidige/forberedelse'
                className='
                  inline-block bg-[#4AB5A3] text-white px-8 py-3
                  rounded-full font-bold text-lg hover:bg-[#3a9a8a]
                  motion-safe:hover:scale-110 hover:shadow-xl transition-all duration-300
                  transform
                '
              >
                {t('about.uncertain.linkText')}
                <span aria-hidden='true'> →</span>
              </Link>
            </div>
            
            <div className='
              bg-white rounded-xl p-10 md:p-12 shadow-xl border-l-[10px]
              border-[#C3002F] hover:shadow-2xl transition-all motion-safe:duration-500
              motion-safe:animate-fade-in-up motion-safe:delay-300
            '>
              <h3 className='text-2xl font-bold text-[#002B49] mb-6'>
                {t('common.interested.contact.title')}
              </h3>
              <p className='text-[#555] mb-8 leading-relaxed'>
                {t('common.interested.contact.text')}
              </p>
              
              <div className='mb-8'>
                <p className='font-bold text-[#002B49] text-xl mb-4'>
                  {t('common.projectLeader')} Kim
                </p>
                <div className='
                  flex flex-col sm:flex-row items-center justify-center gap-4
                  text-lg
                '>
                  <div className='
                    flex items-center gap-2 text-[#555]
                    hover:text-[#4AB5A3] transition-colors duration-300
                  '>
                    <span
                      className='text-2xl animate-pulse-slow'
                      aria-hidden='true'
                    >
                      📞
                    </span>
                    <a
                      href='tel:97469110'
                      className='hover:scale-105 transform'
                      // TODO: Add aria-label or title.
                    >
                      97 46 91 10
                    </a>
                  </div>
                  <span className='hidden sm:inline text-gray-400'>|</span>
                  <div className='flex items-center gap-2 text-[#555]'>
                    <span
                      className='text-2xl'
                      aria-hidden='true'
                    >
                      ✉️
                    </span>
                    <a
                      href='mailto:kim@jobloop.no'
                      className='
                        text-[#002B49] underline hover:text-[#4AB5A3]
                        transition-colors font-medium
                        motion-safe:hover:scale-105 inline-block transform
                      '
                      // TODO: Add aria-label or title
                    >
                      kim@jobloop.no
                    </a>
                  </div>
                </div>
              </div>

              <div className='
                flex flex-col sm:flex-row items-center justify-center gap-4
              '>
                <a
                  href='mailto:kim@jobloop.no'
                  className='
                    inline-block bg-[#C3002F] text-white px-10 py-4
                    rounded-full font-bold text-lg hover:bg-[#a10026]
                    hover:shadow-xl transition-all transform
                    motion-safe:hover:scale-110 motion-safe:duration-300
                  '
                >
                  {t('common.buttons.sendEmailNow')}
                </a>
                {/*<a
                  href='https://calendar.app.google/RRhkgNFmGyTTbYmd6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='
                    inline-block bg-[#C3002F] text-white px-10 py-4
                    rounded-full font-bold text-lg hover:bg-[#a10026]
                    hover:scale-110 hover:shadow-xl transition-all duration-300
                    transform
                  '
                  aria-label={t('common.buttons.bookConversationWithKim')}
                >
                  {t('common.buttons.bookConversationWithKim')}
                </a>*/}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import '@/assets/swiper.css';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { IoInformationCircle } from 'react-icons/io5';
import { LocationCarousel } from '@/components/feature/about/LocationCarousel';
import { CooperationSection } from '@/components/feature/about/CooperationSection';
import { LesMerButton, LinkButtonAnimatedWithIcon } from '@/components/buttons';
import { LandingCoursesCard } from '@/components/ui/cards/LandingCourses';
import { TeamMember } from '@/components/ui/cards/TeamMember';

// Images
import Sina from '@public/Sina.jpg';
import Karl from '@public/Karl.webp';
import Inger from '@public/Inger.jpg';
import Beate from '@public/Beate.jpg';
import Oda from '@public/Oda.jpg';
import Kim from '@public/Kim.jpg';

import FonteneLogo from '@public/fontenelogo 1.png';
import GlodeLogo from '@public/glode-logo 1.png';
import PodiumLogo from '@public/podium.png';
import PlaywellLogo from '@public/playwell.png';

export default async function OmOss() {
  const t = await getTranslations('about');
  const t1 = await getTranslations('dictionary');

  const teamData = [
    { name: 'Sina', role: t('about.employees.roles.ceo'), image: Sina },
    // { name: 'Karl Haakon', role: t('about.employees.roles.market'), image: Karl },
    { name: 'Inger Johanne', role: t('about.employees.roles.team'), image: Inger },
    // { name: 'Beate', role: t('about.employees.roles.course'), image: Beate },
    { name: 'Oda Kristin', role: t('about.employees.roles.course'), image: Oda },
    { name: 'Kim', role: t('about.employees.roles.course'), image: Kim },
  ];

  const partners = [
    {
      image: FonteneLogo,
      title: t('about.partners.fontenehuset.title'),
      text: t('about.partners.fontenehuset.text'),
      link: 'https://www.fontenehusetbergen.no/',
    },
    {
      image: GlodeLogo,
      title: t('about.partners.gloede.title'),
      text: t('about.partners.gloede.text'),
      link: 'https://www.gløde.no',
    },
    {
      image: PodiumLogo,
      title: t('about.partners.podium.title'),
      text: t('about.partners.podium.text'),
      link: 'https://www.podium.no/',
    },
    {
      image: PlaywellLogo,
      title: t('about.partners.playwell.title'),
      text: t('about.partners.playwell.text'),
      link: 'https://www.playwell.no/',
    },
  ];

  /**
   * Problem: "About us" has some big blocks of text that would benefit from
   * better structuring and possibly breaking into smaller sections.
   * 
   * Visual content such as images or visualizations of statistics could help
   * break up the text and make the page more engaging.
   * 
   // TODO: Break down large text blocks into smaller sections for better readability.
   */
  // TODO: Clean divs and restructure!
  // TODO: Consider getting rid of empty decorative spans if possible.
  return (
    <main
      id='main'
      className='
        flex flex-col items-center justify-between mt-10 space-y-16 mb-12 px-4
        min-h-screen
      '
    >
      <section
        className='
          container flex flex-col gap-4 mx-auto text-kv-black text-pretty
          lg:block lg:mb-20 lg:flow-root lg:pb-2
        '
        aria-labelledby='about-title'
      >
        <h1
          id='about-title'
          className='font-bold text-4xl md:text-5xl lg:mb-[7rem]'
        >
          {t('about.title')}
          <span className='block w-1/2 h-1 bg-jobloop-primary-green mt-2 mb-6' />
        </h1>
        <div // NOTE: This currently balances against the heading by using a negative top margin to maintain visual alignment. Might need adjustment if heading size changes.
          className='
            w-full overflow-hidden rounded-xl order-first lg:w-2/5
            lg:float-right lg:mb-4 lg:ml-4 lg:-mt-[10.75rem]
          '
        >
          <Image
            src='/JLomossbilde.webp'
            alt={t('about.JLomossbilde')}
            width={500}
            height={375}
            className='w-full h-56 lg:h-80 object-cover'
          />
        </div>
        <p
          className='
            -mt-2 text-base font-bold md:text-xl md:leading-loose
            xl:leading-loose lg:mb-8
          '
        >
          {t('about.paragraph-1')}
        </p>
        <p
          className='
            mt-4 text-base text-neutral-600 md:text-xl md:leading-loose
            xl:leading-loose lg:mb-8
          '
        >
          {t('about.paragraph-2')}
        </p>
        <aside // Set as aside due to this not being required to understand the current content
          className='
            relative rounded-xl p-6 mt-4
            bg-jobloop-primary-orange/5 border border-jobloop-primary-orange
            shadow-lg shadow-jobloop-secondary-orange/15
            lg:w-2/5 lg:float-left lg:mt-0 lg:mr-8 lg:mb-4
          '
        >
          <p
            className='text-base text-center text-pretty md:leading-loose lg:text-xl'
          >
            {t('about.paragraph-3')}
          </p>
          <IoInformationCircle
            aria-hidden='true'
            className='
              absolute bottom-0 right-0 text-5xl text-jobloop-primary-orange/15
            '
          />
        </aside>
        <p
          className={`
            mt-6 text-base text-neutral-600
            md:text-xl md:leading-loose xl:leading-loose
          `}
        >
          {t('about.paragraph-4')}
        </p>
      </section>

      <section
        className='container mx-auto px-4'
        // TODO: Add aria-labelledby and add a subheading to this section, or change to div.
      >
        <div
          className='
            mx-auto px-4 container relative flex flex-col justify-center
            items-center gap-4 md:gap-6 p-3 sm:p-4 md:p-6
            bg-jobloop-primary-green/5 border border-jobloop-primary-green
            rounded-xl md:rounded-xl shadow-lg shadow-jobloop-secondary-green/15
          '
        >
          <IoInformationCircle
            className='absolute bottom-0 right-0 text-5xl text-jobloop-primary-green/15'
            aria-hidden={true}
          />
          <p className='text-lg md:text-xl xl:text-2xl md:leading-loose text-center'>
            {t('about.cta-1.text')}
          </p>
          <div className='mt-6'>
            <LinkButtonAnimatedWithIcon Path={'/kontakt'} Text={t('about.cta-1.label')} />
          </div>
        </div>
      </section>

      <section
        className='flex flex-col gap-8 team-section w-full'
        aria-labelledby='team-title'
      >
        <div className='w-fit mx-auto'>
          <h2
            id='team-title'
            className='text-2xl md:text-3xl font-bold text-center'
          >
            {t('about.employees.title')}
          </h2>
          <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
        </div>

        {/* La til mx-auto her for å midtstille hele containeren, og justify-items-center for penere plassering av kortene */}
        {/* Beholder grid på mobil, men blir til en perfekt midtstilt flex-box på desktop */}
        <ul
          className='
            container mx-auto grid grid-cols-2 gap-8 px-5
            md:flex md:flex-wrap md:justify-center
          '
        >
          {teamData.map((person) => (
            // La på en valgfri md:w-48 (eller tilsvarende) så kortene beholder en fin størrelse i flex-layouten
            <li
              key={person.name}
              className='w-full md:w-44 lg:w-48'
            >
              <TeamMember name={person.name} role={person.role} image={person.image} />
            </li>
          ))}
        </ul>
      </section>
      <section
        className='container mx-auto px-4'
        aria-labelledby='partners-title'
      >
        <div className='w-fit mx-auto mb-12'>
          <h2
            id='partners-title'
            className='text-2xl md:text-3xl font-bold text-center'
          >
            {t('about.partners.title')}
          </h2>
          <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
        </div>
        <ul
          className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'
          aria-labelledby='partners-title'
        >
          {partners.map((partner, index) => (
            <LandingCoursesCard
              key={index}
              image={partner.image}
              title={partner.title}
              text={partner.text}
              path={partner.link}
              alt={`Picture of ${partner.title}s logo`}
              context='partners'
            />
          ))}
        </ul>
      </section>
      <CooperationSection />
      <LocationCarousel />
    </main>
  );
}

import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { IoInformationCircle } from 'react-icons/io5';
import { LocationCarousel } from '@/components/feature/about/LocationCarousel';
import { CooperationSection } from '@/components/feature/about/CooperationSection';
import { LesMerButton, LinkButtonAnimatedWithIcon } from '@/components/buttons';
import { TeamMember } from '@/components/ui/cards/TeamMember';

// Images
import Sina from '@public/Sina.jpg';
import Karl from '@public/Karl.webp';
import Inger from '@public/Inger.jpg';
import Beate from '@public/Beate.jpg';
import Oda from '@public/Oda.jpg';
import Kim from '@public/Kim.jpg';

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
      image: '/fontenelogo 1.png',
      title: t('about.partners.fontenehuset.title'),
      text: t('about.partners.fontenehuset.text'),
      link: 'https://www.fontenehusetbergen.no/',
    },
    {
      image: '/glode-logo 1.png',
      title: t('about.partners.gloede.title'),
      text: t('about.partners.gloede.text'),
      link: 'https://www.gløde.no',
    },
    {
      image: '/podium.png',
      title: t('about.partners.podium.title'),
      text: t('about.partners.podium.text'),
      link: 'https://www.podium.no/',
    },
    {
      image: '/playwell.png',
      title: t('about.partners.playwell.title'),
      text: t('about.partners.playwell.text'),
      link: 'https://www.playwell.no/',
    },
  ];

  // TODO: Clean divs and restructure!
  return (
    <main
      id='main'
      className={`
        flex flex-col items-center justify-between mt-10 space-y-16 mb-12 px-4
        min-h-screen
      `}
    >
      <section
        className='container flex flex-col gap-4'
        aria-labelledby='about-title'
      >
        <div className='w-full mx-auto flex flex-col gap-6 text-pretty text-kv-black'>
          <div className='w-full space-y-8'>
            <div className='w-full lg:w-2/5 overflow-hidden rounded-xl float-right ml-4 mb-4 '>
              <Image
                src='/JLomossbilde.webp'
                alt='3 personer i jobloop som sitter å snakker sammen rundt et bord ute'
                width={500}
                height={375}
                className='w-full h-56 lg:h-80 object-cover'
              />
            </div>
            <h1
              id='about-title'
              className='text-4xl md:text-5xl font-bold lg:pb-12'
            >
              {t('about.title')}
              {/* TODO: Get rid of the empty decorative span if possible. */}
              <span className='block w-1/2 h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
            </h1>
            <p className='text-base md:text-xl font-bold md:leading-loose xl:leading-loose'>
              {t('about.paragraph-1')}
            </p>
            <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600 '>
              {t('about.paragraph-2')}
            </p>
            <div className='w-full lg:w-2/5 flex flex-col justify-center float-left mr-8 mb-4'>
              {/* TODO: Should this be an "aside"? It looks like supplementary information */}
              <div className='relative shadow-lg shadow-jobloop-secondary-orange/15 flex flex-col gap-4 bg-jobloop-primary-orange/5 border border-jobloop-primary-orange p-6 rounded-xl mb-6'>
                <IoInformationCircle className='absolute bottom-0 right-0 text-5xl text-jobloop-primary-orange/15 ' />
                <p className='text-base lg:text-xl md:leading-loose text-center text-pretty'>
                  {t('about.paragraph-3')}
                </p>
              </div>
            </div>
            <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600 '>
              {t('about.paragraph-4')}
            </p>
          </div>
        </div>
      </section>
      <section
        className=''
        // TODO: Add aria-labelledby.
      >
        {/* TODO: Consider adding a subheading to this section, or use a different semantic element! */}
        <div className='container mx-auto px-4'>
          <div
            className={`
              container relative flex flex-col justify-center items-center
              gap-4 md:gap-6 p-3 sm:p-4 md:p-6 bg-jobloop-primary-green/5
              border border-jobloop-primary-green rounded-xl md:rounded-xl
              shadow-lg shadow-jobloop-secondary-green/15
            `}
          >
            {/* TODO: Hide decorative icon from screen readers and give screen readers the same information */}
            <IoInformationCircle className='absolute bottom-0 right-0 text-5xl text-jobloop-primary-green/15' />
            <p className='text-lg md:text-xl xl:text-2xl md:leading-loose text-center'>
              {t('about.cta-1.text')}
            </p>
            <div className='mt-6'>
              <LinkButtonAnimatedWithIcon Path={'/kontakt'} Text={t('about.cta-1.label')} />
            </div>
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
          className={`
            container mx-auto grid grid-cols-2 gap-8 px-5
            md:flex md:flex-wrap md:justify-center
          `}
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
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
          {/* TODO: Deal with double link issue. */}
          {partners.map((partner, index) => (
            <li
              key={partner.title + index}
              // TODO: Check if li can/should have an aria-labelledby when containing a heading.
              className={`
                w-full group flex flex-col p-6 gap-4 lg:gap-6 xl:flex-row-reverse
                justify-between bg-white border border-gray-50 rounded-xl
                shadow-xs hover:shadow-md transition-all duration-200
              `}
            >
              <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center order-last'>
                <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>
                  {partner.title}
                </h3>
                <p className='text-base text-gray-600 md:text-lg leading-relaxed text-pretty'>
                  {partner.text}
                </p>
                <div className='pt-2'>
                  <LesMerButton
                    Path={partner.link}
                    Text={t('about.partners.cta.label')}
                    Aria={`${t1('about').toLowerCase()} ${partner.title}`} // TODO: Test listening to this aria label!
                    // TODO: Make it clear that link goes to an external site.
                  />
                </div>
              </div>
              <a
                href={partner.link}
                className={`
                  relative flex items-center justify-center w-full h-48 xl:w-1/2
                  rounded-lg overflow-hidden order-first
                `}
              >
                <Image
                  src={partner.image}
                  alt={`Picture of ${partner.title}s logo`}
                  width={300}
                  height={150}
                  className='object-contain max-h-full max-w-full'
                />
              </a>
            </li>
          ))}
        </ul>

      </section>
      <CooperationSection />
      <LocationCarousel />
    </main>
  );
}

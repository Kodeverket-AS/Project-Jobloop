import Image from 'next/image';
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
import { getTranslations } from 'next-intl/server';

export default async function OmOss() {
  const t = await getTranslations('base');

  const teamData = [
    { name: 'Sina', role: 'Daglig Leder', image: Sina },
    { name: 'Karl Haakon', role: 'Markedsutvikler', image: Karl },
    { name: 'Inger Johanne', role: 'Teamleder', image: Inger },
    { name: 'Beate', role: 'Kursleder', image: Beate },
    { name: 'Oda Kristin', role: 'Kursleder', image: Oda },
    { name: 'Kim', role: 'Kursleder', image: Kim },
  ];

  const partners = [
    {
      image: '/fontenelogo 1.png',
      title: t('about.partners.fontenehuset.title'),
      text: t('about.partners.fontenehuset.text'),
      link: 'https://www.fontenehuset.no',
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

  return (
    <main className='flex flex-col items-center justify-between min-h-screen mt-10 space-y-16 mb-12'>
      <section className='container flex flex-col gap-4 '>
        <div className='flex flex-col  gap-6 text-pretty  '>
          <div className='omoss w-full  text-kv-black  mx-auto'>
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
              <h1 className='text-4xl md:text-5xl font-bold lg:pb-12'>
                {t('about.title')}
                <span className='block w-1/2 h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
              </h1>
              <p className='text-base md:text-xl font-bold md:leading-loose xl:leading-loose'>
                {t('about.paragraph-1')}
              </p>
              <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600 '>
                {t('about.paragraph-2')}
              </p>
              <div className='w-full lg:w-2/5 flex flex-col justify-center float-left mr-8 mb-4'>
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
        </div>
      </section>
      <section className=''>
        <div className='container mx-auto px-4'>
          <div className='container relative shadow-lg shadow-jobloop-secondary-green/15 flex flex-col justify-center items-center gap-4 md:gap-6 bg-jobloop-primary-green/5 border border-jobloop-primary-green p-3 sm:p4 md:p-6 rounded-xl md:rounded-xl'>
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
      <section className=' flex flex-col gap-8 team-section'>
        <div className='w-fit mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold text-center'>
            {t('about.employees.title')}
          </h2>
          <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
        </div>
        <div className='container grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-6'>
          {teamData.map((person) => (
            <TeamMember
              key={person.name}
              name={person.name}
              role={person.role}
              image={person.image}
            />
          ))}
        </div>
      </section>
      <section className=''>
        <div className='container mx-auto px-4'>
          <div className='w-fit mx-auto mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-center'>
              {t('about.partners.title')}
            </h2>
            <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
            {partners.map((partner, index) => (
              <div
                key={partner.title + index}
                className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'
              >
                <a
                  href={partner.link}
                  className='w-full h-48 xl:w-1/2 relative overflow-hidden rounded-lg flex items-center justify-center'
                >
                  <Image
                    src={partner.image}
                    alt={`Picture of ${partner.title}s logo`}
                    width={300}
                    height={150}
                    className='object-contain max-h-full max-w-full'
                  />
                </a>
                <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                  <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>
                    {partner.title}
                  </h3>
                  <p className='text-base text-gray-600 md:text-lg leading-relaxed text-pretty'>
                    {partner.text}
                  </p>
                  <div className='pt-2'>
                    <LesMerButton Path={partner.link} Text={t('about.partners.cta.label')} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CooperationSection />
      <LocationCarousel />
    </main>
  );
}

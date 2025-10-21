import { getTranslations } from 'next-intl/server';
import { IntroSectionReverse, PartnerProject } from '@/components/layout-components';
import { CoursesCard } from '@/components/ui/cards/Courses';
import { QuoteCard } from '@/components/ui/cards/Quotes';

// Images
import JobbtilbudBilde from '@public/kodehode_gruppe.webp';
import KodehodeImage from '@public/KodehodeImage.png';
import GrunnleggendeIt from '@public/grunnleggende-it.webp';
import DigitaleTalenter from '@public/digitale-talenter.webp';
import IndividuellAmo from '@public/individuell-amo.webp';
import Loop from '@public/loop.webp';

export default async function WorkCourses() {
  const t = await getTranslations('base');

  const courses = [
    {
      image: GrunnleggendeIt,
      title: t('landing.work.courses.grunnleggendeIT.title'),
      text: t('landing.work.courses.grunnleggendeIT.text'),
      alt: t('landing.work.courses.grunnleggendeIT.alt'),
      path: '/grunnleggende-IT',
    },
    {
      image: DigitaleTalenter,
      title: t('landing.work.courses.digitaleTalenter.title'),
      text: t('landing.work.courses.digitaleTalenter.text'),
      alt: t('landing.work.courses.digitaleTalenter.alt'),
      path: '/digitale-talenter',
    },
    {
      image: IndividuellAmo,
      title: t('landing.work.courses.IndividuellAMO.title'),
      text: t('landing.work.courses.IndividuellAMO.text'),
      alt: t('landing.work.courses.IndividuellAMO.alt'),
      path: '/individuell-AMO',
    },
    {
      image: Loop,
      title: t('landing.work.courses.loop.title'),
      text: t('landing.work.courses.loop.text'),
      alt: t('landing.work.courses.loop.alt'),
      path: '/loop',
    },
  ];

  const quotes = [
    {
      name: t('landing.work.quotes.one.name'),
      company: t('landing.work.quotes.one.company'),
      text: t('landing.work.quotes.one.text'),
    },
    {
      name: t('landing.work.quotes.two.name'),
      company: t('landing.work.quotes.two.company'),
      text: t('landing.work.quotes.two.text'),
    },
    {
      name: t('landing.work.quotes.three.name'),
      company: t('landing.work.quotes.three.company'),
      text: t('landing.work.quotes.three.text'),
    },
  ];

  return (
    <div className='space-y-16'>
      <IntroSectionReverse
        title={t('landing.work.title')}
        text={t('landing.work.text')}
        image={JobbtilbudBilde}
        alt={t('landing.work.image.alt')}
        path='/tilbud'
        isButton={false}
      />
      <PartnerProject
        title={t('landing.work.partner.title')}
        text={t('landing.work.partner.text')}
        image={KodehodeImage}
        alt={t('landing.work.partner.image.alt')}
        path='https://www.kodehode.no'
        btnText='kodehode.no'
        isButton
        btnVariant={'externalLink'}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
        {courses.map((card, index) => (
          <CoursesCard key={index} {...card} />
        ))}
      </div>

      {/* Temporary Quotes Solution */}
      <div className='relative flex flex-col gap-8 px-8 pt-8 pb-12 overflow-hidden border-2 rounded-xl bg-jobloop-primary-orange/5 border-jobloop-primary-orange text-kv-black lg:gap-12'>
        <h2 className='pb-2 mx-auto text-center border-b-4 border-jobloop-primary-orange w-fit'>
          {t("landing.work.quotes.title")}
        </h2>
        <div className='flex flex-col gap-8 md:flex-row'>
          {quotes.map((quote, index) => (
            <QuoteCard key={`${quote.name}-${index}`} {...quote} />
          ))}
        </div>
      </div>
    </div>
  );
}

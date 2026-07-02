import { getTranslations } from 'next-intl/server';
import { PartnerProject } from '@/components/layout-components';

// Images
import Kodeloftet from '@public/kodeloftet.webp';
import Gløde from '@public/gløde.webp';
import Teamwork from '@public/Orkla_1.webp';

export default async function CooperationProjects() {
  const t = await getTranslations('landing');
  const t1 = await getTranslations('dictionary');

  const partners = [
    {
      image: Kodeloftet,
      title: t('collaborations.kodeloftet.title'),
      text: t('collaborations.kodeloftet.text'),
      alt: t('collaborations.kodeloftet.alt'),
      path: 'https://www.fontenehusetbergen.no/',
      btnText: 'Fontenehusetbergen.no',
    },
    {
      image: Gløde,
      title: t('collaborations.gloede.title'),
      text: t('collaborations.gloede.text'),
      alt: t('collaborations.gloede.alt'),
      path: 'https://www.gløde.no/',
      btnText: 'Gløde.no',
    },
    {
      image: Teamwork,
      title: t('collaborations.teamwork.title'),
      text: t('collaborations.teamwork.text'),
      alt: t('collaborations.teamwork.alt'),
      path: '/teamwork',
      btnText: t1('readMore'), // TODO: Deal with "Read More" button with no descriptive title.
      btnVariant: 'readMorePill' as const, // TODO: Deal with "Read More" button looking different.
    },
  ];

  return (
    <section
      className='w-full space-y-16 flex flex-col items-center'
      aria-labelledby='collaborations-title'
    >
      <h2
        id='collaborations-title'
        className='pb-2 border-b-4 border-jobloop-primary-green w-fit'
      >
        {t('collaborations.title')}
      </h2>
      {partners.map((partner, index) =>
        <PartnerProject
          key={partner.title + index}
          direction={index % 2 === 0 ? 'normal' : 'reverse'}
          isButton
          {...partner}
        />
      )}
    </section>
  );
}

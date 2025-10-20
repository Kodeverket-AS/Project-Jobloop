import { getTranslations } from 'next-intl/server';
import { PartnerProject, PartnerProjectReverse } from '@/components/layout-components';

// Images
import Kodeloftet from '@public/kodeloftet.webp';
import Gløde from '@public/gløde.webp';
import Teamwork from '@public/Orkla_1.webp';

export default async function CooperationProjects() {
  const t = await getTranslations('base');
  const partners = [
    {
      image: Kodeloftet,
      title: t('landing.collaborations.kodeloftet.title'),
      text: t('landing.collaborations.kodeloftet.text'),
      alt: t('landing.collaborations.kodeloftet.alt'),
      path: 'https://www.fontenehusetbergen.no/',
      btnText: 'Fontenehusetbergen.no',
    },
    {
      image: Gløde,
      title: t('landing.collaborations.gloede.title'),
      text: t('landing.collaborations.gloede.text'),
      alt: t('landing.collaborations.gloede.alt'),
      path: 'https://www.gløde.no/',
      btnText: 'Gløde.no',
    },
    {
      image: Teamwork,
      title: t('landing.collaborations.teamwork.title'),
      text: t('landing.collaborations.teamwork.text'),
      alt: t('landing.collaborations.teamwork.alt'),
      path: '/teamwork',
    },
  ];
  return (
    <>
      <h2 className='pb-2 border-b-4 border-jobloop-primary-green w-fit'>Samarbeidsprosjekter</h2>
      {partners.map((partner, index) =>
        index % 2 === 0 ? (
          <PartnerProject
            key={partner.title + index}
            isButton
            btnVariant={partner.path ? 'externalLink' : 'internalLink'}
            {...partner}
          />
        ) : (
          <PartnerProjectReverse
            key={partner.title + index}
            isButton
            btnVariant={partner.path ? 'externalLink' : 'internalLink'}
            {...partner}
          />
        )
      )}
    </>
  );
}

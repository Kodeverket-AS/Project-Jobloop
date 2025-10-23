import FSEVinnerPhoto from '@public/FSE-Vinner2024-063.webp';
import { IntroSection } from '@/components/layout-components';
import { getTranslations } from 'next-intl/server';

export default async function LandingIntro() {
  const t = await getTranslations('landing');

  return (
    <IntroSection
      alt='Jobloop photo'
      ifImageLink
      image={FSEVinnerPhoto}
      imageLinkPath='https://www.linkedin.com/posts/sina-erichsen-28403998_jobloop-finalist-activity-7148672163053580289-81Yo/?originalSubdomain=no'
      isButton
      path='/om-oss'
      title={t('intro.title')}
      text={t('intro.text')}
    />
  );
}

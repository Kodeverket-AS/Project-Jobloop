import { getTranslations } from 'next-intl/server';
import { IntroSection } from '@/components/layout-components';
import { LandingCoursesCard } from '@/components/ui/cards/LandingCourses';

// Images
import Læringstilbud from '@public/læringstilbud.webp';
import Learnwell from '@public/learnwell.webp';
import Gamify from '@public/gamify2.webp';
import Spillbasert from '@public/spillbasert.webp';
import Loop from '@public/loop.webp';
import Ki from '@public/ki.jpg';
import Gjensidige from '@public/gjensidige.jpg';

export default async function SchoolCourses() {
  const t = await getTranslations('landing');

  const courses = [
    {
      title: t('school.courses.learnWell.title'),
      text: t('school.courses.learnWell.text'),
      image: Learnwell,
      alt: t('school.courses.learnWell.alt'),
      path: '/learnwell',
    },
    {
      title: t('school.courses.gamify.title'),
      text: t('school.courses.gamify.text'),
      image: Gamify,
      alt: t('school.courses.gamify.alt'),
      path: '/gamify',
    },
    {
      title: t('school.courses.spillbasert.title'),
      text: t('school.courses.spillbasert.text'),
      image: Spillbasert,
      alt: t('school.courses.spillbasert.alt'),
      path: '/spillbasert',
    },
    {
      title: t('school.courses.loop.title'),
      text: t('school.courses.loop.text'),
      image: Loop,
      alt: t('school.courses.loop.alt'),
      path: '/loop',
    },
    {
      title: t('school.courses.ki.title'),
      text: t('school.courses.ki.text'),
      image: Ki,
      alt: t('school.courses.ki.alt'),
      path: '/ki-kurs',
      isNew: true,
    },
    {
      title: t('school.courses.gjensidige.title'),
      text: t('school.courses.gjensidige.text'),
      image: Gjensidige,
      alt: t('school.courses.gjensidige.alt'),
      path: '/gjensidige',
      isNew: true,
    },
  ];

  // TODO: Make sure that using a list is the correct solution here.
  return (
    <article
      id='courses'
      className=' courses w-full max-w-[1536px] mx-auto space-y-16'
      aria-labelledby='courses-title'
    >
      <IntroSection
        image={Læringstilbud}
        title={t('school.title')}
        text={t('school.text')}
        path='/laringstilbud'
        isButton={false}
        alt={t('school.image.alt')}
        direction='reverse'
      />
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
        {courses.map((card, index) => (
          <LandingCoursesCard
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            path={card.path}
            alt={card.alt}
            context='school'
            isNew={card.isNew ?? false}
          />
        ))}
      </ul>
    </article>
  );
}

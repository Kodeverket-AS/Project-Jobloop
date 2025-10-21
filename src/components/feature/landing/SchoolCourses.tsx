import { getTranslations } from 'next-intl/server';
import { IntroSectionReverse } from '@/components/layout-components';
import { SchoolCoursesCard } from '@/components/ui/cards/SchoolCourses';

// Images
import Læringstilbud from '@public/læringstilbud.webp';
import Learnwell from '@public/learnwell.webp';
import Gamify from '@public/gamify2.webp';
import Spillbasert from '@public/spillbasert.webp';
import Loop from '@public/loop.webp';

export default async function SchoolCourses() {
  const t = await getTranslations('landing');

  const courses = [
    {
      title: t('landing.school.courses.learnWell.title'),
      text: t('landing.school.courses.learnWell.text'),
      image: Learnwell,
      alt: t('landing.school.courses.learnWell.alt'),
      path: '/learnwell',
    },
    {
      title: t('landing.school.courses.gamify.title'),
      text: t('landing.school.courses.gamify.text'),
      image: Gamify,
      alt: t('landing.school.courses.gamify.alt'),
      path: '/gamify',
    },
    {
      title: t('landing.school.courses.spillbasert.title'),
      text: t('landing.school.courses.spillbasert.text'),
      image: Spillbasert,
      alt: t('landing.school.courses.spillbasert.alt'),
      path: '/spillbasert',
    },
    {
      title: t('landing.school.courses.loop.title'),
      text: t('landing.school.courses.loop.text'),
      image: Loop,
      alt: t('landing.school.courses.loop.alt'),
      path: '/loop',
    },
  ];

  return (
    <section id='courses' className=' courses w-full max-w-[1536px] mx-auto'>
      <div className='space-y-16'>
        <IntroSectionReverse
          image={Læringstilbud}
          title={t('landing.school.title')}
          text={t('landing.school.text')}
          path='/laringstilbud'
          isButton={false}
          alt={t('landing.school.image.alt')}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
          {courses.map((card, index) => (
            <SchoolCoursesCard
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
              path={card.path}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

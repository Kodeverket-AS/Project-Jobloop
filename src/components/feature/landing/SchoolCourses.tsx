import { getTranslations } from 'next-intl/server';
import { IntroSectionReverse } from '@/components/layout-components';
import { SchoolCoursesCard } from '@/components/ui/cards/SchoolCourses';

// Images
import Læringstilbud from '@public/læringstilbud.webp';
import Learnwell from '@public/learnwell.webp';
import Gamify from '@public/gamify2.webp';
import Spillbasert from '@public/spillbasert.webp';
import Loop from '@public/loop.webp';
import Ki from '@public/ki.jpg';

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
  ];

  return (
    <section id='courses' className=' courses w-full max-w-[1536px] mx-auto'>
      <div className='space-y-16'>
        <IntroSectionReverse
          image={Læringstilbud}
          title={t('school.title')}
          text={t('school.text')}
          path='/laringstilbud'
          isButton={false}
          alt={t('school.image.alt')}
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
              isNew={card.isNew ?? false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

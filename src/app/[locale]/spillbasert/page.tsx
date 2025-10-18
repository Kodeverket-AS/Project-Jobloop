import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/LeaderSection';

export default async function Spillbasert() {
  const data = await getData();
  const spillbasert = data.tiltak.at(4);

  // todo
  if (!spillbasert) return null;

  return (
    <main className='flex flex-col my-16 items-center gap-16 w-full max-w-[1536px] mx-auto'>
      <HeroSub {...spillbasert} />
      <CourseSummary {...spillbasert} />
      <Curriculum
        title={spillbasert.title}
        curriculum={spillbasert.curriculum}
      />
      <LeaderSection leaders={spillbasert.courseLeaders} />
    </main>
  );
}

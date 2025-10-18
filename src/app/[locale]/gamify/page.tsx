import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/LeaderSection';
import ForSchool from '@/components/ForSchool';

export default async function Gamify() {
  const data = await getData();
  const gamify = data.tiltak.at(1);

  // todo
  if (!gamify) return null;

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...gamify} />
      <CourseSummary {...gamify} />
      <Curriculum title={gamify.title} curriculum={gamify.curriculum} />
      <LeaderSection leaders={gamify.courseLeaders} />
      <ForSchool situation='skole' {...gamify} />
    </main>
  );
}

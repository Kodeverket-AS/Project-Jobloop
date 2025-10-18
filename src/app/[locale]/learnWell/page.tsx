import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import LeaderSection from '@/components/LeaderSection';

export default async function LearnWell() {
  const data = await getData();
  const learnWell = data.tiltak.at(0);

  // todo
  if (!learnWell) return null;

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...learnWell} />
      <CourseSummary {...learnWell} />
      <LeaderSection leaders={learnWell.courseLeaders} />
    </main>
  );
}

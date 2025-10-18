import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/LeaderSection';

export default async function GrunnleggendeIT() {
  const data = await getData();
  const gIT = data.tiltak.at(3);

  // todo litt av noen variabel navn
  if (!gIT) return null;

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...gIT} />
      <CourseSummary {...gIT} />
      <Curriculum title={'Grunnleggende IT'} curriculum={gIT.curriculum} />
      <LeaderSection leaders={gIT.courseLeaders} />
    </main>
  );
}

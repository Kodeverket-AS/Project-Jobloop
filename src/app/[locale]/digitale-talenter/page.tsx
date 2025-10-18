import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';
import CourseSummary from '@/components/CourseSummary';
import Curriculum from '@/components/Curriculum';
import LeaderSection from '@/components/LeaderSection';

export default async function DigitaleTalenter() {
  const data = await getData();
  const digTal = data.tiltak.at(2);

  // todo
  if (!digTal) return null;

  return (
    <main className='flex flex-col items-center gap-12 w-full max-w-[1536px] my-12 mx-auto'>
      <HeroSub {...digTal} />
      <CourseSummary {...digTal} />
      <div className='w-full max-w-4xl px-4'>
        <div className='relative rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-xs aspect-video animate-fade-in ring-1 ring-black/10'>
          <video
            muted
            loop
            playsInline
            controls
            className='w-full h-full object-cover'
          >
            <source src='/videos/Digitale talenter.mp4' type='video/mp4' />
            Nettleseren din støtter ikke videoavspilling.
          </video>
        </div>
      </div>
      <Curriculum title='Digitale Talenter' curriculum={digTal.curriculum} />
      <LeaderSection leaders={digTal.courseLeaders} />
    </main>
  );
}

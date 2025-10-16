import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';

export default async function Loop() {
  const data = await getData();
  const loop = data.tiltak.at(7);

  // todo
  if (!loop) return null;

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...loop} />
    </main>
  );
}

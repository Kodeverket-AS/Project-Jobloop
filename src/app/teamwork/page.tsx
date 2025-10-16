import HeroSub from '@/components/herosub';
import { getData } from '@/lib/GetData';

export default async function Teamwork() {
  const data = await getData();
  const teamwork = data.tiltak.at(6);

  // todo side mangler innhold?
  if (!teamwork) return null;

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] my-16 mx-auto'>
      <HeroSub {...teamwork} />
    </main>
  );
}

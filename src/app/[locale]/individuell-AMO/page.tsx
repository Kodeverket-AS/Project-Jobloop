import { getData } from '@/lib/GetData';
import HeroSub from '@/components/herosub';

export default async function IndividuellAMO() {
  const data = await getData();
  const amo = data.tiltak[5];

  if (!amo) return null;

  return (
    <main className='flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16'>
      <HeroSub {...amo} />
    </main>
  );
}

import Image from 'next/image';
import { ExternalLinkButton } from '@/components/buttons';

// todo: Is this page in use?
export default function Ansettelser() {
  return (
    <main className='flex flex-col items-center gap-16 bg-gray-100 max-w-[1536px] mx-auto my-12 px-4'>
      <div className='relative bg-white p-8 rounded-lg shadow-md'>
        <div className='flex justify-center mb-6'>
          <Image
            src='/hiring.jpg'
            alt='Colorfull image of the text Join Us written with scrabble letters, some candy and hearts'
            width={150}
            height={150}
            className='rounded-full'
          />
        </div>
        <h1 className='text-4xl font-bold mb-4 text-center'>
          Jobloop Ansetter
          <span className='block w-full h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
        </h1>
        <h3 className='text-2xl font-semibold mb-4 text-center'>
          Brenner du for inkludering og praktisk IT-faglig opplæring?
        </h3>
        <p className='text-lg mb-4 text-center'>
          Vi ser stadig etter nye mennesker som vil være en del av vårt team for
          å skape muligheter for fler!
        </p>
        <p className='text-lg mb-4 text-center'>
          For å se stillinger vi har tilgjengelig for øyeblikket:
        </p>
        <p className='text-lg mb-4 text-center'>
          Se våre stillinger på arbeidsplassen.no
        </p>
        <div className='flex justify-center'>
          <ExternalLinkButton
            Path='https://arbeidsplassen.nav.no/stillinger?q=jobloop&v=3'
            Text='Les mer'
            Aria='Les mer'
          />
        </div>
      </div>
    </main>
  );
}

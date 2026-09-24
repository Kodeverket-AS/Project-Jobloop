import Image from 'next/image';
import { ExternalLinkButton } from '@/components/buttons';

// todo: Is this page in use?
// The page is seemingly in use, but no page links to it directly.
// TODO: Translate this page!
export default function Ansettelser() {
  return (
    <main
      id='main'
      className='
        flex flex-col items-center gap-16 bg-gray-100 max-w-[1536px] mx-auto
        my-12 px-4
      '
    >
      <section
        className='relative bg-white p-8 rounded-lg shadow-md flex flex-col'
        aria-labelledby='ansettelser-title'
      >
        <h1
          id='ansettelser-title'
          className='text-4xl font-bold mb-4 text-center order-2'
        >
          Jobloop Ansetter
          <span className='block w-full h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
        </h1>
        <Image
          src='/hiring.jpg'
          alt='Colorful image of the text Join Us written with scrabble letters, some candy and hearts'
          width={150}
          height={150}
          className='flex justify-center mb-6 rounded-full order-first mx-auto'
        />
        <h2 className='text-2xl! font-semibold mb-4 text-center order-3'>
          Brenner du for inkludering og praktisk IT-faglig opplæring?
        </h2>
        <p className='text-lg mb-4 text-center order-4'>
          Vi ser stadig etter nye mennesker som vil være en del av vårt team for
          å skape muligheter for fler!
        </p>
        <p className='text-lg mb-4 text-center order-5'>
          For å se stillinger vi har tilgjengelig for øyeblikket:
        </p>
        <p className='text-lg mb-4 text-center order-6'>
          Se våre stillinger på arbeidsplassen.no
        </p>
        <ExternalLinkButton
          Path='https://arbeidsplassen.nav.no/stillinger?q=jobloop&v=3'
          Text='Finn stillinger'
          ClassName='mx-auto order-last'
        />
      </section>
    </main>
  );
}

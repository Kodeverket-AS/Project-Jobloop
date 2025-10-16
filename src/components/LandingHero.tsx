'use client';

import Image from 'next/image';
import LandingHeaderPhoto from '../../public/LandingHeaderPhoto.png';
import { LinkButtonAnimatedWithIcon, LinkButtonAnimated } from './buttons';

export default function LandingHero() {
  return (
    <>
      <div className='w-full h-[45vh]  lg:-[50vh] 2xl:h-[60vh] min-h-[500px]  lg:min-h-[700px] relative mb-16'>
        <div className='absolute top-0 left-0 w-full h-full -z-50'>
          <div className='absolute bg-linear-to-b from-[rgba(34,34,34,0.7)] to-[rgba(34,34,34,0.6)] z-50 h-full w-full' />
          <Image
            alt={'people talking'}
            src={LandingHeaderPhoto}
            className='object-cover object-bottom w-full h-full'
            fill
          />
        </div>

        <div className='w-full h-full bg-neutral-800/20 backdrop-blur-xs mx-auto justify-center flex flex-col gap-6 md:gap-8 lg:gap-10 items-center px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 xl:py-40 relative z-10'>
          <div className='text-center max-w-4xl'>
            <h1 className='mb-6 md:mb-8 text-2xl xs:text-3xl  md:text-5xl lg:text-6xl xl:text-7xl text-kv-white leading-tight'>
              Nye veier til utvikling, utdanning og jobb!
            </h1>
            <p className='font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-kv-white leading-relaxed'>
              Vi hjelper deg med inkluderende arbeidsmuligheter og alternativ
              opplæring. Sammen kan vi skape muligheter for fler!
            </p>
          </div>
          <div className='w-full flex flex-col gap-4 sm:flex-row justify-center'>
            <LinkButtonAnimatedWithIcon
              Path={'/kontakt'}
              Text={'Kontakt Oss'}
            />
            <LinkButtonAnimated Path={'#courses'} Text={'Våre tilbud'} />
          </div>
        </div>
      </div>
    </>
  );
}

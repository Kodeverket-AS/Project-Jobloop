import Image from 'next/image';
import { IoInformationCircle, IoSnow } from 'react-icons/io5';
import { LinkButtonAnimatedWithIcon } from '@/components/buttons';

export default function Julekalender() {
  return (
    <main
      className='
        relative overflow-hidden
        flex flex-col items-center justify-between min-h-screen
        mt-10 mb-12 px-4 space-y-16
        bg-gradient-to-b from-sky-50 via-white to-red-50 pt-10
      '
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/snow-texture.png')] bg-repeat opacity-20 z-0" />

      <div className='pointer-events-none absolute inset-0 overflow-hidden z-10'>
        <div className='animate-snowfall absolute top-0 left-1/4 text-white opacity-40 text-4xl'>
          ❅
        </div>
        <div className='animate-snowfall-slow absolute top-0 left-2/3 text-white opacity-40 text-5xl'>
          ❆
        </div>
        <div className='animate-snowfall absolute top-0 left-1/2 text-white opacity-30 text-3xl'>
          ❄
        </div>
      </div>

      <div className='relative z-20 w-full flex flex-col items-center space-y-16'>
        <section className='container flex flex-col gap-6'>
          <div
            className='
              relative w-full mx-auto text-kv-black
              bg-white/80 rounded-2xl shadow-lg shadow-sky-100
              border border-red-100
              p-6 md:p-10
              overflow-hidden
            '
          >
            <div className='pointer-events-none absolute -left-4 top-4 opacity-20'>
              <IoSnow className='text-4xl text-sky-400' />
            </div>
            <div className='pointer-events-none absolute -right-4 bottom-6 opacity-10'>
              <IoSnow className='text-6xl text-jobloop-primary-green' />
            </div>

            <div className='w-full space-y-8'>
              <div className='w-full lg:w-2/5 overflow-hidden rounded-xl float-right ml-4 mb-4 border border-red-100 shadow-md shadow-red-100/60'>
                <Image
                  src='/jkplaceholder.png'
                  alt='Illustrasjon av en julekalender i vinterlig snølandskap'
                  width={500}
                  height={375}
                  className='w-full h-56 lg:h-80 object-cover'
                />
              </div>

              <div className='inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs md:text-sm font-medium text-red-700 mb-2'>
                <span className='text-base'>🎁</span>
                <span>Julekalenderen 2025 – under oppbygging</span>
              </div>

              <h1 className='text-4xl md:text-5xl font-bold'>
                Julekalender
                <span className='block w-1/2 h-1 bg-gradient-to-r from-jobloop-primary-green to-jobloop-primary-orange mt-2 mb-6 rounded-full' />
              </h1>

              <p className='text-base md:text-xl font-bold md:leading-loose xl:leading-loose'>
                Vi jobber med å ferdigstille årets julekalender – full av små drypp med motivasjon,
                læring og desembermagi.
              </p>

              <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-700'>
                Her vil du snart kunne åpne nye luker hver dag i desember. Bak lukene skjuler det
                seg tips, oppgaver, inspirasjon og små overraskelser for deg som er nysgjerrig på
                IT, koding og veien videre. Ta deg en kopp kakao, så fikser vi resten. ❄️
              </p>
            </div>
          </div>

          <div className='w-full overflow-hidden -mb-1'>
            <svg
              viewBox='0 0 1440 120'
              className='w-full h-20 text-white'
              preserveAspectRatio='none'
            >
              <path
                fill='currentColor'
                d='M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,53.3C672,64,768,96,864,96C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
              />
            </svg>
          </div>
        </section>

        <section className='w-full'>
          <div className='container mx-auto px-4'>
            <div
              className='
                relative flex flex-col justify-center items-center gap-4 md:gap-6
                bg-jobloop-primary-green/5
                border border-jobloop-primary-green/40
                rounded-2xl
                p-4 md:p-6
                shadow-lg shadow-jobloop-secondary-green/20
              '
            >
              <IoInformationCircle className='absolute bottom-2 right-2 text-5xl text-jobloop-primary-green/15' />

              <p className='text-lg md:text-xl xl:text-2xl md:leading-loose text-center text-pretty'>
                Julekalenderen kommer snart 🎄✨
              </p>

              <p className='text-base md:text-lg text-neutral-700 text-center max-w-2xl'>
                Vi fyller lukene med innhold i løpet av november. Når alt er klart, vil du kunne
                klikke deg inn hver dag i desember og hente små porsjoner faglig påfyll – pakket inn
                i god julestemning.
              </p>

              <div className='flex items-center gap-2 text-sm text-neutral-600'>
                <IoSnow className='text-sky-400' />
                <span>
                  Tips: Legg /julekalender i bokmerkene dine, så finner du den fort igjen.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full'>
          <div className='container mx-auto px-4 pb-10'>
            <div
              className='
                flex flex-col items-center gap-4
                bg-white/80 border border-red-100 rounded-2xl
                p-4 md:p-6 shadow-md shadow-red-100/60
              '
            >
              <p className='text-base md:text-lg text-neutral-700 text-center'>
                Mens du venter på at vi skal pakke inn de siste lukene, kan du utforske resten av
                siden vår.
              </p>

              <LinkButtonAnimatedWithIcon Path='/' Text='Gå til forsiden' />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

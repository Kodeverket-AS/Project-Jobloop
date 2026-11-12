'use client';

import { useEffect, useRef } from 'react';
import {
  LuCode,
  LuDownload,
  LuGamepad2,
  LuHeadset,
  LuMonitor,
  LuPalette,
} from 'react-icons/lu';
import { individuellAmoPrograms } from './programs';

const icons = {
  kodehode: LuCode,
  'grunnleggende-it': LuMonitor,
  'skreddersydd-privatistlop': LuGamepad2,
  'digitale-talenter': LuPalette,
  'oppfolging-og-karriereveiledning': LuHeadset,
} as const;

export default function ProgramsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.card-slide-in');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className='w-full flex flex-col gap-8'>
      <div className='text-center max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold'>Våre fem individuelle løp</h2>
        <p className='text-lg text-neutral-600 mt-3'>
          Velg tilbudet som passer deg best, eller ta kontakt så finner vi det sammen.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6' ref={cardsRef}>
        {individuellAmoPrograms.map((program) => {
          const Icon = icons[program.slug as keyof typeof icons];
          return (
            <div
              key={program.slug}
              className='card-slide-in bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-jobloop-primary-green/20 hover:shadow-xl transition-all duration-300 flex flex-col gap-4'
            >
              <div className='flex items-center gap-4'>
                <div className='flex-none w-14 h-14 rounded-full bg-jobloop-primary-green/20 flex items-center justify-center'>
                  <Icon className='text-2xl text-jobloop-secondary-green' />
                </div>
                <h3 className='text-xl font-bold'>{program.undertittel}</h3>
              </div>

              <p className='text-neutral-600'>{program.intro}</p>

              <div className='grid sm:grid-cols-2 gap-4 text-sm'>
                <div className='bg-gray-50 rounded-xl p-4 border-l-4 border-jobloop-primary-orange'>
                  <p className='font-bold mb-1'>Målgruppe</p>
                  <p className='text-neutral-600'>{program.malgruppe}</p>
                </div>
                <div className='bg-gray-50 rounded-xl p-4 border-l-4 border-jobloop-primary-green'>
                  <p className='font-bold mb-1'>Varighet</p>
                  <p className='text-neutral-600'>{program.varighet}</p>
                </div>
                <div className='bg-gray-50 rounded-xl p-4 border-l-4 border-jobloop-primary-orange'>
                  <p className='font-bold mb-1'>Fokusområder</p>
                  <p className='text-neutral-600'>{program.fokus}</p>
                </div>
                <div className='bg-gray-50 rounded-xl p-4 border-l-4 border-jobloop-primary-green'>
                  <p className='font-bold mb-1'>Mål</p>
                  <p className='text-neutral-600'>{program.mal}</p>
                </div>
              </div>

              <a
                href={program.pdfHref}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Last ned produktark for ${program.tittel}`}
                className='mt-auto w-full min-h-[4.5rem] flex items-center justify-center text-center gap-2 px-6 py-2.5 tracking-normal text-white bg-jobloop-primary-green rounded-full hover:bg-jobloop-primary-orange transition-all duration-300 hover:scale-105 shadow-md shadow-kv-black/10'
              >
                <LuDownload className='text-lg' />
                Last ned produktark – {program.tittel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

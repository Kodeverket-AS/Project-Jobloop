import Image from 'next/image';

import { IoInformationCircle } from 'react-icons/io5';
import TeamSection from '@/components/feature/jobloop-sverige/TeamSection';

export default async function JobloopSverige() {
  return (
    <div className='min-h-screen bg-kv-white'>
      <main className='max-w-[1536px] px-4 py-16 flex flex-col items-center gap-20 w-full mx-auto'>
        <div className='w-full text-center space-y-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-kv-black mb-4'>
            Gamify och Spelbaserad kvalificering
          </h1>
          <p className='text-xl md:text-2xl text-jobloop-primary-grey font-semibold'>
            Nya digitala lärmiljöer för grundskola och IM/gymnasium
          </p>
          <div className='block  h-1 bg-jobloop-primary-green mt-4 mb-8 mx-auto'></div>
        </div>

        <section className='w-full relative overflow-hidden rounded-3xl shadow-2xl group'>
          <div className='absolute inset-0 bg-jobloop-primary-green/10 z-10'></div>
          <div className='relative z-20 p-8 md:p-16'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='w-full order-2 md:order-1'>
                <Image
                  src='/jp-svergie.jpg'
                  alt='Jobloop Sverige elever i lärmiljö'
                  width={800}
                  height={600}
                  className='w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500'
                />
              </div>
              <div className='space-y-6 order-1 md:order-2'>
                <p className='text-xl md:text-2xl font-bold leading-relaxed text-kv-black'>
                  JobLoop lanserar två kompletterande lärmiljöer för skolor och kommuner i Sverige:
                  Gamify och Spelbaserad kvalificering.
                </p>
                <p className='text-lg md:text-xl leading-relaxed text-neutral-700'>
                  Båda lösningarna är utformade för elever som har svårt att tillgodogöra sig
                  traditionell undervisning. Genom aktivitet och interaktion skapas nya vägar till
                  lärande som stärker elevens känsla av att lyckas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full'>
          <div className='bg-white rounded-3xl shadow-xl border-4 border-jobloop-primary-green p-8 md:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-300'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <h2 className='text-4xl md:text-5xl font-bold text-jobloop-primary-green mb-4'>
                  Gamify
                </h2>
                <div className='w-24 h-1 bg-jobloop-primary-green mb-6'></div>
                <p className='text-lg md:text-xl leading-relaxed text-neutral-700'>
                  Gamify är en trygg, digital lärmiljö för elever i grundskolan och gymnasiet. Här
                  deltar eleverna i spelbaserade uppgifter i små grupper som leds av spelpedagoger,
                  vilka arbetar integrerat med skolans ordinarie team.
                </p>
                <p className='text-lg md:text-xl leading-relaxed text-neutral-700'>
                  Genom samarbete, kommunikation och problemlösning tränar eleverna både sociala och
                  akademiska färdigheter.
                </p>
                <div className='relative mt-8 p-6 bg-jobloop-primary-green/5 border-l-4 border-jobloop-primary-green rounded-r-xl'>
                  <IoInformationCircle className='absolute top-4 right-4 text-4xl text-jobloop-primary-green/20' />
                  <p className='text-base md:text-lg leading-relaxed text-neutral-700 pr-8'>
                    Gamify används idag som en alternativ insats för elever med ofrivillig
                    skolfrånvaro, ångest, vantrivsel eller behov av anpassning. Metoden har visat
                    sig särskilt effektiv när målet är att skapa trygghet, motivation och en känsla
                    av tillhörighet.
                  </p>
                </div>
              </div>
              <div className='w-full'>
                <Image
                  src='/jp-svergie2.jpg'
                  alt='Gamify digital lärmiljö'
                  width={800}
                  height={600}
                  className='w-full h-[400px] md:h-[550px] object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='w-full'>
          <div className='bg-white rounded-3xl shadow-xl border-4 border-jobloop-primary-orange p-8 md:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-300'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='w-full order-2 md:order-1'>
                <Image
                  src='/jp-sverige3.jpg'
                  alt='Spelbaserad kvalificering'
                  width={800}
                  height={600}
                  className='w-full h-[400px] md:h-[550px] object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500'
                />
              </div>
              <div className='space-y-6 order-1 md:order-2'>
                <h2 className='text-4xl md:text-5xl font-bold text-jobloop-primary-orange mb-4'>
                  Spelbaserad kvalificering
                </h2>
                <div className='w-24 h-1 bg-jobloop-primary-orange mb-6'></div>
                <p className='text-lg md:text-xl leading-relaxed text-neutral-700'>
                  Spelbaserad kvalificering bygger på samma principer, men är flexibelt utformad för
                  att fungera både i grundskolan och på gymnasiet. Lösningen kopplar spel, projekt
                  och aktiviteter till relevanta mål i läroplanen.
                </p>
                <p className='text-lg md:text-xl leading-relaxed text-neutral-700'>
                  Det ger eleverna möjlighet att lära genom praktisk handling snarare än via
                  traditionell undervisning.
                </p>
                <div className='relative mt-8 p-6 bg-jobloop-primary-orange/5 border-l-4 border-jobloop-primary-orange rounded-r-xl'>
                  <IoInformationCircle className='absolute top-4 right-4 text-4xl text-jobloop-primary-orange/20' />
                  <p className='text-base md:text-lg leading-relaxed text-neutral-700 pr-8'>
                    För de yngre eleverna används modellen för att skapa lärandeglädje, social
                    träning och en första orientering mot arbetslivet. För äldre elever fungerar det
                    som en väg vidare mot studier, praktik eller arbete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full'>
          <div className='bg-jobloop-primary-green/10 rounded-3xl shadow-2xl p-12 md:p-16'>
            <div className='max-w-5xl mx-auto space-y-8'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-kv-black mb-8'>
                Gemensamma mål och fördelar
              </h2>
              <p className='text-xl md:text-2xl leading-relaxed text-center text-neutral-700 font-medium'>
                Båda lösningarna syftar till att förebygga ofrivillig skolfrånvaro, utanförskap och
                avhopp, samt erbjuda en väg tillbaka för elever som hamnat snett.
              </p>
              <p className='text-lg md:text-xl leading-relaxed text-center text-neutral-600'>
                Gamify och Spelbaserad kvalificering ger lärare och skolor fler verktyg för anpassad
                undervisning och skapar mer inkluderande lärmiljöer. Skolor och kommuner väljer
                dessa lösningar eftersom de ökar närvaron, bygger upp elevernas självkänsla och
                stärker deras möjligheter att lyckas – både i och utanför skolan.
              </p>
            </div>
          </div>
        </section>

        <TeamSection />

        <section className='w-full mx-auto text-center pt-8'>
          <div className='bg-jobloop-primary-green rounded-3xl p-12 md:p-16 shadow-2xl'>
            <div className='space-y-8'>
              <h2 className='text-4xl md:text-5xl font-bold text-kv-white mb-4'>
                Redo att komma igång?
              </h2>
              <p className='text-xl md:text-2xl text-kv-white/95 mb-8 max-w-3xl mx-auto leading-relaxed'>
                Kontakta oss för att lära dig mer om Gamify och Spelbaserad kvalificering och hur de
                kan hjälpa dina elever att lyckas.
              </p>
              <div className='flex justify-center items-center pt-4'>
                <a
                  href='mailto:oddbjørn@jobloop.no'
                  className='bg-white text-jobloop-primary-green px-10 py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-jobloop-primary-orange hover:text-kv-white hover:border-jobloop-primary-orange border-2 border-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl'
                >
                  Skicka e-post
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

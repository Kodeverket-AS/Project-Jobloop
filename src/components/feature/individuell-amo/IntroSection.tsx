import { LuCalendarClock, LuTarget, LuUsers } from 'react-icons/lu';

export default function IntroSection() {
  return (
    <section className='w-full flex flex-col gap-10'>
      <div className='text-center max-w-5xl mx-auto flex flex-col gap-6'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          Individuell AMO
          <span className='block w-1/2 h-1 bg-jobloop-primary-green mt-4 mb-2 mx-auto'></span>
        </h1>
        <p className='text-lg md:text-xl text-neutral-600 leading-relaxed text-left'>
          Individuell AMO er JobLoops skreddersydde arbeidsmarkedsopplæring i samarbeid med NAV.
          Vi tar utgangspunkt i dine styrker og behov, og setter sammen et løp med innhold, tempo
          og mål som passer akkurat deg — med tett individuell oppfølging hele veien og en klar
          retning mot arbeid eller utdanning.
        </p>
      </div>

      <div className='grid sm:grid-cols-3 gap-6 w-full'>
        <div className='flex items-start gap-4 bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green'>
          <LuTarget className='text-3xl text-jobloop-primary-green flex-none' />
          <div>
            <h2 className='font-bold text-lg mb-1'>Individuelt tilpasset</h2>
            <p className='text-neutral-600'>
              Innhold, tempo og læringsmål tilpasses deg og dine forutsetninger.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange'>
          <LuCalendarClock className='text-3xl text-jobloop-primary-orange flex-none' />
          <div>
            <h2 className='font-bold text-lg mb-1'>Tett oppfølging</h2>
            <p className='text-neutral-600'>
              Normalt 3–6 timer i uken, og kan utvides mot en tilnærmet full arbeidsuke.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green'>
          <LuUsers className='text-3xl text-jobloop-primary-green flex-none' />
          <div>
            <h2 className='font-bold text-lg mb-1'>I samarbeid med NAV</h2>
            <p className='text-neutral-600'>
              Rammene for løpet avtales mellom deg, NAV og JobLoop, og kan kombineres med andre
              aktiviteter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

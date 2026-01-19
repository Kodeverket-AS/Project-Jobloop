import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ansattportal: Gjensidige Pilot',
    description: 'Alt du som veileder trenger å vite om prosjektet',
  };
}

export default function AnsattPortal() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-[#2C8C7D] text-white py-8 px-6 text-center border-b-5 border-[#002B49]'>
        <h1 className='text-3xl font-bold mb-2'>Internressurs: Gjensidige Pilot</h1>
        <p className='text-lg opacity-90'>Alt du som veileder trenger å vite om prosjektet.</p>
      </header>

      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='bg-[#fff3cd] border border-[#ffeeba] p-6 rounded-lg mb-8 flex items-center gap-5'>
          <div className='text-4xl'>👉</div>
          <div className='flex-1'>
            <strong className='text-lg block mb-2'>Første steg: Registrer din kompetanse!</strong>
            <p className='text-[#856404]'>
              For at Kim skal kunne matche deg med riktig ungdom, må du oppdatere profilen din i Proplan under fanen "Gjensidige".
            </p>
          </div>
          <a
            href='#'
            className='bg-[#002B49] text-white px-5 py-2 rounded whitespace-nowrap font-bold hover:opacity-90 transition'
          >
            Gå til Proplan
          </a>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
            Kort om oppdraget
          </h2>
          <p className='mb-4'>
            Vi samarbeider med Gjensidige for å forebygge ungt utenforskap. Deltakerne er forsikringskunder (13–26 år) som har lettere psykiske plager eller står i fare for å falle ut av skole/jobb.
          </p>
          <p>
            <strong>Din rolle:</strong> Du skal bruke din kompetanse (gaming, tech, relasjon) til å bygge trygghet. Målet er ikke nødvendigvis at de skal bli proffe utviklere, men at de skal få mestring, sosial trening og motivasjon til veien videre.
          </p>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
            De 3 sporene våre
          </h2>
          <p className='mb-6'>Vi jobber etter tre ulike modeller. Sjekk hvilken din deltaker tilhører:</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gray-50 p-5 rounded-lg border-t-4 border-[#4AB5A3]'>
              <h3 className='text-lg font-semibold text-[#002B49] mb-3'>1. Stå i skolen (13–16 år)</h3>
              <p className='mb-2'><strong>Fokus:</strong> Motivasjon & Nærvær.</p>
              <p className='text-sm'>
                Eleven er her 1-2 dager i uken. Vi skal være et "pusterom" som gir energi til å klare resten av uken på skolen. Tett dialog med kontaktlærer er nøkkelen.
              </p>
            </div>

            <div className='bg-gray-50 p-5 rounded-lg border-t-4 border-[#4AB5A3]'>
              <h3 className='text-lg font-semibold text-[#002B49] mb-3'>2. Fullføre VGS (16–26 år)</h3>
              <p className='mb-2'><strong>Fokus:</strong> Faglig mestring.</p>
              <p className='text-sm'>
                Alternativ læringsarena. Her hjelper vi dem med studieteknikk, leksehjelp eller privatist-lesing. Vi fjerner klasseroms-støyen og fokuserer på målet.
              </p>
            </div>

            <div className='bg-gray-50 p-5 rounded-lg border-t-4 border-[#4AB5A3]'>
              <h3 className='text-lg font-semibold text-[#002B49] mb-3'>3. Jobb & IT (16–26 år)</h3>
              <p className='mb-2'><strong>Fokus:</strong> Praktisk kompetanse.</p>
              <p className='text-sm'>
                For de som er ferdige med skole (eller har droppet ut) og vil i jobb. Koding, design, drift. Målsetting er praksisplass eller lærlingplass.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
            🚨 Rapportering og "Flagg-systemet"
          </h2>
          <p className='mb-6'>
            Gjensidige krever tett oppfølging. Vi bruker et trafikklys-system for å fange opp problemer tidlig.
          </p>

          <ul className='space-y-6 list-none pl-0'>
            <li className='relative pl-14'>
              <div className='absolute left-0 top-0 w-9 h-9 bg-[#4AB5A3] text-white rounded-full flex items-center justify-center font-bold'>
                1
              </div>
              <div>
                <strong className='block mb-2'>Grønt lys (Normal):</strong>
                Alt går som planlagt. Du fører oppmøte og kort status i loggen som vanlig. Kim sender månedsrapport.
              </div>
            </li>

            <li className='relative pl-14'>
              <div className='absolute left-0 top-0 w-9 h-9 bg-[#4AB5A3] text-white rounded-full flex items-center justify-center font-bold'>
                2
              </div>
              <div>
                <strong className='block mb-2'>Gult Flagg (Obs!):</strong>
                <em className='block mb-1'>Kriterier:</em> Fravær over 30% siste to uker, eller synkende trivsel/motivasjon.
                <br />
                <em className='block mt-2 mb-1'>Din jobb:</em> Meld fra til Prosjektleder (Kim) umiddelbart. Vi setter inn "Tidlig innsats" (f.eks. justert plan, mer 1-1 tid).
              </div>
            </li>

            <li className='relative pl-14'>
              <div className='absolute left-0 top-0 w-9 h-9 bg-[#4AB5A3] text-white rounded-full flex items-center justify-center font-bold'>
                3
              </div>
              <div>
                <strong className='block mb-2'>Rødt Flagg (Fare):</strong>
                <em className='block mb-1'>Kriterier:</em> Fravær over 50%, total tilbaketrekning, eller ingen kontakt.
                <br />
                <em className='block mt-2 mb-1'>Din jobb:</em> Varsle Kim *samme dag*. Vi må kalle inn til hastemøte med ungdom/foreldre/Gjensidige for å vurdere veien videre.
              </div>
            </li>
          </ul>
        </div>

        <div className='bg-[#e0f2f1] p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
            Nyttige lenker
          </h2>
          <p className='mb-4'>Vil du se hva kunden har fått av info?</p>
          <ul className='space-y-2'>
            <li>
              <Link href='/gjensidige-pilot/pilot' className='text-[#002B49] hover:underline'>
                Se landingssiden kunden har fått
              </Link>
            </li>
            <li>
              <Link href='/gjensidige-pilot/forberedelse' className='text-[#002B49] hover:underline'>
                Se sjekklisten ungdommen fyller ut før start
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <footer className='text-center text-gray-500 py-10'>
        <p>Spørsmål? Ta kontakt med Kim på Slack eller tlf.</p>
      </footer>

      <div className='max-w-4xl mx-auto px-4 pb-8'>
        <Link
          href='/gjensidige-pilot'
          className='inline-block mt-6 text-[#4AB5A3] hover:text-[#002B49] transition-colors'
        >
          ← Tilbake til verktøykassen
        </Link>
      </div>
    </main>
  );
}

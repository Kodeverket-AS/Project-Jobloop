import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kartleggingsguide: Første møte',
    description: 'Mal for det første møtet med ungdommen',
  };
}

export default function Kartlegging() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-[#2C8C7D] text-white py-8 px-6 text-center border-b-5 border-[#002B49]'>
        <h1 className='text-3xl font-bold mb-2'>Kartleggingsguide</h1>
        <p className='opacity-90'>Mal for det første møtet med ungdommen (og evt. foreldre)</p>
      </header>

      <div className='max-w-3xl mx-auto px-4 py-8'>
        <div className='bg-[#fff3cd] border border-[#ffeeba] text-[#856404] p-6 rounded-lg mb-8 flex items-center gap-4'>
          <span className='text-4xl'>💡</span>
          <div>
            <strong className='text-lg block mb-2'>Huskeregel:</strong> Ikke vær en saksbehandler. Vær en nysgjerrig nerd. <br />
            Målet med dette møtet er 80% relasjon og 20% planlegging.
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md mb-6 relative border-l-5 border-[#4AB5A3]'>
          <div className='absolute -top-4 left-6 bg-[#4AB5A3] text-white px-4 py-1 rounded-full text-sm font-bold'>
            Steg 1: Isbryteren (Gaming/Interesse)
          </div>
          <h2 className='text-xl font-semibold text-[#002B49] mt-4 mb-4'>Start med det som er gøy</h2>
          <p className='mb-4'>Ikke spør "hvordan har du det?" med en gang. Gå rett på interessen de oppga i skjemaet sitt.</p>
          <ul className='space-y-3 list-none pl-0'>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Jeg så du krysset av for [Spill/Interesse]. Hva er det som fenger mest med det?"
            </li>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Spiller du mest for å vinne (rank), eller for å henge med folk (social)?"
              <span className='block text-sm text-gray-600 mt-1'>
                Dette forteller oss om vi skal fokusere på faglig mestring eller sosial trygghet.
              </span>
            </li>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Hva slags setup har du hjemme? Bygd selv?"
            </li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md mb-6 relative border-l-5 border-[#4AB5A3]'>
          <div className='absolute -top-4 left-6 bg-[#4AB5A3] text-white px-4 py-1 rounded-full text-sm font-bold'>
            Steg 2: Status uten filter
          </div>
          <h2 className='text-xl font-semibold text-[#002B49] mt-4 mb-4'>Hvordan ser hverdagen egentlig ut?</h2>
          <p className='mb-4'>Prøv å normalisere at ting er vanskelig. Vi dømmer ikke.</p>
          <ul className='space-y-3 list-none pl-0'>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Hvis vi ser bort fra gamingen – hvordan ser en vanlig tirsdag ut for deg?"
              <span className='block text-sm text-gray-600 mt-1'>
                Sover de hele dagen? Er de på skolen litt?
              </span>
            </li>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Når var sist du følte at skole eller jobb faktisk ga deg noe positivt?"
            </li>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Er det noe som stresser deg spesielt mye akkurat nå? (Folk, krav, fremtid?)"
            </li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md mb-6 relative border-l-5 border-[#4AB5A3]'>
          <div className='absolute -top-4 left-6 bg-[#4AB5A3] text-white px-4 py-1 rounded-full text-sm font-bold'>
            Steg 3: Hva trenger de fra oss?
          </div>
          <h2 className='text-xl font-semibold text-[#002B49] mt-4 mb-4'>Match med riktig spor</h2>
          <p className='mb-4'>Her må vi finne ut om de passer inn i piloten, og hvilket spor vi skal velge.</p>
          <ul className='space-y-3 list-none pl-0'>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Hvis du kunne velge fritt: Ville du helst lært koding/IT for å få jobb, eller trenger du bare et sted å være for å få ro til å gjøre ferdig VGS?"
            </li>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Hvordan lærer du best? Alene med en veileder, eller i en liten gruppe?"
            </li>
            <li className='pl-6 relative before:content-["💬"] before:absolute before:left-0'>
              "Hva skal til for at du faktisk orker å møte opp her hos oss?"
            </li>
          </ul>
        </div>

        <div className='bg-[#002B49] text-white p-8 rounded-lg mt-10'>
          <h3 className='text-xl font-semibold mb-4 text-[#4AB5A3]'>✅ Veilederens Sjekkliste (Etter møtet)</h3>
          <p className='mb-6'>Før du logger saken i Proplan, må du ha svar på dette:</p>

          <div className='space-y-3'>
            <div className='flex items-center gap-3 opacity-90'>
              <div className='w-5 h-5 border-2 border-[#4AB5A3] rounded'></div>
              <span>Er ungdommen i målgruppen? (Ingen tung rus/psykiatri?)</span>
            </div>
            <div className='flex items-center gap-3 opacity-90'>
              <div className='w-5 h-5 border-2 border-[#4AB5A3] rounded'></div>
              <span>Har vi valgt spor? (Skole / VGS / Jobb)</span>
            </div>
            <div className='flex items-center gap-3 opacity-90'>
              <div className='w-5 h-5 border-2 border-[#4AB5A3] rounded'></div>
              <span>Er vi enige om oppmøteplan? (F.eks. Tirsdag og Torsdag kl 10-14)</span>
            </div>
            <div className='flex items-center gap-3 opacity-90'>
              <div className='w-5 h-5 border-2 border-[#4AB5A3] rounded'></div>
              <span>Har vi avklart med foreldre/skole hvem som gjør hva?</span>
            </div>
          </div>

          <p className='mt-6 text-sm italic text-gray-300'>
            Husk: Send en kort oppsummering til Kim (Gult/Grønt flagg) etter første møte.
          </p>
        </div>
      </div>

      <div className='max-w-3xl mx-auto px-4 pb-8'>
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

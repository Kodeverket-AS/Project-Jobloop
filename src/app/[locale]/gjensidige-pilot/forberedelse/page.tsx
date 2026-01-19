import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Før praten vår - JobLoop',
    description: 'Forberedelse før kartleggingssamtalen',
  };
}

export default function Forberedelse() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-white py-5 px-10 flex justify-between items-center border-b-5 border-[#002B49]'>
        <div className='text-2xl font-bold text-[#002B49]'>
          Gjensidige | <span className='text-[#4AB5A3]'>JobLoop</span>
        </div>
        <div>Din forberedelse</div>
      </header>

      <div className='bg-[#002B49] text-white py-12 px-6 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Snart snakkes vi!</h1>
        <p className='text-lg max-w-2xl mx-auto opacity-90'>
          Du trenger ikke å grue deg. Dette er ikke et intervju, men en prat for å bli kjent. Her er en liten huskeliste over ting vi kommer til å snakke om.
        </p>
      </div>

      <div className='max-w-3xl mx-auto px-4 py-10 space-y-6'>
        <div className='bg-white rounded-xl p-8 shadow-lg border-l-8 border-[#4AB5A3]'>
          <h3 className='text-xl font-semibold text-[#002B49] mb-4 flex items-center gap-3'>
            <div className='bg-[#e0f2f1] w-10 h-10 rounded-full flex items-center justify-center text-xl'>
              🏫
            </div>
            Hvor er du nå?
          </h3>
          <p className='text-gray-600 mb-4'>Vi prøver å få et bilde av hvordan hverdagen din ser ut. Tenk litt over:</p>
          <ul className='space-y-3 list-none pl-0'>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Går du på skole nå? (Hvilket trinn / linje?)
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Har du droppet ut, eller har du mye fravær?
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Har du hatt noen jobber eller praksisplasser tidligere?
            </li>
          </ul>
        </div>

        <div className='bg-white rounded-xl p-8 shadow-lg border-l-8 border-[#4AB5A3]'>
          <h3 className='text-xl font-semibold text-[#002B49] mb-4 flex items-center gap-3'>
            <div className='bg-[#e0f2f1] w-10 h-10 rounded-full flex items-center justify-center text-xl'>
              🎮
            </div>
            Hva liker du å drive med?
          </h3>
          <p className='text-gray-600 mb-4'>Vi bruker interessene dine som verktøy. Det er viktig at vi vet hva du faktisk synes er gøy!</p>
          <ul className='space-y-3 list-none pl-0'>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Gamer du? (Hva spiller du?)
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Liker du koding, design, tegning, eller videoredigering?
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Har du andre hobbyer? (Musikk, dyr, trening, matlaging?)
            </li>
          </ul>
        </div>

        <div className='bg-white rounded-xl p-8 shadow-lg border-l-8 border-[#4AB5A3]'>
          <h3 className='text-xl font-semibold text-[#002B49] mb-4 flex items-center gap-3'>
            <div className='bg-[#e0f2f1] w-10 h-10 rounded-full flex items-center justify-center text-xl'>
              🤝
            </div>
            Hvem andre er med på laget?
          </h3>
          <p className='text-gray-600 mb-4'>
            For at vi skal kunne hjelpe deg best mulig, må vi ofte samarbeide med andre systemer.
          </p>
          <ul className='space-y-3 list-none pl-0 mb-4'>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Har du kontakt med OT (Oppfølgingstjenesten)?
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Er du registrert hos NAV?
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Har du kontakt med BUP eller PPT?
            </li>
          </ul>
          <div className='bg-[#fff9c4] border border-[#e6e600] p-5 rounded font-mono text-sm text-gray-700 mt-5'>
            <strong>Tips:</strong> Hvis du har navn eller telefonnummer til en kontaktperson der, er det supert om du finner det frem til samtalen.
          </div>
        </div>

        <div className='bg-white rounded-xl p-8 shadow-lg border-l-8 border-[#4AB5A3]'>
          <h3 className='text-xl font-semibold text-[#002B49] mb-4 flex items-center gap-3'>
            <div className='bg-[#e0f2f1] w-10 h-10 rounded-full flex items-center justify-center text-xl'>
              🚀
            </div>
            Hva drømmer du om?
          </h3>
          <p className='text-gray-600 mb-4'>Dette er kanskje det viktigste. Vi skal jobbe mot DINE mål, ikke alle andres.</p>
          <ul className='space-y-3 list-none pl-0'>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Vil du tilbake på skolebenken og fullføre VGS?
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Vil du lære deg koding og komme ut i jobb?
            </li>
            <li className='pl-6 relative before:content-["✔"] before:absolute before:left-0 before:text-[#4AB5A3] before:font-bold before:text-xl'>
              Eller ønsker du bare å komme deg litt ut av huset og treffe folk?
            </li>
          </ul>
        </div>
      </div>

      <footer className='text-center text-gray-500 py-10'>
        <p>Vi gleder oss til å snakke med deg!</p>
        <p className='mt-2'>Hilsen Kim i JobLoop</p>
      </footer>

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

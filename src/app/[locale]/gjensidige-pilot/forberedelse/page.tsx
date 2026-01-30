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
    <>
      <main className='forberedelse-page min-h-screen'>
      <header>
        <div className='logo'>
          Gjensidige | <span style={{ color: 'var(--jobloop-teal)' }}>JobLoop</span>
        </div>
        <div>Din forberedelse</div>
      </header>

      <div className='hero'>
        <h1>Snart snakkes vi!</h1>
        <p>
          Du trenger ikke å grue deg. Dette er ikke et intervju, men en prat for å bli kjent. Her er en liten huskeliste over ting vi kommer til å snakke om.
        </p>
      </div>

      <div className='container'>
        <div className='prep-card'>
          <h3>
            <div className='icon'>🏫</div>
            Hvor er du nå?
          </h3>
          <p>Vi prøver å få et bilde av hvordan hverdagen din ser ut. Tenk litt over:</p>
          <ul className='check-list'>
            <li>Går du på skole nå? (Hvilket trinn / linje?)</li>
            <li>Har du droppet ut, eller har du mye fravær?</li>
            <li>Har du hatt noen jobber eller praksisplasser tidligere?</li>
          </ul>
        </div>

        <div className='prep-card'>
          <h3>
            <div className='icon'>🎮</div>
            Hva liker du å drive med?
          </h3>
          <p>Vi bruker interessene dine som verktøy. Det er viktig at vi vet hva du faktisk synes er gøy!</p>
          <ul className='check-list'>
            <li>Gamer du? (Hva spiller du?)</li>
            <li>Liker du koding, design, tegning, eller videoredigering?</li>
            <li>Har du andre hobbyer? (Musikk, dyr, trening, matlaging?)</li>
          </ul>
        </div>

        <div className='prep-card'>
          <h3>
            <div className='icon'>🤝</div>
            Hvem andre er med på laget?
          </h3>
          <p>
            For at vi skal kunne hjelpe deg best mulig, må vi ofte samarbeide med andre systemer.
          </p>
          <ul className='check-list'>
            <li>Har du kontakt med OT (Oppfølgingstjenesten)?</li>
            <li>Er du registrert hos NAV?</li>
            <li>Har du kontakt med BUP eller PPT?</li>
          </ul>
          <div className='note-area'>
            <strong>Tips:</strong> Hvis du har navn eller telefonnummer til en kontaktperson der, er det supert om du finner det frem til samtalen.
          </div>
        </div>

        <div className='prep-card'>
          <h3>
            <div className='icon'>🚀</div>
            Hva drømmer du om?
          </h3>
          <p>Dette er kanskje det viktigste. Vi skal jobbe mot DINE mål, ikke alle andres.</p>
          <ul className='check-list'>
            <li>Vil du tilbake på skolebenken og fullføre VGS?</li>
            <li>Vil du lære deg koding og komme ut i jobb?</li>
            <li>Eller ønsker du bare å komme deg litt ut av huset og treffe folk?</li>
          </ul>
        </div>
      </div>

      <footer>
        <p>Vi gleder oss til å snakke med deg!</p>
        <p>Hilsen Kim i JobLoop</p>
      </footer>

      <div className='container'>
        <Link
          href='/gjensidige-pilot'
          className='inline-block mt-6 text-[#4AB5A3] hover:text-[#002B49] transition-colors'
        >
          ← Tilbake til verktøykassen
        </Link>
      </div>
      </main>
    </>
  );
}

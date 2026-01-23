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
      <style>{`
        :root {
          --gjensidige-blue: #002B49;
          --gjensidige-red: #C3002F;
          --jobloop-teal: #4AB5A3;
          --jobloop-light: #e0f2f1;
          --white: #ffffff;
        }
        .forberedelse-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .forberedelse-page header {
          background-color: var(--white);
          padding: 20px 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 5px solid var(--gjensidige-blue);
        }
        .forberedelse-page .logo {
          font-size: 24px;
          font-weight: bold;
          color: var(--gjensidige-blue);
        }
        .forberedelse-page .hero {
          background-color: var(--gjensidige-blue);
          color: var(--white);
          padding: 50px 20px;
          text-align: center;
        }
        .forberedelse-page .hero h1 {
          margin-bottom: 15px;
          font-size: 2.2rem;
        }
        .forberedelse-page .hero p {
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
        }
        .forberedelse-page .container {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .forberedelse-page .prep-card {
          background-color: var(--white);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          margin-bottom: 30px;
          border-left: 8px solid var(--jobloop-teal);
        }
        .forberedelse-page .prep-card h3 {
          color: var(--gjensidige-blue);
          margin-bottom: 20px;
          margin-top: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.4rem;
        }
        .forberedelse-page .prep-card p {
          color: #555;
          margin-bottom: 20px;
        }
        .forberedelse-page .icon {
          background-color: var(--jobloop-light);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        .forberedelse-page .check-list {
          list-style: none;
          padding: 0;
        }
        .forberedelse-page .check-list li {
          position: relative;
          padding-left: 35px;
          margin-bottom: 15px;
          font-size: 1rem;
        }
        .forberedelse-page .check-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: var(--jobloop-teal);
          font-weight: bold;
          font-size: 1.2rem;
        }
        .forberedelse-page .note-area {
          background-color: #fff9c4;
          padding: 20px;
          border-radius: 4px;
          font-family: 'Courier New', Courier, monospace;
          color: #444;
          border: 1px solid #e6e600;
          margin-top: 20px;
        }
        .forberedelse-page footer {
          text-align: center;
          padding: 40px;
          color: #888;
          font-size: 0.9rem;
        }
      `}</style>
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

      </main>
    </>
  );
}

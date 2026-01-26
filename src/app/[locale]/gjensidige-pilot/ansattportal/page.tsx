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
    <>
      <style>{`
        :root {
          --jobloop-teal: #4AB5A3;
          --jobloop-dark: #2C8C7D;
          --gjensidige-blue: #002B49;
          --alert-yellow: #fff3cd;
          --alert-text: #856404;
        }
        .ansattportal-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .ansattportal-page header {
          background-color: var(--jobloop-dark);
          color: white;
          padding: 30px 20px;
          text-align: center;
          border-bottom: 5px solid var(--gjensidige-blue);
        }
        .ansattportal-page header h1 {
         margin-bottom: 10px;
          font-size: 2rem;
        }
        .ansattportal-page header p {
          opacity: 0.9;
          margin-top: 5px;
          font-size: 1.1rem;
      
        }
        .ansattportal-page .container {
          max-width: 900px;
          margin: 30px auto;
          padding: 0 20px;
        }
        .ansattportal-page .card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 30px;
        }
        .ansattportal-page .action-box {
          background-color: var(--alert-yellow);
          border: 1px solid #ffeeba;
          padding: 20px;
          border-radius: 8px;
          color: var(--alert-text);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .ansattportal-page .action-btn {
          background-color: var(--gjensidige-blue);
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: bold;
          white-space: nowrap;
        }
        .ansattportal-page .action-btn:hover {
          opacity: 0.9;
        }
        .ansattportal-page .track-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .ansattportal-page .track-card {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 6px;
          border-top: 4px solid var(--jobloop-teal);
        }
        .ansattportal-page .track-card h3 {
      margin-bottom: 10px;
          color: var(--gjensidige-blue);
          font-size: 1.1rem;
        }
        .ansattportal-page .step-list {
          counter-reset: step;
          list-style: none;
          padding: 0;
        }
        .ansattportal-page .step-list li {
          position: relative;
          padding-left: 50px;
          margin-bottom: 20px;
        }
        .ansattportal-page .step-list li::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 0;
          width: 35px;
          height: 35px;
          background-color: var(--jobloop-teal);
          color: white;
          border-radius: 50%;
          text-align: center;
          line-height: 35px;
          font-weight: bold;
        }
        .ansattportal-page h2 {
          color: var(--gjensidige-blue);
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
          margin-bottom: 20px;
          margin-top: 0;
          font-size: 1.5rem;
        }
        .ansattportal-page .card p,
        .ansattportal-page .track-card p {
          margin-top: 1em;
          margin-bottom: 1em;
          line-height: 1.8;
        }
        .ansattportal-page .card p:first-of-type,
        .ansattportal-page .track-card p:first-of-type {
          margin-top: 0;
        }
        .ansattportal-page .card p:last-of-type,
        .ansattportal-page .track-card p:last-of-type {
          margin-bottom: 0;
        }
        .ansattportal-page footer {
          text-align: center;
          color: #888;
          padding: 40px;
          font-size: 0.9rem;
        }
        .ansattportal-page .card a {
          color: var(--gjensidige-blue);
          text-decoration: underline;
          font-weight: 500;
        }
        .ansattportal-page .card a:hover {
          color: var(--jobloop-dark);
          text-decoration: underline;
        }
      `}</style>
      <main className='ansattportal-page min-h-screen'>
        <header>
          <h1>Internressurs: Gjensidige Pilot</h1>
          <p>Alt du som veileder trenger å vite om prosjektet.</p>
        </header>

      <div className='container'>
        <div className='action-box'>
          <div style={{ fontSize: '2rem' }}>👉</div>
          <div>
            <strong>Første steg: Registrer din kompetanse!</strong><br />
            For at Kim skal kunne matche deg med riktig ungdom, må du oppdatere profilen din i Proplan under fanen &quot;Gjensidige&quot;.
          </div>
          <a href='#' className='action-btn'>
            Gå til Proplan
          </a>
        </div>

        <div className='card'>
          <h2>Kort om oppdraget</h2>
          <p>Vi samarbeider med Gjensidige for å forebygge ungt utenforskap. Deltakerne er forsikringskunder (13–26 år) som har lettere psykiske plager eller står i fare for å falle ut av skole/jobb.</p>
          <p><strong>Din rolle:</strong> Du skal bruke din kompetanse (gaming, tech, relasjon) til å bygge trygghet. Målet er ikke nødvendigvis at de skal bli proffe utviklere, men at de skal få mestring, sosial trening og motivasjon til veien videre.</p>
        </div>

        <div className='card'>
          <h2>De 3 sporene våre</h2>
          <p>Vi jobber etter tre ulike modeller. Sjekk hvilken din deltaker tilhører:</p>

          <div className='track-grid'>
            <div className='track-card'>
              <h3>1. Stå i skolen (13–16 år)</h3>
            
              <p><strong>Fokus:</strong> Motivasjon & Nærvær.</p>
           
              <p>
                Eleven er her 1-2 dager i uken. Vi skal være et &quot;pusterom&quot; som gir energi til å klare resten av uken på skolen. Tett dialog med kontaktlærer er nøkkelen.
              </p>
            </div>

            <div className='track-card'>
              <h3>2. Fullføre VGS (16–26 år)</h3>
            
              <p><strong>Fokus:</strong> Faglig mestring.</p> 

              <p>
                Alternativ læringsarena. Her hjelper vi dem med studieteknikk, leksehjelp eller privatist-lesing. Vi fjerner klasseroms-støyen og fokuserer på målet.
              </p>
            </div>

            <div className='track-card'>
              <h3>3. Jobb & IT (16–26 år)</h3>
            
              <p><strong>Fokus:</strong> Praktisk kompetanse.</p> 
              <p>
                For de som er ferdige med skole (eller har droppet ut) og vil i jobb. Koding, design, drift. Målsetting er praksisplass eller lærlingplass.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <h2>🚨 Rapportering og &quot;Flagg-systemet&quot;</h2>
          <p style={{ marginBottom: '1.5em' }}>
            Gjensidige krever tett oppfølging. Vi bruker et trafikklys-system for å fange opp problemer tidlig.
          </p>

          <ul className='step-list'>
            <li>
              <strong>Grønt lys (Normal):</strong><br />
              Alt går som planlagt. Du fører oppmøte og kort status i loggen som vanlig. Kim sender månedsrapport.
            </li>
            <li>
              <strong>Gult Flagg (Obs!):</strong><br />
              <em>Kriterier:</em> Fravær over 30% siste to uker, eller synkende trivsel/motivasjon.<br />
              <em>Din jobb:</em> Meld fra til Prosjektleder (Kim) umiddelbart. Vi setter inn &quot;Tidlig innsats&quot; (f.eks. justert plan, mer 1-1 tid).
            </li>
            <li>
              <strong>Rødt Flagg (Fare):</strong><br />
              <em>Kriterier:</em> Fravær over 50%, total tilbaketrekning, eller ingen kontakt.<br />
              <em>Din jobb:</em> Varsle Kim *samme dag*. Vi må kalle inn til hastemøte med ungdom/foreldre/Gjensidige for å vurdere veien videre.
            </li>
          </ul>
        </div>

        <div className='card' style={{ backgroundColor: '#e0f2f1' }}>
          <h2>Nyttige lenker</h2>
          <p>Vil du se hva kunden har fått av info?</p>
          <br />
          <ul>
            <li>
              <Link href='/gjensidige-pilot/pilot'>
                Se landingssiden kunden har fått
              </Link>
            </li>
            <li>
              <Link href='/gjensidige-pilot/forberedelse'>
                Se sjekklisten ungdommen fyller ut før start
              </Link>
            </li>
          </ul>
          <br />
        </div>
      </div>

      <footer>
        <p>Spørsmål? Ta kontakt med Kim på Slack eller tlf.</p>
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

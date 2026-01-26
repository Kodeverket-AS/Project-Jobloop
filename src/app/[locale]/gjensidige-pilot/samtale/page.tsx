import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Samtaleguide: Gjensidige & JobLoop',
    description: 'Verktøy for kundebehandling',
  };
}

export default function Samtale() {
  return (
    <>
      <style>{`
        :root {
          --gjensidige-blue: #002B49;
          --gjensidige-red: #C3002F;
          --jobloop-teal: #4AB5A3;
          --text-grey: #555;
          --highlight-bg: #fff3cd;
        }
        .samtale-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .samtale-page header {
          background-color: white;
          padding: 20px 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 5px solid var(--gjensidige-blue);
        }
        .samtale-page .logo {
          font-size: 24px;
          font-weight: bold;
          color: var(--gjensidige-blue);
        }
        .samtale-page .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .samtale-page .intro-box {
          background-color: white;
          padding: 30px;
          padding-bottom: 50px;
          border-radius: 8px;
          margin-bottom: 30px;
          border-left: 6px solid var(--gjensidige-blue);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .samtale-page .intro-box h1 {
          margin-top: 0;
          color: var(--gjensidige-blue);
          font-size: 2rem;
          padding-bottom: 20px;
        }
        .samtale-page .badge {
          display: inline-block;
          background-color: #e2e6ea;
          color: #666;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 15px;
          font-weight: bold;
        }
        .samtale-page .concept-box {
          background-color: var(--highlight-bg);
          border: 1px solid #ffeeba;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 40px;
        }
        .samtale-page .concept-box h3 {
          margin-top: 0;
          color: #856404;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          padding-bottom: 15px;
        }
        .samtale-page .concept-icon {
          font-size: 1.5rem;
        }
        .samtale-page .script-section {
          margin-bottom: 50px;
        }
        .samtale-page .script-section h2 {
          color: var(--gjensidige-blue);
          border-bottom: 2px solid #eee;
          padding-bottom: 15px;
          margin-bottom: 20px;
          font-size: 1.5rem;
          margin-top: 0;
        }
        .samtale-page .dialogue-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }
        .samtale-page .bubble {
          padding: 20px;
          border-radius: 12px;
          position: relative;
          max-width: 80%;
          margin-top: 20px;
        }
        .samtale-page .bubble-caseworker {
          background-color: white;
          border: 1px solid #ddd;
          border-left: 5px solid var(--gjensidige-red);
          align-self: flex-start;
        }
        .samtale-page .bubble-caseworker::before {
          content: "Deg / Saksbehandler";
          position: absolute;
          top: -12px;
          left: 20px;
          background: white;
          padding: 0 10px;
          font-size: 0.8rem;
          font-weight: bold;
          color: var(--gjensidige-red);
        }
        .samtale-page .tip-box {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
          padding-left: 15px;
          border-left: 3px solid #ccc;
        }
        .samtale-page footer {
          text-align: center;
          padding: 40px;
          color: #888;
          font-size: 0.9rem;
          margin-top: 50px;
          border-top: 1px solid #eee;
        }
      `}</style>
      <main className='samtale-page'>
        <header>
          <div className='logo'>Gjensidige | <span style={{ color: 'var(--jobloop-teal)' }}>JobLoop</span></div>
          <div>Verktøy for kundebehandling</div>
        </header>

        <div className='container'>
          <div className='intro-box'>
            <span className='badge'>Versjon 1.0 - Flytende dokument</span>
            <h1>Samtaleguide for piloten</h1>
            
            <p>Dette er et utgangspunkt for hvordan du kan introdusere tilbudet. Bruk dine egne ord, og tilpass etter hvem du snakker med. Vi vil oppdatere denne guiden fortløpende basert på deres erfaringer med hva som fungerer best.</p>
          </div>

          <div className='concept-box'>
            <h3><span className='concept-icon'>💡</span> Husk før du ringer:</h3>
            <p><strong>Dette er ikke et rent &quot;gamingtiltak&quot;.</strong></p>
            <br />
            <p>JobLoop er landsledende på relasjonsbygging med sårbare unge. Vi bruker interesser (som IT, gaming, kreativitet) som <em>inngangsport</em> for å bygge trygghet og relasjon.</p>
           <br /> <p>Vi matcher ungdommen med riktig mentor basert på <strong>hvem de er</strong> og <strong>hva de trenger</strong>. Gaming er kun ett av mange verktøy.</p>
          </div>

          <div className='script-section'>
            <h2>1. Åpning av samtalen</h2>
            <p>Hvordan introdusere temaet når du har identifisert et behov (f.eks. ved uføresak eller langvarig sykdom).</p>
            
            <div className='dialogue-wrapper'>
              <div className='bubble bubble-caseworker'>
                &quot;Jeg ser at [navn på ungdom] har stått utenfor en stund nå. Vi i Gjensidige tester nå ut et nytt tilbud sammen med en partner som heter JobLoop. De er eksperter på å hjelpe unge med å finne motivasjon og veien videre, på litt andre måter enn det offentlige systemet.&quot;
              </div>
              <div className='tip-box'>
                Tips: Fokuser på &quot;motivasjon&quot; og &quot;nye måter&quot;, ikke på behandling eller &quot;tiltak&quot;.
              </div>
            </div>
          </div>

          <div className='script-section'>
            <h2>2. Hvordan forklare tilbudet?</h2>
            <p>Bruk gjerne stikkord om interesser, men hold det åpent.</p>

            <div className='dialogue-wrapper'>
              <div className='bubble bubble-caseworker'>
                &quot;JobLoop fokuserer på det ungdommen faktisk interesserer seg for – enten det er data, gaming, kreativt arbeid eller bare det å være en del av et trygt fellesskap. De bruker disse interessene for å bygge trygghet, og som en bro tilbake til skole eller jobb.&quot;
              </div>

              <div className='bubble bubble-caseworker'>
                &quot;De skreddersyr et opplegg, og ungdommen får en fast veileder som snakker &apos;deres språk&apos;. Det er helt gratis for dere som er med i piloten, og det er ingen forpliktelser.&quot;
              </div>
            </div>
          </div>

          <div className='script-section'>
            <h2>3. Typiske spørsmål / innvendinger</h2>
            
            <div style={{ marginTop: '30px' }}>
              <p><strong>Scenario A: Forelder er skeptisk til &quot;mer skjermtid&quot;</strong></p>
              <div className='bubble bubble-caseworker'>
                &quot;Jeg forstår at du tenker på det. Men JobLoop handler ikke om å sitte mer alene foran skjermen. Det handler om å bruke interessen til å skape <strong>sosiale relasjoner</strong>, mestring og struktur i hverdagen. De gjør den ensomme skjermtiden om til noe sosialt og utviklende.&quot;
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <p><strong>Scenario B: &quot;Mitt barn gamer ikke / er ikke &apos;nerd&apos;&quot;</strong></p>
              <div className='bubble bubble-caseworker'>
                &quot;Det går helt fint! Selv om de er gode på teknologi, så er de først og fremst eksperter på <strong>relasjonsbygging</strong>. De tilpasser seg ungdommen. De har mange ulike spor, og målet er å finne det som motiverer akkurat din sønn/datter.&quot;
              </div>
            </div>
          </div>

          <div className='script-section'>
            <h2>4. Veien videre (Call to Action)</h2>
            <p>Målet ditt er å få lov til å sende info eller videreformidle kontakt.</p>

            <div className='dialogue-wrapper'>
              <div className='bubble bubble-caseworker'>
                &quot;Hvis du synes det høres interessant ut, kan jeg sende deg en lenke til en nettside hvor dere kan lese litt mer og se en kort video? <br /><br />
                Der står det også hvordan dere kommer i kontakt med Kim, som er prosjektleder. Han kan ta en helt uforpliktende prat med dere for å finne ut om dette er riktig match.&quot;
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>Husk: Dette dokumentet utvikles sammen med dere. Har du innspill til hva som fungerer/ikke fungerer? Ta kontakt med prosjektleder.</p>
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

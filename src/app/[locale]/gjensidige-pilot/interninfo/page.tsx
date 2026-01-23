import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Intern Info: Pilot JobLoop',
    description: 'Produktinformasjon for saksbehandlere',
  };
}

export default function InternInfo() {
  return (
    <>
      <style>{`
        :root {
          --gjensidige-blue: #002B49;
          --gjensidige-red: #C3002F;
          --jobloop-teal: #4AB5A3;
          --light-grey: #EBF2F6;
        }
        .interninfo-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .interninfo-page header {
          background-color: var(--gjensidige-blue);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .interninfo-page header h1 {
          margin: 0;
          font-size: 2rem;
        }
        .interninfo-page header p {
          opacity: 0.8;
          margin-top: 5px;
        }
        .interninfo-page .container {
          max-width: 900px;
          margin: 30px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }
        .interninfo-page .main-content {
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .interninfo-page .sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .interninfo-page .tool-box {
          background-color: var(--gjensidige-blue);
          color: white;
          padding: 25px;
          border-radius: 8px;
        }
        .interninfo-page .tool-box h3 {
          margin-top: 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 10px;
        }
        .interninfo-page .tool-link {
          display: block;
          color: white;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: opacity 0.2s;
        }
        .interninfo-page .tool-link:hover {
          opacity: 0.7;
        }
        .interninfo-page .tool-link:last-child {
          border-bottom: none;
        }
        .interninfo-page .icon {
          margin-right: 10px;
        }
        .interninfo-page h2 {
          color: var(--gjensidige-blue);
          margin-top: 0;
          border-bottom: 2px solid var(--light-grey);
          padding-bottom: 10px;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        .interninfo-page h3 {
          color: var(--gjensidige-blue);
          margin-top: 30px;
          margin-bottom: 10px;
        }
        .interninfo-page p {
          line-height: 1.6;
        }
        .interninfo-page .fact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 30px;
        }
        .interninfo-page .fact-item {
          background: var(--light-grey);
          padding: 15px;
          border-radius: 6px;
        }
        .interninfo-page .fact-label {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }
        .interninfo-page .fact-value {
          font-weight: bold;
          color: var(--gjensidige-blue);
        }
        .interninfo-page .track-box {
          background: #fff;
          border: 1px solid #eee;
          border-left: 5px solid var(--jobloop-teal);
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 0 8px 8px 0;
        }
        .interninfo-page .track-box ul {
          list-style-type: disc;
          padding-left: 20px;
        }
        .interninfo-page .track-box ul li {
          margin-bottom: 8px;
        }
        .interninfo-page .track-title {
          font-weight: bold;
          font-size: 1.1rem;
          color: var(--gjensidige-blue);
          display: block;
          margin-bottom: 5px;
        }
        .interninfo-page .check-list {
          list-style: none;
          padding: 0;
        }
        .interninfo-page .check-list li {
          margin-bottom: 8px;
          padding-left: 25px;
          position: relative;
        }
        .interninfo-page .check-list.yes li::before {
          content: "✅";
          position: absolute;
          left: 0;
        }
        .interninfo-page .check-list.no li::before {
          content: "⛔";
          position: absolute;
          left: 0;
        }
        .interninfo-page .process-step {
          margin-bottom: 10px;
          padding-left: 15px;
          border-left: 3px solid #ddd;
        }
        .interninfo-page .process-step strong {
          color: var(--gjensidige-blue);
        }
        @media (max-width: 768px) {
          .interninfo-page .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <main className='interninfo-page min-h-screen'>
      <header>
        <h1>Pilot JobLoop</h1>
        <p>Produktinformasjon for saksbehandlere</p>
      </header>

      <div className='container'>
        <div className='main-content'>
          <h2>Kort om piloten</h2>
          <p><strong>Hva er det?</strong> En lærings- og mestringsarena som hjelper unge (13–26 år) tilbake til skole eller arbeid. Vi fokuserer på relasjonsbygging i trygge rammer. Dette er <em>ikke</em> behandling, men et supplement for å bygge motivasjon.</p>
<br />
          <p><strong>Leveranseform:</strong> Tjenestene tilbys heldigitalt (hele landet), fysisk eller hybrid. <br />
          Vi har fysiske lokaler i: <strong>Oslo, Bergen, Haugesund, Ørsta/Volda, Tromsø og Stavanger.</strong></p>
          <br />
          <div className='fact-grid'>
            <div className='fact-item'>
              <span className='fact-label'>Målgruppe</span>
              <span className='fact-value'>13 – 26 år</span>
            </div>
            <div className='fact-item'>
              <span className='fact-label'>Dekning</span>
              <span className='fact-value'>Hele landet (Digitalt + 6 byer)</span>
            </div>
            <div className='fact-item'>
              <span className='fact-label'>Kostnad</span>
              <span className='fact-value'>Dekkes av piloten (Gratis for kunde)</span>
            </div>
            <div className='fact-item'>
              <span className='fact-label'>Varighet</span>
              <span className='fact-value'>3–6 mnd (Individuelt)</span>
            </div>
          </div>

          <h2>Hvem passer dette for?</h2>
          <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
            Det viktigste kriteriet er risiko for utenforskap. Interesse for IT/gaming er en fin inngang, men <strong>ikke et krav</strong>. Vi har mange veier inn.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3>✅ Målgruppe (Ja)</h3>
              <ul className='check-list yes'>
                <li>Står i fare for frafall i skole/jobb (eller har falt ut)</li>
                <li>Har lettere til moderate psykiske plager:
                  <ul style={{ fontSize: '0.9rem', color: '#555', marginTop: '5px' }}>
                    <li>Angst / Sosial angst</li>
                    <li>Depresjon</li>
                    <li>Nevrospekterdiagnoser (Autisme/ADHD)</li>
                  </ul>
                </li>
                <li>Trenger et trygt, sosialt fellesskap</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3>⛔ Ikke målgruppe (Nei)</h3>
              <ul className='check-list no'>
                <li>Aktive/alvorlige rusproblemer</li>
                <li>Tunge psykiske lidelser som krever klinisk behandling</li>
                <li>Aktive spiseforstyrrelser</li>
                <li>Utagerende atferd som krever tett 1:1 oppfølging hele tiden</li>
              </ul>
            </div>
          </div>

          <h2>De 3 sporene våre (Innholdet)</h2>
          <p>Vi skreddersyr innholdet, men deler det inn i tre hovedveier basert på alder og mål. JobLoop tar vurderingen om hva som passer best.</p>
          
          <div className='track-box'>
            <span className='track-title'>1. Stå i skolen (13–16 år)</span>
            <p>For elever i ungdomsskolen som sliter med å møte opp.</p>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li><strong>Mål:</strong> Økt trivsel, redusert fravær og å fullføre 10. trinn.</li>
              <li><strong>Innhold:</strong> Eleven er hos oss 1-2 dager i uken som et "pusterom". Vi bruker gaming og kreative verktøy pedagogisk for å bygge mestring.</li>
              <li><strong>Samarbeid:</strong> Tett dialog med skole og PPT for å sikre at dette støtter opp om skolegangen, ikke erstatter den.</li>
            </ul>
          </div>

          <div className='track-box'>
            <span className='track-title'>2. Fullføre VGS (16–26 år)</span>
            <p>For ungdom som har droppet ut, eller står i fare for å gjøre det.</p>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li><strong>Mål:</strong> Bestå enkeltfag eller fullføre vitnemål.</li>
              <li><strong>Innhold:</strong> En alternativ læringsarena uten klasseroms-presset. Her kan man lese til privatisteksamen i eget tempo, med tett oppfølging av våre veiledere.</li>
              <li><strong>Metode:</strong> Vi fjerner stresset og fokuserer på faglig mestring i trygge rammer.</li>
            </ul>
          </div>

          <div className='track-box'>
            <span className='track-title'>3. Jobb og IT-kompetanse (16–26 år)</span>
            <p>For unge voksne som står utenfor skole/jobb og ønsker en praktisk vei videre.</p>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li><strong>Mål:</strong> Praksisplass, lærlingplass eller ordinær jobb.</li>
              <li><strong>Innhold:</strong> Praktisk opplæring i ferdigheter bedriftene trenger: Koding, webutvikling, design eller drift.</li>
              <li><strong>Praksis:</strong> Vi kobler deltakerne med samarbeidsbedrifter for utplassering når de er klare for det.</li>
            </ul>
          </div>

          <h2 style={{ marginTop: '40px' }}>Prosess og Rapportering</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3>Slik er prosessen</h3>
              <div className='process-step'>1. <strong>Identifisering:</strong> Du finner en aktuell kandidat.</div>
              <div className='process-step'>2. <strong>Motivasjon:</strong> Du sender lenke til landingsside for å sjekke interesse.</div>
              <div className='process-step'>3. <strong>Henvisning:</strong> Du sender saken til JobLoop.</div>
              <div className='process-step' style={{ borderColor: 'var(--jobloop-teal)' }}>4. <strong>JobLoop tar over:</strong> Vi kartlegger, matcher og følger opp.</div>
            </div>
            
            <div>
              <h3>Rapportering til deg</h3>
              <p style={{ fontSize: '0.9rem' }}>Du skal være trygg på at saken følges opp.</p>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', listStyleType: 'disc' }}>
                <li><strong>Inntaks-tilbakemelding:</strong> Vi gir beskjed om vilket spor vi velger etter kartlegging.</li>
                <li><strong>Månedsrapport:</strong> En enkel status på oppmøte, trivsel og progresjon.</li>
                <li><strong>Varsling:</strong> Vi bruker "Gult/Rødt flagg"-system. Du får beskjed med en gang hvis oppmøtet svikter, slik at vi kan sette inn tiltak sammen.</li>
              </ul>
            </div>
          </div>

        </div>

        <div className='sidebar'>
          
          <div className='tool-box'>
            <h3 style={{ color: 'rgba(255,255,255,0.7)' }}>🛠️ Dine Verktøy</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px', opacity: 0.9 }}>Alt du trenger for å håndtere saken.</p>
            
            <Link href='/gjensidige-pilot/samtale' className='tool-link'>
              <span className='icon'>📞</span> Samtaleguide (Manus)
            </Link>
            <Link href='/gjensidige-pilot/pilot' className='tool-link'>
              <span className='icon'>🌐</span> Landingsside for kunde ↗
            </Link>
            <Link href='/gjensidige-pilot/prosess' className='tool-link'>
              <span className='icon'>🔄</span> Prosesskart
            </Link>
            <Link href='/gjensidige-pilot/forberedelse' className='tool-link'>
              <span className='icon'>📝</span> Sjekkliste til kunde
            </Link>
            <Link href='/gjensidige-pilot/rapport' className='tool-link'>
              <span className='icon'>📊</span> Eksempel på rapport
            </Link>
          </div>

          <div style={{ background: 'white', padding: '25px', borderRadius: '8px', borderTop: '5px solid var(--gjensidige-red)' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Kontaktpunkt</h3>
            <br />
            <p>Er du usikker på om en sak passer?</p>
            <br />
            <p><strong>Kim A. Brurok Stokkeland (Prosjektleder)</strong><br />
            Tlf: 97 46 91 10<br />
            E-post: <a href='mailto:kim@jobloop.no' style={{ color: 'var(--gjensidige-blue)', textDecoration: 'underline' }}>kim@jobloop.no</a></p>
            <br />
            <p style={{ fontSize: '0.85rem', color: '#666' }}>"Det er bedre å ta en telefon for mye enn en for lite."</p>
          </div>

        </div>
      </div>
      </main>
    </>
  );
}

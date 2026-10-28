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
      <main id='main' className='interninfo-page min-h-screen'>
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
              <li><strong>Innhold:</strong> Eleven er hos oss 1-2 dager i uken som et &quot;pusterom&quot;. Vi bruker gaming og kreative verktøy pedagogisk for å bygge mestring.</li>
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
                <li><strong>Varsling:</strong> Vi bruker &quot;Gult/Rødt flagg&quot;-system. Du får beskjed med en gang hvis oppmøtet svikter, slik at vi kan sette inn tiltak sammen.</li>
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
            <Link href='/gjensidige' className='tool-link'>
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
            <p style={{ fontSize: '0.85rem', color: '#666' }}>&quot;Det er bedre å ta en telefon for mye enn en for lite.&quot;</p>
          </div>

        </div>
        </div>

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

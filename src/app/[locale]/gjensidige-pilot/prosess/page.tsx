import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Saksflyt - Pilotprosjekt',
    description: 'Fra første kontakt til ferdig tiltak',
  };
}

export default function Prosess() {
  return (
    <>
      <main className='prosess-page'>
        <header>
          <div className='logo'>Gjensidige | <span style={{ color: 'var(--jobloop-teal)' }}>JobLoop</span></div>
          <div>Intern prosessbeskrivelse</div>
        </header>

        <div className='hero'>
          <h1>Saksflyt i piloten</h1>
          <p>Fra første kontakt til ferdig tiltak. De blå stegene er Gjensidige, de grønne er JobLoop.</p>
        </div>

        <div className='timeline-container'>
          <div className='step gjensidige'>
            <div className='step-number'>1</div>
            <div className='step-content'>
              <span className='owner-badge badge-g'>Gjensidige ansvar</span>
              <h3>Identifisering</h3>
              <p>Du mottar en henvendelse på telefon, eller identifiserer en aktuell kandidat i en eksisterende sak (Uføre/Barneforsikring).</p>
            </div>
          </div>

          <div className='step gjensidige'>
            <div className='step-number'>2</div>
            <div className='step-content'>
              <span className='owner-badge badge-g'>Gjensidige ansvar</span>
              <h3>Enkel kriteriesjekk (Del 1)</h3>
              <p>Du sjekker kun det grunnleggende:
                <br />• Alder (13–26 år)
                <br />• Utenfor skole/jobb (eller i fare for)
                <br />• Lettere/moderate psykiske plager
              </p>
            </div>
          </div>

          <div className='step gjensidige'>
            <div className='step-number'>3</div>
            <div className='step-content'>
              <span className='owner-badge badge-g'>Gjensidige ansvar</span>
              <h3>Motivasjon & Info</h3>
              <p><strong>Dette er nøkkelen:</strong> Du sender lenken til den &quot;skjulte&quot; landingssiden til kunden (og evt. foreldre). <br />
              Her kan de se video og lese om sporene i ro og fred, før de eventuelt tar kontakt med Kim.</p>
            </div>
          </div>

          <div className='step jobloop'>
            <div className='step-number'>4</div>
            <div className='step-content'>
              <span className='owner-badge badge-j'>JobLoop tar over</span>
              <h3>Kartlegging (Del 2)</h3>
              <p>Kim kontakter kandidaten. Vi gjennomfører dybdekartlegging, snakker med foreldre/ungdom og finner riktig match og veileder.</p>
            </div>
          </div>

          <div className='step jobloop'>
            <div className='step-number'>5</div>
            <div className='step-content'>
              <span className='owner-badge badge-j'>JobLoop rapporterer</span>
              <h3>Tilbakemelding</h3>
              <p>Kim rapporterer tilbake til Gjensidige: <br />Hva ble vi enige om? Hvilket spor velger vi? Er dette &quot;go/no-go&quot;?</p>
            </div>
          </div>

          <div className='step jobloop'>
            <div className='step-number'>6</div>
            <div className='step-content'>
              <span className='owner-badge badge-j'>Gjennomføring</span>
              <h3>Rapportering underveis</h3>
              <p>Vi sender månedlige rapporter på progresjon, oppmøte og trivsel. Vi håndterer all oppfølging av deltakeren.</p>
            </div>
          </div>

          <div className='step jobloop'>
            <div className='step-number'>7</div>
            <div className='step-content'>
              <span className='owner-badge badge-j'>Avslutning</span>
              <h3>Sluttrapport & Veien videre</h3>
              <p>Ved avslutning utarbeider Kim en rapport om hva som er oppnådd, og en anbefaling for veien videre (tilbake til skole, jobb, eller annet).</p>
            </div>
          </div>
        </div>

        <footer>
          Pilotprosjekt 2026 - Samarbeid for bedre inkludering
        </footer>

        <div className='timeline-container'>
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

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
      <style>{`
        :root {
          --gjensidige-blue: #002B49;
          --gjensidige-red: #C3002F;
          --jobloop-teal: #4AB5A3;
          --jobloop-dark: #2C8C7D;
          --grey-bg: #EBF2F6;
        }
        .prosess-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f6f8;
          color: #333;
          line-height: 1.6;
        }
        .prosess-page header {
          background-color: white;
          padding: 20px 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 5px solid var(--gjensidige-blue);
        }
        .prosess-page .logo {
          font-size: 24px;
          font-weight: bold;
          color: var(--gjensidige-blue);
        }
        .prosess-page .hero {
          background-color: var(--gjensidige-blue);
          color: white;
          padding: 40px 20px;
          text-align: center;
        }
        .prosess-page .hero h1 {
          margin: 0 0 10px 0;
          font-size: 2.2rem;
        }
        .prosess-page .hero p {
          opacity: 0.8;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .prosess-page .timeline-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 0 20px;
          position: relative;
        }
        .prosess-page .timeline-container::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: #ddd;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
          z-index: -1;
        }
        .prosess-page .step {
          display: flex;
          justify-content: flex-end;
          padding-bottom: 50px;
          position: relative;
          width: 50%;
          clear: both;
        }
        .prosess-page .step:nth-child(odd) {
          float: left;
          text-align: right;
          padding-right: 40px;
        }
        .prosess-page .step:nth-child(even) {
          float: right;
          text-align: left;
          justify-content: flex-start;
          padding-left: 40px;
          margin-top: 50px;
        }
        .prosess-page .step-number {
          position: absolute;
          top: 0;
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
          font-weight: bold;
          font-size: 1.2rem;
          color: white;
          box-shadow: 0 0 0 5px #f4f6f8;
          z-index: 10;
        }
        .prosess-page .step:nth-child(odd) .step-number {
          right: -25px;
        }
        .prosess-page .step:nth-child(even) .step-number {
          left: -25px;
        }
        .prosess-page .step-content {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          position: relative;
          width: 100%;
        }
        .prosess-page .step:nth-child(odd) .step-content::after {
          content: " ";
          position: absolute;
          top: 15px;
          right: -10px;
          border-width: 10px 0 10px 10px;
          border-style: solid;
          border-color: transparent transparent transparent white;
        }
        .prosess-page .step:nth-child(even) .step-content::after {
          content: " ";
          position: absolute;
          top: 15px;
          left: -10px;
          border-width: 10px 10px 10px 0;
          border-style: solid;
          border-color: transparent white transparent transparent;
        }
        .prosess-page .step.gjensidige .step-number {
          background-color: var(--gjensidige-blue);
        }
        .prosess-page .step.gjensidige h3 {
          color: var(--gjensidige-blue);
        }
        .prosess-page .step.jobloop .step-number {
          background-color: var(--jobloop-teal);
        }
        .prosess-page .step.jobloop h3 {
          color: var(--jobloop-dark);
        }
        .prosess-page h3 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 1.3rem;
        }
        .prosess-page p {
          margin: 0;
          color: #666;
          font-size: 0.95rem;
        }
        .prosess-page .owner-badge {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: bold;
          padding: 3px 8px;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .prosess-page .badge-g {
          background-color: #EBF2F6;
          color: var(--gjensidige-blue);
        }
        .prosess-page .badge-j {
          background-color: #e0f2f1;
          color: var(--jobloop-dark);
        }
        @media screen and (max-width: 768px) {
          .prosess-page .timeline-container::after {
            left: 30px;
          }
          .prosess-page .step {
            width: 100%;
            float: none;
            padding-left: 70px;
            padding-right: 0;
            text-align: left;
          }
          .prosess-page .step:nth-child(even) {
            margin-top: 0;
          }
          .prosess-page .step:nth-child(odd) {
            text-align: left;
            padding-right: 0;
            padding-left: 70px;
          }
          .prosess-page .step-number {
            left: 5px !important;
            right: auto !important;
          }
          .prosess-page .step-content::after {
            left: -10px !important;
            right: auto !important;
            border-width: 10px 10px 10px 0 !important;
            border-color: transparent white transparent transparent !important;
          }
        }
        .prosess-page footer {
          text-align: center;
          padding: 40px;
          color: #888;
          font-size: 0.9rem;
          clear: both;
        }
      `}</style>
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
              <p><strong>Dette er nøkkelen:</strong> Du sender lenken til den "skjulte" landingssiden til kunden (og evt. foreldre). <br />
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
              <p>Kim rapporterer tilbake til Gjensidige: <br />Hva ble vi enige om? Hvilket spor velger vi? Er dette "go/no-go"?</p>
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
      </main>
    </>
  );
}

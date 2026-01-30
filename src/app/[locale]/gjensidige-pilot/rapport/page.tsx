import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Månedsrapport - Eksempel',
    description: 'Eksempel på månedsrapport for Gjensidige Pilot',
  };
}

export default function Rapport() {
  return (
    <>
      <main className='rapport-page min-h-screen'>
      <div className='report-container'>
        <h1>Månedsrapport: Pilot JobLoop</h1>
        <div className='meta'>
          <strong>Mottaker:</strong> Gjensidige Forsikring &nbsp;|&nbsp;
          <strong>Periode:</strong> Mars 2026 &nbsp;|&nbsp;
          <strong>Avsender:</strong> Kim (JobLoop)
        </div>

        <h3>Status aktive deltakere</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>
          Oversikt basert på oppmøte, trivsel og faglig progresjon siste 30 dager.
        </p>

        <table>
          <thead>
            <tr>
              <th>Deltaker (Anonymisert)</th>
              <th>Fase</th>
              <th>Oppmøte</th>
              <th>Trivsel</th>
              <th>Status / Flagg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kandidat A (15 år)</td>
              <td>Stå i skolen</td>
              <td>90%</td>
              <td>Høy</td>
              <td><span className='badge green'>I rute</span></td>
            </tr>
            <tr>
              <td>Kandidat B (19 år)</td>
              <td>Jobb/IT</td>
              <td>85%</td>
              <td>Middels</td>
              <td><span className='badge green'>I rute</span></td>
            </tr>
            <tr>
              <td>Kandidat C (22 år)</td>
              <td>VGS Fullføring</td>
              <td>60%</td>
              <td>Lav</td>
              <td><span className='badge yellow'>Gult flagg 🚩</span></td>
            </tr>
            <tr>
              <td>Kandidat D (17 år)</td>
              <td>Kartlegging</td>
              <td>-</td>
              <td>-</td>
              <td><span className='badge green'>Ny inntatt</span></td>
            </tr>
          </tbody>
        </table>

        <div className='summary-box'>
          <h3>Oppsummering og tiltak</h3>
          <br />
          <p><strong>Generelt:</strong> God fremdrift i gruppen. 3 nye inntak denne måneden.</p>
          <br />
          <p><strong>Avvikshåndtering (Gult flagg - Kandidat C):</strong><br />
          Har hatt synkende oppmøte siste to uker. Prosjektleder Kim har hatt samtale med ungdom og OT.
          <br /><em>Tiltak:</em> Vi justerer ned timeplanen midlertidig og øker 1-til-1 oppfølging i to uker for å bygge trygghet (se &quot;Tidlig tiltak&quot; i avtalen).</p>
        </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 30px' }}>
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

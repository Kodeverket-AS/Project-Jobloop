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
      <style>{`
        .rapport-page {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f9f9f9;
          padding: 40px;
        }
        .rapport-page .report-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 30px;
          box-shadow: 0 0 20px rgba(0,0,0,0.05);
          border-radius: 8px;
        }
        .rapport-page h1 {
          color: #002B49;
          margin-bottom: 5px;
          font-size: 1.8rem;
        }
        .rapport-page h3 {
          font-size: 1.2rem;
        }
        .rapport-page .meta {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 20px;
        }
        .rapport-page table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .rapport-page th {
          text-align: left;
          padding: 12px;
          background-color: #f4f6f8;
          color: #002B49;
          border-bottom: 2px solid #ddd;
        }
        .rapport-page td {
          padding: 10px;
          border-bottom: 1px solid #eee;
          font-size: 0.95rem;
        }
        .rapport-page .badge {
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .rapport-page .badge.green {
          background-color: #d4edda;
          color: #155724;
        }
        .rapport-page .badge.yellow {
          background-color: #fff3cd;
          color: #856404;
        }
        .rapport-page .badge.red {
          background-color: #f8d7da;
          color: #721c24;
        }
        .rapport-page .flag-icon {
          font-size: 1.2rem;
        }
        .rapport-page .summary-box {
          background-color: #EBF2F6;
          padding: 20px;
          border-radius: 8px;
          margin-top: 30px;
        }
        .rapport-page .summary-box h3 {
          margin-top: 0;
          color: #002B49;
        }
      `}</style>
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
          <br /><em>Tiltak:</em> Vi justerer ned timeplanen midlertidig og øker 1-til-1 oppfølging i to uker for å bygge trygghet (se "Tidlig tiltak" i avtalen).</p>
        </div>
      </div>
      </main>
    </>
  );
}

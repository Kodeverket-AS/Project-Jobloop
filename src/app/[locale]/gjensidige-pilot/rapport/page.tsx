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
    <main className='min-h-screen bg-gray-100 py-10 px-4'>
      <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-[#002B49] mb-2'>Månedsrapport: Pilot JobLoop</h1>
        <div className='text-gray-600 text-sm mb-8 pb-5 border-b-2 border-gray-200'>
          <strong>Mottaker:</strong> Gjensidige Forsikring &nbsp;|&nbsp;
          <strong>Periode:</strong> Mars 2026 &nbsp;|&nbsp;
          <strong>Avsender:</strong> Kim (JobLoop)
        </div>

        <h3 className='text-xl font-semibold text-[#002B49] mb-4'>Status aktive deltakere</h3>
        <p className='text-sm text-gray-600 mb-6'>
          Oversikt basert på oppmøte, trivsel og faglig progresjon siste 30 dager.
        </p>

        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='text-left p-3 bg-[#f4f6f8] text-[#002B49] border-b-2 border-gray-300'>Deltaker (Anonymisert)</th>
                <th className='text-left p-3 bg-[#f4f6f8] text-[#002B49] border-b-2 border-gray-300'>Fase</th>
                <th className='text-left p-3 bg-[#f4f6f8] text-[#002B49] border-b-2 border-gray-300'>Oppmøte</th>
                <th className='text-left p-3 bg-[#f4f6f8] text-[#002B49] border-b-2 border-gray-300'>Trivsel</th>
                <th className='text-left p-3 bg-[#f4f6f8] text-[#002B49] border-b-2 border-gray-300'>Status / Flagg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-3 border-b border-gray-200'>Kandidat A (15 år)</td>
                <td className='p-3 border-b border-gray-200'>Stå i skolen</td>
                <td className='p-3 border-b border-gray-200'>90%</td>
                <td className='p-3 border-b border-gray-200'>Høy</td>
                <td className='p-3 border-b border-gray-200'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold'>I rute</span>
                </td>
              </tr>
              <tr>
                <td className='p-3 border-b border-gray-200'>Kandidat B (19 år)</td>
                <td className='p-3 border-b border-gray-200'>Jobb/IT</td>
                <td className='p-3 border-b border-gray-200'>85%</td>
                <td className='p-3 border-b border-gray-200'>Middels</td>
                <td className='p-3 border-b border-gray-200'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold'>I rute</span>
                </td>
              </tr>
              <tr>
                <td className='p-3 border-b border-gray-200'>Kandidat C (22 år)</td>
                <td className='p-3 border-b border-gray-200'>VGS Fullføring</td>
                <td className='p-3 border-b border-gray-200'>60%</td>
                <td className='p-3 border-b border-gray-200'>Lav</td>
                <td className='p-3 border-b border-gray-200'>
                  <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold'>Gult flagg 🚩</span>
                </td>
              </tr>
              <tr>
                <td className='p-3 border-b border-gray-200'>Kandidat D (17 år)</td>
                <td className='p-3 border-b border-gray-200'>Kartlegging</td>
                <td className='p-3 border-b border-gray-200'>-</td>
                <td className='p-3 border-b border-gray-200'>-</td>
                <td className='p-3 border-b border-gray-200'>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold'>Ny inntatt</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-[#EBF2F6] p-6 rounded-lg'>
          <h3 className='text-xl font-semibold text-[#002B49] mb-4'>Oppsummering og tiltak</h3>
          <p className='mb-3'><strong>Generelt:</strong> God fremdrift i gruppen. 3 nye inntak denne måneden.</p>
          <p>
            <strong>Avvikshåndtering (Gult flagg - Kandidat C):</strong><br />
            Har hatt synkende oppmøte siste to uker. Prosjektleder Kim har hatt samtale med ungdom og OT.
            <br />
            <em>Tiltak:</em> Vi justerer ned timeplanen midlertidig og øker 1-til-1 oppfølging i to uker for å bygge trygghet (se "Tidlig tiltak" i avtalen).
          </p>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-4 pb-8 pt-6'>
        <Link
          href='/gjensidige-pilot'
          className='inline-block text-[#4AB5A3] hover:text-[#002B49] transition-colors'
        >
          ← Tilbake til verktøykassen
        </Link>
      </div>
    </main>
  );
}

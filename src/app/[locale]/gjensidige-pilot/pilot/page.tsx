import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gjensidige & JobLoop Pilot',
    description: 'Nytt pilottilbud for kunder av Gjensidige',
  };
}

export default function Pilot() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-white py-5 px-10 flex justify-between items-center border-b-5 border-[#002B49]'>
        <div className='text-2xl font-bold text-[#002B49]'>
          Gjensidige | <span className='text-[#4AB5A3]'>JobLoop</span>
        </div>
        <div className='text-sm text-gray-600'>Pilotprosjekt 2026</div>
      </header>

      <section className='bg-[#002B49] text-white py-16 px-6 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Nytt pilottilbud for kunder av Gjensidige</h1>
        <p className='text-xl max-w-2xl mx-auto opacity-90 mb-10'>
          Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.
        </p>

        <div className='bg-[#001f35] max-w-2xl mx-auto h-80 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center'>
          <div className='text-center'>
            <div className='text-6xl text-white/80 mb-3'>▶</div>
            <p className='text-gray-300'>VIDEO: Hei, er du forsikret i Gjensidige?</p>
          </div>
        </div>
      </section>

      <section className='bg-white py-12 px-6 text-center'>
        <h2 className='text-3xl font-bold text-[#002B49] mb-5'>Hvilket spor passer for deg?</h2>
        <p className='max-w-2xl mx-auto text-lg'>
          Vi har tre hovedveier, avhengig av hvor gammel du er og hva du trenger akkurat nå. <br />
          <strong>Usikker?</strong> Det gjør ingenting. Vi finner ut av det sammen.
        </p>
      </section>

      <section className='flex flex-wrap justify-center gap-8 px-5 py-12'>
        <div className='bg-white border border-gray-200 border-t-6 border-t-[#4AB5A3] rounded-lg w-full max-w-sm shadow-lg flex flex-col overflow-hidden'>
          <div className='bg-gray-800 h-48 flex items-center justify-center text-white relative'>
            <span className='absolute bottom-3 left-4 text-sm'>Video: Stå i skolen</span>
          </div>
          <div className='p-6'>
            <span className='bg-[#EBF2F6] text-[#002B49] px-2 py-1 rounded text-xs font-bold uppercase mb-3 inline-block'>
              13 – 16 år
            </span>
            <h3 className='text-xl font-bold text-[#002B49] mb-3'>Stå i skolen</h3>
            <p className='text-sm text-gray-600 mb-3'>
              <strong>Konsept for utdanning:</strong> For deg som går på ungdomsskolen, men hvor hverdagen er tung og fraværet øker.
            </p>
            <p className='text-sm text-gray-600 mb-4'>
              Vi bruker gaming og teknologi pedagogisk for å gi deg mestringsopplevelser. Du er hos oss 1–2 dager i uken som et avbrekk, mens vi samarbeider tett med skolen din.
            </p>
            <ul className='text-sm text-gray-700 space-y-2 pl-5'>
              <li>• Finn motivasjon gjennom interesse</li>
              <li>• Sosial trening i trygge rammer</li>
              <li>• Mål: Trives bedre og fullføre 10. trinn</li>
            </ul>
          </div>
        </div>

        <div className='bg-white border border-gray-200 border-t-6 border-t-[#4AB5A3] rounded-lg w-full max-w-sm shadow-lg flex flex-col overflow-hidden'>
          <div className='bg-gray-700 h-48 flex items-center justify-center text-white relative'>
            <span className='absolute bottom-3 left-4 text-sm'>Video: Bestå fag</span>
          </div>
          <div className='p-6'>
            <span className='bg-[#EBF2F6] text-[#002B49] px-2 py-1 rounded text-xs font-bold uppercase mb-3 inline-block'>
              16 – 26 år
            </span>
            <h3 className='text-xl font-bold text-[#002B49] mb-3'>Fullføre VGS</h3>
            <p className='text-sm text-gray-600 mb-3'>
              <strong>Konsept for utdanning:</strong> For deg som har falt ut av videregående, eller trenger en annen arena for å fullføre.
            </p>
            <p className='text-sm text-gray-600 mb-4'>
              Dette er en alternativ læringsarena. Her kan du jobbe med fagene dine, få leksehjelp eller lese til privatisteksamen i ditt eget tempo, uten stresset fra et klasserom.
            </p>
            <ul className='text-sm text-gray-700 space-y-2 pl-5'>
              <li>• Individuell tilrettelegging</li>
              <li>• Fokus på enkeltfag eller vitnemål</li>
              <li>• Vi samarbeider med OT/Skole</li>
            </ul>
          </div>
        </div>

        <div className='bg-white border border-gray-200 border-t-6 border-t-[#4AB5A3] rounded-lg w-full max-w-sm shadow-lg flex flex-col overflow-hidden'>
          <div className='bg-green-700 h-48 flex items-center justify-center text-white relative'>
            <span className='absolute bottom-3 left-4 text-sm'>Video: Veien til jobb</span>
          </div>
          <div className='p-6'>
            <span className='bg-[#EBF2F6] text-[#002B49] px-2 py-1 rounded text-xs font-bold uppercase mb-3 inline-block'>
              16 – 26 år
            </span>
            <h3 className='text-xl font-bold text-[#002B49] mb-3'>Jobb og IT-kompetanse</h3>
            <p className='text-sm text-gray-600 mb-3'>
              <strong>Konsept for arbeid:</strong> For deg som står utenfor skole og jobb, og vil lære praktisk koding, design eller IT.
            </p>
            <p className='text-sm text-gray-600 mb-4'>
              Her får du praktisk opplæring i ferdigheter bedriftene trenger. Vi fokuserer på "tech" og kreativitet som døråpner til arbeidslivet.
            </p>
            <ul className='text-sm text-gray-700 space-y-2 pl-5'>
              <li>• Lær koding, design og utvikling</li>
              <li>• Praksis i samarbeidsbedrifter</li>
              <li>• Veien mot lærlingplass eller jobb</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='bg-white py-16 px-6 border-t border-gray-200'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-[#002B49] text-center mb-10'>Ofte stilte spørsmål</h2>

          <div className='space-y-6'>
            <div className='pb-6 border-b border-gray-200'>
              <span className='block font-bold text-lg text-[#002B49] mb-2'>Koster det noe å være med?</span>
              <p className='text-gray-600'>
                Nei. For deg som får plass gjennom dette pilotprosjektet med Gjensidige, er hele tilbudet dekket av forsikringen din.
              </p>
            </div>

            <div className='pb-6 border-b border-gray-200'>
              <span className='block font-bold text-lg text-[#002B49] mb-2'>Er dette behandling eller terapi?</span>
              <p className='text-gray-600'>
                Nei. JobLoop er en lærings- og mestringsarena, ikke en klinikk. Vi fokuserer på dine interesser og styrker, ikke på diagnoser. Men vi tilpasser oss selvfølgelig hvis du har utfordringer som angst eller ADHD.
              </p>
            </div>

            <div className='pb-6 border-b border-gray-200'>
              <span className='block font-bold text-lg text-[#002B49] mb-2'>Må jeg være supergod i gaming eller koding?</span>
              <p className='text-gray-600'>
                Absolutt ikke! Det viktigste er at du har en interesse for det digitale. Vi tilpasser nivået til akkurat der du er, enten du er nybegynner eller har holdt på lenge.
              </p>
            </div>

            <div className='pb-6 border-b border-gray-200'>
              <span className='block font-bold text-lg text-[#002B49] mb-2'>Mister jeg plassen min på skolen?</span>
              <p className='text-gray-600'>
                Nei. Spesielt for "Konsept for utdanning" samarbeider vi tett med skolen din slik at du beholder elevstatusen din. Målet vårt er å hjelpe deg å fullføre.
              </p>
            </div>

            <div className='pb-6'>
              <span className='block font-bold text-lg text-[#002B49] mb-2'>Hva skjer hvis jeg ikke tør å møte opp fysisk?</span>
              <p className='text-gray-600'>
                Vi har full forståelse for at dørstokkmila kan være lang. Derfor kan vi starte digitalt via Discord eller Teams, slik at du blir trygg på veilederen din før du møter oss fysisk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#EBF2F6] py-16 px-6 text-center'>
        <h2 className='text-3xl font-bold text-[#002B49] mb-4'>Høres dette interessant ut?</h2>
        <p className='mb-8'>Du trenger ikke vite nøyaktig hva som passer. Det er jobben vår.</p>

        <div className='bg-white max-w-2xl mx-auto p-10 rounded-lg border-l-10 border-[#C3002F] shadow-lg'>
          <h3 className='text-2xl font-bold text-[#002B49] mb-4'>Ta kontakt for kartlegging</h3>
          <p className='mb-6'>
            Send oss en e-post eller ring, så tar vi en uforpliktende prat. Vi finner ut hvilket spor som gir deg best utbytte.
          </p>

          <div className='text-lg mb-6'>
            <p className='font-bold mb-2'>Prosjektleder Kim</p>
            <p>📞 900 XX XXX &nbsp; | &nbsp; ✉️ kim@jobloop.no</p>
          </div>

          <a
            href='#'
            className='inline-block bg-[#C3002F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a10026] transition'
          >
            Send e-post nå
          </a>
        </div>
      </section>

      <footer className='bg-[#002B49] text-gray-300 text-center py-8'>
        <p>Et samarbeid mellom Gjensidige Forsikring og JobLoop AS.</p>
        <p className='mt-2'>Pilotprosjekt – Innhold kan endres underveis.</p>
      </footer>

      <div className='max-w-6xl mx-auto px-4 pb-8 pt-6'>
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

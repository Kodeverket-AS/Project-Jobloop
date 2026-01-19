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
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-white py-5 px-10 flex justify-between items-center border-b-5 border-[#002B49]'>
        <div className='text-2xl font-bold text-[#002B49]'>
          Gjensidige | <span className='text-[#4AB5A3]'>JobLoop</span>
        </div>
        <div>Verktøy for kundebehandling</div>
      </header>

      <div className='max-w-4xl mx-auto px-4 py-10'>
        <div className='bg-white p-8 rounded-lg shadow-md mb-8 border-l-6 border-[#002B49]'>
          <span className='inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-4'>
            Versjon 1.0 - Flytende dokument
          </span>
          <h1 className='text-3xl font-bold text-[#002B49] mb-4'>Samtaleguide for piloten</h1>
          <p>
            Dette er et utgangspunkt for hvordan du kan introdusere tilbudet. Bruk dine egne ord, og tilpass etter hvem du snakker med. Vi vil oppdatere denne guiden fortløpende basert på deres erfaringer med hva som fungerer best.
          </p>
        </div>

        <div className='bg-[#fff3cd] border border-[#ffeeba] p-6 rounded-lg mb-10'>
          <h3 className='text-lg font-semibold text-[#856404] mb-3 flex items-center gap-3'>
            <span className='text-2xl'>💡</span>
            Husk før du ringer:
          </h3>
          <p className='text-[#856404] mb-2'><strong>Dette er ikke et rent "gamingtiltak".</strong></p>
          <p className='text-[#856404] mb-2'>
            JobLoop er landsledende på relasjonsbygging med sårbare unge. Vi bruker interesser (som IT, gaming, kreativitet) som <em>inngangsport</em> for å bygge trygghet og relasjon.
          </p>
          <p className='text-[#856404]'>
            Vi matcher ungdommen med riktig mentor basert på <strong>hvem de er</strong> og <strong>hva de trenger</strong>. Gaming er kun ett av mange verktøy.
          </p>
        </div>

        <div className='space-y-12 mb-10'>
          <div>
            <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
              1. Åpning av samtalen
            </h2>
            <p className='mb-6'>Hvordan introdusere temaet når du har identifisert et behov (f.eks. ved uføresak eller langvarig sykdom).</p>

            <div className='bg-white border border-gray-200 border-l-5 border-l-[#C3002F] p-6 rounded-lg relative'>
              <div className='absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-[#C3002F]'>
                Deg / Saksbehandler
              </div>
              <p className='mt-2'>
                "Jeg ser at [navn på ungdom] har stått utenfor en stund nå. Vi i Gjensidige tester nå ut et nytt tilbud sammen med en partner som heter JobLoop. De er eksperter på å hjelpe unge med å finne motivasjon og veien videre, på litt andre måter enn det offentlige systemet."
              </p>
            </div>
            <div className='mt-3 text-sm text-gray-600 italic pl-4 border-l-3 border-gray-300'>
              Tips: Fokuser på "motivasjon" og "nye måter", ikke på behandling eller "tiltak".
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
              2. Hvordan forklare tilbudet?
            </h2>
            <p className='mb-6'>Bruk gjerne stikkord om interesser, men hold det åpent.</p>

            <div className='space-y-4'>
              <div className='bg-white border border-gray-200 border-l-5 border-l-[#C3002F] p-6 rounded-lg relative'>
                <div className='absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-[#C3002F]'>
                  Deg / Saksbehandler
                </div>
                <p className='mt-2'>
                  "JobLoop fokuserer på det ungdommen faktisk interesserer seg for – enten det er data, gaming, kreativt arbeid eller bare det å være en del av et trygt fellesskap. De bruker disse interessene for å bygge trygghet, og som en bro tilbake til skole eller jobb."
                </p>
              </div>

              <div className='bg-white border border-gray-200 border-l-5 border-l-[#C3002F] p-6 rounded-lg relative'>
                <div className='absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-[#C3002F]'>
                  Deg / Saksbehandler
                </div>
                <p className='mt-2'>
                  "De skreddersyr et opplegg, og ungdommen får en fast veileder som snakker 'deres språk'. Det er helt gratis for dere som er med i piloten, og det er ingen forpliktelser."
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
              3. Typiske spørsmål / innvendinger
            </h2>

            <div className='mb-6'>
              <p className='font-semibold mb-3'>Scenario A: Forelder er skeptisk til "mer skjermtid"</p>
              <div className='bg-white border border-gray-200 border-l-5 border-l-[#C3002F] p-6 rounded-lg relative'>
                <div className='absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-[#C3002F]'>
                  Deg / Saksbehandler
                </div>
                <p className='mt-2'>
                  "Jeg forstår at du tenker på det. Men JobLoop handler ikke om å sitte mer alene foran skjermen. Det handler om å bruke interessen til å skape <strong>sosiale relasjoner</strong>, mestring og struktur i hverdagen. De gjør den ensomme skjermtiden om til noe sosialt og utviklende."
                </p>
              </div>
            </div>

            <div>
              <p className='font-semibold mb-3'>Scenario B: "Mitt barn gamer ikke / er ikke 'nerd'"</p>
              <div className='bg-white border border-gray-200 border-l-5 border-l-[#C3002F] p-6 rounded-lg relative'>
                <div className='absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-[#C3002F]'>
                  Deg / Saksbehandler
                </div>
                <p className='mt-2'>
                  "Det går helt fint! Selv om de er gode på teknologi, så er de først og fremst eksperter på <strong>relasjonsbygging</strong>. De tilpasser seg ungdommen. De har mange ulike spor, og målet er å finne det som motiverer akkurat din sønn/datter."
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
              4. Veien videre (Call to Action)
            </h2>
            <p className='mb-6'>Målet ditt er å få lov til å sende info eller videreformidle kontakt.</p>

            <div className='bg-white border border-gray-200 border-l-5 border-l-[#C3002F] p-6 rounded-lg relative'>
              <div className='absolute -top-3 left-6 bg-white px-2 text-xs font-bold text-[#C3002F]'>
                Deg / Saksbehandler
              </div>
              <p className='mt-2'>
                "Hvis du synes det høres interessant ut, kan jeg sende deg en lenke til en nettside hvor dere kan lese litt mer og se en kort video? <br /><br />
                Der står det også hvordan dere kommer i kontakt med Kim, som er prosjektleder. Han kan ta en helt uforpliktende prat med dere for å finne ut om dette er riktig match."
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className='text-center text-gray-500 py-10 border-t border-gray-200 mt-12'>
        <p>Husk: Dette dokumentet utvikles sammen med dere. Har du innspill til hva som fungerer/ikke fungerer? Ta kontakt med prosjektleder.</p>
      </footer>

      <div className='max-w-4xl mx-auto px-4 pb-8'>
        <Link
          href='/gjensidige-pilot'
          className='inline-block mt-6 text-[#4AB5A3] hover:text-[#002B49] transition-colors'
        >
          ← Tilbake til verktøykassen
        </Link>
      </div>
    </main>
  );
}

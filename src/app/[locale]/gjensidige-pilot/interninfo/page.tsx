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
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-[#002B49] text-white py-8 px-6 text-center'>
        <h1 className='text-3xl font-bold mb-2'>Pilot JobLoop</h1>
        <p className='opacity-80'>Produktinformasjon for saksbehandlere</p>
      </header>

      <div className='max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 bg-white p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200'>
            Kort om piloten
          </h2>
          <p className='mb-4'>
            <strong>Hva er det?</strong> En lærings- og mestringsarena som hjelper unge (13–26 år) tilbake til skole eller arbeid. Vi fokuserer på relasjonsbygging i trygge rammer. Dette er <em>ikke</em> behandling, men et supplement for å bygge motivasjon.
          </p>
          <p className='mb-6'>
            <strong>Leveranseform:</strong> Tjenestene tilbys heldigitalt (hele landet), fysisk eller hybrid. <br />
            Vi har fysiske lokaler i: <strong>Oslo, Bergen, Haugesund, Ørsta/Volda, Tromsø og Stavanger.</strong>
          </p>

          <div className='grid grid-cols-2 gap-4 mb-8'>
            <div className='bg-[#EBF2F6] p-4 rounded-lg'>
              <span className='text-xs uppercase font-bold text-gray-600 block mb-2'>Målgruppe</span>
              <span className='font-bold text-[#002B49]'>13 – 26 år</span>
            </div>
            <div className='bg-[#EBF2F6] p-4 rounded-lg'>
              <span className='text-xs uppercase font-bold text-gray-600 block mb-2'>Dekning</span>
              <span className='font-bold text-[#002B49]'>Hele landet (Digitalt + 6 byer)</span>
            </div>
            <div className='bg-[#EBF2F6] p-4 rounded-lg'>
              <span className='text-xs uppercase font-bold text-gray-600 block mb-2'>Kostnad</span>
              <span className='font-bold text-[#002B49]'>Dekkes av piloten (Gratis for kunde)</span>
            </div>
            <div className='bg-[#EBF2F6] p-4 rounded-lg'>
              <span className='text-xs uppercase font-bold text-gray-600 block mb-2'>Varighet</span>
              <span className='font-bold text-[#002B49]'>3–6 mnd (Individuelt)</span>
            </div>
          </div>

          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200 mt-10'>
            Hvem passer dette for?
          </h2>
          <p className='text-sm mb-6'>
            Det viktigste kriteriet er risiko for utenforskap. Interesse for IT/gaming er en fin inngang, men <strong>ikke et krav</strong>. Vi har mange veier inn.
          </p>

          <div className='flex flex-col md:flex-row gap-6 mb-8'>
            <div className='flex-1'>
              <h3 className='text-lg font-semibold mb-4'>✅ Målgruppe (Ja)</h3>
              <ul className='space-y-2'>
                <li className='pl-6 relative before:content-["✅"] before:absolute before:left-0'>
                  Står i fare for frafall i skole/jobb (eller har falt ut)
                </li>
                <li className='pl-6 relative before:content-["✅"] before:absolute before:left-0'>
                  Har lettere til moderate psykiske plager:
                  <ul className='text-sm text-gray-600 mt-2 ml-4 space-y-1'>
                    <li>• Angst / Sosial angst</li>
                    <li>• Depresjon</li>
                    <li>• Nevrospekterdiagnoser (Autisme/ADHD)</li>
                  </ul>
                </li>
                <li className='pl-6 relative before:content-["✅"] before:absolute before:left-0'>
                  Trenger et trygt, sosialt fellesskap
                </li>
              </ul>
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-semibold mb-4'>⛔ Ikke målgruppe (Nei)</h3>
              <ul className='space-y-2'>
                <li className='pl-6 relative before:content-["⛔"] before:absolute before:left-0'>
                  Aktive/alvorlige rusproblemer
                </li>
                <li className='pl-6 relative before:content-["⛔"] before:absolute before:left-0'>
                  Tunge psykiske lidelser som krever klinisk behandling
                </li>
                <li className='pl-6 relative before:content-["⛔"] before:absolute before:left-0'>
                  Aktive spiseforstyrrelser
                </li>
                <li className='pl-6 relative before:content-["⛔"] before:absolute before:left-0'>
                  Utagerende atferd som krever tett 1:1 oppfølging hele tiden
                </li>
              </ul>
            </div>
          </div>

          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200 mt-10'>
            De 3 sporene våre (Innholdet)
          </h2>
          <p className='mb-6'>
            Vi skreddersyr innholdet, men deler det inn i tre hovedveier basert på alder og mål. JobLoop tar vurderingen om hva som passer best.
          </p>

          <div className='space-y-4 mb-8'>
            <div className='bg-white border border-gray-200 border-l-5 border-l-[#4AB5A3] p-5 rounded-r-lg'>
              <span className='font-bold text-lg text-[#002B49] block mb-2'>1. Stå i skolen (13–16 år)</span>
              <p className='mb-2'>For elever i ungdomsskolen som sliter med å møte opp.</p>
              <ul className='text-sm space-y-1'>
                <li><strong>Mål:</strong> Økt trivsel, redusert fravær og å fullføre 10. trinn.</li>
                <li><strong>Innhold:</strong> Eleven er hos oss 1-2 dager i uken som et "pusterom". Vi bruker gaming og kreative verktøy pedagogisk for å bygge mestring.</li>
                <li><strong>Samarbeid:</strong> Tett dialog med skole og PPT for å sikre at dette støtter opp om skolegangen, ikke erstatter den.</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 border-l-5 border-l-[#4AB5A3] p-5 rounded-r-lg'>
              <span className='font-bold text-lg text-[#002B49] block mb-2'>2. Fullføre VGS (16–26 år)</span>
              <p className='mb-2'>For ungdom som har droppet ut, eller står i fare for å gjøre det.</p>
              <ul className='text-sm space-y-1'>
                <li><strong>Mål:</strong> Bestå enkeltfag eller fullføre vitnemål.</li>
                <li><strong>Innhold:</strong> En alternativ læringsarena uten klasseroms-presset. Her kan man lese til privatisteksamen i eget tempo, med tett oppfølging av våre veiledere.</li>
                <li><strong>Metode:</strong> Vi fjerner stresset og fokuserer på faglig mestring i trygge rammer.</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 border-l-5 border-l-[#4AB5A3] p-5 rounded-r-lg'>
              <span className='font-bold text-lg text-[#002B49] block mb-2'>3. Jobb og IT-kompetanse (16–26 år)</span>
              <p className='mb-2'>For unge voksne som står utenfor skole/jobb og ønsker en praktisk vei videre.</p>
              <ul className='text-sm space-y-1'>
                <li><strong>Mål:</strong> Praksisplass, lærlingplass eller ordinær jobb.</li>
                <li><strong>Innhold:</strong> Praktisk opplæring i ferdigheter bedriftene trenger: Koding, webutvikling, design eller drift.</li>
                <li><strong>Praksis:</strong> Vi kobler deltakerne med samarbeidsbedrifter for utplassering når de er klare for det.</li>
              </ul>
            </div>
          </div>

          <h2 className='text-2xl font-bold text-[#002B49] mb-6 pb-3 border-b-2 border-gray-200 mt-10'>
            Prosess og Rapportering
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Slik er prosessen</h3>
              <div className='space-y-3'>
                <div className='pl-4 border-l-3 border-gray-300'>
                  <strong className='text-[#002B49]'>1. Identifisering:</strong> Du finner en aktuell kandidat.
                </div>
                <div className='pl-4 border-l-3 border-gray-300'>
                  <strong className='text-[#002B49]'>2. Motivasjon:</strong> Du sender lenke til landingsside for å sjekke interesse.
                </div>
                <div className='pl-4 border-l-3 border-gray-300'>
                  <strong className='text-[#002B49]'>3. Henvisning:</strong> Du sender saken til JobLoop.
                </div>
                <div className='pl-4 border-l-3 border-[#4AB5A3]'>
                  <strong className='text-[#002B49]'>4. JobLoop tar over:</strong> Vi kartlegger, matcher og følger opp.
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Rapportering til deg</h3>
              <p className='text-sm mb-4'>Du skal være trygg på at saken følges opp.</p>
              <ul className='text-sm space-y-2 pl-5'>
                <li><strong>Inntaks-tilbakemelding:</strong> Vi gir beskjed om vilket spor vi velger etter kartlegging.</li>
                <li><strong>Månedsrapport:</strong> En enkel status på oppmøte, trivsel og progresjon.</li>
                <li><strong>Varsling:</strong> Vi bruker "Gult/Rødt flagg"-system. Du får beskjed med en gang hvis oppmøtet svikter, slik at vi kan sette inn tiltak sammen.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <div className='bg-[#002B49] text-white p-6 rounded-lg'>
            <h3 className='text-xl font-semibold mb-4 border-b border-white/20 pb-3'>🛠️ Dine Verktøy</h3>
            <p className='text-sm mb-6 opacity-90'>Alt du trenger for å håndtere saken.</p>
            <div className='space-y-2'>
              <Link href='/gjensidige-pilot/samtale' className='block text-white py-2 border-b border-white/10 hover:opacity-70 transition'>
                <span className='mr-2'>📞</span> Samtaleguide (Manus)
              </Link>
              <Link href='/gjensidige-pilot/pilot' className='block text-white py-2 border-b border-white/10 hover:opacity-70 transition'>
                <span className='mr-2'>🌐</span> Landingsside for kunde ↗
              </Link>
              <Link href='/gjensidige-pilot/prosess' className='block text-white py-2 border-b border-white/10 hover:opacity-70 transition'>
                <span className='mr-2'>🔄</span> Prosesskart
              </Link>
              <Link href='/gjensidige-pilot/forberedelse' className='block text-white py-2 border-b border-white/10 hover:opacity-70 transition'>
                <span className='mr-2'>📝</span> Sjekkliste til kunde
              </Link>
              <Link href='/gjensidige-pilot/rapport' className='block text-white py-2 hover:opacity-70 transition'>
                <span className='mr-2'>📊</span> Eksempel på rapport
              </Link>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg border-t-5 border-[#C3002F] shadow-md'>
            <h3 className='text-lg font-semibold mb-4'>Kontaktpunkt</h3>
            <p className='mb-4'>Er du usikker på om en sak passer?</p>
            <p className='mb-2'>
              <strong>Kim A. Brurok Stokkeland (Prosjektleder)</strong><br />
              Tlf: 97 46 91 10<br />
              E-post: kim@jobloop.no
            </p>
            <p className='text-sm text-gray-600 italic'>
              "Det er bedre å ta en telefon for mye enn en for lite."
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 pb-8'>
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

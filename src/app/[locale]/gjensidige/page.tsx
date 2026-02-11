import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';

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
    <div className="min-h-screen bg-[#f4f6f8] font-['Segoe_UI',Arial,sans-serif] text-[#333] leading-relaxed">
      <header className="bg-white py-5 border-b-[5px] border-[#002B49]">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#002B49]">
            Gjensidige | <span className="text-[#4AB5A3]">JobLoop</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1536px] mx-auto">
        <section className="bg-gradient-to-b from-[#002B49] to-[#001f35] text-white py-16 px-5 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nytt pilottilbud for kunder av Gjensidige</h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.
            </p>
            
            <div className="bg-[#001f35] w-full max-w-[600px] h-[340px] mx-auto rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-80">▶</div>
                <p className="text-gray-300">VIDEO: Hei, er du forsikret i Gjensidige?</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-6">Hvilket spor passer for deg?</h2>
            <p className="text-lg text-[#555] leading-relaxed max-w-2xl mx-auto">
              Vi har tre hovedveier, avhengig av hvor gammel du er og hva du trenger akkurat nå.{' '}
              <strong>Usikker?</strong> Det gjør ingenting. Vi finner ut av det sammen.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 px-5">
          <div className="max-w-[1536px] mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-[6px] border-t-[#4AB5A3]">
                <div className="bg-[#2c3e50] h-[180px] flex items-end p-4 relative">
                  <span className="text-white text-sm absolute bottom-3 left-4">Video: Stå i skolen</span>
                </div>
                <div className="p-6">
                  <span className="bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                    13 – 16 år
                  </span>
                  <h3 className="text-2xl font-bold text-[#002B49] mb-4">Stå i skolen</h3>
                  <p className="text-[#555] mb-4 leading-relaxed">
                    <strong>Konsept for utdanning:</strong> For deg som går på ungdomsskolen, men hvor hverdagen er tung og fraværet øker.
                  </p>
                  <p className="text-[#555] mb-4 leading-relaxed text-sm">
                    Vi bruker gaming og teknologi pedagogisk for å gi deg mestringsopplevelser. Du er hos oss 1–2 dager i uken som et avbrekk, mens vi samarbeider tett med skolen din.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#444] text-sm">
                    <li>Finn motivasjon gjennom interesse</li>
                    <li>Sosial trening i trygge rammer</li>
                    <li>Mål: Trives bedre og fullføre 10. trinn</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-[6px] border-t-[#4AB5A3]">
                <div className="bg-[#34495e] h-[180px] flex items-end p-4 relative">
                  <span className="text-white text-sm absolute bottom-3 left-4">Video: Bestå fag</span>
                </div>
                <div className="p-6">
                  <span className="bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                    16 – 26 år
                  </span>
                  <h3 className="text-2xl font-bold text-[#002B49] mb-4">Fullføre VGS</h3>
                  <p className="text-[#555] mb-4 leading-relaxed">
                    <strong>Konsept for utdanning:</strong> For deg som har falt ut av videregående, eller trenger en annen arena for å fullføre.
                  </p>
                  <p className="text-[#555] mb-4 leading-relaxed text-sm">
                    Dette er en alternativ læringsarena. Her kan du jobbe med fagene dine, få leksehjelp eller lese til privatisteksamen i ditt eget tempo, uten stresset fra et klasserom.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#444] text-sm">
                    <li>Individuell tilrettelegging</li>
                    <li>Fokus på enkeltfag eller vitnemål</li>
                    <li>Vi samarbeider med OT/Skole</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-[6px] border-t-[#4AB5A3]">
                <div className="bg-[#27ae60] h-[180px] flex items-end p-4 relative">
                  <span className="text-white text-sm absolute bottom-3 left-4">Video: Veien til jobb</span>
                </div>
                <div className="p-6">
                  <span className="bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                    16 – 26 år
                  </span>
                  <h3 className="text-2xl font-bold text-[#002B49] mb-4">Jobb og IT-kompetanse</h3>
                  <p className="text-[#555] mb-4 leading-relaxed">
                    <strong>Konsept for arbeid:</strong> For deg som står utenfor skole og jobb, og vil lære praktisk koding, design eller IT.
                  </p>
                  <p className="text-[#555] mb-4 leading-relaxed text-sm">
                    Her får du praktisk opplæring i ferdigheter bedriftene trenger. Vi fokuserer på &quot;tech&quot; og kreativitet som døråpner til arbeidslivet.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#444] text-sm">
                    <li>Lær koding, design og utvikling</li>
                    <li>Praksis i samarbeidsbedrifter</li>
                    <li>Veien mot lærlingplass eller jobb</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-5 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-12 text-center">Ofte stilte spørsmål</h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#002B49] mb-3">Koster det noe å være med?</h3>
                <p className="text-[#555] leading-relaxed">
                  Nei. For deg som får plass gjennom dette pilotprosjektet med Gjensidige, er hele tilbudet dekket av forsikringen din.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#002B49] mb-3">Er dette behandling eller terapi?</h3>
                <p className="text-[#555] leading-relaxed">
                  Nei. JobLoop er en lærings- og mestringsarena, ikke en klinikk. Vi fokuserer på dine interesser og styrker, ikke på diagnoser. Men vi tilpasser oss selvfølgelig hvis du har utfordringer som angst eller ADHD.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#002B49] mb-3">Må jeg være supergod i gaming eller koding?</h3>
                <p className="text-[#555] leading-relaxed">
                  Absolutt ikke! Det viktigste er at du har en interesse for det digitale. Vi tilpasser nivået til akkurat der du er, enten du er nybegynner eller har holdt på lenge.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#002B49] mb-3">Mister jeg plassen min på skolen?</h3>
                <p className="text-[#555] leading-relaxed">
                  Nei. Spesielt for &quot;Konsept for utdanning&quot; samarbeider vi tett med skolen din slik at du beholder elevstatusen din. Målet vårt er å hjelpe deg å fullføre.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-[#002B49] mb-3">Hva skjer hvis jeg ikke tør å møte opp fysisk?</h3>
                <p className="text-[#555] leading-relaxed">
                  Vi har full forståelse for at dørstokkmila kan være lang. Derfor kan vi starte digitalt via Discord eller Teams, slik at du blir trygg på veilederen din før du møter oss fysisk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EBF2F6] py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-6">Høres dette interessant ut?</h2>
            <p className="text-lg text-[#555] mb-6 leading-relaxed">
              Du trenger ikke vite nøyaktig hva som passer. Det er jobben vår.
            </p>
            
            <div className="mb-8 p-6 bg-white rounded-xl shadow-md border-2 border-[#4AB5A3]">
              <p className="text-[#555] mb-4 leading-relaxed">
                <strong className="text-[#002B49]">Usikker på om dette er noe for deg?</strong>
              </p>
              <p className="text-[#555] mb-6 leading-relaxed">
                Vi har laget en guide som hjelper deg å forberede deg på samtalen. Her kan du lese mer om hva vi snakker om, og hva det kan være nyttig å tenke over på forhånd.
              </p>
              <Link
                href="/gjensidige/forberedelse"
                className="inline-block bg-[#4AB5A3] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#3a9a8a] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Les mer om forberedelser →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-10 md:p-12 shadow-xl border-l-[10px] border-[#C3002F]">
              <h3 className="text-2xl font-bold text-[#002B49] mb-6">Ta kontakt for kartlegging</h3>
              <p className="text-[#555] mb-8 leading-relaxed">
                Send oss en e-post eller ring, så tar vi en uforpliktende prat. Vi finner ut hvilket spor som gir deg best utbytte.
              </p>
              
              <div className="mb-8">
                <p className="font-bold text-[#002B49] text-xl mb-4">Prosjektleder Kim</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                  <div className="flex items-center gap-2 text-[#555]">
                    <span className="text-2xl">📞</span>
                    <span>97 46 91 10</span>
                  </div>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <div className="flex items-center gap-2 text-[#555]">
                    <span className="text-2xl">✉️</span>
                    <a
                      href="mailto:kim@jobloop.no"
                      className="text-[#002B49] underline hover:text-[#4AB5A3] transition-colors font-medium"
                    >
                      kim@jobloop.no
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:kim@jobloop.no"
                  className="inline-block bg-[#C3002F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#a10026] hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Send e-post nå
                </a>
                <a
                  href="https://calendar.app.google/RRhkgNFmGyTTbYmd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#C3002F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#a10026] hover:scale-105 hover:shadow-lg transition-all duration-300"
                  aria-label="Book en samtale med Kim"
                >
                  Book en samtale med Kim
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#002B49] text-gray-300 text-center py-8 px-5">
          <p className="mb-2">Et samarbeid mellom Gjensidige Forsikring og JobLoop AS.</p>
          <p className="text-sm">Pilotprosjekt – Innhold kan endres underveis.</p>
        </footer>

      
       
      </main>
    </div>
  );
}

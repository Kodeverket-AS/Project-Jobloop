import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import GjensidigeImage from '@public/gjensidige2.jpg';

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
      <header className="bg-white py-5 border-b-[5px] border-[#002B49] shadow-sm">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#002B49] animate-fade-in">
            Gjensidige | <span className="text-[#4AB5A3]">JobLoop</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1536px] px-4 py-16 flex flex-col items-center gap-16 w-full mx-auto">
        <section className="bg-gradient-to-b from-[#002B49] to-[#001f35] text-white py-16 px-5 w-full rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer bg-[length:200%_100%] rounded-2xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-100">Nytt pilottilbud for kunder av Gjensidige</h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed animate-fade-in-up delay-200">
              Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.
            </p>
            
            <div className="flex justify-center animate-fade-in-up delay-300">
              <Image
                src={GjensidigeImage}
                alt="Gjensidige"
                width={600}
                height={340}
                className="w-full max-w-[600px] h-auto rounded-lg object-cover object-center border-2 border-white/30 aspect-video"
              />
            </div>
            {/* VIDEO placeholder 
            <div className="bg-[#001f35] w-full max-w-[600px] h-[340px] mx-auto rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center relative hover:border-white/50 transition-all duration-500 animate-fade-in-up delay-300 group cursor-pointer">
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4 opacity-80 animate-pulse-slow">▶</div>
                <p className="text-gray-300">VIDEO: Hei, er du forsikret i Gjensidige?</p>
              </div>
            </div>
            */}
          </div>
        </section>

        <section className="bg-white py-16 px-5 w-full rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-6 animate-fade-in-up delay-100">Hvilket spor passer for deg?</h2>
            <p className="text-lg text-[#555] leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
              Vi har tre hovedveier, avhengig av hvor gammel du er og hva du trenger akkurat nå.{' '}
              <strong>Usikker?</strong> Det gjør ingenting. Vi finner ut av det sammen.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 px-5 w-full rounded-2xl">
          <div className="max-w-[1536px] mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-t-[6px] border-t-[#4AB5A3] animate-fade-in-up delay-100 group">
                <div className="bg-[#2c3e50] h-[180px] flex items-end p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="text-white text-xs absolute bottom-3 left-4 z-10 opacity-90">Video kommer snart</span>
                </div>
                <div className="p-6">
                  <span className="bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                    13 – 16 år
                  </span>
                  <h3 className="text-2xl font-bold text-[#002B49] mb-4 group-hover:text-[#4AB5A3] transition-colors duration-300">Stå i skolen</h3>
                  <p className="text-[#555] mb-4 leading-relaxed">
                    <strong>Konsept for utdanning:</strong> For deg som går på ungdomsskolen, men hvor hverdagen er tung og fraværet øker.
                  </p>
                  <p className="text-[#555] mb-4 leading-relaxed text-sm">
                    Vi bruker gaming og teknologi pedagogisk for å gi deg mestringsopplevelser. Du er hos oss 1–2 dager i uken som et avbrekk, mens vi samarbeider tett med skolen din.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#444] text-sm">
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Finn motivasjon gjennom interesse</li>
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Sosial trening i trygge rammer</li>
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Mål: Trives bedre og fullføre 10. trinn</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-t-[6px] border-t-[#4AB5A3] animate-fade-in-up delay-200 group">
                <div className="bg-[#34495e]/70 h-[180px] flex items-end p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="text-white absolute bottom-3 left-4 z-10 opacity-90">Video kommer snart</span>
                </div>
                <div className="p-6">
                  <span className="bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                    16 – 26 år
                  </span>
                  <h3 className="text-2xl font-bold text-[#002B49] mb-4 group-hover:text-[#4AB5A3] transition-colors duration-300">Fullføre VGS</h3>
                  <p className="text-[#555] mb-4 leading-relaxed">
                    <strong>Konsept for utdanning:</strong> For deg som har falt ut av videregående, eller trenger en annen arena for å fullføre.
                  </p>
                  <p className="text-[#555] mb-4 leading-relaxed text-sm">
                    Dette er en alternativ læringsarena. Her kan du jobbe med fagene dine, få leksehjelp eller lese til privatisteksamen i ditt eget tempo, uten stresset fra et klasserom.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#444] text-sm">
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Individuell tilrettelegging</li>
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Fokus på enkeltfag eller vitnemål</li>
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Vi samarbeider med OT/Skole</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-t-[6px] border-t-[#4AB5A3] animate-fade-in-up delay-300 group">
                <div className="bg-[#27ae60] h-[180px] flex items-end p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="text-white absolute bottom-3 left-4 z-10 opacity-90">Video kommer snart</span>
                </div>
                <div className="p-6">
                  <span className="bg-[#EBF2F6] text-[#002B49] px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                    16 – 26 år
                  </span>
                  <h3 className="text-2xl font-bold text-[#002B49] mb-4 group-hover:text-[#4AB5A3] transition-colors duration-300">Jobb og IT-kompetanse</h3>
                  <p className="text-[#555] mb-4 leading-relaxed">
                    <strong>Konsept for arbeid:</strong> For deg som står utenfor skole og jobb, og vil lære praktisk koding, design eller IT.
                  </p>
                  <p className="text-[#555] mb-4 leading-relaxed text-sm">
                    Her får du praktisk opplæring i ferdigheter bedriftene trenger. Vi fokuserer på &quot;tech&quot; og kreativitet som døråpner til arbeidslivet.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#444] text-sm">
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Lær koding, design og utvikling</li>
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Praksis i samarbeidsbedrifter</li>
                    <li className="hover:text-[#4AB5A3] transition-colors duration-200">Veien mot lærlingplass eller jobb</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-5 w-full rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-12 text-center animate-fade-in-up delay-100">Ofte stilte spørsmål</h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6 hover:border-[#4AB5A3] transition-colors duration-300 animate-fade-in-up delay-100 group">
                <h3 className="text-xl font-bold text-[#002B49] mb-3 group-hover:text-[#4AB5A3] transition-colors duration-300">Koster det noe å være med?</h3>
                <p className="text-[#555] leading-relaxed">
                  Nei. For deg som får plass gjennom dette pilotprosjektet med Gjensidige, er hele tilbudet dekket av forsikringen din.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6 hover:border-[#4AB5A3] transition-colors duration-300 animate-fade-in-up delay-200 group">
                <h3 className="text-xl font-bold text-[#002B49] mb-3 group-hover:text-[#4AB5A3] transition-colors duration-300">Er dette behandling eller terapi?</h3>
                <p className="text-[#555] leading-relaxed">
                  Nei. JobLoop er en lærings- og mestringsarena, ikke en klinikk. Vi fokuserer på dine interesser og styrker, ikke på diagnoser. Men vi tilpasser oss selvfølgelig hvis du har utfordringer som angst eller ADHD.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6 hover:border-[#4AB5A3] transition-colors duration-300 animate-fade-in-up delay-300 group">
                <h3 className="text-xl font-bold text-[#002B49] mb-3 group-hover:text-[#4AB5A3] transition-colors duration-300">Må jeg være supergod i gaming eller koding?</h3>
                <p className="text-[#555] leading-relaxed">
                  Absolutt ikke! Det viktigste er at du har en interesse for det digitale. Vi tilpasser nivået til akkurat der du er, enten du er nybegynner eller har holdt på lenge.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6 hover:border-[#4AB5A3] transition-colors duration-300 animate-fade-in-up delay-400 group">
                <h3 className="text-xl font-bold text-[#002B49] mb-3 group-hover:text-[#4AB5A3] transition-colors duration-300">Mister jeg plassen min på skolen?</h3>
                <p className="text-[#555] leading-relaxed">
                  Nei. Spesielt for &quot;Konsept for utdanning&quot; samarbeider vi tett med skolen din slik at du beholder elevstatusen din. Målet vårt er å hjelpe deg å fullføre.
                </p>
              </div>

              <div className="pb-6 animate-fade-in-up delay-500 group">
                <h3 className="text-xl font-bold text-[#002B49] mb-3 group-hover:text-[#4AB5A3] transition-colors duration-300">Hva skjer hvis jeg ikke tør å møte opp fysisk?</h3>
                <p className="text-[#555] leading-relaxed">
                  Vi har full forståelse for at dørstokkmila kan være lang. Derfor kan vi starte digitalt via Discord eller Teams, slik at du blir trygg på veilederen din før du møter oss fysisk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EBF2F6] py-16 px-5 w-full rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4AB5A3]/5 to-transparent rounded-2xl"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-6 animate-fade-in-up delay-100">Høres dette interessant ut?</h2>
            <p className="text-lg text-[#555] mb-6 leading-relaxed animate-fade-in-up delay-200">
              Du trenger ikke vite nøyaktig hva som passer. Det er jobben vår.
            </p>
            
            <div className="mb-8 p-6 bg-white rounded-xl shadow-md border-2 border-[#4AB5A3] hover:shadow-xl hover:border-[#3a9a8a] transition-all duration-500 animate-fade-in-up delay-200 group">
              <p className="text-[#555] mb-4 leading-relaxed">
                <strong className="text-[#002B49] group-hover:text-[#4AB5A3] transition-colors duration-300">Usikker på om dette er noe for deg?</strong>
              </p>
              <p className="text-[#555] mb-6 leading-relaxed">
                Vi har laget en guide som hjelper deg å forberede deg på samtalen. Her kan du lese mer om hva vi snakker om, og hva det kan være nyttig å tenke over på forhånd.
              </p>
              <Link
                href="/gjensidige/forberedelse"
                className="inline-block bg-[#4AB5A3] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#3a9a8a] hover:scale-110 hover:shadow-xl transition-all duration-300 transform"
              >
                Les mer om forberedelser →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-10 md:p-12 shadow-xl border-l-[10px] border-[#C3002F] hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-[#002B49] mb-6">Ta kontakt for kartlegging</h3>
              <p className="text-[#555] mb-8 leading-relaxed">
                Send oss en e-post eller ring, så tar vi en uforpliktende prat. Vi finner ut hvilket spor som gir deg best utbytte.
              </p>
              
              <div className="mb-8">
                <p className="font-bold text-[#002B49] text-xl mb-4">Prosjektleder Kim</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                  <div className="flex items-center gap-2 text-[#555] hover:text-[#4AB5A3] transition-colors duration-300">
                    <span className="text-2xl animate-pulse-slow">📞</span>
                    <span>97 46 91 10</span>
                  </div>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <div className="flex items-center gap-2 text-[#555]">
                    <span className="text-2xl">✉️</span>
                    <a
                      href="mailto:kim@jobloop.no"
                      className="text-[#002B49] underline hover:text-[#4AB5A3] transition-colors font-medium hover:scale-105 inline-block transform"
                    >
                      kim@jobloop.no
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:kim@jobloop.no"
                  className="inline-block bg-[#C3002F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#a10026] hover:scale-110 hover:shadow-xl transition-all duration-300 transform"
                >
                  Send e-post nå
                </a>
                <a
                  href="https://calendar.app.google/RRhkgNFmGyTTbYmd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#C3002F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#a10026] hover:scale-110 hover:shadow-xl transition-all duration-300 transform"
                  aria-label="Book en samtale med Kim"
                >
                  Book en samtale med Kim
                </a>
              </div>
            </div>
          </div>
        </section>



      
       
      </main>
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { BookKimButton } from '@/components/buttons';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gjensidige & JobLoop - Landingsside for kunder',
    description: 'Informasjon for kunder av Gjensidige om pilottilbudet',
  };
}

export default function GjensidigeKunde() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] font-['Segoe_UI',Arial,sans-serif] text-[#333] leading-relaxed">
      <header className="bg-white py-5 flex justify-between items-center border-b-[5px] border-[#002B49]">
        <div className="w-full max-w-[1536px] mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#002B49]">
            Gjensidige | <span className="text-[#4AB5A3]">JobLoop</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1536px] px-4 py-16 flex flex-col items-center gap-16 w-full mx-auto">
      <section className="bg-gradient-to-b from-[#002B49] to-[#003d6b] text-white py-16 px-5 w-full rounded-2xl">
        <div className="w-full max-w-[1536px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0 order-2 lg:order-1">
              <Image 
                src="/gjensidige.jpg" 
                alt="Gjensidige" 
                width={384}
                height={512}
                className="w-64 md:w-80 lg:w-96 h-auto rounded-lg shadow-2xl object-contain"
              />
            </div>
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl mb-6 font-bold">Nytt tilbud fra Gjensidige & JobLoop</h1>
              <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-6">
                Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.
              </p>
              <div className="space-y-3 text-lg opacity-90 leading-relaxed">
                <p>
                  Dette er ikke et intervju eller en test. Det er en uforpliktende prat hvor vi skal finne ut sammen hva som passer best for deg.
                </p>
                <p>
                  Vi er her for å lytte til deg, forstå dine interesser og hjelpe deg med å finne veien videre. Du trenger ikke å være nervøs eller forberedt på noe spesielt – vi møter deg akkurat der du er.
                </p>
                <p>
                  Samtalen handler om deg, dine drømmer og hva du ønsker å oppnå. Sammen finner vi ut hvilket spor som passer best for din situasjon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-5 w-full rounded-2xl">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B49] mb-8 text-center">Før praten</h2>
          <div className="max-w-4xl mx-auto space-y-8 text-[#555]">
            <div className="text-center mb-8">
              <p className="text-lg mb-4">
                Dette er et tilbud fra Gjensidige og JobLoop. Vi i JobLoop er glade for å få muligheten til å bli kjent med deg!
              </p>
              <p className="mb-4">
                Du trenger ikke å grue deg – vi er her for å hjelpe deg finne veien videre.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#2C8C7D]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-3xl bg-[#EBF2F6] w-12 h-12 rounded-full flex items-center justify-center">🏫</span>
                Hvor er du nå?
              </h3>
              <p className="mb-3 text-[#555]">Vi prøver å få et bilde av hvordan hverdagen din ser ut. Tenk litt over:</p>
              <ul className="list-disc pl-6 space-y-2.5 text-[#555]">
                <li>Går du på skole nå? (Hvilket trinn / linje?)</li>
                <li>Har du droppet ut, eller har du mye fravær?</li>
                <li>Har du hatt noen jobber eller praksisplasser tidligere?</li>
                <li>Hvordan ser en typisk dag ut for deg?</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#4AB5A3]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-3xl bg-[#e0f2f1] w-12 h-12 rounded-full flex items-center justify-center">🎮</span>
                Hva liker du å drive med?
              </h3>
              <p className="mb-3 text-[#555]">Vi bruker interessene dine som verktøy. Det er viktig at vi vet hva du faktisk synes er gøy!</p>
              <ul className="list-disc pl-6 space-y-2.5 text-[#555]">
                <li>Gamer du? (Hva spiller du?)</li>
                <li>Liker du koding, design, tegning, eller videoredigering?</li>
                <li>Har du andre hobbyer? (Musikk, dyr, trening, matlaging?)</li>
                <li>Er det noe du alltid har hatt lyst til å prøve, men ikke har fått til?</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#2C8C7D]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-3xl bg-[#EBF2F6] w-12 h-12 rounded-full flex items-center justify-center">🤝</span>
                Hvem andre er med på laget?
              </h3>
              <p className="mb-3 text-[#555]">
                For at vi skal kunne hjelpe deg best mulig, må vi ofte samarbeide med andre systemer.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 mb-4 text-[#555]">
                <li>Har du kontakt med OT (Oppfølgingstjenesten)?</li>
                <li>Er du registrert hos NAV?</li>
                <li>Har du kontakt med BUP eller PPT?</li>
                <li>Er det noen andre som støtter deg i hverdagen?</li>
              </ul>
              <div className="bg-gradient-to-r from-[#EBF2F6] to-[#e0f2f1] p-4 rounded-lg border-l-4 border-[#2C8C7D] shadow-sm">
                <p className="text-sm text-[#555]">
                  <strong className="text-[#002B49]">Tips:</strong> Hvis du har navn eller telefonnummer til en kontaktperson der, er det supert om du finner det frem til samtalen.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#4AB5A3]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-3xl bg-[#e0f2f1] w-12 h-12 rounded-full flex items-center justify-center">🚀</span>
                Hva drømmer du om?
              </h3>
              <p className="mb-3 text-[#555]">Dette er kanskje det viktigste. Vi skal jobbe mot DINE mål, ikke alle andres.</p>
              <ul className="list-disc pl-6 space-y-2.5 text-[#555]">
                <li>Vil du tilbake på skolebenken og fullføre VGS?</li>
                <li>Vil du lære deg koding og komme ut i jobb?</li>
                <li>Eller ønsker du bare å komme deg litt ut av huset og treffe folk?</li>
                <li>Har du noen konkrete mål eller drømmer du vil oppnå?</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#fff5f5] to-[#fffafa] p-8 rounded-lg border-l-4 border-[#C3002F] shadow-md">
              <p className="font-semibold text-[#002B49] mb-3 text-lg">💡 Husk:</p>
              <p className="mb-3 text-[#555] leading-relaxed">
                Du trenger ikke å være ekspert i noe som helst. Det viktigste er at du har en interesse for det digitale, eller at du er nysgjerrig på å lære. Vi tilpasser alt til akkurat der du er.
              </p>
              <p className="text-[#555] leading-relaxed">
                Det er helt greit hvis du ikke vet alt enda – det er nettopp derfor vi skal snakke sammen. Vi finner ut av det sammen!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF2F6] py-16 px-5 w-full rounded-2xl">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002B49] mb-6">Snart snakkes vi!</h2>
            <p className="text-xl text-[#555] mb-4 max-w-2xl mx-auto">
              Vi gleder oss til å høre fra deg og finne ut sammen hvilket spor som passer best for deg.
            </p>
            <p className="text-lg text-[#555] max-w-2xl mx-auto">
              Du trenger ikke å være nervøs eller forberedt på noe spesielt. Dette er bare en hyggelig prat hvor vi blir kjent med hverandre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#4AB5A3]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-3xl bg-[#e0f2f1] w-12 h-12 rounded-full flex items-center justify-center">💬</span>
                Hva skjer i samtalen?
              </h3>
              <p className="text-[#555] mb-4 leading-relaxed">
                Vi starter med å bli kjent med hverandre. Vi vil høre om deg, dine interesser og hva du håper på å oppnå.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-[#555] text-sm">
                <li>Vi snakker om hvor du er nå i livet ditt</li>
                <li>Vi utforsker hva som interesserer deg</li>
                <li>Vi diskuterer hvilket spor som kan passe best</li>
                <li>Du får svar på alle spørsmålene dine</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#4AB5A3]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-3xl bg-[#e0f2f1] w-12 h-12 rounded-full flex items-center justify-center">⏱️</span>
                Hvor lenge varer det?
              </h3>
              <p className="text-[#555] mb-4 leading-relaxed">
                Samtalen tar vanligvis mellom 30-45 minutter. Vi tar oss god tid, så det er ingen stress.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                Du bestemmer selv hvor mye du vil dele. Det er helt greit å ta pauser eller si at du ikke er klar til å snakke om noe ennå.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-[#EBF2F6] p-8 rounded-lg shadow-lg border-l-[10px] border-[#2C8C7D] mb-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#2C8C7D] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                ✅
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#002B49] mb-3">Etter samtalen</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                  Etter at vi har snakket sammen, tar vi en vurdering av hva som passer best for deg. Vi vil gi deg tilbakemelding på hvilket spor vi anbefaler, og så kan vi starte når du er klar.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-[#002B49] text-lg mb-4">Du kan forvente:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#2C8C7D] text-xl">✓</span>
                  <span className="text-[#555] text-sm">En tydelig plan for hva som skjer videre</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2C8C7D] text-xl">✓</span>
                  <span className="text-[#555] text-sm">Informasjon om hvilket spor vi anbefaler og hvorfor</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2C8C7D] text-xl">✓</span>
                  <span className="text-[#555] text-sm">Mulighet til å stille spørsmål når som helst</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2C8C7D] text-xl">✓</span>
                  <span className="text-[#555] text-sm">Støtte gjennom hele prosessen</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#EBF2F6] to-white py-20 px-5 w-full">
            <div className="w-full mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#002B49] mb-6">Høres dette interessant ut?</h2>
                <p className="text-xl text-[#555] mb-4 max-w-2xl mx-auto leading-relaxed">
                  Du trenger ikke vite nøyaktig hva som passer. Det er jobben vår.
                </p>
              </div>
              
              <div className="bg-white max-w-4xl mx-auto p-10 md:p-14 rounded-xl shadow-xl border-l-[10px] border-[#002B49]">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="bg-[#002B49] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl">
                      📧
                    </div>
                    <h3 className="text-3xl font-bold text-[#002B49]">Ta kontakt for kartlegging</h3>
                  </div>
                  
                  <p className="text-lg text-[#555] mb-8 leading-relaxed max-w-2xl mx-auto">
                    Send oss en e-post eller ring, så tar vi en uforpliktende prat. Vi finner ut hvilket spor som gir deg best utbytte.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#EBF2F6] to-[#e0f2f1] p-6 rounded-lg mb-8 max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        <Image 
                          src="/Kim.jpg" 
                          alt="Prosjektleder Kim" 
                          width={128}
                          height={128}
                          className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <p className="font-bold text-[#002B49] text-xl mb-4">Prosjektleder Kim</p>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 text-lg">
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
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:kim@jobloop.no"
                      className="inline-block bg-[#002B49] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#004d7a] hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Send e-post nå
                    </a>
                    <BookKimButton />
                  </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-[#002B49] mb-3">Vi gleder oss til å snakke med deg!</p>
                <p className="text-lg text-[#555]">Hilsen Kim i JobLoop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

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
    <main className="min-h-screen bg-[#f4f6f8] font-['Segoe_UI',Arial,sans-serif] text-[#333] leading-relaxed">
      <header className="bg-white px-[10%] py-5 flex justify-between items-center border-b-[5px] border-[#002B49]">
        <div className="text-2xl font-bold text-[#002B49]">
          Gjensidige | <span className="text-[#4AB5A3]">JobLoop</span>
        </div>
      
      </header>

      <section className="bg-[#002B49] text-white py-16 px-5 text-center">
        <h1 className="text-4xl mb-4 font-bold">Nytt tilbud fra Gjensidige & JobLoop</h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
          Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.
        </p>
      </section>

      <section className="bg-white py-12 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002B49] mb-8 text-center">Før praten</h2>
          <div className="space-y-8 text-[#555]">
            <div>
              <p className="text-lg mb-4">
                Dette er et tilbud fra Gjensidige og JobLoop. Vi i JobLoop er glade for å få muligheten til å bli kjent med deg!
              </p>
              <p className="mb-4">
                Dette er ikke et intervju eller en test. Det er en uforpliktende prat hvor vi skal finne ut sammen hva som passer best for deg. Du trenger ikke å grue deg – vi er her for å hjelpe deg finne veien videre.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-2xl">🏫</span>
                Hvor er du nå?
              </h3>
              <p className="mb-3">Vi prøver å få et bilde av hvordan hverdagen din ser ut. Tenk litt over:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Går du på skole nå? (Hvilket trinn / linje?)</li>
                <li>Har du droppet ut, eller har du mye fravær?</li>
                <li>Har du hatt noen jobber eller praksisplasser tidligere?</li>
                <li>Hvordan ser en typisk dag ut for deg?</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-2xl">🎮</span>
                Hva liker du å drive med?
              </h3>
              <p className="mb-3">Vi bruker interessene dine som verktøy. Det er viktig at vi vet hva du faktisk synes er gøy!</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gamer du? (Hva spiller du?)</li>
                <li>Liker du koding, design, tegning, eller videoredigering?</li>
                <li>Har du andre hobbyer? (Musikk, dyr, trening, matlaging?)</li>
                <li>Er det noe du alltid har hatt lyst til å prøve, men ikke har fått til?</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                Hvem andre er med på laget?
              </h3>
              <p className="mb-3">
                For at vi skal kunne hjelpe deg best mulig, må vi ofte samarbeide med andre systemer.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Har du kontakt med OT (Oppfølgingstjenesten)?</li>
                <li>Er du registrert hos NAV?</li>
                <li>Har du kontakt med BUP eller PPT?</li>
                <li>Er det noen andre som støtter deg i hverdagen?</li>
              </ul>
              <div className="bg-[#EBF2F6] p-4 rounded border-l-4 border-[#4AB5A3]">
                <p className="text-sm">
                  <strong>Tips:</strong> Hvis du har navn eller telefonnummer til en kontaktperson der, er det supert om du finner det frem til samtalen.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Hva drømmer du om?
              </h3>
              <p className="mb-3">Dette er kanskje det viktigste. Vi skal jobbe mot DINE mål, ikke alle andres.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vil du tilbake på skolebenken og fullføre VGS?</li>
                <li>Vil du lære deg koding og komme ut i jobb?</li>
                <li>Eller ønsker du bare å komme deg litt ut av huset og treffe folk?</li>
                <li>Har du noen konkrete mål eller drømmer du vil oppnå?</li>
              </ul>
            </div>

            <div className="bg-[#EBF2F6] p-6 rounded-lg border-l-4 border-[#4AB5A3]">
              <p className="font-semibold text-[#002B49] mb-2">Husk:</p>
              <p className="mb-2">
                Du trenger ikke å være ekspert i noe som helst. Det viktigste er at du har en interesse for det digitale, eller at du er nysgjerrig på å lære. Vi tilpasser alt til akkurat der du er.
              </p>
              <p>
                Det er helt greit hvis du ikke vet alt enda – det er nettopp derfor vi skal snakke sammen. Vi finner ut av det sammen!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF2F6] py-16 px-5">
        <div className="max-w-4xl mx-auto">
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
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#4AB5A3]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-2xl">💬</span>
                Hva skjer i samtalen?
              </h3>
              <p className="text-[#555] mb-3">
                Vi starter med å bli kjent med hverandre. Vi vil høre om deg, dine interesser og hva du håper på å oppnå.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#555] text-sm">
                <li>Vi snakker om hvor du er nå i livet ditt</li>
                <li>Vi utforsker hva som interesserer deg</li>
                <li>Vi diskuterer hvilket spor som kan passe best</li>
                <li>Du får svar på alle spørsmålene dine</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#002B49]">
              <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
                <span className="text-2xl">⏱️</span>
                Hvor lenge varer det?
              </h3>
              <p className="text-[#555] mb-3">
                Samtalen tar vanligvis mellom 30-45 minutter. Vi tar oss god tid, så det er ingen stress.
              </p>
              <p className="text-[#555] text-sm">
                Du bestemmer selv hvor mye du vil dele. Det er helt greit å ta pauser eller si at du ikke er klar til å snakke om noe ennå.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-[10px] border-[#4AB5A3] mb-8">
            <h3 className="text-2xl font-bold text-[#002B49] mb-4">Etter samtalen</h3>
            <p className="text-[#555] mb-4">
              Etter at vi har snakket sammen, tar vi en vurdering av hva som passer best for deg. Vi vil gi deg tilbakemelding på hvilket spor vi anbefaler, og så kan vi starte når du er klar.
            </p>
            <div className="space-y-2 text-[#555]">
              <p className="font-semibold text-[#002B49]">Du kan forvente:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>En tydelig plan for hva som skjer videre</li>
                <li>Informasjon om hvilket spor vi anbefaler og hvorfor</li>
                <li>Mulighet til å stille spørsmål når som helst</li>
                <li>Støtte gjennom hele prosessen</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-[#002B49] mb-2">Vi gleder oss til å snakke med deg!</p>
            <p className="text-[#555]">book time med kim </p>
          </div>
        </div>
      </section>

     
    </main>
  );
}

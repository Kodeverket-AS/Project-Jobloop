import type { Metadata } from 'next';
import Image from 'next/image';
import { BookKimButton } from '@/components/buttons';
import { QuestionCard } from './components/QuestionCard';
import { InfoCard } from './components/InfoCard';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { questions, infoCards, expectations } from './data';
import GjensidigeImage from '@public/gjensidige2.jpg';
import KimImage from '@public/Kim.jpg';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Forberedelse - Gjensidige & JobLoop',
    description: 'Forbered deg på samtalen med JobLoop',
  };
}

export default function Forberedelse() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] font-['Segoe_UI',Arial,sans-serif] text-[#333] leading-relaxed">
      <header className="bg-white py-5 flex justify-between items-center border-b-[5px] border-[#002B49] shadow-sm">
        <div className="w-full max-w-[1536px] mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#002B49] animate-fade-in">
            Gjensidige | <span className="text-[#4AB5A3]">JobLoop</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1536px] px-4 py-16 flex flex-col items-center gap-16 w-full mx-auto">
      <section className="bg-gradient-to-b from-[#002B49] to-[#003d6b] text-white py-16 px-5 w-full rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer bg-[length:200%_100%] rounded-2xl" />
        <div className="w-full max-w-[1536px] mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0 order-2 lg:order-1 animate-fade-in-up delay-100 w-64 md:w-72 lg:w-80">
              <div className="aspect-[3/4] relative rounded-lg shadow-2xl overflow-hidden">
                <Image 
                  src={GjensidigeImage} 
                  alt="Gjensidige" 
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl mb-6 font-bold animate-fade-in-up delay-200">Nytt tilbud fra Gjensidige & JobLoop</h1>
              <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-6 animate-fade-in-up delay-300">
                Vi bruker interessene dine til å bygge mestring, motivasjon og en vei videre i livet.
              </p>
              <div className="space-y-3 text-lg opacity-90 leading-relaxed animate-fade-in-up delay-400">
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
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-[#002B49] mb-8 text-center">Før praten</h2>
          </AnimateOnScroll>
          <div className="max-w-4xl mx-auto space-y-8 text-[#555]">
            <AnimateOnScroll>
              <div className="text-center mb-8">
                <p className="text-lg mb-4">
                  Dette er et tilbud fra Gjensidige og JobLoop. Vi i JobLoop er glade for å få muligheten til å bli kjent med deg!
                </p>
                <p className="mb-4">
                  Du trenger ikke å grue deg – vi er her for å hjelpe deg finne veien videre.
                </p>
              </div>
            </AnimateOnScroll>

            {questions.map((q, idx) => (
              <AnimateOnScroll key={idx}>
                <QuestionCard {...q} />
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll>
              <div className="bg-gradient-to-r from-[#fff5f5] to-[#fffafa] p-8 rounded-lg border-l-4 border-[#C3002F] shadow-md">
                <p className="font-semibold text-[#002B49] mb-3 text-lg">💡 Husk:</p>
                <p className="mb-3 text-[#555] leading-relaxed">
                  Du trenger ikke å være ekspert i noe som helst. Det viktigste er at du har en interesse for det digitale, eller at du er nysgjerrig på å lære. Vi tilpasser alt til akkurat der du er.
                </p>
                <p className="text-[#555] leading-relaxed">
                  Det er helt greit hvis du ikke vet alt enda – det er nettopp derfor vi skal snakke sammen. Vi finner ut av det sammen!
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF2F6] py-16 px-5 w-full rounded-2xl">
        <div className="w-full mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#002B49] mb-6">Snart snakkes vi!</h2>
              <p className="text-xl text-[#555] mb-4 max-w-2xl mx-auto">
                Vi gleder oss til å høre fra deg og finne ut sammen hvilket spor som passer best for deg.
              </p>
              <p className="text-lg text-[#555] max-w-2xl mx-auto">
                Du trenger ikke å være nervøs eller forberedt på noe spesielt. Dette er bare en hyggelig prat hvor vi blir kjent med hverandre.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {infoCards.map((card, idx) => (
              <AnimateOnScroll key={idx}>
                <InfoCard {...card} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
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
                {expectations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#2C8C7D] text-xl">✓</span>
                    <span className="text-[#555] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </AnimateOnScroll>

          <div className="bg-gradient-to-b from-[#EBF2F6] to-white py-20 px-5 w-full">
            <div className="w-full mx-auto px-4">
              <AnimateOnScroll>
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#002B49] mb-6">Høres dette interessant ut?</h2>
                  <p className="text-xl text-[#555] mb-4 max-w-2xl mx-auto leading-relaxed">
                    Du trenger ikke vite nøyaktig hva som passer. Det er jobben vår.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
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
                          src={KimImage} 
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
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="mt-12 text-center">
                  <p className="text-2xl font-bold text-[#002B49] mb-3">Vi gleder oss til å snakke med deg!</p>
                  <p className="text-lg text-[#555]">Hilsen Kim i JobLoop</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

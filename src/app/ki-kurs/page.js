import Image from "next/image";
import JobloopFarge from "../../../public/JobloopFarge.svg";
import KiImage from "../../../public/ki.jpg";
import PictureKi from "../../../components/picture-ki.png";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function KiKurs() {
  return (
    <main className="min-h-screen bg-jobloop-primary-green/20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 flex flex-col items-center justify-center">
            <p className={`text-4xl text-jobloop-primary-grey font-medium ${caveat.className}`}>Nytt kurstilbud fra</p>
            <div className="flex items-center space-x-4">
              <Image
                src={JobloopFarge}
                alt="Jobloop Logo"
                width={180}
                height={180}
                className="w-200 h-200"
              />
            </div>
            <div className="w-full bg-white-50 rounded-3xl p-6 text-center border-2 border-jobloop-primary-orange">
              <p className="text-lg text-jobloop-primary-grey font-medium mb-2">Spørsmål eller påmelding:</p>
              <a 
                href="mailto:oda.kristin@jobloop.no"
                className="text-jobloop-primary-orange font-semibold text-lg hover:underline transition-colors duration-300"
              >
                oda.kristin@jobloop.no
              </a>
            </div>
          </div>
          
          <div className="bg-jobloop-primary-green/50 border-8 border-white rounded-3xl p-8 text-center flex items-center justify-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-[2.5] ${caveat.className}`}>
              Digital selvtillit og<br/>
              KI-Kompetanse for<br/>
              deg som er over 50
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 text-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full">
              <Image
                src={KiImage}
                alt="Kunstig intelligens og teknologi"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-center md:text-left">
                Mange dyktige, erfarne medarbeidere opplever at teknologien løper litt fortere enn komfortsonen. 
                Samtidig sitter de på verdifull erfaring som virkelig kan skinne - hvis de får riktig digital verktøykasse.
              </p>
              
              <p className="text-center md:text-left">
                I stedet for enda en fruktkurv, gi seniorene på laget noe de faktisk vil takke deg for: 
                trygghet i møte med KI, smart digitale verktøy og en følelse av å være med - ikke hengende etter.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-jobloop-primary-green">Vi tilbyr et praktisk og motiverende kursløp:</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-jobloop-primary-green/20">
            <div className="grid gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Varighet</h3>
                  <p className="text-lg">1 hel dag i uken, over 12 uker (oppstart uke 47 inkludert 2 uker juleferie = <span className="font-bold text-jobloop-primary-orange">60 timer med undervisning</span>)</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Innhold</h3>
                  <p className="text-lg">Digital oppfriskning + praktisk bruk av KI i arbeidshverdagen (ingen tech-prat - bare «hvordan gjør jeg dette i praksis?»)</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Format for bedrifter</h3>
                  <p className="text-lg">Eget kurs for opptil 8 deltakere - <span className="font-bold text-jobloop-primary-orange text-2xl">45.000 kr</span></p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Åpen påmelding</h3>
                  <p className="text-lg"><span className="font-bold text-jobloop-primary-orange text-2xl">8.500 kr</span> per deltaker</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Sted</h3>
                  <p className="text-lg">Hos dere, i våre lokaler, eller digitalt (med kaffe og tålmodighet inkludert )</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="flex justify-center">
            <Image
              src={PictureKi}
              alt="KI kurs informasjon"
              width={800}
              height={600}
              className="w-full max-w-4xl h-auto rounded-2xl "
            />
          </div>
        </div>

      </div>
    </main>
  );
}

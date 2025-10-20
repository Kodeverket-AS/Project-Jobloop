import Image from "next/image";
import JobloopFarge from "../../public/JobloopFarge.svg";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
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
        <div className="w-full bg-white-50 rounded-3xl p-6 text-center border-2 border-jobloop-primary-orange hover:shadow-lg transition-all duration-300">
          <p className="text-lg text-jobloop-primary-grey font-medium mb-2">Spørsmål eller påmelding:</p>
          <a 
            href="mailto:oda.kristin@jobloop.no"
            className="text-jobloop-primary-orange font-semibold text-lg hover:underline transition-colors duration-300"
          >
            oda.kristin@jobloop.no
          </a>
        </div>
      </div>
      
      <div className="bg-jobloop-primary-green/50 border-8 border-white rounded-3xl p-8 text-center flex items-center justify-center hover:shadow-lg transition-all duration-300">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-[2.5] ${caveat.className}`}>
          Digital selvtillit og<br/>
          KI-Kompetanse for<br/>
          deg som er over 50 !
        </h1>
      </div>
    </div>
  );
}

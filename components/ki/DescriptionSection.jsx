import Image from "next/image";
import KiImage from "../../public/ki.jpg";

export default function DescriptionSection() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 text-lg mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <Image
            src={KiImage}
            alt="Kunstig intelligens og teknologi"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
  );
}

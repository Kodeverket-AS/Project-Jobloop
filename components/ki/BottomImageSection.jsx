import Image from "next/image";
import PictureKi from "../picture-ki.png";

export default function BottomImageSection() {
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="flex justify-center">
        <Image
          src={PictureKi}
          alt="KI kurs informasjon"
          width={800}
          height={600}
          className="w-full max-w-4xl h-auto rounded-2xl"
        />
      </div>
    </div>
  );
}

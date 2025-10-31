import Image from "next/image";

export default function BottomImageSection() {
  return (
    <div className="w-full ">
      <div className="flex justify-center">
        <Image
          src="/picture-ki.png"
          alt="KI kurs informasjon"
          width={800}
          height={600}
          className="w-full max-w-4xl h-auto rounded-2xl"
        />
      </div>
    </div>
  );
}

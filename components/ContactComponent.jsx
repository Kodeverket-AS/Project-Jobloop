"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkButton, KontaktButton } from "./Buttons";

export default function ContactComponent() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 px-8 py-20 md:px-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kv-black pb-4 border-b-4 border-jobloop-primary-green w-fit mx-auto">
          Kontakt oss
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-6 mb-8 leading-relaxed">
          Trenger du hjelp eller ønsker å samarbeide med oss?
        </p>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <KontaktButton
            Path={"/kontakt"}
            Text={"Kontakt Oss"}
          />
        </div>
      </div>
    </div>
  );
}

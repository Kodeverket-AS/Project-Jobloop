"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ForSchool({ content, situation }) {
  return (
    <div className="w-full max-w-[1536px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-linear-to-br from-jobloop-primary-green/20 via-white to-jobloop-primary-green/10 rounded-2xl p-8 shadow-lg border border-jobloop-primary-green/20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src={content.image4 ? content.image4 : ""}
              width={500}
              height={500}
              alt={content.alt4 ? content.alt4 : ""}
              className="object-cover w-full h-80 lg:h-96 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-kv-black pb-3 border-b-2 border-jobloop-primary-green w-fit">
              {"For " + situation}
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <PortableText value={content.school} />
          </div>
        </div>
      </div>
    </div>
  );
}
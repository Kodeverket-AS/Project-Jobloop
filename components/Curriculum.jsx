"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Curriculum({ content, course }) {
  return (
    <div className="w-full max-w-[1536px] mx-auto px-4">
      <div className="bg-gradient-to-br from-jobloop-primary-green/10 via-white to-jobloop-primary-orange/10 rounded-2xl p-8 shadow-lg border border-jobloop-primary-green/20">
        <div className="text-center mb-8">
          <h2 className="text-kv-black text-2xl md:text-3xl font-bold border-b-4 pb-3 border-jobloop-primary-green w-fit mx-auto">
            {"Hva lærer du i " + course + "?"}
          </h2>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mx-auto">
          <PortableText value={content.curriculum} />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Curriculum({ content, course }) {
  return (
    <div className="flex flex-col gap-6   w-full 2xl:max-w-[1600px]">
      <div className="text-center">
        <h2 className="text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit mx-auto">
          {"Hva lærer du i " + course + "?"}
        </h2>
      </div>
      <div className="text-gray-600 text-base xl:leading-relaxed lg:text-xl max-w-4xl mx-auto">
        <PortableText value={content.curriculum} />
      </div>
    </div>
  );
}

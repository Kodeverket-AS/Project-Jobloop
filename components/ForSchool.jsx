"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ForSchool({ content, situation }) {
  return (
    <div className="flex flex-col justify-between w-screen px-5 py-20 md:flex-row md:px-12">
      <div className="w-full h-80 md:w-96 md:pt-3 md:h-96">
        <Image
          src={content.image4 ? content.image4 : ""}
          width={500}
          height={500}
          alt={content.alt4 ? content.alt4 : ""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full gap-3 py-10 md:w-1/2 md:py-0 md:pl-3">
        <h2 className="pb-3 border-b-2 border-jobloop-primary-green">
          {"For " + situation}
        </h2>
        <PortableText value={content.school} />
      </div>
    </div>
  );
}
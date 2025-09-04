"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ForSchool({ content, situation }) {
  return (
    <div className="flex flex-col justify-between w-full px-4 md:flex-row md:px-0 2xl:max-w-[1600px]">
      <div className="w-full h-80 md:w-96 md:pt-3 md:h-96">
        <Image
          src={content.image4 ? content.image4 : ""}
          width={500}
          height={500}
          alt={content.alt4 ? content.alt4 : ""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full gap-3 md:w-1/2">
        <h2 className="text-xl md:text-2xl lg:text-3xl pb-3 border-b-2 border-jobloop-primary-green">
          {"For " + situation}
        </h2>
        <PortableText value={content.school} />
      </div>
    </div>
  );
}
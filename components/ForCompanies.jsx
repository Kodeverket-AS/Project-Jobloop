"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ForCompanies({ content }) {
  return (
    <div className="flex flex-col justify-between px-5 py-20 md:flex-row-reverse">
      <div className="w-full h-80 md:w-96 md:pt-3 md:h-96">
        <Image
          src={content.image3 ? content.image3 : ""}
          width={500}
          height={500}
          alt={content.alt3 ? content.alt3 : ""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full gap-3 py-10 md:w-1/2 md:py-0">
        <h2 className="text-xl md:text-2xl lg:text-3xl pb-3 border-b-2 border-jobloop-primary-green">For bedrifter</h2>
        <PortableText value={content.employer} />
      </div>
    </div>
  );
}
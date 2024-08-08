"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function LeaderSection({ content, leader, position }) {
  return (
    <div className="flex flex-col justify-between px-5 py-20 md:flex-row md:px-12">
      <div className="w-full h-80 md:w-96 md:pt-3 md:h-96">
        <Image
          src={content.image2 ? content.image2 : ""}
          width={500}
          height={500}
          alt={content.alt2 ? content.alt2 : ""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full gap-3 py-10 md:w-1/2 md:py-0 md:pl-3">
        <h2>{position}</h2>
        <p className="pb-3 border-b-2 border-jobloop-primary-green">{leader}</p>
        <PortableText value={content.leader} />
      </div>
    </div>
  );
}

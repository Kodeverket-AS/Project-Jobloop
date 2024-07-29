"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function LeaderSection({ content, leader, position }) {
  return (
    <div className="flex flex-row px-8 py-20">
      <div className="w-full md:w-96 md:pt-3 md:h-96">
        <Image
          src={content.image2 ? content.image2 : ""}
          width={500}
          height={500}
          alt={content.alt2 ? content.alt2 : ""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-3 px-5 py-10 md:py-5">
        <h2>{position}</h2>
        <p className="pb-3 border-b-2 border-jobloop-primary-green">{leader}</p>
        <PortableText value={content.leader} />
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Curriculum({ content, course }) {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 gap-3 px-5 py-10 shadow-xl md:py-5">
      <h2>{"Hva lærer du i " + course + "?"}</h2>
      <PortableText value={content.curriculum} />
    </div>
  );
}

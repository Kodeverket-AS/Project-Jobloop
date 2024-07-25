"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function CourseUsefullness({ content, course }) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <p>Boxes go here</p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 gap-3 px-5 py-10 shadow-xl md:py-5">
        <h2>{"Hva kan du bruke " + course + " til?"}</h2>
        <PortableText value={content.use} />
      </div>
    </div>
  );
}

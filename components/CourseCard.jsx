"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ content }) {
  return (
    <div className="flex flex-col px-5 py-3 shadow-md md:py-5 bg-kv-white">
      <h3>Om kurset</h3>
      <p className="pb-3 border-b-4 border-kv-black md:pt-5">
        Innhold og rammer for kurset
      </p>
      <h4 className="pt-3 md:pt-5">Målgruppe</h4>
      <p>{content.targetGroupShort}</p>
      <h4 className="pt-3 md:pt-5">Tidsplan</h4>
      <p>{content.duration}</p>
      <h4 className="pt-3 md:pt-5">Undervisningsform</h4>
      <p>{content.lectureType}</p>
      <h4 className="pt-3 md:pt-5">Sted</h4>
      <p>{content.locations}</p>
    </div>
  );
}

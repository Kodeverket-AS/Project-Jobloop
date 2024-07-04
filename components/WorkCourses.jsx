"use client";

import Image from "next/image";
import Link from "next/link";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";

export default function WorkCourses() {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 px-8 py-20 md:flex-row md:px-16 md:py-24 md:gap-0">
        <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pr-5 xl:pr-0">
          <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
            Jobbtilbud
          </h2>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Jobloop drifter flere tilbud over hele landet som hjelper folk som
            av ulike grunner står utenfor arbeidslivet med å komme seg inn i
            fast jobb. Vi har blant annet utviklerkurs for de som er interessert
            i programmering, og vi har kurs hvor vi får folk ut i jobb basert på
            interesser og talenter.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pt-3">
          <Image src={JobbtilbudBilde} width={500} height={500}/>
        </div>
      </div>
    </>
  );
}

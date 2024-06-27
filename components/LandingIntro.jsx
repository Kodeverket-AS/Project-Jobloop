"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./Buttons";
import JobloopPhoto from "../public/JobloopPhoto.png";

export default function LandingIntro() {
  return (
    <div className="flex flex-col-reverse px-8 py-20 md:px-16 md:py-24 md:flex-row ">
      <div className="w-full md:w-1/2">
        <Image src={JobloopPhoto} width={500} height={500} />
      </div>
      <div className="w-full md:w-1/2 pb-7 md:pb-0">
        <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">Hvem er Jobloop?</h2>
        <p className="pt-8 pb-12 md:pr-36">
          JobLoop har oppnådd en imponerende suksessrate siden 2014, som er
          bekreftet av FAFOs forskning. Vi er stolte av å kunne tilby en
          plattform som hjelper diverse grupper med å finne arbeid og tilbyr
          skreddersydd yrkesopplæring.
        </p>
        <LinkButton Path={"/om-oss"} Text={"Les mer"} />
      </div>
    </div>
  );
}

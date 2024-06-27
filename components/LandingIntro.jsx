"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./Buttons";
import JobloopPhoto from "../public/JobloopPhoto.png";

export default function LandingIntro() {
  return (
    <div className="flex flex-col px-8 py-20 md:px-16 md:py-24 md:flex-row">
      <div className="w-full md:w-1/2">
        <Image src={JobloopPhoto} width={500} height={500} />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="pb-3 border-b-4 border-jobloop-primary-green">Hvem er Jobloop?</h2>
        <p>
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

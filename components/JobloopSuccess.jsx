"use client";

import Image from "next/image";
import Link from "next/link";
import KodehodeImage from "../public/KodehodeImage.png";
import { ExternalLinkButton } from "./Buttons";

export default function JobloopSuccess() {
  return (
    <div className="flex flex-col gap-8 px-8 py-20 md:px-16 md:py-24 md:flex-row-reverse md:gap-0 ">
      <div className="w-full md:w-1/2 md:pt-3">
        <Image src={KodehodeImage} width={500} height={500} />
      </div>
      <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pl-5 xl:pl-0">
        <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
          Vår suksessrate og FAFOs forskning om effektiviteten siden 2014
        </h2>
        <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
          JobLoop har oppnådd en imponerende suksessrate siden 2014, som er
          bekreftet av FAFOs forskning. Vi er stolte av å kunne tilby en
          plattform som hjelper diverse grupper med å finne arbeid og tilbyr
          skreddersydd yrkesopplæring.
        </p>
        <ExternalLinkButton Path={""} Text={"Les mer"} />
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import JobloopFafo from "../public/jobbloop-fafo.webp";
import { ExternalLinkButton } from "./Buttons";

const TextData = [
  {
    image: JobloopFafo,
    title: "Vår suksessrate og FAFOs forskning om effektiviteten siden 2014",
    text: "JobLoop har oppnådd en imponerende suksessrate siden 2014, som er bekreftet av FAFOs forskning. Vi er stolte av å kunne tilby en plattform som hjelper diverse grupper med å finne arbeid og tilbyr skreddersydd yrkesopplæring.",
    alt: "KodehodeImage",
    path: "https://www.fafo.no/zoo-publikasjoner/fafo-rapporter/sysselsetting-av-unge-med-nedsatt-funksjonsevne-3",
  },
];

export default function JobloopSuccess() {
  return (
    <div className=" bg-jobloop-primary-green/5 mx-2 2xl:mx-0 border-2 border-jobloop-primary-green/100 rounded-lg lg:rounded-2xl flex flex-col gap-8 px-8 py-8 my-20 md:my-24 md:flex-row ">
      <div className="w-full md:w-1/2 ">
        <Image
          alt={TextData[0].alt}
          src={TextData[0].image}
          width={1500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 ">
        <h2 className=" pb-2 w-fit">{TextData[0].title}</h2>
        <p className="pt-4 pb-8 lg:text-xl text-gray-700 ">
          {TextData[0].text}
        </p>
        <ExternalLinkButton
          Path={TextData[0].path}
          Text={"FAFOs Rapport"}
        />
      </div>
    </div>
  );
}

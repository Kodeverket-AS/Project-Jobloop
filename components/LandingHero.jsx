"use client";

import Link from "next/link";
import Image from "next/image";
import LandingHeaderPhoto from "../public/LandingHeaderPhoto.png";
import { LinkButtonRed } from "./Buttons";
//import { PortableText } from "@portabletext/react";

export default function LandingHero() {
  return (
    <>
      {/* MOBILE */}
      {/* <div className="relative top-0 block w-full -z-10 md:hidden">
        <div className="w-full h-[18rem]">
          <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image
            src={LandingHeaderPhoto}
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt={"People talking"}
          />
        </div>
        <div className="absolute left-0 right-0 z-50 text-kv-white top-24 2xs:top-28">
          <h1 className="px-8 text-3xl">
            Inkluderende arbeidspraksis og effektiv jobbmatching
          </h1>
          <p className="px-8">
            Få tilgang til inkluderende arbeidsmuligheter og skreddersydd
            yrkesopplæring
          </p>
        </div>
        <div className="absolute w-full z-50 p-8 bg-kv-white top-[16rem] rounded-t-3xl 2xs:top-[17rem] xs:top-[16.5rem] sm:top-[19rem] sm:p-10"></div>
      </div> */}

      {/* DESKTOP */}
      <div className="w-full h-full relative">
        <div className="absolute top-0 left-0 flex justify-center w-full h-full -z-50 lg:h-[34rem] 2xl:h-[50rem]">
          <div className="absolute bg-gradient-to-b from-[rgba(34,34,34,0.6)] to-[rgba(34,34,34,0.1)] z-50 h-full w-full" />
          <Image
            height={500}
            width={2000}
            alt={"people talking"}
            src={LandingHeaderPhoto}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 items-start max-w-md xl:max-w-xl 2xl:max-w-2xl px-4 md:px-8 py-32 lg:py-32 2xl:py-40">
          <div className="pb-4 text-left">
            <h1 className="pb-4 text-3xl xs:text-4xl text-kv-white  md:text-kv-black lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Inkluderende arbeidspraksis og effektiv jobbmatching
            </h1>
            <p className="font-normal  text-base md:text-lg text-kv-white md:text-kv-black lg:text-xl xl:text-2xl">
              Få tilgang til inkluderende arbeidsmuligheter og skreddersydd
              yrkesopplæring
            </p>
          </div>
          <div className="w-full flex md:block">
            <LinkButtonRed
              Path={"/kontakt"}
              Text={"Kontakt Oss"}
              BgColor={"bg-white"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

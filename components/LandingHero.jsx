"use client";

import Link from "next/link";
import Image from "next/image";
import LandingHeaderPhoto from "../public/LandingHeaderPhoto.png";
import {
  KontaktButton,
  LinkButtonInternal,
  LinkButtonAnimatedWithIcon,
  LinkButtonAnimated,
} from "./Buttons";

export default function LandingHero() {
  return (
    <>
      <div className="w-full h-[85vh] sm:h-[80vh] relative">
        <div className="absolute top-0 left-0 flex justify-center w-full h-full -z-50 ">
          <div className="absolute bg-gradient-to-b from-[rgba(34,34,34,0.7)] to-[rgba(34,34,34,0.6)] z-50 h-full w-full" />
          <Image
            height={500}
            width={2000}
            alt={"people talking"}
            src={LandingHeaderPhoto}
            className="object-cover object-bottom w-full h-full"
          />
        </div>

        <div className="w-full h-full bg-neutral-800/20 backdrop-blur-sm mx-auto justify-center flex flex-col gap-4 md:gap-6 items-center px-4 py-32 lg:py-48">
          <div className="pb-4 text-center max-w-3xl">
            <h1 className="pb-6 text-3xl xs:text-4xl text-kv-white lg:text-7xl ">
              {/* Inkluderende arbeidspraksis og effektiv jobbmatching */}
              Nye veier til utvikling, utdanning og jobb!
            </h1>
            <p className="font-normal text-base md:text-lg text-kv-white lg:text-2xl">
              Vi hjelper deg med inkluderende arbeidsmuligheter og alternativ
              opplæring. Sammen kan vi skape muligheter for fler!
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 sm:flex-row justify-center">
            <LinkButtonAnimatedWithIcon
              Path={"/kontakt"}
              Text={"Kontakt Oss"}
            />
            <LinkButtonAnimated
              Path={"#courses"}
              Text={"Våre tilbud"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

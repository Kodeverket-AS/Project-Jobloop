"use client";

import Link from "next/link";
import Image from "next/image";
import LandingHeaderPhoto from "../public/LandingHeaderPhoto.png";
import {
  KontaktButton,
  LinkButtonInternal,
  LinkButtonModernWithIcon,
  LinkButtonModern,
} from "./Buttons";

export default function LandingHero() {
  return (
    <>
      <div className="w-screen h-4/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 flex justify-center w-full h-full -z-50 lg:h-[34rem] 2xl:h-[50rem]">
          <div className="absolute bg-gradient-to-b from-[rgba(34,34,34,0.9)] to-[rgba(34,34,34,0.7)] z-50 h-full w-full" />
          <Image
            height={500}
            width={2000}
            alt={"people talking"}
            src={LandingHeaderPhoto}
            className="object-cover object-bottom w-full h-full"
          />
        </div>

        <div className=" h-full flex flex-col gap-4 md:gap-6 items-center max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl pl-4 pr-4 md:pr-0 md:pl-8 py-32 lg:py-48 2xl:py-56">
          <div className="pb-4 text-left">
            <h1 className="pb-4 text-3xl xs:text-4xl text-kv-white  lg:text-4xl xl:text-5xl 2xl:text-6xl">
              {/* Inkluderende arbeidspraksis og effektiv jobbmatching */}
              Nye veier til utvikling, utdanning og jobb
            </h1>
            <p className="font-normal text-base md:text-lg text-kv-white lg:text-xl xl:text-2xl">
              {/* Få tilgang til inkluderende arbeidsmuligheter <br />
              og skreddersydd yrkesopplæring */}
              Vi hjelper deg med inkluderende arbeidsmuligheter og alternativ
              opplæring. Sammen kan vi skape muligheter for fler!
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 md:flex-row">
            <LinkButtonModernWithIcon
              Path={"/kontakt"}
              Text={"Kontakt Oss"}
            />
            <LinkButtonModern
              Path={"#courses"}
              Text={"Våre tilbud"}
            />
            {/* <KontaktButton
              Path={"/kontakt"}
              Text={"Kontakt Oss"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

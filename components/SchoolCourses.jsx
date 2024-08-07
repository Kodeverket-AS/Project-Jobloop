"use client";

import Image from "next/image";
import Link from "next/link";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";
import KodehodeImage from "../public/KodehodeImage.png";
import { LinkButton } from "./Buttons";

const UICard = ({ image, title, text, path }) => {
  return (
    <div className="flex flex-col w-full gap-4 md:flex-row-reverse md:w-1/2">
      <div className="w-full md:w-1/2">
        <Image
          alt="KodehodeImage"
          src={image}
          width={400}
          height={400}
          className="md:max-w-48"
        />
      </div>
      <div className="flex flex-col w-full gap-4 md:w-1/2">
        <h3>{title}</h3>
        <p>{text}</p>
        <LinkButton
          Path={path}
          Text={"Les mer"}
        />
      </div>
    </div>
  );
};

export default function SchoolCourses() {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 px-8 py-20 md:flex-row md:px-16 md:py-24 md:gap-5">
        <div className="w-full md:w-1/2 pb-7 md:pb-0">
          <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
            Læringstilbud
          </h2>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Jobloop samarbeider med skoler over hele landet med å gi elever som
            trenger en alternativ arena hvor de kan oppleve læring og motivasjon
            gjennom alternative metoder blant annet gjennom gaming.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pt-3">
          <Image
            alt="JobbtilbudBilde"
            src={JobbtilbudBilde}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-12 px-8 py-20 md:px-16 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:gap-0 md:justify-between">
          <UICard
            image={KodehodeImage}
            title={"LearnWell"}
            text={"Alternativ læringsarena for elever i videregående"}
            path="/learnWell"
          />

          <UICard
            image={KodehodeImage}
            title={"Gamify"}
            text={"Motivasjon og læring gjennom gaming"}
            path="/gamify"
          />
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-0 md:justify-between">
          <UICard
            image={KodehodeImage}
            title={"Spillbasert"}
            text={
              "Gaming og alternativ læring for deg som vil fullføre videregående"
            }
            path="/spillbasert"
          />

          <UICard
            image={KodehodeImage}
            title={"Loop"}
            text={"Få relevant arbeidspraksis og erfaring"}
            path="/loop"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 py-20 md:flex-row md:w-2/3 md:px-16 md:justify-between md:ml-0 md:mr-auto">
        <div className="ml-0 w-52 h-52">
          <Image
            alt="JobbtilbudBilde"
            src={JobbtilbudBilde}
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col w-full gap-3 md:w-1/2">
          <h3>Jane Generic</h3>
          <p>Lærer ABC tiltak</p>
          <q className="italic">
            Tekst om hvor kjekt det er for elever som deltar på ABC tiltak og
            hvor mye bedre læringsutbytte de har.
          </q>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";
import KodehodeImage from "../public/KodehodeImage.png";
import { LinkButton, LinkButtonInternal } from "./Buttons";
import { IntroSectionReverse } from "./IntroCardComponent";

const UICard = ({ image, title, text, path }) => {
  return (
    <div className="group flex flex-col w-full gap-4 xl:flex-row-reverse md:w-1/2">
      <a
        href={path}
        className="w-full xl:w-1/2 transition-all saturate-100 group-hover:saturate-150">
        <Image
          alt="KodehodeImage"
          src={image}
          width={1500}
          height={500}
          className="max-w-full object-cover"
        />
      </a>
      <div className="flex flex-col w-full gap-4 xl:w-1/2">
        <h3 className="text-kv-black text-xl md:text-2xl">{title}</h3>
        <p className="text-base md:text-xl text-gray-500">{text}</p>
        <LinkButtonInternal
          Path={path}
          Text={"Les mer"}
        />
      </div>
    </div>
  );
};

export default function SchoolCourses() {
  return (
    <section>
      <IntroSectionReverse
        image={JobbtilbudBilde}
        title={"Læringstilbud"}
        text={
          "Jobloop samarbeider med skoler over hele landet med å gi elever som trenger en alternativ arena hvor de kan oppleve læring og motivasjon gjennom alternative metoder blant annet gjennom gaming."
        }
        path={"/læringstilbud"}
        isButton={false}
      />
      <div className="flex flex-col w-full gap-12 px-8 py-20 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
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

        <div className="flex flex-col gap-12 md:flex-row  md:justify-between">
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
    </section>
  );
}

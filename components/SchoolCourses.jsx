"use client";

import Image from "next/image";
import Læringstilbud from "../public/læringstilbud.webp";
import Learnwell from "../public/learnwell.webp";
import Gamify from "../public/gamify2.webp";
import Spillbasert from "../public/spillbasert.webp";
import Loop from "../public/loop.webp";
import { LinkButtonInternal } from "./Buttons";
import { IntroSectionReverse } from "./LayoutComponents";

const IntroData = [
  {
    image: Læringstilbud,
    title: "Læringstilbud",
    text: "Jobloop samarbeider med skoler over hele landet med å gi elever som trenger en alternativ arena hvor de kan oppleve læring og motivasjon gjennom alternative metoder blant annet gjennom gaming.",
    path: "/læringstilbud",
    alt: "JobbtilbudBilde",
  },
];

const UICardData = [
  {
    image: Learnwell,
    alt: "Pc-skjerm med headset",
    title: "LearnWell",
    text: "Alternativ læringsarena for elever i videregående",
    path: "/learnWell",
  },
  {
    image: Gamify,
    alt: "2 jenter i Gamify",
    title: "Gamify",
    text: "Motivasjon og læring gjennom gaming",
    path: "/gamify",
  },
  {
    image: Spillbasert,
    alt: "3 personer involverte i prosjektet",
    title: "Spillbasert",
    text: "Gaming og alternativ læring for deg som vil fullføre videregående",
    path: "/spillbasert",
  },
  {
    image: Loop,
    alt: "Tech arbeidsbord",
    title: "Loop",
    text: "Få relevant arbeidspraksis og erfaring",
    path: "/loop",
  },
];

const UICard = ({ image, title, text, path, alt }) => {
  return (
    <div className="group flex flex-col w-full gap-4 xl:flex-row-reverse md:w-1/2">
      <a
        href={path}
        className="w-full h-72 xl:w-1/2 transition-all">
        <Image
          alt={alt}
          src={image}
          width={500}
          height={500}
          className="max-w-full h-full object-cover"
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
    <section className="pb-24">
      <IntroSectionReverse
        image={IntroData[0].image}
        title={IntroData[0].title}
        text={IntroData[0].text}
        path={IntroData[0].path}
        isButton={true}
        alt={IntroData[0].alt}
        // btnVariant={"internalLink"}
      />
      <div className="flex flex-col w-full gap-12 px-8 py-20 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <UICard
            image={UICardData[0].image}
            title={UICardData[0].title}
            text={UICardData[0].text}
            path={UICardData[0].path}
            alt={UICardData[0].alt}
          />

          <UICard
            image={UICardData[1].image}
            title={UICardData[1].title}
            text={UICardData[1].text}
            path={UICardData[1].path}
            alt={UICardData[1].alt}
          />
        </div>

        <div className="flex flex-col gap-12 md:flex-row  md:justify-between">
          <UICard
            image={UICardData[2].image}
            title={UICardData[2].title}
            text={UICardData[2].text}
            path={UICardData[2].path}
            alt={UICardData[2].alt}
          />

          <UICard
            image={UICardData[3].image}
            title={UICardData[3].title}
            text={UICardData[3].text}
            path={UICardData[3].path}
            alt={UICardData[3].alt}
          />
        </div>
      </div>
    </section>
  );
}

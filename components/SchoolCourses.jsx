"use client";

import Image from "next/image";
import Læringstilbud from "../public/læringstilbud.webp";
import Learnwell from "../public/learnwell.webp";
import Gamify from "../public/gamify2.webp";
import Spillbasert from "../public/spillbasert.webp";
import Loop from "../public/loop.webp";
import KiKurs from "../public/ki.jpg";

import { IntroSectionReverse } from "./layout-components";
import { LesMerButton } from "./buttons";

const IntroData = [
    {
        image: Læringstilbud,
        title: "Tilbud mot frafall fra skole og utdanning",
        text: "I våre alternative mestrings- og læringsarenaer jobber vi hver dag for at flere elever skal oppleve mestring, tilhørighet og meningsfulle dager. Vi jobber styrkebasert og tett sammen med elevene for å gi dem muligheten til å utforske og dyrke sine interesser. Vi samarbeider alltid med den enkelte elevs skole og PPT for å bygge bro fra våre alternative læringsarenaer til klasserommet og undervisningen på skolen.",
        path: "/laringstilbud",
        alt: "JobbtilbudBilde",
    },
];

const UICardData = [
    {
        image: Learnwell,
        alt: "Pc-skjerm med headset",
        title: "LearnWell",
        text: "Tilrettelagt praksis i kreative digitale fag. For elever i videregående skole alder.",
        path: "/learnWell",
    },
    {
        image: Gamify,
        alt: "2 jenter i Gamify",
        title: "Gamify",
        text: "Motivasjon og læring gjennom spill og gaming. For elever i grunnskolen.",
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
        text: "Få relevant arbeidspraksis og erfaring som gir deg flere jobbmuligheter.",
        path: "/loop",
    },
    {
        image: KiKurs,
        alt: "KI-Kurs leder",
        title: "KI-Kurs",
        text: "Lær om kunstig intelligens og hvordan den kan brukes i arbeidslivet.",
        path: "/ki-kurs",
    },
];

const UICard = ({ image, title, text, path, alt }) => {
    return (
        <div className='  group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
            <a href={path} className='w-full h-80 xl:w-1/2 relative overflow-hidden rounded-xl'>
                <Image
                    alt={alt}
                    src={image}
                    width={600}
                    height={600}
                    className='max-w-full h-full object-cover'
                />
            </a>
            <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                <h3 className='text-kv-black text-xl md:text-2xl'>{title}</h3>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>{text}</p>
                <div className="pt-2">
                    <LesMerButton Path={path} />
                </div>
            </div>
        </div>
    );
};

export default function SchoolCourses() {
    return (
        <section id='courses' className=' courses w-full max-w-[1536px] mx-auto'>


       
        <div className='space-y-16'>
            <IntroSectionReverse
                image={IntroData[0].image}
                title={IntroData[0].title}
                text={IntroData[0].text}
                path={IntroData[0].path}
                isButton={false}
                alt={IntroData[0].alt}
                // btnVariant={"internalLink"}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
                {UICardData.map((card, index) => (
                    <UICard
                        key={index}
                        image={card.image}
                        title={card.title}
                        text={card.text}
                        path={card.path}
                        alt={card.alt}
                    />
                ))}
            </div>
        </div>
         </section>
    );
}

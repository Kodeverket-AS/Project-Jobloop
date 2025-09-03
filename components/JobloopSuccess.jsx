"use client";

import Image from "next/image";
import JobloopFafo from "../public/jobbloop-fafo.webp";
import { ExternalLinkButton } from "./Buttons";

const TextData = [
    {
        image: JobloopFafo,
        title: "Inkluderingsarbeid som fungerer i praksis! ",
        text: "Hvert år samarbeider vi med ulike forskere og bransjeforeninger for å dele innsikt og statistikk med forskningsfeltet. Vi er i kontakt med varierte målgrupper og har et sterkt ønske om å kunne bidra til å utvikle beste praksis i møte med alle. Du kan lese et utvalg av hva forskningen sier om oss her:",
        alt: "KodehodeImage",
        path: "https://www.fafo.no/zoo-publikasjoner/fafo-rapporter/sysselsetting-av-unge-med-nedsatt-funksjonsevne-3",
    },
];

export default function JobloopSuccess() {
    return (
        <div className=' bg-jobloop-primary-green/5 border-2 border-jobloop-primary-green/100 rounded-xl flex flex-col gap-8 px-8 py-8 md:flex-row '>
            <div className='w-full md:w-1/2 '>
                <Image
                    alt={TextData[0].alt}
                    src={TextData[0].image}
                    width={1500}
                    height={500}
                />
            </div>
            <div className='w-full md:w-1/2 '>
                <h2 className=' pb-2 w-fit'>{TextData[0].title}</h2>
                <p className='pt-4 pb-8 lg:text-xl text-gray-700 '>
                    {TextData[0].text}
                </p>
                <div className='flex flex-col gap-6'>
                    <ExternalLinkButton
                        Path={TextData[0].path}
                        Text={"FAFOs Rapport"}
                    />
                    <ExternalLinkButton
                        Path='https://www.virke.no/contentassets/bb882874e5f5449bb72e58a6bb76c3f1/161023menon-publikasjon-nr.-113_2023-arbeids--og-inkluderingsvirksomhetenes-samfunnsverdi.pdf '
                        Text='Menon Economics (2023) - PDF'
                        Aria='Menon Economics (2023)'
                    />
                </div>
            </div>
        </div>
    );
}

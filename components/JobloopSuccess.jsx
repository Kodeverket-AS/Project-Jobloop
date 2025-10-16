"use client";

import Image from "next/image";
import JobloopFafo from "../public/jobbloop-fafo.webp";
import { ExternalLinkButton } from "./buttons";

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
        <div className='bg-linear-to-br from-jobloop-primary-green/10 via-white to-jobloop-primary-orange/10 border-2 border-jobloop-primary-green/20 rounded-2xl flex flex-col gap-12 px-8 py-12 md:flex-row md:items-center shadow-lg'>
            <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative overflow-hidden rounded-xl shadow-md'>
                    <Image
                        alt={TextData[0].alt}
                        src={TextData[0].image}
                        width={1500}
                        height={500}
                        className='object-cover'
                    />
                </div>
            </div>
            <div className='w-full md:w-1/2 space-y-6'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-bold text-kv-black pb-3 border-b-2 border-jobloop-primary-orange w-fit'>
                        {TextData[0].title}
                    </h2>
                </div>
                <p className='text-lg leading-relaxed text-gray-700'>
                    {TextData[0].text}
                </p>
                <div className='space-y-4 pt-4'>
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

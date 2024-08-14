"use client";

import JobloopPhoto from "../public/JobloopPhoto.png";
import { IntroSection } from "./LayoutComponents";

const IntroData = [
    {
        image: JobloopPhoto,
        title: "Hvem er Jobloop?",
        text: "Jobloop har oppnådd en imponerende suksessrate siden 2014, som er bekreftet av FAFOs forskning. Vi er stolte av å kunne tilby en plattform som hjelper diverse grupper med å finne arbeid og tilbyr skreddersydd yrkesopplæring.",
        path: "/om-oss",
        alt: "Jobloop photo",
    },
];

export default function LandingIntro() {
    return (
        <section>
            <IntroSection
                title={IntroData[0].title}
                text={IntroData[0].text}
                image={IntroData[0].image}
                alt={IntroData[0].alt}
                path={IntroData[0].path}
                isButton={true}
            />
        </section>
    );
}

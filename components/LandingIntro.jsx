"use client";


import FSEVinnerPhoto from "../public/FSE-Vinner2024-063.webp";
import { IntroSection } from "./LayoutComponents";

const IntroData = [
    {
        image: FSEVinnerPhoto,
        imageLinkPath:
            "https://www.linkedin.com/posts/sina-erichsen-28403998_jobloop-finalist-activity-7148672163053580289-81Yo/?originalSubdomain=no",
        title: "Hvem er Jobloop?",
        text: "JobLoop er et raskt voksende selskap drevet av sosiale entreprenører. Vi har et viktig mål: å begrense utenforskap ved å forebygge frafall i skolen, kvalifisere og formidle flere til arbeid. For å få til det samarbeider vi med offentlige aktører, utdanningsinstitusjoner og lokalt arbeidsliv. I 2024 mottok vi FERD-prisen «Årets Sosiale Entreprenør» for vårt arbeid mot skolefrafall. ",
        path: "/om-oss",
        alt: "Jobloop photo",
    },
];

export default function LandingIntro() {
    return (
        <IntroSection
            title={IntroData[0].title}
            text={IntroData[0].text}
            image={IntroData[0].image}
            ifImageLink={true}
            imageLinkPath={IntroData[0].imageLinkPath}
            alt={IntroData[0].alt}
            path={IntroData[0].path}
            isButton={true}
        />
    );
}

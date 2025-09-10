"use client";

import Kodeloftet from "../public/kodeloftet.webp";
import Gløde from "../public/gløde.webp";
import Teamwork from "../public/Orkla_1.webp";
import { PartnerProject, PartnerProjectReverse } from "./layout-components";

const ProjectsData = [
    {
        image: Kodeloftet,
        title: "Kodeloftet",
        text: "Fontenehus er frivillige arbeidsfellesskap for mennesker som har eller har hatt psykiske helseutfordringer. I 2022 startet Kodehode et samarbeid med Fontenehuset Bergen for å tilby et kodekurs på huset – Kodeloftet – et tre måneders kurs som kan regnes som et forkurs til Kodehode.",
        path: "https://www.fontenehusetbergen.no/",
        btnText: "Fontenehusetbergen.no",
    },
    {
        image: Gløde,
        title: "Gløde",
        text: "Gløde AS har som formål å fremme arbeidsinkludering, kompetanseformidling og tilhørende virksomhet. Målgruppen er personer som har behov for avklaring, arbeidstrening, opplæring og støtte for å komme ut i ordinært arbeid, eller som trenger varig tilrettelagt arbeid. I 2023 startet Gløde Data og Jobloop et samarbeid for deltakere i AFT. Grunnleggende programmering med JavaScript er et 12-ukers tilbud der deltakerne lærer å utvikle nettsider og apper ved bruk av JavaScript.",
        path: "https://www.gløde.no/",
        btnText: "Gløde.no",
    },
    {
        image: Teamwork,
        title: "Medarbeiderskap",
        text: "Medarbeiderskap er et nytt samarbeidsprosjekt mellom Jobloop og TeamWork OU AS, som jobber for å levere nye konsepter til bedrifter for å bedre miljøet blant ansatte og forhindre sykefravær og gjennomtrekk.",
        path: "/teamwork",
    },
];

export default function CooperationProjects() {
    return (
        <>
            <h2 className='pb-2 border-b-4 border-jobloop-primary-green w-fit'>
                Samarbeidsprosjekter
            </h2>
            {/* Kodeloftet */}
            <PartnerProjectReverse
                image={ProjectsData[0].image}
                title={ProjectsData[0].title}
                text={ProjectsData[0].text}
                path={ProjectsData[0].path}
                isButton={true}
                btnVariant={"externalLink"}
                btnText={ProjectsData[0].btnText}
            />

            {/* Gløde */}
            <PartnerProject
                image={ProjectsData[1].image}
                title={ProjectsData[1].title}
                text={ProjectsData[1].text}
                path={ProjectsData[1].path}
                isButton={true}
                btnVariant={"externalLink"}
                btnText={ProjectsData[1].btnText}
            />

            {/* Teamwork */}
            <PartnerProjectReverse
                image={ProjectsData[2].image}
                title={ProjectsData[2].title}
                text={ProjectsData[2].text}
                path={ProjectsData[2].path}
                isButton={true}
                btnText={ProjectsData[2].btnText}
            />
        </>
    );
}

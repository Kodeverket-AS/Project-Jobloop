"use client";

import KodehodeImage from "../public/KodehodeImage.png";
import { PartnerProject, PartnerProjectReverse } from "./LayoutComponents";

const ProjectsData = [
  {
    title: "Kodeloftet",
    text: "Fontenehus er frivillige arbeidsfellesskap for mennesker som har eller har hatt psykiske helseproblemer. I 2022 startet Kodehode etsamarbeid med Fontenehuset Bergen for å starte et kodekurs på huset, Kodeloftet, et 3 mnd kurs som kan regnes som et forkurs til Kodehode.",
    path: "https://www.fontenehusetbergen.no/",
    image: { KodehodeImage },
  },
  {
    title: "Gløde",
    text: "Gløde er et frivillig arbeidsprosjekt for deg som jobber i et frivillig arbeidsforhold. Gløde er et prosjekt som er del av et prosjekt som er del av et prosjekt.",
    path: "https://www.gløde.no/",
    image: { KodehodeImage },
  },
  {
    title: "Teamwork",
    text: "Teamwork er et prosjekt for deg som jobber i et frivillig arbeidsforhold. Teamwork er et prosjekt som er del av et prosjekt som er del av et prosjekt.",
    path: "/teamwork",
    image: { KodehodeImage },
  },
];

export default function CooperationProjects() {
  return (
    <>
      <div className="mx-auto">
        <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
          Samarbeidsprosjekter
        </h2>
      </div>
      {/* Kodeloftet */}
      <PartnerProjectReverse
        image={ProjectsData[0].image.KodehodeImage}
        title={ProjectsData[0].title}
        text={ProjectsData[0].text}
        path={ProjectsData[0].path}
        isButton={true}
        btnVariant={"externalLink"}
      />

      {/* Gløde */}
      <PartnerProject
        image={ProjectsData[1].image.KodehodeImage}
        title={ProjectsData[1].title}
        text={ProjectsData[1].text}
        path={ProjectsData[1].path}
        isButton={true}
        btnVariant={"externalLink"}
      />

      {/* Teamwork */}
      <PartnerProjectReverse
        image={ProjectsData[2].image.KodehodeImage}
        title={ProjectsData[2].title}
        text={ProjectsData[2].text}
        path={ProjectsData[2].path}
        isButton={true}
        btnVariant={"internalLink"}
      />
    </>
  );
}

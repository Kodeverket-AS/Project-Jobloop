"use client";

import KodehodeImage from "../public/KodehodeImage.png";
import { PartnerProject, PartnerProjectReverse } from "./LayoutComponents";

const ProjectsData = [
  {
    title: "Kodeloftet",
    text: "Fontenehus er frivillige arbeidsfellesskap for mennesker som har eller har hatt psykiske helseproblemer. I 2022 startet Kodehode et samarbeid med Fontenehuset Bergen for å starte et kodekurs på huset, Kodeloftet, et 3 mnd kurs som kan regnes som et forkurs til Kodehode.",
    path: "https://www.fontenehusetbergen.no/",
    image: { KodehodeImage },
    btnText: "Fontenehusetbergen.no",
  },
  {
    title: "Gløde",
    text: "Gløde AS sitt formål er arbeidsinkludering, kompetanseformidling og virksomhet i sammenheng med dette. Målgruppa er personer som kan ha behov for avklaring, arbeidstrening, opplæring og hjelp til å komme ut i ordinært arbeid, eller personer som trenger varig tilrettelagt arbeid. Gløde Data og Jobloop startet et samarbeid i 2023 for deltakere i AFT. Grunnleggende programmering med JavaScript er et 12 ukers tilbud for å lære å utvikle nettsider og apper ved bruk av JavaScript.",
    path: "https://www.gløde.no/",
    image: { KodehodeImage },
    btnText: "Gløde.no",
  },
  {
    title: "Teamwork",
    text: "Teamwork er et nytt samarbeidsprosjekt mellom Jobloop og TeamWork som jobber for å levere nye konsepter til bedrifter for å bedre miljøet blant ansatte og forhindre sykefravær og gjennomtrekk.",
    path: "/teamwork",
    image: { KodehodeImage },
  },
];

export default function CooperationProjects() {
  return (
    <section>
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
        btnText={ProjectsData[0].btnText}
      />

      {/* Gløde */}
      <PartnerProject
        image={ProjectsData[1].image.KodehodeImage}
        title={ProjectsData[1].title}
        text={ProjectsData[1].text}
        path={ProjectsData[1].path}
        isButton={true}
        btnVariant={"externalLink"}
        btnText={ProjectsData[1].btnText}
      />

      {/* Teamwork */}
      <PartnerProjectReverse
        image={ProjectsData[2].image.KodehodeImage}
        title={ProjectsData[2].title}
        text={ProjectsData[2].text}
        path={ProjectsData[2].path}
        isButton={true}
        btnText={ProjectsData[2].btnText}
      />
    </section>
  );
}

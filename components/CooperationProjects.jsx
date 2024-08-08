"use client";

import Image from "next/image";
import Link from "next/link";
import KodehodeImage from "../public/KodehodeImage.png";
import { ExternalLinkButton, LinkButton } from "./Buttons";

export default function CooperationProjects() {
  return (
    <>
      <div className="mx-auto">
        <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
          Samarbeidsprosjekter
        </h2>
      </div>
      <div className="flex flex-col gap-8 px-8 py-20 md:px-16 md:py-24 md:flex-row-reverse md:gap-0 ">
        <div className="w-full md:w-1/2 md:pt-3">
          <Image src={KodehodeImage} width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pl-5 xl:pl-0">
          <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
            Kodeloftet
          </h2>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Fontenehus er frivillige arbeidsfellesskap for mennesker som har
            eller har hatt psykiske helseproblemer. I 2022 startet Kodehode et
            samarbeid med Fontenehuset Bergen for å starte et kodekurs på huset,
            Kodeloftet, et 3 mnd kurs som kan regnes som et forkurs til
            Kodehode.
          </p>
          <ExternalLinkButton
            Path={"https://www.fontenehusetbergen.no/"}
            Text={"Les mer"}
            Aria={"Les mer om fontenehuset bergen på deres egen nettside"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 py-20 md:px-16 md:py-24 md:flex-row md:gap-0 ">
        <div className="w-full md:w-1/2 md:pt-3">
          <Image src={KodehodeImage} width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pl-5 xl:pl-0">
          <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
            Gløde
          </h2>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Gløde AS sitt formål er arbeidsinkludering, kompetanseformidling og
            virksomhet i sammenheng med dette. Målgruppa er personer som kan ha
            behov for avklaring, arbeidstrening, opplæring og hjelp til å komme
            ut i ordinært arbeid, eller personer som trenger varig tilrettelagt
            arbeid. Gløde Data og Jobloop startet et samarbeid i 2023 for
            deltakere i AFT. Grunnleggende programmering med JavaScript er et 12
            ukers tilbud for å lære å utvikle nettsider og apper ved bruk av
            JavaScript.
          </p>
          <ExternalLinkButton
            Path={"https://glode.no/"}
            Text={"Les mer"}
            Aria={"Les mer om Gløde på deres egen nettside"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 py-20 md:px-16 md:py-24 md:flex-row-reverse md:gap-0 ">
        <div className="w-full md:w-1/2 md:pt-3">
          <Image src={KodehodeImage} width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pl-5 xl:pl-0">
          <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
            Teamwork
          </h2>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Teamwork er et nytt samarbeidsprosjekt mellom Jobloop og TeamWork
            som jobber for å levere nye konsepter til bedrifter for å bedre
            miljøet blant ansatte og forhindre sykefravær og gjennomtrekk.
          </p>
          <LinkButton Path={"/teamwork"} Text={"Les mer"} />
        </div>
      </div>
    </>
  );
}

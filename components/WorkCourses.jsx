"use client";

import Image from "next/image";
import Link from "next/link";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";
import KodehodeImage from "../public/KodehodeImage.png";
import { ExternalLinkButton, LinkButton, LinkButtonInternal } from "./Buttons";
import { IntroSectionReverse } from "./IntroCardComponent";

const UICard = ({ image, title, text, path }) => {
  return (
    <div className="group flex flex-col w-full gap-4 xl:flex-row-reverse md:w-1/2">
      <a
        href={path}
        className="w-full xl:w-1/2 transition-all saturate-100 group-hover:saturate-150">
        <Image
          alt="KodehodeImage"
          src={image}
          width={1500}
          height={500}
          className="max-w-full object-cover"
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

export default function WorkCourses() {
  return (
    <>
      <IntroSectionReverse
        title="Arbeidstilbud"
        text="Jobloop drifter flere tilbud over hele landet som hjelper folk som
            av ulike grunner står utenfor arbeidslivet med å komme seg inn i
            fast jobb. Vi har blant annet utviklerkurs for de som er interessert
            i programmering, og vi har kurs hvor vi måte folk ut i jobb basert på
            interesser og talenter."
        image={JobbtilbudBilde}
        alt="JobbtilbudBilde"
        path="/tilbud"
        isButton={false}
      />

      <div className="flex flex-col-reverse gap-4 px-8 py-20 md:flex-row-reverse md:gap-8 md:py-24 md:w-full">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h3 className="text-kv-black text-xl md:text-2xl lg:text-3xl">
            Kodehode
          </h3>
          <p className="text-base lg:text-xl text-gray-600">
            Kodehode er det største arbeidsrelaterte tilbudet Jobloop drifter,
            hvor vi utdanner nye frontend utviklere.
          </p>
          <ExternalLinkButton
            Path="https://www.kodehode.no/"
            Text={"Les mer"}
            Aria={"Les mer om kodehode på kodehode.no"}
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <Image
            alt="KodehodeImage"
            src={KodehodeImage}
            width={1500}
            height={500}
            className="md:max-w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-12 px-8 py-20 md:py-24">
        <div className="flex flex-col gap-8 lg:gap-12 md:flex-row md:justify-between">
          <UICard
            image={KodehodeImage}
            title="Grunnleggende IT"
            text="Bli med i dagens digitale samfunn"
            path="/grunnleggende-IT"
          />

          <UICard
            image={KodehodeImage}
            title="Digitale Talenter"
            text="Dyrk interessene dine og må fast jobb"
            path="/digitale-talenter"
          />
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <UICard
            image={KodehodeImage}
            title="Individuell AMO"
            text="Få et skreddersydd opplegg gjennom Nav"
            path="/individuell-AMO"
          />
          <UICard
            image={KodehodeImage}
            title="Loop"
            text="Få relevant arbeidspraksis og erfaring"
            path="/loop"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 py-20 md:flex-row md:w-2/3 md:px-16 md:justify-between md:ml-0 md:mr-auto">
        <div className="ml-0 w-52 h-52">
          <Image
            alt="JobbtilbudBilde"
            src={JobbtilbudBilde}
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col w-full gap-3 md:w-1/2">
          <h3>Joe Generic</h3>
          <p>CEO XYZ bedrift</p>
          <q className="italic">
            Tekst om hvor lett det var å jobbe med Jobloop og hvor lærerikt det
            var for praktikanter.
          </q>
        </div>
      </div>
    </>
  );
}

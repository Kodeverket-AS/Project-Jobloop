"use client";

import Image from "next/image";
import Link from "next/link";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";
import KodehodeImage from "../public/KodehodeImage.png";
import { ExternalLinkButton, LinkButton } from "./Buttons";

export default function WorkCourses() {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 px-8 py-20 md:flex-row md:px-16 md:py-24 md:gap-0">
        <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pr-5 xl:pr-0">
          <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
            Arbeidstilbud
          </h2>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Jobloop drifter flere tilbud over hele landet som hjelper folk som
            av ulike grunner står utenfor arbeidslivet med å komme seg inn i
            fast jobb. Vi har blant annet utviklerkurs for de som er interessert
            i programmering, og vi har kurs hvor vi får folk ut i jobb basert på
            interesser og talenter.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pt-3">
          <Image src={JobbtilbudBilde} width={500} height={500} />
        </div>
      </div>
      <div className="flex flex-col-reverse gap-8 px-8 py-20 md:flex-row-reverse md:px-16 md:py-24 md:gap-0">
        <div className="w-full md:w-1/2 pb-7 md:pb-0 md:pr-5 xl:pr-0">
          <h3>Kodehode</h3>
          <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
            Kodehode er det største arbeidsrelaterte tilbudet Jobloop drifter,
            hvor vi utdanner nye frontend utviklere.
          </p>
          <ExternalLinkButton
            Path="https://www.kodehode.no/"
            Text={"Les mer"}
            Aria={"Les mer om kodehode på kodehode.no"}
          />
        </div>
        <div className="w-full md:w-1/2 md:pt-3">
          <Image
            src={KodehodeImage}
            width={500}
            height={500}
            className="md:max-w-60"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-8">
        <div className="flex flex-col gap-12 md:flex-row md:gap-0">
          <div className="flex flex-col w-full gap-3 md:flex-row-reverse md:w-1/2">
            <div className="w-full md:w-1/2">
              <Image
                src={KodehodeImage}
                width={400}
                height={400}
                className="md:max-w-48"
              />
            </div>
            <div className="flex flex-col w-full gap-3 md:w-1/2">
              <h3>Grunnleggende IT</h3>
              <p>Bli med i dagens digitale samfunn</p>
              <LinkButton Path="/grunnleggende-IT" Text={"Les mer"} />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 md:flex-row-reverse md:w-1/2">
            <div className="w-full md:w-1/2">
              <Image
                src={KodehodeImage}
                width={400}
                height={400}
                className="md:max-w-48"
              />
            </div>
            <div className="flex flex-col w-full gap-3 md:w-1/2">
              <h3>Digitale Talenter</h3>
              <p>Dyrk interessene dine og få fast jobb</p>
              <LinkButton Path="/digitale-talenter" Text={"Les mer"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:gap-0">
          <div className="flex flex-col w-full gap-3 md:flex-row-reverse md:w-1/2">
            <div className="w-full md:w-1/2">
              <Image
                src={KodehodeImage}
                width={400}
                height={400}
                className="md:max-w-48"
              />
            </div>
            <div className="flex flex-col w-full gap-3 md:w-1/2">
              <h3>Individuell AMO</h3>
              <p>Få et skreddersydd opplegg gjennom Nav</p>
              <LinkButton Path="/Individuell-AMO" Text={"Les mer"} />
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 md:flex-row-reverse md:w-1/2">
            <div className="w-full md:w-1/2">
              <Image
                src={KodehodeImage}
                width={400}
                height={400}
                className="md:max-w-48"
              />
            </div>
            <div className="flex flex-col w-full gap-3 md:w-1/2">
              <h3>Loop</h3>
              <p>Få relevant arbeidspraksis og erfaring</p>
              <LinkButton Path="/loop" Text={"Les mer"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

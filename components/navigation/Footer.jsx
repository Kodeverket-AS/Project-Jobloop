"use client";

import Link from "next/link";
import Image from "next/image";
import logoJobloopHvit from "../public/logoJobloopHvit.svg";
import logoKodeverketHvit from "../public/logoKodeverketHvit.svg";

// Contact information for the footer
const contactInformation = [
  {
    name: "Stefan",
    email: "stefan@jobloop.no",
    phoneDisplay: "+47 40 06 64 13",
    phoneLink: "+4740066413",
  },
  {
    name: "Sina",
    email: "sina@jobloop.no",
    phoneDisplay: "+47 41 08 68 27",
    phoneLink: "+4741086827",
  },
  {
    name: "Karl",
    email: "karl@jobloop.no",
    phoneDisplay: "+47 95 90 40 52",
    phoneLink: "+4795904052",
  },
];

export default function Footer() {
  return (
    <footer className="pb-8 text-kv-white bg-jobloop-primary-grey">
      <div className="flex-row flex-wrap items-start justify-around hidden px-12 pt-8 pb-24 md:flex gap-y-20 gap-x-8 md:px-12 2xl:max-w-[1600px] 2xl:mx-auto">
        <div className="flex flex-col order-2 gap-8 md:order-1">
          <h2 className="text-3xl">Kontakt</h2>
          {contactInformation.map((person) => (
            <div
              className="flex flex-col pb-4 border-b-2 border-kv-white border-opacity-40"
              key={person.name}
            >
              <b className="text-lg">{person.name}</b>
              <a
                href={`mailto:${person.email}`}
                className="py-1 cursor-pointer hover:underline active:underline"
                target="_blank"
                aria-label={`Åpner email for å opprette epost til ${person.name}`}
              >
                {person.email}
              </a>
              <a
                href={`tel:${person.phoneLink}`}
                className="md:hover:underline md:active:underline"
                aria-label={`Åpner telefon for å ringe ${person.name}`}
              >
                {person.phoneDisplay}
              </a>
            </div>
          ))}
        </div>
        <div className="items-center order-1 gap-8 md:flex md:flex-col md:order-2">
          <h2 className="text-3xl text-center">Linker</h2>
          <div className="w-32">
            <a
              href="https://jobloop.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lenke til Jobloops nettside"
            >
              <Image
                alt="Jobloop logo"
                src={logoJobloopHvit}
                width={350}
                height={250}
              />
            </a>
          </div>
          <div className="w-32">
            <a
              href="https://www.kodeverketbergen.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lenke til Kodeverkets nettside"
            >
              <Image
                alt="Kodeverket logo"
                src={logoKodeverketHvit}
                width={350}
                height={250}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col order-3 gap-8">
          <h2 className="text-3xl">Sider</h2>
          <Link
            className="hover:underline"
            href="/arbeidsgiver"
            aria-label="Gå til underside for arbeidsgiver"
          >
            Arbeidsgiver
          </Link>
          <Link
            className="hover:underline"
            href="/deltaker"
            aria-label="Gå til underside for deltaker"
          >
            Deltaker
          </Link>
          <Link
            className="hover:underline"
            href="/samarbeidspartner"
            aria-label="Gå til underside for samarbeidspartner"
          >
            Samarbeidspartner
          </Link>
        </div>
      </div>
      {/* mobile footer: */}
      <div className="flex flex-row flex-wrap items-start justify-around px-8 pt-8 pb-24 md:hidden md:flex-wrap gap-y-20 gap-x-8 md:px-12">
        <div className="block w-full gap-8">
          <div className="flex flex-col items-center order-1 gap-8">
            <h2 className="text-3xl text-center">Linker</h2>
            <div className="w-32">
              <a
                href="https://jobloop.no/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lenke til Jobloops nettside"
              >
                <Image
                  alt="Jobloop logo"
                  src={logoJobloopHvit}
                  width={350}
                  height={250}
                />
              </a>
            </div>
            <div className="w-32">
              <a
                href="https://www.kodeverketbergen.no/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lenke til Kodeverkets nettside"
              >
                <Image
                  alt="Kodeverket logo"
                  src={logoKodeverketHvit}
                  width={350}
                  height={250}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around w-full gap-8">
          <div className="flex flex-col order-2 gap-8">
            <h2 className="text-3xl">Kontakt</h2>
            {contactInformation.map((person) => (
              <div
                className="flex flex-col pb-4 border-b-2 border-kv-white border-opacity-40"
                key={person.name}
              >
                <b className="text-lg">{person.name}</b>
                <a
                  href={`mailto:${person.email}`}
                  className="py-1 cursor-pointer hover:underline active:underline"
                  target="_blank"
                  aria-label={`Åpner email for å opprette epost til ${person.name}`}
                >
                  {person.email}
                </a>
                <a
                  href={`tel:${person.phoneLink}`}
                  className="md:hover:underline md:active:underline"
                  aria-label={`Åpner telefon for å ringe ${person.name}`}
                >
                  {person.phoneDisplay}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col order-3 w-32 gap-8">
            <h2 className="text-3xl">Sider</h2>
            <Link
              className="hover:underline"
              href="/arbeidsgiver"
              aria-label="Gå til underside for arbeidsgiver"
            >
              Arbeidsgiver
            </Link>
            <Link
              className="hover:underline"
              href="/deltaker"
              aria-label="Gå til underside for deltaker"
            >
              Deltaker
            </Link>
            <Link
              className="hover:underline"
              href="/samarbeidspartner"
              aria-label="Gå til underside for samarbeidspartner"
            >
              Samarbeids- partner
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center">&copy; {new Date().getFullYear()} Kodehode</p>
    </footer>
  );
}

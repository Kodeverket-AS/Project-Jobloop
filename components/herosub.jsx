"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function HeroSub({ content }) {
  return (
    <div className="flex flex-col-reverse px-0 md:flex-row lg:px-24 lg:pt-24 md:px-12 md:pt-10 md:w-screen">
      <div className="w-full px-5 pt-5 md:w-1/2 md:px-0 md:pt-0">
        <h1 className="mb-3 md:mb-5">
          {content.heading ? content.heading : "Tittel kommer her"}
        </h1>
        <div className="lg:pr-20">
          {content.introtext ? (
            <PortableText value={content.introtext} />
          ) : (
            <p>Her kommer en introtekst</p>
          )}
          <div className="mt-10">
            <LinkButton Path="/kontakt" Text={"kontakt oss"} />
          </div>
        </div>
      </div>
      <div className="w-screen pt-6 pl-0 md:w-1/2 md:pl-6">
        <Image
          src={content.image ? content.image : ""}
          width={500}
          height={500}
          className="mx-auto my-auto md:rounded md:w-[32rem] rounded-none"
          alt={content.alt || ""}
        />
      </div>
    </div>
  );
}

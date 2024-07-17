"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./Buttons";

export default function ContactComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-8 py-20 md:px-16 md:py-24 md:flex-row-reverse md:gap-0">
      <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
        Kontakt oss
      </h2>
      <p className="pt-5 pb-12 md:pr-0 lg:pr-16">
        Trenger du hjelp eller ønsker å samarbeide med oss?
      </p>
      <LinkButton Path={"/kontakt"} Text={"Les mer"} />
    </div>
  );
}

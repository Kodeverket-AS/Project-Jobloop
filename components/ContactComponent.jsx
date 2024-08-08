"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./Buttons";

export default function ContactComponent() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 px-8 py-20 md:px-16 md:py-24 ">
      <h2 className="pb-2 border-b-4 border-jobloop-primary-green w-fit">
        Kontakt oss
      </h2>
      <p className="pt-5 pb-12 w-fit">
        Trenger du hjelp eller ønsker å samarbeide med oss?
      </p>
      <div>
        <LinkButton
          Path={"/kontakt"}
          Text={"Kontakt Oss"}
        />
      </div>
    </div>
  );
}

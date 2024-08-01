"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


function placeElement(city) {
  return (
    <div className="flex flex-row items-center justify-center pt-10">
      <div className="w-full md:w-60 md:pt-3 md:h-60">
        <Image
          src={""}
          width={500}
          height={500}
          alt={""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3 py-10 pl-0 w-60 md:py-0 md:pl-5">
        <h3 className="pb-1 border-b-2 border-jobloop-primary-green w-fit">
          {city}
        </h3>
      </div>
    </div>
  );
}

function generateCities(array) {
  const cityElements = [];
  for (let city of array) {
    cityElements.push(placeElement(city));
  }
  return cityElements;
}

export default function Places({ content }) {
  return (
    <div className="w-full px-8 py-20">
      <h2 className="pb-3 mx-auto border-b-2 border-jobloop-primary-green w-fit">
        Våre lokaler
      </h2>
      <div className="flex flex-col">{generateCities(content.cities)}</div>
    </div>
  );
}

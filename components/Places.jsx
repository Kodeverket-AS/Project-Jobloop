"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


function placeElement(city) {
  return (
    <div className="flex flex-row justify-between px-8 py-20">
      <div className="w-full md:w-72 md:pt-3 md:h-72">
        <Image
          src={""}
          width={500}
          height={500}
          alt={""}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-3 py-10 md:py-0">
        <h2 className="pb-3 border-b-2 border-jobloop-primary-green">
          {city}
        </h2>
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
    <div>
      <h2>Våre lokaler</h2>
      <div className="flex flex-col">
        {generateCities(content.cities)}
      </div>
    </div>
  );
}

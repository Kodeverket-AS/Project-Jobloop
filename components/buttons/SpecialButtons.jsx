"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { LuMail } from "react-icons/lu";

export function KontaktButton({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="group flex items-center justify-center w-full gap-1 px-8 py-3 text-base tracking-normal text-center transition-all border-2 rounded-full scale-100 lg:hover:scale-105 group sm:w-fit text-kv-black bg-jobloop-primary-green hover:bg-jobloop-primary-green/0 border-jobloop-primary-green underline underline-offset-2 decoration-kv-black/0 hover:decoration-kv-black/100">
      {Text}
      <LuMail className="inline-block h-5 lg:w-5 transition-all group-hover:translate-x-1 group-hover:animate-pulse" />
    </Link>
  );
}

export function ExternalLinkButton({ Path, Text, Aria }) {
  return (
    <a
      href={Path}
      aria-label={Aria}
      className="flex items-center justify-center w-full gap-1 px-8 py-3 text-base scale-100 lg:hover:scale-105 text-kv-black tracking-normal text-center transition-all duration-300 border-2 border-solid rounded-full sm:w-fit bg-kv-white border-kv-black hover:bg-jobloop-primary-green hover:border-jobloop-primary-green hover:shadow-lg shadow-md shadow-kv-black/20 focus:bg-jobloop-primary-green focus:text-kv-white">
      {Text}
      <BiLinkExternal className="inline-block h-5 lg:w-5 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}

export function LesMerButton({ Path, Text = "Les mer" }) {
  return (
    <a 
      href={Path} 
      className="w-full md:w-auto md:max-w-[135px] inline-flex items-center gap-3 px-6 py-3 bg-jobloop-primary-green text-white rounded-full hover:bg-jobloop-primary-orange hover:shadow-lg transition-all duration-300 group/btn hover:scale-105"
    >
      <span className="font-medium">{Text}</span>
      <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
    </a>
  );
}

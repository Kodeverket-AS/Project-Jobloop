"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { LuMail, LuMailOpen } from "react-icons/lu";
// import { LuMailOpen } from "react-icons/lu";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll til toppen"
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-kv-black text-jobloop-primary-green rounded-full hover:scale-[0.90] border shadow ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}>
      <FaArrowUp
        className="w-6 h-6 "
        strokeWidth={1.5}
      />
    </button>
  );
}

export function LinkButton({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="w-full px-8 py-3 tracking-normal text-center scale-100 lg:hover:scale-105 text-kv-black transition-all bg-kv-white border-2 border-solid rounded-full sm:w-fit border-kv-black hover:bg-jobloop-primary-green  hover:border-jobloop-primary-green focus:bg-jobloop-primary-green">
      {Text}
    </Link>
  );
}
export function LinkButtonInternal({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className=" flex items-center gap-1 py-3 font-bold tracking-normal underline transition-all text-jobloop-secondary-green w-fit decoration-jobloop-secondary-green/5 underline-offset-4 hover:underline-offset-2 hover:decoration-jobloop-secondary-green/100 hover:gap-2 ">
      {Text}
      <FaArrowRight className="inline-block h-4 lg:w-4" />
    </Link>
  );
}
export function LinkButtonAnimatedWithIcon({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="relative group overflow-hidden flex items-center justify-center w-full gap-1 px-8 py-3 text-base font-medium text-center transition-all rounded-full sm:w-fit text-kv-black bg-jobloop-primary-green scale-100 lg:hover:scale-105 shadow-lg shadow-kv-black/30 hover:shadow-jobloop-primary-orange/20">
      <div className="absolute inset-0 bg-jobloop-primary-orange w-0 group-hover:w-[120%] transition-all duration-500 md:duration-600 lg:duration-700 ease-in-out -z-10" style={{transform: 'skewX(-45deg)', left: '-10%'}}></div>
      <span className="relative z-10">{Text}</span>
      <LuMail className="inline-block h-5 lg:w-5" />
    </Link>
  );
}
export function LinkButtonAnimated({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="relative group overflow-hidden flex items-center justify-center w-full gap-1 px-8 py-3 text-base font-medium text-center transition-all rounded-full sm:w-fit text-kv-black bg-jobloop-primary-green scale-100 lg:hover:scale-105 shadow-lg shadow-kv-black/30 hover:shadow-jobloop-primary-orange/20">
      <div className="absolute inset-0 bg-jobloop-primary-orange w-0 group-hover:w-[120%] transition-all duration-500 md:duration-600 lg:duration-700 ease-in-out -z-10" style={{transform: 'skewX(-45deg)', left: '-10%'}}></div>
      <span className="relative z-10">{Text}</span>
      {/* <MdOutlineMail className="inline-block h-5 lg:w-5" /> */}
    </Link>
  );
}

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
      className="flex items-center justify-center w-full gap-1 px-8 py-3 text-base scale-100 lg:hover:scale-105 text-kv-black tracking-normal text-center transition-all border-2 border-solid rounded-full sm:w-fit bg-kv-white border-kv-black hover:bg-jobloop-primary-green hover:border-jobloop-primary-green  focus:bg-jobloop-primary-green focus:text-kv-white "
      target="_blank"
      rel="noopener noreferrer">
      {Text}
      <BiLinkExternal className="inline-block h-5 lg:w-5" />
    </a>
  );
}

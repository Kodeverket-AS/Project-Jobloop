"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

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
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-jobloop-secondary-green text-kv-white rounded-full hover:scale-[0.90] border shadow ${
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
      className="w-full px-8 py-2 tracking-normal text-center transition-all bg-white border-2 border-solid rounded-full sm:w-fit border-kv-black hover:bg-jobloop-secondary-green hover:border-jobloop-secondary-green hover:text-kv-white focus:bg-jobloop-secondary-green focus:text-kv-white">
      {Text}
    </Link>
  );
}
export function LinkButtonInternal({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="flex items-center gap-1 py-2 font-bold tracking-normal underline transition-all text-jobloop-secondary-green w-fit decoration-jobloop-secondary-green/5 underline-offset-4 hover:underline-offset-2 hover:decoration-jobloop-secondary-green/100 hover:gap-2 ">
      {Text}
      <FaArrowRight className="inline-block h-4 lg:w-4" />
    </Link>
  );
}
export function LinkButtonRed({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="w-full px-8 py-3 text-base tracking-wide text-center transition-all rounded-full lg:text-lg sm:w-fit text-kv-white bg-jobloop-secondary-orange border-secondary-orange hover:bg-jobloop-secondary-green focus:bg-jobloop-secondary-green">
      {Text}
    </Link>
  );
}

export function KontaktButton({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="flex items-center justify-center w-full gap-1 px-8 py-3 text-base tracking-normal text-center transition-all border-2 rounded-full group sm:w-fit text-kv-white bg-jobloop-secondary-green border-jobloop-secondary-green hover:text-jobloop-secondary-green hover:bg-jobloop-secondary-green/5 focus:bg-jobloop-secondary-green/5">
      {Text}
      <MdOutlineMail className="inline-block h-5 lg:w-5" />
    </Link>
  );
}

export function ExternalLinkButton({ Path, Text, Aria }) {
  return (
    <a
      href={Path}
      aria-label={Aria}
      className="flex items-center justify-center w-full gap-1 px-8 py-2 text-base tracking-normal text-center transition-all border-2 border-solid rounded-full sm:w-fit bg-kv-white border-kv-black hover:bg-jobloop-secondary-green hover:border-jobloop-secondary-green hover:text-kv-white focus:bg-jobloop-secondary-green focus:text-kv-white "
      target="_blank"
      rel="noopener noreferrer">
      {Text}
      <BiLinkExternal className="inline-block h-5 lg:w-5" />
    </a>
  );
}

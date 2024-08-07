"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

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
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-jobloop-primary-green text-kv-white rounded-full hover:scale-[0.90] border shadow ${
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
      className="w-full tracking-normal sm:w-fit text-center px-8 py-2 transition-all border-2 border-solid bg-white border-kv-black rounded-full hover:bg-jobloop-secondary-green hover:border-jobloop-secondary-green hover:text-kv-white focus:bg-jobloop-secondary-green focus:text-kv-white">
      {Text}
    </Link>
  );
}
export function LinkButtonInternal({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="text-jobloop-secondary-green font-bold flex gap-1 items-center tracking-normal w-fit underline decoration-jobloop-secondary-green/5 underline-offset-4 py-2 transition-all hover:underline-offset-2 hover:decoration-jobloop-secondary-green/100 hover:gap-2 ">
      {Text}
      <FaArrowRight className="inline-block lg:w-4 h-4" />
    </Link>
  );
}
export function LinkButtonRed({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="text-base lg:text-lg w-full tracking-wide sm:w-fit font-bold text-center px-8 py-3 transition-all text-kv-white bg-jobloop-secondary-orange border-secondary-orange rounded-full hover:bg-jobloop-secondary-green focus:bg-jobloop-secondary-green">
      {Text}
    </Link>
  );
}

export function ExternalLinkButton({ Path, Text, Aria }) {
  return (
    <a
      href={Path}
      aria-label={Aria}
      className="lg:text-lg tracking-normal flex items-center justify-center gap-1 w-full sm:w-fit text-center px-8 py-2 transition-all border-2 border-solid bg-kv-white border-kv-black rounded-full hover:bg-jobloop-secondary-green hover:border-jobloop-secondary-green hover:text-kv-white focus:bg-jobloop-secondary-green focus:text-kv-white "
      target="_blank"
      rel="noopener noreferrer">
      {Text}
      <BiLinkExternal className="inline-block lg:w-6 h-6" />
    </a>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

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
      className="px-8 py-2 transition-all border-2 border-solid bg-kv-white border-kv-black rounded-3xl hover:bg-jobloop-secondary-green hover:border-none hover:text-kv-white focus:bg-jobloop-secondary-green focus:text-kv-white w-fit">
      {Text}
    </Link>
  );
}
export function LinkButtonRed({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className="w-full sm:w-fit font-bold text-center px-8 py-3 transition-all text-kv-white bg-jobloop-secondary-orange border-secondary-orange rounded-full hover:bg-jobloop-secondary-green focus:bg-jobloop-secondary-green">
      {Text}
    </Link>
  );
}

export function ExternalLinkButton({ Path, Text, Aria }) {
  return (
    <a
      href={Path}
      aria-label={Aria}
      className="px-8 py-2 transition-all border-2 border-solid bg-kv-white border-kv-black rounded-3xl hover:bg-jobloop-secondary-green hover:border-none hover:text-kv-white focus:bg-jobloop-secondary-green focus:text-kv-white w-fit"
      target="_blank"
      rel="noopener noreferrer">
      {Text}
    </a>
  );
}

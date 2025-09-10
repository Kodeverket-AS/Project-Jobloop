"use client";

import Link from "next/link";
import { LuMail } from "react-icons/lu";

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
    </Link>
  );
}

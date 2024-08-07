"use client";

import Image from "next/image";
import { LinkButton } from "./Buttons";

/**
 *
 * ====================================================================
 * The intro section of each offering section. Used on the Landingpage
 * Button is available through boolean: isButton
 *
 * ====================================================================
 *
 */

// Image on Left side
export const IntroSection = ({ title, text, image, alt, path, isButton }) => {
  return (
    <div className="flex flex-col gap-6 px-8 py-20 lg:py-24 lg:flex-row lg:gap-12 ">
      <div className="w-full lg:w-1/2 ">
        <Image
          alt={alt}
          src={image}
          width={1500}
          height={500}
          className="max-w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h2 className="text-kv-black text-2xl lg:text-5xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed lg:text-2xl">
          {text}
        </p>
        {isButton && (
          <LinkButton
            Path={path}
            Text={"Les mer"}
          />
        )}
      </div>
    </div>
  );
};

// Image on Right side
export const IntroSectionReverse = ({
  title,
  text,
  image,
  alt,
  path,
  isButton,
}) => {
  return (
    <div className="flex flex-col-reverse gap-6 px-8 py-20 lg:py-24 lg:flex-row lg:gap-12 ">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h2 className="text-kv-black text-2xl lg:text-4xl xl:text-5xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed lg:text-xl xl:text-2xl ">
          {text}
        </p>
        {isButton && (
          <LinkButton
            Path={path}
            Text={"Les mer"}
          />
        )}
      </div>
      <div className="w-full lg:w-1/2 ">
        <Image
          alt={alt}
          src={image}
          width={1500}
          height={500}
          className="max-w-full object-cover"
        />
      </div>
    </div>
  );
};

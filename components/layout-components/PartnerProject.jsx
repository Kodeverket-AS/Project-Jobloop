"use client";

import Image from "next/image";
import ButtonCTA from "./ButtonCTA";

export const PartnerProject = ({
  title,
  text,
  image,
  alt,
  path,
  isButton,
  btnVariant,
  btnText,
}) => {
  return (
    <div className="flex flex-col gap-6   lg:flex-row lg:gap-12 ">
      <div className="w-full lg:w-1/2">
        <Image
          alt={alt}
          src={image}
          width={1000}
          height={500}
          className="max-w-full h-96 object-cover rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-center">
        <h2 className="text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h2>
        <p className="text-gray-600 text-base xl:leading-relaxed lg:text-lg">
          {text}
        </p>
        {isButton && (
          <ButtonCTA
            isButton={true}
            Path={path}
            Text={btnText ?? "Les mer"}
            btnVariant={btnVariant}
          />
        )}
      </div>
    </div>
  );
};

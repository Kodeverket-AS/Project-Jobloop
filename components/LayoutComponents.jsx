"use client";

import Image from "next/image";
import { LinkButton, ExternalLinkButton, LinkButtonInternal } from "./Buttons";
import Link from "next/link";

/**
 *
 * ====================================================================
 * The intro section of each offering section. Used on the Landingpage
 * Button is available through boolean: isButton
 *
 * ====================================================================
 *
 */

const ButtonCTA = ({ isButton, btnVariant, ...props }) => {
  if (!isButton) {
    return null;
  }

  let ButtonComponent;

  switch (btnVariant) {
    case "externalLink":
      ButtonComponent = ExternalLinkButton;
      break;
    case "internalLink":
      ButtonComponent = LinkButtonInternal;
      break;
    default:
      ButtonComponent = LinkButton;
  }

  return <ButtonComponent {...props} />;
};

// Image on Left side
export const IntroSection = ({
  title,
  text,
  image,
  alt,
  path,
  isButton,
  btnVariant,
  btnText,
  ifImageLink,
  imageLinkPath,
}) => {
  return (
    <div className="flex flex-col gap-6 px-8 py-20 lg:py-24 lg:flex-row lg:gap-12 ">
      {ifImageLink ? (
        <a
          href={imageLinkPath}
          target="_blank"
          title="Klikk bilde for å lese mer om FERD prisen her"
          className="relative w-full lg:w-1/2 overflow-hidden group saturate-100 hover:saturate-150 ">
          <div className="absolute p-4 transition-all duration-300 bottom-0 lg:-bottom-20 lg:group-hover:-bottom-0 left-0 w-full h-20 bg-black/70">
            <h3 className="text-kv-white">
              Klikk bilde for å lese om da vi mottok FERD prisen 2024
            </h3>
          </div>
          <Image
            alt={alt}
            src={image}
            width={1500}
            height={500}
            className="max-w-full object-cover"
          />
        </a>
      ) : (
        <div className="w-full lg:w-1/2 ">
          <Image
            alt={alt}
            src={image}
            width={1500}
            height={500}
            className="max-w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h2 className=" text-kv-black text-2xl lg:text-5xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed lg:text-2xl">
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

// Image on Right side
export const IntroSectionReverse = ({
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
    <div className="flex flex-col-reverse gap-6 px-8 py-20 lg:py-24 lg:flex-row lg:gap-12 ">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h2 className=" text-kv-black text-2xl lg:text-4xl xl:text-5xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed lg:text-xl xl:text-2xl ">
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
        <h3 className="text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h3>
        <p className="text-base lg:text-xl text-gray-600">{text}</p>
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

export const PartnerProjectReverse = ({
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
    <div className="flex flex-col-reverse gap-6 px-8 py-20 lg:py-24 lg:flex-row lg:gap-12 ">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h3 className="text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">
          {title}
        </h3>
        <p className="text-base lg:text-xl text-gray-600">{text}</p>
        {isButton && (
          <ButtonCTA
            isButton={true}
            Path={path}
            Text={btnText ?? "Les mer"}
            btnVariant={btnVariant}
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

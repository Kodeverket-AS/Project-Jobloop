"use client";
import React, { ReactNode } from "react";
import { PortableText } from "@portabletext/react";


interface SectionComponentProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  isBgColor?: boolean;
  bgColorGreen?: boolean;
  bgColorOrange?: boolean;
  bgColorGrey?: boolean;
  reverseLayoutOrder?: boolean;
  centerVertically?: boolean;
}

export const SectionComponent: React.FC<SectionComponentProps> = ({
  leftContent,
  rightContent,
  isBgColor = false,
  bgColorGreen = false,
  bgColorOrange = false,
  bgColorGrey = false,
  reverseLayoutOrder = false,
  centerVertically = false,
}) => {
  let backgroundColor = "";
  if (isBgColor) {
    backgroundColor = bgColorGreen
      ? "bg-jobloop-primary-green/10"
      : bgColorOrange
      ? "bg-jobloop-primary-orange/10"
      : bgColorGrey
      ? "bg-jobloop-primary-grey/5"
      : "";
  }

  return (
    <section className={`w-screen ${backgroundColor} ${isBgColor ? "py-8" : ""}`}>
      <div className="max-w-screen-2xl mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row gap-8 ${
            reverseLayoutOrder ? "lg:flex-row-reverse" : ""
          } ${centerVertically ? "items-center" : ""}`}
        >
          <div className="flex-1 flex items-center justify-center lg:order-2">
            <div className="w-full [&_img]:w-full [&_img]:h-auto [&_img]:object-cover [&_img]:rounded-xl">
              {rightContent}
            </div>
          </div>
          <div className="flex-1 flex items-center lg:order-1">
            {leftContent}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TextBlockProps {
  title: string;
  content?: any;
  content2?: any;
  content3?: any;
  contentString?: string;
  isButton?: boolean;
  path?: string;
  text?: string;
  isContained?: boolean;
  isOrange?: boolean;
  isCentered?: boolean;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  title,
  content,
  content2,
  content3,
  contentString,
  isOrange = false,
  isCentered = false,
}) => {
  const textAlignment = isCentered ? "text-center" : "text-left";


  return (
    <article className={`flex flex-col gap-4 w-full ${textAlignment} my-auto`}>
      <h2
        className={`text-kv-black xl:text-4xl underline underline-offset-8  leading-relaxed pb-2 ${
          isOrange
            ? "decoration-jobloop-primary-orange"
            : "decoration-jobloop-primary-green"
        }`}
      >
        {title}
      </h2>

      <div
        className={`text-kv-black/70 text-base xl:text-xl xl:leading-relaxed ${
          isCentered ? "max-w-4xl mx-auto" : "xl:max-w-[70ch]"
        }`}
      >
        {content ? (
          <>
            <PortableText value={content} />
            <PortableText value={content2} />
            <PortableText value={content3} />
          </>
        ) : (
          <p>{contentString}</p>
        )}
      </div>

    </article>
  );
};

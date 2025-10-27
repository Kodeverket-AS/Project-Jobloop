"use client";
import React, { ReactNode } from "react";


interface SectionComponentProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  reverseLayoutOrder?: boolean;
  centerVertically?: boolean;
}

export const SectionComponent: React.FC<SectionComponentProps> = ({
  leftContent,
  rightContent,
  reverseLayoutOrder = false,
  centerVertically = false,
}) => {
  return (
    <div className="flex flex-col justify-between  md:flex-row-reverse md:px-0">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div
          className={`flex flex-col md:flex-row gap-8 ${
            reverseLayoutOrder ? "" : ""
          } ${centerVertically ? "items-center" : ""}`}
        >
          <div className={`flex-1 flex items-center ${reverseLayoutOrder ? 'order-1 lg:order-1' : 'order-2 lg:order-1'}`}>
            <div className="w-full [&_img]:w-full [&_img]:h-auto [&_img]:object-cover [&_img]:rounded-xl [&_img]:md:max-w-sm [&_img]:md:mx-auto [&_img]:lg:max-w-none">
              {leftContent}
            </div>
          </div>
          <div className={`flex-1 flex items-center justify-center ${reverseLayoutOrder ? 'order-2 lg:order-2' : 'order-1 lg:order-2'}`}>
            <div className="w-full [&_img]:w-full [&_img]:h-auto [&_img]:object-cover [&_img]:rounded-xl [&_img]:md:max-w-sm [&_img]:md:mx-auto [&_img]:lg:max-w-none">
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TextBlockProps {
  title: string;
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
  contentString,
  isOrange = false,
  isCentered = false,
}) => {
  const textAlignment = isCentered ? "text-center" : "text-left";


  return (
    <article className={`flex flex-col gap-4 w-full ${textAlignment} my-auto`}>
      <h2
        className={`text-kv-black  md:!text-xl lg:!text-3xl xl:!text-4xl underline underline-offset-8  leading-relaxed pb-2 ${
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
        <p>{contentString}</p>
      </div>

    </article>
  );
};

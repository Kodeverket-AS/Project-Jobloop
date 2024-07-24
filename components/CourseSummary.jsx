"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CourseCard from "./CourseCard";

export default function CourseSummary({ content, course }) {
  return (
    <div className="flex flex-col px-8 pt-20 pb-0 md:pb-20 md:flex-row md:px-12 md:w-screen lg:px-24 2xl:max-w-[1600px]">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h2 className=" md:leading-10">{"Hvem passer " + course + " for?"}</h2>
        <div className=" md:w-5/6 lg:pr-20">
          <div className="py-5">
            <PortableText value={content.targetGroup} />
          </div>
        </div>
      </div>
      <div className="w-full px-0 pt-5 md:pl-7 md:w-1/2 md:pt-0">
        <CourseCard key={content._id} content={content} />
      </div>
    </div>
  );
}
//here is a new line
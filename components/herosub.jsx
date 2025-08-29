"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function HeroSub({ content }) {
    return (
        <div className='flex flex-col-reverse gap-6 px-8 py-20 lg:py-24 lg:flex-row lg:gap-12'>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-kv-black text-2xl lg:text-4xl xl:text-5xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit'>
                    {content.heading ? content.heading : "Tittel kommer her"}
                </h1>
                <div className='flex flex-col gap-4'>
                    {content.introtext ? (
                        <PortableText value={content.introtext} />
                    ) : (
                        <p>Her kommer en introtekst</p>
                    )}
                    <div>
                        <LinkButton Path='/kontakt' Text={"kontakt oss"} />
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <Image
                    src={content.image ? content.image : ""}
                    width={1500}
                    height={500}
                    className='max-w-full h-96 object-cover rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
                    alt={content.alt || ""}
                />
            </div>
        </div>
    );
}

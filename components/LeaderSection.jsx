"use client";

// import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/Sanity";

export default function LeaderSection({ content, leader, position }) {
    // Check if more leaders are present in the content
    const hasMultipleLeaders =
        content.courseLeaders && content.courseLeaders.length > 0;

    if (hasMultipleLeaders) {
        return (
            <div className='flex flex-col space-y-16 px-4 md:px-0 2xl:max-w-[1600px]'>
                <div>
                    <h2 className='text-kv-black text-xl md:text-2xl lg:text-3xl'>Kursledere</h2>
                    <div className='w-24 h-1 bg-jobloop-primary-green mt-2'></div>
                </div>
                {content.courseLeaders.map((courseLeader, index) => (
                    <div
                        key={index}
                        className='flex flex-col justify-between md:flex-row'
                    >
                        <div className='w-full h-64 md:w-80 md:h-80 flex items-center justify-center'>
                            <Image
                                src={
                                    courseLeader.image ? urlFor(courseLeader.image).width(400).url() : ""
                                }
                                width={400}
                                height={400}
                                alt={
                                    courseLeader.image?.alt
                                        ? courseLeader.image.alt
                                        : `Bilde av ${courseLeader.name}`
                                }
                                className='object-cover w-full h-full rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
                            />
                        </div>
                        <div className='flex flex-col gap-4 w-full md:w-1/2 justify-center'>
                            <h2 className="text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">{courseLeader.position || position}</h2>
                            <p className='text-lg font-semibold text-jobloop-primary-green'>
                                {courseLeader.name || leader}
                            </p>
                            <div className="text-gray-600 text-base xl:leading-relaxed lg:text-xl">
                                <PortableText
                                    value={
                                        courseLeader.description || content.leader
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // original single-leader format
    return (
        <div className='flex flex-col gap-6 px-4 lg:flex-row lg:gap-12 lg:px-0 2xl:max-w-[1600px]'>
            <div className='w-full lg:w-1/2 flex items-center justify-center'>
                <Image
                    src={content.image2 ? content.image2 : ""}
                    width={400}
                    height={400}
                    alt={content.alt2 ? content.alt2 : ""}
                    className='object-cover w-80 h-80 rounded-xl shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all duration-500 hover:scale-[1.02]'
                />
            </div>
            <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center'>
                <h2 className="text-kv-black text-xl md:text-2xl lg:text-3xl border-b-2 md:border-b-4 pb-2 border-jobloop-primary-green w-fit">{position}</h2>
                <p className='text-lg font-semibold text-jobloop-primary-green'>
                    {leader}
                </p>
                <div className="text-gray-600 text-base xl:leading-relaxed lg:text-xl">
                    <PortableText value={content.leader} />
                </div>
            </div>
        </div>
    );
}

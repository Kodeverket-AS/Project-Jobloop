"use client";

// import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/Sanity";

export default function LeaderSection({ leaders, contactNames }) {
  
    if (!leaders || leaders.length === 0) {
        return null;
    }

    const leadersToRender = leaders;
        
        return (
            <div className='w-full max-w-[1536px] mx-auto px-4 space-y-8'>
                <div className="text-center mb-12">
                    <h2 className='text-kv-black text-2xl md:text-3xl font-bold mb-4'>Kursledere</h2>
                    <div className='w-24 h-1 bg-jobloop-primary-green mx-auto'></div>
                </div>
                {leadersToRender.map((courseLeader, index) => (
                    <div
                        key={index}
                        className=' rounded-xl p-8 shadow-lg border border-3 border-jobloop-primary-green '
                    >
                        <div className='flex flex-col md:flex-row items-center gap-8'>
                            <div className='w-full lg:w-1/3 flex justify-center'>
                                <div className="relative overflow-hidden rounded-xl shadow-lg group bg-gradient-to-br from-jobloop-primary-green/20 to-jobloop-primary-orange/20">
                                    {courseLeader.image ? (
                                        <Image
                                            src={typeof courseLeader.image === 'string' ? courseLeader.image : urlFor(courseLeader.image).width(400).url()}
                                            width={400}
                                            height={400}
                                            alt={courseLeader.image?.alt || `Bilde av ${courseLeader.name}`}
                                            className='object-cover w-64 h-64 lg:w-80 lg:h-80 group-hover:scale-105 transition-transform duration-300'
                                        />
                                    ) : (
                                        <div className="w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 bg-jobloop-primary-green/30 rounded-full flex items-center justify-center">
                                                    <span className="text-2xl lg:text-4xl font-bold text-jobloop-primary-green">
                                                        {courseLeader.name.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 font-medium">{courseLeader.name}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className='w-full lg:w-2/3 space-y-4'>
                                <div>
                                    <h3 className="text-kv-black text-xl md:text-2xl font-bold border-b-2 border-jobloop-primary-green w-fit pb-2">
                                        {courseLeader.position}
                                    </h3>
                                </div>
                                <p className='text-lg font-semibold text-jobloop-primary-green'>
                                    {courseLeader.name}
                                </p>
                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                    <PortableText
                                        value={courseLeader.description}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
}

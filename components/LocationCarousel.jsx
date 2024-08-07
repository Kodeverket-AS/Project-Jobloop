"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper";

const cities = [
    { name: "Bergen", src: "/Bergen.jpg" },
    { name: "Haugesund", src: "/Haugesund.jpg" },
    { name: "Stavanger", src: "/Stavanger.jpg" },
    { name: "Tønsberg", src: "/Tønsberg.jpg" },
    { name: "Remote", src: "/Remote.jpg" },
];

export default function LocationCarousel() {
    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Våre lokaler</h2>
                <div className='max-w-2xl mx-auto'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        loop
                        pagination={{ clickable: true }}
                    >
                        {cities.map((city) => (
                            <SwiperSlide key={city.name}>
                                <Image
                                    src={city.src}
                                    alt={city.name}
                                    className='object-cover w-full h-64'
                                />
                                <p className='legend'>{city.name}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

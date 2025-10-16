"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const cities = [
  { name: "Bergen", src: "/Bergen.webp" },
  { name: "Haugesund", src: "/Haugesund.webp" },
  { name: "Stavanger", src: "/Stavanger.webp" },
  { name: "Tønsberg", src: "/Tønsberg.webp" },
  { name: "Remote", src: "/Remote.webp" },
  { name: "Oslo", src: "/Oslo.webp" },
  { name: "Molde", src: "/Molde.webp" },
  { name: "Alta", src: "/Alta.webp" },
  { name: "Ålesund", src: "/Ålesund.webp" },
];

export default function LocationCarousel() {
  return (
    <section className=" w-full max-w-[1536px] mx-auto py-16 bg-linear-to-br from-jobloop-primary-green/50 via-white to-jobloop-primary-orange/50 rounded-xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-kv-black">
          Våre lokasjoner
        </h2>
        <span className="block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-8 mx-auto"></span>
        
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 15,
              },
            }}
            autoplay={{ 
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={1200}
            effect="slide"
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            threshold={5}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={false}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            className="locations-swiper">
            
            {cities.map((city) => (
              <SwiperSlide key={city.name}>
                <div className="flex flex-col items-center gap-3 p-2">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Image
                      src={city.src}
                      alt={city.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-kv-black group-hover:text-jobloop-primary-green transition-colors duration-300">
                    {city.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
      
      <style jsx global>{`
        .locations-swiper {
          overflow: hidden;
        }
        
        .locations-swiper .swiper-slide {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        
        .locations-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50%;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #f4a366;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(244, 163, 102, 0.5);
        }
        
        .locations-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const cities = [
    { name: "Bergen", src: "/Bergen.jpg" },
    { name: "Stavenger", src: "/Stavanger.jpg" },
    { name: "Haugesund", src: "/Haugesund.jpg" },
    { name: "Tønsberg", src: "/Tønsberg.jpg" },
    { name: "Digitalt", src: "/Remote.jpg" },
];

export default function LocationCarousel() {
    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Våre lokaler</h2>
                <div className='max-w-2xl mx-auto'>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                    >
                        {cities.map((city, index) => (
                            <div key={index}>
                                <Image
                                    src={city.src}
                                    alt={city.name}
                                    width={800}
                                    height={450}
                                    className='object-cover w-full h-64'
                                />
                                <p className='legend'>{city.name}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

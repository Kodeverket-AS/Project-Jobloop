"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const JulekalenderModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen || !isMounted) return null;

    return (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4'>
            <div 
                className='relative text-jobloop-primary-grey rounded-xl shadow-2xl w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100 h-[90vh] sm:h-[90vh] md:h-[85vh] overflow-hidden'
                style={{
                    backgroundImage: 'url(/christmas-bg1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <button
                    onClick={handleClose}
                    className='absolute top-4 right-4 text-jobloop-primary-grey hover:text-jobloop-primary-green text-3xl font-bold transition-transform duration-200 hover:scale-110 z-20 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center'
                    aria-label='Lukk modal'
                >
                    &times;
                </button>

                <div className='absolute inset-0 flex flex-col items-center justify-between overflow-hidden p-4'>
                    <div className='flex-1 flex items-center justify-center w-full'>
                        <div className='bg-[#5fd9bb] m-2 sm:m-3 md:m-4 lg:m-6 rounded-3xl
                         flex flex-col items-center justify-center text-center overflow-hidden h-[75%] sm:h-[76%] md:h-[72%] lg:h-[78%] xl:h-[80%] w-full max-w-[75%] sm:max-w-[78%] md:max-w-[80%] px-4 sm:px-6 md:px-8 py-8 sm:py-6 md:py-4 lg:py-2'>
                        <div className='mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex justify-center'>
                            <Image
                                src='/logoJobloopHvit.svg'
                                alt='Jobloop Logo'
                                width={100}
                                height={100}
                                className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 opacity-90'
                            />
                        </div>

                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-5'>
                           Digitale Julekalender 2025
                        </h2>

                        <div className='mb-4 sm:mb-5 md:mb-6 space-y-2 sm:space-y-3 overflow-hidden'>
                            <h3 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:leading-loose text-jobloop-primary-grey px-2 sm:px-3 md:px-4'>
                                <strong>
                                    Åpne en ny luke hver dag i desember
                                </strong> og få små drypp med <span className='text-[#00545c] font-bold'>motivasjon</span>, <span className='text-[#ff4d00] font-bold'>læring</span> og <span className='text-[#00545c] font-bold'>desembermagi</span>!
                            </h3>
                            
                        </div>
                        <div className='mt-4 sm:mt-6 md:mt-8 flex justify-center w-full'>
                            <Image
                                src='/graf.png'
                                alt='Grafika'
                                width={300}
                                height={150}
                                className='w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto'
                            />
                        </div>
                        </div>
                    </div>

                    <div
                        className='relative z-10 mb-4 w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] bg-[#008281] text-white font-bold py-2.5 px-5 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide hover:bg-jobloop-secondary-green transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-center'
                        onClick={handleClose}
                    >
                        <a
                            href='/nb/julekalender'
                            className='w-full h-full block'
                        >
                            Åpne julekalenderen
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JulekalenderModal;

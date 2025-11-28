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
                    backgroundImage: 'url(/christmas-bg2.jpg)',
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

                <div className='absolute inset-0 flex flex-col items-center justify-around overflow-hidden '>
                    <div className='flex-1 flex items-center justify-center w-full'>
                        <div className='bg-white/70  rounded-3xl
                         flex flex-col items-center justify-center text-center gap-4 h-[75%] w-4/5 p-4'>
                       
                        <h2 className='text-xl text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 '>
                           Digitale Julekalender 2025
                        </h2>

                        <div className='mb-4  space-y-2 sm:space-y-3 overflow-hidden'>
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
                                className=''
                            />
                        </div>
                        </div>
                    </div>

                    <div
                        className='relative z-10 mb-8 w-4/5 bg-jobloop-secondary-green text-white font-bold  py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide hover:bg-jobloop-secondary-orange transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-center'
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Snowflakes from "./Snowflakes";
import SnowflakesModal from "./SnowflakesModal";

const JulekalenderModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);
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
        <>
            <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto'>
                <Snowflakes />
            <div 
                className='relative text-jobloop-primary-grey rounded-xl shadow-2xl w-full max-w-[90vw] md:max-w-lg lg:max-w-xl mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100 my-auto'
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

                <SnowflakesModal />

                <div className='relative flex flex-col items-center justify-center gap-4 z-10 p-2 min-h-[85vh]'>
                    <div className='bg-white/80 rounded-3xl shadow-2xl
                     flex flex-col items-center justify-center text-center gap-8 min-h-[70vh] w-4/5 p-4 md:p-6 my-auto'>
                       
                        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-jobloop-secondary-green' style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>
                           Digital Julekalender 2025
                        </p>

                        <div className='mb-2 md:mb-4 space-y-1'>
                            <h3 className='text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-semibold text-neutral-800 px-1 md:px-3'>
                                <strong>
                                    Åpne en ny luke hver dag i desember
                                </strong> og få små drypp med <span className='text-[#00545c] font-bold'>motivasjon</span>, <span className='text-[#ff4d00] font-bold'>læring</span> og <span className='text-[#00545c] font-bold'>desembermagi</span>!
                            </h3>
                        </div>
                        <div className='mt-2 md:mt-4 flex justify-center w-full'>
                            <Image
                                src='/graf.png'
                                alt='Grafika'
                                width={300}
                                height={150}
                                className='w-full max-w-[180px] md:max-w-[260px] h-auto'
                            />
                        </div>
                        <div
                            className='mt-4 md:mt-6 w-full  bg-jobloop-secondary-green text-white font-extrabold py-4 rounded-full text-sm md:text-base lg:text-lg uppercase tracking-wider hover:bg-jobloop-secondary-orange transition duration-300 ease-in-out transform hover:scale-105 shadow-xl cursor-pointer text-center'
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
            </div>
        </>
    );
};

export default JulekalenderModal;

"use client";

import Link from "next/link";
import Image from "next/image";
import logoJobloopHvit from "../../public/logoJobloopHvit.svg";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Contact information for the footer
const contactInformation = [
    {
        name: "Deltaker",
        email: "team@jobloop.no ",
    },
    {
        name: "Bedrifter",
        email: "christer@jobloop.no",
        phoneDisplay: "+47 92 88 28 04",
        phoneLink: "+4792882804",
    },
    {
        name: "Oppdragsgiver",
        email: "inger-johanne@jobloop.no ",
        phoneDisplay: "+47 48 35 87 03",
        phoneLink: "+4748358703",
    },
];

export default function Footer() {
    return (
        <footer className='pb-8 text-kv-white bg-gray-900'>
            <div className='flex-row flex-wrap items-start justify-around hidden px-12 pt-8 pb-24 md:flex gap-y-20 gap-x-8 md:px-12 2xl:max-w-[1600px] 2xl:mx-auto'>
                <div className='flex flex-col order-2 gap-8 md:order-1'>
                    <h2 className='text-3xl'>Kontakt</h2>
                    {contactInformation.map((person) => (
                        <div
                            className='flex flex-col pb-4 border-b-2 border-kv-white border-opacity-40'
                            key={person.name}
                        >
                            <b className='text-lg'>{person.name}</b>
                            <a
                                href={`mailto:${person.email}`}
                                className='py-1 cursor-pointer hover:underline active:underline'
                                target='_blank'
                                aria-label={`Åpner email for å opprette epost til ${person.name}`}
                            >
                                {person.email}
                            </a>
                            <a
                                href={`tel:${person.phoneLink}`}
                                className='md:hover:underline md:active:underline'
                                aria-label={`Åpner telefon for å ringe ${person.name}`}
                            >
                                {person.phoneDisplay}
                            </a>
                        </div>
                    ))}
                </div>
                <div className='items-center order-1 gap-8 md:flex md:flex-col md:order-2'>
                    <div className='w-40'>
                        <a
                            href='https://jobloop.no/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Lenke til Jobloops nettside'
                        >
                            <Image
                                alt='Jobloop logo'
                                src={logoJobloopHvit}
                                width={350}
                                height={250}
                            />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col order-3 gap-8'>
                    <h2 className='text-3xl'>Sider</h2>
                    {/* <Link
                        className='hover:underline'
                        href='/nyhetsbrev'
                        aria-label='Gå til underside for arbeidsgiver'
                    >
                        Nyhetsbrev
                    </Link> */}
                    <Link
                        className='hover:underline'
                        href='/ansettelser'
                        aria-label='Gå til underside for deltaker'
                    >
                        Ledige stillinger
                    </Link>
                    <Link
                        className='hover:underline'
                        href='/om-oss'
                        aria-label='Gå til underside for samarbeidspartner'
                    >
                        Om Jobloop
                    </Link>
                    <div className='flex space-x-8 mt-40'>
                        <a
                            href='https://www.facebook.com/JobLoop.Norge'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Facebook'
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href='https://www.instagram.com/jobloop.norge/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Instagram'
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href='https://www.linkedin.com/company/jobloop/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* mobile footer: */}
            <div className='flex flex-row flex-wrap items-start justify-around px-8 pt-8 pb-24 md:hidden md:flex-wrap gap-y-20 gap-x-8 md:px-12'>
                <div className='block w-full gap-8'>
                    <div className='flex flex-col items-center order-1 gap-8'>
                        <div className='w-32'>
                            <a
                                href='https://jobloop.no/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Lenke til Jobloops nettside'
                            >
                                <Image
                                    alt='Jobloop logo'
                                    src={logoJobloopHvit}
                                    width={350}
                                    height={250}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-around w-full gap-8'>
                    <div className='flex flex-col order-2 gap-8'>
                        <h2 className='text-3xl'>Kontakt</h2>
                        {contactInformation.map((person) => (
                            <div
                                className='flex flex-col pb-4 border-b-2 border-kv-white border-opacity-40'
                                key={person.name}
                            >
                                <b className='text-lg'>{person.name}</b>
                                <a
                                    href={`mailto:${person.email}`}
                                    className='py-1 cursor-pointer hover:underline active:underline'
                                    target='_blank'
                                    aria-label={`Åpner email for å opprette epost til ${person.name}`}
                                >
                                    {person.email}
                                </a>
                                <a
                                    href={`tel:${person.phoneLink}`}
                                    className='md:hover:underline md:active:underline'
                                    aria-label={`Åpner telefon for å ringe ${person.name}`}
                                >
                                    {person.phoneDisplay}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col order-3 w-32 gap-8'>
                        <h2 className='text-3xl'>Sider</h2>
                        {/* <Link
                            className='hover:underline'
                            href='/nyhetsbrev'
                            aria-label='Gå til underside for arbeidsgiver'
                        >
                            Nyhetsbrev
                        </Link> */}
                        <Link
                            className='hover:underline'
                            href='/ansettelser'
                            aria-label='Gå til underside for deltaker'
                        >
                            Ledige stillinger
                        </Link>
                        <Link
                            className='hover:underline'
                            href='/om-oss'
                            aria-label='Gå til underside for samarbeidspartner'
                        >
                            Om oss
                        </Link>
                        <div className='flex space-x-4 mt-auto'>
                            <a
                                href='https://www.facebook.com/JobLoop.Norge'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Facebook'
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href='https://www.instagram.com/jobloop.norge/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram'
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href='https://www.linkedin.com/company/jobloop/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center'>
                &copy; JobLoop, {new Date().getFullYear()}
            </p>
        </footer>
    );
}

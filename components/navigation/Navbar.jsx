"use client";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./Hamburger";

//Nye logoer importert her. De er nå svg filer, så de kan skaleres uten å miste kvalitet.
import JobloopFarge from "../../public/JobloopFarge.svg";
import logoJobloopHvit from "../../public/logoJobloopHvit.svg";

export default function Navbar() {
    return (
        <nav className='absolute top-0 z-50 w-full px-5 lg:px-7'>
            <div className='flex items-center justify-between max-w-[1536px] mx-auto'>
                <div className='p-4'>
                    <Link href='/' aria-label='Gå til landingssiden'>
                        <Image
                            className='w-28 lg:w-36'
                            src={logoJobloopHvit}
                            width={350}
                            height={220}
                            alt='Jobloop Logo'
                        />
                    </Link>
                </div>
                <div>
                    <div className='hidden h-auto p-4 md:block'>
                        {/* <Link
                            href='/nyhetsbrev'
                            aria-label='gå til denne undersiden for å se Jobloops nyhetsbrev'
                            className='px-4 font-semibold text-lg md:portrait:pl-4 md:portrait:pr-2 lg:px-4 text-kv-white md:hover:underline'
                        >
                            Nyhetsbrev
                        </Link> */}
                        {/*<Link
              href="/ansettelser"
              aria-label="gå til denne undersiden for å se våre åpne stillinger"
              className="px-4 font-semibold text-lg md:portrait:px-2 lg:px-4 text-kv-white md:hover:underline">
              Vi ansetter!
            </Link>*/}
                        <Link
                            href='/om-oss'
                            aria-label='gå til denne undersiden for å lese mer om oss'
                            className='px-2 font-semibold text-xl md:px-4 text-kv-white md:hover:underline'
                        >
                            OM OSS
                        </Link>
                        <Link
                            href='/kontakt'
                            aria-label='gå til denne undersiden for å ta kontakt med en av oss'
                            className='px-2 font-semibold text-xl md:px-4 text-kv-white md:hover:underline'
                        >
                            KONTAKT
                        </Link>
                    </div>
                    <div className='px-4'>
                        <HamburgerMenu hamFill='white' />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export function NavbarAlt({ kiKursStyle = false }) {
    return (
        <nav className={`w-full px-5 ${kiKursStyle ? 'bg-jobloop-primary-green/20' : ''}`}>
            <div className='flex items-center justify-between 3xl:justify-around max-w-[1536px] mx-auto'>
                <div className='flex flex-row items-end p-4'>
                    <Link href='/' aria-label='Gå til landingssiden'>
                        <Image
                            className='w-28 lg:w-36'
                            src={JobloopFarge}
                            width={350}
                            height={220}
                            alt='Jobloop Logo'
                        />
                    </Link>
                </div>
                <div>
                    <div className='hidden h-auto p-4 md:block'>
                        {/* <Link
                            href='/nyhetsbrev'
                            aria-label='gå til denne undersiden for å se jobloops nyhetsbrev'
                            className='px-4 font-semibold text-lg md:portrait:pl-4 md:portrait:pr-2 lg:px-4 text-jobloop-secondary-green md:hover:underline'
                        >
                            Nyhetsbrev
                        </Link> */}
                        {/*<Link
              href="/ansettelser"
              aria-label="gå til denne undersiden for å se våre åpne stillinger"
              className="px-4 font-semibold text-lg md:portrait:px-2 lg:px-4 text-jobloop-secondary-green md:hover:underline">
              Vi ansetter!
            </Link>*/}
                        <Link
                            href='/om-oss'
                            aria-label='gå til denne undersiden for å lese mer om oss'
                            className='px-4 font-semibold text-xl md:portrait:px-2 lg:px-4 text-jobloop-primary-grey md:hover:underline'
                        >
                            OM OSS
                        </Link>
                        <Link
                            href='/kontakt'
                            aria-label='gå til denne undersiden for å ta kontakt med en av oss'
                            className='px-4 font-semibold text-xl md:portrait:px-2 lg:px-4 text-jobloop-primary-grey md:hover:underline'
                        >
                            KONTAKT
                        </Link>
                    </div>
                    <div className='px-4'>
                        <HamburgerMenu hamFill='colour' />
                    </div>
                </div>
            </div>
        </nav>
    );
}

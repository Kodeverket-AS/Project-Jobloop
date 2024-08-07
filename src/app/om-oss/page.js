import Image from "next/image";

export default function OmOss() {
    return (
        <main className='flex flex-col items-center justify-between min-h-screen p-8'>
            <section className='flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto p-4'>
                <div className='order-2 md:order-1 md:flex-shrink-0 md:mr-8 mb-4 md:mb-0'>
                    <Image
                        src='/JLomossbilde.png'
                        alt='Om oss'
                        width={400}
                        height={900}
                    />
                </div>
                <div className='order-1 md:order-2'>
                    <h1 className='text-4xl font-bold mb-4 relative'>
                        Om oss
                        <span className='block w-full h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
                    </h1>
                    <p className='text-lg leading-relaxed mb-6'>
                        Sammen med oppstartsmiljøet tilknyttet Bergen.Works
                        coworkingspace har JobLoop de siste årene utviklet en
                        alternativ plattform for kvalifisering og rekruttering
                        av junior utviklere og innholdsprodusenter. Hensikten er
                        å dekke det voksende kompetansegapet på IT-markedet og
                        samtidig inkludere flere unge som har falt utenfor
                        arbeid og utdanning. Samarbeidet ble i senere tid døpt
                        “Kodehode” og videreutviklet med Arbeids- og
                        Velferdsetaten NAV. I dag leveres versjoner av Kodehode
                        som amo-tiltak i Vestland og Rogaland sammen med vår
                        gode samarbeidspartner Podium.
                    </p>
                    <button className='px-6 py-3 bg-white text-jobloop-secondary-orange border-2 border-jobloop-secondary-orange rounded-full font-semibold  hover:bg-jobloop-secondary-orange hover:text-white'>
                        Kontakt oss
                    </button>
                </div>
            </section>
            <section className='py-8'>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col items-center'>
                        <div className='w-60 h-60'>
                            <Image
                                src='/Sina.jpg'
                                alt='Profilbilde av Sina'
                                width={100}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='mt-4'>Sina</p>
                        <p>Daglig Leder JobLoop</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-60 h-60'>
                            <Image
                                src='/Karl.png'
                                alt='Profilbilde av Karl Haakon'
                                width={100}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='mt-4'>Karl Haakon</p>
                        <p>Markedsutvikler</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-60 h-60'>
                            <Image
                                src='/Inger.jpg'
                                alt='Profilbilde av Inger Johanne'
                                width={100}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='mt-4'>Inger Johanne</p>
                        <p>Teamleder</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-60 h-60'>
                            <Image
                                src='/Beate.jpg'
                                alt='Profilbilde av Beate'
                                width={100}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='mt-4'>Beate</p>
                        <p>Kursleder</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-60 h-60'>
                            <Image
                                src='/Oda.jpg'
                                alt='Profilbilde av Oda Kristin'
                                width={100}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='mt-4'>Oda Kristin</p>
                        <p>Kursleder</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-60 h-60'>
                            <Image
                                src='/Kim.jpg'
                                alt='Profilbilde av Kim'
                                width={100}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='mt-4'>Kim</p>
                        <p>Kursleder</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

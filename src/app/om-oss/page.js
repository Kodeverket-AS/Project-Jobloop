import Image from "next/image";
// import { carousel } from "../../components/Omosscarousel";

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
            <section className='py-16 bg-white'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-12'>
                        Våre Samarbeidspartnere
                    </h2>
                    <div className='grid gap-12 md:grid-cols-2'>
                        <div className='flex flex-col items-center p-6 border rounded-lg shadow-lg'>
                            <Image
                                src='/fontenehusetlogo.png'
                                alt='Fontenehuset Bergen'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>
                                Underveis i opplæringsløpet kobles deltakerne
                                med relevante arbeidsgivere. I del II av
                                tiltaket vil deltakerne praktisere sine
                                ferdigheter i praksis hos relevante
                                arbeidsgivere. Våre veiledere fortsetter å bistå
                                med faglig støtte og spisset kompetanseheving
                                gjennom hele tiltakperioden.
                            </p>
                            <a
                                href='https://fontenehusetbergen.no'
                                target='_blank'
                                className='mt-6 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-700'
                            >
                                Se mer
                            </a>
                        </div>
                        <div className='flex flex-col items-center p-6 border rounded-lg shadow-lg'>
                            <Image
                                src='/glødelogo.png'
                                alt='Gløde'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>
                                Undervisningen kombinerer tradisjonell
                                undervisning med digitale læringsverktøy og
                                prosjektarbeid og tilpasses også enkelte
                                deltakers nivå og utvikling. Gjennom del I av
                                tiltaket vil deltakerne tilegne seg den faglige
                                og sosiale kompetansen de trenger for å
                                kvalifisere seg til praksisarbeid innen
                                front-end, systemdrift, back-end, eller UX
                                design.
                            </p>
                            <a
                                href='https://glode.no'
                                target='_blank'
                                className='mt-6 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-700'
                            >
                                Se mer
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16 bg-white'>
                <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start'>
                    <div className='relative w-64 h-64 mb-8 lg:mb-0 lg:mr-8'>
                        <div className='absolute top-0 left-0 transform -translate-x-4 -translate-y-4'>
                            <Image
                                src='/Karl.png' // Path to your image
                                alt='Person 1'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                        <div className='absolute top-0 right-0 transform translate-x-4 -translate-y-4'>
                            <Image
                                src='/Inger.jpg' // Path to your image
                                alt='Person 2'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4'>
                            <Image
                                src='/Sina.jpg' // Path to your image
                                alt='Person 3'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg'>
                        <h2 className='text-3xl font-bold mb-4'>
                            Ønsker du å samarbeide med oss?
                        </h2>
                        <p className='mb-4'>
                            Karl Haakon hos oss er ansvarlig for markedsteamet i
                            Kodehode. Han sitter klar med kaffen og refresher
                            innboksen sin på
                            <a
                                href='mailto:karl@jobloop.no'
                                className='text-teal-500'
                            >
                                {" "}
                                karl@jobloop.no
                            </a>{" "}
                            i påvente av en mail fra deg ;)
                        </p>
                        <a
                            href='mailto:karl@jobloop.no'
                            className='px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white'
                        >
                            Kontakt oss
                        </a>
                    </div>
                </div>
            </section>
            <section></section>
        </main>
    );
}

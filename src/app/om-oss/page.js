"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { LesMerButton, LinkButtonAnimatedWithIcon } from "../../../components/buttons";
import Link from "next/link";

import Sina from "../../../public/Sina.jpg";
import Karl from "../../../public/Karl.webp";
import Inger from "../../../public/Inger.jpg";
import Beate from "../../../public/Beate.jpg";
import Oda from "../../../public/Oda.jpg";
import Kim from "../../../public/Kim.jpg";
import { IoInformationCircle } from "react-icons/io5";


const teamData = [
    {
        name: "Sina",
        role: "Daglig Leder",
        image: Sina,
    },
    {
        name: "Karl Haakon",
        role: "Markedsutvikler",
        image: Karl,
    },
    {
        name: "Inger Johanne",
        role: "Teamleder",
        image: Inger,
    },
    {
        name: "Beate",
        role: "Kursleder",
        image: Beate,
    },
    {
        name: "Oda Kristin",
        role: "Kursleder",
        image: Oda,
    },
    {
        name: "Kim",
        role: "Kursleder",
        image: Kim,
    },
];


const TeamMember = ({ name, role, image }) => (
    <Link
        href='/kontakt'
        title={`Gå til Kontakt siden og finn ${name}`}
        className='group flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition-all duration-300'
    >
        <div className='w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full border-2 border-jobloop-primary-orange shadow-jobloop-primary-orange/15 group-hover:border-4 shadow-2xl transition-all duration-300'>
            <Image
                src={image}
                alt={`Profilbilde av ${name}`}
                width={100}
                height={100}
                className='object-cover object-left w-full h-full scale-100 group-hover:scale-105 transition-all duration-500'
            />
        </div>
        <div className='text-center'>
            <span className='font-bold text-xl group-hover:underline underline-offset-2 decoration-jobloop-primary-orange'>
                {name}
            </span>
            <p className='group-hover:text-jobloop-primary-orange transition-colors duration-300'>{role}</p>
        </div>
    </Link>
);


const lokasjonerData = [
    {
        name: "Bergen",
        image: "/Bergen.webp",
    },
    {
        name: "Stavanger",
        image: "/Stavanger.webp",
    },
    {
        name: "Haugesund",
        image: "/Haugesund.webp",
    },
    {
        name: "Tønsberg",
        image: "/Tønsberg.webp",
    },
    {
        name: "Oslo",
        image: "/Oslo.webp",
    },
    {
        name: "Alta",
        image: "/Alta.webp",
    },
    {
        name: "Kirkenes",
        image: "/Placeholderby.png",
    },
    {
        name: "Ålesund",
        image: "/Ålesund.webp",
    },
    {
        name: "Ørsta/Volda",
        image: "/Placeholderby.png",
    },
    {
        name: "Molde",
        image: "/Molde.webp",
    },
    {
        name: "Kristiansund",
        image: "/Placeholderby.png",
    },
    {
        name: "Digitalt",
        image: "/Remote.webp",
    },
];


const Lokasjon = ({ name, image }) => (
    <div className='flex flex-col items-center gap-3'>
        <div className='w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-xl shadow-lg'>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className='object-cover w-full h-full'
            />
        </div>
        <p className='text-center text-base md:text-lg font-medium text-gray-700'>{name}</p>
    </div>
);

export default function OmOss() {
    const [photosAnimated, setPhotosAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !photosAnimated) {
                    setPhotosAnimated(true);
                    
                  
                    const photos = entry.target.querySelectorAll('.team-photo');
                    photos.forEach((photo, index) => {
                        setTimeout(() => {
                            photo.classList.add('animate');
                        }, index * 200);
                    });
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        });

        const teamSection = document.querySelector('.team-section');
        const samarbeidSection = document.querySelector('.samarbeid-section');
        
        if (samarbeidSection) {
            observer.observe(samarbeidSection);
        } else if (teamSection) {
            observer.observe(teamSection);
        }

        return () => observer.disconnect();
    }, [photosAnimated]);

    return (
        <main className='flex flex-col items-center justify-between min-h-screen mt-10 space-y-16 mb-12'>
            <section className='container flex flex-col gap-4 '>
                <div className='flex flex-col  gap-6 text-pretty  '>
                    <div className='omoss w-full  text-kv-black  mx-auto'>
                        
                        
                        <div className='w-full space-y-8'>
                            <div className='w-full lg:w-2/5 overflow-hidden rounded-xl float-right ml-4 mb-4 '>
                                <Image
                                    src='/JLomossbilde.webp'
                                    alt='3 personer i jobloop som sitter å snakker sammen rundt et bord ute'
                                    width={500}
                                    height={375}
                                    className='w-full h-56 lg:h-80 object-cover'
                                />
                            </div>
                            
                            <h1 className='text-4xl md:text-5xl font-bold lg:pb-12'>
                            Om oss
                            <span className='block w-1/2 h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
                        </h1>

                            <p className='text-base md:text-xl font-bold md:leading-loose xl:leading-loose'>
                                JobLoop startet som et samarbeid mellom sosiale
                                entreprenører, NAV, og en rekke arbeidsgivere. I
                                2014 resulterte dette i en inkluderingsmodell
                                som senere skulle bli anerkjent under navnet
                                Loop-modellen. I perioden 2014-2018 ble modellen
                                videreutviklet sammen med Hovedorganisasjonen
                                Virke og etablert i en rekke norske fylker.
                                FAFO´s rapport fra 2018 skrev at dette var
                                inkluderingsarbeid som virket i praksis. I 2017
                                ble Jobloop etablert som et eget selskap for å
                                videreføre og tilpasse inkluderingmodellen til
                                nye bransjer og målgrupper. Et viktig samarbeid
                                har vært med oppstart miljøet tilknyttet
                                Bergen.Works coworkingspace hvor modellen blant
                                annet ble tilpasset for "de nye jobbene" innen
                                IT-utvikling og kreativ teknologi, samt gründer-
                                og vekstselskapene.
                            </p>
                            
                            <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600 '>
                                I dag er denne modellen mest kjent som
                                "Kodehode" - et program som dyrker frem og
                                trener opp dyktige junior-utviklere til jobber
                                innen IT i tett samarbeid med bransjen selv.
                                Driverne bak selskapet har alltid vært opptatt
                                av å tilpasse modellene for de som ikke har
                                lyktes helt i første sving, eller som står i
                                fare for å falle fra sine utdanningsløp. Det har
                                resultert i kontinuerlige tilpasninger til nye
                                målgrupper, inkludert elever helt ned i
                                barneskolealder. I dag jobber vi både med
                                arbeids- og inkluderingsbedriftene, fontenehus,
                                NAV, kommuner, fylkeskommuner, skoler,
                                barnevern, PPT, OT, og helt ordinære
                                arbeidsgivere. JobLoop er et raskt voksende
                                selskap drevet av sosiale entreprenører. Vi har
                                et viktig mål: å begrense utenforskap ved å
                                hindre frafall i skolen, kvalifisere og formidle
                                flere til arbeid! For å få til det samarbeider
                                vi med offentlige aktører,
                                utdanningsinstitusjoner, og lokalt arbeidsliv.
                            </p>
                            
                            <div className='w-full lg:w-2/5 flex flex-col justify-center float-left mr-8 mb-4'>
                                <div className='relative shadow-lg shadow-jobloop-secondary-orange/15 flex flex-col gap-4 bg-jobloop-primary-orange/5 border border-jobloop-primary-orange p-6 rounded-xl mb-6'>
                                    <IoInformationCircle className='absolute bottom-0 right-0 text-5xl text-jobloop-primary-orange/15 ' />
                                    <p className='text-base lg:text-xl md:leading-loose text-center text-pretty'>
                                        Vi har programmer som retter seg mot barn i
                                        grunnskolen, videregående skole, og voksne
                                        arbeidssøkere. Samtidig er vi tett på
                                        arbeidsmarkedet og spisser programmene våre
                                        kontinuerlig etter trender og behov. Vi heier på
                                        norsk IT-bransje og mener inkludering og
                                        alternative kvalifiseringsmodeller vil være
                                        avgjørende for å lykkes med å dekke det voksende
                                        kompetansegapet.
                                    </p>
                                </div>
                            </div>
                            
                            <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600 '>
                                I 2024 mottok de FERD-prisen Årets Sosiale
                                Entreprenør for sitt arbeid i kampen for å
                                bekjempe ufrivillig skolefravær. Visste du at
                                20-30% av unge ikke fullfører videregående
                                skole? eller at flere av disse faller fra
                                allerede i grunnskolen? 10 år med innovative
                                partnerskap og ildsjelsarbeid har resultert i at
                                vi i dag er en stolt leverandør av en rekke
                                tilbud til barn, unge og voksne som ønsker nye
                                veier inn i arbeidslivet. JobLoop har spesielt
                                lyktes med å skape innovative lærings- og
                                mestringsarenaer som appellerer til unge voksne
                                med interesser innen kreative digitale
                                fagområder, gaming, og IT.
                            </p>
                          
                        </div>
                    </div>
                </div>
            </section>

            <section className=''>
                <div className='container mx-auto px-4'>
                    <div className='container relative shadow-lg shadow-jobloop-secondary-green/15 flex flex-col justify-center items-center gap-4 md:gap-6 bg-jobloop-primary-green/5 border border-jobloop-primary-green p-3 sm:p4 md:p-6 rounded-xl md:rounded-xl'>
                        <IoInformationCircle className='absolute bottom-0 right-0 text-5xl text-jobloop-primary-green/15' />
                        <p className='text-lg md:text-xl xl:text-2xl md:leading-loose text-center'>
                            Visste du at dersom alle norske IT-selskap med 10
                            ansatte eller mer rekrutterte én kandidat fra en
                            sosial entreprenør eller velferdsaktør ville vi ha
                            bekjempet hele utenforskapsfloken?
                        </p>
                        <div className='mt-6'>
                            <LinkButtonAnimatedWithIcon Path={"/kontakt"} Text={"Kontakt Oss"} />
                        </div>
                    </div>
                </div>
            </section>

            <section className=' flex flex-col gap-8 team-section'>
                <div className='w-fit mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center'>
                        Våre ansatte i Jobloop
                    </h2>
                    <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
                </div>
                

                
                <div className='container grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-6'>
                    {teamData.map((person) => (
                        <TeamMember
                            key={person.name}
                            name={person.name}
                            role={person.role}
                            image={person.image}
                        />
                    ))}
                </div>
            </section>
            <section className=''>
                <div className='container mx-auto px-4'>
                    <div className='w-fit mx-auto mb-12'>
                        <h2 className='text-2xl md:text-3xl font-bold text-center'>
                            Våre samarbeidspartnere
                        </h2>
                        <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
                        <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
                            <a href="https://fontenehuset.no" className='w-full h-48 xl:w-1/2 relative overflow-hidden rounded-lg flex items-center justify-center'>
                                <Image
                                    src='/fontenelogo 1.png'
                                    alt='Fontenehuset Bergen'
                                    width={300}
                                    height={150}
                                    className='object-contain max-h-full max-w-full'
                                />
                            </a>
                            <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                                <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>Fontenehuset Bergen</h3>
                                <p className='text-base text-gray-600 md:text-lg leading-relaxed text-pretty'>
                                    Underveis i opplæringsløpet kobles deltakerne med relevante arbeidsgivere. Våre veiledere fortsetter å bistå med faglig støtte og spisset kompetanseheving gjennom hele tiltaksperioden.
                                </p>
                                <div className="pt-2">
                                    <LesMerButton Path="https://fontenehuset.no" />
                                </div>
                            </div>
                        </div>

                        <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
                            <a href="https://gløde.no" className='w-full h-48 xl:w-1/2 relative overflow-hidden rounded-lg flex items-center justify-center'>
                                <Image
                                    src='/glode-logo 1.png'
                                    alt='Gløde'
                                    width={300}
                                    height={150}
                                    className='object-contain max-h-full max-w-full'
                                />
                            </a>
                            <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                                <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>Gløde</h3>
                                <p className='text-base text-gray-600 md:text-lg leading-relaxed text-pretty'>
                                    Undervisningen kombinerer tradisjonell undervisning med digitale læringsverktøy og prosjektarbeid. Gjennom tiltaket tilegner deltakerne seg faglig og sosial kompetanse for praksisarbeid innen IT.
                                </p>
                                <div className="pt-2">
                                    <LesMerButton Path="https://gløde.no" />
                                </div>
                            </div>
                        </div>

                        <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
                            <a href="https://www.podium.no/" className='w-full h-48 xl:w-1/2 relative overflow-hidden rounded-lg flex items-center justify-center'>
                                <Image
                                    src='/podium.png'
                                    alt='Podium logo'
                                    width={300}
                                    height={150}
                                    className='object-contain max-h-full max-w-full'
                                />
                            </a>
                            <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                                <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>Podium</h3>
                                <p className='text-base text-gray-600 md:text-lg leading-relaxed text-pretty'>
                                    Podium er en tiltaksbedrift med hovedkontor i Oslo. Gründerne bak selskapet deler mange av de samme verdiene som JobLoop og har drevet frem flere innovasjonsprosjekter sammen.
                                </p>
                                <div className="pt-2">
                                    <LesMerButton Path="https://www.podium.no/" />
                                </div>
                            </div>
                        </div>

                        <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
                            <a href="https://www.playwell.no/" className='w-full h-48 xl:w-1/2 relative overflow-hidden rounded-lg flex items-center justify-center'>
                                <Image
                                    src='/playwell.png'
                                    alt='Playwell logo'
                                    width={300}
                                    height={150}
                                    className='object-contain max-h-full max-w-full'
                                />
                            </a>
                            <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                                <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>Playwell</h3>
                                <p className='text-base text-gray-600 md:text-lg leading-relaxed text-pretty'>
                                    Playwell er et Gamingsenter som driver med e-sport og sosial gaming. Vi samlokaliserte oss i 2019 med mål om å utvikle mestringsarenaer for sårbare barn og unge som motiveres av gaming.
                                </p>
                                <div className="pt-2">
                                    <LesMerButton Path="https://www.playwell.no/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                        <section className=' samarbeid-section'>
                <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start'>
                    <div className='relative w-full md:w-64 h-64 mb-24 lg:mb-0 lg:mr-12'>
                        <div className='absolute top-0 left-0 team-photo slide-left'>
                            <Image
                                src='/Karl.webp'
                                alt='Karl Håkon'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                        <div className='absolute top-0 right-0 team-photo slide-right'>
                            <Image
                                src='/Inger.jpg'
                                alt='Inger Johanne'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                        <div className='absolute bottom-0 left-1/4 team-photo slide-bottom'>
                            <Image
                                src='/Sina.jpg'
                                alt='Sina'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                    </div>
 
                    <div className='flex flex-col items-start text-left max-w-lg'>
                        <div className='relative w-fit mx-auto md:mx-0 '>
                            <h2 className='text-xl text-center md:text-left md:text-2xl font-bold mb-2'>
                                Ønsker du å samarbeide med oss?
                            </h2>
                            <span className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6'></span>
                        </div>
                        <p className='text-lg leading-relaxed mb-8 text-pretty'>
                            Vi er er alltid klar for å finne de gode løsningene!
                            Christer er ansvarlig for bedriftsmarkedet og kan
                            sørge for at vi spisser et par kandidater etter din
                            tech-stack og behov. Inger-Johanne kan alt om
                            Kodehode og Kim om våre Spillbaserte tilnærminger.
                            Karl-Håkon hjelper deg i gang med Medarbeiderskap.
                            Du kan også se hvem som er ansvarlig kursleder i din
                            by på siden for de ulike tiltakene eller under
                            “kontakt oss”.
                        </p>
                        <LinkButtonAnimatedWithIcon Path={"/kontakt"} Text={"Kontakt Oss"} />
                    </div>
                </div>
            </section>

            <section className='locations'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-2xl font-bold mb-8 text-center'>
                        Våre lokasjoner
                        <span className='block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></span>
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto'>
                        {lokasjonerData.map((lokasjon) => (
                            <Lokasjon
                                key={lokasjon.name}
                                name={lokasjon.name}
                                image={lokasjon.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

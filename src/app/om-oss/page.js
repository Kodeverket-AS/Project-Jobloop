import Image from "next/image";
// import { LocationCarousel } from "../../../components/LocationCarousel";
import { KontaktButton, LinkButton } from "../../../components/Buttons";
import { ExternalLinkButton } from "../../../components/Buttons";
import Sina from "../../../public/Sina.jpg";
import Karl from "../../../public/Karl.webp";
import Inger from "../../../public/Inger.jpg";
import Beate from "../../../public/Beate.jpg";
import Oda from "../../../public/Oda.jpg";
import Kim from "../../../public/Kim.jpg";
import { IoInformationCircle } from "react-icons/io5";

// Team memebers data
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

// Team member komponent
const TeamMember = ({ name, role, image }) => (
    <div
        title={`Gå til Kontakt siden og finn ${name}`}
        className='group flex flex-col gap-2 items-center'
    >
        <div className='w-60 h-60 overflow-hidden rounded-full border border-jobloop-primary-orange shadow-jobloop-primary-orange/15 group-hover:border-2 shadow-2xl'>
            <Image
                src={image}
                alt={`Profilbilde av ${name}`}
                width={100}
                height={100}
                className='object-cover object-left w-full h-full scale-100 group-hover:scale-105 transition-all duration-500'
            />
        </div>
        <div className='text-center'>
            <a
                href='/kontakt'
                className='font-bold text-xl hover:underline underline-offset-2 decoration-jobloop-primary-orange'
            >
                {name}
            </a>
            <p>{role}</p>
        </div>
    </div>
);

// Lokasjoner data
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

// Lokasjoner komponent
const Lokasjon = ({ name, image }) => (
    <div className='flex flex-col items-center gap-2'>
        <Image
            src={image}
            alt={name}
            width={150}
            height={50}
            className='object-cover h-full w-full'
        />
        <p className='text-center text-lg'>{name}</p>
    </div>
);

export default function OmOss() {
    return (
        <main className='flex flex-col items-center justify-between min-h-screen'>
            <section className='container flex flex-col gap-6 '>
                <div className='flex flex-col xl:flex-row gap-6 text-pretty pb-8 '>
                    {/* <div className="order-2 md:order-1 md:flex-shrink-0 md:mr-8 mb-4 md:mb-0"></div> */}
                    <div className='w-full flex flex-col gap-8 '>
                        <div className='w-1/2 overflow-hidden rounded-none sm:rounded-2xl '>
                            <Image
                                src='/JLomossbilde.webp'
                                alt='3 personer i jobloop som sitter å snakker sammen rundt et bord ute'
                                // aria-description='3 personer i jobloop som sitter å snakker sammen rundt et bord ute'
                                width={300}
                                height={400}
                                className='w-full object-contain'
                            />
                        </div>
                        {/* Following is hidden on small screen */}
                        <div className='hidden relative shadow-lg shadow-jobloop-secondary-orange/15 xl:flex flex-col gap-4 bg-jobloop-primary-orange/5 border border-jobloop-primary-orange p-6 rounded-2xl'>
                            <IoInformationCircle className='absolute bottom-0 right-0 text-9xl text-jobloop-primary-orange/15' />
                            <p className='text-xl leading-relaxed'>
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
                    {/* Tekstseksjon under bildet */}
                    <div className='w-full px-4 md:px-8 xl:p-0 text-kv-black max-w-3xl mx-auto'>
                        <h1 className='text-4xl md:text-5xl font-bold'>
                            Om oss
                            <span className='block w-full h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
                        </h1>
                        <div className='flex flex-col gap-6 w-full '>
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
                                annet ble tilpasset for “de nye jobbene” innen
                                IT-utvikling og kreativ teknologi, samt gründer-
                                og vekstselskapene.
                            </p>
                            <div className='xl:hidden bg-jobloop-primary-green/5 border-b rounded-2xl'></div>
                            <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600'>
                                I dag er denne modellen mest kjent som
                                “Kodehode” - et program som dyrker frem og
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
                            <div className='xl:hidden bg-jobloop-primary-green/5 border-b rounded-2xl'></div>

                            <p className='text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600'>
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
                            <div className='xl:hidden bg-jobloop-primary-green/5 border-b rounded-2xl'></div>
                            <p className='xl:hidden text-base md:text-xl md:leading-loose xl:leading-loose text-neutral-600'>
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
                </div>
                <div className='px-2 xl:px-0'>
                    <div className='container relative shadow-lg shadow-jobloop-secondary-green/15 flex flex-col gap-4 md:gap-6 bg-jobloop-primary-green/5 border border-jobloop-primary-green p-3 sm:p4 md:p-6 rounded-xl md:rounded-2xl'>
                        <IoInformationCircle className='absolute bottom-0 right-0 text-9xl text-jobloop-primary-green/15' />
                        <p className='text-lg md:text-3xl xl:text-5xl md:leading-relaxed xl:leading-relaxed'>
                            Visste du at dersom alle norske IT-selskap med 10
                            ansatte eller mer rekrutterte én kandidat fra en
                            sosial entreprenør eller velferdsaktør ville vi ha
                            bekjempet hele utenforskapsfloken?
                        </p>
                        <KontaktButton Path={"/kontakt"} Text={"Kontakt Oss"} />
                    </div>
                </div>
            </section>

            <section className='py-20 flex flex-col gap-8'>
                <div className='w-fit mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center'>
                        Våre ansatte i Jobloop
                    </h2>
                    <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
                </div>
                <div className='container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6'>
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
            <section className='py-16 '>
                <div className='container mx-auto px-4'>
                    <div className='w-fit mx-auto'>
                        <h2 className='text-2xl md:text-3xl font-bold text-center'>
                            Våre samarbeidspartnere
                        </h2>
                        <div className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></div>
                    </div>
                    <div className='grid gap-12 md:grid-cols-2'>
                        <div className='flex flex-col  p-6 '>
                            <Image
                                src='/fontenelogo 1.png'
                                alt='Fontenehuset Bergen'
                                width={300}
                                height={150}
                            />
                            <p className='mt-24 mb-16 '>
                                Underveis i opplæringsløpet kobles deltakerne
                                med relevante arbeidsgivere. I del II av
                                tiltaket vil deltakerne praktisere sine
                                ferdigheter i praksis hos relevante
                                arbeidsgivere. Våre veiledere fortsetter å bistå
                                med faglig støtte og spisset kompetanseheving
                                gjennom hele tiltaksperioden.
                            </p>
                            <ExternalLinkButton
                                Path='https://fontenehuset.no'
                                Text='Les mer'
                                Aria='Les mer'
                            />
                        </div>
                        <div className='flex flex-col  p-6  '>
                            <Image
                                src='/glode-logo 1.png'
                                alt='Gløde'
                                width={200}
                                height={100}
                            />
                            <p className='mt-10 mb-12 '>
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
                            <ExternalLinkButton
                                Path='https://gløde.no'
                                Text='Les mer'
                                Aria='Les mer'
                            />
                        </div>
                        <div className='flex flex-col  p-6  '>
                            <Image
                                src='/podium.png'
                                alt='Podium logo'
                                width={200}
                                height={100}
                            />
                            <p className='mt-10 mb-12 '>
                                Podium er en tiltaksbedrift med hovedkontor i
                                Oslo. Gründerne bak selskapet deler mange av de
                                samme verdiene som driverne bak JobLoop og
                                selskapene har drevet frem flere
                                innovasjonsprosjekter sammen. Noen har resultert
                                i offentlige rammeavtaler som JobLoop og Podium
                                har levert sammen med mål om å hjelpe flere inn
                                i et norsk arbeids- og samfunnsliv som stadig er
                                i endring.
                            </p>
                            <ExternalLinkButton
                                Path='https://www.podium.no/'
                                Text='Les mer'
                                Aria='Les mer'
                            />
                        </div>
                        <div className='flex flex-col  p-6  '>
                            <Image
                                src='/playwell.png'
                                alt='Playwell logo'
                                width={100}
                                height={50}
                            />
                            <p className='mt-5 mb-12 '>
                                Playwell er et Gamingsenter som driver med
                                e-sport og sosial gaming. Vi samlokaliserte oss
                                i 2019 med mål om å utvikle mestringsarenaer for
                                sårbare barn og unge som motiveres av gaming.
                                Det har resultert i flere virksomme
                                læringsarenaer hvor vi bruker spill og gaming
                                som sosialpedagogisk arbeid med barn og unge og
                                som et verktøy for læring. Sammen har vi i dag
                                et ledende kompetansemiljø innen
                                gamingpedagogikk. Dette bruker vi blant annet i
                                tilbudene Spillbasert Kvalifisering, Gamify, og
                                Learnwell, som alle er lærings- og
                                mestringsarenaer med mål om å utvikle sosial
                                kompetanse og arbeidslivserfaring eller å bestå
                                ordinære skolefag.
                            </p>
                            <ExternalLinkButton
                                Path='https://www.playwell.no/'
                                Text='Les mer'
                                Aria='Les mer'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16 '>
                <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start'>
                    <div className='relative w-full md:w-64 h-64 mb-12 lg:mb-0 lg:mr-12'>
                        <div className='absolute top-0 left-0 transform -translate-x-4 -translate-y-4'>
                            <Image
                                src='/Karl.webp' // Path to your image
                                alt='Karl Håkon'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                        <div className='absolute top-0 right-0 transform translate-x-4 -translate-y-4'>
                            <Image
                                src='/Inger.jpg' // Path to your image
                                alt='Inger Johanne'
                                width={150}
                                height={150}
                                className='rounded-full'
                            />
                        </div>
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4'>
                            <Image
                                src='/Sina.jpg' // Path to your image
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
                        <p className='text-lg leading-relaxed mb-8'>
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
                        <KontaktButton Path={"/kontakt"} Text={"Kontakt Oss"} />
                    </div>
                </div>
            </section>

            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-2xl font-bold mb-8 text-center'>
                        Våre lokasjoner
                        <span className='block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></span>
                    </h2>
                    <div className='flex flex-wrap justify-center gap-8 md:gap-4 max-w-7xl'>
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

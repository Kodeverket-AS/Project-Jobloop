import Image from "next/image";
// import { LocationCarousel } from "../../../components/LocationCarousel";
import { LinkButton } from "../../../components/Buttons";
import { ExternalLinkButton } from "../../../components/Buttons";

export default function OmOss() {
    return (
        <main className='flex flex-col items-center justify-between min-h-screen p-8'>
            <section className='flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto p-4 '>
                <div className='order-2 md:order-1 md:flex-shrink-0 md:mr-8 mb-4 md:mb-0'></div>
                <div className='order-1'>
                    {/* Bilde på toppen */}
                    <div className='mb-8'>
                        <Image
                            src='/JLomossbilde.png'
                            alt='3 personer i jobloop som sitter å snakker sammen rundt et bord ute'
                            width={600}
                            height={900}
                            className='mt-8'
                        />
                    </div>

                    {/* Tekstseksjon under bildet */}
                    <div>
                        <h1 className='text-4xl font-bold mb-4 relative'>
                            Om oss
                            <span className='block w-full h-1 bg-jobloop-primary-green mt-2 mb-6'></span>
                        </h1>
                        <p className='text-lg leading-relaxed mb-6'>
                            JobLoop startet som et samarbeid mellom sosiale
                            entreprenører, NAV, og en rekke arbeidsgivere. I
                            2014 resulterte dette i en inkluderingsmodell som
                            senere skulle bli anerkjent under navnet
                            Loop-modellen. I perioden 2014-2018 ble modellen
                            videreutviklet sammen med Hovedorganisasjonen Virke
                            og etablert i en rekke norske fylker. FAFO´s rapport
                            fra 2018 skrev at dette var inkluderingsarbeid som
                            virket i praksis. I 2017 ble Jobloop etablert som et
                            eget selskap for å videreføre og tilpasse
                            inkluderingmodellen til nye bransjer og målgrupper.
                            Et viktig samarbeid har vært med oppstart miljøet
                            tilknyttet Bergen.Works coworkingspace hvor modellen
                            blant annet ble tilpasset for “de nye jobbene” innen
                            IT-utvikling og kreativ teknologi, samt gründer- og
                            vekstselskapene.
                        </p>
                        <p className='text-lg leading-relaxed mb-6'>
                            I dag er denne modellen mest kjent som “Kodehode” -
                            et program som dyrker frem og trener opp dyktige
                            junior-utviklere til jobber innen IT i tett
                            samarbeid med bransjen selv. Driverne bak selskapet
                            har alltid vært opptatt av å tilpasse modellene for
                            de som ikke har lyktes helt i første sving, eller
                            som står i fare for å falle fra sine utdanningsløp.
                            Det har resultert i kontinuerlige tilpasninger til
                            nye målgrupper, inkludert elever helt ned i
                            barneskolealder. I dag jobber vi både med arbeids-
                            og inkluderingsbedriftene, fontenehus, NAV,
                            kommuner, fylkeskommuner, skoler, barnevern, PPT,
                            OT, og helt ordinære arbeidsgivere. JobLoop er et
                            raskt voksende selskap drevet av sosiale
                            entreprenører. Vi har et viktig mål: å begrense
                            utenforskap ved å hindre frafall i skolen,
                            kvalifisere og formidle flere til arbeid! For å få
                            til det samarbeider vi med offentlige aktører,
                            utdanningsinstitusjoner, og lokalt arbeidsliv. I
                            2024 mottok de FERD-prisen Årets Sosiale Entreprenør
                            for sitt arbeid i kampen for å bekjempe ufrivillig
                            skolefravær. Visste du at 20-30% av unge ikke
                            fullfører videregående skole? eller at flere av
                            disse faller fra allerede i grunnskolen? 10 år med
                            innovative partnerskap og ildsjelsarbeid har
                            resultert i at vi i dag er en stolt leverandør av en
                            rekke tilbud til barn, unge og voksne som ønsker nye
                            veier inn i arbeidslivet. JobLoop har spesielt
                            lyktes med å skape innovative lærings- og
                            mestringsarenaer som appellerer til unge voksne med
                            interesser innen kreative digitale fagområder,
                            gaming, og IT.
                        </p>
                        <p className='text-lg leading-relaxed mb-6'>
                            Vi har programmer som retter seg mot barn i
                            grunnskolen, videregående skole, og voksne
                            arbeidssøkere. Samtidig er vi tett på
                            arbeidsmarkedet og spisser programmene våre
                            kontinuerlig etter trender og behov. Vi heier
                            spesielt på norsk IT-bransje og mener inkludering og
                            alternative kvalifiseringsmodeller vil være
                            avgjørende for å lykkes med å dekke det voksende
                            kompetansegapet. Visste du at dersom alle norske
                            IT-selskap med 10 ansatte eller mer rekrutterte én
                            kandidat fra en sosial entreprenør eller
                            velferdsaktør ville vi ha bekjempet hele
                            utenforskapsfloken? Eller at du helt uten
                            forpliktelser kan prøve ut et samarbeid med oss?
                        </p>
                        <div className='mt-8'>
                            <LinkButton
                                Path={"/kontakt"}
                                Text={"Kontakt Oss"}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20'>
                <h2 className='text-2xl font-bold mb-8 text-center'>
                    Vårt team
                    <span className='block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></span>
                </h2>
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
                        <p className='mt-4 mb-2 font-bold text-xl'>Sina</p>
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
                        <p className='mt-4 mb-2 font-bold text-xl'>
                            Karl Haakon
                        </p>
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
                        <p className='mt-4 mb-2 font-bold text-xl'>
                            Inger Johanne
                        </p>
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
                        <p className='mt-4 mb-2 font-bold text-xl'>Beate</p>
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
                        <p className='mt-4 mb-2 font-bold text-xl'>
                            Oda Kristin
                        </p>
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
                        <p className='mt-4 mb-2 font-bold text-xl'>Kim</p>
                        <p>Kursleder</p>
                    </div>
                </div>
                <div className='flex justify-center mt-8'>
                    <LinkButton
                        Path={"/kontakt"}
                        Text={"Bli kjent med hele organisasjonen!"}
                    />
                </div>
            </section>
            <section className='py-16 '>
                <div className='container mx-auto px-4'>
                    <h2 className='text-2xl font-bold mb-8 text-center'>
                        Våre samarbeidspartnere
                        <span className='block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></span>
                    </h2>
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
                    <div className='relative w-64 h-64 mb-12 lg:mb-0 lg:mr-12'>
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
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg  px-12'>
                        <div className='relative w-full lg:w-60 '>
                            <h2 className='text-2xl font-bold mb-2'>
                                Ønsker du å samarbeide med oss?
                            </h2>
                            <span className='block w-full h-1 bg-jobloop-primary-orange mt-2 mb-6'></span>
                        </div>
                        <p className='mb-8'>
                            Karl Haakon hos oss er ansvarlig for markedsteamet i
                            Kodehode. Han sitter klar med kaffen og refresher
                            innboksen sin på
                            <a
                                href='mailto:karl@jobloop.no'
                                className='text-jobloop-secondary-green font-semibold hover:underline underline-offset-4 hover:text-jobloop-secondary-orange'
                            >
                                {" "}
                                karl@jobloop.no
                            </a>{" "}
                            i påvente av en mail fra deg ;)
                        </p>
                        <LinkButton Path={"/kontakt"} Text={"Kontakt Oss"} />
                    </div>
                </div>
            </section>

            {/* <section><LocationCarousel /></section> */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-2xl font-bold mb-8 text-center'>
                        Våre lokasjoner
                        <span className='block w-60 h-1 bg-jobloop-primary-orange mt-2 mb-6 mx-auto'></span>
                    </h2>
                    <div className='flex flex-wrap justify-center gap-12'>
                        <div className='flex flex-col items-center p-6 '>
                            <Image
                                src='/Bergen.jpg'
                                alt='Bergen'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>Bergen</p>
                        </div>
                        <div className='flex flex-col items-center p-6 '>
                            <Image
                                src='/Stavanger.jpg'
                                alt='Stavanger'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>Stavanger</p>
                        </div>
                        <div className='flex flex-col items-center p-6 '>
                            <Image
                                src='/Haugesund.jpg'
                                alt='Haugesund'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>Haugesund</p>
                        </div>
                        <div className='flex flex-col items-center p-6 '>
                            <Image
                                src='/Tønsberg.jpg'
                                alt='Tønsberg'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>Tønsberg</p>
                        </div>
                        <div className='flex flex-col items-center p-6 '>
                            <Image
                                src='/Remote.jpg'
                                alt='Remote'
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                            <p className='mt-6 text-center'>Digitalt</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

"use client";

import Image from "next/image";
import JobbtilbudBilde from "../public/kodehode_gruppe.webp";
import KodehodeImage from "../public/KodehodeImage.png";
import GrunnleggendeIt from "../public/grunnleggende-it.webp";
import DigitaleTalenter from "../public/digitale-talenter.webp";
import IndividuellAmo from "../public/individuell-amo.webp";
import Loop from "../public/loop.webp";

import { IntroSectionReverse, PartnerProject } from "./layout-components";
import { LesMerButton } from "./buttons";

const IntroData = [
    {
        image: JobbtilbudBilde,
        title: "Arbeidsrettede tilbud",
        text: "Våre arbeidsrettede tilbud sikrer at folk får riktig kompetanse og blir godt forberedt på arbeidslivet. Mange av tilbudene inkluderer praksis, noe som gir deg som arbeidsgiver en unik mulighet til å ta samfunnsansvar og bli kjent med dyktige kandidater – helt uten forpliktelser. Rekrutterer du kun på tradisjonelt vis, kan du gå glipp av mange talentfulle ressurser.",
        path: "/tilbud",
        alt: "JobbtilbudBilde",
    },
];

const PartnerData = [
    {
        image: KodehodeImage,
        title: "Kodehode",
        text: "Kodehode rekrutterer kandidater som av ulike årsaker står utenfor arbeidslivet og tilbyr opplæring i frontend-, backend- og fullstack-utvikling, samt IT-drift og service. Gjennom en kombinasjon av teori, casearbeid og praksis lærer deltakerne det viktigste for en karriere innen IT. Kodehode er det største arbeidsrettede tilbudet i Jobloop og en ledende aktør innen inkluderende rekruttering i IT-bransjen. Satsingen bidrar til å redusere utenforskap og tette kompetansegapet gjennom spisset kvalifisering, internships, rekruttering og matchmaking med arbeidsgivere i IT-sektoren.",
        path: "https://www.kodehode.no/",
        alt: "JobbtilbudBilde",
        btnText: "Kodehode.no",
    },
];

const UICardData = [
    {
        image: GrunnleggendeIt,
        title: "Grunnleggende IT",
        text: "Bli med i dagens digitale samfunn. Vi tilbyr grunnleggende IT-kompetanse som åpner dører til fremtidens arbeidsliv. Lær det viktigste innen digital teknologi og få en solid base for videre utvikling.",
        path: "/grunnleggende-IT",
        alt: "3 hyggelige ansatte",
    },
    {
        image: DigitaleTalenter,
        title: "Digitale Talenter",
        text: "Dyrk interessene dine og få fast jobb. Vi hjelper deg å utvikle dine digitale talent og ferdigheter. Gjennom praksis og opplæring får du den kompetansen som arbeidslivet etterspør.",
        path: "/digitale-talenter",
        alt: "Smilende person som er digital talent",
    },
    {
        image: IndividuellAmo,
        title: "Individuell AMO",
        text: "Få et skreddersydd opplegg gjennom NAV. Vi tilpasser opplæringen til dine behov og mål. Sammen bygger vi en vei mot ny kompetanse og nye muligheter i arbeidslivet.",
        path: "/individuell-AMO",
        alt: "Person ser inn i kamera",
    },
    {
        image: Loop,
        title: "Loop",
        text: "Få relevant arbeidspraksis og erfaring. Vi kobler deg sammen med arbeidsgivere som kan gi deg verdifull praksis. Dette er din vei til å bygge CV og få foten inn i døren.",
        path: "/loop",
        alt: "Arbeidsbord",
    },
];

const QuoteData = [
    {
        name: "John Helge Olsen",
        company: "DNB",
        text: "Kodehode har levert oss gode kandidater som er godt forberedt både faglig og sosialt, og de har gått rett inn på utviklingsteam som frontend utviklere hos oss. Her har de jobbet på DNB sin bedriftsportal for pensjonskunder.",
    },
    {
        name: "Hilde Indresøvde",
        company: "VIS",
        text: "Samarbeidet med Jobloop gir VIS muligheten til å jobbe aktivt og konkret med inkludering. Her får vi tilgang til kompetente kandidater i et tillitsbasert og koordinert opplegg med oppfølging og jevnlig dialog. Sammen skaper vi nye muligheter i arbeidslivet og nye rekrutteringsmåter.",
    },
    {
        name: "Eirik Sandal",
        company: "Elfly Gruppen AS",
        text: "Elfly Gruppen har hatt to utviklere under opplæring i 6 måneder. Kodehode har vært flinke til å tilrettelegge for en god onboarding og brukt sin organisasjon til å fylle på med spisskompetanse og veiledning underveis. Dette har gjort oss i stand til å bygge en IT-løsning som bidrar positivt inn mot det grønne skiftet innen elektrisk luftfart.",
    },
];

const UICard = ({ image, title, text, path, alt }) => {
    return (
        <div className='group flex flex-col w-full gap-4 lg:gap-6 xl:flex-row-reverse bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-50 p-6 transition-all duration-200 justify-between'>
            <a href={path} className='w-full h-80 xl:w-1/2 relative overflow-hidden rounded-xl'>
                <Image
                    alt={alt}
                    src={image}
                    width={600}
                    height={600}
                    className='object-cover h-full max-w-full'
                />
            </a>
            <div className='flex flex-col w-full gap-4 xl:w-1/2 justify-center'>
                <h3 className='text-xl text-kv-black md:text-2xl font-semibold leading-tight'>{title}</h3>
                <p className='text-base text-gray-600 md:text-lg leading-relaxed'>{text}</p>
                <div className="pt-2">
                    <LesMerButton Path={path} />
                </div>
            </div>
        </div>
    );
};

const QuoteCard = ({ name, company, text }) => {
    return (
        <div className='flex flex-col w-full gap-1 md:w-1/3 '>
            <h4 className='text-xl text-kv-black'>{name}</h4>
            <p className='text-xs text-kv-black'>{company}</p>
            <q className='italic'>{text}</q>
        </div>
    );
};

export default function WorkCourses() {
    return (
        <div className='space-y-16'>
            <IntroSectionReverse
                title={IntroData[0].title}
                text={IntroData[0].text}
                image={IntroData[0].image}
                alt={IntroData[0].alt}
                path={IntroData[0].path}
                isButton={false}
            />

            <PartnerProject
                title={PartnerData[0].title}
                text={PartnerData[0].text}
                image={PartnerData[0].image}
                alt={PartnerData[0].alt}
                path={PartnerData[0].path}
                isButton={true}
                btnVariant={"externalLink"}
                btnText={PartnerData[0].btnText}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 auto-rows-fr'>
                {UICardData.map((card, index) => (
                    <UICard
                        key={index}
                        image={card.image}
                        title={card.title}
                        text={card.text}
                        path={card.path}
                        alt={card.alt}
                    />
                ))}
            </div>

            {/* Temporary Quotes Solution */}
            <div className='relative flex flex-col gap-8 px-8 pt-8 pb-12 overflow-hidden border-2 rounded-xl bg-jobloop-primary-orange/5 border-jobloop-primary-orange/100 text-kv-black lg:gap-12'>
                <h2 className='pb-2 mx-auto text-center border-b-4 border-jobloop-primary-orange w-fit'>
                    Hva sier bedriftslederne om oss?
                </h2>
                <div className='flex flex-col gap-8 md:flex-row'>
                    <QuoteCard
                        name={QuoteData[0].name}
                        company={QuoteData[0].company}
                        text={QuoteData[0].text}
                    />
                    <QuoteCard
                        name={QuoteData[1].name}
                        company={QuoteData[1].company}
                        text={QuoteData[1].text}
                    />
                    <QuoteCard
                        name={QuoteData[2].name}
                        company={QuoteData[2].company}
                        text={QuoteData[2].text}
                    />
                </div>
            </div>
        </div>
    );
}

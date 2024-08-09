"use client";

import Image from "next/image";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";
import KodehodeImage from "../public/KodehodeImage.png";
import GrunnleggendeIt from "../public/grunnleggende-IT.webp";
import DigitaleTalenter from "../public/digitale-talenter.webp";
import IndividuellAmo from "../public/individuell-amo.webp";
import Loop from "../public/loop.webp";

import { LinkButtonInternal } from "./Buttons";
import { IntroSectionReverse, PartnerProject } from "./LayoutComponents";

const IntroData = [
  {
    image: JobbtilbudBilde,
    title: "Arbeidstilbud",
    text: "Jobloop drifter flere tilbud over hele landet som hjelper folk som av ulike grunner står utenfor arbeidslivet med å komme seg inn i fast jobb. Vi har blant annet utviklerkurs for de som er interessert i programmering, og vi har kurs hvor vi måte folk ut i jobb basert på interesser og talenter.",
    path: "/tilbud",
    alt: "JobbtilbudBilde",
  },
];

const PartnerData = [
  {
    image: KodehodeImage,
    title: "Kodehode",
    text: "Kodehode er det største arbeidsrelaterte tilbudet Jobloop drifter, hvor vi utdanner nye frontend utviklere.",
    path: "https://www.kodehode.no/",
    alt: "JobbtilbudBilde",
    btnText: "Kodehode.no",
  },
];

const UICardData = [
  {
    image: GrunnleggendeIt,
    title: "Grunnleggende IT",
    text: "Bli med i dagens digitale samfunn",
    path: "/grunnleggende-it",
    alt: "KodehodeImage",
  },
  {
    image: DigitaleTalenter,
    title: "Digitale Talenter",
    text: "Dyrk interessene dine og må fast jobb",
    path: "/digitale-talenter",
    alt: "KodehodeImage",
  },
  {
    image: IndividuellAmo,
    title: "Individuell AMO",
    text: "Få et skreddersydd opplegg gjennom NAV",
    path: "/individuell-AMO",
    alt: "KodehodeImage",
  },
  {
    image: Loop,
    title: "Loop",
    text: "Få relevant arbeidspraksis og erfaring",
    path: "/loop",
    alt: "KodehodeImage",
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
    <div className="group flex flex-col w-full gap-4 xl:flex-row-reverse md:w-1/2">
      <a
        href={path}
        className="w-full h-72 xl:w-1/2 transition-all">
        <Image
          alt={alt}
          src={image}
          width={500}
          height={500}
          className="max-w-full h-full object-cover"
        />
      </a>
      <div className="flex flex-col w-full gap-4 xl:w-1/2">
        <h3 className="text-kv-black text-xl md:text-2xl">{title}</h3>
        <p className="text-base md:text-xl text-gray-500">{text}</p>
        <LinkButtonInternal
          Path={path}
          Text={"Les mer"}
        />
      </div>
    </div>
  );
};

const QuoteCard = ({ name, company, text }) => {
  return (
    <div className="flex flex-col w-full gap-1 md:w-1/3 ">
      <h4 className="text-kv-black text-xl">{name}</h4>
      <p className="text-kv-black text-xs">{company}</p>
      <q className="italic">{text}</q>
    </div>
  );
};

export default function WorkCourses() {
  return (
    <section>
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
      <div className="flex flex-col w-full gap-12 px-8 py-20 md:py-24">
        <div className="flex flex-col gap-8 lg:gap-12 md:flex-row md:justify-between">
          <UICard
            image={UICardData[0].image}
            title={UICardData[0].title}
            text={UICardData[0].text}
            path={UICardData[0].path}
            alt={UICardData[0].alt}
          />

          <UICard
            image={UICardData[1].image}
            title={UICardData[1].title}
            text={UICardData[1].text}
            path={UICardData[1].path}
            alt={UICardData[1].alt}
          />
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <UICard
            image={UICardData[2].image}
            title={UICardData[2].title}
            text={UICardData[2].text}
            path={UICardData[2].path}
            alt={UICardData[2].alt}
          />
          <UICard
            image={UICardData[3].image}
            title={UICardData[3].title}
            text={UICardData[3].text}
            path={UICardData[3].path}
            alt={UICardData[3].alt}
          />
        </div>
      </div>

      {/* Temporary Quotes Solution */}
      <div className="relative overflow-hidden bg-jobloop-primary-orange/5 mx-2 2xl:mx-0 border-2 border-jobloop-primary-orange/100 text-kv-black rounded-lg flex flex-col gap-8 lg:gap-12 lg:rounded-2xl pt-8 pb-12 my-24 px-8">
        <h2 className="pb-2 border-b-4 border-jobloop-primary-orange w-fit mx-auto  text-center">
          Hva våre partnere sier om oss
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
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
    </section>
  );
}

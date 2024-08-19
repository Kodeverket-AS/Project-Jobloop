"use client";

import Image from "next/image";
import JobbtilbudBilde from "../public/JobbtilbudBilde.png";
import KodehodeImage from "../public/KodehodeImage.png";
import GrunnleggendeIt from "../public/grunnleggende-it.webp";
import DigitaleTalenter from "../public/digitale-talenter.webp";
import IndividuellAmo from "../public/individuell-amo.webp";
import Loop from "../public/loop.webp";

import { LinkButtonInternal } from "./Buttons";
import { IntroSectionReverse, PartnerProject } from "./LayoutComponents";

const IntroData = [
  {
    image: JobbtilbudBilde,
    title: "Arbeidsrettede tilbud",
    text: "Våre arbeidsrettede tilbud sørger for at folk har rett kompetanse og er klar for arbeidslivet. Mange av disse tilbudene inkluderer praksis. Det betyr at du som arbeidsgiver kan bidra til et viktig løft og samtidig får muligheten til å bli kjent med våre flinke kandidater, helt uten forpliktelser. Du går glipp av mange talenter om du kun rekrutterer tradisjonelt.",
    path: "/tilbud",
    alt: "JobbtilbudBilde",
  },
];

const PartnerData = [
  {
    image: KodehodeImage,
    title: "Kodehode",
    text: "Kodehode rekrutterer kandidater som av ulike årsaker står utenfor arbeidslivet og tilbyr opplæring i frontend, backend, og fullstack-utvikling eller IT-drift og service. Gjennom en kombinasjon av teori, case-arbeid, og praksis lærer deltakerne det viktigste for en karriere innen IT. Kodehode er det største arbeidsrettede tilbudet i Jobloop og er i dag en ledende aktør for inkluderende rekruttering innen IT. Samarbeidet bidrar til å redusere utenforskap og tette kompetansegapet gjennom, spisset kvalifisering, internships, rekruttering og matchmaking med arbeidsgivere fra IT-bransjen.",
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
    path: "/grunnleggende-IT",
    alt: "3 hyggelige ansatte",
  },
  {
    image: DigitaleTalenter,
    title: "Digitale Talenter",
    text: "Dyrk interessene dine og få fast jobb",
    path: "/digitale-talenter",
    alt: "Smilende person som er digital talent",
  },
  {
    image: IndividuellAmo,
    title: "Individuell AMO",
    text: "Få et skreddersydd opplegg gjennom NAV",
    path: "/individuell-AMO",
    alt: "Person ser inn i kamera",
  },
  {
    image: Loop,
    title: "Loop",
    text: "Få relevant arbeidspraksis og erfaring",
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
    <div className="flex flex-col w-full gap-4 group xl:flex-row-reverse md:w-1/2">
      <a
        href={path}
        className="w-full transition-all h-72 xl:w-1/2">
        <Image
          alt={alt}
          src={image}
          width={500}
          height={500}
          className="object-cover h-full max-w-full"
        />
      </a>
      <div className="flex flex-col w-full gap-4 xl:w-1/2">
        <h3 className="text-xl text-kv-black md:text-2xl">{title}</h3>
        <p className="text-base text-gray-500 md:text-xl">{text}</p>
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
      <h4 className="text-xl text-kv-black">{name}</h4>
      <p className="text-xs text-kv-black">{company}</p>
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
      <div className="relative flex flex-col gap-8 px-8 pt-8 pb-12 mx-2 my-24 overflow-hidden border-2 rounded-lg bg-jobloop-primary-orange/5 2xl:mx-0 border-jobloop-primary-orange/100 text-kv-black lg:gap-12 lg:rounded-2xl">
        <h2 className="pb-2 mx-auto text-center border-b-4 border-jobloop-primary-orange w-fit">
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

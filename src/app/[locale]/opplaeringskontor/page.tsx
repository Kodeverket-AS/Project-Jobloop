import Image from 'next/image';
import { SectionComponent, TextBlock } from '@/components/feature/opplaeringskontor/SectionComponent';

export async function generateStaticParams() {
  return [
    { locale: 'nb' },
    { locale: 'en' },
    { locale: 'sv' },
  ];
}

export default function OpplæringskontorPage() {
  return (
    <main className="flex flex-col gap-16">

      <SectionComponent
        leftContent={
          <TextBlock
            title="Utenforskap handler sjelden om vilje – det handler om muligheter"
            contentString="Vi legger til rette for at bedrifter kan bidra uten å bære hele byrden alene. Gjennom strukturert oppfølging, tydelige forventninger og tett samarbeid hjelper vi flere inn i arbeidslivet – trygt, effektivt og profesjonelt."
          />
        }
        rightContent={
          <Image
            src="/opplæringskontor.jpg"
            alt="Opplæringskontor"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        }
        bgColorGreen={true}
      />

      
      <SectionComponent
        leftContent={
          <Image
            src="/opplæringskontor2.jpg"
            alt="Opplæringskontor 2"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        }
        rightContent={
          <TextBlock
            title="Alle snakker om samfunnsansvar. Vi gjør det konkret."
            contentString="Som lærebedrift gjennom JobLoop blir du en del av et system som fungerer – der faglig utvikling, HR-støtte og reell inkludering går hånd i hånd. Du får støtte, struktur og resultater. Vi fikser det – du gjør en forskjell."
          />
        }
        reverseLayoutOrder={true}
        bgColorOrange={true}
      />

      
      <SectionComponent
        leftContent={
          <TextBlock
            title="Vi møter mange bedrifter som vil bidra, men ikke vet hvor de skal starte."
            contentString="Derfor har vi laget et lavterskel-løp der vi tar oss av alt det praktiske. Du får møte kandidatene, vurdere kompetansen og teste samarbeidet. Vi følger opp lærlingen – du fokuserer på driften."
          />
        }
        rightContent={
          <Image
            src="/opplæringskontor3.jpg"
            alt="Opplæringskontor 3"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        }
        bgColorGrey={true}
      />

      
      <SectionComponent
        leftContent={
          <Image
            src="/opplæringskontor4.jpg"
            alt="Opplæringskontor 4"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        }
        rightContent={
          <TextBlock
            title="Enkelt. Trygt. Bærekraftig."
            contentString="Vi har laget et system som fungerer for alle parter. Bedrifter får støtte og struktur, kandidater får muligheten til å vokse og utvikle seg, og samfunnet får flere mennesker i arbeid. Det er enkelt, trygt og bærekraftig for alle involverte."
          />
        }
        reverseLayoutOrder={true}
        bgColorGreen={true}
      />
    </main>
  );
}

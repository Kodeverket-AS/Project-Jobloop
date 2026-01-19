import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Saksflyt - Pilotprosjekt',
    description: 'Fra første kontakt til ferdig tiltak',
  };
}

export default function Prosess() {
  const steps = [
    {
      number: 1,
      owner: 'gjensidige',
      title: 'Identifisering',
      description: 'Du mottar en henvendelse på telefon, eller identifiserer en aktuell kandidat i en eksisterende sak (Uføre/Barneforsikring).',
    },
    {
      number: 2,
      owner: 'gjensidige',
      title: 'Enkel kriteriesjekk (Del 1)',
      description: (
        <>
          Du sjekker kun det grunnleggende:
          <br />• Alder (13–26 år)
          <br />• Utenfor skole/jobb (eller i fare for)
          <br />• Lettere/moderate psykiske plager
        </>
      ),
    },
    {
      number: 3,
      owner: 'gjensidige',
      title: 'Motivasjon & Info',
      description: (
        <>
          <strong>Dette er nøkkelen:</strong> Du sender lenken til den "skjulte" landingssiden til kunden (og evt. foreldre). <br />
          Her kan de se video og lese om sporene i ro og fred, før de eventuelt tar kontakt med Kim.
        </>
      ),
    },
    {
      number: 4,
      owner: 'jobloop',
      title: 'Kartlegging (Del 2)',
      description: 'Kim kontakter kandidaten. Vi gjennomfører dybdekartlegging, snakker med foreldre/ungdom og finner riktig match og veileder.',
    },
    {
      number: 5,
      owner: 'jobloop',
      title: 'Tilbakemelding',
      description: 'Kim rapporterer tilbake til Gjensidige: Hva ble vi enige om? Hvilket spor velger vi? Er dette "go/no-go"?',
    },
    {
      number: 6,
      owner: 'jobloop',
      title: 'Rapportering underveis',
      description: 'Vi sender månedlige rapporter på progresjon, oppmøte og trivsel. Vi håndterer all oppfølging av deltakeren.',
    },
    {
      number: 7,
      owner: 'jobloop',
      title: 'Sluttrapport & Veien videre',
      description: 'Ved avslutning utarbeider Kim en rapport om hva som er oppnådd, og en anbefaling for veien videre (tilbake til skole, jobb, eller annet).',
    },
  ];

  return (
    <main className='min-h-screen bg-gray-50'>
      <header className='bg-white py-5 px-10 flex justify-between items-center border-b-5 border-[#002B49]'>
        <div className='text-2xl font-bold text-[#002B49]'>
          Gjensidige | <span className='text-[#4AB5A3]'>JobLoop</span>
        </div>
        <div>Intern prosessbeskrivelse</div>
      </header>

      <div className='bg-[#002B49] text-white py-10 px-6 text-center'>
        <h1 className='text-3xl font-bold mb-3'>Saksflyt i piloten</h1>
        <p className='opacity-80'>
          Fra første kontakt til ferdig tiltak. De blå stegene er Gjensidige, de grønne er JobLoop.
        </p>
      </div>

      <div className='max-w-4xl mx-auto px-4 py-12 relative'>
        <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2'></div>

        <div className='space-y-12'>
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            const isGjensidige = step.owner === 'gjensidige';
            const bgColor = isGjensidige ? 'bg-[#002B49]' : 'bg-[#4AB5A3]';
            const textColor = isGjensidige ? 'text-[#002B49]' : 'text-[#2C8C7D]';
            const badgeBg = isGjensidige ? 'bg-[#EBF2F6]' : 'bg-[#e0f2f1]';
            const badgeText = isGjensidige ? 'text-[#002B49]' : 'text-[#2C8C7D]';

            return (
              <div
                key={step.number}
                className={`flex ${isEven ? 'md:flex-row-reverse' : ''} items-start gap-6 relative`}
              >
                <div className='hidden md:block absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-50 z-10 flex items-center justify-center'>
                  <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-lg`}>
                    {step.number}
                  </div>
                </div>

                <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className='bg-white p-6 rounded-lg shadow-lg relative'>
                    <span className={`inline-block text-xs uppercase font-bold px-2 py-1 rounded mb-3 ${badgeBg} ${badgeText}`}>
                      {isGjensidige ? 'Gjensidige ansvar' : 'JobLoop tar over'}
                    </span>
                    <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{step.title}</h3>
                    <p className='text-gray-600 text-sm'>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className='text-center text-gray-500 py-10'>
        <p>Pilotprosjekt 2026 - Samarbeid for bedre inkludering</p>
      </footer>

      <div className='max-w-4xl mx-auto px-4 pb-8'>
        <Link
          href='/gjensidige-pilot'
          className='inline-block mt-6 text-[#4AB5A3] hover:text-[#002B49] transition-colors'
        >
          ← Tilbake til verktøykassen
        </Link>
      </div>
    </main>
  );
}

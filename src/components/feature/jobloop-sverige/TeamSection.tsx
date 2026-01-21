import Image from 'next/image';
import { LuMail } from 'react-icons/lu';
import johannaImage from '@public/johanna.webp';
import oddbjørnImage from '@public/oddbjørn.webp';

function formatTelHref(raw = '') {
  return raw.replace(/[^\d+]/g, '');
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Johanna Axelsson',
      role: 'Marknadsföring och affärsutveckling (Sverige)',
      image: johannaImage,
      email: 'johanna@jobloop.no',
      phone: null,
      description: [
        'Johanna Axelsson ansvarar för marknadsföring och affärsutveckling på JobLoop Sverige och är en drivande kraft i företagets svenska etablering. Parallellt med sin roll slutför hon en civilekonomexamen vid Mittuniversitetet i Östersund.',
        'Hon kombinerar starka akademiska meriter med bred arbetslivserfarenhet från både privat och offentlig sektor. Johanna har haft en rad olika service- och ledarskapsroller, bland annat som restaurangchef och skidlärare i Nya Zeeland, samt som vikarie och resurs i den svenska skolan.',
        'På JobLoop ansvarar Johanna för att sprida kunskap om lösningar som Gamify och Spelbaserad kvalificering, samt att bygga relationer med kommuner, skolor och beslutsfattare. Hon beskrivs som analytisk, nyfiken och lösningsorienterad, med hög arbetskapacitet och stor handlingskraft.',
      ],
    },
    {
      name: 'Oddbjørn Sve',
      role: 'Ledare för JobLoop Sverige ',
      image: oddbjørnImage,
      email: 'oddbjørn@jobloop.no',
      phone: null,
      description: [
        'Oddbjørn Sve leder företagets etablering i Sverige. Med bakgrund inom norska försvarsmakten och högre utbildning inom management, ekonomi och administration kombinerar han gedigen yrkeskunskap med god struktur och handlingskraft i komplexa utvecklingsprojekt.',
        'Under sin karriär har Oddbjørn skaffat sig omfattande erfarenhet av civilt-militärt samarbete, bland annat i samarbete med NATO, där han har ansvarat för att få stora och komplexa organisationer att arbeta mot gemensamma mål.',
        'Han har också lett organisationer i flera decennier inom områden som ofrivillig skolfrånvaro, utmaningar med skolavhopp, inkludering och yrkeskvalificering – i nära samarbete med norska arbetsförmedlingen (NAV), kommuner och arbetslivet.',
        'På JobLoop ansvarar Oddbjørn för att introducera och skala upp företagets tjänster i Sverige, inklusive Gamify, Spelbaserad Kvalificering, Kodehode och inkluderingsstöd till kommuner och andra företag. Rollen omfattar marknadsetablering, försäljning, dialog med myndigheter och partners samt att bygga ett kompetent svensk team.',
        'Målet är tydligt: JobLoop ska bli en naturlig partner för kommuner, skolor, arbetsförmedlingen och andra som vill ha alternativa lärarenor, fler som fullföljer sin utbildning och bättre inkluderingsresultat. Med ett strategiskt perspektiv, tvärvetenskaplig bakgrund och stor handlingskraft är Oddbjørn en nyckelperson i JobLoops arbete i Sverige.',
      ],
    },
    {
      name: 'Monica Hallquist',
      role: 'Pedagogisk ledare – JobLoop Sverige',
      image: null,
      email: 'monica@jobloop.no',
      phone: null,
      description: [
        'Monica Hallquist har en unik bakgrund som spänner över pedagogik och ledarskap inom skolan, men även av politiskt ledarskap inom den offentliga sektorn. Hon är i grunden utbildad lärare och har arbetat både som rektor och som förvaltningschef för utbildningssektorn.',
        'Dessutom har Monica en bred politisk bakgrund som bland annat kommunstyrelsens ordförande i Berg, och har arbetat politiskt med folkhälsofrågor på regional nivå. Idag är hon ordförande för utbildningsnämnden i Bergs kommun.',
        'Monica brinner för att modernisera skolan och göra lärandet mer relevant och lustfyllt för barn och unga. Som pedagogisk ledare på JobLoop Sverige kommer hon att bidra till att introducera Gamify som en ny och alternativ lärmiljö, samt bygga relationer med skolor, kommuner och beslutsfattare.',
      ],
    },
  ];

  return (
    <section className='w-full'>
      <div className='w-full text-center mb-12'>
        <div className='inline-block'>
          <h2 className='text-4xl md:text-5xl font-bold text-kv-black mb-4'>Vårt team</h2>
          <div className='block w-full h-1 bg-jobloop-primary-green mt-2 mb-6'></div>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-8'>
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className='bg-white rounded-2xl shadow-xl border-2 border-jobloop-primary-green/20 p-6 hover:shadow-2xl transition-all duration-300 flex flex-col'
          >
            <div className='flex flex-col items-center mb-6'>
              <div className='relative w-48 h-48 overflow-hidden rounded-full border-4 border-jobloop-primary-green shadow-lg mb-4'>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className='object-cover w-full h-full'
                  />
                ) : (
                  <div className='w-full h-full bg-jobloop-primary-green/10 flex items-center justify-center'>
                    <span className='text-5xl font-bold text-jobloop-primary-green'>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>
              <h3 className='text-2xl font-bold text-kv-black mb-2'>{member.name}</h3>
              <p
                className='text-lg font-semibold text-jobloop-primary-green mb-4 text-center'
                style={{ height: '3rem' }}
              >
                {member.role}
              </p>
              <div className='w-full' style={{ height: '2.5rem' }}>
                {(member.email || member.phone) && (
                  <div className='w-full space-y-2'>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className='flex items-center justify-center gap-2 text-jobloop-primary-green hover:text-jobloop-primary-orange transition-colors duration-300 text-sm font-medium'
                        title={`Skicka e-post till ${member.name}`}
                      >
                        <LuMail className='w-4 h-4' />
                        <span className='hover:underline'>{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${formatTelHref(member.phone)}`}
                        className='flex items-center justify-center gap-2 text-jobloop-primary-green hover:text-jobloop-primary-orange transition-colors duration-300 text-sm font-medium'
                        title={`Ring ${member.name}`}
                      >
                        <span className='hover:underline'>{member.phone}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            {member.description.length > 0 && (
              <div className='space-y-3 text-neutral-700 text-sm leading-relaxed'>
                {member.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

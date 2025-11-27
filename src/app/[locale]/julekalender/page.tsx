import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'nb' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'JobLoops digitale julekalender 2025 – Jul hos Jobloop';
  const description =
    'Åpne en ny luke hver dag i Jobloops digitale julekalender 2025. Få små drypp med motivasjon, læring og desembermagi.';

  return {
    title,
    description,
    icons: {
      icon: '/favicon-jul.png',
      shortcut: '/favicon-jul.png',
      apple: '/favicon-jul.png',
    },
    alternates: {
      canonical: 'https://jobloop.no/julekalender',
    },
    openGraph: {
      title,
      description,
      url: 'https://jobloop.no/julekalender',
      siteName: 'Jobloop',
      images: [
        {
          url: 'https://jobloop.no/images/Jobloop-julekalender.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'nb_NO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://jobloop.no/images/Jobloop-julekalender.png'],
    },
  };
}

export default function Julekalender() {
  return (
    <main
      className='
    min-h-screen
    w-full
    bg-gradient-to-br from-sky-100 via-white to-red-100
    flex justify-center
    pt-6 pb-16
    relative overflow-hidden
  '
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/snow-texture.png')] opacity-20" />
      <div className='w-full px-2 sm:px-4 lg:px-0 lg:max-w-[1200px] xl:max-w-[1380px] 2xl:max-w-[1600px]'>
        <div
          className='
    overflow-hidden
    rounded-2xl
    bg-white/80
    backdrop-blur-sm
    shadow-xl
    border border-red-100
  '
        >
          <iframe
            src='https://jobloopjulekalender2025.digitaljul.dk/'
            title='JobLoop julekalender 2025'
            className='
              w-[calc(100%+40px)]
              -ml-5
              h-[2200px]
              md:h-[2000px]
              lg:h-[1800px]
              xl:h-[1700px]
              border-0
            '
            loading='lazy'
          />
        </div>
      </div>
    </main>
  );
}

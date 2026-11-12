import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateStaticParams() {
  return [{ locale: 'nb' }, { locale: 'sv' }, { locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Minneord til Kong Harald V | JobLoop';
  const description =
    'JobLoop lyser fred over Hans Majestet Kong Harald Vs minne. Les minneordet fra styreleder Oddbjørn Sve på vegne av hele JobLoop.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://jobloop.no/minneord-kong-harald-v',
    },
    openGraph: {
      title,
      description,
      url: 'https://jobloop.no/minneord-kong-harald-v',
      siteName: 'JobLoop',
      images: [
        {
          url: 'https://jobloop.no/kong-harald-v.jpg',
          width: 800,
          height: 500,
          alt: 'Hans Majestet Kong Harald V',
        },
      ],
      locale: 'nb_NO',
      type: 'article',
    },
  };
}

export default function MinneordKongHaraldV() {
  return (
    <main className='flex flex-col items-center w-full min-h-screen bg-kv-white'>
      <div className='w-full bg-jobloop-primary-grey'>
        <div className='max-w-3xl mx-auto px-4 py-10 text-center'>
          <p className='uppercase tracking-widest text-sm text-gray-300 mb-2'>Til minne om</p>
          <h1 className='text-3xl md:text-4xl font-bold text-kv-white'>
            Hans Majestet Kong Harald V
          </h1>
          <p className='text-gray-300 mt-2'>21. februar 1937 &ndash; 28. august 2026</p>
        </div>
      </div>

      <article className='w-full max-w-3xl px-4 py-12 space-y-8'>
        <div className='overflow-hidden rounded-xl shadow-lg mx-auto max-w-md'>
          <Image
            src='/kong-harald-v.jpg'
            alt='Offisielt portrett av Hans Majestet Kong Harald V'
            width={800}
            height={500}
            className='w-full h-auto object-cover'
            priority
          />
        </div>

        <div className='space-y-6 text-base md:text-lg leading-relaxed text-jobloop-primary-grey text-pretty'>
          <p className='font-semibold text-kv-black'>
            Minneord til Kong Harald V &ndash; 28. august 2026
          </p>

          <p>JobLoop mottok med stor sorg budskapet om Hans Majestet Kong Harald Vs bortgang.</p>

          <p>
            Gjennom mer enn tre tiår som Norges konge var Kong Harald en samlende og varm stemme
            for det norske fellesskapet. Han møtte mennesker med respekt og verdighet, og viste
            gjennom sitt virke et sterkt engasjement for at alle skulle oppleve tilhørighet og få
            være en del av fellesskapet.
          </p>

          <p>
            For oss i JobLoop har dette en særlig betydning. Vårt arbeid handler om å skape
            muligheter for unge som står i fare for å falle utenfor &ndash; gjennom inkludering,
            utdanning, yrkesrettet kvalifisering og veien inn i arbeidslivet. Kong Haralds
            tydelige tro på fellesskap og på verdien av hvert enkelt menneske er verdier vi
            ønsker å føre videre i vårt eget arbeid.
          </p>

          <p>
            Vi takker Kong Harald for hans livslange tjeneste for Norge og for den betydningen
            han har hatt som samlende symbol og medmenneske.
          </p>

          <p>
            Våre tanker går til Dronning Sonja, den øvrige kongefamilien og alle som sto Kong
            Harald nær.
          </p>

          <p className='font-semibold text-kv-black'>Vi lyser fred over Kong Harald Vs minne.</p>

          <div className='pt-6 border-t border-gray-200'>
            <p>På vegne av JobLoop AS</p>
            <p className='font-semibold text-kv-black mt-2'>Oddbjørn Sve</p>
            <p className='text-sm text-gray-500'>Styreleder</p>
          </div>
        </div>
      </article>
    </main>
  );
}

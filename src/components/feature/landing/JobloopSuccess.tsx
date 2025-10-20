import { getTranslations } from 'next-intl/server';
import { ExternalLinkButton } from '@/components/buttons';

// Images
import Image from 'next/image';
import JobloopFafo from '@public/jobbloop-fafo.webp';

export default async function JobloopSuccess() {
  const t = await getTranslations('base');

  return (
    <div className='bg-linear-to-br from-jobloop-primary-green/10 via-white to-jobloop-primary-orange/10 border-2 border-jobloop-primary-green/20 rounded-2xl flex flex-col gap-12 px-8 py-12 md:flex-row md:items-center shadow-lg'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <div className='relative overflow-hidden rounded-xl shadow-md'>
          <Image
            src={JobloopFafo}
            width={1500}
            height={500}
            className='object-cover'
            alt={t('landing.success.image.alt')}
          />
        </div>
      </div>
      <div className='w-full md:w-1/2 space-y-6'>
        <div>
          <h2 className='text-2xl md:text-3xl font-bold text-kv-black pb-3 border-b-2 border-jobloop-primary-orange w-fit'>
            {t('landing.success.title')}
          </h2>
        </div>
        <p className='text-lg leading-relaxed text-gray-700'>{t('landing.success.text')}</p>
        <div className='space-y-4 pt-4'>
          <ExternalLinkButton
            Path='https://www.fafo.no/zoo-publikasjoner/fafo-rapporter/sysselsetting-av-unge-med-nedsatt-funksjonsevne-3'
            Text='FAFOs Rapport'
            Aria='FAFOs Rapport'
          />
          <ExternalLinkButton
            Path='https://www.virke.no/contentassets/bb882874e5f5449bb72e58a6bb76c3f1/161023menon-publikasjon-nr.-113_2023-arbeids--og-inkluderingsvirksomhetenes-samfunnsverdi.pdf '
            Text='Menon Economics (2023) - PDF'
            Aria='Menon Economics (2023)'
          />
        </div>
      </div>
    </div>
  );
}

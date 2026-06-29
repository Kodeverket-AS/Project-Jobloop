import type { Tiltak } from '@/types/sanity/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/lib/Sanity';
import { PortableText } from '@portabletext/react';
import { LinkButtonAnimatedWithIcon } from '@/components/buttons';
import { getTranslations } from 'next-intl/server';

export default async function HeroSub({
  heading,
  image,
  introtext,
}: Pick<Tiltak, 'image' | 'introtext' | 'heading'>) {
  const t = await getTranslations("dictionary");

  // TODO: Ensure that image has aria label or is hidden if only decorative.
  // TODO: Figure out if this should be a header instead of a section.
  // TODO: Suggest a better introtext fallback, as it currently can be confusing for users who see this (e.g. on the "/loop" page).
  return (
    <section
      className='flex flex-col gap-6  lg:flex-row  rounded-xl'
      aria-labelledby='hero-sub-heading'
    >
      <div className='flex flex-col gap-4 w-full lg:w-1/2 justify-center order-last'>
        <h1
          id='hero-sub-heading'
          className={`
            w-fit pb-2 border-b-2 md:border-b-4 border-jobloop-primary-green
            text-kv-black text-3xl !text-[1.3rem] sm:!text-[2rem]
          `}
        >
          {heading ? heading : 'Tittel kommer her'}
        </h1>
        <div className='text-gray-600 text-base xl:leading-relaxed lg:text-xl'>
          {introtext ? (
            <PortableText value={introtext} />
          ) : (
            <p>Her kommer en introtekst</p>
          )}
        </div>
        <LinkButtonAnimatedWithIcon Path='/kontakt' Text={t("contactUs")} />
      </div>
      <div className='w-full lg:w-1/2 flex items-center order-first'>
        <Image
          src={image ? urlFor(image).url() : ''}
          width={1000}
          height={500}
          className={`
            max-w-full h-96 object-cover rounded-xl shadow-lg shadow-gray-300/50
            hover:shadow-xl hover:shadow-gray-400/50 hover:scale-[1.02]
            transition-all duration-500
          `}
          alt={image?.alt || ''}
        />
      </div>
    </section>
  );
}

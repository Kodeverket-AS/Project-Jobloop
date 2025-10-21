import { LinkButtonAnimatedWithIcon } from '@/components/buttons';
import { getTranslations } from 'next-intl/server';

export default async function ContactComponent() {
  const t = await getTranslations('landing');

  return (
    <div className='flex flex-col items-center justify-center text-center gap-6 '>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-kv-black pb-4 border-b-4 border-jobloop-primary-green w-fit mx-auto'>
          {t("landing.contact.title")}
        </h2>
        <p className='text-lg md:text-xl text-gray-600 mt-6 mb-8 leading-relaxed'>
          {t("landing.contact.text")}
        </p>
        <div className='flex justify-center'>
          <LinkButtonAnimatedWithIcon Path={'/kontakt'} Text={t("landing.contact.button.label")} />
        </div>
      </div>
    </div>
  );
}

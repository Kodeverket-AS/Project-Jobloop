import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function BottomImageSection() {
  const t = useTranslations('ki');

  return (
    <Image
      src='/picture-ki.png'
      alt={t('bottomImage.alt')}
      width={800}
      height={600}
      className='w-full max-w-4xl h-auto rounded-2xl flex justify-self-center'
    />
  );
}

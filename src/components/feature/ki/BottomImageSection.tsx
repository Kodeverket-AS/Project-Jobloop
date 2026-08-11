import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function BottomImageSection() {
  const t = useTranslations('ki');
  // TODO: Deal with divs if possible.
  return (
    <div className="w-full ">
      <div className="flex justify-center">
        <Image
          src="/picture-ki.png"
          alt={t('bottomImage.alt')} // TODO: Improve alt text
          width={800}
          height={600}
          className="w-full max-w-4xl h-auto rounded-2xl"
        />
      </div>
    </div>
  );
}

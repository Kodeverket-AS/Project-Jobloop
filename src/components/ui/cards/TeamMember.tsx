import Image, { type StaticImageData } from 'next/image';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  image: StaticImageData;
}

export async function TeamMember({ name, role, image }: TeamMemberProps) {
  const t = await getTranslations('about');
  const t1 = await getTranslations('contact');

  // TODO: Consider making the links go directly to the clicked team member's profile on the contact page.
  return (
    <Link
      href='/kontakt'
      title={`${t('about.employees.contact')} ${name}`}
      className='
        group flex flex-col gap-2 items-center cursor-pointer
        motion-safe:hover:scale-105 transition-all motion-safe:duration-300
      '
    >
      <div className='
        w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full border-2
        border-jobloop-primary-orange shadow-jobloop-primary-orange/15
        motion-safe:group-hover:border-4 shadow-2xl transition-all
        motion-safe:duration-300
      '>
        <Image
          src={image}
          alt={name || t1('card.fallbackImage.alt')}
          width={100}
          height={100}
          className='
            object-cover object-left w-full h-full scale-100 transition-all
            motion-safe:group-hover:scale-105 motion-safe:duration-500
          '
        />
      </div>
      <p className='
        group-hover:text-jobloop-primary-orange transition-colors
        motion-safe:duration-300 text-center flex flex-col items-center
      '>
        <span className='
          font-bold text-xl group-hover:underline underline-offset-2
          decoration-jobloop-primary-orange
        '>
          {name}
        </span>
        {role}
      </p>
    </Link>
  );
}

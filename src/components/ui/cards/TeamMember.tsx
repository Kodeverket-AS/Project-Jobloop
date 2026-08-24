import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  image: StaticImageData;
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  // TODO: Clean up divs and restructure.
  // TODO: Consider making the links go directly to the clicked team member's profile on the contact page.
  return (
    <Link
      href='/kontakt'
      title={`Gå til Kontakt siden og finn ${name}`} // TODO: Translate title!
      className='
        group flex flex-col gap-2 items-center cursor-pointer
        motion-safe:hover:scale-105 transition-all motion-safe:duration-300
      '
    >
      <div className='
        w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full border-2
        border-jobloop-primary-orange shadow-jobloop-primary-orange/15
        group-hover:border-4 shadow-2xl transition-all motion-safe:duration-300
      '>
        <Image
          // TODO: Find out what causes this to change size even with motion-safe enabled.
          src={image}
          alt={`Profilbilde av ${name}`} // TODO: Translate alt text
          width={100}
          height={100}
          className='
            object-cover object-left w-full h-full scale-100 transition-all
            motion-safe:group-hover:scale-105 motion-safe:duration-500
          '
        />
      </div>
      <div className='text-center'>
        <span className='
          font-bold text-xl group-hover:underline underline-offset-2
          decoration-jobloop-primary-orange
        '>
          {name}
        </span>
        <p className='
          group-hover:text-jobloop-primary-orange transition-colors
          motion-safe:duration-300
        '>
          {role}
        </p>
      </div>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';
import { AriaAttributes } from 'react';

interface ButtonProps {
  Path: string;
  Text: string;
  Aria?: AriaAttributes['aria-label'];
}

export function KontaktButton({ Path, Text }: ButtonProps) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className={`
        group flex items-center justify-center w-full sm:w-fit gap-1 px-8 py-3
        rounded-full border-2 border-jobloop-primary-green bg-jobloop-primary-green
        text-base text-center text-kv-black underline underline-offset-2
        group tracking-normal transition-all scale-100 lg:hover:scale-105
        decoration-kv-black/0 hover:decoration-kv-black hover:bg-jobloop-primary-green/0
      `}
    >
      {Text}
      <LuMail
        className={`
          inline-block h-5 lg:w-5 transition-all
          group-hover:translate-x-1 group-hover:animate-pulse
        `}
        aria-hidden='true'
      />
    </Link>
  );
}

export function ExternalLinkButton({ Path, Text, Aria }: ButtonProps) {
  // TODO: Check if it is too much with both aria-label and sr-only span.
  // TODO: Need to check Aria property for all uses to ensure consistency.
  const t = useTranslations('dictionary');

  return (
    <a
      href={Path}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={Aria}
      className={`
        w-full sm:w-fit flex items-center justify-center gap-1 px-8 py-3
        bg-kv-white rounded-full tracking-normal shadow-md shadow-kv-black/20
        text-base text-center text-kv-black border-2 border-solid
        border-jobloop-primary-green hover:border-jobloop-primary-orange
        hover:shadow-lg hover:bg-jobloop-primary-green lg:hover:scale-105
        focus:bg-jobloop-primary-green focus:text-kv-white
        transition-all duration-300 scale-100
      `}
    >
      {Text}
      <span className='sr-only'>
        ({t('opensInNewTab')})
      </span>
      <BiLinkExternal
        className={`
          inline-block h-5 lg:w-5 transition-transform duration-300
          group-hover:scale-110
        `}
        aria-hidden='true'
      />
    </a>
  );
}

export function LesMerButton({ Path, Text = 'Les mer', Aria = '' }: Partial<ButtonProps>) {
  /**
   * Problem: The current implementation does not provide enough context for screen readers.
   * Solution: Consider adding a visually hidden span with additional context.
   * 
   // TODO: Ensure that ALL uses of LesMerButton provide an appropriate Aria label for accessibility.
   // TODO: Add an "about [context]" to the Aria label for better screen reader context.
   */
  return (
    <a
      href={Path}
      aria-label={Aria}
      className={`
        w-full md:w-auto md:max-w-[155px] inline-flex gap-3 px-6 py-3 text-white
        items-center justify-center bg-jobloop-primary-green rounded-full
        hover:bg-jobloop-primary-orange hover:shadow-lg hover:scale-105
        transition-all duration-300 group/btn
      `}
    >
      <span className='font-medium'>{Text}</span>
      {Aria ? <span className='sr-only'>{Aria}</span> : null}
      <FaArrowRight
        className={`
          group-hover/btn:translate-x-1 group-hover/btn:scale-110
          transition-transform duration-300
        `}
        aria-hidden='true'
      />
    </a>
  );
}

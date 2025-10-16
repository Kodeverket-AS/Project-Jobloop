'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export function LinkButton({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className='w-full px-8 py-3 tracking-normal text-center scale-100 lg:hover:scale-105 text-kv-black transition-all bg-kv-white border-2 border-solid rounded-full sm:w-fit border-kv-black hover:bg-jobloop-primary-green  hover:border-jobloop-primary-green focus:bg-jobloop-primary-green'
    >
      {Text}
    </Link>
  );
}

export function LinkButtonInternal({ Path, Text }) {
  return (
    <Link
      href={Path}
      aria-label={`Lenke til underside ${Path}`}
      className=' flex items-center gap-1 py-3 font-bold tracking-normal underline transition-all text-jobloop-secondary-green w-fit decoration-jobloop-secondary-green/5 underline-offset-4 hover:underline-offset-2 hover:decoration-jobloop-secondary-green hover:gap-2 '
    >
      {Text}
      <FaArrowRight className='inline-block h-4 lg:w-4' />
    </Link>
  );
}

import Link from 'next/link';

// Holdes synlig under scroll (fixed) med fast høyde (h-16 md:h-20) slik at Header kan reservere
// nøyaktig samme plass under den – se `top-16 md:top-20`/`mt-16 md:mt-20` i Header.tsx.
export function MourningBanner() {
  return (
    <div className='fixed top-0 inset-x-0 z-[100] h-16 md:h-20 flex items-center bg-kv-black text-kv-white shadow-lg border-b border-white/10'>
      <p className='mx-auto flex max-w-[1536px] w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-1 px-4 text-center text-sm sm:text-base md:text-xl font-medium leading-snug'>
        <span>Til minne om Kong Harald V &ndash; JobLoop lyser fred over hans minne.</span>
        <Link
          href='/minneord-kong-harald-v'
          className='underline decoration-2 underline-offset-2 font-bold shrink-0 hover:text-gray-300'
        >
          Les minneordet
        </Link>
      </p>
    </div>
  );
}

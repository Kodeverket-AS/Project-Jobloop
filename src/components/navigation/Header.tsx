'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { HamburgerMenu } from './Hamburger';
import LocaleMenu from '../ui/menu/LocaleMenu';

export function Header() {
  // Sjekker om vi er i juni (måned nummer 5 i JS: jan=0, feb=1 ... juni=5)
  const [isJune, setIsJune] = useState(false);

  useEffect(() => {
    setIsJune(new Date().getMonth() === 5);
  }, []);

  // Apply specific colors on homepage... /shrug
  const pathname = usePathname();
  const isLanding = pathname === '/';
  const isKiKurs = pathname === '/ki-kurs';

  const t = useTranslations('base.header');
  const links = [
    /* {
      href: '/nyhetsbrev',
      label: t('navigation.about.label'),
      aria: t('navigation.about.aria'),
    },
    {
      href: '/ansettelser',
      label: t('navigation.about.label'),
      aria: t('navigation.about.aria'),
    }, */
    {
      href: '/om-oss',
      label: t('navigation.about.label'),
      aria: t('navigation.about.aria'),
    },
    // {
    //   href: '/opplaeringskontor',
    //   label: t('navigation.opplæringskontor.label'),
    //   aria: t('navigation.opplæringskontor.aria'),
    // },
    {
      href: '/kontakt',
      label: t('navigation.contact.label'),
      aria: t('navigation.contact.aria'),
    },
    {
      href: '/jobloop-sverige',
      label: t('navigation.sverige.label'),
      aria: t('navigation.sverige.aria'),
    },
  ];

  return (
    <header
      className={`${isLanding ? 'absolute top-0 z-50' : ''} w-full px-5 lg:px-7 ${isKiKurs ? 'bg-jobloop-primary-green/20' : ''}`}
    >
      <Link
        href="#main"
        className="absolute left-0 top-0 bg-jobloop-primary-green text-white py-2 px-4 z-50 transform -translate-y-full focus:translate-y-0 transition"
        // TODO: Add id="main" to all <main> elements.
      >
        Skip to main content
      </Link>
      <div className='flex items-center justify-between max-w-[1536px] mx-auto'>
        <div className='p-4'>
          <Link href='/' aria-label='Gå til landingssiden' className='relative inline-block'>
            <Image
              className='w-28 lg:w-36 h-auto'
              src={isLanding ? '/logoJobloopHvit.svg' : '/JobloopFarge.svg'}
              width={350}
              height={220}
              alt={isJune ? 'Jobloop Logo med Pride-regnbue' : 'Jobloop Logo'}
            />

            {/* Vaktmester-spesial: Vises kun i juni måned */}
            {isJune && (
              <svg
                viewBox='0 0 100 20'
                className='absolute top-[-4px] left-[35%] w-[63%] h-auto pointer-events-none select-none'
              >
                <defs>
                  <linearGradient id='pride-rainbow' x1='0%' y1='0%' x2='100%' y2='0%'>
                    <stop offset='0%' stopColor='#E40303' />
                    <stop offset='16.6%' stopColor='#FF8C00' />
                    <stop offset='33.3%' stopColor='#FFED00' />
                    <stop offset='50%' stopColor='#008026' />
                    <stop offset='66.6%' stopColor='#004CFF' />
                    <stop offset='100%' stopColor='#732982' />
                  </linearGradient>
                </defs>
                <path
                  d='M 3,18 Q 50,2 97,18'
                  fill='none'
                  stroke='url(#pride-rainbow)'
                  strokeWidth='5'
                  strokeLinecap='round'
                />
              </svg>
            )}
          </Link>
        </div>
        <div>
          <nav className='hidden h-auto p-0 md:flex'>
            <ul className="p-4 md:flex">
              {links.map(({ href, label, aria }) => (
                <li
                  key={label}
                >
                  <Link
                    key={label}
                    href={href}
                    aria-label={aria}
                    className={`${isLanding ? 'text-kv-white' : 'text-jobloop-primary-grey'}  px-2 font-semibold text-xl md:px-4  md:hover:underline uppercase`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <LocaleMenu altColor={isLanding} />
            </ul>
          </nav>
          <div className='px-4'>
            <HamburgerMenu links={links} altColor={isLanding} />
          </div>
        </div>
      </div>
    </header>
  );
}

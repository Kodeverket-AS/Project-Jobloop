'use client';

import Link from 'next/link';
import LocaleMenu from '../ui/menu/LocaleMenu';
import HamburgerMenu from './Hamburger';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export function Header() {
  // Apply specific colors on homepage... /shrug
  const pathname = usePathname();
  const isLanding = pathname === '/';

  const t = useTranslations('cta');
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
    {
      href: '/kontakt',
      label: t('navigation.contact.label'),
      aria: t('navigation.contact.aria'),
    },
  ];
  return (
    <header className={`${isLanding ? 'absolute top-0 z-50' : ''} w-full px-5 lg:px-7`}>
      <div className='flex items-center justify-between max-w-[1536px] mx-auto'>
        <div className='p-4'>
          <Link href='/' aria-label='Gå til landingssiden'>
            <Image
              className='w-28 lg:w-36'
              src={isLanding ? '/logoJobloopHvit.svg' : '/JobloopFarge.svg'}
              width={350}
              height={220}
              alt='Jobloop Logo'
            />
          </Link>
        </div>
        <div>
          <nav className='hidden h-auto p-4 md:block'>
            {links.map(({ href, label, aria }) => (
              <Link
                key={label}
                href={href}
                aria-label={aria}
                className={`${isLanding ? 'text-kv-white' : 'text-jobloop-primary-grey'}  px-2 font-semibold text-xl md:px-4  md:hover:underline uppercase`}
              >
                {label}
              </Link>
            ))}
            <LocaleMenu />
          </nav>
          <div className='px-4'>
            <HamburgerMenu hamFill='white' links={links} />
          </div>
        </div>
      </div>
    </header>
  );
}

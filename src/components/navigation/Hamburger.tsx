'use client';

import { useState, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';

interface MenuItems {
  href: string;
  label: string;
  aria?: string;
}

interface MenuProps {
  links: MenuItems[];
  altColor: boolean;
}

export function HamburgerMenu({ links, altColor }: MenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <div className='block md:hidden'>
      <button
        className='flex items-center justify-center w-10 h-10 transition duration-500 rounded-xl top-4 right-4'
        aria-label='Åpne mobil navigasjonsmeny'
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu
          className={`w-20 h-20 ${altColor ? 'fill-kv-white' : 'fill-jobloop-secondary-green'}`}
        />
      </button>
      <div
        className={`fixed top-0 z-40 right-0 w-full bg-kv-white h-screen transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={menuRef}
      >
        <nav className='relative flex justify-center'>
          <button
            className='absolute flex items-center justify-center w-10 h-10 transition rounded-xl top-4 right-4 '
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Lukke navigasjonsmeny'
          >
            <IoCloseSharp
              className={`${
                isOpen ? 'block' : 'hidden'
              } text-kv-black rounded-full transition duration-500 z-50 w-12 h-12`}
            />
          </button>
          <ul className='grid gap-8 mt-20'>
            {links.map(({ label, href, aria }) => (
              <Link
                key={label}
                href={href}
                aria-label={aria}
                className='px-8 text-xl font-bold transition-all text-jobloop-secondary-green group w-fit'
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

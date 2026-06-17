'use client';

import { useState, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';
import LocaleMenuMobile from '../ui/menu/LocaleMenuMobile';
import { useFocusTrap } from '@/hooks/useFocusTrap';

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
  const triggerRef = useRef<HTMLButtonElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));
  useFocusTrap({
    containerRef: menuRef,
    isActive: isOpen,
    onEscape: () => setIsOpen(false),
    returnFocusRef: triggerRef
  });

  // TODO: Add hover/touch styles for visual touch feedback for mobile?
  // TODO: Add translations for aria-labels.
  return (
    <div className='block md:hidden'>
      <button
        className='flex items-center justify-center w-10 h-10 transition duration-500 rounded-xl top-4 right-4'
        aria-label='Åpne mobil navigasjonsmeny'
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls='mobile-nav-dialog'
        aria-haspopup='dialog'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GiHamburgerMenu
          className={`w-20 h-20 ${altColor ? 'fill-kv-white' : 'fill-jobloop-secondary-green'}`}
        />
      </button>
        <div
          id='mobile-nav-dialog'
          className={`
            z-40 fixed inset-0 bg-kv-white flex flex-col justify-center
            transform transition-transform duration-300
            motion-reduce:transition-none motion-reduce:transform-none
            ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}
          `}
          ref={menuRef}
          role='dialog'
          aria-modal='true'
          aria-label='Mobil navigasjonsmeny'
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
            <button
              className='absolute top-4 right-4 w-10 h-10'
              onClick={() => setIsOpen(false)}
              aria-label='Lukke navigasjonsmeny'
            >
              <IoCloseSharp
                className={`${
                  isOpen ? 'block' : 'hidden'
                } text-kv-black rounded-full transition duration-500 z-50 w-12 h-12`}
                aria-hidden='true'
              />
            </button>
            <nav className='flex flex-col items-center gap-12 py-12 overflow-scroll'>
              <ul className='flex flex-col items-center gap-8'>
                {links.map(({ label, href, aria }, index) => (
                  <li
                    key={label}
                    className={index === links.length - 1 ? 'pb-4' : 'pb-0'}
                  >
                    <Link
                      href={href}
                      aria-label={aria}
                      className='text-xl font-bold text-jobloop-secondary-green group w-fit hover:underline'
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <LocaleMenuMobile />
              </ul>
            </nav>
        </div>
    </div>
  );
}

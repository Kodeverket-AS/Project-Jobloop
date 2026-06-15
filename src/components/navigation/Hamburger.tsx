'use client';

import { useState, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';
import LocaleMenuMobile from '../ui/menu/LocaleMenuMobile';

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

  /**
   * Problem: Right now the overlay stays mounted and is only moved off-screen
   * with translate-x-full at Hamburger.tsx:61.
   * That means its links and buttons may still exist in the accessibility tree
   * when closed. The cleanest fix is to only render the overlay when isOpen is
   * true, or otherwise mark it hidden/inert when closed. If you keep it
   * mounted, the focus trap and modal semantics should only be active while
   * open.
   // TODO: Add translations for aria-labels

   * Problem: Mobile menu overlay has no focus trap, no role, no Escape key
   * The overlay div in Hamburger.tsx is missing:
   * 
   * role="dialog" and aria-modal="true" (screen readers will navigate behind the overlay)
   * Focus trap (keyboard users can tab to content behind the overlay)
   * Escape key handler to close the menu
   * 
   // TODO: Add role="dialog" and aria-modal="true" to the overlay div.
   // TODO: Add focus trap.
   // TODO: Add escape key handler to close the menu.
   */
  return (
    <div className='block md:hidden'>
      <button
        className='flex items-center justify-center w-10 h-10 transition duration-500 rounded-xl top-4 right-4'
        aria-label='Åpne mobil navigasjonsmeny' // TODO: Add translation
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu
          className={`w-20 h-20 ${altColor ? 'fill-kv-white' : 'fill-jobloop-secondary-green'}`}
        />
      </button>
      <div
        className={`
          z-40 fixed flex inset-0 bg-kv-white
          transform transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        ref={menuRef}
        role='dialog'
        aria-modal='true'
        aria-label='Mobil navigasjonsmeny' // TODO: Add translation
      >
        <div className='relative flex-1 flex flex-col justify-center'>
          <button
            className='absolute top-4 right-4 w-10 h-10'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Lukke navigasjonsmeny' // TODO: Add translation
            aria-expanded={isOpen}
          >
            <IoCloseSharp
              className={`${
                isOpen ? 'block' : 'hidden'
              } text-kv-black rounded-full transition duration-500 z-50 w-12 h-12`}
            />
          </button>
          <div className='flex flex-col items-center gap-12 py-12 overflow-scroll'>
            <nav>
              <ul className='flex flex-col items-center gap-8'>
                {links.map(({ label, href, aria }, index) => (
                  <li
                    key={label}
                    className={index === links.length - 1 ? 'pb-4' : 'pb-0'}
                  >
                    {/* TODO: Add hover/touch styles for visual touch feedback for mobile. */}
                    <Link
                      key={label}
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
      </div>
    </div>
  );
}

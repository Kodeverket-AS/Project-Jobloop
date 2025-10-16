'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoJobloopHvit from '../../../public/logoJobloopHvit.svg';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Contact information for the footer
const contactInformation = [
  {
    name: 'Deltaker',
    email: 'team@jobloop.no ',
  },
  {
    name: 'Bedrifter',
    email: 'christer@jobloop.no',
    phoneDisplay: '+47 92 88 28 04',
    phoneLink: '+4792882804',
  },
  {
    name: 'Oppdragsgiver',
    email: 'inger-johanne@jobloop.no ',
    phoneDisplay: '+47 48 35 87 03',
    phoneLink: '+4748358703',
  },
];

export default function Footer() {
  return (
    <footer className='w-full text-kv-white bg-jobloop-primary-grey'>
      <div className='mx-auto max-w-[1536px] px-4 md:px-8 lg:px-12'>
        <div className='flex flex-col lg:flex-row lg:justify-around gap-8 py-12'>
          <div className='flex flex-col items-center lg:items-start lg:justify-center gap-6 lg:w-1/3'>
            <div className='w-48'>
              <a
                href='https://jobloop.no/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Lenke til Jobloops nettside'
              >
                <Image
                  alt='Jobloop logo'
                  src={logoJobloopHvit}
                  width={350}
                  height={250}
                  className='hover:opacity-80 transition-opacity duration-300'
                />
              </a>
            </div>
            <p className='text-gray-300 text-center lg:text-left leading-relaxed'>
              Vi hjelper deg med å finne din drømmejobb gjennom innovative kurs
              og personlig veiledning.
            </p>
          </div>

          <div className='flex flex-row gap-8 lg:gap-12'>
            <div className='flex flex-col gap-6 w-2/3'>
              <h3 className='text-2xl font-bold text-jobloop-primary-green'>
                Sider
              </h3>
              <div className='flex flex-col gap-3'>
                <Link
                  className='text-gray-300 hover:text-jobloop-primary-green transition-colors duration-300 hover:translate-x-1 transform'
                  href='/ansettelser'
                  aria-label='Gå til underside for deltaker'
                >
                  Ledige stillinger
                </Link>
                <Link
                  className='text-gray-300 hover:text-jobloop-primary-green transition-colors duration-300 hover:translate-x-1 transform'
                  href='/om-oss'
                  aria-label='Gå til underside for samarbeidspartner'
                >
                  Om Jobloop
                </Link>
                <Link
                  className='text-gray-300 hover:text-jobloop-primary-green transition-colors duration-300 hover:translate-x-1 transform'
                  href='/kontakt'
                  aria-label='Gå til kontakt side'
                >
                  Kontakt vår team
                </Link>
              </div>
            </div>

            <div className='flex flex-col gap-6 w-1/2'>
              <h3 className='text-2xl font-bold text-jobloop-primary-green'>
                Kontakt
              </h3>
              <div className='space-y-4'>
                {contactInformation.map((person) => (
                  <div
                    key={person.name}
                    className='border-l-2 border-jobloop-primary-green/30 pl-4'
                  >
                    <h4 className='font-semibold text-white mb-1'>
                      {person.name}
                    </h4>
                    <a
                      href={`mailto:${person.email}`}
                      className='text-gray-300 hover:text-jobloop-primary-green transition-colors duration-300 block'
                      target='_blank'
                      aria-label={`Åpner email for å opprette epost til ${person.name}`}
                    >
                      {person.email}
                    </a>
                    {person.phoneDisplay && (
                      <a
                        href={`tel:${person.phoneLink}`}
                        className='text-gray-300 hover:text-jobloop-primary-green transition-colors duration-300 block'
                        aria-label={`Åpner telefon for å ringe ${person.name}`}
                      >
                        {person.phoneDisplay}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className='flex gap-4 pt-4'>
                <a
                  href='https://www.facebook.com/JobLoop.Norge'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                  className='p-2 bg-gray-700 hover:bg-jobloop-primary-green rounded-lg transition-all duration-300 hover:scale-110'
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href='https://www.instagram.com/jobloop.norge/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                  className='p-2 bg-gray-700 hover:bg-jobloop-primary-green rounded-lg transition-all duration-300 hover:scale-110'
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href='https://www.linkedin.com/company/jobloop/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  className='p-2 bg-gray-700 hover:bg-jobloop-primary-green rounded-lg transition-all duration-300 hover:scale-110'
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-700 py-6'>
        <div className='max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              &copy; {new Date().getFullYear()} JobLoop. Alle rettigheter
              forbeholdt.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link
                href='/om-oss'
                className='text-gray-400 hover:text-jobloop-primary-green transition-colors duration-300'
              >
                Personvern
              </Link>
              <Link
                href='/kontakt'
                className='text-gray-400 hover:text-jobloop-primary-green transition-colors duration-300'
              >
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

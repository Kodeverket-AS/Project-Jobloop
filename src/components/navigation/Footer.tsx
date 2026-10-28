import Link from 'next/link';
import { Link as LocaleLink } from '@/i18n/navigation';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default async function Footer() {
  const t = await getTranslations('base');

  // Contact information for the footer
  const contactInformation = [
    {
      name: t('footer.contacts.participants'),
      email: 'team@jobloop.no ',
    },
    {
      name: t('footer.contacts.companies'),
      email: 'daniel.h@jobloop.no',
      phoneDisplay: '+47 45 84 67 10',
      phoneLink: '+4745846710',
    },
    {
      name: t('footer.contacts.clients'),
      email: 'inger-johanne@jobloop.no ',
      phoneDisplay: '+47 48 35 87 03',
      phoneLink: '+4748358703',
    },
  ];

  // Page list for the footer
  const pageList = [
    {
      name: 'hiring',
      href: '/ansettelser'
    },
    {
      name: 'about',
      href: '/om-oss'
    },
    {
      name: 'contact',
      href: '/kontakt'
    }
  ];

  // Social media links for the footer
  const socialMediaLinks = [
    {
      icon: <FaFacebook size={20} aria-hidden='true' />,
      href: 'https://www.facebook.com/JobLoop.Norge',
      label: 'Facebook'
    },
    {
      icon: <FaInstagram size={20} aria-hidden='true' />,
      href: 'https://www.instagram.com/jobloop.norge/',
      label: 'Instagram'
    },
    {
      icon: <FaLinkedinIn size={20} aria-hidden='true' />,
      href: 'https://www.linkedin.com/company/jobloop/',
      label: 'LinkedIn'
    }
  ];

  // TODO: Fix slightly too much space between headings and content.
  return (
    <footer className='w-full text-kv-white bg-jobloop-primary-grey'>
      <div className='
        mx-auto max-w-[1536px] px-4 py-12 flex flex-col gap-8 md:justify-around
        lg:flex-row lg:justify-between md:px-8 lg:px-12 lg:mp-34
      '>
        <div className='flex flex-col items-start justify-center gap-6 lg:w-1/3'>
          <a
            href='https://jobloop.no/'
            target='_blank'
            rel='noopener noreferrer'
            className='w-48'
          >
            <Image
              alt={t('header.navigation.logo.alt')}
              src={'/logoJobloopHvit.svg'}
              width={350}
              height={250}
              className='
                motion-safe:hover:opacity-80 transition-opacity
                motion-safe:duration-300
              '
            />
          </a>
          <p className='text-jobloop-primary-green font-semibold'>
            {t('footer.branding.award')}
          </p>
          <p className='text-gray-300 text-left leading-relaxed'>
            {t('footer.branding.text')}
          </p>
          <div className='flex gap-4'>
            <Image
              alt={t('footer.badges.gaselle2024Alt')}
              src='/images/gaselle/gaselle-2024.png'
              width={90}
              height={90}
              className='rounded-lg'
            />
            <Image
              alt={t('footer.badges.gaselle2025Alt')}
              src='/images/gaselle/gaselle-2025.png'
              width={90}
              height={90}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='flex flex-row gap-8 lg:gap-12'>
          <section
            className='flex flex-col gap-6 w-2/3'
            aria-labelledby='footer-links-heading'
          >
            <h2
              id='footer-links-heading'
              className='text-[1.4rem]! font-bold text-jobloop-primary-green'
            >
              {t('footer.links.title')}
            </h2>
            <ul className='flex flex-col gap-3'>
              {pageList.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className='
                      text-gray-300 hover:text-jobloop-primary-green
                      transition-all motion-safe:duration-300 transform
                    '
                    aria-label={t(`footer.links.${page.name}.aria`)}
                  >
                    {t(`footer.links.${page.name}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className='flex flex-col gap-6 w-1/2'>
            <h2
              id='footer-contacts-heading'
              className='text-[1.4rem]! font-bold text-jobloop-primary-green'
            >
              {t('footer.contacts.title')}
            </h2>
            <ul
              className='space-y-4'
              aria-labelledby='footer-contacts-heading'
            >
              {contactInformation.map((person) => (
                <li
                  key={person.name}
                  className='border-l-2 border-jobloop-primary-green/30 pl-4'
                >
                  <h3 className='font-semibold text-white mb-1 text-base!'>
                    {person.name}
                  </h3>
                  <a
                    href={`mailto:${person.email}`}
                    className='
                      text-gray-300 hover:text-jobloop-primary-green
                      transition-colors motion-safe:duration-300 block
                    '
                    aria-label={t('footer.contacts.openEmail', { name: person.name })}
                  >
                    {person.email}
                  </a>
                  {person.phoneDisplay && (
                    <a
                      href={`tel:${person.phoneLink}`}
                      className='
                        text-gray-300 hover:text-jobloop-primary-green
                        transition-colors motion-safe:duration-300 block
                      '
                      aria-label={t('footer.contacts.openPhone', { name: person.name })}
                    >
                      {person.phoneDisplay}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ul
              className='flex gap-4'
              aria-label={t('footer.contacts.socialMediaList')}
            >
              {socialMediaLinks.map((link) => (
                <li
                  key={link.label}
                  className='flex gap-4 pt-4'
                >
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t('footer.contacts.openSocialMedia', { platform: link.label })}
                    className='
                      p-2 bg-gray-700 rounded-lg
                      hover:bg-jobloop-primary-green transition-all
                      motion-safe:duration-300 motion-safe:hover:scale-110
                    '
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className='
        border-t border-gray-700 py-6 max-w-[1536px] mx-auto px-4 flex
        flex-col justify-between items-center gap-4 md:px-8 lg:px-12 md:flex-row
      '>
        <p className='text-gray-400 text-sm'>
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        {/* TODO: Update and translate this once legal pages exist. */}
        <ul
          className='flex gap-6 text-sm'
          // aria-label='Legal links'
        >
          <li>
            {/* TODO: Have a Privacy Policy page, or remove this link! */}
            <Link
              href='/om-oss'
              className='
                text-gray-400 hover:text-jobloop-primary-green
                transition-colors motion-safe:duration-300
              '
            >
              {t('footer.links.privacy.label')}
            </Link>
          </li>
          <li>
            {/* TODO: Have a Terms of Service page, or remove this link! */}
            <Link
              href='/kontakt'
              className='
                text-gray-400 hover:text-jobloop-primary-green
                transition-colors motion-safe:duration-300
              '
            >
              {t('footer.links.tos.label')}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

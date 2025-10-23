import Link from 'next/link';
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
      email: 'christer@jobloop.no',
      phoneDisplay: '+47 92 88 28 04',
      phoneLink: '+4792882804',
    },
    {
      name: t('footer.contacts.clients'),
      email: 'inger-johanne@jobloop.no ',
      phoneDisplay: '+47 48 35 87 03',
      phoneLink: '+4748358703',
    },
  ];

  return (
    <footer className='w-full text-kv-white bg-jobloop-primary-grey'>
      <div className='mx-auto max-w-[1536px] px-4 md:px-8 lg:px-12'>
        <div className='flex flex-col lg:flex-row md:justify-around lg:justify-between gap-8 py-12 lg:mp-34'>
          <div className='flex flex-col items-start justify-center gap-6 lg:w-1/3'>
            <div className='w-48'>
              <a
                href='https://jobloop.no/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Lenke til Jobloops nettside'
              >
                <Image
                  alt='Jobloop logo'
                  src={'/logoJobloopHvit.svg'}
                  width={350}
                  height={250}
                  className='hover:opacity-80 transition-opacity duration-300'
                />
              </a>
            </div>
            <p className='text-gray-300 text-left leading-relaxed'>
              {t('footer.branding.text')}
            </p>
          </div>
          <div className='flex flex-row gap-8 lg:gap-12'>
            <div className='flex flex-col gap-6 w-2/3'>
              <h3 className='text-2xl font-bold text-jobloop-primary-green'>
                {t('footer.links.title')}
              </h3>
              <div className='flex flex-col gap-3'>
                <Link
                  className='text-gray-300 hover:text-jobloop-primary-green transition-all duration-300  transform'
                  href='/ansettelser'
                  aria-label={t('footer.links.hiring.aria')}
                >
                  {t('footer.links.hiring.label')}
                </Link>
                <Link
                  className='text-gray-300 hover:text-jobloop-primary-green transition-all duration-300  transform'
                  href='/om-oss'
                  aria-label={t('footer.links.about.aria')}
                >
                  {t('footer.links.about.label')}
                </Link>
                <Link
                  className='text-gray-300 hover:text-jobloop-primary-green transition-all duration-300  transform'
                  href='/kontakt'
                  aria-label={t('footer.links.contact.aria')}
                >
                  {t('footer.links.contact.label')}
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-6 w-1/2'>
              <h3 className='text-2xl font-bold text-jobloop-primary-green'>
                {t('footer.contacts.title')}
              </h3>
              <div className='space-y-4'>
                {contactInformation.map((person) => (
                  <div
                    key={person.name}
                    className='border-l-2 border-jobloop-primary-green/30 pl-4'
                  >
                    <h4 className='font-semibold text-white mb-1'>{person.name}</h4>
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
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <div className='flex gap-6 text-sm'>
              <Link
                href='/om-oss'
                className='text-gray-400 hover:text-jobloop-primary-green transition-colors duration-300'
              >
                {t('footer.links.privacy.label')}
              </Link>
              <Link
                href='/kontakt'
                className='text-gray-400 hover:text-jobloop-primary-green transition-colors duration-300'
              >
                {t('footer.links.tos.label')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

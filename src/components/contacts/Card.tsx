import { urlFor } from '@/lib/Sanity';
import { Contacts } from '@/types/sanity/sanity.types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

function formatTelHref(raw = '') {
  return raw.replace(/[^\d+]/g, '');
}

export default function ContactCard({ contact }: { contact: Contacts }) {
  const t = useTranslations('contact');
  // TODO: don't override, instead conditionally render later
  const {
    fname = '',
    lname = '',
    role = [],
    email = '',
    mobile = '',
    image,
    company = [],
  } = contact;

  const fullName = `${fname} ${lname}`.trim();
  const phone = mobile || '';

  // TODO: Test cards with screen reader.
  return (
    <li
      className='
        group rounded-xl border border-slate-200 bg-white shadow-xs
        hover:shadow-md transition-all duration-300 p-4 max-w-80 w-full h-full
        hover:scale-105 text-center flex
        focus-within:rounded-xl focus-within:shadow-sm
        focus-within:shadow-jobloop-primary-orange focus-within:scale-105
      '
    >
      <article
        className='
          w-full h-full flex flex-col items-center
        '
        aria-labelledby={`contact-${fullName.replace(/\s+/g, '-').toLowerCase()}`}
      >

        <h3
          id={`contact-${fullName.replace(/\s+/g, '-').toLowerCase()}`}
          className='
            mt-4 text-lg font-semibold leading-tight tracking-tight
            text-slate-900 group-hover:text-jobloop-primary-orange
            transition-colors duration-300
          '
        >
          {fullName}
        </h3>

        {!!role?.length && (
          <ul
            aria-label={t('roles')}
            className='
              mt-1 text-sm gap-x-2 text-slate-600 transition-colors flex
              flex-row flex-wrap justify-center duration-300
              group-hover:text-jobloop-primary-orange
            '
          >
            {role.map((r, index) => (
              <li
                key={r}
                className={`
                  relative
                  ${
                    role?.length > 1 && index !== role?.length - 1
                    ? 'mr-1 after:absolute after:content-["·"] after:text-sm after:text-slate-600 after:h-full after:-right-2 after:top-0 after:flex after:items-center group-hover:after:text-jobloop-primary-orange'
                    : ''
                  }
                `}
              >
                {r}
              </li>
            ))}
          </ul>
        )}

        {!!company?.length && (
          <ul
            aria-label={t('departments')}
            className='mt-1 text-xs text-slate-500 flex flex-row flex-nowrap gap-2'
          >
            {company.map((c, index) => (
              <li
                key={c}
                className={`
                  relative
                  ${
                    index > 0
                    ? 'ml-px before:absolute before:content-["·"] before:text-slate-500 before:text-xs before:h-full before:-left-1.5 before:flex before:justify-center before:items-center'
                    : ''
                  }
                `}
              >
                {c}
              </li>
            ))}
          </ul>
        )}

        <address
          className='mt-auto pt-4 w-full space-y-1 text-sm order-last not-italic'
        >
          {email && (
            <a
              href={`mailto:${email}`}
              className='block truncate px-1 hover:underline'
              title={`${t('card.mail.title')} ${fullName}`}
              aria-label={`${t('card.mail.label')} ${fullName}`}
            >
              {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${formatTelHref(phone)}`}
              className='block px-1 hover:underline'
              title={`${t('card.phone.title')} ${fullName}`}
              aria-label={`${t('card.phone.label')} ${fullName}`}
            >
              {phone}
            </a>
          )}
        </address>
        <div className='
          relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44
          xl:w-48 xl:h-48 overflow-hidden rounded-full border-2
          border-jobloop-primary-orange shadow-jobloop-primary-orange/15
          group-hover:border-4 shadow-2xl transition-all duration-300
          order-first
        '>
          <Image
            src={image ? urlFor(image).url() : '/contact_placeholder.jpg'}
            alt={fullName || t('card.fallbackImage.alt')}
            fill
            sizes='
              (max-width: 640px) 8rem, (max-width: 768px) 9rem,
              (max-width: 1024px) 10rem, (max-width: 1280px) 11rem, 12rem
            '
            className='
              object-cover object-top w-full h-full scale-100
              group-hover:scale-105 transition-all duration-500
            '
          />
        </div>
      </article>
    </li>
  );
}

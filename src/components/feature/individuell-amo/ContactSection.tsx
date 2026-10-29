import { LuMail, LuPhone } from 'react-icons/lu';

// TODO: Translate this!
// TODO: Fix color contrast for accessibility.
// TODO: Remove div if possible.
export default function ContactSection() {
  return (
    <section
      className='w-full mx-auto text-center'
      aria-labelledby='contact-section-heading'
    >
      <div className='
        flex flex-col items-center p-8 md:p-12 gap-4
        bg-jobloop-primary-green/50 rounded-2xl
      '>
        <h2
          id='contact-section-heading'
          className='text-3xl font-bold'
        >
          Har du spørsmål?
        </h2>
        <p className='text-xl opacity-90 max-w-2xl'>
          Ta kontakt med kursleder Andreas Takvam for et tilbud tilpasset dine
          behov og forutsetninger.
        </p>

        <address className='
          flex flex-col sm:flex-row gap-4 justify-center items-center mt-4
          not-italic
        '>
          <a
            href='mailto:andreas@jobloop.no'
            className='
              flex items-center gap-2 px-8 py-3 text-lg text-white
              rounded-full shadow-lg bg-jobloop-primary-green
              hover:bg-jobloop-primary-orange motion-safe:hover:scale-105
              motion-safe:duration-300 transition-all
            '
          >
            andreas@jobloop.no
            <LuMail
              className='text-xl order-first'
              aria-hidden='true'
            />
          </a>
          <a
            href='tel:+4741627916'
            className='
              flex items-center gap-2 px-8 py-3 text-lg text-white
              rounded-full shadow-lg bg-jobloop-primary-green
              hover:bg-jobloop-primary-orange motion-safe:hover:scale-105
              motion-safe:duration-300 transition-all
            '
          >
            416 27 916
            <LuPhone
              className='text-xl order-first'
              aria-hidden='true'
            />
          </a>
        </address>
      </div>
    </section>
  );
}

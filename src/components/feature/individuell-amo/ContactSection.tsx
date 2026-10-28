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
      <div className='bg-jobloop-primary-green/50 rounded-2xl p-8 md:p-12 flex flex-col items-center gap-4'>
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
            className='flex items-center gap-2 bg-jobloop-primary-green text-white px-8 py-3 rounded-full text-lg hover:bg-jobloop-primary-orange transition-all duration-300 hover:scale-105 shadow-lg'
          >
            <LuMail
              className='text-xl'
              aria-hidden='true'
            />
            andreas@jobloop.no
          </a>
          <a
            href='tel:+4741627916'
            className='flex items-center gap-2 bg-jobloop-primary-green text-white px-8 py-3 rounded-full text-lg hover:bg-jobloop-primary-orange transition-all duration-300 hover:scale-105 shadow-lg'
          >
            <LuPhone
              className='text-xl'
              aria-hidden='true'
            />
            416 27 916
          </a>
        </address>
      </div>
    </section>
  );
}

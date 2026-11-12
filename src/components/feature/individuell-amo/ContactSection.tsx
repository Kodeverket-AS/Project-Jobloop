import { LuMail, LuPhone } from 'react-icons/lu';

export default function ContactSection() {
  return (
    <section className='w-full mx-auto text-center'>
      <div className='bg-jobloop-primary-green/50 rounded-2xl p-8 md:p-12 flex flex-col items-center gap-4'>
        <h2 className='text-3xl font-bold'>Har du spørsmål?</h2>
        <p className='text-xl opacity-90 max-w-2xl'>
          Ta kontakt med kursleder Andreas Takvam for et tilbud tilpasset dine behov og
          forutsetninger.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-4'>
          <a
            href='mailto:andreas@jobloop.no'
            className='flex items-center gap-2 bg-jobloop-primary-green text-white px-8 py-3 rounded-full text-lg hover:bg-jobloop-primary-orange transition-all duration-300 hover:scale-105 shadow-lg'
          >
            <LuMail className='text-xl' />
            andreas@jobloop.no
          </a>
          <a
            href='tel:+4741627916'
            className='flex items-center gap-2 bg-jobloop-primary-green text-white px-8 py-3 rounded-full text-lg hover:bg-jobloop-primary-orange transition-all duration-300 hover:scale-105 shadow-lg'
          >
            <LuPhone className='text-xl' />
            416 27 916
          </a>
        </div>
      </div>
    </section>
  );
}

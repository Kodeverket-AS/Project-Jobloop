'use client';

import { PortableText } from '@portabletext/react';

export default function CourseUsefullness({ content, course }) {
  return (
    <div className='flex flex-col px-5 py-20 md:flex-row md:px-12 lg:px-24 2xl:max-w-[1600px]'>
      <div className='w-full md:w-1/2'>
        <p>Boxes go here</p>
      </div>
      <div className='flex flex-col justify-center w-full gap-3 py-10 md:items-center md:w-1/2 md:py-5'>
        <h2 className='text-xl md:text-2xl lg:text-3xl'>
          {'Hva kan du bruke ' + course + ' til?'}
        </h2>
        <PortableText value={content.use} />
      </div>
    </div>
  );
}

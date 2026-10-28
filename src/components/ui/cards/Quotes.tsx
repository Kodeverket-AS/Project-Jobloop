interface QuoteProps {
  name: string;
  company: string;
  text: string;
}

export function QuoteCard({ name, company, text }: QuoteProps) {
  return (
    <li className='flex flex-col w-full gap-1 md:w-1/3 '>
      <h4 className='text-[1.25rem]! leading-[calc(1.75/1.25)] text-kv-black'>
        {name}
      </h4>
      <p className='text-xs leading-tight text-kv-black'>
        {company}
      </p>
      <q className='italic'>
        {text}
      </q>
    </li>
  );
}

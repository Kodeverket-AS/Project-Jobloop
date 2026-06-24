interface QuoteProps {
  name: string;
  company: string;
  text: string;
}

export function QuoteCard({ name, company, text }: QuoteProps) {
  // TODO: Consider using h4, IF the quotes are about the employment-oriented programs
  return (
    <li className='flex flex-col w-full gap-1 md:w-1/3 '>
      <h3 className='!text-[1.25rem] leading-[calc(1.75/1.25)] text-kv-black'>{name}</h3>
      <p className='text-xs leading-[calc(1.25/1)] text-kv-black'>{company}</p>
      <q className='italic'>{text}</q>
    </li>
  );
}

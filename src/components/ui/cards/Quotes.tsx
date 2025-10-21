interface QuoteProps {
  name: string;
  company: string;
  text: string;
}

export function QuoteCard({ name, company, text }: QuoteProps) {
  return (
    <div className='flex flex-col w-full gap-1 md:w-1/3 '>
      <h4 className='text-xl text-kv-black'>{name}</h4>
      <p className='text-xs text-kv-black'>{company}</p>
      <q className='italic'>{text}</q>
    </div>
  );
}

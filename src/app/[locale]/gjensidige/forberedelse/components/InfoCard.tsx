interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  items?: string[];
  additionalText?: string;
  className?: string;
}

export function InfoCard({ icon, title, description, items, additionalText, className = '' }: InfoCardProps) {
  return (
    <section
      className={`
        bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all
        motion-safe:duration-300 motion-safe:hover:-translate-y-1 border-l-4
        border-[#4AB5A3] ${className}
      `}
      aria-labelledby={`info-card-title-${title.replace(/\s+/g, '-')}`}
    >
      <h3
        id={`info-card-title-${title.replace(/\s+/g, '-')}`}
        className='
          text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3
        '
      >
        {title}
        <span
          className='
            text-3xl bg-[#e0f2f1] w-12 h-12 rounded-full flex items-center
            justify-center order-first
          '
          role='img'
          aria-hidden='true'
        >
          {icon}
        </span>
      </h3>
      <p className='text-[#555] mb-4 leading-relaxed'>{description}</p>
      {items && (
        <ul className='list-disc pl-6 space-y-2.5 text-[#555] text-sm'>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {additionalText && (
        <p className='text-[#555] text-sm leading-relaxed mt-4'>
          {additionalText}
        </p>
      )}
    </section>
  );
}

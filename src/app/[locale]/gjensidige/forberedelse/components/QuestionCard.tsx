interface QuestionCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  borderColor: string;
  iconBg: string;
  tip?: string;
  className?: string;
}

export function QuestionCard({ icon, title, description, items, borderColor, iconBg, tip, className = '' }: QuestionCardProps) {
  return (
    <section
      className={`
        bg-white border border-gray-200 rounded-lg p-6 shadow-md
        hover:shadow-xl transition-all motion-safe:duration-300
        motion-safe:hover:-translate-y-1 border-l-4 ${borderColor} ${className}
      `}
      // TODO: Add aria-labelledby here, or let AnimateOnScroll be able to change div to section if specified - and then add aria-labelledby there.
    >
      <h3 className='
        text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3
      '>
        {title}
        <span
          className={`
            text-3xl ${iconBg} w-12 h-12 rounded-full flex items-center
            justify-center order-first
          `}
          aria-hidden='true'
        >
          {icon}
        </span>
      </h3>
      <p className='mb-3 text-[#555]'>{description}</p>
      <ul className='list-disc pl-6 space-y-2.5 text-[#555]'>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {tip && (
        <div className='
          bg-linear-to-r from-[#EBF2F6] to-[#e0f2f1] p-4 rounded-lg
          border-l-4 border-[#2C8C7D] shadow-sm mt-4
        '>
          <p className='text-sm text-[#555]'>
            <strong className='text-[#002B49]'>Tips:</strong> {tip}
          </p>
        </div>
      )}
    </section>
  );
}

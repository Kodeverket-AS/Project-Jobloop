interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  items?: string[];
  additionalText?: string;
}

export function InfoCard({ icon, title, description, items, additionalText }: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#4AB5A3]">
      <h3 className="text-xl font-bold text-[#002B49] mb-4 flex items-center gap-3">
        <span className="text-3xl bg-[#e0f2f1] w-12 h-12 rounded-full flex items-center justify-center">{icon}</span>
        {title}
      </h3>
      <p className="text-[#555] mb-4 leading-relaxed">{description}</p>
      {items && (
        <ul className="list-disc pl-6 space-y-2.5 text-[#555] text-sm">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {additionalText && (
        <p className="text-[#555] text-sm leading-relaxed mt-4">{additionalText}</p>
      )}
    </div>
  );
}

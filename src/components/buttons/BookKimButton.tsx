'use client';

interface BookKimButtonProps {
  className?: string;
}

export function BookKimButton({ className = '' }: BookKimButtonProps) {
  return (
    <a
      href="https://calendar.app.google/RRhkgNFmGyTTbYmd6"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-[#002B49] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#004d7a] hover:scale-105 hover:shadow-lg transition-all duration-300 ${className}`}
      aria-label="Book en samtale med Kim"
    >
      Book en samtale med Kim
    </a>
  );
}

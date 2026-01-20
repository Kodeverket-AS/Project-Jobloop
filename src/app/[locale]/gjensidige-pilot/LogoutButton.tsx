'use client';

import { useRouter } from '@/i18n/navigation';
import { LuLogOut } from 'react-icons/lu';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'pilot-access=; path=/; max-age=0';
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
      aria-label="Logg ut"
    >
      <LuLogOut className="w-4 h-4" />
      <span>Logg ut</span>
    </button>
  );
}

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
      className="pilot-logout-btn"
      aria-label="Logg ut"
    >
      <LuLogOut className="pilot-logout-btn__icon" />
      <span>Logg ut</span>
    </button>
  );
}

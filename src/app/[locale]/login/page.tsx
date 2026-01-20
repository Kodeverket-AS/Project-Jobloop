
'use client';
import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { LuEye, LuEyeOff } from 'react-icons/lu';

export default function Login() {
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  const submit = () => {
    setError('');
    const expectedPassword = process.env.NEXT_PUBLIC_PILOT_PASSWORD;
    if (pass === expectedPassword && expectedPassword) {
      document.cookie = `pilot-access=${expectedPassword}; path=/; max-age=86400`;
      router.push('/gjensidige-pilot');
    } else {
      setError('Feil passord');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-jobloop-primary-green/20 p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-kv-black mb-2">
              Tilgang
            </h1>
            <p className="text-jobloop-primary-grey">
              Skriv inn passord for å fortsette
            </p>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              submit();
            }}
            className="space-y-6"
          >
            <div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={pass}
                  onChange={e => {
                    setPass(e.target.value);
                    setError('');
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      submit();
                    }
                  }}
                  placeholder="Passord"
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-300 hover:border-jobloop-primary-green/50"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-jobloop-primary-green transition-colors duration-300"
                  aria-label={showPassword ? 'Skjul passord' : 'Vis passord'}
                >
                  {showPassword ? (
                    <LuEyeOff className="w-5 h-5" />
                  ) : (
                    <LuEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="relative group overflow-hidden flex items-center justify-center w-full gap-1 px-8 py-3 text-base font-medium text-center transition-all rounded-full text-kv-black bg-jobloop-primary-green scale-100 lg:hover:scale-105 shadow-lg shadow-kv-black/30 hover:shadow-jobloop-primary-orange/20"
            >
              <div
                className="absolute inset-0 bg-jobloop-primary-orange w-0 group-hover:w-[120%] transition-all duration-500 md:duration-600 lg:duration-700 ease-in-out -z-10"
                style={{ transform: 'skewX(-45deg)', left: '-10%' }}
              ></div>
              <span className="relative z-10">Logg inn</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

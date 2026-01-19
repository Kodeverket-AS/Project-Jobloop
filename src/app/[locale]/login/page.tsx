

'use client';
import { useState } from 'react';

export default function Login() {
  const [pass, setPass] = useState('');

  const submit = () => {
    if (pass === process.env.NEXT_PUBLIC_PILOT_PASSWORD) {
      document.cookie = 'pilot-access=gjensidige; path=/';
      window.location.href = '/locale/gjensidige-pilot';
    }
  };

  return (
    <div>
      <h1>Tilgang</h1>
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="Passord"
      />
      <button onClick={submit}>Logg inn</button>
    </div>
  );
}
export const metadata = {
  robots: 'noindex, nofollow'
};
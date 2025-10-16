'use client';

import { useEffect, useCallback, useRef, useState, useMemo } from 'react';
import ContactCard from './Card';

function Section({ title, people = [] }) {
  if (!people.length) return null;

  const maxWidth =
    people.length <= 2
      ? 'max-w-2xl'
      : people.length <= 3
        ? 'max-w-5xl'
        : 'max-w-7xl';

  return (
    <section className={`space-y-8 mx-auto ${maxWidth}`}>
      <div className='text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-kv-black pb-2 border-b-2 md:border-b-4 border-jobloop-primary-green w-fit mx-auto'>
          {title}
        </h2>
      </div>

      <div
        className={[
          'grid gap-8 justify-center justify-items-center',
          'grid-cols-[repeat(auto-fit,minmax(220px,1fr))]',
        ].join(' ')}
      >
        {people.map((contact, i) => (
          <ContactCard key={`${contact._id ?? i}`} contact={contact} />
        ))}
      </div>
    </section>
  );
}

function groupLabel(group) {
  switch (Number(group)) {
    case 1:
      return 'Ledelse og administrasjon';
    case 2:
      return 'Teamledere og tiltaksledere';
    case 3:
      return 'Faglige veiledere og spillpedagoger';
    case 4:
      return 'Interns';
    default:
      return 'Noobs';
  }
}

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item?.[key] ?? 5;
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}

export default function ContactContainer({ data = [] }) {
  const [filtered, setFiltered] = useState(data);
  const [isFiltered, setIsFiltered] = useState(false);
  const nameInput = useRef(null);
  const departmentSelect = useRef(null);

  const departmentList = useMemo(() => {
    const set = new Set();
    data.forEach((item) =>
      (item?.company ?? []).forEach((c) => c?.trim() && set.add(c.trim()))
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'no'));
  }, [data]);

  const doFilter = useCallback(() => {
    const deptVal = (departmentSelect.current?.value ?? '').toLowerCase();
    const nameVal = (nameInput.current?.value ?? '').toLowerCase();

    const result = data.filter((p) => {
      const matchesDept = deptVal
        ? (p.company ?? []).some((c) => (c ?? '').toLowerCase() === deptVal)
        : true;
      const fullName = `${p.fname ?? ''} ${p.lname ?? ''}`.trim().toLowerCase();
      const matchesName = nameVal ? fullName.includes(nameVal) : true;
      return matchesDept && matchesName;
    });

    setIsFiltered(Boolean(deptVal || nameVal));
    setFiltered(result);
  }, [data]);

  const onEsc = useCallback(
    (ev) => {
      if (ev.key === 'Escape') {
        if (nameInput.current) nameInput.current.value = '';
        if (departmentSelect.current) departmentSelect.current.value = '';
        setIsFiltered(false);
        setFiltered(data);
      }
    },
    [data]
  );

  useEffect(() => {
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onEsc]);

  return (
    <div className='space-y-12 bg-linear-to-br from-jobloop-primary-green/5 via-white to-jobloop-primary-orange/5 p-8 rounded-2xl border border-jobloop-primary-green/10'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-kv-black mb-4'>
          Våre ansatte
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Finn og kontakt de riktige personene i vårt team
        </p>
      </div>

      <div className='bg-linear-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-jobloop-primary-green/20'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
          <div className='relative'>
            <input
              ref={nameInput}
              onChange={doFilter}
              type='text'
              placeholder='Søk etter ansatt …'
              className='w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base focus:outline-hidden focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-300 hover:border-jobloop-primary-green/50'
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>

          <div className='relative'>
            <select
              ref={departmentSelect}
              onChange={doFilter}
              defaultValue=''
              className='w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base focus:outline-hidden focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-300 hover:border-jobloop-primary-green/50 appearance-none cursor-pointer'
            >
              <option value=''>Alle avdelinger</option>
              {departmentList.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>

          <button
            type='button'
            onClick={() => {
              if (nameInput.current) nameInput.current.value = '';
              if (departmentSelect.current) departmentSelect.current.value = '';
              setIsFiltered(false);
              setFiltered(data);
            }}
            className='w-full rounded-xl border-2 border-jobloop-primary-orange bg-linear-to-r from-jobloop-primary-orange to-jobloop-primary-orange/80 px-4 py-3 text-base text-white hover:from-jobloop-primary-green/90 hover:to-jobloop-primary-green active:scale-95 transition-all duration-300 font-medium shadow-md hover:shadow-lg'
          >
            Tilbakestill søk
          </button>
        </div>

        {isFiltered && (
          <div className='text-center'>
            <span className='inline-block bg-jobloop-primary-green/10 text-jobloop-primary-green px-3 py-1 rounded-full text-sm font-medium'>
              Viser {filtered.length} av {data.length} ansatte
            </span>
          </div>
        )}
      </div>

      <div className='space-y-16'>
        {(() => {
          const grouped = groupBy(filtered, 'group');
          return Object.keys(grouped)
            .map(Number)
            .sort((a, b) => a - b)
            .map((g) => (
              <Section key={g} title={groupLabel(g)} people={grouped[g]} />
            ));
        })()}

        {!filtered?.length && (
          <div className='text-center py-12'>
            <p className='text-lg text-slate-600 mb-4'>
              Beklager, ditt søk ga ingen resultater.
            </p>
            <button
              onClick={() => {
                if (nameInput.current) nameInput.current.value = '';
                if (departmentSelect.current)
                  departmentSelect.current.value = '';
                setIsFiltered(false);
                setFiltered(data);
              }}
              className='text-jobloop-primary-green hover:underline font-medium'
            >
              Prøv et annet søk
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

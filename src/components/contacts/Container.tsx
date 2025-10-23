'use client';

import { useEffect, useCallback, useRef, useState, useMemo } from 'react';
import ContactCard from './Card';
import { Contacts } from '@/types/sanity/sanity.types';

function Section({
  groupID,
  people = [],
}: {
  groupID: number;
  people: Contacts[];
}) {

  // Skip category if its empty
  if (!people.length) return null;

  // Convert group id to readable string
  let groupName = 'Ukategorisert';
  switch (groupID) {
    case 1:
      groupName = 'Ledelse og administrasjon';
      break;
    case 2:
      groupName = 'Teamledere og tiltaksledere';
      break;
    case 3:
      groupName = 'Faglige veiledere og spillpedagoger';
      break;
    case 4:
      groupName = 'Interns';
      break;
    default:
      groupName = 'Ukategorisert';
      break;
  }

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
          {groupName}
        </h2>
      </div>

      <div className='grid gap-8 justify-center justify-items-center grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
        {people.map((contact) => (
          <ContactCard key={contact._id} contact={contact} />
        ))}
      </div>
    </section>
  );
}

export default function ContactContainer({ data = [] }: { data: Contacts[] }) {
  const [filtered, setFiltered] = useState<Contacts[]>(data);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const nameInput = useRef<HTMLInputElement>(null);
  const departmentSelect = useRef<HTMLSelectElement>(null);

  // Group contacts by their group number in an object, then iterate over key
  const groupByRole = filtered.reduce(
    (acc, current) => {
      const groupKey = typeof current.group === 'number' ? current.group : 5;
      acc[groupKey] ??= [];
      acc[groupKey].push(current);
      return acc;
    },
    {} as Record<number, Contacts[]>
  );

  // Create a unique set of all departments for select options
  const departmentList = useMemo(() => {
    const set = new Set<string>();
    data.forEach((item) =>
      (item?.company ?? []).forEach((c) => c?.trim() && set.add(c.trim()))
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'no'));
  }, [data]);

  // Apply filter
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

  // Clear filter on escape keypress
  const onEsc = useCallback(
    (ev: KeyboardEvent) => {
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
        {Object.keys(groupByRole)
          .map(Number)
          .sort((a, b) => a - b)
          .map((groupID) => (
            <Section
              key={groupID}
              groupID={groupID}
              people={groupByRole[groupID]}
            />
          ))}
        {!filtered.length && (
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

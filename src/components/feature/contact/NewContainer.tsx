'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { type Contacts } from '@/types/sanity/sanity.types';
import { ContactGroup } from '@/components/contacts/ContactGroup';

type Props = {
  allData: Contacts[];
  initialFiltered: Contacts[];
  initialName: string;
  initialDepartment: string;
};

export default function ContactContainer({
  allData,
  initialFiltered,
  initialName,
  initialDepartment,
}: Props) {
  const t = useTranslations('contact');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const nameInput = useRef<HTMLInputElement>(null);
  const departmentSelect = useRef<HTMLSelectElement>(null);

  // Sync input values with URL on mount / when URL changes externally
  useEffect(() => {
    if (nameInput.current) {
      nameInput.current.value = initialName;
    }
    if (departmentSelect.current) {
      departmentSelect.current.value = initialDepartment;
    }
  }, [initialName, initialDepartment]);

  // Helper to build query string
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim()) {
        params.set(name, value.trim());
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  // Update URL without full navigation
  const updateUrl = useCallback(
    (nameVal: string, deptVal: string) => {
      startTransition(() => {
        const qs = createQueryString('name', nameVal);
        const finalQs = deptVal
          ? qs
            ? `${qs}&${createQueryString('department', deptVal)}`
            : createQueryString('department', deptVal)
          : qs;

        router.replace(`${pathname}${finalQs ? '?' + finalQs : ''}`, { scroll: false });
      });
    },
    [pathname, router, createQueryString]
  );

  // Handle input changes → update URL
  const handleChange = useCallback(() => {
    const nameVal = (nameInput.current?.value ?? '').trim();
    const deptVal = (departmentSelect.current?.value ?? '').trim();
    updateUrl(nameVal, deptVal);
  }, [updateUrl]);

  // Use server-filtered list (we could add client-side optimistic filtering later if desired)
  const filtered = initialFiltered;

  // Group by role/group number
  const groupByRole = filtered.reduce(
    (acc, current) => {
      const groupKey = typeof current.group === 'number' ? current.group : 5;
      acc[groupKey] ??= [];
      acc[groupKey].push(current);
      return acc;
    },
    {} as Record<number, Contacts[]>
  );

  // Unique sorted departments
  const departmentList = useMemo(() => {
    const set = new Set<string>();
    allData.forEach((item) => (item?.company ?? []).forEach((c) => c?.trim() && set.add(c.trim())));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'no'));
  }, [allData]);

  const clearFilters = () => {
    if (nameInput.current) nameInput.current.value = '';
    if (departmentSelect.current) departmentSelect.current.value = '';
    updateUrl('', '');
  };

  return (
    <div
      className={`space-y-12 bg-linear-to-br from-jobloop-primary-green/5 via-white to-jobloop-primary-orange/5 p-8 rounded-2xl border border-jobloop-primary-green/10 transition-opacity ${
        isPending ? 'opacity-70' : 'opacity-100'
      }`}
    >
      <div className='text-center mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-kv-black mb-4'>{t('title')}</h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{t('text')}</p>
      </div>

      <div className='bg-linear-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-jobloop-primary-green/20'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
          <div className='relative'>
            <input
              ref={nameInput}
              onChange={handleChange}
              type='text'
              placeholder={t('search.input.placeholder')}
              className='w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-300 hover:border-jobloop-primary-green/50'
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
              onChange={handleChange}
              className='w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-300 hover:border-jobloop-primary-green/50 appearance-none cursor-pointer'
            >
              <option value=''>{t('search.departments.all')}</option>
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
            onClick={clearFilters}
            className='w-full rounded-xl border-2 border-jobloop-primary-orange bg-linear-to-br from-jobloop-primary-orange to-jobloop-primary-orange/80 px-4 py-3 text-base text-white hover:from-jobloop-primary-green/90 hover:to-jobloop-primary-green active:scale-95 transition-all duration-300 font-medium shadow-md hover:shadow-lg'
          >
            {t('search.reset.label')}
          </button>
        </div>

        {(initialName || initialDepartment) && (
          <div className='text-center'>
            <span className='inline-block bg-jobloop-primary-green/10 text-jobloop-primary-green px-3 py-1 rounded-full text-sm font-medium'>
              {t('search.filter', { filtered: filtered.length, total: allData.length })}
            </span>
          </div>
        )}
      </div>

      <div className='space-y-16'>
        {Object.keys(groupByRole)
          .map(Number)
          .sort((a, b) => a - b)
          .map((groupID) => (
            <ContactGroup key={groupID} groupID={groupID} people={groupByRole[groupID]} />
          ))}

        {!filtered.length && (
          <div className='text-center py-12'>
            <p className='text-lg text-slate-600 mb-4'>{t('search.empty.text')}</p>
            <button
              onClick={clearFilters}
              className='text-jobloop-primary-green hover:underline font-medium'
            >
              {t('search.empty.label')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

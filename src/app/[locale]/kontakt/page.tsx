import { Suspense } from 'react';
import ContactContainer from '@/components/feature/contact/NewContainer';
import { getContacts } from '@/lib/sanity/fetch';

export default async function KontaktPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  
  const resolvedSearchParams = await searchParams;

  // extract query parameters
  const nameFilter =
    typeof resolvedSearchParams.name === 'string' ? resolvedSearchParams.name.trim() : '';
  const deptFilter =
    typeof resolvedSearchParams.department === 'string'
      ? resolvedSearchParams.department.trim()
      : '';

  // Fetch all contacts 
  const allContacts = await getContacts();

  // Server-side filtering 
  const filtered = allContacts.filter((p) => {
    const matchesDept = deptFilter
      ? (p.company ?? []).some((c) => (c ?? '').toLowerCase() === deptFilter.toLowerCase())
      : true;

    const fullName = `${p.fname ?? ''} ${p.lname ?? ''}`.trim().toLowerCase();
    const matchesName = nameFilter ? fullName.includes(nameFilter.toLowerCase()) : true;

    return matchesDept && matchesName;
  });

  return (
    <main className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 py-10">
      <Suspense fallback={<div className="text-center py-12">Laster kontakter...</div>}>
        <ContactContainer
          allData={allContacts}
          initialFiltered={filtered}
          initialName={nameFilter}
          initialDepartment={deptFilter}
        />
      </Suspense>
    </main>
  );
}

//! Orginal 
// import { getContacts } from '@/lib/sanity/fetch';
// import ContactContainer from '@/components/feature/contact/Container';

// export default async function Kontakt() {
//   const data = await getContacts();

//   return (
//     <main className='mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 py-10'>
//       <ContactContainer data={data} />
//     </main>
//   );
// }

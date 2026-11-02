import { getContacts } from '@/lib/sanity/fetch';
import ContactContainer from '@/components/feature/contact/Container';

export default async function Kontakt({
  searchParams,
}: {
  searchParams: Promise<{ department?: string | string[] }>;
}) {
  const data = await getContacts();
  const { department } = await searchParams;
  const initialDepartment = Array.isArray(department) ? department[0] : department;

  return (
    <main id='main' className='mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 py-10'>
      <ContactContainer
        data={data}
        initialDepartment={initialDepartment}
      />
    </main>
  );
}

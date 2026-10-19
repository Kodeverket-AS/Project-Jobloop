import { getContacts } from '@/lib/sanity/fetch';
import ContactContainer from '@/components/feature/contact/Container';

// TODO: Consider if someone should be "highlighted" as someone to contact first if the user is uncertain who to reach out to. If so, implement a mechanism to mark and display that person prominently.
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

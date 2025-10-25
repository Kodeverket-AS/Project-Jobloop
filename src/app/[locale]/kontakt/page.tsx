import { getContacts } from '@/lib/sanity/fetch';
import ContactContainer from '@/components/feature/contact/Container';

export default async function Kontakt() {
  const data = await getContacts();

  return (
    <main className='mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 py-10'>
      <ContactContainer data={data} />
    </main>
  );
}

import type { Contacts } from '@/types/sanity/sanity.types';
import { sanityFetch } from '@/lib/fetchData';
import ContactContainer from '@/components/feature/contact/Container';

export const revalidate = 60;

export default async function Kontakt() {
  const QUERY = `*[_type == "contacts"]{..., "image": image.asset->url} | order(priority asc, lname asc)`;
  const data = await sanityFetch<Contacts[]>({ query: QUERY });

  return (
    <main className='mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 py-10'>
      <ContactContainer data={data} />
    </main>
  );
}

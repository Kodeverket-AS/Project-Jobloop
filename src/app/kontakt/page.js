import { sanityFetch } from "../../../lib/fetchData";
import ContactContainer from "../../../components/contacts/Container";

export default async function Kontakt() {
  const QUERY = `*[_type == "contacts"]{"image": image.asset->url, fname, lname, role, company, email, mobile} | order(lname asc)`
  const data = await sanityFetch({query: QUERY});

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <ContactContainer data={data} />
    </main>
  );
}

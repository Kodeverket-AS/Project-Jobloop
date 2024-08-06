import { sanityFetch } from "../../../lib/fetchData";
import ContactContainer from "../../../components/contacts/Container";

export default async function Kontakt() {
  const QUERY = `*[_type == "contacts"]{"image": image.asset->url, fname, lname, role, company, email, mobile}`
  const data = await sanityFetch({query: QUERY});

  return (
    <main>
      <ContactContainer data={data} />
    </main>
  );
}

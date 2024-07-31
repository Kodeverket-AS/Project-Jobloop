import { sanityFetch } from "../../../lib/fetchData";
import { SanityDocument } from "next-sanity";
import ContactCard from "../../../components/contacts/Card";

export interface ContactDetails extends SanityDocument {
  image: string,
  fname: string,
  lname: string,
  role: string,
  company: string,
  email: string,
  mobile: string,
}

export default async function Kontakt() {
  const QUERY = `*[_type == "contacts"]{"image": image.asset->url, fname, lname, role, company, email, mobile}`
  const data = await sanityFetch<ContactDetails[]>({query: QUERY});

  return (
    <main className="flex flex-col items-center justify-between p-0">
      {data.map(contact => (
        <ContactCard key={contact._id} contact={contact}/>
      ))}
    </main>
  );
}

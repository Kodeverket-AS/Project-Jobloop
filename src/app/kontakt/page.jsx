import { sanityFetch } from "../../../lib/fetchData";
import ContactCard from "../../../components/contacts/Card";

export default async function Kontakt() {
  const QUERY = `*[_type == "contacts"]{"image": image.asset->url, fname, lname, role, company, email, mobile}`
  const data = await sanityFetch({query: QUERY});

  return (
    <main className="flex flex-col items-center justify-between py-24">
      <div className="hidden bg-green-700">
        <span className="flex flex-col">
          <label htmlFor="">Søk etter ansatt</label>
          <input type="text" />
        </span>
        <span className="flex flex-col">
          <label htmlFor="">Avdeling</label>
          <select>
            <option value="">Bergen</option>
            <option value="">Stavanger</option>
          </select>
        </span>
      </div>
      <div className="flex flex-col gap-12">
        {data.map(contact => (
          <ContactCard key={contact._id} contact={contact}/>
        ))}
      </div>
    </main>
  );
}

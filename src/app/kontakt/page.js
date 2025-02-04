import { sanityFetch } from "../../../lib/fetchData";
import ContactContainer from "../../../components/contacts/Container";

export default async function Kontakt() {
    const QUERY = `*[_type == "contacts"]{..., "image": image.asset->url}| order(lname asc) | order(priority asc)`;
    const data = await sanityFetch({ query: QUERY });

    return (
        <main className='flex flex-col items-center justify-between'>
            <ContactContainer data={data} />
        </main>
    );
}

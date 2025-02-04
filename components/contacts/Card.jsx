import Image from "next/image";
import { SlCallOut } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

export default function ContactCard({ contact }) {
    const { image, fname, lname, role, company, location, email, mobile } =
        contact;

    const arrayLocaleNo = (arr) => {
        if (!Array.isArray(arr)) return;

        if (arr.length > 1)
            return arr.slice(0, -1).join(", ") + " og " + arr.slice(-1);

        return arr;
    };

    return (
        <div className='flex gap-24 max-lg:w-full lg:flex-col lg:gap-12'>
            <Image
                className='object-cover w-1/2 object-top max-md:w-48 aspect-[2/3] max-[500px]:hidden'
                src={image ? image : "/contact_placeholder.jpg"}
                style={{ filter: "grayscale(1)" }}
                width={300}
                height={500}
                alt={`A picture of ${fname}`}
            />
            <div className='flex flex-col justify-center gap-2 w-fit'>
                <h3>
                    {fname} {lname}
                </h3>
                <p>{arrayLocaleNo(role)}</p>
                {company.length > 1 ? (
                    <>
                        <p>{arrayLocaleNo(company)}</p>
                        {location && <p>{location}</p>}
                    </>
                ) : (
                    <p>
                        {company}
                        {location && `, ${location}`}
                    </p>
                )}
                <a
                    className='flex items-center gap-2 text-jobloop-secondary-green hover:text-jobloop-primary-grey hover:underline'
                    href={`mailto:${email}`}
                >
                    <TfiEmail />
                    {email}
                </a>
                <a
                    className='flex items-center gap-2 text-jobloop-secondary-green hover:text-jobloop-primary-grey hover:underline'
                    href={`tel:+47${mobile}`}
                >
                    <SlCallOut />
                    +47 {mobile}
                </a>
            </div>
        </div>
    );
}

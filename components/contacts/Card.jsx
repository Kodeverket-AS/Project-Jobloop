import Image from "next/image";
import { SlCallOut } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

export default function ContactCard({ contact }) {
  const { image, fname, lname, role, company, email, mobile } = contact

  return (
    <div className="flex gap-24 max-md:w-full">
      <Image className="object-cover object-top max-md:w-48 aspect-[2/3] max-[500px]:hidden" src={image ? image : "/contact_placeholder.jpg"} width={300} height={500} alt={`A sexy picture of ${fname}`}/>
      <div className="flex flex-col justify-center gap-2">
        <h3>{fname} {lname}</h3>
        <p>{role}, {company}</p>
        <a className="flex gap-2 items-center text-jobloop-primary-green hover:text-jobloop-secondary-green" href={`mailto:${email}`}><TfiEmail />{email}</a>
        <a className="flex gap-2 items-center text-jobloop-primary-green hover:text-jobloop-secondary-green" href={`tel:+47${mobile}`} ><SlCallOut  />+47 {mobile}</a>
      </div>
    </div>
  );
}
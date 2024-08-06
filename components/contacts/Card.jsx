import Image from "next/image";

export default function ContactCard({ contact }) {
  const { image, fname, lname, role, company, email, mobile } = contact
  return (
    <div className="flex gap-24 h-96">
      <Image className="object-cover object-top" src={image} width={300} height={500} sizes="xl:100vw xxl:100vw xxxl:100vw" alt={`A sexy picture of ${fname}`}/>
      <div className="flex flex-col justify-center">
        <h3>{fname} {lname}</h3>
        <p>{role}, {company}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:+47${mobile}`} >+47 {mobile}</a>
      </div>
    </div>
  );
}

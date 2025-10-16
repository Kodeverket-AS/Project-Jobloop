import Image from "next/image";

function formatTelHref(raw = "") {
    return raw.replace(/[^\d+]/g, "");
}

export default function ContactCard({ contact }) {
    const {
        fname = "",
        lname = "",
        role = [],
        email = "",
        mobile = "",
        image,
        company = [],
    } = contact ?? {};

    const fullName = `${fname} ${lname}`.trim();
    const phone = mobile || "";

    return (
        <article className='group rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 p-4 max-w-80 w-full flex flex-col hover:scale-105'>
            <div className='flex flex-col items-center text-center grow'>
                <div className='relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 overflow-hidden rounded-full border-2 border-jobloop-primary-orange shadow-jobloop-primary-orange/15 group-hover:border-4 shadow-2xl transition-all duration-300'>
                    <Image
                        src={image || "/contact_placeholder.jpg"}
                        alt={fullName || "Ansattbilde"}
                        fill
                        sizes='(max-width: 640px) 8rem, (max-width: 768px) 9rem, (max-width: 1024px) 10rem, (max-width: 1280px) 11rem, 12rem'
                        className='object-cover object-top w-full h-full scale-100 group-hover:scale-105 transition-all duration-500'
                    />
                </div>

                <h3 className='mt-4 text-lg font-semibold leading-tight tracking-tight text-slate-900 group-hover:text-jobloop-primary-orange transition-colors duration-300'>
                    {fullName}
                </h3>

                {!!role?.length && (
                    <p className='mt-1 text-sm text-slate-600 group-hover:text-jobloop-primary-orange transition-colors duration-300'>
                        {role.join(" · ")}
                    </p>
                )}

                {!!company?.length && (
                    <p className='mt-1 text-xs text-slate-500'>
                        {company.join(" · ")}
                    </p>
                )}

                <div className='grow' />

                <div className='mt-4 w-full space-y-1 text-sm'>
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className='block truncate px-1 hover:underline'
                            title={`Send e-post til ${fullName}`}
                        >
                            {email}
                        </a>
                    )}
                    {phone && (
                        <a
                            href={`tel:${formatTelHref(phone)}`}
                            className='block px-1 hover:underline'
                            title={`Ring ${fullName}`}
                        >
                            {phone}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

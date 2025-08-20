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
        <article className='group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow p-4 max-w-80 w-full flex flex-col'>
            <div className='flex flex-col items-center text-center flex-grow'>
                <div className='relative w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-52 lg:w-44 lg:h-56 xl:w-48 xl:h-60'>
                    <Image
                        src={image || "/placeholder-avatar.png"}
                        alt={fullName || "Ansattbilde"}
                        fill
                        sizes='(max-width: 640px) 8rem, (max-width: 768px) 9rem, (max-width: 1024px) 10rem, (max-width: 1280px) 11rem, 12rem'
                        className={`rounded-xl object-cover object-top grayscale ${image ? "" : "grayscale"}`}
                    />
                </div>

                <h3 className='mt-4 text-lg font-semibold leading-tight tracking-tight text-slate-900'>
                    {fullName}
                </h3>

                {!!role?.length && (
                    <p className='mt-1 text-sm text-slate-600'>
                        {role.join(" · ")}
                    </p>
                )}

                {!!company?.length && (
                    <p className='mt-1 text-xs text-slate-500'>
                        {company.join(" · ")}
                    </p>
                )}

                <div className='flex-grow' />

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

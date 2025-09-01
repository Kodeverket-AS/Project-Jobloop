"use client";

import { useEffect, useCallback, useRef, useState, useMemo } from "react";
import ContactCard from "./Card";

function Section({ title, people = [] }) {
    if (!people.length) return null;

    const maxWidth =
        people.length <= 2
            ? "max-w-2xl"
            : people.length <= 3
              ? "max-w-5xl"
              : "max-w-7xl";

    return (
        <section className={`space-y-8 mx-auto ${maxWidth}`}>
            <div className='text-center'>
                <h2 className='text-2xl md:text-3xl font-bold text-kv-black pb-2 border-b-2 md:border-b-4 border-jobloop-primary-green w-fit mx-auto'>
                    {title}
                </h2>
            </div>

            <div
                className={[
                    "grid gap-8 justify-center justify-items-center",
                    "[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]",
                ].join(" ")}
            >
                {people.map((contact, i) => (
                    <ContactCard
                        key={`${contact._id ?? i}`}
                        contact={contact}
                    />
                ))}
            </div>
        </section>
    );
}

function groupLabel(group) {
    switch (Number(group)) {
        case 1:
            return "Ledelse og administrasjon";
        case 2:
            return "Teamledere og tiltaksledere";
        case 3:
            return "Faglige veiledere og spillpedagoger";
        case 4:
            return "Interns";
        default:
            return "Noobs";
    }
}

function groupBy(arr, key) {
    return arr.reduce((acc, item) => {
        const k = item?.[key] ?? 5;
        if (!acc[k]) acc[k] = [];
        acc[k].push(item);
        return acc;
    }, {});
}

export default function ContactContainer({ data = [] }) {
    const [filtered, setFiltered] = useState(data);
    const [isFiltered, setIsFiltered] = useState(false);
    const nameInput = useRef(null);
    const departmentSelect = useRef(null);

    const departmentList = useMemo(() => {
        const set = new Set();
        data.forEach((item) =>
            (item?.company ?? []).forEach((c) => c?.trim() && set.add(c.trim()))
        );
        return Array.from(set).sort((a, b) => a.localeCompare(b, "no"));
    }, [data]);

    const doFilter = useCallback(() => {
        const deptVal = (departmentSelect.current?.value ?? "").toLowerCase();
        const nameVal = (nameInput.current?.value ?? "").toLowerCase();

        const result = data.filter((p) => {
            const matchesDept = deptVal
                ? (p.company ?? []).some(
                      (c) => (c ?? "").toLowerCase() === deptVal
                  )
                : true;
            const fullName = `${p.fname ?? ""} ${p.lname ?? ""}`
                .trim()
                .toLowerCase();
            const matchesName = nameVal ? fullName.includes(nameVal) : true;
            return matchesDept && matchesName;
        });

        setIsFiltered(Boolean(deptVal || nameVal));
        setFiltered(result);
    }, [data]);

    const onEsc = useCallback(
        (ev) => {
            if (ev.key === "Escape") {
                if (nameInput.current) nameInput.current.value = "";
                if (departmentSelect.current)
                    departmentSelect.current.value = "";
                setIsFiltered(false);
                setFiltered(data);
            }
        },
        [data]
    );

    useEffect(() => {
        document.addEventListener("keydown", onEsc);
        return () => document.removeEventListener("keydown", onEsc);
    }, [onEsc]);

    return (
        <div className='space-y-12 bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl md:text-4xl font-bold text-kv-black mb-4'>
                    Våre ansatte
                </h1>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                    Finn og kontakt de riktige personene i vårt team
                </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                    <input
                        ref={nameInput}
                        onChange={doFilter}
                        type='text'
                        placeholder='Søk etter ansatt …'
                        className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-200'
                    />

                    <select
                        ref={departmentSelect}
                        onChange={doFilter}
                        defaultValue=''
                        className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-jobloop-primary-green/60 focus:border-jobloop-primary-green transition-all duration-200'
                    >
                        <option value=''>Alle avdelinger</option>
                        {departmentList.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>

                    <button
                        type='button'
                        onClick={() => {
                            if (nameInput.current) nameInput.current.value = "";
                            if (departmentSelect.current)
                                departmentSelect.current.value = "";
                            setIsFiltered(false);
                            setFiltered(data);
                        }}
                        className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base hover:bg-slate-50 active:bg-slate-100 transition-all duration-200 font-medium'
                    >
                        Tilbakestill søk
                    </button>
                </div>

                {isFiltered && (
                    <div className='text-center'>
                        <span className='inline-block bg-jobloop-primary-green/10 text-jobloop-primary-green px-3 py-1 rounded-full text-sm font-medium'>
                            Viser {filtered.length} av {data.length} ansatte
                        </span>
                    </div>
                )}
            </div>

            <div className='space-y-16'>
                {(() => {
                    const grouped = groupBy(filtered, "group");
                    return Object.keys(grouped)
                        .map(Number)
                        .sort((a, b) => a - b)
                        .map((g) => (
                            <Section
                                key={g}
                                title={groupLabel(g)}
                                people={grouped[g]}
                            />
                        ));
                })()}

                {!filtered?.length && (
                    <div className='text-center py-12'>
                        <p className='text-lg text-slate-600 mb-4'>
                            Beklager, ditt søk ga ingen resultater.
                        </p>
                        <button
                            onClick={() => {
                                if (nameInput.current) nameInput.current.value = "";
                                if (departmentSelect.current)
                                    departmentSelect.current.value = "";
                                setIsFiltered(false);
                                setFiltered(data);
                            }}
                            className='text-jobloop-primary-green hover:underline font-medium'
                        >
                            Prøv et annet søk
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

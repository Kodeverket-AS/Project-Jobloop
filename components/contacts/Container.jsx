"use client"

import { useEffect, useCallback, useRef, useState } from "react";
import ContactCard from "./Card";
import FormSelect from "../forms/Select";

export default function ContactContainer({ data }) {
  const [ filtered, filterData ] = useState(data)
  const [ isFiltered, setIsFiltered ] = useState(false)
  const nameInput = useRef()
  const departmentSelect = useRef()

  // Filters employees based on two inputs, name search and select department.
  const filterEmployee = () => {
    const result = data
      .filter(person => (person.company.join().toLowerCase().includes(departmentSelect.current.value.toLowerCase())))
      .filter(person => (person.fname + person.lname).toLowerCase().includes(nameInput.current.value.toLowerCase()))

    setIsFiltered(true)
    filterData(result)
  }

  // Reset button function, clears inputs and resets data
  const resetButton = () => {
    nameInput.current.value = ""
    departmentSelect.current.value = ""
    setIsFiltered(false)
    filterData(data)
  }

  // Capture "esc" keypress and reset any filters used in displaying employees
  const resetFilters = useCallback((event) => {
    if (event.key === "Escape") {
      setIsFiltered(false)
      filterData(data)
    }
  }, [data])

  // Attaches eventlistener for above function, removes when unmounted (e.g changing page)
  useEffect(() => {
    document.addEventListener("keydown", resetFilters, false)

    return () => document.removeEventListener("keydown", resetFilters, false)
  }, [resetFilters])

  // Test
  const departments = ["Jobloop", "Kodehode", "Gamify"]

  return (
    <div className="flex flex-col gap-24 pb-24 max-md:px-4 max-md:w-full">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 w-full">
        <span>
          <input className="w-full text-lg p-[10px] border focus:border-jobloop-primary-green focus:outline-none font-sans" type="text" placeholder="Søk etter ansatt ..." ref={nameInput} onChange={e => filterEmployee()} />
        </span>
        <span>
          <FormSelect
            classNames={{input: "p-2 m-2 bg-green-100", ul: "p-2 bg-red-100", li: "bg-blue-100"}}
            options={departments}
            placeholder="Alle avdelinger"
            searchable={false}
            multiple={true}
          />
        </span>
        {
          isFiltered &&
          <span className="md:col-span-2 xl:hidden">
            <button className="w-full text-lg p-[10px] border bg-white active:border-jobloop-primary-green active:bg-slate-50" type="button" onClick={() => resetButton()}>Tilbakestill søk</button>
          </span>
        }
      </div>
      <div className="flex flex-col gap-12">
        {
          filtered.length > 0 ?
          filtered.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))
          :
          <span className="text-center">Beklager, ditt søk ga ingen resultater</span>
        }
      </div>
    </div>
  );
}
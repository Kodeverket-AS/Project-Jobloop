"use client"

import { useEffect, useCallback, useRef, useState } from "react";
import ContactCard from "./Card";

export default function ContactContainer({ data }) {
  const [ filtered, filterData ] = useState(data)
  const [ isFiltered, setIsFiltered ] = useState(false)
  const [ department, setDepartment ] = useState()
  const [ departmentList, setDepartmentList ] = useState()
  const nameInput = useRef()
  const departmentSelect = useRef()

  // Filters employees based on two inputs, name search and select department.
  const filterEmployee = () => {
    const result = data
      .filter(person => person.company.toLowerCase().includes(departmentSelect.current.value.toLowerCase()))
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

  Math.random()

  // Attaches eventlistener for above function, removes when unmounted (e.g changing page)
  useEffect(() => {
    document.addEventListener("keydown", resetFilters, false)

    return () => document.removeEventListener("keydown", resetFilters, false)
  }, [resetFilters])

  return (
    <div className="flex flex-col gap-24 pb-24 max-md:px-4">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 w-full">
        <span>
          <input className="w-full text-lg p-[10px] border focus:border-jobloop-primary-green focus:outline-none" type="text" placeholder="Søk etter ansatt ..." ref={nameInput} onChange={e => filterEmployee()} />
        </span>
        <span>
          <select className="w-full text-lg p-[12px] border bg-white focus:border-jobloop-primary-green focus:outline-none" defaultValue="" ref={departmentSelect} onChange={e => filterEmployee()}>
            <option value="">Alle avdelinger</option>
            <option value="gamify">Gamify</option>
            <option value="kodehode">Kodehode</option>
            <option value="jobloop">Jobloop</option>
          </select>
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
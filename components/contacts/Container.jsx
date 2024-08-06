"use client"

import { useState } from "react";
import ContactCard from "./Card";

export default function ContactContainer({ data }) {
  const [ filtered, filterData ] = useState(data)
  const [ department, setDepartment ] = useState()
  const [ departmentList, setDepartmentList ] = useState()

  const searchName = input => {
    const result = data.filter(( person ) => (person.fname + person.lname).toLowerCase().includes(input) )
    filterData(result)
  }

  const searchDepartment = value => {
    const result = data.filter(( person ) => (person.company).toLowerCase().includes(value) )
    filterData(result)
  }

  const resetFilters = () => {
    // todo
  }

  return (
    <div className="flex flex-col gap-24 pb-24">
      <div className="grid grid-cols-2 gap-4">
        <span>
          <input className="w-full text-lg p-[10px] border focus:border-jobloop-primary-green focus:outline-none" type="text" placeholder="Søk etter ansatt ..." onChange={e => searchName(e.target.value.toLowerCase())} />
        </span>
        <span>
          <select className="w-full text-lg p-[12px] border bg-white focus:border-jobloop-primary-green focus:outline-none" defaultValue="" onChange={e => searchDepartment(e.target.value.toLowerCase())}>
            <option value="">Alle avdelinger</option>
            <option value="gamify">Gamify</option>
            <option value="kodehode">Kodehode</option>
            <option value="jobloop">Jobloop</option>
          </select>
        </span>
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
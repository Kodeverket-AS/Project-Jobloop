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
      <div className="flex bg-green-700">
        <span className="flex flex-col">
          <label htmlFor="">Søk etter ansatt</label>
          <input type="text" onChange={e => searchName(e.target.value.toLowerCase())} />
        </span>
        <span className="flex flex-col">
          <label htmlFor="">Avdeling</label>
          <select defaultValue="" onChange={e => searchDepartment(e.target.value.toLowerCase())}>
            <option value="">Alle</option>
            <option value="gamify">Gamify</option>
            <option value="kodehode">Kodehode</option>
            <option value="jobloop">Jobloop</option>
          </select>
        </span>
      </div>

      <div className="flex flex-col gap-12">
        {filtered.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}
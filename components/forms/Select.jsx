"use client"

import { useRef, useState } from "react";

export default function FormSelect({ options, placeholder, searchable }) {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ selected, setSelected ] = useState(false)
  const optionss = useRef([])
  const input = useRef()
  const type = useRef("text")


  return (
    <div className="relative">
      <input type={type} ref={input} placeholder={placeholder} readOnly={!searchable} onClick={() => setIsOpen(!isOpen)}/>
      {
        isOpen &&
        <ul className="absolute">
          {options.map((option, index) =>
            <li key={index}>{option}</li>
          )}
        </ul>
      }
    </div>
  )
}
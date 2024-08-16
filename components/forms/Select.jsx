"use client"

import { useRef, useState } from "react";

export default function FormSelect({ options, placeholder, classNames, searchable }) {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ selected, setSelected ] = useState(false)
  const input = useRef()

  return (
    <div className="relative">
      <input 
        ref={input}
        placeholder={placeholder}
        className={`focus:outline-none ${classNames.input}`}
        readOnly={!searchable}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul style={{visibility: isOpen ? "visible" : "hidden" }} className={`absolute ${classNames.ul}`}>
          {options.map((option, index) =>
            <li className={classNames.li} key={index}>{option}</li>
          )}
        </ul>
    </div>
  )
}
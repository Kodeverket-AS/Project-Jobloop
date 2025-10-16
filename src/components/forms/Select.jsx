'use client';

import { useRef, useState } from 'react';

export default function Select({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const options = useRef([]);
  const input = useRef();
  const type = useRef('text');

  return (
    <div>
      <input type={type} ref={input} />
      <ul>
        {options.current.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

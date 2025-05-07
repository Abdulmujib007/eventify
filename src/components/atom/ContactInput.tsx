import React from 'react'

export default function ContactInput({text,placeholder} : {text:string;placeholder:string;} ) {
  return (
    <div className='font-medium'>
      <header className="text-sm text-[#8D8D8D]  mb-1">{text}</header>
      <input
        className="outline-none border-b-[1px] border-[#8D8D8D]  p-1  text-[1rem] w-full "
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

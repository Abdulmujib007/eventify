'use client'

import Image from "next/image";
import { useState } from "react";

interface InputProps {
    type: 'password' | 'text' | 'email'
    placeholder:string;
    headerText:string;
}

function Input({type,placeholder,headerText}:InputProps ) {
    const [focus,setFocus] = useState(false)
    const [passwordShow,setPasswordShow] = useState(false)

    const handlePasswordShow = () => {
        setPasswordShow(!passwordShow)
    }

  return (
    <div className="flex flex-col gap-y-1.5">
      <header className="text-[#636363] text-xl">{headerText}</header>
      <main
        className={`border-[1px] ${
          focus ? "border-[#0076B8]" : "border-[#828282]"
        }  w-full rounded-xl px-6 py-3.5 flex justify-between items-center`}
      >
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type={`${passwordShow ? "password" : "text"}`}
          placeholder={placeholder}
          className="w-full outline-none text-lg "
        />
        {type === "password" && (
          <div>
            {passwordShow && (
              <Image
                onClick={handlePasswordShow}
                src={"/eye-off-line.svg"}
                alt="eyeSvg"
                width={28}
                height={22}
              />
            )}
            {!passwordShow && (
              <Image
                onClick={handlePasswordShow}
                src={"/Vector 2.svg"}
                alt="eyeSvg"
                width={32}
                height={22}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Input
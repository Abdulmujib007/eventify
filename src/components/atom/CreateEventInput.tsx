"use client";

import { useState } from "react";

export default function CreateEventInput({
  placeholder,
  title,
}: {
  placeholder: string;
  title: "name" | "event";
}) {
  const [focus, setFocus] = useState(false);

  return (
    <input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      type="text"
      placeholder={placeholder}
      className={` ${title === "name" ? "w-[50%]" : "w-full"}   ${
        focus ? "border-[#0076B8]" : "border-[#ACACAC]"
      } text-xl  outline-none border-2 rounded-lg py-3.5 px-6`}
    />
  );
}

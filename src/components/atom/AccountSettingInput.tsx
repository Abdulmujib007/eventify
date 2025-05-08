import React from "react";

interface AccountSettingInputProps {
  label: string;
  placeholder: string;
  paddingBottom?: string;
  alignItems?: string;
}

const AccountSettingInput = ({
  label,
  placeholder,
  paddingBottom,
  alignItems,
}: AccountSettingInputProps) => {
  return (
    <div className={`flex  ${alignItems ? alignItems : "items-center"} `}>
      <div className="w-[14.6875rem] text-end ">
        <label className="mr-5 text-2xl font-semibold">{label}:</label>
      </div>
      <input
        placeholder={placeholder}
        type="text"
        className={`border-1 border-gray-300 rounded-md px-6 py-3.5 w-[37.5rem] outline-none ${
          paddingBottom ? paddingBottom : ""
        }`}
      />
    </div>
  );
};

export default AccountSettingInput;

import React from "react";

const AccountSettingsButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#2B293D] text-2xl py-5 px-[4.1875rem] rounded-[0.625rem] text-white">
      {text}
    </button>
  );
};

export default AccountSettingsButton;

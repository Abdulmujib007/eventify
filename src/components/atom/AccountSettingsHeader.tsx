import { title } from "process";
import React from "react";

const AccountSettingsHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-[#2D2C3C] text-[2.5rem] border-b-[0.01rem] border-[#6F6F6F] pb-5 mx-[4.375rem] font-bold">
        {title}
      </p>
    </div>
  );
};

export default AccountSettingsHeader;

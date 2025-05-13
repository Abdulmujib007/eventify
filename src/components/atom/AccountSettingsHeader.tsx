import React from "react";

const AccountSettingsHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-[#2D2C3C] text-[2.5rem] border-b-[0.01rem] border-[#6F6F6F] pb-[1.3125rem]  font-bold">
        {title}
      </p>
    </div>
  );
};

export default AccountSettingsHeader;

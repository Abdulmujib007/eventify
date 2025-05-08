import React from "react";
import AccountSettingsHeader from "../atom/AccountSettingsHeader";
import AccountSettingInput from "../atom/AccountSettingInput";
import AccountSettingsButton from "../atom/AccountSettingsButton";

const ChangeEmail = () => {
  return (
    <div className="ml-[1.8125rem]">
      <AccountSettingsHeader title="change email" />
      <div className="flex items-center gap-x-5 mt-20">
        <p className="text-[1.5rem] font-semibold">Current Email:</p>
        <p className="text-[1.5rem] font-semibold">andreagomes@example.com</p>
      </div>
      <div className="my-[1.625rem] ">
        <AccountSettingInput label="New Email" placeholder="Enter new email" />
      </div>
      <AccountSettingInput label="Confirm Email" placeholder="Enter again" />
      <div className="mt-[3.125rem] mb-[23.5625rem]  ml-[14.375rem]">
        <AccountSettingsButton text="Save New Email" />
      </div>
    </div>
  );
};

export default ChangeEmail;

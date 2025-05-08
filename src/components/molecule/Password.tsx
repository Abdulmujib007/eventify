import React from "react";
import AccountSettingsHeader from "../atom/AccountSettingsHeader";
import AccountSettingsButton from "../atom/AccountSettingsButton";

const Password = () => {
  return (
    <div className="mx-[4.375rem]">
      <AccountSettingsHeader title="set password" />

      <p className="mt-[4.375rem] text-2xl  mb-10 ">
        A password has not been set for your account.
      </p>
      <div className="mb-[35.3125rem]">
        <AccountSettingsButton text="Set Password" />
      </div>
    </div>
  );
};

export default Password;

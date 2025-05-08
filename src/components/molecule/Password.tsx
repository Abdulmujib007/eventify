import React from "react";
import AccountSettingsHeader from "../atom/AccountSettingsHeader";
import AccountSettingsButton from "../atom/AccountSettingsButton";

const Password = () => {
  return (
    <div>
      <AccountSettingsHeader title="set password" />
      <p className="mt-[4.375rem] text-2xl mx-[4.375rem] mb-10">
        A password has not been set for your account.
      </p>
      <AccountSettingsButton />
    </div>
  );
};

export default Password;

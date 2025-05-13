import React from "react";
import AccountSettingsHeader from "../atom/AccountSettingsHeader";
import Image from "next/image";
import AccountSettingInput from "../atom/AccountSettingInput";
import AccountSettingsButton from "../atom/AccountSettingsButton";

const AccountInfo = () => {
  return (
    <div className="ml-[1.8125rem]">
      <AccountSettingsHeader title="Account Information" />
      <p className="text-[2rem] font-semibold mt-[4.9375rem] mb-10 ml-[11.5rem]">
        Profile Photo
      </p>
      <div className="relative ml-[14rem]">
        <Image
          src="/userIcon.svg"
          alt="userIcon"
          width={0}
          height={0}
          style={{ height: "12.5rem", width: "12.5rem" }}
        />
        <Image
          src="/CameraIcon.svg"
          alt="cam"
          width={0}
          height={0}
          style={{
            height: "3.5625rem",
            width: "3.5625rem",
          }}
          className="absolute bottom-2.5 left-36"
        />
      </div>
      <div>
        <p className="text-[2rem] font-semibold mb-8 mt-[5.625rem] ml-[11.5rem]">
          Profile Information
        </p>
        <AccountSettingInput
          label="First Name"
          placeholder="Enter first name"
        />
        <div className="my-6.5">
          <AccountSettingInput
            label="Last Name"
            placeholder="Enter last name"
          />
        </div>
        <AccountSettingInput label="Website" placeholder="Enter website" />
        <div className="my-6.5">
          <AccountSettingInput
            label="Company"
            placeholder="Enter company name"
          />
        </div>
      </div>
      <div className="mt-[4rem]">
        <p className="text-[2rem] font-semibold mb-2  ml-[11.5rem]">
          Contact Details
        </p>
        <p className="text-[1.5rem] ml-[11.5rem] mb-8">
          These details are private and only used to contact you for ticketing
          or prizes.
        </p>
        <AccountSettingInput
          label="Phone Number"
          placeholder="Enter phone number"
        />
        <div className="my-6.5">
          <AccountSettingInput
            label="Address"
            placeholder="Enter address"
            paddingBottom="pb-[5.4rem]"
            alignItems="flex-start"
          />
        </div>
        <AccountSettingInput label="City/Town" placeholder="Enter city/town" />
        <div className="my-6.5">
          <AccountSettingInput label="Country" placeholder="Enter country" />
        </div>
        <AccountSettingInput label="Pincode" placeholder="Enter pincode" />
        <div className="mt-[7.1875rem] mb-[5.625rem] ml-[5.9375rem]">
          <AccountSettingsButton text="Save My Profile" />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

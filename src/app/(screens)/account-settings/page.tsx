"use client";

import AccountInfo from "@/components/molecule/AccountInfo";
import ChangeEmail from "@/components/molecule/ChangeEmail";
import Password from "@/components/molecule/Password";
import React, { useState } from "react";

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("accountInfo");

  const renderContent = () => {
    switch (activeTab) {
      case "accountInfo":
        return (
          <div className="p-8">
            <AccountInfo />
          </div>
        );
      case "changeEmail":
        return (
          <div className="p-8">
            <ChangeEmail />
          </div>
        );
      case "password":
        return (
          <div className="p-8">
            <Password />
          </div>
        );
      default:
        return null;
    }
  };

  const menuItems = [
    { id: "accountInfo", label: "Account Info" },
    { id: "changeEmail", label: "Change Email" },
    { id: "password", label: "Password" },
  ];

  return (
    <div className="flex  bg-[#EEEEEE] ">
      <div className="w-1/3 bg-[#EEEEEE]">
        <p className="pl-12 pr-21 pt-12 text-3xl font-bold text-[#2D2C3C] mb-16">
          Account Settings
        </p>
        <div>
          {menuItems.map((item) => (
            <p
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`cursor-pointer text-[1.25rem] font-medium py-4 pl-12 transition-colors duration-200 ${
                activeTab === item.id
                  ? "bg-white text-[#2D2C3C]"
                  : "bg-[#EEEEEE] text-[#2D2C3C]"
              }`}
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="w-2/3 bg-white">{renderContent()}</div>
    </div>
  );
};

export default Page;

import React from "react";

const SubHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="flex items-center gap-x-4 ml-[2.125rem] mt-16 mb-7">
        <img src="/navigateBackIcon.svg" alt="" />
        <p className="text-[3rem] font-bold">{title}</p>
      </div>
    </div>
  );
};

export default SubHeader;

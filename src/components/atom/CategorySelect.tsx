import React from "react";

const CategorySelect = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#F8F7FA] hover:bg-[#6F6F6F] cursor-pointer duration-700 px-5 py-2.5 rounded-[3.125rem] border-1 border-[#6F6F6F]">
      <p className="font-bold text-[1.25rem] ">{title}</p>
    </div>
  );
};

export default CategorySelect;

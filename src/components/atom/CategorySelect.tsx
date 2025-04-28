import React from "react";

const CategorySelect = ({ title,background,border,onClick,isActive }: { title: string; background: string; border: string; onClick ?: () => void, isActive?:boolean }) => {
  return (
    <div
      onClick={onClick}

      className={` ${ isActive ? 'bg-[#E6E6E6]' : `bg-[${background}]` } bg-[${background}] hover:bg-[#E6E5E7] cursor-pointer duration-700 px-5 py-2.5 rounded-[3.125rem] border-1 border-[${border}] `}
    >
      <p className="font-bold text-[1.25rem] text-[#6F6F6F] ">{title}</p>
    </div>
  );
};

export default CategorySelect;

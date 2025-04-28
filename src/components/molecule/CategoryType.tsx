import React from "react";
import CategorySelect from "../atom/CategorySelect";

const CategoryType = ({
  category,
  title1,
  title2,
  title3,
  title4,
}: {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  category: string;
}) => {
  return (
    <div className="py-[3.76rem] border-b-1 border-[#6F6F6F]">
      <p className="text-[2rem] font-semibold mb-6">{category}</p>
      <div className="flex gap-4">
        <CategorySelect background="#F8F7FA" border="#6F6F6F" title={title1} />
        <CategorySelect background="#F8F7FA" border="#6F6F6F" title={title2} />
        <CategorySelect background="#F8F7FA" border="#6F6F6F" title={title3} />
        <CategorySelect background="#F8F7FA" border="#6F6F6F" title={title4} />
      </div>
    </div>
  );
};

export default CategoryType;

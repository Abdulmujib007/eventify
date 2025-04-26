import React from "react";

interface AppButtonProps {
  text: string;
  bgColor?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  text,
  bgColor = "bg-[#2B293D]",
}) => {
  return (
    <div className={`${bgColor} rounded-[.625rem] cursor-pointer`}>
      <p className="text-white text-[1.5rem] font-bold py-5 px-[3.625rem]">
        {text}
      </p>
    </div>
  );
};

export default AppButton;

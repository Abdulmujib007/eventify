'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const SubHeader = ({ title }: { title: string }) => {
  const {back} = useRouter()
  return (
    <div>
      <div className="flex items-center gap-x-4 ml-[2.125rem] mt-16 mb-7">
        {/* <img src="/navigateBackIcon.svg" alt="" /> */}
        <Image
          className="cursor-pointer"
          onClick={() => back()}
          src={'/navigateBackIcon.svg'}
          alt="back-svg"
          width={27}
          height={21}
        />
        <p className="text-[3rem] font-bold">{title}</p>
      </div>
    </div>
  );
};

export default SubHeader;

"use client";

import Image from "next/image";
// import { useState } from "react";
// import TicketButton from "../atom/TicketButton";

function ModalContent({handleBtnClick,children,quantity,price,text} : {handleBtnClick : () => void;children : React.ReactNode;quantity:number,price:number;text:string;}) {

  return (
    <div className="bg-white py-7">
      {children}
      <section className="pt-5 ticket-shadow">
        <div className="flex justify-center gap-x-12 mb-5">
          <p className="text-3xl font-semibold flex gap-3.5">
            <span className="text-tifyPurple">Qty: </span>
            <span className="text-[#287921]">{quantity}</span>
          </p>
          <p className="text-3xl font-semibold flex gap-3.5">
            <span className="text-tifyPurple">Total: </span>
            <span className="text-[#287921]">${price}</span>
          </p>
        </div>
        <div className="mx-[2.5rem]">
          <button
            onClick={handleBtnClick}
            className=" w-full py-[1.125rem] bg-tifyPurple rounded-xl flex justify-center items-center gap-2.5 cursor-pointer "
          >
            <span className="text-white text-3xl font-semibold">{text}</span>
            <Image
              src={"/Vector 29.svg"}
              alt="arrow-btn"
              width={13}
              height={26}
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ModalContent;

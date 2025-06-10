import React from "react";
import ModalContent from "./ModalContent";
import Image from "next/image";

interface ContentProp {
  handleBtnClick: () => void;
  handleMinusQuantity: () => void;
  handlePlusQuantity: () => void;
  quantity: number;
  price: number;
  text: string;
}

function SelectModalContent({
  handleBtnClick,
  handleMinusQuantity,
  handlePlusQuantity,
  quantity,
  price,
  text,
}: ContentProp) {
  return (
    <ModalContent
      text={text}
      quantity={quantity}
      price={price}
      handleBtnClick={handleBtnClick}
    >
      <header className="text-3xl mx-7 mb-7 text-tifyPurple">
        Select Tickets
      </header>
      <p
        style={{ backgroundColor: "rgba(169, 169, 169, 0.3)" }}
        className="text-xl font-semibold pt-11 pb-2.5 pl-5 pr-[4.375rem] flex justify-between text-tifyPurple"
      >
        <span>Ticket Types</span>
        <span>Quantity</span>
      </p>
      <main className="pt-7 pb-8 px-[1.875rem] text-tifyPurple border-l-[10px] border-l-[#287921] flex justify-between items-center ">
        <p className="flex flex-col gap-3">
          <span className="font-semibold text-3xl">Standard Ticket</span>
          <span className="text-2xl">$200.00</span>
        </p>
        <div className="flex gap-x-2.5 items-center ">
          <Image
            onClick={handleMinusQuantity}
            src={"/Remove button.svg"}
            alt="remove-icon"
            width={50}
            height={50}
            priority={true}
          />
          <span className="text-5xl font-semibold">{quantity}</span>
          <Image
            onClick={handlePlusQuantity}
            src={"/Add button 2.svg"}
            alt="remove-icon"
            width={50}
            height={50}
            priority={true}
          />
        </div>
      </main>
      <div
        style={{ backgroundColor: "rgba(169, 169, 169, 0.3)" }}
        className="h-[15rem]"
      ></div>
    </ModalContent>
  );
}

export default SelectModalContent;

import Image from "next/image";
import React from "react";

export default function SummaryModalContent({
  handleBackBtn,
  price,
  handleBtnCLick
}: {
  handleBackBtn: () => void;
  handleBtnCLick : () => void;
  price: number;
}) {
  return (
    <div className="bg-white">
      <div className=" mb-4 ml-7 flex gap-x-10 py-4 ">
        <Image
          onClick={handleBackBtn}
          className="cursor-pointer"
          src={"/navigateBackIcon.svg"}
          alt="back-icon"
          width={30}
          height={30}
        />
        <header className="text-3xl text-tifyPurple">Order Summary</header>
      </div>
      <main
        style={{ backgroundColor: "rgba(169, 169, 169, 0.3)" }}
        className="pt-[3.75rem] pb-[8.5rem]"
      >
        <div className="ticket-summary pt-7">
          <header className="font-semibold text-2xl text-[#4872C6] text-center  ">
            Standard Ticket
          </header>
          <p className="mt-2.5 ml-10 font-semibold text-tifyPurple">
            Asiyanbi Abdulmujib{" "}
          </p>
          <div className="flex ml-10 justify-between items-center font-semibold  mr-2 mt-0.5 ">
            <span>mujibasiyanbi@gmail.com</span>
            <p className="py-[3px] px-6 bg-[#4872C6] text-white ">${price}</p>
          </div>
        </div>
      </main>
      <section className=" ticket-shadow pb-5 pt-10 font-semibold text-tifyPurple">
        <div className="mx-auto w-[50%] border-b-[1px] border-b-gray-400 pb-6">
          <div className="text-[1.75rem] flex justify-between mb-1.5 ">
            <span>Sub Total:</span>
            <span>${price}</span>
          </div>
          <div className="text-2xl flex justify-between">
            <p className="ml-[5rem]">Tax:</p>
            <span>$11.80</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-4xl w-[50%] mx-auto mt-5 ">
          <p>Order Total:</p>
          <span className="text-[#287921]">${price + 11.8}</span>
        </div>
        <div className="mx-[2.5rem] mt-6">
          <button
            onClick={handleBtnCLick}
            className="w-full rounded-lg py-5 flex justify-center gap-x-2.5 bg-[#287921] cursor-pointer  "
          >
            <Image
              src={"/Secure.svg"}
              alt="secure-icon"
              width={20}
              height={22}
            />
            <span className="font-semibold text-3xl text-white">Pay Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}

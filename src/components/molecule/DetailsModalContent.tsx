// import TicketButton from "../atom/TicketButton"
"use client";

import Image from "next/image";
import ModalContent from "./ModalContent";
import Input from "../atom/Input";
import { useState } from "react";

interface ContentProp {
  handleBtnClick: () => void;
  quantity: number;
  price: number;
  text: string;
  title: string;
  date: string;
  handleBackBtn: () => void;
}

function DetailsModalContent({
  handleBtnClick,
  quantity,
  price,
  text,
  title,
  date,
  handleBackBtn
}: ContentProp) {
  const [focus, setFocus] = useState(false);

  return (
    <ModalContent
      handleBtnClick={handleBtnClick}
      price={price}
      quantity={quantity}
      text={text}
    >
      <>
        <div className=" mb-4 ml-7 flex gap-x-10 ">
          <Image
            onClick={handleBackBtn}
            className="cursor-pointer"
            src={"/navigateBackIcon.svg"}
            alt="back-icon"
            width={30}
            height={30}
          />
          <header className="text-3xl text-tifyPurple">Attendee Details</header>
        </div>
        <main
          style={{ backgroundColor: "rgba(169, 169, 169, 0.3)" }}
          className=" pt-4 pb-6 text-[#5A5A5A] "
        >
          <section className="flex justify-between px-6 items-center ">
            <span className="text-lg ">{title}</span>
            <div className="flex items-center gap-x-2.5">
              <Image
                src={"/Vector 4.svg"}
                alt="date-icon"
                width={25}
                height={25}
              />
              <span className="text-lg">{date}</span>
            </div>
          </section>
          <section className="mt-5">
            <header className="font-semibold ml-7 text-xl text-tifyPurple">
              Standard Ticket: Ticket #1
            </header>
            <div className="bg-white mx-8 mt-2.5 mb-4 px-12 py-8 flex flex-col gap-y-6 border-t-[3px] border-t-[#4872C6] ">
              <Input
                headerText="Full Name"
                placeholder="Enter Attendee’s full name"
                type="text"
              />
              <Input
                headerText="Email"
                placeholder="Enter your Email "
                type="email"
              />
              <div className="flex flex-col gap-y-1.5">
                <header className="text-[#636363] text-xl">Phone</header>
                <main
                  className={`border-[1px] ${
                    focus ? "border-[#0076B8]" : "border-[#828282]"
                  }  w-full rounded-xl px-6 py-3.5 flex justify-start gap-5 items-center`}
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/Frame 42.svg"}
                      alt="country-icon"
                      width={38}
                      height={24}
                    />
                    <Image
                      src={"/Vector 7.svg"}
                      alt="country-icon"
                      width={12}
                      height={8}
                    />
                  </div>
                  {/* <select name="" id="">
                        <option value="">
                            <Image
                                src={'/Frame 42.svg'}
                                alt="country-icon"
                                width={20}
                                height={20}
                            />
                            India
                        </option>
                    </select> */}
                  <input
                    required
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    //   value={value}
                    //   onChange={onChange}
                    placeholder={"Enter Attendees Phone Number"}
                    className="w-full outline-none text-lg "
                  />
                </main>
              </div>
            </div>
          </section>
          <p className="text-center">
            I accept the{" "}
            <span className="text-[#006198]">Terms of Service</span> and have
            read the <span className="text-[#006198]">Privacy Policy</span>
          </p>
        </main>
      </>
    </ModalContent>
  );
}

export default DetailsModalContent;

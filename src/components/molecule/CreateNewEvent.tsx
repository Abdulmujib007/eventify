"use client";

import { useState } from "react";
import Image from "next/image";

const selectInfo = [
  "Cultural & Art",
  "Educational & Business",
  "Entertainment",
  "Food & Drinks",
  "Sport & Fitness",
  "Technology & Innovation",
  "Travel & Adventure",
];

interface SelectProp {
  show: boolean;
  text: string;
}

function CreateNewEvent() {
  const [select, setSelect] = useState<SelectProp>({
    show: false,
    text: "Please Select One",
  });

  const handleSelect = (index: number) => {
    const selected = selectInfo[index];
    setSelect({ show: false, text: selected });
  };

  const handleShowSelect = () => {
    setSelect((prev) => ({ text: "Please Select One", show: !prev.show }));
  };

  return (
    <div className="w-full overflow-x-hidden">
      <header className="ml-[15.875rem]  font-medium text-[2.5rem]">
        Event Details
      </header>
      <section className="mt-8 mb-[5.625rem] flex flex-col gap-y-9 w-full">
        <main className="flex gap-x-5 w-full ml-[6rem]">
          <div className="flex items-center">
            <span className="font-bold text-2xl">Event Title</span>
            <Image
              className="mb-2"
              src={"/_.svg"}
              alt="star-svg"
              width={14}
              height={26}
            />
          </div>
          <input
            type="text"
            placeholder="Enter the name of your event"
            className="text-xl w-[50%] outline-none border-2 border-[#ACACAC] rounded-lg py-3.5 px-6"
          />
        </main>
        <main className="flex gap-x-5 w-full ml-[2.4rem]">
          <div className="flex items-center">
            <span className="font-bold text-2xl">Event Category</span>
            <Image
              className="mb-2"
              src={"/_.svg"}
              alt="star-svg"
              width={14}
              height={26}
            />
          </div>
          <div className=" relative w-[50%]">
            <div
              onClick={handleShowSelect}
              className={` ${
                select.text === "Please Select One"
                  ? "text-[#ACACAC]"
                  : "text-black"
              }  text-xl w-full border-2 border-[#ACACAC] rounded-lg py-3.5 px-6 flex justify-between items-center bg-white`}
            >
              <span>{select.text}</span>
              {select.show ? (
                <Image
                  src={"/Vector 3 (1).svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={"/Vector 3.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                />
              )}
            </div>
            <div
              className={`${
                select.show ? "block translate-y-0" : "hidden -translate-y-4"
              }  transition-all duration-500 ease-in-out absolute w-full border-2 z-50 top-[4rem] rounded-lg border-[#ACACAC] bg-white  `}
            >
              {selectInfo.map((data, ind) => (
                <p
                  onClick={() => handleSelect(ind)}
                  className="py-5 pl-12 hover:bg-[#D9D9D9] text-xl "
                  key={ind}
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
        </main>
      </section>
      <header className="font-medium text-[2.5rem] ml-[15.875rem]">
        Date & Time
      </header>
      <section className="mt-8 mb-12 flex flex-col gap-12">
        <main className="ml-[6rem] flex items-center">
          <div className="flex items-center">
            <span className="font-bold text-2xl">Event Type</span>
            <Image
              className="mb-2"
              src={"/_.svg"}
              alt="star-svg"
              width={14}
              height={26}
            />
          </div>
          <div className="ml-5 flex gap-16  items-center">
            <div>
              <input
                name="event"
                type="radio"
                id="Single Event"
                value={"Single Event"}
              />
              <label
                className="font-semibold text-xl ml-2"
                htmlFor="Single Event"
              >
                Single Event
              </label>
            </div>
            <div>
              <input
                name="event"
                type="radio"
                id="Recurring Event"
                value={"Recurring Event"}
              />
              <label
                className="font-semibold text-xl ml-2 "
                htmlFor="Recurring Event"
              >
                Recurring Event
              </label>
            </div>
          </div>
        </main>
      </section>
      <main className="ml-[6rem] flex items-start">
        <div className="flex items-center">
          <span className="font-bold text-2xl">Session(s)</span>
          <Image
            className="mb-2"
            src={"/_.svg"}
            alt="star-svg"
            width={14}
            height={26}
          />
        </div>
        <div className="ml-5 flex gap-12 items-center">
          <section className="flex flex-col gap-4 justify-center">
            <div className="flex items-center">
              <span className="font-bold text-xl">Start Time</span>
              <Image
                className="mb-2"
                src={"/_.svg"}
                alt="star-svg"
                width={15}
                height={26}
              />
            </div>
            <div className="flex gap-10 rounded-lg border-[1px] border-[#828282] w-[20rem] ">
              <div className=" bg-[#828282] p-3.5 ">
                <Image
                  src={"/Vector 4.svg"}
                  alt="date-icon"
                  width={30}
                  height={20}
                />
              </div>
              <input placeholder="DD/MM/YY" className="outline-none  w-full" type="month" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CreateNewEvent;

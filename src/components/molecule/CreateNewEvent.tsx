"use client";

import { useState } from "react";
import Image from "next/image";
// import CreateEvenBackBtn from "../atom/CreateEvenBackBtn";
import CreateEventBtn from "../atom/CreateEventBtn";

const selectInfo = [
  "Cultural & Art",
  "Educational & Business",
  "Entertainment",
  "Food & Drinks",
  "Sport & Fitness",
  "Technology & Innovation",
  "Travel & Adventure",
];
const locationInfo = ['Online','Ilorin Kwara state Nigeria']

interface SelectProp {
  show: boolean;
  text: string;
}
interface CreateEventProp {
  handleBtnClick : () => void;
}

function CreateNewEvent({handleBtnClick} : CreateEventProp) {
  const [select, setSelect] = useState<SelectProp>({
    show: false,
    text: "Please Select One",
  });
   const [select1, setSelect1] = useState<SelectProp>({
     show: false,
     text: "Please Select One",
   });

  const handleSelect = (index: number) => {
    const selected = selectInfo[index];
    setSelect({ show: false, text: selected });

  };
  const handleSelect1 = (index: number) => {
    const selected = locationInfo[index];
    setSelect1({ show: false, text: selected });
  };

  const handleShowSelect = () => {
    setSelect((prev) => ({ text: "Please Select One", show: !prev.show }));
  };

   const handleShowSelect1 = () => {
     setSelect1((prev) => ({ text: "Please Select One", show: !prev.show }));
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
              }  transition-all duration-500 ease-in-out absolute w-full border-2  top-[4rem] rounded-lg border-[#ACACAC] bg-white  `}
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
      <section className="ml-[6rem] flex items-start">
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
              <span className="font-bold text-xl">Start Date</span>
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
              <input
                placeholder="DD/MM/YY"
                className="outline-none  w-full"
                type="month"
              />
            </div>
          </section>
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
                  src={"/Group.svg"}
                  alt="date-icon"
                  width={30}
                  height={20}
                />
              </div>
              <input
                placeholder="DD/MM/YY"
                className="outline-none  w-full"
                type="time"
              />
            </div>
          </section>
          <section className="flex flex-col gap-4 justify-center">
            <div className="flex items-center">
              <span className="font-bold text-xl">End Time</span>
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
                  src={"/Group.svg"}
                  alt="date-icon"
                  width={30}
                  height={20}
                />
              </div>
              <input
                placeholder="DD/MM/YY"
                className="outline-none  w-full"
                type="time"
              />
            </div>
          </section>
          <div>
            <Image
              src={"/Add button.svg"}
              alt="add-btn"
              width={20}
              height={20}
            />
          </div>
        </div>
      </section>
      <header className="font-medium text-[2.5rem] mt-[5.625rem] ml-[15.875rem] mb-4">
        Location
      </header>
      <section className="flex gap-x-5 w-full ml-[1rem] ">
        <div className="flex items-center">
          <span className="font-bold text-2xl">
            Where will your <br /> event take place?
          </span>
          <Image
            className="mb-2"
            src={"/_.svg"}
            alt="star-svg"
            width={14}
            height={26}
          />
        </div>
        <div className={`relative w-[50%]`}>
          <div
            onClick={handleShowSelect1}
            className={` ${
              select1.text === "Please Select One"
                ? "text-[#ACACAC]"
                : "text-black"
            }  text-xl w-full border-2 border-[#ACACAC] rounded-lg py-3.5 px-6 flex justify-between items-center bg-white`}
          >
            <span>{select1.text}</span>
            {select1.show ? (
              <Image
                src={"/Vector 3 (1).svg"}
                alt="arrow"
                width={20}
                height={20}
              />
            ) : (
              <Image src={"/Vector 3.svg"} alt="arrow" width={20} height={20} />
            )}
          </div>
          <div
            className={`${
              select1.show ? "block translate-y-0 " : "hidden -translate-y-4"
            }  transition-all duration-500 ease-in-out absolute w-full border-2 z-50 top-[4rem] rounded-lg border-[#ACACAC] bg-white   `}
          >
            {locationInfo.map((data, ind) => (
              <p
                onClick={() => handleSelect1(ind)}
                className="py-5 pl-12 hover:bg-[#D9D9D9] text-xl "
                key={ind}
              >
                {data}
              </p>
            ))}
          </div>
        </div>
      </section>
      <header className="font-medium text-[2.5rem] mt-[5.625rem] ml-[15.875rem] mb-4">
        Additional Information
      </header>
      <section className="flex gap-x-5 w-full ml-[0.5rem] items-start ">
        <div className="flex items-center">
          <span className="font-bold text-2xl">Event Description</span>
          <Image
            className="mb-2"
            src={"/_.svg"}
            alt="star-svg"
            width={14}
            height={26}
          />
        </div>
        <div className="w-[70%] h-[20rem] ">
          <textarea
            placeholder="Describe what's special about your event & other important details."
            className="border-2 outline-none border-[#ACACAC] rounded-xl w-full h-full  px-6 py-3.5 text-xl "
            name=""
            id=""
          />
        </div>
      </section>
      <section className="mt-[29rem] flex w-full justify-end items-center gap-x-8">
        <CreateEventBtn text="Save & Continue" onClick={handleBtnClick} />
      </section>
    </div>
  );
}

export default CreateNewEvent;

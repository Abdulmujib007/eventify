"use client";

import { useState } from "react";
import Image from "next/image";
import CreateEventBtn from "../atom/CreateEventBtn";
import LocationSelect from "./LocationSelect";
import CreateEventInput from "../atom/CreateEventInput";
import CreateEventDate from "./CreateEventDate";

const selectInfo = [
  "Cultural & Art",
  "Educational & Business",
  "Entertainment",
  "Food & Drinks",
  "Sport & Fitness",
  "Technology & Innovation",
  "Travel & Adventure",
];

interface Props {
  date: string;
  start: string;
  end: string;
}

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
   const [select1, setSelect1] = useState<{show:string; text:string }>({
     show: '',
     text: "Please Select One",
   });

  const handleSelect = (index: number) => {
    const selected = selectInfo[index];
    setSelect({ show: false, text: selected });

  };
  const handleSelect1 = (event: string) => {
    // const selected = locationInfo[index];
    if(event === 'Online'){
      setSelect1({ show:'', text: event });
    } else if(event === 'Venue') {
      setSelect1({show:'events',text:event})
    }
  };

  const handleShowSelect = () => {
    setSelect((prev) => ({ text: "Please Select One", show: !prev.show }));
  };

   const handleShowSelect1 = () => {
     setSelect1((prev) => ({ text: "Please Select One", show:prev.show === 'all' ? '' : 'all' }));
   };


    const [moreDate, setMoreDate] = useState<Props[]>([
       { date: "Start Date", start: "Start Time", end: "End Time" },
     ]);
   
     const handleAdd = () => {
       setMoreDate([
         ...moreDate,
         { date: "Start Date", start: "Start Time", end: "End Time" },
       ]);
     };
   
     const handleRemove = () => {
       setMoreDate(moreDate.slice(0, -1));
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
          <CreateEventInput
            placeholder="Enter the name of your Event"
            title="name"
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
        <div className="flex flex-col gap-10 w-full">
          {moreDate.map((data, ind) => (
            <CreateEventDate {...data} key={ind}   handleAdd={handleAdd} handleRemove={handleRemove} ind={ind}  />
          ))}
        </div>
      </section>
      <header className="font-medium text-[2.5rem] mt-[5.625rem] ml-[15.875rem] mb-4">
        Location
      </header>
      <section className="flex gap-x-5 w-full items-start ml-[1rem] ">
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
        <div className={`relative w-[80%]`}>
          <div
            onClick={handleShowSelect1}
            className={` ${
              select1.text === "Please Select One"
                ? "text-[#ACACAC]"
                : "text-black"
            }  text-xl  border-2 border-[#ACACAC] rounded-lg py-3.5 px-6 flex justify-between items-center bg-white w-[62.5%] `}
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
          <LocationSelect handleSelect1={handleSelect1} select1={select1} />
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

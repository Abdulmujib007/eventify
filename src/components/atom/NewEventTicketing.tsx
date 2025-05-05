"use client";

import { useState } from "react";
import Image from "next/image";
import CreateEvenBackBtn from "./CreateEvenBackBtn";
import CreateEventBtn from "./CreateEventBtn";

interface BtnsProp {
  handleBack: () => void;
  handleForward: () => void;
}

function NewEventTicketing({ handleBack, handleForward }: BtnsProp) {
  const [paidTicketType, setPaidTicketType] = useState(true);
  return (
    <div>
      <header className="font-medium text-[2.5rem]">
        What type of event are you running?
      </header>
      <section className="mt-8 mb-[5.625rem] flex gap-x-[3.75rem]">
        <div
          className={`px-[5.5rem] items-center py-7 flex flex-col gap-5    ${
            paidTicketType
              ? " border-[2px] border-[#2B293D] bg-[#F6FBFF] "
              : "border-[1px] border-[#828282]"
          }  w-fit  rounded-xl cursor-pointer`}
          onClick={() => setPaidTicketType(!paidTicketType)}
        >
          <Image
            src={"/Vector 5.svg"}
            alt="ticket-icon"
            width={84}
            height={84}
          />
          <p className="flex flex-col gap-1 text-center w-fit">
            <span className="font-semibold text-[1.375rem]">
              Ticketed Event
            </span>
            <span className="text-xl">My event requires tickets for entry</span>
          </p>
        </div>
        <div
          className={`px-[8.5rem] items-center py-7 flex flex-col gap-5    ${
            !paidTicketType
              ? " border-[2px] border-[#2B293D] bg-[#F6FBFF] "
              : "border-[1px] border-[#828282]"
          }  w-fit rounded-xl cursor-pointer`}
          onClick={() => setPaidTicketType(!paidTicketType)}
        >
          <Image src={"/free 1.svg"} alt="ticket-icon" width={84} height={84} />
          <p className="flex flex-col gap-1 text-center w-fit">
            <span className="font-semibold text-[1.375rem]">Free Event</span>
            <span className="text-xl">I’m running a free event</span>
          </p>
        </div>
      </section>
      <header className="font-medium text-[2.5rem]">
        What tickets are you selling?
      </header>
      <section className="mt-8 flex gap-x-16 items-end">
        <div className="flex flex-col gap-y-4 w-fit ">
          <span className="font-semibold text-2xl">Ticket Name</span>
          <input
            className="text-[1.375rem] px-6 py-3.5 border-[1px] border-[#828282] rounded-lg w-[32rem] "
            type="text"
            placeholder="Ticket Name e.g. General Admission"
          />
        </div>
        <div className="flex flex-col gap-y-4 w-fit">
          <span className="font-semibold text-2xl">Ticket Price</span>
          <div className="w-[18rem] border-[1px] border-[#828282] rounded-lg flex">
            <div className="px-5 py-4.5 bg-[#828282] rounded-l-lg">
              <Image
                src={"/₹.svg"}
                alt="currency-icon"
                width={12}
                height={12}
              />
            </div>
            <input
              placeholder="0.00"
              type="text"
              className="py-4.5 px-[1.375rem] text-[1.375rem outline-none"
            />
          </div>
        </div>
        <div className="ml-[4.125rem]">
          <Image
            src={"/Add button.svg"}
            alt="add-icon"
            width={20}
            height={20}
          />
        </div>
      </section>
      <section className="mt-[13.5rem] w-full flex justify-end gap-x-8 ">
        <CreateEvenBackBtn onClick={handleBack} text="Go back" />
        <CreateEventBtn onClick={handleForward} text="Save & Continue" />
      </section>
    </div>
  );
}

export default NewEventTicketing;

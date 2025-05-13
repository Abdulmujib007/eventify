"use client";

import { useState } from "react";
import Image from "next/image";
import CreateEvenBackBtn from "./CreateEvenBackBtn";
import CreateEventBtn from "./CreateEventBtn";
import TicketDetails from "../molecule/TicketDetails";

interface BtnsProp {
  handleBack: () => void;
  handleForward: () => void;
}
interface TicketProp {
  ticketName: string;
  ticketPrice: string;
}

function NewEventTicketing({ handleBack, handleForward }: BtnsProp) {
  const [paidTicketType, setPaidTicketType] = useState(true);
  const [ticket, setTicket] = useState<TicketProp[]>([
    { ticketName: "Ticket Name", ticketPrice: "Ticket Price" },
  ]);

  const handleAdd = () => {
    setTicket([
      ...ticket,
      { ticketName: "Ticket Name", ticketPrice: "Ticket Price" },
    ]);
  };
  const handleRemove = () => {
    if (ticket.length > 1) {
      setTicket(ticket.splice(0, ticket.length - 1));
    }
  };

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
      <section className="flex flex-col gap-y-5">
        {
          ticket.map((val,ind) => (
            <TicketDetails {...val} ind={ind} key={ind} handleAdd={handleAdd} handleRemove={handleRemove} />
          ))
        }
      </section>
      <section className="mt-[13.5rem] w-full flex justify-end gap-x-8 ">
        <CreateEvenBackBtn onClick={handleBack} text="Go back" />
        <CreateEventBtn onClick={handleForward} text="Save & Continue" />
      </section>
    </div>
  );
}

export default NewEventTicketing;

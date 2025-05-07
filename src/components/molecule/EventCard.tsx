import Image from "next/image";
import React from "react";

interface EventCardProps {
  img: string;
  title: string;
  date: string;
  time: string;
  location: string;
  ticketPrice?: string;
  ticketIcon?: string;
}

const EventCard = ({
  img,
  title,
  date,
  time,
  location,
  ticketPrice,
  ticketIcon,
}: EventCardProps) => {
  return (
    <div className="flex gap-x-6 hover:shadow-lg duration-300 ">
      <Image
        src={img}
        alt=""
        width={0}
        height={0}
        style={{ width: "18.5rem", height: "13rem" }}
      />
      <div>
        <p className="font-semibold text-[1.5rem] mb-3">{title}</p>
        <div className="flex items-center mb-3">
          <p className="text-[#5A5A5A] font-bold border-r-2 border-[#5A5A5A] pr-[0.3125rem] text-[1.25rem]">
            {date}
          </p>
          <p className="text-[#5A5A5A] font-bold pl-[0.3125rem] text-[1.25rem]">
            {location}
          </p>
        </div>
        <p className="mb-3 text-[1.25rem] text-[#5A5A5A]">{time}</p>
        <span className="flex items-center gap-x-1.75">
          <img
            src={ticketIcon ? ticketIcon : "/Ticket.svg"}
            alt=""
            width={0}
            height={0}
            style={{ width: "1.3rem", height: "1.3rem" }}
          />
          <p className="text-[#287921] text-[1.25rem] font-semibold">
            {ticketPrice}
          </p>
        </span>
      </div>
    </div>
  );
};

export default EventCard;

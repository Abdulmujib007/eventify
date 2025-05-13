import Image from 'next/image';
import React from 'react'
import CreateEventInput from '../atom/CreateEventInput';


interface LocationProp {
    select1: {
        show:string;
        text:string;
    };
    handleSelect1 : (event:string) => void
}

function LocationSelect({select1,handleSelect1}:LocationProp) {
  return (
    <>
      <div
        className={`${
          select1.show === "all"
            ? "block translate-y-0 "
            : "hidden -translate-y-4"
        }  transition-all duration-500 ease-in-out  w-[62.5%] border-2 z-50 top-[4rem] rounded-lg border-[#ACACAC] bg-white  mt-1 `}
      >
        {/* {locationInfo.map((data, ind) => ( */}
        <div
          onClick={() => handleSelect1("Venue")}
          className="py-5 pl-5 hover:bg-[#D9D9D9] text-xl flex gap-4 "
          // key={ind}
        >
          <Image
            src={"/Icon 3.svg"}
            alt="persons-icon"
            width={56}
            height={56}
          />
          <p className="flex flex-col gap-1">
            <span className="font-semibold text-xl text-tifyPurple ">
              Venue
            </span>
            <span className="text-lg text-[#5A5A5A]">
              Host event at a physical location and manage check-ins at the
              door.
            </span>
          </p>
        </div>
        <div
          onClick={() => handleSelect1("Online")}
          className="py-5 pl-5 hover:bg-[#D9D9D9] text-xl flex gap-4 "
          // key={ind}
        >
          <Image
            src={"/Icon 2.svg"}
            alt="persons-icon"
            width={56}
            height={56}
          />
          <p className="flex flex-col gap-1 w-[80%]">
            <span className="font-semibold text-xl text-tifyPurple ">
              Online
            </span>
            <span className="text-lg text-[#5A5A5A]">
              Host event through any virtual platform and easily share the
              joining instructions only with the ticket buyers.
            </span>
          </p>
        </div>
        {/* ))} */}
      </div>
      <div
        className={` ${
          select1.show === "events" ? "block" : "hidden"
        }   w-full mt-7 flex justify-between`}
      >
        <main className="flex flex-col gap-7 w-[62.5%]">
          <CreateEventInput placeholder="Venue name" title="event" />

          <CreateEventInput placeholder="Address" title="event" />

          <CreateEventInput placeholder="City" title="event" />
        </main>
        <Image
          src={"/Map.svg"}
          alt="map-icon"
          width={0}
          height={0}
          className="h-full w-[33.5%]"
        />
      </div>
    </>
  );
}

export default LocationSelect
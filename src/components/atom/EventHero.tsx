"use client";
import React from "react";

import Image from "next/image";
import { useState } from "react";

const EventHero = () => {
  const [location, setLocation] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleShowLocations = () => {
    setLocation((prev) => !prev);
  };
  const handleSearch = () => {
    setSearchText("");
    console.log("button pressed", { searchText });
  };
  return (
    <div>
      <p className="text-center font-bold text-[3rem] text-white mb-[3.75rem]">
        Explore a world of events. Find what excites you!
      </p>
      <section className="w-full flex justify-center ">
        <form className="bg-white flex border-r-[2px] border-r-[#BBBBBB] w-[45%] justify-between px-6 py-4.5 rounded-l-lg text-xl parentEl">
          <div className="flex gap-6 w-full">
            <Image
              src="/Search icon.svg"
              alt="search-image"
              width={25}
              height={25}
            />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="outline-none w-[80%] search"
              placeholder="Search Events, Categories, Location,..."
              type="text"
            />
          </div>
          <Image
            className="cancel-img"
            onClick={handleSearch}
            alt="cancel-img"
            src={"/Close button.svg"}
            width={30}
            height={30}
          />
        </form>
        <main
          className="bg-white w-[20%] relative flex items-center rounded-r-lg "
          onClick={handleShowLocations}
        >
          <div className="flex justify-between w-full mx-6">
            <div className="flex gap-3.5">
              <Image
                src={"/Location icon.svg"}
                alt="location-image"
                width={22}
                height={30}
              />
              <input
                className="font-medium text-xl outline-none w-[80%]"
                placeholder="Mumbai"
              />
            </div>
            {!location && (
              <Image
                alt="arrow-svg"
                src={"/Vector 3.svg"}
                width={18}
                height={9}
              />
            )}
            {location && (
              <Image
                alt="arrow-svg"
                src={"/Vector 3 (1).svg"}
                width={18}
                height={9}
              />
            )}
          </div>
          {location && (
            <div className="absolute border-t-[2px] border-t-[#5A5A5A] bottom-[-9.15em] bg-white w-full flex flex-col ">
              <div className="border-b-[1px] border-b-[#5A5A5A] hover:bg-[#E6E5E7] w-full flex gap-3.5 px-4 py-6 items-center text-l ">
                <Image
                  src={"/Vector.svg"}
                  alt="destination"
                  width={25}
                  height={25}
                />
                <span>Detect Current Location</span>
              </div>
              <div className=" hover:bg-[#E6E5E7] w-full flex gap-3.5 px-4 py-6 items-center text-l ">
                <Image
                  src={"/Vector (1).svg"}
                  alt="destination"
                  width={25}
                  height={25}
                />
                <span>Online</span>
              </div>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default EventHero;

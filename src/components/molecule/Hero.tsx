"use client";

import Image from "next/image";
import { useState } from "react";

function Hero() {
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
    <div className="heroBackground h-[20rem]  sm:h-[36rem] flex items-start justify-center flex-col  gap-14 w-full">
      <section className=" px-[2rem] sm:px-[5rem]  leading-[2rem] xl:px-[10rem] lg:leading-[3rem] xl:leading-[4.4rem] text-[#fff] text-2xl  sm:text-3xl md:text-4xl  xl:text-5xl font-bold">
        <p>Dont miss out!</p>
        <p>
          Explore the <span className="text-tifyYellow">vibrant events</span>{" "}
          happening locally and globally.{" "}
        </p>
      </section>
      <section className="w-full hidden sm:flex justify-center  ">
        <form className="bg-white flex border-r-[2px] border-r-[#BBBBBB] w-[45%] justify-between px-6  py-4.5 rounded-l-lg text-xl parentEl">
          <div className="flex gap-6 w-full">
            <Image
              src="/Search icon.svg"
              alt="search-image"
              width={25}
              height={25}
              priority={true}
            />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="outline-none truncate w-[70%] lg:w-[80%] search"
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
            priority={true}
          />
        </form>
        <main
          className="bg-white w-[30%] md:w-[25%] lg:w-[20%]  relative flex items-center rounded-r-lg "
          onClick={handleShowLocations}
        >
          <div className="flex justify-between w-full mx-6">
            <div className="flex gap-3.5">
              <Image
                src={"/Location icon.svg"}
                alt="location-image"
                width={22}
                height={30}
                priority={true}
              />
              <input
                className="font-medium text-xl outline-none w-[70%]"
                placeholder="Mumbai"
              />
            </div>
            {!location && (
              <Image
                alt="arrow-svg"
                src={"/Vector 3.svg"}
                width={18}
                height={9}
                priority={true}
              />
            )}
            {location && (
              <Image
                alt="arrow-svg"
                src={"/Vector 3 (1).svg"}
                width={18}
                height={9}
                priority={true}
              />
            )}
          </div>
          {/* {location && ( */}
          <div
            className={` ${
              location ? "block" : "hidden"
            }  absolute border-t-[2px] border-t-[#5A5A5A] top-[4.0rem] bg-white w-full flex flex-col transition-all duration-3000 ease-in-out `}
          >
            <div className="border-b-[1px] border-b-[#5A5A5A] hover:bg-[#E6E5E7] w-full flex gap-3.5 px-4 py-6 items-center text-[1rem] lg:text-lg ">
              <Image
                src={"/Vector.svg"}
                alt="destination"
                width={25}
                height={25}
                priority={true}
              />
              <span>Detect Current Location</span>
            </div>
            <div className=" hover:bg-[#E6E5E7] w-full flex gap-3.5 px-4 py-6 items-center text-l ">
              <Image
                src={"/Vector (1).svg"}
                alt="destination"
                width={25}
                height={25}
                priority={true}
              />
              <span>Online</span>
            </div>
          </div>
          {/* )} */}
        </main>
      </section>
    </div>
  );
}

export default Hero;

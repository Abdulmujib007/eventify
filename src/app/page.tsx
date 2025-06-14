"use client";
import { useState, useEffect } from "react";
import CategorySelect from "@/components/atom/CategorySelect";
import Categories from "@/components/molecule/Categories";
import Hero from "@/components/molecule/Hero";
import EventDetails from "@/components/molecule/EventDetails";
import SeeMoreBtn from "@/components/atom/SeeMoreBtn";
import { DataProp } from "@/utils/types";
import { allHomeEventData } from "@/data";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  const [filerWith, setFilterWith] = useState("");
  const [dataToBeMap, setDataToMap] = useState<DataProp[]>([]);
  const [isActiveButton, setIsActiveButton] = useState<number>(1);

  const popularEventData = allHomeEventData.slice(0, 6);
  const onlineEventData = allHomeEventData.slice(6, 12);
  const trendingEventData = allHomeEventData.slice(12, allHomeEventData.length);

  useEffect(() => {
    setDataToMap(popularEventData);
  }, []);

  useEffect(() => {
    if (filerWith === "All") {
      setDataToMap(popularEventData);
      return;
    }
    if (filerWith) {
      const data = popularEventData.filter((item) => item.date === filerWith);
      setDataToMap(data);
    } else {
      setDataToMap(popularEventData);
    }
  }, [filerWith]);

  const handleFilterButtonClick = (filter: string, ind: number) => {
    setFilterWith(filter);
    setIsActiveButton(ind);
  };

  return (
    <div>
      <Hero />
      <section className="2xl:my-[8.7rem] my-[3rem] 2xl:mx-[8rem] mx-[2rem] ">
        <header className="font-bold text-2xl  xl:text-[2.5rem]">
          Explore Categories
        </header>
        <div className="mt-[3.125rem] flex justify-center sm:justify-between xl:px-8 px-1 flex-wrap md:flex-nowrap gap-y-8">
          <Categories text="Entertainment" src="/Image.svg" />
          <Categories text="Educational & Business" src="/Image (1).svg" />
          <Categories text="Cultural & Arts" src="/Image (2).svg" />
          <Categories text="Sports & Fitness" src="/Image (3).svg" />
          <Categories text="Technology & Innovation" src="/Image (5).svg" />
          <Categories text="Travel & Adventure" src="/Image (4).svg" />
        </div>
      </section>
      <section className="mx-[2rem] 2xl:mx-[8rem] 2xl:mb-[9.3rem] mb-[4rem]">
        <header className="font-bold text-2xl xl:text-4xl">
          Popular Events in Mumbai
        </header>
        <div className="mt-[2rem] mb-10 2xl:mb-16 flex gap-2.5 md:gap-5">
          <CategorySelect
            onClick={() => handleFilterButtonClick("All", 1)}
            background="white"
            border="#6F6F6F"
            title="All"
            isActive={isActiveButton === 1}
          />
          <CategorySelect
            onClick={() => handleFilterButtonClick("today", 2)}
            background="white"
            border="#6F6F6F"
            title="Today"
            isActive={isActiveButton === 2}
          />
          <CategorySelect
            onClick={() => handleFilterButtonClick("tomorrow", 3)}
            background="white"
            border="#6F6F6F"
            title="Tomorrow"
            isActive={isActiveButton === 3}
          />
          <CategorySelect
            onClick={() => handleFilterButtonClick("weekend", 4)}
            background="white"
            border="#6F6F6F"
            title="This Weekend"
            isActive={isActiveButton === 4}
          />
          <CategorySelect
            onClick={() => handleFilterButtonClick("free", 5)}
            background="white"
            border="#6F6F6F"
            title="Free"
            isActive={isActiveButton === 5}
          />
        </div>
        <main className="flex flex-wrap gap-x-10 gap-y-10 mb-[1.5rem]  sm:mb-[3.75rem]">
          {dataToBeMap.map((detail, ind) => (
            <EventDetails key={ind} {...detail} />
          ))}
        </main>
        <div className="flex justify-center">
          <SeeMoreBtn path="/events" />
        </div>
      </section>
      <section className="mx-[2rem] 2xl:mx-[8rem] 2xl:mb-[9.3rem] mb-[4rem]">
        <header className="font-bold text-2xl xl:text-4xl">
          Discover Best of Online Events
        </header>
        <main className="mt-[3.125rem] flex flex-wrap gap-x-10 gap-y-10 mb-[1.5rem] sm:mb-[3.75rem]">
          {onlineEventData.map((data, ind) => (
            <EventDetails key={ind} {...data} />
          ))}
        </main>
        <div className="flex justify-center">
          <SeeMoreBtn path="/events" />
        </div>
      </section>
      <section className="hidden md:block mx-[4rem] 2xl:mx-[8rem] mb-36 getStarted py-16">
        <header className="font-bold text-[2.5rem] pl-[5rem] tablet:pl-[20rem] ">
          Events specially curated for you!
        </header>
        <p className="text-2xl  mb-9 pl-[5rem]  tablet:pl-[20rem]">
          Get event suggestions tailored to your interests! Dont let your
          favorite events slip away.
        </p>
        <Link
          className="mx-auto w-fit flex gap-4 items-center bg-tifyPurple rounded-2xl py-[1.25rem] px-9 hover:bg-[#413F53] cursor-pointer "
          href={"/interest"}
        >
          <span className="text-3xl font-semibold text-[#FFE047]">
            Get Started
          </span>
          <Image src={"/Vector 6.svg"} alt="arrow" width={30} height={26} />
        </Link>
      </section>
      <section className="mx-[2rem] 2xl:mx-[8rem] 2xl:my-[9.3rem] my-[4rem]">
        <header className="font-bold text-2xl xl:text-4xl mb-8 sm:mb-14">
          Trending Events around the World
        </header>
        <main className="flex flex-wrap gap-x-10 gap-y-10 mb-[1.5rem]  sm:mb-[3.75rem]">
          {trendingEventData.map((data, ind) => (
            <EventDetails key={ind} {...data} />
          ))}
        </main>
        <div className="flex justify-center">
          <SeeMoreBtn path="/events" />
        </div>
      </section>
      <section className="sm:flex hidden  createEventImage mb-12 py-[4.5rem] tablet:py-[6.5rem] pl-[19rem] pr-[2rem] tablet:pr-[5.7rem] text-[#FFE047]  tablet:flex-row flex-col justify-between gap-y-4">
        <div>
          <header className="font-medium text-3xl tablet:text-4xl mb-2">
            Create an event with Eventify
          </header>
          <span className="text-[1rem]  tablet:text-[1.5rem]">
            Got a show, event, activity or a great experience? Partner with us &
            get listed on Eventify
          </span>
        </div>
        <Link
          href={"/create-event"}
          className="min-w-max items-center h-fit py-3 tablet:py-4 flex gap-2.5  tablet:px-11 px-8 bg-[#FFE047] rounded-2xl hover:bg-[#EBCC33] cursor-pointer w-fit  "
        >
          <Image
            src={"/Vector (4).svg"}
            alt="date-icon"
            width={33}
            height={37}
            priority={true}
          />
          <span className="font-semibold text-xl tablet:text-2xl text-[#2B293D]">
            Create Event
          </span>
        </Link>
      </section>
      <section className="bg-[#FFE047] py-7 sm:py-14 px-[3rem] 2xl:px-[12rem] flex gap-[1rem] flex-col tablet:flex-row tablet:gap-[5rem] items-center">
        <div>
          <p className="font-medium text-2xl sm:text-4xl ">
            Subscribe to our Newsletter
          </p>
          <p className="text-[0.9rem] sm:text-[1.3rem] mt-1.5">
            Receive our weekly newsletter & updates with new events from your
            favourite organizers & venues.
          </p>
        </div>
        <div className="flex h-fit ">
          <input
            type="text"
            placeholder="Enter your e-mail address"
            className="outline-none py-2.5 sm:py-5  pl-5   sm:pl-7  sm:w-[28rem] rounded-l-xl bg-white border-tifyPurple border-[1px] pr-2 truncate text-[0.8rem]  sm:text-[1rem] "
          />
          <button className="text-[#FFE047]  bg-tifyPurple cursor-pointer hover:bg-[#413F53] py-2.5 sm:py-5 px-6 sm:px-8 font-bold  text-xl sm:text-2xl rounded-r-xl w-fit">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

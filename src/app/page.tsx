"use client";
import { useState, useEffect } from "react";
import CategorySelect from "@/components/atom/CategorySelect";
import Categories from "@/components/molecule/Categories";
import Hero from "@/components/molecule/Hero";
import { popularEventData } from "@/data";
import EventDetails from "@/components/molecule/EventDetails";
import { useRouter } from "next/navigation";

function Page() {
  interface DataProp {
    img: string;
    location: string;
    month: string;
    day: string;
    title: string;
    time: string;
    price: string;
    fav: string;
    date: string;
  }

  const navigate = useRouter().push
  const [filerWith, setFilterWith] = useState("");
  const [datatoBeMap, setDataToMap] = useState<DataProp[]>([]);
  const [isActiveButton,setIsActiveButton] = useState<number>(1)
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
  const handleFilterButtonClick = (filter: string,ind: number) => {
    setFilterWith(filter)
    setIsActiveButton(ind)
  }
  return (
    <div>
      <Hero />
      <section className="my-[8.7rem] mx-[8rem] ">
        <header className="font-bold text-[2.5rem]">Explore Categories</header>
        <div className="mt-[3.125rem] flex justify-between px-8 ">
          <Categories text="Entertainment" src="/Image.svg" />
          <Categories text="Educational & Business" src="/Image (1).svg" />
          <Categories text="Cultural & Arts" src="/Image (2).svg" />
          <Categories text="Sports & Fitness" src="/Image (3).svg" />
          <Categories text="Technology & Innovation" src="/Image (5).svg" />
          <Categories text="Travel & Adventure" src="/Image (4).svg" />
        </div>
      </section>
      <section className="mx-[8rem] mb-[9.3rem]">
        <header className="font-bold text-4xl">Popular Events in Mumbai</header>
        <div className="mt-[2rem] mb-16 flex gap-5">
            <CategorySelect
              onClick={() => handleFilterButtonClick("All",1)}
              background="white"
              border="#6F6F6F"
              title="All"
              isActive={isActiveButton === 1}
            />
            <CategorySelect
              onClick={() => handleFilterButtonClick("today",2)}
              background="white"
              border="#6F6F6F"
              title="Today"
              isActive={isActiveButton === 2}
            />
            <CategorySelect
              onClick={() => handleFilterButtonClick("tomorrow",3)}
              background="white"
              border="#6F6F6F"
              title="Tomorrow"
              isActive={isActiveButton === 3}
            />
            <CategorySelect
              onClick={() => handleFilterButtonClick("weekend",4)}
              background="white"
              border="#6F6F6F"
              title="This Weekend"
              isActive={isActiveButton === 4}
            />
            <CategorySelect
              onClick={() => handleFilterButtonClick("free",5)}
              background="white"
              border="#6F6F6F"
              title="Free"
              isActive={isActiveButton === 5}
            />
        </div>
        <main className="flex flex-wrap gap-x-10 gap-y-10 mb-[3.75rem]">
          {datatoBeMap.map((detail, ind) => (
            <EventDetails key={ind} {...detail} />
          ))}
        </main>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/events")}
            className="py-[1.15rem] px-[15.6rem] hover:bg-tifyPurple text-tifyPurple hover:text-white font-semibold text-2xl w-fit bg-white border-[2px] border-tifyPurple rounded-xl  cursor-pointer "
          >
            See More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Page;

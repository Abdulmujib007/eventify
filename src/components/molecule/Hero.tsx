'use client'

import Image from "next/image";
import { useState } from "react";

function Hero() {
  const [location,setLocation] = useState(false)

  const handleShowLocations = () => {
    setLocation(prev => !prev)
  }
  return (
    <div className="heroBackground text-[#fff] h-[36rem] flex items-start justify-center flex-col font-bold text-5xl   gap-14 w-full">
      <section className="pl-[13rem] leading-[4.4rem]">
        <p>Dont miss out!</p>
        <p>
          Explore the <span className="text-tifyYellow">vibrant events</span>{" "}
          happening locally and globally.{" "}
        </p>
      </section>
      <section className="w-full flex justify-between ">
        <form>
          <div>
            <Image
              src="/Ellipse 1.svg"
              alt="search-image"
              width={25}
              height={25}
            />
            <input type="text" />
          </div>
          <Image
            alt="cancel-img"
            src={"/Close button.svg"}
            width={30}
            height={30}
          />
        </form>
        <main>
          <div onClick={handleShowLocations}>
            <div>
              <Image
                src={"/Location icon.svg"}
                alt="location-image"
                width={22}
                height={30}
              />
              <span>Mumbai</span>
            </div>
            {location && (
              <Image
                alt="arrow-svg"
                src={"/Vector 3.svg"}
                width={18}
                height={9}
              />
            )}
            {!location && (
              <Image
                alt="arrow-svg"
                src={"/Vector 3 (1).svg"}
                width={18}
                height={9}
              />
            )}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Hero;

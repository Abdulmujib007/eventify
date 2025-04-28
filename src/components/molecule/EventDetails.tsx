import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EVentProp {
  img: string;
  location: string;
  month: string;
  day: string;
  title: string;
  time: string;
  price: string;
  fav: string;
}

function EventDetails({
  img,
  location,
  month,
  day,
  title,
  time,
  price,
  fav,
}: EVentProp) {
  return (
    <Link href={''} className="flex flex-col w-[28rem] gap-5 pb-14 detailShadow">
      <Image className="rounded-t-[10px]" src={img} alt="picture" width={512} height={254} />
      <main className="flex px-5 gap-5 ">
        <section className="'flex flex-col min-w-max  gap-1 mt-1">
          <p className="text-[#4539B4] font-semibold text-xl text-center">
            {month}
          </p>
          <p className="font-bold text-[1.6rem]">{day}</p>
        </section>
        <section className="flex flex-col gap-y-2.5">
          <span className="text-[22px] font-semibold  ">{location}</span>
          <span className="font-semibold ">{title}</span>
          <span className="text">{time}</span>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1.5 items-center">
              <Image
                src={"/Vector (3).svg"}
                alt="price-icon"
                width={22}
                height={22}
              />
              {price}
            </div>
            <Image
              src={"/Ellipse 8 (1).svg"}
              alt="circle-icon"
              width={5}
              height={5}
            />
            <div className="flex gap-1.5 items-center">
              <Image
                src={"/Star 1.svg"}
                alt="star-icon"
                width={21}
                height={21}
              />
              {fav}
            </div>
          </div>
        </section>
      </main>
    </Link>
  );
}

export default EventDetails;

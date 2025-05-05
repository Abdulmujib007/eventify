/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @next/next/no-img-element */
'use client'

import EventDetails from "@/components/molecule/EventDetails"
import { allHomeEventData } from "@/data"
import Image from "next/image"
import { useParams,useRouter } from "next/navigation"

function EachEventPage() {
    const router = useRouter()
    const params = useParams()
    const eventInfo = allHomeEventData.find(data => (
          data.id === Number(params.id)
    ))
  return (
    <div className="">
      <main className="flex ml-11 mr-[9.35rem] items-start mt-10 mb-24">
        <Image
          onClick={() => router.back()}
          className="mt-[3rem] cursor-pointer"
          src={"/navigateBackIcon.svg"}
          alt="back-icon"
          width={25}
          height={25}
        />
        <div className=" ml-[4rem] w-full">
          <div className="w-[100%]">
            <Image
              className="rounded-3xl"
              src={eventInfo?.img!}
              alt=""
              width={0}
              height={0}
              // layout="fill"
              // objectFit="cover"
              sizes="100wv"
              style={{ width: "100%", height: "35rem"}}
            />
          </div>

          <main className="flex flex-col gap-y-[5rem] mt-[2.5rem] w-full ">
            <section className="font-extrabold text-[4.25rem] flex  justify-between items-center w-full ">
              <header className="">{eventInfo?.location}</header>
              <div className="flex gap-7 w-fit ">
                <Image
                  src={"/Star 2.svg"}
                  alt="star-icon"
                  width={30}
                  height={30}
                />
                <Image
                  src={"/Group 4.svg"}
                  alt="share-icon"
                  width={30}
                  height={30}
                />
              </div>
            </section>
            <section className="flex justify-between w-full">
              <div className="flex flex-col gap-[1.375rem]">
                <header className="font-bold text-4xl mb-1.5">
                  Date and Time
                </header>
                <div className="flex gap-5 items-center w-full">
                  <img className="w-6 h-6" src="/Vector 4.svg" alt="" />
                  <span className="font-semibold text-2xl">
                    {eventInfo?.day}, {eventInfo?.month}
                  </span>
                </div>
                <div className="flex gap-5 items-center">
                  <img className="w-6 h-6" src="/Group.svg" alt="" />
                  <span className="font-semibold text-2xl">
                    {eventInfo?.time}
                  </span>
                </div>
                <p className="ml-8 font-semibold text-2xl text-[#4539B4]">
                  + Add to Calendar
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <div className="mb-10 ">
                  <button className="flex gap-3 py-6 px-16 bg-[#FFE047] rounded-xl items-center cursor-pointer">
                    <img src="/ion_ticket.svg" className="w-6 h-6" alt="" />
                    <span className="text-3xl font-semibold">Buy Tickets</span>
                  </button>
                </div>
                <header className="font-bold text-4xl mb-1.5">
                  Ticket Information
                </header>
                <div className="flex gap-3 items-center">
                  <img src="/ion_ticket.svg" className="w-6 h-6" alt="" />
                  <span className="text-xl font-semibold">
                    Standard ticket: {eventInfo?.price} each
                  </span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-7 w-full">
              <header className="font-bold text-4xl">Location</header>
              <div className="flex gap-5 items-center">
                <img src="/Location icon.svg" className="w-6 h-6" alt="" />
                <span className="font-semibold text-2xl">
                  {eventInfo?.title}
                </span>
              </div>
              <div className="w-full">
                <img className="" src="/Map.jpg" alt="" />
              </div>
            </section>
            <section className="w-full">
              <header className="font-bold text-4xl">Hosted by</header>{" "}
              <div className="mt-[2.625rem] flex gap-8">
                <img src="/Host Profile Image (1).svg" alt="" />
                <div className="flex flex-col justify-between">
                  <span className="font-semibold text-[1.75rem]">
                    Asiyanbi Abdulmujib
                  </span>
                  <div className="flex gap-3.5">
                    <button className="w-fit font-semibold text-2xl py-1.5 px-4 border-[1px] border-[#2B293D] rounded-lg cursor-pointer ">
                      Contact
                    </button>
                    <button className="w-fit font-semibold text-xl py-2.5 px-6 text-white bg-[#2B293D] rounded-lg cursor-pointer ">
                      + Follow
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full">
              <header className="font-bold text-4xl">Event Description</header>
              <div className="mt-[1.875rem] text-xl font-sans italic leading-8">
                <p className="mb-[2rem]">
                  {" "}
                  Event Description Get ready to kick off the Christmas season
                  in Mumbai with{" "}
                  <span className="font-semibold">
                    SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!{" "}
                  </span>{" "}
                </p>
                <p className="mb-[1rem]">
                  {" "}
                  City Youth Movement invites you to the 4th edition of our
                  annual Christmas festivities - by the youth and for the youth!
                  Feat. your favourite worship leaders, carols, quizzes and some
                  exciting surprises!{" "}
                </p>
                <p className="mb-[1rem] ">
                  {" "}
                  Bring your family and friends and sing along your favourite
                  Christmas carols on the 2nd of December, 6:30 PM onwards at
                  the Balgandharva Rang Mandir, Bandra West. Book your tickets
                  now!
                </p>
                <h3 className="font-semibold mb-[1rem] ">
                  3 Reasons to attend the event:
                </h3>
                <p className="">1. The FIRST Christmas concert of Mumbai! </p>
                <p>2. A special Christmas Choir!</p>
                <p>3. Special Dance performances and many more surprises!</p>
              </div>
            </section>
            <section className="pb-[5rem] border-b-[1px] border-b-[#6F6F6F] ">
              <header className="font-bold text-4xl">Tags</header>
              <div className="w-[80%] flex flex-wrap gap-x-7 gap-y-10 mt-9">
                <p className="py-3 px-7 text-lg bg-[#F8F7FA] rounded-full ">
                  Holiday Concert
                </p>
                <p className="py-3 px-7 text-lg bg-[#F8F7FA] rounded-full ">
                  Live Performance
                </p>
                <p className="py-3 px-7 text-lg bg-[#F8F7FA] rounded-full ">
                  Seasonal Event
                </p>
                <p className="py-3 px-7 text-lg bg-[#F8F7FA] rounded-full ">
                  Family Friendly
                </p>
                <p className="py-3 px-7 text-lg bg-[#F8F7FA] rounded-full ">
                  #Christmas_Spirit
                </p>
                <p className="py-3 px-7 text-lg bg-[#F8F7FA] rounded-full ">
                  #Christmas_Carols
                </p>
              </div>
            </section>
          </main>
        </div>
      </main>
      <header className="font-bold text-4xl mb-12 ml-[9.35rem]">
        Other events you may like
      </header>
      <section className="flow-section pb-10">
        <div className="flex gap-x-10 mb-1 w-max ">
          {allHomeEventData.map((data) => (
            <div key={data.id}>
              <EventDetails key={data.id} {...data} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EachEventPage
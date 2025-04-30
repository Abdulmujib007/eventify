'use client'

import { useState } from "react"
import ProgressBar from "@/components/atom/ProgressBar"
import Image from "next/image";
import CreateNewEvent from "@/components/molecule/CreateNewEvent";

type ProgressProp =   "edit" | "banner" | "ticketing" | "review";
 

const CreateEventPage = () => {
    const [toShow,setToShow] = useState<ProgressProp>('edit')
    return (
      <div>
        <section
          onClick={() => setToShow("banner")}
          className="my-16 ml-11 flex gap-[4.5rem] items-start"
        >
          <Image
            className="mt-3.5"
            src={"/navigateBackIcon.svg"}
            alt="back-btn"
            width={30}
            height={30}
          />
          {toShow === "edit" ? (
            <header className="font-bold  text-5xl">Create a New Event</header>
          ) : (
            <div className="flex gap-y-2.5 flex-col">
              <header className="font-bold text-5xl">Event Title</header>
              <span className="font-semibold text-3xl">Location</span>
              <span className="font-semibold text-3xl">Time</span>
            </div>
          )}
        </section>
        <section className="mx-[9.375rem] mb-[8.75rem]">
          <ProgressBar progress={toShow} />
        </section>
        <section className=" ml-[9.375rem] mb-[5.625rem]">
          <CreateNewEvent />
        </section>
      </div>
    );
}
export default CreateEventPage
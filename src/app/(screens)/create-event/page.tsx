"use client";

import { useState } from "react";
import ProgressBar from "@/components/atom/ProgressBar";
import Image from "next/image";
import CreateNewEvent from "@/components/molecule/CreateNewEvent";
import { useRouter } from "next/navigation";
import NewEventImageUpload from "@/components/molecule/NewEventImageUpload";
import NewEventTicketing from "@/components/atom/NewEventTicketing";
import NewEventReview from "@/components/organism/NewEventReview";

type ProgressProp = "edit" | "banner" | "ticketing" | "review";

const CreateEventPage = () => {
  const [toShow, setToShow] = useState<ProgressProp>("edit");
  const router = useRouter();

  const handleBackText = () => {
    if (toShow === "banner") {
      setToShow("edit");
    } else if (toShow === "ticketing") {
      setToShow("banner");
    } else if (toShow === "review") {
      setToShow("ticketing");
    }
  };

  const handleBtnClick = () => {
    if (toShow === "edit") {
      setToShow("banner");
    } else if (toShow === "banner") {
      setToShow("ticketing");
    } else if (toShow === 'ticketing'){
      setToShow('review')
    }
    else if (toShow === "review") {
      router.push("/");
    }
  };

  const handleNavigateBack = () => {
     if (toShow === "edit") {
        router.back();
     } else if (toShow === "banner") {
       setToShow("edit");
     } else if (toShow === "ticketing") {
       setToShow("banner");
     } else if (toShow === 'review'){
        setToShow('ticketing')
     }
  }

  return (
    <div>
      <section
        className="my-16 ml-11 flex gap-[4.5rem] items-start"
      >
        <Image
          className="mt-3.5 hover:cursor-pointer"
          onClick={handleNavigateBack}
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
      <section className=" mx-[9.375rem] mb-[5.625rem] overflow-x-hidden">
        {toShow === "edit" && (
          <CreateNewEvent handleBtnClick={handleBtnClick} />
        )}
        {toShow === "banner" && (
          <NewEventImageUpload
            handleBack={handleBackText}
            handleForward={handleBtnClick}
          />
        )}
        {toShow === "ticketing" && <NewEventTicketing handleBack={handleBackText} handleForward={handleBtnClick} />}
        {toShow === "review" && (
         <NewEventReview handleBtnClick={handleBtnClick} />
        )}
      </section>
    </div>
  );
};
export default CreateEventPage;

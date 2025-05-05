/* eslint-disable @next/next/no-img-element */
import CreateEventBtn from "../atom/CreateEventBtn";

interface BtnProp {
  handleBtnClick: () => void;
}

function NewEventReview({ handleBtnClick }: BtnProp) {
  return (
    <div>
      <header className="text-2xl mb-[5.625rem]">
        Nearly there! Check everything’s correct.
      </header>
      <div className=" mx-[3rem] p-[3.125rem] border-[2px] border-[#2B293D] rounded-4xl  ">
        <img src="/Event Image.jpg" alt="" className="w-full h-[35.625rem]" />
        <main className="flex flex-col gap-y-[5rem] mt-[2.5rem] ">
          <header className="font-extrabold text-[4.25rem]">Event Title</header>
          <section className="flex justify-between">
            <div className="flex flex-col gap-[1.375rem]">
              <header className="font-bold text-4xl mb-1.5">
                Date and Time
              </header>
              <div className="flex gap-5 items-center">
                <img className="w-6 h-6" src="/Vector 4.svg" alt="" />
                <span className="font-semibold text-2xl">Day, Date</span>
              </div>
              <div className="flex gap-5 items-center">
                <img className="w-6 h-6" src="/Group.svg" alt="" />
                <span className="font-semibold text-2xl">Time</span>
              </div>
              <p className="ml-8 font-semibold text-2xl text-[#4539B4]">
                + Add to Calendar
              </p>
            </div>
            <div className="flex flex-col gap-7">
              <header className="font-bold text-4xl mb-1.5">
                Ticket Information
              </header>
              <div className="flex gap-5 items-center">
                <img src="/ion_ticket.svg" className="w-6 h-6" alt="" />
                <span className="text-2xl font-semibold">
                  Ticket Type: Price/ticket
                </span>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-7">
            <header className="font-bold text-4xl">Location</header>
            <div className="flex gap-5 items-center">
              <img src="/Location icon.svg" className="w-6 h-6" alt="" />
              <span className="font-semibold text-2xl">Address</span>
            </div>
            <div className="w-full">
              <img className="w-[50%]" src="/Map.jpg" alt="" />
            </div>
          </section>
          <section>
            <header className="font-bold text-4xl">Hosted by</header>{" "}
            <div className="mt-[2.625rem] flex gap-8">
              <img src="/Host Profile Image.svg" alt="" />
              <div className="flex flex-col justify-between">
                <span className="font-semibold text-[1.75rem]">Host Name</span>
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
          <section>
            <header className="font-bold text-4xl">Event Description</header>
            <p className="mt-[1.875rem] text-xl font-sans leading-8">
              Join us for an exciting and impactful event tailored to bring
              together passionate individuals, professionals, and industry
              leaders under one roof. This gathering is more than just an event
              — it is an experience filled with learning, connection, and
              inspiration. Whether you are here to gain new insights, expand your
              network, or simply engage with like-minded people, we have designed
              the day to offer something valuable for everyone. Expect a dynamic
              lineup of expert speakers, interactive sessions, and opportunities
              to explore innovative ideas and trends shaping the future. From
              hands-on workshops and panel discussions to live demos and
              creative showcases, this event is crafted to spark meaningful
              conversations and lasting connections. Don’t miss this opportunity
              to grow, connect, and be inspired.
            </p>
          </section>
        </main>
      </div>
      <div className="mt-[8.75rem] flex w-full justify-end gap-x-8 ">
        <button
          onClick={handleBtnClick}
          className="py-5 px-[4.2rem] bg-[#FFE047] rounded-xl w-fit cursor-pointer "
        >
          <span className="text-2xl font-bold text-[#2B293D]">
            Save for Later
          </span>
        </button>
        <CreateEventBtn text="Publish Event" onClick={handleBtnClick} />
      </div>
    </div>
  );
}

export default NewEventReview;

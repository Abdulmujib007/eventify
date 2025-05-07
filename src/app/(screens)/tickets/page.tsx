import EventDetails from "@/components/molecule/EventDetails";
import { allHomeEventData } from "@/data";
import Image from "next/image"

function TicketPage() {
  return (
    <div>
      <header className="font-bold text-4xl mt-10 mx-20">My Tickets</header>
      <section className=" w-full flex flex-col items-center gap-2 my-12 mx-20">
        <Image
          src={"/undraw_festivities_q090.png"}
          alt="event-img"
          width={0}
          height={0}
          style={{ width: "50%", height: "" }}
          unoptimized
        />
        <span className="text-lg italic font-semibold text-gray-500">
          You dont have any ticket yet.Book/Start planning an event.{" "}
        </span>
      </section>
      <header className="font-bold text-4xl mb-10 mx-20 mt-20">
        Events you may like
      </header>
      <section className="flow-section pb-10">
        <div className="flex gap-x-10  w-max ">
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

export default TicketPage
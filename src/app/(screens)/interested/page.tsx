'use client'

import { useRouter } from "next/navigation";
import Image from "next/image"
import { interestedData } from "@/data";
import EventDetails from "@/components/molecule/EventDetails";

const InterestedPage = () => {
        
        const router = useRouter()

    return (
      <div>
        <section className="mt-14 ml-9 mb-[5.625rem] flex gap-16">
          <Image
            onClick={() => router.back()}
            src={"/navigateBackIcon.svg"}
            alt="back-svg"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <p className="font-bold text-5xl">Interested Events</p>
        </section>
        <section className="mx-[8rem] flex flex-wrap gap-x-10 gap-y-10 mb-[10rem]">
            {
                interestedData.map((data,ind) => (
                    <EventDetails key={ind} {...data} />
                ))
            }
        </section>
      </div>
    );
}

export default InterestedPage
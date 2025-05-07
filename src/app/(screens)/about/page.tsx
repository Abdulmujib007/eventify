/* eslint-disable @next/next/no-img-element */
'use client'

import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter()

  const handleExplore = () => {
      router.push('/events')
  }
  return (
    <div className=" m-[10rem] h-screen  flex justify-center gap-24 items-center">
      <section className="relative flex items-center justify-center w-[50%] h-full">
        <img src="/undraw_festivities_q090.png" className="w-full h-full" alt="" />
      </section>
      <section className="w-[50%] h-full  ">
        <h1 className="text-tifyPurple text-xl font-semibold">A BIT</h1>
        <header className="text-5xl font-semibold mt-2.5 mb-7">ABOUT US</header>
        <p className="italic text-lg">
          Eventify is your modern solution for creating, discovering, and
          booking events effortlessly. Whether you are planning a concert, a
          meetup, a wedding, or a professional workshop, Eventify gives you the
          tools to organize and promote your event with ease. Users can explore
          upcoming events, secure their spots through a seamless booking
          experience, and receive instant confirmations. With a user-friendly
          interface, real-time updates, and intuitive event management, Eventify
          brings convenience and clarity to both organizers and attendees.
        </p>
        {/* <div className="btn-shadow w-fit min-h-min bg-[#ffffff]"> */}
          <button onClick={handleExplore} className="slanted-button">EXPLORE MORE</button>
        {/* </div> */}
      </section>
    </div>
  );
}

export default AboutPage;

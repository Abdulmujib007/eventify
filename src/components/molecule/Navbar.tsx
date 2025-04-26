"use client";

import Image from "next/image";
import NavLink from "../atom/NavLink";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileSvg from "../atom/ProfileSVG";

function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      className={`px-[5.56rem] flex justify-between items-end h-[4.2rem] bg-tifyPurple text-[#fff] ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : "flex"
      } `}
    >
      <section className="flex">
        <Image src={"/ticket.svg"} alt="ticket-img" width={65} height={45} />
        <p className="text-[2.67rem] text-tifyYellow font-bold font-sans">
          Eventify
        </p>
      </section>
      <NavLink />
      <section className="h-full">
        {!isLoggedIn && (
          <div className="text-lg font-medium flex h-full gap-7 items-center">
            <Link href={"/"}>
              <span className="p-0">Create Event</span>
            </Link>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
            <div className="h-full flex items-center">
              <button className="px-5 py-2 bg-tifyYellow rounded-[10px] text-black">
                Sign up
              </button>
            </div>
          </div>
        )}
        {isLoggedIn && (
          <div className="text-lg font-medium flex h-full gap-7 items-center">
            <Link href={"/"}>
              <span className="p-0">Create Event</span>
            </Link>
            <Link href={"/"}>
              <Image
                src={"/Ticket Button.svg"}
                alt="ticket-button"
                width={50}
                height={20}
              />
            </Link>
            <Link href={"/interested"}>
              <Image
                src={"/Interested Button.svg"}
                alt="ticket-button"
                width={74}
                height={20}
              />
            </Link>
            <div className="profile ">
              <Link href={"/"}>
                <ProfileSvg width={69} height={59} />
              </Link>
              <div className="dropdown ">qwerfdsaqsswesdddd</div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Navbar;

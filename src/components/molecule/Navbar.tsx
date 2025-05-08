"use client";

import Image from "next/image";
import NavLink from "../atom/NavLink";
// import { useEffect,useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProfileSvg from "../atom/ProfileSvg";
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
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
            <Link href={"/login"}>
              <span className="p-0">Create Event</span>
            </Link>
            <Link href={"/login"}>Login</Link>
            <div className="h-full flex items-center">
              <Link
                href={"/signup"}
                className="px-5 py-2 bg-tifyYellow rounded-[10px] text-black"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
        {isLoggedIn && (
          <div className="text-lg font-medium flex h-full gap-7 items-center">
            <Link href={`/create-event`}>
              <span className="p-0 cursor-pointer">Create Event</span>
            </Link>
            <Link href={"/tickets"}>
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
              <div>
                <ProfileSvg width={69} height={59} />
              </div>
              <div className="dropdown font-medium text-xl ">
                <Link
                  className=" w-full py-5 pl-5 hover:bg-gray-300 "
                  href={"/interest"}
                >
                  Interests
                </Link>
                <Link
                  className=" w-full py-5 pl-5 hover:bg-gray-300 "
                  href={"/account-settings"}
                >
                  Account Settings
                </Link>
                <button
                  className="w-full py-5 pl-5 hover:bg-gray-300 text-left cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Navbar;

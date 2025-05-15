"use client";

import Image from "next/image";
import NavLink from "../atom/NavLink";
// import { useEffect,useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProfileSvg from "../atom/ProfileSvg";
import ProfileSvg2 from "../atom/ProfileSvg2";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/");
    setIsMenuOpen(false);
  };
  return (
    <nav
      className={`w-full px-[1.5rem] xl:px-[5.56rem]  flex-col tablet:justify-between justify-end tablet:items-end items-start   bg-tifyPurple  text-[#fff] ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : "flex"
      }  `}
    >
      <div className="flex w-full tablet:items-end items-center  justify-between ">
        <section className="flex h-full items-center ">
          <Image
            src={"/ticket.svg"}
            alt="ticket-img"
            className="tablet:w-[4.0625rem] w-[3rem] h-[2.8rem] tablet:h-[2.8125rem]"
            width={0}
            height={0}
          />
          <p className=" text-[1.5rem] tablet:text-[2.67rem] text-tifyYellow font-bold font-sans">
            Eventify
          </p>
        </section>
        <section className=" hidden tablet:block">
          <NavLink />
        </section>

        <section className="flex items-center gap-x-5 tablet:hidden">
          {isLoggedIn && (
            <div
              className={` ${
                isLoggedIn ? "block" : "hidden"
              } text-lg font-medium flex h-full gap-7 items-center`}
            >
              <div className="profile z-50 ">
                <div className="profile-icon">
                  <ProfileSvg className="icon1" width={69} height={59} />
                  <ProfileSvg2 className="icon2" width={69} height={59} />
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

          <div>
            {!isMenuOpen && (
              <Image
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                src={"/menu-line (1).svg"}
                alt="menu-icon"
                width={30}
                height={20}
              />
            )}
            {isMenuOpen && (
              <Image
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                src={"/close-large-fill (1).svg"}
                alt="close-icon"
                width={30}
                height={20}
              />
            )}
          </div>
        </section>

        <section className="h-full tablet:block hidden ">
          {!isLoggedIn && (
            <div
              className={` flex  text-lg font-medium  h-full gap-7 items-center`}
            >
              <Link href={"/login"}>
                <span className="p-0 hover:text-tifyYellow">Create Event</span>
              </Link>
              <Link className="hover:text-tifyYellow" href={"/login"}>
                Login
              </Link>
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
            <div
              className={` 
             text-lg font-medium  h-full gap-7 items-center tablet:flex `}
            >
              <Link href={`/create-event`}>
                <span
                  className={`p-0 hover:text-tifyYellow cursor-pointer ${
                    pathname === "/create-event"
                      ? "text-tifyYellow"
                      : "text-white"
                  } `}
                >
                  Create Event
                </span>
              </Link>
              <Link className="nav-link" href={"/tickets"}>
                <Image
                  className={`${
                    pathname === "/tickets" ? "hidden" : " nav-icon1"
                  }`}
                  src={"/Ticket Button.svg"}
                  alt="ticket-button"
                  width={50}
                  height={20}
                />
                <Image
                  className={`nav-icon2`}
                  src={"/Property 1=Hover.svg"}
                  alt="ticket-icon"
                  width={50}
                  height={20}
                />

                <Image
                  className={`${
                    pathname === "/tickets" ? "nav-icon3" : "hidden"
                  }`}
                  src={"/Property 1=Hover.svg"}
                  alt="ticket-icon"
                  width={50}
                  height={20}
                />
              </Link>
              <Link className="nav-link" href={"/interested"}>
                <Image
                  className={`${
                    pathname === "/interested" ? "hidden" : "nav-icon1"
                  } `}
                  src={"/Interested Button.svg"}
                  alt="ticket-button"
                  width={74}
                  height={20}
                />

                <Image
                  className={` nav-icon2 `}
                  src={"/Property 1=Hover (1).svg"}
                  alt="ticket-button"
                  width={74}
                  height={20}
                />

                <Image
                  className={`${
                    pathname === "/interested" ? " nav-icon3 " : "hidden"
                  }   `}
                  src={"/Property 1=Hover (1).svg"}
                  alt="ticket-button"
                  width={74}
                  height={20}
                />
              </Link>
              <div className="profile z-50 ">
                <div className="profile-icon">
                  <ProfileSvg className="icon1" width={69} height={59} />
                  <ProfileSvg2 className="icon2" width={69} height={59} />
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
      <div className="flex gap-5 tablet:hidden ">
        {isMenuOpen && (
          <section className="w-full flex flex-col gap-[1rem] justify-center ml-2 mb-[1rem] ">
            <NavLink />
            {!isLoggedIn && (
              <>
                <Link className="mt-[1rem] mb-[1rem]" href={"/login"}>
                  <span className="p-0 text-lg hover:text-tifyYellow">
                    Create Event
                  </span>
                </Link>
                <div
                  className={` text-lg font-medium flex h-full gap-7 items-center`}
                >
                  <Link className="hover:text-tifyYellow" href={"/login"}>
                    Login
                  </Link>
                  <div className="h-full flex items-center">
                    <Link
                      href={"/signup"}
                      className="px-5 py-2 bg-tifyYellow rounded-[10px] text-black"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link className=" text-lg my-[1rem]" href={`/create-event`}>
                  <span
                    className={`p-0 hover:text-tifyYellow cursor-pointer ${
                      pathname === "/create-event"
                        ? "text-tifyYellow"
                        : "text-white"
                    } `}
                  >
                    Create Event
                  </span>
                </Link>
                <div
                  className={` ${
                    isLoggedIn ? "block" : "hidden"
                  } text-lg font-medium flex h-full gap-7 items-center`}
                >
                  <Link className="nav-link" href={"/tickets"}>
                    <Image
                      className={`${
                        pathname === "/tickets" ? "hidden" : " nav-icon1"
                      }`}
                      src={"/Ticket Button.svg"}
                      alt="ticket-button"
                      width={50}
                      height={20}
                    />
                    <Image
                      className={`nav-icon2`}
                      src={"/Property 1=Hover.svg"}
                      alt="ticket-icon"
                      width={50}
                      height={20}
                    />

                    <Image
                      className={`${
                        pathname === "/tickets" ? "nav-icon3" : "hidden"
                      }`}
                      src={"/Property 1=Hover.svg"}
                      alt="ticket-icon"
                      width={50}
                      height={20}
                    />
                  </Link>
                  <Link className="nav-link" href={"/interested"}>
                    <Image
                      className={`${
                        pathname === "/interested" ? "hidden" : "nav-icon1"
                      } `}
                      src={"/Interested Button.svg"}
                      alt="ticket-button"
                      width={74}
                      height={20}
                    />

                    <Image
                      className={` nav-icon2 `}
                      src={"/Property 1=Hover (1).svg"}
                      alt="ticket-button"
                      width={74}
                      height={20}
                    />

                    <Image
                      className={`${
                        pathname === "/interested" ? " nav-icon3 " : "hidden"
                      }   `}
                      src={"/Property 1=Hover (1).svg"}
                      alt="ticket-button"
                      width={74}
                      height={20}
                    />
                  </Link>
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

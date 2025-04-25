"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Footer() {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname === "/login" || pathname === "/signup" ? "hidden" : "flex"
      } pb-5 pt-12 px-[8.3rem] text-footerText bg-tifyPurple w-full flex flex-col gap-4`}
    >
      <main className="pb-[3.7rem] border-b-[1px] border-b-footerText flex justify-between">
        <section className="text-sm flex flex-col gap-6">
          <header className="font-semibold text-lg text-white">
            Company Info
          </header>
          <p className="flex flex-col gap-2 font-sans ">
            <span>About Us</span>
            <span>Contact US</span>
            <span>Careers</span>
            <span>FAQs</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </p>
        </section>
        <section className=" text-sm flex flex-col gap-6">
          <header className="font-semibold text-lg text-white">Help</header>
          <p className="flex flex-col gap-2 font-sans ">
            <span>Account Support</span>
            <span>Listing Events</span>
            <span>Event Ticketing</span>
            <span>Ticket Purchase Terms & Conditions</span>
          </p>
        </section>
        <section className="text-sm flex flex-col gap-6">
          <header className="font-semibold text-lg text-white">
            Categories
          </header>
          <p className="flex flex-col gap-2 font-sans ">
            <span>Concerts & Gigs</span>
            <span>Festivals & Lifestyle</span>
            <span>Business & Networking</span>
            <span>Food & Drinks</span>
            <span>Performing Arts</span>
            <span>Sports & Outdoors</span>
            <span>Exhibitions</span>
            <span>Workshops, Conferences & Classes</span>
          </p>
        </section>
        <section className="text-sm flex flex-col gap-6">
          <header className="font-semibold text-lg text-white">
            Follow Us
          </header>
          <p className="flex flex-col gap-2 font-sans ">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Youtube</span>
          </p>
        </section>
        <section className="flex flex-col gap-6">
          <header className="font-semibold text-lg text-white">
            Download The App
          </header>
          <div className="flex flex-col gap-5">
            <Image
              src={"/App icon + Text.png"}
              alt="app-download"
              width={150}
              height={30}
            />
            <Image
              src={"/App icon + Text (1).png"}
              alt="app-download"
              width={150}
              height={30}
            />
          </div>
        </section>
      </main>
      <p className="text-sm w-full  text-center">
        <span>&#169;</span> 2023 Eventify. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

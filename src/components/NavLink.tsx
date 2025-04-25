"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex gap-[2rem]">
      <Link href={"/"}>
        <p
          className={`${
            pathname === "/" ? "border-b-[3px] border-b-tifyYellow font-semibold" : ""
          } pb-4 font-medium text-2xl hover:border-b-[3px] border-b-tifyYellow `}
        >
          Home
        </p>
      </Link>
      <Link href={"/events"}>
        <p
          className={`${
            pathname === "/events" ? "border-b-[3px] border-b-tifyYellow font-semibold " : ""
          } pb-4 font-medium text-2xl hover:border-b-[3px] border-b-tifyYellow `}
        >
          Events
        </p>
      </Link>
      <Link href={"/about"}>
        <p
          className={`${
            pathname === "/about" ? "border-b-[3px] border-b-tifyYellow font-semibold" : ""
          } pb-4 font-medium text-2xl hover:border-b-[3px] border-b-tifyYellow `}
        >
          About
        </p>
      </Link>
      <Link href={"/contact"}>
        <p
          className={`${
            pathname === "/contact" ? "border-b-[3px] border-b-tifyYellow font-semibold" : ""
          } pb-4 font-medium text-2xl hover:border-b-[3px] border-b-tifyYellow `}
        >
          Contact
        </p>
      </Link>
    </div>
  );
}

export default NavLink;

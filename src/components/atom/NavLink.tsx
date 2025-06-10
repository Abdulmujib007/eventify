"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink() {
  const pathname = usePathname();
  return (
    <div className="flex tablet:flex-row flex-col  gap-[2rem]">
      <Link href={"/"}>
        <p
          className={`${
            pathname === "/"
              ? "border-b-[3px] border-b-tifyYellow font-semibold"
              : ""
          } tablet:pb-4 font-medium text-lg hover:border-b-[3px] border-b-tifyYellow w-fit transition-all duration-100 ease-out`}
        >
          Home
        </p>
      </Link>
      <Link href={"/events"}>
        <p
          className={`${
            pathname === "/events"
              ? "border-b-[3px] border-b-tifyYellow font-semibold "
              : ""
          } tablet:pb-4 font-medium text-lg hover:border-b-[3px] border-b-tifyYellow w-fi transition-all duration-100 ease-out `}
        >
          Events
        </p>
      </Link>
      <Link href={"/about"}>
        <p
          className={`${
            pathname === "/about"
              ? "border-b-[3px] border-b-tifyYellow font-semibold"
              : ""
          } tablet:pb-4 font-medium text-lg hover:border-b-[3px] border-b-tifyYellow w-fit transition-all duration-100 ease-out `}
        >
          About
        </p>
      </Link>
      <Link href={"/contact"}>
        <p
          className={`${
            pathname === "/contact"
              ? "border-b-[3px] border-b-tifyYellow font-semibold"
              : ""
          } tablet:pb-4 font-medium text-lg hover:border-b-[3px] border-b-tifyYellow w-fit transition-all duration-100 ease-out `}
        >
          Contact
        </p>
      </Link>
    </div>
  );
}

export default NavLink;

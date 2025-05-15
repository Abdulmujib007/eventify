"use client";

import { useRouter } from "next/navigation";

function SeeMoreBtn({ path }: { path: string }) {
  const navigate = useRouter().push;
  return (
    <button
      onClick={() => navigate(path)}
      className="sm:mx-auto py-[0.8rem] sm:py-[1.15rem] md:px-[15.6rem] px-[30%] hover:bg-tifyPurple text-tifyPurple hover:text-white font-semibold text-2xl w-fit bg-white border-[2px] border-tifyPurple rounded-xl  cursor-pointer"
    >
      See More
    </button>
  );
}

export default SeeMoreBtn;

'use client'

import { useRouter } from "next/navigation";

function SeeMoreBtn({path} : {path:string}) {
    const navigate = useRouter().push
  return (
    <button
      onClick={() => navigate(path)}
      className="mx-auto py-[1.15rem] px-[15.6rem] hover:bg-tifyPurple text-tifyPurple hover:text-white font-semibold text-2xl w-fit bg-white border-[2px] border-tifyPurple rounded-xl  cursor-pointer"
    >
      See More
    </button>
  );
}

export default SeeMoreBtn
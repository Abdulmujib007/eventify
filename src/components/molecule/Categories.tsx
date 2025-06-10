import Image from "next/image";
import Link from "next/link";
import React from "react";

function Categories({ src, text }: { src: string; text: string }) {
  return (
    <Link
      href={"/events"}
      className="flex flex-col gap-7 w-[12rem] items-center "
    >
      <Image
        className="xl:w-[10.625rem] w-[5rem] h-[5rem] xl:h-[10.625rem]  "
        src={src}
        alt="categories"
        width={0}
        height={0}
        priority={true}
      />
      <p className="font-semibold  text-sm xl:text-xl text-center">{text}</p>
    </Link>
  );
}

export default Categories;

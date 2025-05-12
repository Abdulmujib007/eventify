import Image from "next/image";

function ShareToSocials({
  imgSrc,
  share,
}: {
  imgSrc: string;
  share: () => void;
}) {
  return (
    <button
      onClick={share}
      className=" w-fit p-4 rounded-full hover:bg-gray-300 cursor-pointer "
    >
      <Image src={imgSrc} alt="Fb-icon" width={30} height={30} />
    </button>
  );
}

export default ShareToSocials;

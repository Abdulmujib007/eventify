import Image from "next/image";

interface ProgressProp {
    progress: 'edit' | 'banner' | 'ticketing' | 'review'
}

function ProgressBar({ progress }: ProgressProp) {
  return (
    <div className="w-full flex justify-center">
      <main className="flex flex-col items-center w-[25%]">
        <section className="flex items-center w-full">
          <div className="border-b-[2px] border-b-[#2B293D] w-[47.25%] "> </div>
          <Image
            src={"/Ellipse 32.svg"}
            alt="circle-image"
            width={24}
            height={24}
          />
          <div className="border-b-[2px] border-b-[#2B293D] w-[47.25%] "> </div>
        </section>
        <span className="font-semibold text-2xl">Edit</span>
      </main>
      <main className="flex flex-col items-center w-[25%]">
        <section className="flex items-center w-full">
          <div
            className={`border-b-[2px] ${
              progress === "banner" ||
              progress === "ticketing" ||
              progress === "review"
                ? "border-b-[#2B293D]"
                : "border-b-[#6F6F6F] opacity-40"
            }  w-[47.2%] `}
          >
            {" "}
          </div>
          {progress === "banner" ||
          progress === "ticketing" ||
          progress === "review" ? (
            <Image
              src={"/Ellipse 32.svg"}
              alt="progressSvg"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/Ellipse 32 (1).svg"}
              alt="progressSvg"
              width={24}
              height={24}
            />
          )}

          <div
            className={`border-b-[2px] ${
              progress === "banner" ||
              progress === "ticketing" ||
              progress === "review"
                ? "border-b-[#2B293D]"
                : "border-b-[#6F6F6F] opacity-40"
            }  w-[47.2%] `}
          >
            {" "}
          </div>
        </section>
        <span className="font-semibold text-2xl">Banner</span>
      </main>
      <main className="flex flex-col items-center w-[25%]">
        <section className="flex items-center w-full">
          <div
            className={`border-b-[2px] ${
              progress === "ticketing" || progress === "review"
                ? "border-b-[#2B293D]"
                : "border-b-[#6F6F6F] opacity-40"
            }  w-[47.2%] `}
          >
            {" "}
          </div>
          {progress === "ticketing" || progress === "review" ? (
            <Image
              src={"/Ellipse 32.svg"}
              alt="progressSvg"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/Ellipse 32 (1).svg"}
              alt="progressSvg"
              width={24}
              height={24}
            />
          )}

          <div
            className={`border-b-[2px] ${
              progress === "ticketing" || progress === "review"
                ? "border-b-[#2B293D]"
                : "border-b-[#6F6F6F] opacity-40"
            }  w-[47.2%] `}
          >
            {" "}
          </div>
        </section>
        <span className="font-semibold text-2xl">Ticketing</span>
      </main>
      <main className="flex flex-col items-center w-[25%]">
        <section className="flex items-center w-full">
          <div
            className={`border-b-[2px] ${
              progress === "review"
                ? "border-b-[#2B293D]"
                : "border-b-[#6F6F6F] opacity-40"
            }  w-[47.2%] `}
          >
            {" "}
          </div>
          {progress === "review" ? (
            <Image
              src={"/Ellipse 32.svg"}
              alt="progressSvg"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/Ellipse 32 (1).svg"}
              alt="progressSvg"
              width={24}
              height={24}
            />
          )}

          <div
            className={`border-b-[2px] ${
              progress === "review"
                ? "border-b-[#2B293D]"
                : "border-b-[#6F6F6F] opacity-40"
            }  w-[47.2%] `}
          >
            {" "}
          </div>
        </section>
        <span className="font-semibold text-2xl">Review</span>
      </main>
    </div>
  );
}

export default ProgressBar;

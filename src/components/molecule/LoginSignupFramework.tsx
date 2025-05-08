import Image from "next/image";
import Input from "../atom/Input";
import Link from "next/link";
// import { FormEventHandler } from "react";

interface LoginSignupProp {
  header: "Create Account" | "Login";
  footer: "Sign up" | "Log In";
  linkTo: string;
  onClick2: (e: React.FormEvent) => void;
  backBtnClick: () => void;
  value1?: string;
  value2: string;
  value3: string;
  onChange1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading : boolean
}

const LoginSignupFramework = ({
  header,
  footer,
  linkTo,
  onClick2,
  backBtnClick,
  value1,
  value2,
  value3,
  onChange2,
  onChange3,
  onChange1,
  loading
}: LoginSignupProp) => {
  return (
    <div className="bg-tifyPurple w-full h-full flex">
      <section className="w-[40%]">
        <div className="mt-[1.875rem] ml-[1.875rem] flex">
          <Image src={"/ticket.svg"} alt="ticket-img" width={65} height={45} />
          <p className="text-[2.67rem] text-tifyYellow font-bold font-sans">
            Eventify
          </p>
        </div>
        <div className="mt-32 ml-[4rem] mr-[3.47rem] font-bold text-[2.75rem] text-white font-serif leading-16">
          <p className="">Discover tailored events.</p>
          <p> Sign up for personalized recommendations today!</p>
        </div>
      </section>
      <section className="w-[60%]  bg-[#fff] rounded-l-[3rem] py-[4rem]">
        <div className="flex w-full justify-end pr-12">
          <Image
            onClick={backBtnClick}
            src={"/Close button.svg"}
            alt="close-btn"
            width={38}
            height={38}
            className="cursor-pointer"
          />
        </div>
        <div className="px-[9rem]  mt-1">
          <header className="font-bold text-5xl">{header}</header>
          <main className="mt-14 flex flex-col gap-y-10">
            <section className="flex gap-[3.625rem]">
              <div className="flex gap-3.5 border-[2px] border-[#A3A3A3] rounded-xl py-4 px-14 items-center w-fit hover:bg-[#F2F2F2]">
                <Image
                  src={"/icons8-google 1.svg"}
                  alt="google-svg"
                  width={36}
                  height={36}
                />
                <span className="text-lg text-[#2D2C3C]  ">
                  Sign up with Google
                </span>
              </div>
              <div className="flex gap-3.5 border-[2px] border-[#A3A3A3] rounded-xl py-4 px-11 items-center w-fit hover:bg-[#F2F2F2]">
                <Image
                  src={"/Icon.svg"}
                  alt="google-svg"
                  width={36}
                  height={36}
                />
                <span className="text-lg text-[#2D2C3C]  ">
                  Sign up with Facebook
                </span>
              </div>
            </section>
            <section className="flex items-center  gap-4">
              <div className="border-b-[1px] border-b-[#6F6F6F] w-[44.5%]"></div>
              <span className="text-2xl text-[#A3A3A3]">OR</span>
              <div className="border-b-[1px] border-b-[#6F6F6F] w-[44.5%]"></div>
            </section>
            <form onSubmit={onClick2} className="flex flex-col gap-[1.875rem]">
              {header === "Create Account" && (
                <Input
                  headerText="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  value={value1}
                  onChange={onChange1}
                />
              )}

              <Input
                headerText="E-mail Address"
                placeholder="Enter your e-mail"
                type="email"
                onChange={onChange2}
                value={value2}
              />
              <Input
                headerText="Password"
                placeholder="Enter password"
                type="password"
                onChange={onChange3}
                value={value3}
              />
              <button
                // href={linkTo}
                className="font-bold text-2xl text-white bg-tifyPurple rounded-2xl py-4 cursor-pointer text-center hover:bg-[#444256]"
              >
                {
                  loading ? 'Loading...' : header
                }
              </button>
              <div className="text-xl text-[#636363] flex gap-2">
                <p>
                  {footer === "Log In"
                    ? "Already have an account?"
                    : "Don’t have an account?"}
                </p>
                <Link
                  href={linkTo}
                  className="cursor-pointer hover:border-b-[1px] hover:border-b-tifyPurple"
                  //   onClick={onClick2}
                >
                  {footer}
                </Link>
              </div>
            </form>
          </main>
        </div>
      </section>
    </div>
  );
};
export default LoginSignupFramework;

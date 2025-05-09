"use client";

import LoginSignupFramework from "@/components/molecule/LoginSignupFramework";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { userSignup } from "@/utils/helper";
import { AxiosError } from "axios";

const SignupPage = () => {
  const navigate = useRouter();
  const [signupDetails, setSignupDetails] = useState<{
    fullname: string;
    email: string;
    password: string;
  }>({ fullname: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails({ ...signupDetails, fullname: e.target.value });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails({ ...signupDetails, email: e.target.value });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails({ ...signupDetails, password: e.target.value });
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await userSignup({
        email: signupDetails.email,
        password: signupDetails.password,
        firstName: "Abdul",
        lastName: "Mujib",
      });
      if (data) {
        toast(
          "Account created successfully,You will be redirected to the Login page shortly.",
          {
            style: { backgroundColor: "#2b293d",color:'white' },
          }
        );
        setTimeout(() => {
          navigate.push("/login");
        }, 4000);
      }
    } catch (err: unknown) {
       if(err instanceof AxiosError){
         toast(err.response?.data.message, {
           style: { backgroundColor: "#2b293d", color: "white" },
         });
         return
       }
        toast("Server down at the moment,pls try again later!", {
          style: { backgroundColor: "#2b293d", color: "white" },
        });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackBtn = () => {
    navigate.back();
  };

  return (
    <>
      <LoginSignupFramework
        footer="Log In"
        header="Create Account"
        linkTo="/login"
        onClick2={handleCreateAccount}
        backBtnClick={handleBackBtn}
        loading={isLoading}
        onChange1={handleNameChange}
        onChange2={handleEmailChange}
        onChange3={handlePasswordChange}
        value1={signupDetails.fullname}
        value2={signupDetails.email}
        value3={signupDetails.password}
      />
      <ToastContainer 
      autoClose={3000}
      pauseOnHover
      />
    </>
  );
};
export default SignupPage;

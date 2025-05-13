"use client";

import LoginSignupFramework from "@/components/molecule/LoginSignupFramework";
import { useRouter } from "next/navigation";
import { userLogin } from "@/utils/helper";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { useAuth } from "../../../../context/AuthContext";

interface LoginProp {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useRouter();
  const {login} = useAuth()
  const [loginDetails, setLoginDetails] = useState<LoginProp>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({ ...loginDetails, email: e.target.value });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({ ...loginDetails, password: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await userLogin({
        email: loginDetails.email,
        password: loginDetails.password,
      });
      // console.log(data);
      if (data) {
        login() 
        navigate.push(`/`);
      }
    } catch (err: unknown) {
      console.log({ err });
      toast('Invalid Password or Email,Pls try again',{
        style:{ backgroundColor: "#2b293d", color: "white" }
      }) 
    } finally{
      setIsLoading(false)
    }
  };

  const handleBackBtn = () => {
    navigate.back();
  };

  return (
    <>
      <LoginSignupFramework
        footer="Sign up"
        header="Login"
        linkTo="/signup"
        onClick2={handleLogin}
        backBtnClick={handleBackBtn}
        onChange2={handleEmailChange}
        onChange3={handlePasswordChange}
        value2={loginDetails.email}
        value3={loginDetails.password}
        loading={isLoading}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default LoginPage;

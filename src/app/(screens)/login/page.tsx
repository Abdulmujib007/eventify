"use client";

import LoginSignupFramework from "@/components/molecule/LoginSignupFramework";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const navigate = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate.push("/");
  };

  const handleBackBtn = () => {
    navigate.back();
  };

  return (
    <LoginSignupFramework
      footer="Sign up"
      header="Login"
      linkTo="/signup"
      onClick2={handleLogin}
      backBtnClick={handleBackBtn}
    />
  );
};
export default LoginPage;

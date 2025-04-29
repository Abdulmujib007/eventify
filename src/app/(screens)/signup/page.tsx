"use client";

import LoginSignupFramework from "@/components/molecule/LoginSignupFramework";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const navigate = useRouter();

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    navigate.push("/login");
  };

  const handleBackBtn = () => {
    navigate.back();
  };

  return (
    <LoginSignupFramework
      footer="Log In"
      header="Create Account"
      linkTo="/login"
      onClick2={handleCreateAccount}
      backBtnClick={handleBackBtn}
    />
  );
};
export default SignupPage;

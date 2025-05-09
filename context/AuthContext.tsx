"use client";

import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  authLoading: boolean;
}>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  authLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("isLoggedIn") || "false");
    // setIsLoggedIn(data);
    const cookies = document.cookie;
    const isUserLoggedIn = cookies.includes("isLoggedIn=true");

    setIsLoggedIn(isUserLoggedIn);
    setAuthLoading(false);
  }, []);

  const login = () => {
    // localStorage.setItem("isLoggedIn", JSON.stringify(true));
    // setAuthLoading(true);
    document.cookie = "isLoggedIn=true; path=/; max-age=86400";
    setIsLoggedIn(true);
  };

  const logout = () => {
    // localStorage.setItem("isLoggedIn", JSON.stringify(false));
    document.cookie =
      "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

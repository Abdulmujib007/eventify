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

export const AuthProvider = ({
  children,
  setCookies,
  deleteCookies,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setCookies: Function;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  deleteCookies: Function;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const cookies = document.cookie;
    const isUserLoggedIn = cookies.includes("isLoggedIn=true");

    setIsLoggedIn(isUserLoggedIn);
    setAuthLoading(false);
  }, []);

  const login = async () => {
    const domain =
      window.location.hostname === "localhost"
        ? "localhost"
        : window.location.hostname;
    document.cookie = `isLoggedIn=true; path=/; max-age=${
      60 * 60 * 24 * 7
    }; domain=${domain}; SameSite=Lax`;

    await setCookies({ key: "isLoggedIn", value: "true" });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    const domain =
      window.location.hostname === "localhost"
        ? "localhost"
        : window.location.hostname;

    document.cookie = `isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    setIsLoggedIn(false);

    await deleteCookies("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

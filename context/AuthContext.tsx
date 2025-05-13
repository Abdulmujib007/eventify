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
    const cookies = document.cookie;
    const isUserLoggedIn = cookies.includes("isLoggedIn=true");

    setIsLoggedIn(isUserLoggedIn);
    setAuthLoading(false);
  }, []);

  const login = () => {
    const domain =
      window.location.hostname === "localhost"
        ? "localhost"
        : window.location.hostname;
    document.cookie = `isLoggedIn=true; path=/; max-age=${
      60 * 60 * 24 * 7
    }; domain=${domain}; SameSite=Lax`;

    setIsLoggedIn(true);
  };

  const logout = () => {
    const domain =
      window.location.hostname === "localhost"
        ? "localhost"
        : window.location.hostname;

    document.cookie = `isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

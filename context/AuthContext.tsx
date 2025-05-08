"use client";

import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children} : {children : React.ReactNode }) => {
            const [isLoggedIn,setIsLoggedIn] = useState(false)

        useEffect(() => {
            const data = JSON.parse(localStorage.getItem('isLoggedIn') || 'false')
            setIsLoggedIn(data)
        },[])

        const login = () => {
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            setIsLoggedIn(true)
        }

        const logout = () => {
            localStorage.setItem('isLoggedIn',JSON.stringify(false))
            setIsLoggedIn(false)
        }

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

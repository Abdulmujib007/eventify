'use client'

import { useAuth } from "../../../context/AuthContext"

function AuthGuard({children} : {children: React.ReactNode}) {
const { authLoading} = useAuth()

if(authLoading) return null

  return <>{children}</>;
}

export default AuthGuard
'use client'

import LoginSignupFramework from "@/components/molecule/LoginSignupFramework"
import { useRouter } from "next/navigation"
// import { FormEventHandler } from "react"

const SignupPage = () => {

    const navigate = useRouter()

    // const handleCreateAccount = () => {
    //     navigate.push('/login')
    // }

    const handleCreateAccount = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        navigate.push('/login')
    } 

    const handleBackBtn = () => {
        navigate.back()
    }

    return (
        <LoginSignupFramework footer="Log In" header="Create Account" linkTo="/login" onClick2={handleCreateAccount} backBtnClick={handleBackBtn} />
    )
}
export default SignupPage
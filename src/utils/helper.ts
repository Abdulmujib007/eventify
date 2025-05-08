import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_baseUrl

interface SignupProp {
    firstName : string;
    lastName : string;
    email : string;
    password : string;
}

export const userLogin = async(userInfo : {password:string;email:string;} ) => {
    console.log(baseUrl)
    const response = await axios.post(`${baseUrl}/signin`,userInfo)
    return response.data
}

export const signup = async (newUserInfo : SignupProp ) => {
    const response = await axios.post(`${baseUrl}/signup`,newUserInfo)
    return response.data
}
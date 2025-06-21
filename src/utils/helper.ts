import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_baseUrl;
const ticketMasterBaseUrl = process.env.NEXT_PUBLIC_TICKETMASTER_BASE_URL;
const ticketMasterApiKey = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;

interface SignupProp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const userLogin = async (userInfo: {
  password: string;
  email: string;
}) => {
  console.log(baseUrl);
  const response = await axios.post(`${baseUrl}/signin`, userInfo);
  return response.data;
};

export const userSignup = async (newUserInfo: SignupProp) => {
  const response = await axios.post(`${baseUrl}/signup`, newUserInfo);
  return response.data;
};

export const getAllEvents = async () => {
  const response = await axios.get(
    `${ticketMasterBaseUrl}/events.json?page=0&size=20&apikey=${ticketMasterApiKey}`
  );
  // console.log(events);
  return response.data;
};

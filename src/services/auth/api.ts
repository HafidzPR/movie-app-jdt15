import axios from "axios";
import { LoginType } from "./type";

export const postLogin = async (payload: LoginType) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      payload
    );
    return response.data;
  } catch (error) {}
};

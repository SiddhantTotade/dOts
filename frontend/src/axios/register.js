import axios from "axios";
import { endpoints } from "./endpoints";

export async function register(name, email, password, password2, tc) {
  try {
    const response = await axios.post(endpoints.register, {
      name,
      email,
      password,
      password2,
      tc,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

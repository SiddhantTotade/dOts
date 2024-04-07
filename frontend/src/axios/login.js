import axios from "axios";
import { endpoints } from "./endpoints";

export async function login(email, password) {
  try {
    const response = await axios.post(endpoints.login, { email, password });
    return response.status;
  } catch (err) {
    return err.response.status;
  }
}

import axios from "axios";
import { endpoints } from "./endpoints";

export async function verifyEmail(uidb64, token) {
  try {
    const response = await axios.post(endpoints.verifyEmail, { uidb64, token });
    return response.data;
  } catch (err) {
    throw err;
  }
}

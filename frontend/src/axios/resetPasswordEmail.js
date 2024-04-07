import axios from "axios";
import { endpoints } from "./endpoints";

export async function resetPasswordEmail(email) {
  try {
    const response = await axios.post(endpoints.resetPasswordEmail, { email });
    return response.data;
  } catch (err) {
    throw err;
  }
}

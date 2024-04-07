import axios from "axios";
import { endpoints } from "./endpoints";

export async function resetPassword(password, password2, uid, token) {
  try {
    const response = await axios.post(
      `${endpoints.resetPassword}${uid}/${token}/`,
      {
        password,
        password2,
        uid,
        token,
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
}

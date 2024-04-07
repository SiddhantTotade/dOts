const BASE_URL = "http://127.0.0.1:8000/auth/api";

export const endpoints = {
  login: `${BASE_URL}/login/`,
  register: `${BASE_URL}/register/`,
  confirmEmail: `${BASE_URL}/confirm-email/`,
  changePassword: `${BASE_URL}/change-password/`,
  resetPasswordEmail: `${BASE_URL}/reset-password/`,
  resetPassword: `${BASE_URL}/reset-password/`,
  verifyEmail: `${BASE_URL}/verify/`,
  tokenRefresh: `${BASE_URL}/token/refresh/`,
  logout: `${BASE_URL}/logout/`,
};

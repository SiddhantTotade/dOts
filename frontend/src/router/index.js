import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SigninView.vue"),
    },
    {
      path: "/feed",
      name: "feed",
      component: () => import("../views/FeedView.vue"),
    },
    {
      path: "/auth/verify",
      name: "verify-email",
      component: () => import("../views/VerifyEmailView.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-pasword",
      component: () => import("../views/ForgotPasswordView.vue"),
    },
    {
      path: "/reset-password/",
      name: "reset-pasword",
      component: () => import("../views/ResetPasswordView.vue"),
    },
  ],
});

export default router;

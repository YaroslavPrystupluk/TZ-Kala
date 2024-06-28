import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "board/:id",
        component: () => import("pages/BoardPage.vue"),
        meta: { title: "Board" },
      },
      {
        path: "support",
        component: () => import("pages/SupportPage.vue"),
        meta: { title: "Support" },
      },
      {
        path: "account",
        component: () => import("pages/AccountPage.vue"),
        meta: { title: "Edit Profile" },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

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
        meta: {
          board: {
            title: "board.title",
          },
        },
      },
      {
        path: "create-board",
        component: () => import("pages/CreateBoardPage.vue"),
        meta: { title: "Create Board" },
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
      {
        path: "/board/:id/school",
        component: () => import("pages/SchoolPage.vue"),
        meta: {
          school: {
            title: "school.title",
          },
        },
      },
      {
        path: "/board/:id/create-card",
        component: () => import("pages/CreateCardPage.vue"),
        meta: { title: "Create Board" },
      },

      {
        path: "/board/:id/edit-mode",
        component: () => import("pages/EditCardPage.vue"),
        meta: {
          edit: {
            title: "edit.title",
          },
        },
      },
      {
        path: "/board/:id/board-settings",
        component: () => import("pages/BoardSettingsPage.vue"),
        meta: {
          edit: {
            title: "edit.title",
          },
        },
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

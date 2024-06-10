import { createRouter, createWebHistory } from "vue-router";

import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";
import AppMain from "./pages/AppMain.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: AppMain,
    },
    {
      name: "about",
      path: "/about",
      component: AppAbout,
    },
    {
      name: "contact",
      path: "/contact",
      component: AppContact,
    },
  ],
});

export { router };

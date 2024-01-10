import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("./components/Details")
  },
  
  {
    path: "/properties",
    name: "properties",
    component: () => import("./components/Properties")
  },
  {
    path: "/service",
    name: "service",
    component: () => import("./components/Service")
  },

  {
    path: "/form",
    name: "form",
    component: () => import("./components/Form")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
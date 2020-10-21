import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/ParentView.vue'),
    children: [
      {
        path: '',
        name: "main",
        component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Main.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

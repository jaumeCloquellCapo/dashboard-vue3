import { createRouter, createWebHistory } from "vue-router";

const routerView = { template: '<div><router-view/></div>' }


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
    component: routerView,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '',
        name: "main",
        component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

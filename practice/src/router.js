import Vue from "vue";
import Router from "vue-router";
import MainLayout from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: () => import("./views/index"),
          meta: { tittle: "首页" }
        },
        {
          path: "one",
          component: () => import("./views/one"),
          meta: { tittle: "页面一" }
        },
        {
          path: "two",
          name: "two",
          component: () => import("./views/two"),
          meta: { tittle: "页面二" }
        }
      ]
    }
  ]
});

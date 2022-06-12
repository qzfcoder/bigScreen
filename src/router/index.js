import Vue from "vue";
import VueRouter from "vue-router";
import bigScreen from "../views/bigScreen.vue";
import test from "../views/echartsPart/worldMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bigScreen",
    component: bigScreen,
  },
  {
    path: "/bigScreen",
    name: "12312",
    component: bigScreen,
  },
  {
    path: "/test",
    name: "12312",
    component: test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

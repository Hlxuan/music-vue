import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/consumer_list",
          name: "consumer_list",
          component: () => import("@/consumer/list"),
        }, {
          path: "/singer_list",
          name: "singer_list",
          component: () => import("@/singer/list"),
        },
        {
          path: "/songList_list",
          name: "songList_list",
          component: () => import("@/songList/list"),
        },
      ],
    },
  ],
});

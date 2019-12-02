import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../views/LandingPage";
import NotFound from "../views/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: NotFound
    },
    {
      path: "/carbon",
      name: "landing-page",
      component: LandingPage
    },
    {
      path: "/carbon/datatable",
      name: "datatable.index",
      component: () => import("../views/DataTable")
    },
    {
      path: "/carbon/datatable/:pageStart",
      name: "datatable",
      component: () => import("../views/DataTable"),
      props: true
    },
    {
      path: "/carbon/components",
      name: "components.index",
      component: () => import("../views/Components")
    },
    {
      path: "/carbon/components/:id",
      name: "components",
      component: () => import("../views/Components"),
      props: true
    },
    {
      path: "/carbon/form",
      name: "form.index",
      component: () => import("../views/Form"),
      props: true
    },
    {
      path: "/carbon/dashboard",
      name: "dashboard.index",
      component: () => import("../views/Dashboard"),
      props: true
    },
    {
      path: "/carbon/grid",
      name: "grid.index",
      component: () => import("../views/Grid"),
      props: true
    },
    {
      path: "/carbon/typography",
      name: "typography.index",
      component: () => import("../views/Typography"),
      props: true
    },
    {
      path: "/carbon/icons-pictograms",
      name: "iconspic.index",
      component: () => import("../views/IconsPictograms"),
      props: true
    }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Services from "../views/Services";
import Wines from "../views/Wines";
import Offers from "../views/Offers";
import OtherProducts from "../views/OtherProducts"
import ErrorPage from "../views/Error";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/wines",
    name: "Wines",
    component: Wines,
  },
  {
    path: "/wines/specialoffers",
    name: "Offers",
    component: Offers,
  },
  {
    path: "/wines/otherproducts",
    name: "OtherProducts",
    component: OtherProducts,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/404",
    alias: "*",
    name: "Error",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ProductPage from "@/pages/ProductsPage.vue";
import ProductPreviewPage from "@/pages/ProductPreviewPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import LoginPage from "./pages/LoginPage.vue";
import AdminLayout from "./layouts/AdminLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: HomePage },
      { path: "about", component: AboutPage },
      { path: "products", component: ProductPage },
      { path: "products_preview/:slug", component: ProductPreviewPage },
    ],
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [{ path: "", component: HomePage }],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from) {
    // if (to.hash) {
    //   return {
    //     top: 20,
    //     el: to.hash,
    //     behavior: "smooth",
    //   };
    // }
    // return { top: 0 };
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (to.hash) {
          res({
            top: 0,
            el: to.hash,
            behavior: "smooth",
          });
        } else {
          res({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 100);
    });
  },
});

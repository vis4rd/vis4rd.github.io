import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Error404 from "./pages/Error404.vue";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";
import { routes } from "vue-router/auto-routes";

const expandedRoutes = [
    {
        path: "/",
        redirect: { name: "Home" },
    },
    ...routes,
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: Error404,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: expandedRoutes,
});

const app = createApp(App);
app.use(router);
app.component("MarkdownWrapper", MarkdownWrapper);
app.mount("#app");

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Error404 from "./pages/Error404.vue";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";
import pages from "~pages";

const routes = pages.concat([
    {
        path: "/",
        redirect: { name: "Home" },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: Error404,
    },
]);

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(router);
app.component("MarkdownWrapper", MarkdownWrapper);
app.mount("#app");

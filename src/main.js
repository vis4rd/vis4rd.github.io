import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/about/About.vue";
import App from "./App.vue";
import Home from "./pages/home/Home.vue";
import Error404 from "./pages/404/Error404.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: { name: "Home" },
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: Error404,
        },
    ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");

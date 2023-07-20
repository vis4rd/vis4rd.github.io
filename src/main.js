import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/about/About.vue";
import App from "./App.vue";
import Home from "./pages/home/Home.vue";

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
            path: "/.*",
            name: "Redirect",
            redirect: { name: "Home" },
        },
    ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");

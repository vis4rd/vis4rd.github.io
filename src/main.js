import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import Home from "./pages/home/Home.vue";
import About from "./pages/about/About.vue";
import Projects from "./pages/projects/Projects.vue";
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
            path: "/projects",
            name: "Projects",
            component: Projects,
        },
        {
            path: "/playground",
            name: "Playground",
            component: () => import("./pages/playground/Playground.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: Error404,
        },
    ],
});

library.add(faHouse, faGithub, faDiscord, faLinkedinIn, faEnvelope);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

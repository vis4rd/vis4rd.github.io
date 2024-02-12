import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import Error404 from "./pages/Error404.vue";
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

library.add(faHouse, faGithub, faDiscord, faLinkedinIn, faEnvelope);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

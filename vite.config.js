import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mpa from "vite-plugin-mpa";
import htmlTemplate from "vite-plugin-html-template";

export default defineConfig({
    plugins: [
        vue(),
        mpa({
            open: false,
        }),
        htmlTemplate({
            pages: {
                index: {
                    // entrypoint served under /
                    template: "./public/index.html",
                    title: "visard.me",
                    entry: "./src/pages/home/main.js",
                },
                home: {
                    // entrypoint /home/, same as /
                    template: "./public/index.html",
                    title: "visard.me",
                },
                about: {
                    // entrypoiny /about/
                    template: "./public/index.html",
                    title: "visard.me / about",
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

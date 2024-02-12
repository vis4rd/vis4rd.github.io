import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Markdown from "unplugin-vue-markdown/vite";

export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Pages({
            extensions: ["vue", "md"],
        }),
        // TODO: add markdown-it plugins
        Markdown({
            wrapperComponent: "MarkdownWrapper",
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "/",
});

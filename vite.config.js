import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mpa from "vite-plugin-mpa";

export default defineConfig({
    plugins: [
        vue(),
        mpa({
            open: false,
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "/",
});

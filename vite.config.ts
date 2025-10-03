import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import Vue from "@vitejs/plugin-vue";

import VueRouter from "unplugin-vue-router/vite";

import Markdown from "unplugin-vue-markdown/vite";
// @ts-ignore
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
// @ts-ignore
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightJs from "markdown-it-highlightjs";
// @ts-ignore
import MarkdownItSub from "markdown-it-sub";
// @ts-ignore
import MarkdownItSup from "markdown-it-sup";
// @ts-ignore
import MarkdownItTaskLists from "markdown-it-task-lists";
// @ts-ignore
import MarkdownItMark from "markdown-it-mark";
// @ts-ignore
import MarkdownItTexMath from "markdown-it-texmath";
import KateX from "katex";
// @ts-ignore
import { full as MarkdownItEmoji } from "markdown-it-emoji";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "/",
    plugins: [
        VueRouter({
            extensions: [".vue", ".md"],
        }),
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        nodePolyfills(),
        Markdown({
            wrapperComponent: "MarkdownWrapper",
            markdownItOptions: {
                html: true,
                linkify: true,
            },
            markdownItSetup(md) {
                md.use(MarkdownItAbbr);
                md.use(MarkdownItAnchor, {
                    permalink: MarkdownItAnchor.permalink.headerLink({
                        // Permalink.headerLink style requires css in MarkdownWrapper component to
                        // disable link coloring in headers
                        class: "header_anchor",
                    }),
                });
                md.use(MarkdownItFootnote);
                md.use(MarkdownItHighlightJs);
                md.use(MarkdownItSub);
                md.use(MarkdownItSup);
                md.use(MarkdownItTaskLists);
                md.use(MarkdownItEmoji, {
                    shortcuts: {}, // disable automatic ascii emoji conversion
                });
                md.use(MarkdownItMark);
                md.use(MarkdownItTexMath, {
                    engine: KateX,
                    delimiters: "dollars",
                });
            },
        }),
    ],
});

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Markdown from "unplugin-vue-markdown/vite";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightJs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItMark from "markdown-it-mark";
import MarkdownItTexMath from "markdown-it-texmath";
import KateX from "katex";
import { full as MarkdownItEmoji } from "markdown-it-emoji";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Pages({
            extensions: ["vue", "md"],
        }),
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
        nodePolyfills({
            globals: {
                Buffer: true,
                global: true,
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "/",
});

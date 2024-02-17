<script setup>
    import BorderWrapper from "@/components/BorderWrapper.vue";
    import "highlight.js/styles/felipec.css";

    const props = defineProps({
        frontmatter: {
            type: Object,
        },
    });
</script>

<template>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css" />
    <div class="markdown_wrapper">
        <BorderWrapper padding_left="2rem" padding_right="2rem">
            <div class="markdown_frontmatter">
                <h1>{{ frontmatter.title }}</h1>
                <h3>{{ frontmatter.date }}</h3>
            </div>
        </BorderWrapper>
        <BorderWrapper padding_left="2rem" padding_right="2rem">
            <slot></slot>
        </BorderWrapper>
    </div>
</template>

<style scoped>
    .markdown_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;
    }

    .markdown_frontmatter {
        width: 100%;
    }

    :slotted(.markdown-body) {
        width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    :slotted(h1),
    :slotted(h2),
    :slotted(h3),
    :slotted(h4),
    :slotted(h5),
    :slotted(h6) {
        margin: 0;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* CODE HIGHLIGHTING */
    :slotted(code.hljs) {
        /* code blocks */
        font-size: 1rem;

        border-style: solid;
        border-width: 1px;
        border-radius: 6px;
        border-color: var(--color-element-border);
    }

    :slotted(code:not(.hljs)) {
        /* inline code */
        color: var(--color-code);
        font-family: consolas, monospace;
    }

    :slotted(code:not(.hljs)),
    :slotted(h1 code),
    :slotted(h2 code),
    :slotted(h3 code),
    :slotted(h4 code),
    :slotted(h5 code),
    :slotted(h6 code) {
        /* adjust code font size in headers and inline code */
        font-size: 0.9em;
    }

    /* HEADER LINKS */
    :slotted(.header_anchor) {
        color: var(--color-header);
    }

    :slotted(.header_anchor:hover) {
        text-decoration: underline;
    }

    :slotted(.header_anchor:hover::after) {
        content: " (#)";
        font-size: calc(max(0.4em, 0.8rem));
        color: var(--color-a);
    }

    /* TABLES */
    :slotted(table) {
        border-spacing: 0; /* remove space between cells (workaround for border-collapse) */
        text-align: center;

        margin: 1rem;
        margin-left: 0;
        margin-right: 0;
    }

    :slotted(th) {
        /* header row cells */
        border-style: solid;
        border-width: 1px;
        border-color: var(--color-element-border);
        border-bottom: none;
        padding: 10px;
    }

    :slotted(th:first-child) {
        /* top left cell */
        border-top-left-radius: 6px;
    }

    :slotted(th:last-child) {
        /* top right cell */
        border-top-right-radius: 6px;
    }

    :slotted(th:not(:first-child)) {
        /* header row cells starting from the second one */
        border-left: none;
    }

    :slotted(td) {
        /* regular row cells */
        border-style: solid;
        border-width: 1px;
        border-color: var(--color-element-border);
        padding: 5px;
    }

    :slotted(td:not(:first-child)) {
        /* regular row cells starting from the second one */
        border-left: none;
    }

    :slotted(tr:not(:last-child) td) {
        /* regular row cells not in the last row */
        border-bottom: none;
    }

    :slotted(tr:last-child td:first-child) {
        /* bottom left cell */
        border-bottom-left-radius: 6px;
    }

    :slotted(tr:last-child td:last-child) {
        /* bottom right cell */
        border-bottom-right-radius: 6px;
    }

    /* BLOCK QUOTES */
    :slotted(blockquote) {
        border-radius: 6px;

        border-left-style: solid;
        border-left-width: 4px;
        border-left-color: var(--color-element-border);

        padding: 0.5rem;
        margin: 0;
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
        background-color: var(--color-blockquote-bg);
    }

    :slotted(blockquote p) {
        /* paragraph inside blockquote */
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    :slotted(blockquote p:first-child) {
        /* first paragraph inside blockquote */
        margin-top: 0;
    }

    :slotted(blockquote p:last-child),
    :slotted(blockquote :not(p):last-child) {
        /* last paragraph inside blockquote */
        /* last element inside blockquote that is not a paragraph */
        margin-bottom: 0;
    }

    :slotted(blockquote p:has(+ :not(p))) {
        /* paragraph (inside blockquote) which next sibling is not a paragraph */
        margin-top: 0;
        margin-bottom: 0;
    }

    /* TASK LIST */
    :slotted(ul.contains-task-list) {
        list-style-type: none;
        padding: 0;
    }

    :slotted(ul.contains-task-list ul.contains-task-list) {
        margin-left: 1.5rem;
    }

    :slotted(input[type="checkbox"].task-list-item-checkbox) {
        display: none;
    }

    :slotted(li.task-list-item) {
        display: grid;
        grid-template-columns: 1.5rem max-content;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    :slotted(li.task-list-item::before) {
        content: "";
        width: 1.15rem;
        height: 1.15rem;

        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        border-style: solid;
        border-width: 1px;
        border-color: var(--color-element-border);
        border-radius: 4px;
    }

    :slotted(
            li.task-list-item:has(input[type="checkbox"].task-list-item-checkbox:checked)::before
        ) {
        display: flex;
        align-items: center;
        justify-content: center;

        padding-top: 4px;
        content: "✔";
        color: var(--color-bg);
        border-color: var(--color-element-border);
        background-color: var(--color-element-border);
    }
</style>

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

    :slotted(.header_anchor):hover {
        text-decoration: underline;
    }

    :slotted(.header_anchor):hover::after {
        content: " (#)";
        font-size: calc(max(0.4em, 0.8rem));
        color: var(--color-a);
    }
</style>

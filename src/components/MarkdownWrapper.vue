<script setup>
    import BorderWrapper from "@/components/BorderWrapper.vue";

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
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        src: {
            type: String,
            default: "/assets/visard.png",
        },
        alt: {
            type: String,
            default: "Where is my profile pic? >:(",
        },
        title: {
            type: String,
            default: "This is my profile picture!",
        },
        size: {
            type: Number,
            default: 100,
        },
    });
</script>

<template>
    <img
        :src="props.src"
        :alt="props.alt"
        :title="props.title"
        :width="props.size"
        :height="props.size" />
</template>

<style scoped>
    img {
        display: flex;
        flex-direction: column;
        text-align: center;
        place-items: center;
        place-content: center;

        font-size: 0.85rem;

        border-radius: 50%;
        border-style: dotted;
        border-color: var(--color-element-border);
        border-width: 2px;

        border-left-style: solid;
        border-bottom-style: solid;
        border-left-width: 1px;

        padding: 3px;
    }
</style>

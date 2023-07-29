<script setup>
    const props = defineProps({
        src: {
            type: String,
            default: "@/../assets/visard.png",
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
        :alt="props.title"
        :title="props.title"
        :width="props.size"
        :height="props.size"
    />
</template>

<style scoped>
    img {
        border-radius: 50%;
        border-style: dotted;
        border-color: var(--color-element-border);
        border-width: 2px;

        padding: 3px;
    }
</style>

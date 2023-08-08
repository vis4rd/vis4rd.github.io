<script setup>
    const props = defineProps({
        padding_left: {
            type: String,
            default: "4rem",
        },
        padding_right: {
            type: String,
            default: "4rem",
        },
        padding_top: {
            type: String,
            default: "2rem",
        },
        padding_bottom: {
            type: String,
            default: "2rem",
        },
    });
</script>

<template>
    <div class="border_wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
    .border_wrapper {
        display: flex;
        flex-direction: column;
        place-items: center;
        box-sizing: border-box;

        width: 70%;
        max-width: 960px;

        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-left: v-bind(padding_left);
        padding-right: v-bind(padding_right);
        padding-top: v-bind(padding_top);
        padding-bottom: v-bind(padding_bottom);

        border-style: solid;
        border-radius: 6px;
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);
    }
</style>

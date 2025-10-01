<script setup>
    import { Icon } from "@iconify/vue";

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
    });

    const size = 22;
</script>

<template>
    <span class="icon_info">
        <Icon class="icon_info_icon" :icon="props.icon" :width="size" :height="size" />
        <slot>Icon text</slot>
    </span>
</template>

<style scoped>
    .icon_info {
        display: flex;
        flex-direction: row;
        place-items: flex-start;
        justify-content: left;

        padding-left: 0.1rem;
        padding-right: 0.2rem;
        gap: 0.4rem;
    }
    .icon_info_icon {
        min-width: fit-content;
    }
</style>

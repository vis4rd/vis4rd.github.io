<script setup lang="ts">
    import { Icon } from "@iconify/vue";

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
    });

    const size = 22;
</script>

<!-- Icon search: https://icon-sets.iconify.design/fluent/?keyword=fluent -->

<template>
    <span class="icon_info">
        <Icon class="icon_info_icon" :icon="props.icon" :width="size" :height="size" />
        <div class="no-overflow"><slot>Icon text</slot></div>
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
    .no-overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap-mode: nowrap;
    }
</style>

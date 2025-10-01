<script setup lang="ts">
    import { Icon } from "@iconify/vue";
    import TileWrapper from "@/components/base/TileWrapper.vue";

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 24,
        },
        href: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
    });

    function go_to_link() {
        if (props.href !== "") {
            window.open(props.href, "_blank");
        }
    }
</script>

<!-- Icon search: https://icon-sets.iconify.design/fluent/?keyword=fluent -->

<template>
    <TileWrapper class="icon_link_tile_wrapper">
        <a
            class="icon_link_tile"
            :href="props.href"
            :title="props.title"
            :disabled="props.disabled"
            :active="props.active"
            target="_blank">
            <Icon
                class="icon_link_tile_icon"
                :icon="props.icon"
                :width="props.size"
                :height="props.size"
                @click="go_to_link()" />
        </a>
    </TileWrapper>
</template>

<style scoped>
    .icon_link_tile_wrapper {
        padding: 0;
        height: 100%;
    }

    .icon_link_tile {
        display: flex;
        place-items: center;
        place-content: center;
        color: var(--color-heading);

        border-radius: var(--radius-border);

        height: 100%;
        aspect-ratio: 1 / 1;

        transition: var(--time-transition);
    }

    .icon_link_tile:hover {
        background-color: var(--color-element-bg-hover);
        color: var(--color-border-hover);
        cursor: pointer;
    }

    .icon_link_tile_icon {
        padding: 0.5rem;
    }
</style>

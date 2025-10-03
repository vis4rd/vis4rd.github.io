<script setup lang="ts">
    import { Icon } from "@iconify/vue";

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
    <a
        class="icon_link"
        :href="props.href"
        :title="props.title"
        :disabled="props.disabled"
        :active="props.active"
        target="_blank">
        <Icon :icon="props.icon" :width="props.size" :height="props.size" @click="go_to_link()" />
        <div>
            <slot></slot>
        </div>
    </a>
</template>

<style scoped>
    .icon_link {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: fit-content;

        gap: 0.2rem;
        padding: 0.3rem;

        border-bottom-style: dotted;
        border-width: 2px;
        border-color: var(--color-a);

        transition: var(--time-transition);
    }

    .icon_link:hover {
        border-color: var(--color-a-hover);
        transition: var(--time-transition);
        cursor: pointer;
    }
    .icon_link:hover .slot_part {
        color: var(--color-a-hover);
    }
</style>

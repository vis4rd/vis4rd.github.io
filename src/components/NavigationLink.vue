<script setup lang="ts">
    import { useRoute } from "vue-router";

    const props = defineProps({
        href: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        tooltip: {
            type: String,
            default: "",
        },
        active: {
            type: Boolean,
            default: false,
        },
    });

    const route = useRoute();

    function is_not_current(route_link) {
        return route_link !== route.path;
    }
</script>

<template>
    <span class="disabled" v-if="props.disabled" :title="props.tooltip">
        <slot></slot>
    </span>
    <span class="active" v-else-if="props.active" :title="props.tooltip">
        <slot></slot>
    </span>
    <router-link v-else-if="is_not_current(props.href)" :to="props.href" :title="props.tooltip">
        <slot></slot>
    </router-link>
    <span class="current" v-else title="You are currently here!">
        <slot></slot>
    </span>
</template>

<style scoped>
    .disabled {
        color: var(--color-a-disabled);
    }

    .active {
        color: var(--color-a-active);
    }

    .current {
        color: var(--color-a-active);
    }
</style>

<script setup>
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
    <!-- TODO: add border and maybe icons? experiment with this -->
    <div class="nav_link">
        <span class="disabled" v-if="props.disabled">
            <slot></slot>
        </span>
        <span class="active" v-else-if="props.active">
            <slot></slot>
        </span>
        <router-link v-else-if="is_not_current(props.href)" :to="props.href">
            <slot></slot>
        </router-link>
        <span class="current" v-else>
            <slot></slot>
        </span>
    </div>
</template>

<style scoped>
    .nav_link {
        padding: 0 0.5rem;
    }

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

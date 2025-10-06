<script setup lang="ts">
    const props = defineProps({
        href: {
            type: String,
            default: "",
        },
        target: {
            type: String,
            default: "_self",
        },
        title: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        back_to_top: {
            type: Boolean,
            default: false,
        },
        local: {
            type: Boolean,
            default: false,
        },
    });

    function backToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<template>
    <a
        v-if="!props.local"
        class="link_container"
        :to="props.href"
        :title="props.title"
        :disabled="props.disabled"
        :target="props.target"
        @click="props.back_to_top ? backToTop() : null">
        <slot></slot>
    </a>
    <router-link v-else class="link_container" :to="props.href" :title="props.title">
        <slot></slot>
    </router-link>
</template>

<style scoped>
    .link_container {
        display: flex;

        padding: 1rem;
        margin: 0;

        border-style: solid;
        border-color: var(--color-element-border);
        border-width: 1px;
        border-radius: var(--radius-border);

        cursor: pointer;
    }
</style>

<script lang="ts" setup>
    import BorderWrapper from "./BorderWrapper.vue";
</script>

<template>
    <BorderWrapper class="tile_wrapper">
        <slot></slot>
    </BorderWrapper>
</template>

<style scoped>
    .tile_wrapper {
        padding-block: 0.5rem;
        margin-block: 0.25rem;
    }
</style>

<script lang="ts" setup>
    import BorderWrapper from "./BorderWrapper.vue";
</script>

<template>
    <BorderWrapper class="section_wrapper">
        <slot></slot>
    </BorderWrapper>
</template>

<style scoped>
    .section_wrapper {
        max-width: 1000px;
        width: 100%;

        padding-block: 0.5rem;
        padding-inline: 2rem;
        margin-top: 0.5rem;
    }
</style>

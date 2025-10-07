<script lang="ts" setup>
    import TileWrapper from "./TileWrapper.vue";
</script>

<template>
    <TileWrapper class="section_wrapper">
        <slot></slot>
    </TileWrapper>
</template>

<style scoped>
    .section_wrapper {
        max-width: 1000px;
        width: 100%;

        padding-inline: 2rem;
    }
</style>

<script setup lang="ts">
    import SectionWrapper from "@/components/base/SectionWrapper.vue";
</script>

<template>
    <SectionWrapper class="tile_bar_wrapper">
        <div class="horizontal">
            <slot name="left"> </slot>
        </div>
        <div class="horizontal">
            <slot name="right"> </slot>
        </div>
    </SectionWrapper>
</template>

<style scoped>
    .tile_bar_wrapper {
        outline: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;

        padding: 0;
        gap: 0.5rem;
    }

    .tile_bar_wrapper > * {
        height: 100%;
    }

    :slotted(.tile_wrapper) {
        margin-block: 0 !important;
    }

    .horizontal {
        display: flex;
        gap: 0.5rem;
        place-items: center;
    }
</style>

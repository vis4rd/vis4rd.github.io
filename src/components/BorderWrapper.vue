<script setup lang="ts"></script>

<template>
    <div class="border_wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
    .border_wrapper {
        display: flex;
        flex-direction: column;
        place-items: center;
        box-sizing: border-box;

        width: 70%;
        max-width: 960px;

        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0rem 2rem;

        border-style: solid;
        border-radius: var(--radius-border);
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);
    }
</style>

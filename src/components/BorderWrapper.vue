<script setup></script>

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
        margin-bottom: 2rem;
        padding: 1rem 4rem;

        border-style: solid;
        border-radius: 6px;
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);
    }
</style>

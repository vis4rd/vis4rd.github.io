<script setup lang="ts"></script>

<template>
    <div class="tools_row">
        <slot></slot>
    </div>
</template>

<style scoped>
    .tools_row {
        display: flex;
        flex-direction: row-reverse;

        justify-content: right;
        align-items: center;

        gap: 1rem;

        width: 70%;
        max-width: 960px;

        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>

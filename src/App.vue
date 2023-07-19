<script setup>
    import { RouterView } from "vue-router";
</script>

<template>
    <header>navigation pane</header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
    header {
        display: flex;
        flex-direction: column;
        place-items: center;

        width: 70%;
        max-width: 960px;

        margin: 2rem 0;
        padding: 1rem 0;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);
    }

    main {
        display: flex;
        flex-direction: column;
        place-items: center;

        width: 70%;
        max-width: 960px;

        margin: 0;
        padding: 0;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);
    }
</style>

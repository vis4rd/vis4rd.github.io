<script setup>
    import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
    <header>
        <NavigationBar />
    </header>

    <main>
        <router-view />
    </main>
</template>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        place-content: center;

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
        padding: 1rem 0;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);
    }
</style>

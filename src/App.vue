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

        margin-top: 2rem;
        margin-bottom: 1rem;
        padding: 1rem 0;

        border-style: solid;
        border-radius: 6px;
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);
    }

    main {
        display: flex;
        place-content: center;
        box-sizing: border-box;

        width: 100%;
    }
</style>

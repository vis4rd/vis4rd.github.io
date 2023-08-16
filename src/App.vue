<script setup>
    import NavigationBar from "@/components/NavigationBar.vue";
    import FooterSection from "@/components/FooterSection.vue";
</script>

<template>
    <header>
        <NavigationBar />
    </header>

    <main>
        <router-view />
    </main>

    <footer>
        <FooterSection />
    </footer>
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

    main,
    footer {
        display: flex;
        place-content: center;
        box-sizing: border-box;

        width: 100%;
    }

    footer {
        padding-bottom: 1rem;
    }
</style>

<script setup lang="ts">
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
        place-content: center;
        width: 100%;
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

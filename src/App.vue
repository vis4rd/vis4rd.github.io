<script setup lang="ts">
    import NavigationBarSection from "@/components/sections/NavigationBarSection.vue";
    import FooterSection from "@/components/sections/FooterSection.vue";
</script>

<template>
    <header>
        <NavigationBarSection />
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

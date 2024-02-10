<script setup>
    import NavigationLink from "@/components/NavigationLink.vue";
</script>

<template>
    <nav>
        <NavigationLink href="/home">home/</NavigationLink>
        <NavigationLink href="/about">about/</NavigationLink>
        <NavigationLink href="/projects">projects/</NavigationLink>
        <NavigationLink href="/experience">experience/</NavigationLink>
        <NavigationLink href="/blog" disabled tooltip="Coming soon! (maybe)">blog/</NavigationLink>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        flex-direction: row;
        place-content: center;

        gap: 1rem;

        width: 100%;

        margin: 0;
        padding: 0;
    }
</style>

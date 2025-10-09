<script setup lang="ts">
    import NavigationLink from "@/components/NavigationLink.vue";
    import TileWrapper from "@/components/base/TileWrapper.vue";
</script>

<template>
    <TileWrapper>
        <nav>
            <NavigationLink href="/home">home/</NavigationLink>
            <NavigationLink href="/projects">projects/</NavigationLink>
            <NavigationLink href="/experience">experience/</NavigationLink>
            <NavigationLink href="/blog">blog/</NavigationLink>
        </nav>
    </TileWrapper>
</template>

<style scoped>
    nav {
        display: flex;
        place-content: center;
        gap: 1rem;

        width: 100%;
        padding-inline: 0.5rem;
    }
</style>

<script setup lang="ts">
    import NavigationLink from "@/components/NavigationLink.vue";
    import SectionWrapper from "@/components/base/SectionWrapper.vue";
</script>

<template>
    <SectionWrapper>
        <nav>
            <NavigationLink href="/home">home/</NavigationLink>
            <NavigationLink href="/projects">projects/</NavigationLink>
            <NavigationLink href="/experience">experience/</NavigationLink>
            <NavigationLink href="/blog">blog/</NavigationLink>
        </nav>
    </SectionWrapper>
</template>

<style scoped>
    nav {
        display: flex;
        place-content: center;
        gap: 1rem;

        width: 100%;
    }
</style>

<script setup lang="ts">
    import BlogTab from "@/components/BlogTab.vue";
    import { defineAsyncComponent } from "vue";

    const blogs = import.meta.glob("/src/pages/blog/*.md");
    const BorderWrapper = defineAsyncComponent(() => import("@/components/base/BorderWrapper.vue"));
</script>

<template>
    <div class="blogs">
        <Suspense v-for="(_, path) in blogs">
            <BlogTab :source_file="path" />
        </Suspense>
        <BorderWrapper v-if="Object.keys(blogs).length === 0">
            There are no blogs here just yet. Come back soon!
        </BorderWrapper>
    </div>
</template>

<style scoped>
    .blogs {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;
    }
</style>

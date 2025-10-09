<script setup lang="ts">
    import BlogTab from "@/components/tabs/BlogTab.vue";
    import { defineAsyncComponent } from "vue";

    const blogs = import.meta.glob("/src/pages/blog/*.md");
    const SectionWrapper = defineAsyncComponent(
        () => import("@/components/base/SectionWrapper.vue")
    );
</script>

<template>
    <div class="blogs">
        <Suspense v-for="(_, path) in blogs">
            <BlogTab :source_file="path" />
        </Suspense>
        <SectionWrapper v-if="Object.keys(blogs).length === 0">
            There are no blogs here just yet. Come back soon!
        </SectionWrapper>
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

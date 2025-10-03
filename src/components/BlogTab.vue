<script setup lang="ts">
    import BorderWrapper from "@/components/BorderWrapper.vue";
    import matter from "gray-matter";

    const props = defineProps({
        source_file: {
            type: String,
            required: true,
        },
    });

    const source_file =
        process.env.NODE_ENV === "production"
            ? `/assets/${props.source_file.slice(11)}`
            : props.source_file;

    async function get_blog_frontmatter() {
        try {
            const response = await fetch(source_file, {
                mode: "same-origin",
            });
            const raw_data = await response.text();
            const data = matter(raw_data).data;
            return data;
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    const blog_frontmatter = await get_blog_frontmatter();
</script>

<template>
    <BorderWrapper padding_left="0" padding_right="0" padding_top="0" padding_bottom="0">
        <router-link class="blog_tab" :to="props.source_file.slice(10, -3)">
            <img class="thumbnail" :src="blog_frontmatter.thumbnail" />
            <div class="details">
                <div class="titles">
                    <h1>{{ blog_frontmatter.title }}</h1>
                    <h3>{{ blog_frontmatter.subtitle }}</h3>
                </div>
                <div class="date_published">
                    <h2>{{ blog_frontmatter.date }}</h2>
                </div>
            </div>
        </router-link>
    </BorderWrapper>
</template>

<style scoped>
    .blog_tab {
        display: flex;
        flex-direction: column;
        place-items: center;
        box-sizing: border-box;

        width: 100%;
        height: min-content;
        font-size: calc(var(--size-text) - 2px);
    }

    .blog_tab > * {
        width: 100%;
    }

    .thumbnail {
        box-sizing: border-box;
        display: flex;

        place-items: center;
        place-content: center;

        border-bottom-style: solid;
        border-bottom-width: var(--width-section-border);
        border-bottom-color: var(--color-section-border);
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;

        width: 100%;
        max-height: 200px;

        object-fit: cover;
    }

    .details {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
    }

    .details > .titles,
    .date_published {
        padding-top: 0.5rem;
        padding-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .date_published {
        align-self: stretch;
    }

    h1,
    h2,
    h3 {
        margin: 0;
        padding: 0;
    }
</style>

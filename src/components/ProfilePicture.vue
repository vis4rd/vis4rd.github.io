<script setup lang="ts">
    import AsyncImage from "@/components/AsyncImage.vue";

    const props = defineProps({
        src: {
            type: String,
            default: "/assets/visard.png",
        },
        alt: {
            type: String,
            default: "Where is my profile pic? >:(",
        },
        title: {
            type: String,
            default: "This is my profile picture!",
        },
        size: {
            type: Number,
            default: 100,
        },
    });
</script>

<template>
    <div
        class="profile-pic-wrapper"
        :style="{
            width: props.size + 'px',
            height: props.size + 'px',
        }">
        <Transition name="fade-in-image" mode="out-in">
            <Suspense>
                <template #fallback>
                    <div>Loading profile picture...</div>
                </template>
                <AsyncImage
                    :src="props.src"
                    :alt="props.alt"
                    :title="props.title"
                    :width="props.size"
                    :height="props.size" />
            </Suspense>
        </Transition>
    </div>
</template>

<style scoped>
    .profile-pic-wrapper {
        display: flex;
        flex-direction: column;
        text-align: center;
        place-items: center;
        place-content: center;

        font-size: 0.85rem;

        border-radius: var(--radius-border);
        border-style: dotted;
        border-color: var(--color-element-border);
        border-width: 2px;

        border-left-style: solid;
        border-bottom-style: solid;
        border-left-width: 1px;

        padding: 3px;
    }

    .fade-in-image-enter-active,
    .fade-in-image-leave-active {
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .fade-in-image-enter-from,
    .fade-in-image-leave-to {
        opacity: 0;
    }
    .fade-in-image-enter-to,
    .fade-in-image-leave-from {
        opacity: 1;
    }
</style>

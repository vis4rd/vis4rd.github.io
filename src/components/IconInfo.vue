<script setup>
    import GoogleIcon from "@/components/GoogleIcon.vue";

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <span class="icon_info">
        <GoogleIcon :name="props.icon" />
        <slot>Icon text</slot>
    </span>
</template>

<style scoped>
    .icon_info {
        display: flex;
        flex-direction: row;
        place-items: flex-start;
        justify-content: left;

        padding-left: 0.1rem;
        padding-right: 0.2rem;
        gap: 0.4rem;
    }
</style>

<script setup lang="ts">
    import { defineProps, withDefaults } from "vue";

    const props = withDefaults(
        defineProps<{
            src: string;
            alt?: string;
        }>(),
        {
            alt: "",
        }
    );

    let loaded = false;

    await new Promise<void>((resolve, reject) => {
        const img = new window.Image();
        img.src = props.src;
        img.onload = () => {
            loaded = true;
            resolve();
        };
        img.onerror = reject;
    });
</script>

<template>
    <img v-if="loaded" :src="src" :alt="alt" v-bind="$attrs" />
</template>

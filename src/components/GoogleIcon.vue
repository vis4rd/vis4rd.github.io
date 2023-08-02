<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <span class="material-symbols-outlined"> {{ props.name }} </span>
</template>

<style scoped>
    span {
        padding: 0;
        margin: 0;
    }
</style>

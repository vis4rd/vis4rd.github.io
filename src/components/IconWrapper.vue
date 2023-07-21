<script setup>
    const props = defineProps({
        href: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
    });
</script>

<template>
    <!-- TODO: add border and maybe icons? experiment with this -->
    <div class="icon_link">
        <slot></slot>
        <a :href="props.href" target="_blank"></a>
    </div>
</template>

<style scoped>
    .nav_link {
        padding: 0 0.5rem;
    }

    .disabled {
        color: var(--color-a-disabled);
    }

    .active {
        color: var(--color-a-active);
    }

    .current {
        color: var(--color-a-active);
    }
</style>

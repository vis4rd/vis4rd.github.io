<script setup>
    import IconInfo from "@/components/IconInfo.vue";

    const props = defineProps({
        thumbnail: {
            type: String,
            default: "",
        },
    });
</script>

<template>
    <div class="project">
        <div class="info">
            <h2>
                <slot name="title">{{ props.title }}</slot>
            </h2>
            <IconInfo icon="calendar_month">
                <slot name="date">{{ props.date }}</slot>
            </IconInfo>
            <IconInfo icon="launch">
                <slot name="href">{{ props.href }}</slot>
            </IconInfo>
            <IconInfo icon="code">
                <slot name="languages">{{ props.languages }}</slot>
            </IconInfo>
            <IconInfo icon="deployed_code">
                <slot name="libraries">{{ props.libraries }}</slot>
            </IconInfo>
        </div>
    </div>
</template>

<style scoped>
    .project {
        display: flex;
        flex-direction: row;
        place-items: center;
        box-sizing: border-box;

        width: 100%;
        padding: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;

        border-style: solid;
        border-radius: 6px;
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);
    }

    .info {
        display: flex;
        flex-direction: column;
        place-items: left;

        width: 50%;

        font-size: calc(var(--size-text) - 2px);
    }

    h2,
    h3 {
        margin: 0;
        padding: 0;
    }
</style>

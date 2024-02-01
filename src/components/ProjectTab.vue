<script setup>
    import IconInfo from "@/components/IconInfo.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper padding_left="0" padding_right="0" padding_top="0" padding_bottom="0">
        <div class="project">
            <div class="info">
                <h1>
                    <slot name="title">Title</slot>
                </h1>
                <IconInfo icon="calendar_month">
                    <slot name="date">Date</slot>
                </IconInfo>
                <IconInfo icon="launch">
                    <slot name="href">Link to repository</slot>
                </IconInfo>
                <IconInfo icon="code">
                    <slot name="languages">Languages</slot>
                </IconInfo>
                <IconInfo icon="deployed_code">
                    <slot name="libraries">Libraries</slot>
                </IconInfo>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </BorderWrapper>
</template>

<style scoped>
    .project {
        display: flex;
        place-items: center;
        box-sizing: border-box;

        width: 100%;
        height: min-content;
        font-size: calc(var(--size-text) - 2px);
    }

    .project > * {
        width: 100%;
    }

    .info {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 2rem;
    }

    h1,
    h2,
    h3 {
        margin: 0;
        padding: 0;
    }

    .content {
        box-sizing: border-box;
        display: flex;

        place-items: center;
        place-content: center;
    }

    .content:has(img) {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .content:not(:has(img)) {
        height: 100%;

        text-align: justify;
        text-justify: distribute;

        padding-right: 2rem;
        padding-left: 1rem;
    }

    :slotted(img) {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        width: 100%;
        /* TODO: Fix the hardcoded height here. Parent should take height of the info child and adjust content height to it. */
        height: 160px;

        object-fit: cover;
    }

    @media (max-width: 960px) {
        .content:not(:has(img)) {
            text-justify: auto;
        }
    }
</style>

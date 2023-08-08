<script setup>
    import IconInfo from "@/components/IconInfo.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";

    const props = defineProps({
        thumbnail: {
            type: String,
            default: "",
        },
    });
</script>

<template>
    <BorderWrapper padding_right="0" padding_top="0" padding_bottom="0">
        <div class="project">
            <div class="info">
                <h1>
                    <slot name="title">{{ props.title }}</slot>
                </h1>
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
            <div class="content">
                <slot name="content">~~content~~</slot>
            </div>
        </div>
    </BorderWrapper>
</template>

<style scoped>
    .project {
        display: table;
        flex-direction: row;
        place-items: center;
        box-sizing: border-box;

        width: 100%;
        font-size: calc(var(--size-text) - 2px);
    }

    .project:has(img) {
        padding-right: 0;
    }

    .info {
        display: table-cell;

        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        width: 50%;
    }

    h1,
    h2,
    h3 {
        margin: 0;
        padding: 0;
    }

    .content {
        display: table-cell;
    }

    .content:has(img) {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        background-image: url("/assets/visard.png");
        background-size: cover;
        background-position: center;
        background-repeat: inherit;
        /* background-clip: border-box; */
        background-clip: content-box;
        /* border-left: 10px; */
    }
</style>

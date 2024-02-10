<script setup>
    import IconInfo from "@/components/IconInfo.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper
        padding_left="2rem"
        padding_right="2rem"
        padding_top="1rem"
        padding_bottom="1rem"
    >
        <div class="experience_tab">
            <h1>
                <slot name="job_title">Job title</slot>
            </h1>
            <div class="experience">
                <div class="short">
                    <div class="details_list">
                        <IconInfo icon="person_4" v-if="!!this.$slots.company">
                            <slot name="company">Company</slot>
                        </IconInfo>
                        <IconInfo icon="calendar_month" v-if="!!this.$slots.date">
                            <slot name="date">
                                <span style="color: red">
                                    Remove template tag if you want to remove the whole line with
                                    icon.
                                </span>
                            </slot>
                        </IconInfo>
                        <IconInfo icon="code" v-if="!!this.$slots.languages">
                            <slot name="languages">
                                <span style="color: red">
                                    Remove template tag if you want to remove the whole line with
                                    icon.
                                </span>
                            </slot>
                        </IconInfo>
                        <IconInfo icon="deployed_code" v-if="!!this.$slots.libraries">
                            <slot name="libraries">
                                <span style="color: red">
                                    Remove template tag if you want to remove the whole line with
                                    icon.
                                </span>
                            </slot>
                        </IconInfo>
                        <IconInfo icon="build" v-if="!!this.$slots.tools">
                            <slot name="tools">
                                <span style="color: red">
                                    Remove template tag if you want to remove the whole line with
                                    icon.
                                </span>
                            </slot>
                        </IconInfo>
                    </div>
                </div>

                <div class="description">
                    <slot name="description">Job description</slot>
                </div>
            </div>
        </div>
    </BorderWrapper>
</template>

<style scoped>
    .experience_tab {
        display: flex;
        flex-direction: column;

        width: 100%;
        font-size: calc(var(--size-text) - 2px);
    }

    .experience {
        display: flex;

        width: 100%;
        height: min-content;
    }

    .experience > * {
        width: 100%;
    }

    .short {
        /* border: solid 1px red; */
        width: 40%;
    }

    .description {
        padding-left: 1rem;
        /* border: solid 1px blue; */
    }

    h1,
    h2,
    h3 {
        margin: 0;
        padding: 0;
    }
</style>

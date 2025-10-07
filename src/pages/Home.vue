<script setup lang="ts">
    import IconLink from "@/components/IconLink.vue";
    import SectionWrapper from "@/components/base/SectionWrapper.vue";
    import AboutMeTab from "@/components/AboutMeTab.vue";
</script>

<template>
    <div class="home">
        <AboutMeTab />
        <SectionWrapper class="socials_section_wrapper">
            <h2>Find me elsewhere:</h2>
            <div class="socials">
                <IconLink icon="fluent:branch-fork-24-regular" href="https://github.com/vis4rd">
                    GitHub
                </IconLink>
                <IconLink
                    icon="fluent:people-16-regular"
                    href="https://www.linkedin.com/in/aleksander-kluczka/?locale=en_US">
                    LinkedIn
                </IconLink>
                <IconLink icon="fluent:mail-16-regular" href="mailto:aleksander.kluczka@gmail.com">
                    E-Mail
                </IconLink>
            </div>
        </SectionWrapper>
    </div>
</template>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;
    }

    .info_section_wrapper {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .socials_section_wrapper {
        padding-bottom: 2rem;
    }

    .socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
</style>

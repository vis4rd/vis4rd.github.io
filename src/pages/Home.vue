<script setup lang="ts">
    import IconLinkTile from "@/components/IconLinkTile.vue";
    import AboutMeSection from "@/components/sections/AboutMeSection.vue";
    import TileWrapper from "@/components/base/TileWrapper.vue";
    import TileBar from "@/components/TileBar.vue";
</script>

<template>
    <div class="home">
        <AboutMeSection />
        <TileBar>
            <template #left>
                <TileWrapper class="socials_label"> My socials: </TileWrapper>
                <IconLinkTile
                    icon="fluent:branch-fork-24-regular"
                    href="https://github.com/vis4rd"
                    title="My GitHub profile" />
                <IconLinkTile
                    icon="fluent:people-16-regular"
                    href="https://www.linkedin.com/in/aleksander-kluczka/?locale=en_US"
                    title="My Linked-In profile" />
                <IconLinkTile
                    icon="fluent:mail-16-regular"
                    href="mailto:aleksander.kluczka@gmail.com"
                    title="Send me an e-mail" />
            </template>
        </TileBar>
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

    .socials {
        flex-direction: row;
        gap: 0.5rem;

        padding: 0;

        outline: none;
    }

    .socials > * {
        margin-block: 0;
        height: 100%;
    }

    .socials_label {
        padding-inline: 0.5rem;
    }
</style>

<script setup lang="ts">
    import ProfilePicture from "@/components/ProfilePicture.vue";
    import SectionWrapper from "@/components/base/SectionWrapper.vue";
</script>

<template>
    <SectionWrapper class="about_me_tab_wrapper">
        <ProfilePicture src="https://avatars.githubusercontent.com/u/67486508?v=4" size="200" />
        <div class="about_me">
            <h1 class="header_with_normal_font">Hi, I'm visard!</h1>

            <p>
                I work as a C++ Software Engineer and somewhat know my way around OpenGL, web
                development and blockchain. Outside of technical stuff I play football, learn piano
                and read sci-fi books.
            </p>

            <p>Here I share my projects and blog posts. Enjoy!</p>
        </div>
    </SectionWrapper>
</template>

<style scoped>
    .about_me_tab_wrapper {
        display: flex;
        flex-direction: row;

        gap: 2rem;

        border: none !important;
        padding: 0 !important;
    }

    .about_me {
        align-self: center;
        width: 60%;

        padding-block: 0.5rem;
    }

    .about_me > p {
        margin-block: 0.7rem;
        text-align: justify;
    }

    .about_me > p:last-child {
        margin-bottom: 0;
    }

    .header_with_normal_font {
        display: inline;
        font-size: larger;
        font-weight: bold;
    }
</style>

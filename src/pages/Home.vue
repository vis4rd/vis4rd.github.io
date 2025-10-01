<script setup>
    import IconLink from "@/components/IconLink.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";
    import GreetingsSection from "@/components/GreetingsSection.vue";
    import NavigationLink from "@/components/NavigationLink.vue";
</script>

<template>
    <div class="home">
        <GreetingsSection />

        <BorderWrapper padding_top="0" padding_bottom="0">
            <div>
                <p>... and this is my website :).</p>

                <p>
                    I'm currently working at
                    <a href="https://www.nokia.com/networks/" target="_blank">Nokia</a> as a C++
                    Software Engineer.
                </p>

                <p>
                    Feel free to check out my
                    <NavigationLink href="/projects">projects</NavigationLink> or
                    <NavigationLink href="/experience">job experience</NavigationLink>.
                </p>
            </div>
        </BorderWrapper>
        <BorderWrapper padding_top="0">
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
        </BorderWrapper>
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
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
</style>

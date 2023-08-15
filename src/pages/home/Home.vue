<script setup>
    import IconLink from "@/components/IconLink.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";
    import GreetingsSection from "@/components/GreetingsSection.vue";
</script>

<template>
    <div class="home">
        <GreetingsSection />

        <BorderWrapper padding_top="0" padding_bottom="0">
            <div class="intro">
                <p>... and this is my website :).</p>

                <p>
                    I'm currently working at
                    <a href="https://www.nokia.com/networks/" target="_blank">Nokia</a> as a C++
                    Software Engineer.
                </p>

                <p>
                    I am also a master's student at
                    <a href="https://www.agh.edu.pl/en/" target="_blank">AGH UST</a> in Applied
                    Computer Science.
                </p>

                <p>
                    Feel free to checkout my <router-link to="/projects">projects</router-link> or
                    <router-link to="/experience">job experience</router-link>.
                </p>
            </div>
        </BorderWrapper>
        <BorderWrapper padding_top="0">
            <h2>Find me elsewhere:</h2>
            <div class="socials">
                <IconLink icon="fa-brands fa-github" href="https://github.com/vis4rd">
                    GitHub
                </IconLink>
                <IconLink icon="fa-brands fa-discord" title="visard / visard#6782">
                    Discord
                </IconLink>
                <IconLink
                    icon="fa-brands fa-linkedin-in"
                    href="https://www.linkedin.com/in/aleksander-kluczka/?locale=en_US"
                >
                    LinkedIn
                </IconLink>
                <IconLink icon="fa-solid fa-envelope" href="mailto:aleksander.kluczka@gmail.com">
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

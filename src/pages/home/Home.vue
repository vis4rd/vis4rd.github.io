<script setup>
import IconLink from "@/components/IconLink.vue";
</script>

<template>
    <div>
        <h1>Hi, I am visard.</h1>

        <p>And this is my website :).</p>

        <p>
            I'm currently working at
            <a href="https://www.nokia.com/networks/" target="_blank">Nokia</a> as a C++ Software
            Engineer.
        </p>

        <p>
            I am also a master's student at
            <a href="https://www.agh.edu.pl/en/" target="_blank">AGH UST</a> in Applied Computer
            Science.
        </p>

        <p>
            Feel free to checkout my <router-link to="/projects">projects</router-link> or
            <router-link to="/experience">job expierience</router-link>.
        </p>

        <hr>

        <p>
            <h3>Find me elsewhere:</h3>
            <div class="socials">
                <!-- TODO: Horizontal tiles with icons and text labels -->
                <IconLink icon="fa-brands fa-github" href="https://github.com/vis4rd">
                    GitHub
                </IconLink>
                <IconLink icon="fa-brands fa-discord" title="visard / visard#6782">
                    Discord
                </IconLink>
                <IconLink icon="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/aleksander-kluczka/?locale=en_US">
                    LinkedIn
                </IconLink>
                <IconLink icon="fa-solid fa-envelope" href="mailto:aleksander.kluczka@gmail.com">
                    E-Mail
                </IconLink>
            </div>
        </p>
    </div>
</template>

<style scoped>
.socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}
</style>

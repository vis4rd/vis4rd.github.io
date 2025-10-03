<script setup lang="ts">
    import ExperienceTab from "@/components/ExperienceTab.vue";
</script>

<template>
    <div class="experience_list">
        <ExperienceTab>
            <template #company>
                <a href="https://www.nokia.com/networks/" target="_blank">Nokia</a>
            </template>
            <template #job_title> C++ Software Engineer </template>
            <template #date> 2023.07 - present </template>
            <template #languages> C++20, Python 3.14, TTCN3 </template>
            <template #tools> CMake, Git, Jira, Gerrit, GitLab, GDB, Docker </template>
            <template #description>
                <p>
                    I got promoted to a mid software engineer, which was a great success for me. I
                    continued to improve my skills in day-to-day work and expand my knowledge about
                    how 5G networks work under the hood.
                </p>
                <p>
                    My responsibilites has expanded as well. I got involved in fixing various
                    problem reports raised by internal testers and customers.
                </p>
            </template>
        </ExperienceTab>
        <ExperienceTab>
            <template #company>
                <a href="https://www.nokia.com/networks/" target="_blank">Nokia</a>
            </template>
            <template #job_title> C++ Working Student </template>
            <template #date> 2022.04 - 2023.06 </template>
            <template #languages> C++17, Python 3.11, TTCN3 </template>
            <template #tools> CMake, Git, Jira, Gerrit, GitLab, GDB, Docker </template>
            <template #description>
                <p>
                    I joined the team as a working student and was responsible for developing new
                    features to 5G network. I cooperated with both other developers and architects.
                    Every code change had to be covered by unit and component tests.
                </p>
                <p>
                    Additionally I developed an internal tool that was used to assign code reviewers
                    to merge requests based on arbitrary rules. Here I had much greater input into
                    application design and architecture.
                </p>
                <p>
                    During this time I learned a lot about how to work in a team, but also about
                    software development, including high performance and multithreaded applications.
                </p>
            </template>
        </ExperienceTab>
        <ExperienceTab>
            <template #company>
                <a href="https://www.agh.edu.pl/en/" target="_blank">AGH UST</a>
            </template>
            <template #job_title> Master of Science in Applied Computer Science </template>
            <template #date> 2019.10 - 2025.09 </template>
            <template #languages> Rust, Anchor, Go </template>
            <template #tools> blockchain, cryptography, dApps, web3, neural networks </template>
            <template #description>
                <p>
                    I defended my master thesis at AGH UST in Applied Computer Science. Feel free to
                    check out my journey on
                    <a href="https://github.com/Aleksander-Kluczka-AGH" target="_blank">my GitHub</a
                    >.
                </p>
            </template>
        </ExperienceTab>
    </div>
</template>

<style scoped>
    .experience_list {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;
    }

    .experience_list p {
        margin: 0;
        padding: 0;
        padding-bottom: 1rem;
    }
    .experience_list p:last-child {
        padding: 0;
    }
</style>

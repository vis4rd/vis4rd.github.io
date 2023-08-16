<script setup>
    import ProjectTab from "@/components/ProjectTab.vue";
</script>

<template>
    <div class="projects">
        <ProjectTab>
            <template #title>My own website</template>
            <template #date>2023</template>
            <template #href>
                <a href="https://github.com/vis4rd/vis4rd.github.io"
                    >https://github.com/vis4rd/vis4rd.github.io</a
                >
            </template>
            <template #languages>Vue 3</template>
            <template #libraries>Vite, Google Fonts, FontAwesome</template>
            <template #content>
                <img src="/assets/visard.png" />
            </template>
        </ProjectTab>

        <ProjectTab>
            <template #title>Pydocstyle Gitlab CQ report</template>
            <template #date>2023</template>
            <template #href>
                <a href="https://github.com/vis4rd/pydocstyle-gitlab-code-quality">
                    https://github.com/vis4rd/pydocstyle-gitlab-code-quality
                </a>
            </template>
            <template #languages>Python 3.7-3.11</template>
            <template #libraries>Black, isort, mypy, pylint, pydocstyle</template>
            <template #content>
                It is a simple script which converts default pydocstyle output into Gitlab Code
                Quality report. This report displays all errors and warnings in Gitlab UI, in
                example after Merge Request pipeline is finished.
            </template>
        </ProjectTab>

        <ProjectTab>
            <template #title>Monoshot game</template>
            <template #date>2022</template>
            <template #href>
                <a href="https://github.com/vis4rd/monoshot/tree/dev"
                    >https://github.com/vis4rd/monoshot/tree/dev</a
                >
            </template>
            <template #languages>C++, GLSL, CMake</template>
            <template #libraries>OpenGL, GLFW, ImGui, EnTT</template>
            <template #content>
                <img src="/assets/monoshot.png" />
            </template>
        </ProjectTab>

        <ProjectTab>
            <template #title>University labs and projects</template>
            <template #date>2019 - 2023</template>
            <template #href>
                <a href="https://github.com/orgs/Aleksander-Kluczka-AGH/repositories"
                    >My GitHub organization</a
                >
            </template>
            <template #languages>12+ programming languages</template>
            <template #libraries>20+ libraries and frameworks</template>
            <template #content>
                <img src="/assets/agh-ust.jpg" />
            </template>
        </ProjectTab>
    </div>
</template>

<style scoped>
    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;
    }
</style>

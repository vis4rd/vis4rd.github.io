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
            <template #title>Monoshot game</template>
            <template #date>2022</template>
            <template #href>
                <a href="https://github.com/vis4rd/monoshot/tree/dev"
                    >https://github.com/vis4rd/monoshot/tree/dev</a
                >
            </template>
            <template #languages>C++, GLSL</template>
            <template #libraries>OpenGL, GLFW, ImGui, EnTT</template>
            <template #content>
                <img src="/assets/monoshot.png" />
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

<script setup>
    import ProjectTab from "@/components/ProjectTab.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper>
        <ProjectTab>
            <template #title>My own website</template>
            <template #date>2022</template>
            <template #href>
                <a href="https://github.com/vis4rd/vis4rd.github.io">GitHub</a>
            </template>
            <template #languages>Vue 3</template>
            <template #libraries>Vite, Google Fonts, FontAwesome</template>
        </ProjectTab>
    </BorderWrapper>
</template>

<style scoped></style>

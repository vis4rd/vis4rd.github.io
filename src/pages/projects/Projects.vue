<script setup>
    import ProjectTab from "@/components/ProjectTab.vue";
</script>

<template>
    <ProjectTab>
        <template #title>My own website</template>
        <template #date>2023</template>
        <template #href>
            <a href="https://github.com/vis4rd/vis4rd.github.io">GitHub</a>
        </template>
        <template #languages>Vue 3</template>
        <template #libraries>Vite, Google Fonts, FontAwesome</template>
        <template #content><img /></template>
    </ProjectTab>
</template>

<style scoped></style>

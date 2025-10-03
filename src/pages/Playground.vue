<script setup lang="ts">
    import IconLink from "@/components/IconLink.vue";
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper>
        <h1>Playground :)</h1>
        Header part Main part
        <mark>Marked text</mark>
        <em>Em text</em>
        <strong>Strong text</strong>
        <sub>Subscripted text</sub>
        <sup>Superscripted text</sup>
        <s>S text</s>
        <output>Output text</output>
        <meter min="0" max="10" value="6" />
        <kbd>Keyboard key</kbd>
        <dialog>Oof</dialog>
        <aside>Aside content</aside>
        <IconLink icon="fa-home">icon yeah</IconLink>
    </BorderWrapper>
</template>

<style scoped></style>

<script setup lang="ts">
    import IconLinkTile from "@/components/IconLinkTile.vue";
    import SectionWrapper from "@/components/base/SectionWrapper.vue";
</script>

<template>
    <SectionWrapper>
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
        <IconLinkTile icon="fa-home">icon yeah</IconLinkTile>
    </SectionWrapper>
</template>

<style scoped></style>

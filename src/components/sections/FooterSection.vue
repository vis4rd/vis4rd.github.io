<script setup lang="ts">
    import SectionWrapper from "@/components/base/SectionWrapper.vue";
</script>

<template>
    <SectionWrapper class="footer_section_wrapper">
        <div class="footer_section">
            Made by <a href="https://github.com/vis4rd" target="_blank">me</a>.
            <br />
            Icons by <a href="https://iconify.design/" target="_blank">Iconify</a>. Fonts by
            <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>.
        </div>
    </SectionWrapper>
</template>

<style scoped>
    .footer_section_wrapper {
        border-style: dashed;
        padding-block: 0.5rem;
    }

    .footer_section {
        text-align: center;
        color: var(--color-a-disabled);
    }
</style>

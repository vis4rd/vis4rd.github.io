<script setup lang="ts">
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper padding_left="0" padding_right="0">
        <div class="footer_section">
            Made by <a href="https://github.com/vis4rd" target="_blank">me</a>.
            <br />
            Icons by <a href="https://iconify.design/" target="_blank">Iconify</a>. Fonts by
            <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>.
        </div>
    </BorderWrapper>
</template>

<style scoped>
    .border_wrapper {
        border-style: dashed;
    }

    .footer_section {
        text-align: center;
        color: var(--color-a-disabled);
    }
</style>

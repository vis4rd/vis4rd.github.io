<script setup>
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper padding_left="0" padding_right="0">
        <div class="footer_section">
            © {{ new Date(Date.now()).getUTCFullYear() }} visard. All Rights Reserved.
            <br />
            Icons used from <a href="https://iconify.design/" target="_blank">Iconify</a>. Fonts
            used from <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> and
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

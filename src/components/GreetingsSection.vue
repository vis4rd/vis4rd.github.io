<script setup>
    import ProfilePicture from "@/components/ProfilePicture.vue";
</script>

<template>
    <div class="greetings_section">
        <span class="left_border_shift"></span>
        <span class="profile_picture_wrapper">
            <ProfilePicture :size="160" />
        </span>
        <span class="greetings">
            <h1>Hi! I am visard.</h1>
        </span>
    </div>
</template>

<style scoped>
    .greetings_section {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;

        width: 70%;
        max-width: 960px;
        height: 100%;

        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .left_border_shift {
        min-width: 84px;
        height: 170px;
    }
    .profile_picture_wrapper {
        position: absolute;
    }
    .greetings {
        display: flex;
        flex-direction: row;
        place-items: center;
        place-content: center;

        padding: 0px;
        margin: 0px;

        width: 100%;

        border-style: solid;
        border-radius: 6px;
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);

        border-left-style: none;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
</style>

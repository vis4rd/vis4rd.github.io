<script setup></script>

<template>
    <div>
        <h1>Page not found (404).</h1>

        <hr />
        <div class="ohno-img">
            <img src="@/../assets/ohno-anyway.jpg" alt="Oh no! Anyway" width="300" />
        </div>
        <hr />

        <p>
            The page you are looking for does not exist. However, you might find something by
            searching through the <router-link to="/">home page</router-link>.
        </p>
    </div>
</template>

<style scoped>
    .ohno-img {
        display: flex;
        flex-direction: column;
        place-content: center;
        margin: 0 200px;
    }
    img {
        margin: 1rem;
    }
</style>

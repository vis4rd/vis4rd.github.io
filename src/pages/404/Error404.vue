<script setup>
    import BorderWrapper from "@/components/BorderWrapper.vue";
</script>

<template>
    <BorderWrapper>
        <div>
            <h1>Page not found (404).</h1>

            <hr />
            <div class="ohno-img">
                <img
                    src="/assets/ohno-anyway.jpg"
                    alt="Even loading images does not work :(. Here should be 'Oh no! Anyway' image."
                    width="300"
                />
            </div>
            <hr />

            <p>
                The page you are looking for does not exist. However, you might find something by
                searching through the <router-link to="/">home page</router-link>.
            </p>
        </div>
    </BorderWrapper>
</template>

<style scoped>
    .ohno-img {
        display: flex;
        flex-direction: column;
        place-items: center;
        padding: 0;
    }
    img {
        display: flex;
        flex-direction: column;
        text-align: center;
        place-items: center;
        place-content: center;

        font-size: 0.85rem;

        margin: 1rem;

        border-style: dotted;
        border-color: var(--color-element-border);
        border-width: 2px;

        padding: 3px;
    }
</style>

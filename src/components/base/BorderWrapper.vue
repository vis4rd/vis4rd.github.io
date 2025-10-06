<template>
    <div class="border_wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
    .border_wrapper {
        display: flex;
        flex-direction: column;
        place-items: center;
        box-sizing: border-box;

        border-style: solid;
        border-radius: var(--radius-border);
        border-width: var(--width-section-border);
        border-color: var(--color-section-border);
    }
</style>

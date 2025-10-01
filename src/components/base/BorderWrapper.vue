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

        outline-width: 1px;
        outline-color: var(--color-section-border);
        outline-style: solid;
        border-radius: var(--radius-border);
    }
</style>

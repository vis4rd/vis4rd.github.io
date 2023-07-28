<script setup>
    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: "lg",
        },
        href: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
    });

    function go_to_link() {
        if (props.href !== "") {
            window.open(props.href, "_blank");
        }
    }
</script>

<template>
    <div class="icon_link">
        <font-awesome-icon
            class="icon_part"
            :icon="props.icon"
            :size="props.size"
            @click="go_to_link()"
        ></font-awesome-icon>
        <a
            class="slot_part"
            :href="props.href"
            :title="props.title"
            :disabled="props.disabled"
            :active="props.active"
            target="_blank"
        >
            <slot></slot>
        </a>
    </div>
</template>

<style scoped>
    .icon_link {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: fit-content;

        border-bottom-style: dotted;
        border-width: 2px;
        border-color: var(--color-a);

        transition: var(--time-transition);
    }
    .icon_part {
        padding: 0.4rem;
        padding-right: 0.25rem;
    }
    .slot_part {
        padding: 0.4rem;
        padding-left: 0.25rem;
    }

    .icon_link:hover {
        border-color: var(--color-a-hover);
        transition: var(--time-transition);
        cursor: pointer;
    }
    .icon_link:hover .slot_part {
        color: var(--color-a-hover);
    }
</style>

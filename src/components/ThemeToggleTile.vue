<script setup lang="ts">
    import { Icon } from "@iconify/vue";
    import { computed, onMounted, onUnmounted, ref } from "vue";
    import TileWrapper from "@/components/base/TileWrapper.vue";

    type Theme = "light" | "dark";
    type Mode = "system" | Theme;
    const THEME_MODE_KEY = "themeMode";

    const size = 24;
    const mode = ref<Mode>("system");

    function systemPreferredTheme(): Theme {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    const appliedTheme = computed<Theme>(() =>
        mode.value === "system" ? systemPreferredTheme() : mode.value
    );

    function cycleMode() {
        const next: Mode =
            mode.value === "system" ? "dark" : mode.value === "dark" ? "light" : "system";
        setMode(next);
    }

    function setMode(newMode: Mode) {
        mode.value = newMode;
        try {
            localStorage.setItem(THEME_MODE_KEY, newMode);
        } catch {
            /* ignore */
        }
        // Update attribute when explicit, otherwise let system drive (index.html also sets this early)
        document.documentElement.setAttribute("data-theme", appliedTheme.value);
    }

    let mql: MediaQueryList | null = null;
    function handleSystemChange(e: MediaQueryListEvent) {
        if (mode.value === "system") {
            document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
        }
    }

    onMounted(() => {
        // When following system, update on OS theme changes
        if (window.matchMedia) {
            mql = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                mql.addEventListener("change", handleSystemChange);
            } catch {
                // Safari/iOS fallback
                // @ts-ignore
                mql.addListener(handleSystemChange);
            }
        }
    });

    onUnmounted(() => {
        if (mql) {
            try {
                mql.removeEventListener("change", handleSystemChange);
            } catch {
                // @ts-ignore
                mql.removeListener(handleSystemChange);
            }
        }
    });

    const iconName = computed(() => {
        if (mode.value === "system") return "fluent:weather-partly-cloudy-day-16-regular";
        return appliedTheme.value === "dark"
            ? "fluent:weather-sunny-16-regular"
            : "fluent:weather-moon-16-regular";
    });
    const title = computed(() => {
        if (mode.value === "system") return "Theme: System (follows OS). Click to switch to Dark";
        return appliedTheme.value === "dark"
            ? "Theme: Dark. Click to switch to Light"
            : "Theme: Light. Click to switch to System";
    });
</script>

<!-- Icon search: https://icon-sets.iconify.design/fluent/?keyword=weather -->

<template>
    <TileWrapper class="theme_toggle_tile_wrapper">
        <button
            class="theme_toggle_tile"
            type="button"
            :title="title"
            :aria-label="title"
            :aria-pressed="appliedTheme === 'dark'"
            @click="cycleMode">
            <Icon class="theme_toggle_tile_icon" :icon="iconName" :width="size" :height="size" />
        </button>
    </TileWrapper>
</template>

<style scoped>
    .theme_toggle_tile_wrapper {
        padding: 0;
        height: 100%;
    }

    .theme_toggle_tile {
        display: flex;
        place-items: center;
        place-content: center;
        color: var(--color-heading);

        border-radius: var(--radius-border);
        border: none;
        background: transparent;

        padding: 0;

        height: 100%;
        aspect-ratio: 1 / 1;

        transition: var(--time-transition);
        cursor: pointer;
    }

    .theme_toggle_tile:hover {
        background-color: var(--color-element-bg-hover);
        color: var(--color-border-hover);
    }

    .theme_toggle_tile_icon {
        padding: 0.5rem;
    }
</style>

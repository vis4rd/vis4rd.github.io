<script setup lang="ts">
    import NavigationTile from "@/components/NavigationTile.vue";
    import TileBar from "@/components/TileBar.vue";
</script>

<template>
    <TileBar>
        <template #left>
            <NavigationTile class="expand" />
        </template>
    </TileBar>
</template>

<style scoped>
    .expand {
        width: 100%;
    }
</style>

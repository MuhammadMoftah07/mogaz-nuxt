<template>
  <main class="">
    <ThemeTitle text="الروايات" />
    <ThemeInput v-model="value" />
    <ThemeTable />
  </main>
</template>

<script lang="ts" setup>
const value = ref("test");
</script>

<style></style>

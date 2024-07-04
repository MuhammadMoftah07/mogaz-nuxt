<template>
  <div>
    <ThemeTitle text="الرئيسية" />
    <ThemeCommingSoon class="mt-16" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});
</script>

<style></style>

<template>
  <main class="">
    <ThemeTitle class="mb-6" text="الروايات" />
    <!-- <ThemeInput v-model="value" /> -->
    <ThemeTable :items="data" :headers="headers" :loading="loading">
      <template #cell(status)="data"> testt </template>
    </ThemeTable>
    {{ $modal }}

    <RewayaCreate v-if="$modal.value == 'CreateRewaya'" />
    <ThemePlusButton
      @click.native="($modal.value = 'CreateRewaya'), console.log(useNuxtApp())"
    />
  </main>
</template>

<script lang="ts" setup>
// const value = ref("test");
const loading = ref(true);
await useRewayaStore().fetchData();
loading.value = false;
const data = computed(() => useRewayaStore().data);

const headers = [
  { text: "العنوان", value: "title" },
  { text: "الحالة", value: "status" },
  { text: "عدد الطلاب", value: "student_count" },
];
</script>

<style></style>

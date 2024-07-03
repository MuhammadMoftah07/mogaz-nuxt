<template>
  <main class="">
    <ThemeTitle class="mb-6" text="الروايات" />
    <ThemeTable :items="data" :headers="headers" :loading="loading">
      <template #status="item"> {{ item.status }} </template>

      <template #actions="item"> </template>
    </ThemeTable>

    <RewayaCreate v-if="$modal.value == 'CreateRewaya'" />
    <ThemePlusButton @click.native="$modal.value = 'CreateRewaya'" />
  </main>
</template>

<script lang="ts" setup>
// const value = ref("test");
const $t = useI18n().t;
const loading = ref(true);
await useRewayaStore().fetchData();
loading.value = false;
const data = computed(() => useRewayaStore().data);

const headers = computed(() => {
  return [
    { text: $t("title"), value: "title" },
    { text: $t("status"), value: "status" },
    { text: $t("actions"), value: "actions" },
    // { text: "عدد الطلاب", value: "student_count" },
  ];
});
</script>

<style></style>

<template>
  <main class="">
    <ThemeTitle class="mb-6" text=" داتا" />
    <ThemeTable :items="data" :headers="headers" :loading="loading == 'table'">
      <template #verify="item">
        <span
          class="grid px-2 py-1 text-xs rounded-sm w-fit bg-emerald-500 place-content-center text-emerald-50"
          v-if="item.verify == 1"
        >
          نعم
        </span>
        <span
          v-if="item.verify == 0"
          class="grid px-2 py-1 text-xs bg-red-500 rounded-sm w-fit place-content-center text-red-50"
        >
          لا</span
        >
      </template>
      <template #actions="item">
        <div class="flex items-center gap-2"></div>
      </template>
    </ThemeTable>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});
const $t = useI18n().t;

const loading = ref("");
const activeData = ref("");
await useDataStore().fetchData();
loading.value = "";
const data = computed(() => useDataStore().data);

const headers = computed(() => {
  return [
    { text: $t("name"), value: "name" },
    { text: $t("nationality"), value: "nationality" },
    { text: $t("gender"), value: "gender" },
    { text: $t("qualification"), value: "qualification" },
    { text: $t("job"), value: "job" },
    { text: $t("verified"), value: "verify" },
    { text: $t("status"), value: "status.title" },
    { text: $t("course"), value: "user_course_request.course.title" },
    // { text: "ID", value: "id", width: 100 },
    { text: $t("actions"), value: "actions" },
  ];
});
</script>

<style></style>

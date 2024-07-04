<template>
  <main class="">
    <ThemeTitle class="mb-6" text="الروايات" />
    <ThemeTable :items="data" :headers="headers" :loading="loading">
      <template #status="item"> {{ item.status }} </template>

      <template #actions="item">
        <div class="flex items-center gap-2">
          <button type="button" class="edit-btn tooltip" data-tip="تعديل">
            <IconsEditIcon2 class="w-5 h-[18px]" />
          </button>

          <button type="button" class="del-btn tooltip" data-tip="مسح">
            <IconsDeleteIcon class="w-5 h-[18px]" />
          </button>
        </div>
      </template>
    </ThemeTable>

    <RewayaCreate v-if="$modal.value == 'CreateRewaya'" />
    <ThemePlusButton @click.native="$modal.value = 'CreateRewaya'" />
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});

const $t = useI18n().t;
const loading = ref(true);
await useRewayaStore().fetchData();
loading.value = false;
const data = computed(() => useRewayaStore().data);

const headers = computed(() => {
  return [
    { text: $t("title"), value: "title" },
    // { text: "ID", value: "id", width: 100 },
    // { text: $t("status"), value: "status" },
    { text: $t("actions"), value: "actions" },
    // { text: "عدد الطلاب", value: "student_count" },
  ];
});
</script>

<style></style>

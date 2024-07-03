<template>
  <main class="">
    <ThemeTitle class="mb-6" text="الكورسات" />
    <ThemeTable :items="data" :headers="headers" :loading="loading">
      <template #status="item"> {{ item.status }} </template>

      <template #actions="item">
        <div class="flex items-center gap-2">
          <button type="button" class="edit-btn">
            <IconsEditIcon2 class="w-5 h-[18px]" />
          </button>

          <button type="button" class="del-btn">
            <IconsDeleteIcon class="w-5 h-[18px]" />
          </button>
        </div>
      </template>
    </ThemeTable>

    <RewayaCreate v-if="$modal.value == 'CreateCourse'" />
    <!-- <ThemePlusButton @click.native="$modal.value = 'CreateCourse'" /> -->
  </main>
</template>

<script lang="ts" setup>
// const value = ref("test");
const $t = useI18n().t;
const loading = ref(true);
await useCourseStore().fetchData();
loading.value = false;
const data = computed(() => useCourseStore().data);

const headers = computed(() => {
  return [
    { text: $t("title"), value: "title" },
    // { text: "ID", value: "id", width: 100 },
    { text: $t("rewaya"), value: "rewaya.title" },
    { text: $t("sheikh"), value: "teacher.name" },
    { text: $t("description"), value: "desc" },
    { text: $t("status"), value: "status" },
    { text: $t("actions"), value: "actions" },
    // { text: "عدد الطلاب", value: "student_count" },
  ];
});
</script>

<style></style>

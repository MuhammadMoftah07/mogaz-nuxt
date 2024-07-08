<template>
  <main class="">
    <ThemeTitle class="mb-6" text=" الشيوخ" />
    <ThemeTable :items="data" :headers="headers" :loading="loading">
      <template #actions="item">
        <div class="flex items-center gap-2">
          <button type="button" class="action-btn tooltip" data-tip="تعديل">
            <IconsEditIcon2 class="w-5 h-[18px]" />
          </button>

          <button type="button" class="del-btn tooltip" data-tip="مسح">
            <IconsDeleteIcon class="w-5 h-[18px]" />
          </button>
        </div>
      </template>
    </ThemeTable>

    <RewayaCreate v-if="$modal.value == 'CreateRewaya'" />
    <!-- <ThemePlusButton @click.native="$modal.value = 'CreateRewaya'" /> -->
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});

const $t = useI18n().t;
const loading = ref(true);
await useSheikhStore().fetchData();
loading.value = false;
const data = computed(() => useSheikhStore().data);

const headers = computed(() => {
  return [
    { text: $t("name"), value: "name" },
    { text: $t("nationality"), value: "nationality" },
    { text: $t("gender"), value: "gender" },
    { text: $t("qualification"), value: "qualification" },
    { text: $t("job"), value: "job" },
    // { text: "ID", value: "id", width: 100 },
    { text: $t("actions"), value: "actions" },
  ];
});
</script>

<style></style>
